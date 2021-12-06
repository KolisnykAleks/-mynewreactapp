import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import './carForm.css';

const inputsMeta = {
  id: {
    placeholder: "id",
  },
  imageUrl: {
    placeholder: "imageUrl",
  },
  name: {
    placeholder: "name",
  },
  model: {
    placeholder: "model",
  },
  ownerFirstName: {
    placeholder: "ownerFirstName",
  },
  ownerLastName: {
    placeholder: "ownerLastName",
  },
  
  type: {
    placeholder: "type",
  },
  fuelType: {
    placeholder: "fuelType",
  },
  vin: {
    placeholder: "vin",
  },
  color: {
    placeholder: "color"
  }
}

const CarForm = ({submitText, car, onFormSubmit}) => {
  // const [carState, setCarState] = useState({
  //   imageUrl: "",
  //   ownerFirstName: "",
  //   name: "",
  //   ownerLastName: ""
  // });
  const [carState, setCarState] = useState({})

  useEffect(() => {
    if(!car) {
      return;
    }
    setCarState(car)
  }, [car])

  // const {name, ownerFirstName, imageUrl, ownerLastName} = carState;

  const handleFormInputChange = useCallback((e) => {
    setCarState({...carState, [e.target.name]: e.target.value})
  },[carState])

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault()
    onFormSubmit(carState)

    // setCarState({
    //   imageUrl: "",
    //   ownerFirstName: "",
    //   name: "",
    //   ownerLastName: ""

    // })
  },[onFormSubmit, carState])

  // renderItemsForm(arr) {
  //   const items = arr.map(item => {
  //     return (
  //       <div className="form-group">
  //           <input
  //             type="text"
  //             className="form-input"
  //             placeholder="Enter Your Name"
  //             name="name"
  //             value={item.name}
  //             onChange={handleFormInputChange}
  //           />
  //         </div>
  //     )
  //   })
  // }
   
    return (
      
      <form onSubmit={handleFormSubmit}>
        <div className="container-input">
          {
            Object.entries(inputsMeta).map(
              ([name, {placeholder}]) => (
                <div className="form-group" key={name} >
                  <input
                  type="text"
                  className="form-input"
                  name={name}
                  placeholder={placeholder}
                  value={carState[name] || ""}
                  onChange={handleFormInputChange}
                />
                </div>
              )
            )
          }
          {/* <div className="form-group">
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
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Enter image's url"
              name="imageUrl"
              value={ownerLastName}
              onChange={handleFormInputChange}
            />
          </div> */}
        </div>
        
        <div className="container button">
          {/* <button className="btn" >Add Car{submitText}</button> */}
          <button className="btn" >{submitText}</button>

        </div>

      </form>
    )
}


export default CarForm;
CarForm.propTypes = {
  car: PropTypes.object,
  onFormSubmit: PropTypes.func,
  submitText: PropTypes.string
};