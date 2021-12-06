import React from 'react';
import { useNavigate } from 'react-router';
import CarForm from "../../components/carsForm/CarForm";
import axios from 'axios';

import './CreateCarPage.css';

function CreateCarPage() {
  let navigation = useNavigate();

  const onSubmit = async (carState) => {
    await axios.post("http://localhost:3005/cars", carState)
    navigation("/products")
  };

  return (
    <>
      <div className="form-container" >
        <h2 className="title">Create new car</h2>
        <CarForm onFormSubmit={onSubmit} submitText={"Add car"}/>
      </div>
    </>
  )
}

export default CreateCarPage;
