import React from 'react'
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { fetchCarDelete, fetchCarList } from './CarSlice';
// import { del } from './CarSlice';
import './CarsPage.css';

import { useDispatch, useSelector } from 'react-redux';

const CarList = () => {

	const dispatch = useDispatch();
	const carsData = useSelector((state) => state.cars.list)

	useEffect(() => {
		dispatch(fetchCarList());
	}, []);

	const deleteCar = (id) => {
		dispatch(fetchCarDelete(id))
		dispatch(fetchCarList())
	}

	return (
		<div className="cards">
			<div className="title">Cars page</div>
			<div className="cards-container">
				<ul className="dog-grid">
					{carsData.map(item => (
						<li className="cards-item" key={item._id}>
							<img src={item.imageUrl} alt="dog" />
							<div className="item-text">
								<div className="item-subtitle">{item.ownerFirstName}</div>
								<div className="item-descr">{item.name}</div>
							</div>
							<div className="btn-link">
								<NavLink to={`/products/${item._id}`} className="btn-moreDetails ">More</NavLink>
								<a
									className="btn-del"
									onClick={() => deleteCar(item._id)}
								// onClick={() => dispatch(del(item._id))}
								>
									Delete
								</a>
								<Link
									className="btn-edit"
									// onClick={() => editCar(item._id)}
									to={`/products/${item._id}/edit`}
								>
									Edit
								</Link>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)

}

export default CarList;