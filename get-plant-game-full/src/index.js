import React from "react";
import { render } from "react-dom";
import './custom.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';




const rootElement = document.getElementById("root");
render(
    <App />, 
  rootElement
);
