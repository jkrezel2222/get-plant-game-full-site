import React from "react";
import "./navigationbar.css"
import { Link } from "react-router-dom";


export default function NavigationBar() {
  return (
    <div className="navigation">
        <div className="navLeft">
            <h3>Get Plant Game</h3>    
        </div>
        <div className="navCentre">
            <ul className="navList">
                <Link to="/home" className="navListItem">Home</Link>
                <Link to="/about" className="navListItem">About</Link>
                <Link to="/newTip" className="navListItem">New Tip</Link>
                <Link to="/logout" className="navListItem">Logout</Link>
            </ul>
        </div>
        <div className="navRight">
                <Link to="/dashboard">User Dashboard</Link>
        <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        
    </div>
  );
};
