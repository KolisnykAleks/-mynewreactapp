
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { unwrapResult } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux';

import { fetchCarDetail } from "../CarsPage/CarSlice";

import './CarDetailPage.css';

const CarDetail = () => {
  const [car, setCar] = useState({
    name: "",
    ownerFirstName: "",
    imageUrl: "",
    ownerLastName: "",
    model: "",
    type: "",
    fuelType: "",
    vin: "",
    color: ""
  });



  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarDetail(id))
      .then(unwrapResult)
      .then((res) => {
        setCar(res)
      })
      .catch((res) => console.log({ error: res }))

  }, []);

  return (
    <div className="container-detail">
      <Link className="btn-back" to="/products">
        back to all cars
      </Link>
      <div className="detail-image">
        <img src={car.imageUrl} alt="detail-image" />
      </div>
      <h1 className="display-4">Car Id: {car._id}</h1>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">Name: {car.name}</li>
        <li className="list-group-item">Owner&apos;s first name: {car.ownerFirstName}</li>
        <li className="list-group-item">Owner&apos;s last name: {car.ownerLastName}</li>
        <li className="list-group-item">Model: {car.model}</li>
        <li className="list-group-item">Type: {car.type}</li>
        <li className="list-group-item">Type of fuel: {car.fuelType}</li>
        <li className="list-group-item">Vin: {car.vin}</li>
        <li className="list-group-item">Color: {car.color}</li>
      </ul>
    </div>
  );
};

export default CarDetail;