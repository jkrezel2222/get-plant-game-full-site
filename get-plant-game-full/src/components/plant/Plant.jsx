import "./plant.css"
import { useEffect } from "react";




export default function Plant() {

    //calling the API with fetch

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => console.log(json))
    }, []);




  return (
    
    <div>
        Data fetching is working
    </div>
    
    
    
    // <div className="plant">
    //     <img className="plantImg"
    //     src="https://images.unsplash.com/photo-1498480086004-2400bd8c3663?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" 
    //     alt="Flowers in vases" />

    //     <div className="plantInfo">
    //         <div className="plantCategory">
    //             <span className="plantCategory">Indoor</span>
    //             <span className="plantCategory">Outdoor</span>
    //         </div>
    //         <span className="plantTitle">
    //             Consequuntur omnis necessitatibus
    //         </span>
    //         <hr />
    //         <span className="plantDate">
    //             1 March 2022
    //         </span>
    //     </div>
    //     <p className="plantDescription">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis cum temporibus at aliquid accusantium tenetur illo, officiis perferendis assumenda earum, possimus in eaque pariatur numquam voluptate, sint sit doloribus? Quisquam veritatis cum temporibus at aliquid accusantium tenetur illo, officiis perferendis assumenda earum, possimus in eaque pariatur numquam voluptate, sint sit doloribus?
    //     </p>
        
    // </div>
  );
};
