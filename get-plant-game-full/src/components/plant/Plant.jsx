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
    const response = await fetch('/api/v1/plants', {
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
            <img src={plants.image_data} alt={plants.title} className="plantImg" />

            <div className="plantInfo">
            
            <span className="plantTitle">
              {plants.title}
            </span>
            
          </div>
            <p className="plantDescription">
              {plants.description}
            </p>
            <hr />
          </div>
          </div>
          )}
      </div>
    </>

    );
  }
}

export default Plant;

    
    


