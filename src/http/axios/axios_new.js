import axios from "axios";

const axiosNew = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-Type": "application/json",
  },
});


// run others on 8003 port 
const axiosOther = axios.create({
  baseURL: "http://127.0.0.1:8003/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosHotel = axios.create({
  baseURL: "http://20.198.9.47/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosGuide = axios.create({
  baseURL: "http://20.198.9.47/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosQuery = axios.create({
  baseURL:"http://127.0.0.1:8000/api/",
  headers:{
    "Content-Type" :"application/json"
  }
});

export {
  axiosNew,
  axiosOther,
  axiosQuery
};