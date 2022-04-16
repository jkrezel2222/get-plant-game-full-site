import axios from "axios";
import { Component } from 'react';

const API_URL = "http://localhost:5000/api/v1/";


export class AuthService extends Component {

    async login(username, password) {
        const response = await axios
            .post(API_URL + "login", {
                username,
                password
            });
        if (response.data.eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbl9pZCI6MX0.woTwP0HlFh31lokNXm5LfveU0kwt2mvhdyd2pxCEKis) {
            localStorage.setItem("admin", JSON.stringify(response.data));
        }
        return response.data;
    }
    logout() {
        localStorage.removeItem("admin");
    }
    register(username, email, firstname, lastname, password) {
      return axios.post(API_URL + "register", {
        username,
        firstname,
        lastname,
        email,
        password
      });
    }
    getCurrentUser() {
      return JSON.parse(localStorage.getItem("admin"));;
    }
}
export default new AuthService()