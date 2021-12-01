import React from "react";
import {Component} from 'react';
import './form.css';

class Form extends Component {

    state = {
        name: '',
        ownerFirstName: '',
        imageUrl: ''
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // This we can connect up to two "input" at the same time
        });
    }
    onAdd = () => {
    //     this.setState({

    //     })
    }
    onSubmit = (e) => {
        e.preventDefault();
        // if (this.state.name.length < 3 || !this.state.name) return;
        // this.props.onAdd(this.state.name, this.state.ownerFirstName, this.state.imageUrl);
        this.setState({
            name: '',
            ownerFirstName: '',
            imageUrl: ''
        })
    }

    render() {
        const {name, ownerFirstName, imageUrl} = this.state;
        
      return (
        <form onSubmit={this.onSubmit}>
          <label>
            Car name:
            <input 
            className="formInput"
            value={name}
            type="text"
            placeholder="Type here?" 
            onChange={this.onValueChange} />
          </label>
          <label>
            ownerFirstName:
            <input 
            className="formInput" 
            value={ownerFirstName}
            type="text"
            placeholder="Owner's name"
            onChange={this.onValueChange}  />
          </label>
          <label>
            image url:
            <input 
            className="formInput" 
            value={imageUrl}
            type="text"
            placeholder="insert your url"
            onChange={this.onValueChange} />
          </label>
          <button className="formBtn" type="submit" value="Submit" >
            Add
          </button>
        </form>
      );
    }
  }
  export default Form;