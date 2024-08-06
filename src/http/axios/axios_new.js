import axios from "axios";

const axiosNew = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosOther = axios.create({
  baseURL: "http://20.198.9.47/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosQuery = axios.create({
  baseURL:"http://20.197.55.39/api/",
  headers:{
    "Content-Type" :"application/json"
  }
});

export {
  axiosNew,
  axiosOther,
  axiosQuery
};