import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom';

// import { fetchCarList } from './CarsSlice';
import CarService from '../../services/CarService';
import Spinner from '../../components/spinner/spinner';
import ErrorMessage from '../../components/errorMessage/errorMessages';

import './CarsPage.css';
///////////////
// import {  useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
///////

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

///////////////////////////
    // dispatch = useDispatch();
    // useEffect(() => {
    // dispatch(fetchCarList())
    // }, []);
//////////////////////////////////

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
    deleteCar = async id => {
        await axios.delete(`http://localhost:3005/cars/${id}`);
        this.componentDidMount()
      };

    editCar = async id => {
        await axios.put(`http://localhost:3005/cars/${id}`);
        
    }
    
    renderItems(arr) {
        const items =  arr.map((item) => {
            return (
                <li className="cards-item" key={item.id}>
                    <img src={item.imageUrl} alt="dog" />
                    <div className="item-text">
                        <div className="item-subtitle">{item.ownerFirstName}</div>
                        <div className="item-descr">{item.name}</div>
                    </div>
                    <div className="btn-link">
                        <NavLink to={`/products/${item.id}`} className="btn-moreDetails ">More</NavLink>

                        <a
                            className="btn-del"
                            onClick={() => this.deleteCar(item.id)}
                        >
                            Delete
                        </a>
                        <Link
                            className="btn-edit"
                            onClick={() => this.editCar(item.id)}
                            to={`/products/edit/${item.id}`}
                        >
                            Edit
                        </Link>
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