
// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// import './carEdit.css';
// import CarForm from "../carsForm/CarForm";

// const CarEdit = () => {
//   const [car, setCar] = useState({
//     name: "",
//     ownerFirstName: "",
//     imageUrl: ""
//   });

//   const { id } = useParams();
//   console.log(id)
//   useEffect(() => {
//     loadCar();
//   }, []);
//   const loadCar = async () => {
//     const res = await axios.get(`http://localhost:3005/cars/${id}`);
//     // const res = await axios.get(`http://localhost:3005/cars/61a5f63da9c1f0de9886f8e0`);
//     console.log(res)
//     setCar(res.data);
//   };
//   return (
//     <div className="">
//       <Link className="" to="/products">
//         back to all cars
//       </Link>
//       <div className="detail-image">
//         <img src={car.imageUrl} alt="detail-image" />
//       </div>
//       <h1 className="display-4">Car Id: {car._id}</h1>
//       <hr />
//       <ul className="list-group">
//         <li className="list-group-item">name: {car.name}</li>
//         <li className="list-group-item">ownerFirstName: {car.ownerFirstName}</li>
//       </ul>
//       <hr />
//       <CarForm />
//     </div>
//   );
// };

// export default CarEdit;

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
// import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { useNavigate } from 'react-router';

import './carEdit.css';
// import CarDetail from '../carDetail/CarDetail';






const CarEdit = () => {
  let navigation = useNavigate();

  const history = createBrowserHistory();
  const { id } = useParams();
  console.log(id)
  // let history = useHistory();
    // const [carState, setCarState] = useState(defaultCarValues);
    const [carState, setCarState] = useState({
      imageUrl: "",
      ownerFirstName: "",
      name: "",
    });
 console.log(carState)

useEffect(() => {
    loadCar()
    // setCarState(car)
  },[])

 const loadCar = async () => {
    //  e.preventDefault()
        const result = await axios.get(`http://localhost:3005/cars/${id}`);
        // const result = await axios.get(`http://localhost:3005/cars/61a72df01ab6418c3c4fab44`);
        setCarState(result.data);
      };
    // useEffect(() => {
    //   // console.log('effect')
    //   if(!car) {
    //     return;
    //   }
    //   setCarState(car)
    // }, [car])
    const onSubmit = async e => {
        e.preventDefault();
        // await axios.put(`http://localhost:3005/cars/61a72df01ab6418c3c4fab44`, carState);
        await axios.put(`http://localhost:3005/cars/${id}`, carState);

        history.push("/");
        navigation("/products")
      };
    const {name, ownerFirstName, imageUrl} = carState;

    const handleFormInputChange = useCallback((e) => {
      setCarState({...carState, [e.target.name]: e.target.value})
    },[carState])

    // const handleFormSubmit = () => {
    //     e.preventDefault()
    //     console.log(carState)

    // }
    // const onFormSubmit = () => {
        
    // }
    // const handleFormSubmit = useCallback((e) => {
    //   e.preventDefault()
    //   console.log("carState :", carState)
    //   onFormSubmit(carState)

    //   setCarState({
    //     imageUrl: "",
    //     ownerFirstName: "",
    //     name: "",

    //   })
    // },[onFormSubmit, carState])

   

    return (
        <>
        <div className="edit-big-image">
            <img src={carState.imageUrl} alt="edit-big-image" />
        </div>
        <hr/>
        {/* <CarDetail /> */}
       {/* <form onSubmit={handleFormSubmit}> */}
      <form onSubmit={onSubmit}>
        <div className="container-input">
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={handleFormInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Enter owner's first name"
              name="ownerFirstName"
              value={ownerFirstName}
              onChange={handleFormInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Enter image's url"
              name="imageUrl"
              value={imageUrl}
              onChange={handleFormInputChange}
            />
          </div>
        </div>
        
        <div className="container button">
          <button className="btn" >Save changes</button>
        </div>

      </form>
      </>
    )

}

export default CarEdit;