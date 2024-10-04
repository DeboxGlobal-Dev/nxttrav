import axios from "axios";
const HOTEL_URI = import.meta.env.VITE_HOTEL_URI;
const GUIDE_URI = import.meta.env.VITE_GUIDE_URI;
const OTHER_URI = import.meta.env.VITE_QUERY_URI;
const QUERY_BUILDER_URI = import.meta.env.VITE_QUERY_BUILDER_URI;
const ADMINISTRATION_URI = import.meta.env.VITE_ADMINISTRATION_URI;
const AIR_URI = import.meta.env.VITE_AIR_URI;
const CRUISE_URI = import.meta.env.VITE_CRUISE_URI;
const FERRY_URI = import.meta.env.VITE_FERRY_URI;
const QUOTATION_URI = import.meta.env.VITE_QUOTATION_URI;
const RESTAURANT_URI = import.meta.env.VITE_RESTAURANT_URI;
const SIGHTSEEING_URI = import.meta.env.VITE_SIGHTSEEING_URI;
const TRAIN_URI = import.meta.env.VITE_TRAIN_URI;
const TRANSPORT_URI = import.meta.env.VITE_TRANSPORT_URI;

export const axiosNew = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosHotel = axios.create({
  baseURL: HOTEL_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosGuide = axios.create({
  baseURL: GUIDE_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

// run others on 8003 port
export const axiosOther = axios.create({
  baseURL: OTHER_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosQueryBuilder = axios.create({
  baseURL: QUERY_BUILDER_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosAdministration = axios.create({
  baseURL: ADMINISTRATION_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosAir = axios.create({
  baseURL: AIR_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosCruise = axios.create({
  baseURL: CRUISE_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosFerry = axios.create({
  baseURL: FERRY_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosQuotation = axios.create({
  baseURL: QUOTATION_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosRestaurant = axios.create({
  baseURL: RESTAURANT_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosSightseeing = axios.create({
  baseURL: SIGHTSEEING_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosTrain = axios.create({
  baseURL: TRAIN_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosTransport = axios.create({
  baseURL: TRANSPORT_URI,
  headers: {
    "Content-Type": "application/json",
  },
});
