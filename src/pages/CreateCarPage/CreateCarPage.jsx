import React from 'react';
// import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import CarForm from "../../components/carsForm/CarForm";
import axios from 'axios';

import './CreateCarPage.css';

function CreateCarPage() {
  let navigation = useNavigate();

  const onSubmit = async (carState) => {
    // e.preventDefault()
    await axios.post("http://localhost:3005/cars", carState)
    // console.log(info)
    navigation("/products")
  };

  return (
    <>
      <div className="form-container" >
        <CarForm onFormSubmit={onSubmit} />
      </div>
    </>
  )
}

export default CreateCarPage;
