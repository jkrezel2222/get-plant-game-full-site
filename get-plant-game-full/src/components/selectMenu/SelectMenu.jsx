import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import "./selectMenu.css"

const Categories = [
    { label: "Indoor", value: "Indoor" },
    { label: "Outdoor", value: "Outdoor" },
    { label: "All", value: "All" }
];

export default function SelectMenu() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-9"></div>
            <div className="col-md-6">
              <Select options={Categories} placeholder="Category" className="selectMenu" />
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
    );
}
