import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import './carForm.css';


const CarForm = ({car, onFormSubmit}) => {
  const [carState, setCarState] = useState({
    imageUrl: "",
    ownerFirstName: "",
    name: "",
  });

  useEffect(() => {
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
  onFormSubmit: PropTypes.func
};