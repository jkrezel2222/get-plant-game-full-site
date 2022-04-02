// import Plant from "../plant/Plant"
import "./plantTips.css"
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";


const LoadingSpinner =
  <Spinner animation="border" role="status" variant="light" >
    <span className="visually-hidden">Loading...</span>
  </Spinner>


export default function PlantTips() {

    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const [q, setQ] = useState("");
    const [searchParam] = useState(["breedName", "description"]);

    useEffect(() => {
        fetch("https://api-dog-breeds.herokuapp.com/api/dogs")
        .then((response) => response.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []);

    function Search(items) {
      return items.filter((item) => {
          return searchParam.some((newItem) => {
              return (
                  item[newItem]
                  .toString()
                  .toLowerCase()
                  .indexOf(q.toLowerCase()) > -1
              );
          });
      });
    }


    if (error) {
      return <div>{error.message}</div>;
      } else if (!isLoaded) {
      return <div>{LoadingSpinner}</div>;
      } else {

    return (
      <div className="plantTips">

        <div>
          {Search(items).map((item, index) => (
              <div key={index}>
                <div>
                  <br></br>
                      </div>

                        <div> 
                        <article className="card">
                        <br></br>
                          <div>
                            <h3 key="item.id">
                            {item.breedName.toUpperCase()}
                            </h3>
                          </div>
                          <div>
                            <img src={item.image} alt={item.breedName} />
                        </div>
                    <br></br>
                        <div key="item.id">
                            <p className="card-description">
                            {item.description}
                            </p>
                        <div className="card-list" key="item.id">
                            <p>
                              - Height: {" "}
                              <span>{item.dogInfo.height}</span>
                            </p>
                            <p>
                              - Weight: {" "}
                              <span>{item.dogInfo.weight}</span>
                            </p>
                            <p>
                              - Life expectancy: {" "}
                              <span>{item.dogInfo.life}</span>
                            </p>
                          <div>
                          <br></br>
                          </div>
                        </div>
                        </div>
                    </article>
                </div>
              </div>
          ))}
        </div>





    </div>



    

  )
}}
