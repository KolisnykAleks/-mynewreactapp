import React from 'react';
import { Component } from 'react';
import './car.css';
import CarService from '../services/CarService';
import Spinner from './spinner/spinner';
import ErrorMessage from './errorMessage/errorMessages';
import Form from './form';


class Car extends Component {

    state = {
        car: [],
        loading: true,
        error: false
    }
    
    carService = new CarService();

    componentDidMount() {
        this.carService.getAllCars(`http://localhost:3005/cars`)
            .then(this.onCarsLoaded)
            .catch(this.onError)
    }
    onCarsLoaded = (car) => {
        this.setState({
            car,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderItems(arr) {
        const items =  arr.map((item) => {
            
            return (
                <li className="cards-item" key={item.id}>
                    <img src={item.photo} alt="dog" />
                    <div className="item-text">
                        <div className="item-subtitle">{item.ownerFirstName}</div>
                        <div className="item-descr">{item.name}</div>
                    </div>
                </li>
            )
        });

        return (
            <ul className="dog-grid">
                {items}
            </ul>
        )
    }

    render() {

        const {car, loading, error} = this.state;
        
        const items = this.renderItems(car);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
                <div className="cards">
                    <div className="title">Cars page</div>
                    <Form />
                    <div className="cards-container">
                        {errorMessage}
                        {spinner}
                        {content} 
                    </div>
                </div>
        )
    }
}

export default Car;