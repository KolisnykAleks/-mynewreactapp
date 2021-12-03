import React, { Component } from 'react';
import './SliderPage.css';
import Card from '../../components/card';

// class component
class Slider extends Component {

  state = {
    property: 0
  }

  nextProperty = () => {
    const newIndex = this.state.property+1;
    this.setState({
      property: newIndex
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property-1;
    this.setState({
      property: newIndex
    })
  }

  render() {
    const {property} = this.state;
    return (
      <div className="slider">
        <section>
            <h1>Home Page</h1>
        </section>
        <div className="page">
            <button 
              id="prev"
              onClick={() => this.nextProperty()} 
              disabled={property === 5}
            >&#62;</button>
              <div className="cards-slider">
                <div className="new-wrap">
                  <ul className="cards-slider-wrapper" style={{
                      // 'transform': `translateX(-${property*455}px)`
                      'transform': `translateX(-${property*(34)}%)`
                      }}>
                      <Card />
                  </ul>
                </div>
              </div>
            <button 
              id="next"
              onClick={() => this.prevProperty()} 
              disabled={property === 0}
            >&#60;</button>
        </div>
      </div>
    );
  }
}

export default Slider;