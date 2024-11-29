import axios from "axios";

const axiosCreate =  axios.create({
    baseURL:'http://localhost:5000/', 
  timeout: 5000, 
  headers: {
    "Content-Type": "application/json",
  },
})


export default axiosCreate