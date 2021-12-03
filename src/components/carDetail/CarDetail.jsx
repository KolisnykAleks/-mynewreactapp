
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import './carDetail.css';

const CarDetail = () => {
  const [car, setCar] = useState({
    name: "",
    ownerFirstName: "",
    imageUrl: ""
  });

  const { id } = useParams();
  useEffect(() => {
    loadCar();
  }, []);
  const loadCar = async () => {
    const res = await axios.get(`http://localhost:3005/cars/${id}`);
    // const res = await axios.get(`http://localhost:3005/cars/61a5f63da9c1f0de9886f8e0`);
    console.log(res)
    setCar(res.data);
  };
  return (
    <div className="">
      <Link className="" to="/products">
        back to all cars
      </Link>
      <div className="detail-image">
        <img src={car.imageUrl} alt="detail-image" />
      </div>
      <h1 className="display-4">Car Id: {car._id}</h1>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">name: {car.name}</li>
        <li className="list-group-item">ownerFirstName: {car.ownerFirstName}</li>
      </ul>
    </div>
  );
};

export default CarDetail;

// import React from 'react';
// import { createBrowserHistory } from 'history';
// import './carDetail.css';
// // import CarForm from '../carsForm/CarForm';


// const CarDetail = () => {
  

//     return (
//         <div>
//             <div>
//                 <h2>More details</h2>
//             </div>
//             <div>
//                 <img src="https://www.purinaone.ru/cat/sites/default/files/2019-03/article_indoor-outdoor.jpg" alt="detail-image" />
//             </div>
//             <div>
//             </div>
//         </div>
//     )
// }

// export default CarDetail;




// import React from 'react';
// import { Component } from 'react';
// import '../card.css';
// import CarService from '../../services/CarService';


// class CarDetail extends Component {

//     state = {
//         dog: []
//     }
    
//     carService = new CarService();

//     componentDidMount() {
//         this.carService.getCar(`61a5f63da9c1f0de9886f8e0`)
//             .then(this.onDogLoaded)
//     }
//     onDogLoaded = (dog) => {
//         this.setState({
//             dog
//         })
//     }

//     render() {
//         const {dog: {id, imageUrl, name, ownerFirstName}} = this.state;

        
//             return (
//                 <li className="cards-items" key={id}>
//                     <img src={imageUrl} alt="dog" />
//                     <div className="menu__item-text">
//                         <div className="menu__item-subtitle">{name}</div>
//                         <div className="menu__item-descr">{ownerFirstName}</div>
//                     </div>
//                 </li>
//             )
        

       
//     }
// }

// export default CarDetail;