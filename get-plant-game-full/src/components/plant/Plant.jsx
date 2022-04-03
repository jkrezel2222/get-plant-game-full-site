import "./plant.css";
import { Component } from "react";
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";


class Plant extends Component {
  state = {
    isLoading: true,
    plants: []
  };

  async componentDidMount() {
    const response = await fetch('https://api-dog-breeds.herokuapp.com/api/dogs', {
      method: 'GET',
      headers: {
        'Authorization': 'bearer token',
      }
    });
    const body = await response.json();
    this.setState({ plants: body, isLoading: false})
  }; catch(error) {console.error(error)};

  render() {
    const {plants, isLoading} = this.state;
    const LoadingSpinner =
        <Spinner animation="border" role="status" variant="success" >
            <span className="visually-hidden">Loading...</span>
        </Spinner>

    if (isLoading) {
      return <div className="spinner">{LoadingSpinner}</div>;
    }
   
    return (
    <>
      <div className="plant">
        {plants.map(plants =>
          <div key={plants.id}>
            
          <div className="plantWrapper">
            <img src={plants.image} alt={plants.breedName} className="plantImg" />

            <div className="plantInfo">
              <div className="plantCategory">
                <span className="plantCategory">Indoor |</span>
                <span className="plantCategory">Outdoor</span>
            </div>
            
            <span className="plantTitle">
              {plants.breedName}
            </span>
            <hr />
            
            <span className="plantDate">
              {plants.id}
            </span>
            
          </div>
            <p className="plantDescription">
              {plants.description}
            </p>

          </div>
          </div>
          )}
      </div>
    </>

    );
  }
}

export default Plant;

    
    


