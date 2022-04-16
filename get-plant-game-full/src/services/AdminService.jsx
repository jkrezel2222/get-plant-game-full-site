import axios from "axios";
import AuthHeader from "./AuthHeader";
import { Component } from 'react';

const API_URL = "http://localhost:5000/api/v1/";

export class AdminService extends Component {

    getPublicContent() {
        return axios.get(API_URL + 'plants');
    }
    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: AuthHeader() });
    }
}
export default new AdminService();