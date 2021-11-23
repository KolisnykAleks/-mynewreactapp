import { Component } from 'react';
import './cards.css';
import DogService from '../services/DogService';
import Spinner from './spinner/spinner';
import ErrorMessage from './errorMessage/errorMessages';


class Cards extends Component {

    state = {
        dog: [],
        loading: true,
        error: false
    }
    
    dogService = new DogService();

    componentDidMount() {
        this.dogService.getAllDogs(`https://api.thedogapi.com/v1/breeds?limit=10&page=0`)
            .then(this.onDogLoaded)
            .catch(this.onError)
    }
    onDogLoaded = (dog) => {
        this.setState({
            dog,
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
                    <img src={item.imageUrl} alt="dog" />
                    <div className="item-text">
                        <div className="item-subtitle">{item.name}</div>
                        <div className="item-descr">{item.temperament}</div>
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

        const {dog, loading, error} = this.state;
        

        const items = this.renderItems(dog);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
                <div className="cards">
                    <div className="title">Product page</div>
                    <div className="cards-container">
                        {errorMessage}
                        {spinner}
                        {content} 
                    </div>
                </div>
        )
    }
}

export default Cards;