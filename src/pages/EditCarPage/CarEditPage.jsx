import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import CarForm from '../../components/carsForm/CarForm';
import { useDispatch } from 'react-redux';
import { fetchCarLoad, fetchCarEdit } from '../CarsPage/CarSlice';
import { unwrapResult } from '@reduxjs/toolkit'

import './CarEditPage.css';

const CarEdit = () => {
  let navigation = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [carState, setCarState] = useState({});


  useEffect(() => {
    dispatch(fetchCarLoad(id))
      .then(unwrapResult)
      .then((res) => {
        setCarState(res)
      })
  }, [])


  const onSubmit = async (carState) => {
    await dispatch(fetchCarEdit(carState))
    navigation("/products")
  }


  return (
    <div className="car-edit-container">
      <div className="edit-big-image">
        <h2>Edit car</h2>
        <img src={carState.imageUrl} alt="edit-big-image" />
      </div>
      <hr />
      <CarForm onFormSubmit={onSubmit} car={carState} submitText={"Edit car"} />
    </div>
  )

}

export default CarEdit;