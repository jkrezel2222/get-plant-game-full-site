import axios from "axios";



export const getToken = () => {
    const token = localStorage.getItem('JWTToken');
    axios.defaults.headers.common.authorization = (token && `Bearer ${token}`) || '';
    return token;
  };