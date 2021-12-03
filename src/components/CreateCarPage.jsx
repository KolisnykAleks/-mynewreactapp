import React from 'react';
// import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import CarForm from "./carsForm/CarForm";
import axios from 'axios';

import './CreateCarPage.css';

function CreateCarPage() {
  let navigation = useNavigate();
    const onSubmit = async (carState) => {
        // e.preventDefault()
      const info =  await axios.post("http://localhost:3005/cars", carState)
      console.log(info)
    navigation("/products")
      };
    // const [carState, setCarState] = useState({
    //     imageUrl: "",
    //     ownerFirstName: "",
    //     name: "",
    //   });

      // const onSubmit = async () => {
      //   const result = await axios.get(`http://localhost:3005/cars/${id}`);
      //   console.log(result)
      //   setCarState(result.data);
      // };

    return(
        <>
            <div className="form-container" >
                <CarForm 
                onFormSubmit={onSubmit} 
                // car={carState}
                 />
            </div>
        </>
    )
}

export default CreateCarPage;
