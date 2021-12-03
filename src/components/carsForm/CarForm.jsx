import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
// import { createBrowserHistory } from 'history';
import './carForm.css';



// const defaultCarValues = {
//     imageUrl: "",
//     ownerFirstName: "",
//     name: "",
// }


const CarForm = ({car, onFormSubmit}) => {
  console.log(car)
  // const history = createBrowserHistory();
  // let history = useHistory();
    // const [carState, setCarState] = useState(defaultCarValues);
    const [carState, setCarState] = useState({
      imageUrl: "",
      ownerFirstName: "",
      name: "",
    });
//  console.log(carState)

 
    useEffect(() => {
      // console.log('effect')
      if(!car) {
        return;
      }
      setCarState(car)
    }, [car])
    const {name, ownerFirstName, imageUrl} = carState;

    const handleFormInputChange = useCallback((e) => {
      setCarState({...carState, [e.target.name]: e.target.value})
    },[carState])


    const handleFormSubmit = useCallback((e) => {
      e.preventDefault()
      console.log("carState :", carState)
      onFormSubmit(carState)

      setCarState({
        imageUrl: "",
        ownerFirstName: "",
        name: "",

      })
    },[onFormSubmit, carState])

   

    return (
      <form onSubmit={handleFormSubmit}>
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
          <button className="btn" >Add Car</button>
        </div>

      </form>
    )

}


export default CarForm;
CarForm.propTypes = {
  car: PropTypes.object,
  onFormSubmit: PropTypes.func.isRequired
};
// CarForm.defaultProps = {
//   car: null,
//   onFormSubmit: ''
// };