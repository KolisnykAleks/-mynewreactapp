import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import CarForm from '../../components/carsForm/CarForm';

import './CarEditPage.css';

const CarEdit = () => {
  let navigation = useNavigate();

  const { id } = useParams();
    const [carState, setCarState] = useState({
      imageUrl: "",
      ownerFirstName: "",
      name: "",
    });

  useEffect(() => {
      loadCar()
    },[])

 const loadCar = async () => {
        const result = await axios.get(`http://localhost:3005/cars/${id}`);
        setCarState(result.data);
      };
   
  const onSubmit = async (carState) => {
      await axios.put(`http://localhost:3005/cars/${id}`, carState);
      navigation("/products")
    };


    return (
      <div className="car-edit-container">
        <div className="edit-big-image">
            <h2>Edit car</h2>
            <img src={carState.imageUrl} alt="edit-big-image" />
        </div>
        <hr/>
        <CarForm onFormSubmit={onSubmit} car={carState} submitText={"Edit car"}/>
      </div>
    )

}

export default CarEdit;