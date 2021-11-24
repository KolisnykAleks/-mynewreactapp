import React from 'react';
import PropTypes from 'prop-types';
import './card.css';


export const Card = ({id, imageUrl, name, temperament}) => (
    <li className="cards-this.propss" key={id}>
        <img src={imageUrl} alt="dog" />
        <div className="menu__this.props-text">
            <div className="menu__this.props-subtitle">{name}</div>
            <div className="menu__this.props-descr">{temperament}</div>
        </div>
    </li>
);
    


Card.PropTypes = {
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    temperament: PropTypes.string,
};