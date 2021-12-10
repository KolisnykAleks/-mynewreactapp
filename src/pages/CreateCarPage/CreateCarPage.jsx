import React from 'react';
import { useNavigate } from 'react-router';
import CarForm from "../../components/carsForm/CarForm";
import { useDispatch } from 'react-redux';
import { fetchCarCreate } from '../CarsPage/CarSlice';

import './CreateCarPage.css';

function CreateCarPage() {
  let navigation = useNavigate();

  const dispatch = useDispatch()

  const onSubmit = (carState) => {
    dispatch(fetchCarCreate(carState))
    navigation("/products")
  }

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
