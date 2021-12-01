import React from 'react';
import PropTypes from 'prop-types';
import './card.css';


export const Card = ({id, imageUrl, name, temperament}) => (

    <div className="cards-items" key={id}>
        <img src={imageUrl} alt="dog" />
        <div className="menu__item-text">
            <div className="menu__item-subtitle">{name}</div>
            <div className="menu__item-descr">{temperament}</div>
        </div>
    </div>
);


Card.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    temperament: PropTypes.string.isRequired,
};
