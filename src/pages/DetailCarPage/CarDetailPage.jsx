
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

import './CarDetailPage.css';

const CarDetail = () => {
  const [car, setCar] = useState({
    name: "",
    ownerFirstName: "",
    imageUrl: ""
  });

  const { id } = useParams();
  useEffect(() => {
    loadCar();
  }, []);
  const loadCar = async () => {
    const res = await axios.get(`http://localhost:3005/cars/${id}`);
    setCar(res.data);
  };
  return (
    <div className="">
      <Link className="" to="/products">
        back to all cars
      </Link>
      <div className="detail-image">
        <img src={car.imageUrl} alt="detail-image" />
      </div>
      <h1 className="display-4">Car Id: {car._id}</h1>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">name: {car.name}</li>
        <li className="list-group-item">ownerFirstName: {car.ownerFirstName}</li>
      </ul>
    </div>
  );
};

export default CarDetail;