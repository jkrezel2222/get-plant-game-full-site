import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css-includes/bootstrap';
import App from './App';
import axios from "axios";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:5000/api/v1/";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;


const store = configureStore();

const rootElement = document.getElementById("root");
render(
  <Provider store = {store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
