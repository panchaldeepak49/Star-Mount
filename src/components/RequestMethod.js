import axios from "axios";

//const url = "http://localhost:5000";
const url = "https://college-backend-dwrk.onrender.com"

const BASE_URL = url;


export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Basic T0tPTU86UVdFUlRZT0tPTU9QT0lVVFlNS09M",
    
  },
});

////////////////////////////////////////////////////////////////////////

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
  },
});
