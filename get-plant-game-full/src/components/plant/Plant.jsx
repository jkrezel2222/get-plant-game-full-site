import React from "react";
import "./plant.css";



const Plant = ({ plants }) => {
  return (
    <React.Fragment>
        <br />
            <div className="plant">
              <div>
                {
                    plants.map(item => (

                      <div key={item.id}>
                        
                        <div className="plantWrapper">
                          <img src={item.image_data} alt={item.title} className="plantImg" />

                          <div className="plantInfo"></div>
                          
                          <span className="plantTitle">
                            {item.title}
                          </span>
                          
                        </div>
                        <p className="plantDescription">
                          {item.description}
                        </p>
                      </div>
                    ))
                }
              </div>
            </div>
    </React.Fragment>
  );
};

export default Plant