import React, { useState, useReducer, useEffect } from "react";
import {
  queryInitial,
  travelInitial,
  paxInitial,
  roomInitial,
  valueAddInitial,
  suggestedPackageData
} from "./QuerySchema";
import { eachDayOfInterval, format } from "date-fns";
import { axiosOther } from "../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";
import Counter from "./Counter";
import * as Yup from "yup";
import axios from "axios";
import "select2";
import "jquery";

const Query = () => {
  const [TravelDate, setTravelDate] = useState({ ...travelInitial });
  const [PaxInfo, setPaxInfo] = useState({ ...paxInitial });
  const [RoomInfo, setRoomInfo] = useState({ ...roomInitial });
  const { Room, Single, Double, Twin, Triple, ExtraBed } = RoomInfo;
  const [valueAddServices, setValueAddServices] = useState({
    ...valueAddInitial,
  });
  const [queryFields, setQueryFields] = useState({ ...queryInitial });
  const [travelsDestination, setTravelDestination] = useState({
    Country: "",
    Destination: "",
  });
  const [suggestedPackage, setSuggestedPackage] = useState("");
  const [filteredPackage, setFilteredPackage] = useState([]);
  const [toDate, setToDate] = useState();
  const [dateArray, setDateArray] = useState([]);
  const [emptyData, setEmptyData] = useState(false);
  const [dayWiseNights, setDayWiseNights] = useState([]);
  const [filteredCity, setFilteredCity] = useState([]);
  const initialState = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
  };

  const dropdownInitialState = {
    hotelType: [],
    hotelMeal: [],
    leadList: [],
    tourType: [],
    countryList: [],
    cityList: [],
  };

  const dropdownReducer = (state, action) => {
    switch (action.type) {
      case "HOTEL-TYPE":
        return { ...state, hotelType: action.payload };
      case "HOTEL-MEAL":
        return { ...state, hotelMeal: action.payload };
      case "LEAD-LIST":
        return { ...state, leadList: action.payload };
      case "TOUR-TYPE":
        return { ...state, tourType: action.payload };
      case "COUNTRY-LIST":
        return { ...state, countryList: action.payload };
      case "CITY-LIST":
        return { ...state, cityList: action.payload };
    }

    return state;
  };
  const [dropdownState, dropdownDispatch] = useReducer(
    dropdownReducer,
    dropdownInitialState
  );

  //reducer for pax information
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, [action.counter]: state[action.counter] + 1 };
      case "DECREMENT":
        return {
          ...state,
          [action.counter]: Math.max(0, state[action.counter] - 1),
        };
      case "SET":
        return {
          ...state,
          [action.counter]: (state[action.counter] = action.value),
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  //form validation using yup library
  const validationSchema = Yup.object().shape({
    CompanyInfo: Yup.string().required("Required"),
    AddEmail: Yup.string().email("Invalid Email").required("Required"),
  });

  // console.log('QueryOnChangeValue', { ...queryFields, TravelDate:[{...TravelDate}], RoomInfo:[{...RoomInfo}],
  // PaxInfo:[{...PaxInfo}], ValueAddServices:[{...valueAddServices}]});

  const [PaxTotal, setPaxTotal] = useState(0);
  const [RoomsTotal, setRoomsTotal] = useState(0);
  const [errors, setErrors] = useState({});

  const data = localStorage.getItem("Query");
  const storedData = JSON.parse(data);

  // Getting data to server for Dropdown
  useEffect(() => {
    const gettingDataForDropdown = async () => {
      try {
        const { data } = await axiosOther.post("leadlist", {
          Search: "",
          Status: "",
        });
        // setLeadList(data.DataList);
        dropdownDispatch({ type: "LEAD-LIST", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }

      try {
        const { data } = await axiosOther.post("hoteltypelist", {
          Search: "",
          Status: "",
        });
        // setHotelType(data.DataList);
        dropdownDispatch({ type: "HOTEL-TYPE", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosOther.post("tourlist", {
          Search: "",
          Status: "",
        });
        // setTourType(data.DataList);
        dropdownDispatch({ type: "TOUR-TYPE", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }

      try {
        const { data } = await axiosOther.post("countrylist", {
          Search: "",
          Status: "",
        });
        // setCountryList(data.DataList);
        dropdownDispatch({ type: "COUNTRY-LIST", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }

      try {
        const { data } = await axiosOther.post("citylist", {
          Search: "",
          Status: "",
        });
        // setCityList(data.DataList);
        dropdownDispatch({ type: "CITY-LIST", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }
    };
    gettingDataForDropdown();
  }, []);

  // Handling Submit Query Data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (document.activeElement.name === "SaveButton") {
      localStorage.setItem(
        "Query",
        JSON.stringify({
          ...queryFields,
          TravelDate: [{ ...TravelDate }],
          RoomInfo: [{ ...RoomInfo }],
          PaxInfo: [{ ...PaxInfo }],
          ValueAddServices: [{ ...valueAddServices }],
        })
      );
      const data = localStorage.getItem("Query");
      if (data) {
        setQueryFields({ ...queryInitial });
        setTravelDate({ ...travelInitial });
        setPaxInfo({ ...paxInitial });
        setRoomInfo({ ...roomInitial });
        dispatch({ type: "SET", value: 0, counter: "counter1" });
        dispatch({ type: "SET", value: 0, counter: "counter2" });
        dispatch({ type: "SET", value: 0, counter: "counter3" });
      }
    } else if (document.activeElement.name === "ClearButton") {
      localStorage.removeItem("Query");
      toast.success("Query Form Cleared !");
      setEmptyData(!emptyData);
    } else if (document.activeElement.name === "SubmitButton") {
      setEmptyData(!emptyData);
      try {
        // await validationSchema.validate(
        //   { ...queryFields, TravelDate, PaxInfo, RoomInfo },
        //   { abortEarly: false }
        // );
        const response = await axios.post(
          "http://20.197.55.39/api/addupdatequerymaster",
          {
            ...queryFields,
            TravelDate: [{ ...TravelDate }],
            RoomInfo: [{ ...RoomInfo }],
            PaxInfo: [{ ...PaxInfo }],
            ValueAddServices: [{ ...valueAddServices }],
          }
        );
        console.log("SubmitingQueryForm", response);
        toast.success(response.data.Message);
        setQueryFields({ ...queryInitial });
        setTravelDate({ ...travelInitial });
        setPaxInfo({ ...paxInitial });
        setRoomInfo({ ...roomInitial });
        dispatch({ type: "SET", value: 0, counter: "counter1" });
        dispatch({ type: "SET", value: 0, counter: "counter2" });
        dispatch({ type: "SET", value: 0, counter: "counter3" });

        localStorage.removeItem("Query");
      } catch (err) {
        // validationErrors : parameter
        // const formattedErrors = {};
        // validationErrors.inner.forEach((error) => {
        //   formattedErrors[error.path] = error.message;
        // });
        // setErrors(formattedErrors);
        // console.log("Errors From Yup...", formattedErrors);
        console.log(err);
      }
    } else {
      console.log("Hello Console");
    }
  };

  $(document).ready(function () {
    $(".select2-hidden-accessible").select2(); //bootstrap select box
  });

  // Handling onChange data inside query page
  const handleChange = (e) => {
    setQueryFields({ ...queryFields, [e.target.name]: e.target.value });
  };

  const handleRoomInfo = (e) => {
    setRoomInfo({ ...RoomInfo, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e) => {
    setTravelDate({ ...TravelDate, [e.target.name]: e.target.value });
  };

  // Looping date & stored into array
  function createDateArray() {
    const fromDate = new Date(
      TravelDate?.FromDate?.split("/")?.reverse()?.join("/")
    );
    const lastDate = new Date(
      TravelDate?.ToDate?.split("/")?.reverse()?.join("/")
    );
    const dateArray = eachDayOfInterval({ start: fromDate, end: lastDate }).map(
      (date) => format(date, "dd/MM/yyyy")
    );
    setDateArray(dateArray);
  }

  // Date Deleting
  const dateDeleting = () => {
    const updatedArray = [...dateArray];
    updatedArray.pop();
    setDateArray(updatedArray);

    setTravelDate({
      Type: TravelDate.Type,
      FromDate: TravelDate.FromDate,
      ToDate: TravelDate.ToDate,
      TotalNights:
        TravelDate.TotalNights !== 0 ? TravelDate.TotalNights - 1 : "",
      SeasonType: TravelDate.SeasonType,
      SeasonYear: TravelDate.SeasonYear,
    });
  };

  //Adding Date fromDate + Days = ToDate
  useEffect(() => {
    const dateStr = TravelDate.FromDate;
    const days = Number(TravelDate.TotalNights);
    let hours = 24,
      minute = 60,
      second = 60,
      millisecond = 1000;
    let nightsDayIntoTime = days * hours * minute * second * millisecond;
    const dateIntoFullTime = new Date(dateStr).getTime();
    const toDate = nightsDayIntoTime + dateIntoFullTime;
    const actualDate = new Date(toDate);
    const toDateYear = `${actualDate.getFullYear()}`;
    const toDateMonth = `${actualDate.getMonth() + 1}`;
    const toDateDay = `${actualDate.getDate()}`;
    const finalToDate = `${toDateYear}-${
      toDateMonth.length == 2 ? toDateMonth : "0" + toDateMonth
    }-${toDateDay.length == 2 ? toDateDay : "0" + toDateDay}`;
    setTravelDate({
      ...TravelDate,
      ToDate: TravelDate.TotalNights != "" ? finalToDate : "",
    });
    createDateArray();
  }, [TravelDate.FromDate, TravelDate.TotalNights, TravelDate.ToDate]);

  // Update Total Values in Pax and Rooms
  const updateTotal = () => {
    const { counter1, counter2, counter3 } = state;
    setPaxTotal(counter1 + counter2 + counter3);
  };

  // Data Set into input field from localstorage and remove on Submit and Clear;
  const handleUnSubmittedQuery = () => {
    const queryValue = JSON.parse(JSON.stringify(storedData));
    delete queryValue.TravelDate;
    delete queryValue.PaxInfo;
    delete queryValue.RoomInfo;
    delete queryValue.ValueAddServices;

    const travelValue = storedData.TravelDate[0];
    const roomValue = storedData.RoomInfo[0];
    const { Adult, Child, Infant } = storedData.PaxInfo[0] ?? {};

    setQueryFields({ ...queryValue });
    setTravelDate({ ...travelValue });
    setRoomInfo({ ...roomValue });

    dispatch({ type: "SET", value: Adult ? Adult : 0, counter: "counter1" });
    dispatch({ type: "SET", value: Child ? Child : 0, counter: "counter2" });
    dispatch({ type: "SET", value: Infant ? Infant : 0, counter: "counter3" });
  };

  // Set counter value into json
  useEffect(() => {
    updateTotal();
    setPaxInfo({
      Adult: state.counter1,
      Child: state.counter2,
      Infant: state.counter3,
    });
  }, [state]);

  //DayWise TravelInformation
  useEffect(() => {
    let nights = [];
    for (let i = 0; i <= TravelDate.TotalNights; i++) {
      nights.push(TravelDate.TotalNights > 0 ? i + 1 : "");
    }

    setDayWiseNights(nights);
  }, [TravelDate.TotalNights]);

  //City Filtering For Dropdown
  const handleDateDestination = (e) => {
    setTravelDestination({
      ...travelsDestination,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const filtered = dropdownState.cityList.filter((value) => {
      const city = value.CountryId == travelsDestination.Country;
      return city;
    });
    setFilteredCity(filtered);
  }, [travelsDestination]);

  const handleSuggestPackage = (value) => {
    const queryValue = JSON.parse(JSON.stringify(value));

    delete queryValue.RoomInfo;
    delete queryValue.PaxInfo;
    delete queryValue.TravelDate;
    delete queryValue.ValueAddedServices;

    const { Adult, Child, Infant } = value.PaxInfo[0];
    const roomValue = value.RoomInfo[0];
    const dateValue = value.TravelDate[0];

    setQueryFields({ ...queryValue });
    setRoomInfo({ ...roomValue });
    setTravelDate({ ...dateValue });

    dispatch({ type: "SET", value: Number(Adult), counter: "counter1" });
    dispatch({ type: "SET", value: Number(Child), counter: "counter2" });
    dispatch({ type: "SET", value: Number(Infant), counter: "counter3" });
  };

  const handleSearchSuggestedPackage = (e) => {
    setSuggestedPackage(e.target.value);
  };

  useEffect(() => {
    if (suggestedPackage !== "") {
      const filtered = suggestedPackageData.filter((value) => {
        return value.PackageName.toLowerCase()
          .replace(/\s/g, "")
          .includes(suggestedPackage.toLowerCase().replace(/\s/g, ""));
      });
      setFilteredPackage(filtered);
    } else {
      setFilteredPackage(suggestedPackageData);
    }
  }, [suggestedPackage]);

  return (
    <>
      <div className="container-fluid mt-2">
        <div className="">
          <form onSubmit={handleSubmit}>
            {/* <div className=""> */}
            <Toaster />
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="row py-1 column-gap-2 row-gap-2">
                  <div className="col-12 col-sm  border rounded py-1">
                    <div className="row row-gap-2 p-0 pt-1 pb-2">
                      <div className="col-12 col-sm-6 col-lg-8 d-flex align-items-center">
                        <p className="m-0 fs-6 font-weight-bold">
                          Contact Information
                        </p>
                      </div>
                      <div className="col-12 col-sm col-lg-4  ">
                        <label htmlFor="queryType" className="m-0">
                          Query Type
                        </label>
                        <select
                          component={"select"}
                          className="form-input-2"
                          name="QueryType"
                          value={queryFields.QueryType}
                          onChange={handleChange}
                        >
                          <option value="1">Query</option>
                          <option value="2">Package</option>
                          <option value="3">Duplicate Query</option>
                          <option value="4">Activity</option>
                          <option value="5">Multiple Services</option>
                        </select>
                      </div>
                      {queryFields.QueryType == "3" && (
                        <div className="col-12">
                          <label htmlFor="" className="m-0">
                            Query Id
                          </label>
                          <input
                            type="text"
                            name="QueryId"
                            placeholder="Query Id"
                            className="form-input-2"
                            value={queryFields.QueryId}
                            onChange={handleChange}
                          />
                        </div>
                      )}
                      {queryFields.QueryType == "2" && (
                        <>
                          <div className="col-12 col-sm-6">
                            <label htmlFor="" className="m-0">
                              Package Code
                            </label>
                            <input
                              type="text"
                              name="PackageCode"
                              placeholder="Enter Package Code"
                              className="form-input-2"
                              value={queryFields.PackageCode}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-12 col-sm-6">
                            <label htmlFor="" className="m-0">
                              Package Name
                            </label>
                            <input
                              type="text"
                              name="PackageName"
                              placeholder="Enter Package Name"
                              className="form-input-2"
                              value={queryFields.PackageName}
                              onChange={handleChange}
                            />
                          </div>
                        </>
                      )}
                      <div className="col-12 col-lg-4">
                        <label htmlFor="queryType" className="m-0">
                          BusinessType
                        </label>
                        <select
                          className="form-input-2"
                          name="BusinessType"
                          value={queryFields.BusinessType}
                          onChange={handleChange}
                        >
                          <option value="1">Agent</option>
                          <option value="2">B2B</option>
                          <option value="3">B2C</option>
                          <option value="3">Corporate</option>
                        </select>
                      </div>
                      <div className="col-12 col-lg-8">
                        <label htmlFor="queryType" className="m-0">
                          Agent/Client Name
                        </label>
                        <div className="d-flex">
                          <input
                            type="text"
                            className="form-input-2"
                            placeholder="Enter Agent/Client Name"
                            name="ClientType"
                            value={queryFields.ClientType}
                            onChange={handleChange}
                          />
                          <button
                            className="btn btn-primary d-flex align-items-center ml-1"
                            style={{ height: "30px" }}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="border d-flex justify-content-between p-1 flex-wrap gap-2">
                          <div className="d-flex justify-content-between align-items-center">
                            <i className="fa-solid fa-user font-size-12"></i>
                            <p className="m-0 pl-1 font-size-12">Rahul Kumar</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <i className="fa-solid fa-phone-volume font-size-12"></i>
                            <p className="m-0 pl-1 font-size-12">8765435678</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <i className="fa-solid fa-envelope font-size-12"></i>
                            <p className="m-0 pl-1 font-size-12">
                              deboxglobal@gmail.com
                            </p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <label
                              htmlFor="market"
                              className="m-0 font-size-12"
                            >
                              Market Type :
                            </label>
                            <p className="m-0 pl-1 font-size-12">General</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <label
                              htmlFor="market"
                              className="m-0 font-size-12"
                            >
                              Nationalty :
                            </label>
                            <p className="m-0 pl-1 font-size-12">Indian</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm border rounded py-1">
                    <div className="row row-gap-2 p-0 pt-1 pb-2">
                      <div className="col-12 col-sm-6 col-lg-8 d-flex align-items-center">
                        <p className="m-0 fs-6 font-weight-bold">Pax Details</p>
                      </div>
                      <div className="col-12 col-sm-6 col-lg-4">
                        <label htmlFor="queryType" className="m-0">
                          Pax Type
                        </label>
                        <select
                          component={"select"}
                          className="form-input-2"
                          name="LeadPax"
                          value={queryFields.LeadPax}
                          onChange={handleChange}
                        >
                          <option value="1">FIT</option>
                          <option value="2">GIT</option>
                        </select>
                      </div>
                      <div className="col-6 col-sm-4 col-md-4">
                        <label htmlFor="" className="m-0">
                          Adult
                          <i className="fa-solid fa-person pl-2"></i>
                        </label>
                        <Counter
                          value={state.counter1}
                          dispatch={dispatch}
                          counter="counter1"
                        />
                      </div>
                      <div className="col-6 col-sm-4 col-md-4">
                        <label htmlFor="" className="m-0">
                          Child
                          <i className="fa-solid fa-child-reaching pl-2"></i>
                        </label>
                        <Counter
                          value={state.counter2}
                          dispatch={dispatch}
                          counter="counter2"
                        />
                      </div>
                      <div className="col-6 col-sm-4 col-md-4">
                        <label htmlFor="" className="m-0">
                          Infant
                          <i className="fa-solid fa-person-breastfeeding pl-2"></i>
                        </label>
                        <Counter
                          value={state.counter3}
                          dispatch={dispatch}
                          counter="counter3"
                        />
                      </div>
                      <div className="col-6 col-sm-12 col-md-12">
                        <label htmlFor="" className="m-0 text-center">
                          Total
                        </label>
                        <div
                          className="backgroundColor-1 rounded
                      d-flex justify-content-center align-items-center font-weight-bold"
                          style={{ height: "25px" }}
                        >
                          Total Pax : {PaxTotal}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 py-1 column-gap-2 row-gap-2">
                  <div className="col-12 col-sm border rounded py-1">
                    <div className="row row-gap-2 p-0 pt-1 pb-2">
                      <div className="col-12 col-lg-4 d-flex align-items-center">
                        <p className="m-0 fs-6 font-weight-bold">
                          Accomodation
                        </p>
                      </div>
                      <div className="col-12 col-lg-8 px-3">
                        <label htmlFor="hotel" className="m-0 p-0">
                          Hotel Category
                        </label>
                        <div className="row column-gap-2">
                          <div className="col form-div d-flex justify-content-center align-items-center">
                            <label htmlFor="" className="m-0 pr-2">
                              3*
                            </label>
                            <input
                              className="form-check-input m-0 p-0 ml-3"
                              type="radio"
                              name="hotelType"
                              value="3"
                              onChange={handleChange}
                              defaultChecked
                            />
                          </div>
                          <div className="col form-div d-flex justify-content-center align-items-center">
                            <label htmlFor="four" className="m-0 pr-2">
                              4*
                            </label>
                            <input
                              className="form-check-input m-0 p-0 ml-3"
                              type="radio"
                              name="hotelType"
                              id="four"
                              value="4"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col form-div d-flex justify-content-center align-items-center">
                            <label htmlFor="five" className="m-0 pr-2">
                              5*
                            </label>
                            <input
                              className="form-check-input m-0 p-0 ml-3"
                              type="radio"
                              name="hotelType"
                              id="five"
                              value="5"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col form-div d-flex justify-content-center align-items-center">
                            <label htmlFor="all" className="m-0 pr-2">
                              All
                            </label>
                            <input
                              className="form-check-input m-0 p-0 ml-3"
                              type="radio"
                              name="hotelType"
                              id="all"
                              value="0"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-lg-3">
                        <label className="m-0">Room</label>
                        <div>
                          <input
                            type="text"
                            className="form-input-2 text-center p-0"
                            placeholder="0"
                            name="Room"
                            value={RoomInfo.Room}
                            onChange={handleRoomInfo}
                            // readOnly
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-1">
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Room == 1 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Room: 1,
                              })
                            }
                          >
                            1
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center  ${
                              RoomInfo.Room == 2 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Room: 2,
                              })
                            }
                          >
                            2
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Room == 3 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Room: 3,
                              })
                            }
                          >
                            3
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Room == 4 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Room: 4,
                              })
                            }
                          >
                            4
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Room == 5 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Room: 5,
                              })
                            }
                          >
                            5
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-lg-3 ">
                        <label className="m-0">SGL Room</label>
                        <div>
                          <input
                            type="text"
                            className="form-input-2 text-center p-0"
                            placeholder="0"
                            name="Single"
                            value={RoomInfo.Single}
                            onChange={handleRoomInfo}
                            // readOnly
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-1">
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Single == 1 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Single: 1,
                              })
                            }
                          >
                            1
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Single == 2 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Single: 2,
                              })
                            }
                          >
                            2
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Single == 3 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Single: 3,
                              })
                            }
                          >
                            3
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Single == 4 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Single: 4,
                              })
                            }
                          >
                            4
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Single == 5 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Single: 5,
                              })
                            }
                          >
                            5
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-lg-3">
                        <label htmlFor="queryType" className="m-0">
                          DBL Room
                        </label>
                        <div>
                          <input
                            type="text"
                            className="form-input-2 text-center p-0"
                            placeholder="0"
                            name="Double"
                            value={RoomInfo.Double}
                            onChange={handleRoomInfo}
                            // readOnly
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-1">
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Double == 1 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Double: 1,
                              })
                            }
                          >
                            1
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Double == 2 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Double: 2,
                              })
                            }
                          >
                            2
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Double == 3 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Double: 3,
                              })
                            }
                          >
                            3
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Double == 4 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Double: 4,
                              })
                            }
                          >
                            4
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Double == 5 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Double: 5,
                              })
                            }
                          >
                            5
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-lg-3 ">
                        <label htmlFor="queryType" className="m-0">
                          TWIN Room
                        </label>
                        <div>
                          <input
                            type="text"
                            className="form-input-2 text-center p-0"
                            placeholder="0"
                            name="Twin"
                            value={RoomInfo.Twin}
                            onChange={handleRoomInfo}
                            // readOnly
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-1">
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Twin == 1 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Twin: 1,
                              })
                            }
                          >
                            1
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Twin == 2 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Twin: 2,
                              })
                            }
                          >
                            2
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Twin == 3 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Twin: 3,
                              })
                            }
                          >
                            3
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Twin == 4 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Twin: 4,
                              })
                            }
                          >
                            4
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Twin == 5 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Twin: 5,
                              })
                            }
                          >
                            5
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-lg-3">
                        <label htmlFor="queryType" className="m-0">
                          TPL Room
                        </label>
                        <div>
                          <input
                            type="text"
                            className="form-input-2 text-center p-0"
                            placeholder="0"
                            name="Triple"
                            value={RoomInfo.Triple}
                            onChange={handleRoomInfo}
                            // readOnly
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-1">
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Triple == 1 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Triple: 1,
                              })
                            }
                          >
                            1
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Triple == 2 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Triple: 2,
                              })
                            }
                          >
                            2
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Triple == 3 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Triple: 3,
                              })
                            }
                          >
                            3
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Triple == 4 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Triple: 4,
                              })
                            }
                          >
                            4
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.Triple == 5 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                Triple: 5,
                              })
                            }
                          >
                            5
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-lg-3">
                        <label htmlFor="queryType" className="m-0">
                          EXTRA Bed
                        </label>
                        <div>
                          <input
                            type="text"
                            className="form-input-2 text-center p-0"
                            placeholder="0"
                            name="ExtraBed"
                            value={RoomInfo.ExtraBed}
                            onChange={handleRoomInfo}
                            // readOnly
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-1">
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.ExtraBed == 1 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                ExtraBed: 1,
                              })
                            }
                          >
                            1
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.ExtraBed == 2 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                ExtraBed: 2,
                              })
                            }
                          >
                            2
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.ExtraBed == 3 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                ExtraBed: 3,
                              })
                            }
                          >
                            3
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.ExtraBed == 4 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                ExtraBed: 4,
                              })
                            }
                          >
                            4
                          </div>
                          <div
                            className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo.ExtraBed == 5 ? "Active text-light" : ""
                            }`}
                            style={{ height: "19px" }}
                            onClick={() =>
                              setRoomInfo({
                                ...RoomInfo,
                                ExtraBed: 5,
                              })
                            }
                          >
                            5
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-lg-6 d-flex align-items-center">
                        <p className="font-weight-bold">
                          Total Rooms :{" "}
                          {Number(Room == "" ? 0 : Room) +
                            Number(Single == "" ? 0 : Single) +
                            Number(Double == "" ? 0 : Double) +
                            Number(Twin == "" ? 0 : Twin) +
                            Number(Triple == "" ? 0 : Triple) +
                            Number(ExtraBed == "" ? 0 : ExtraBed)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm border rounded py-1">
                    <div className="row row-gap-2 p-0 pt-1 pb-2">
                      <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center">
                        <p className="m-0 fs-6 font-weight-bold">
                          Travel Information
                        </p>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <input
                          type="text"
                          className="form-input-2"
                          name="Budget"
                          placeholder="Budget"
                          // value={queryFields.Budget}
                          // onChange={handleChange}
                        />
                      </div>
                      <div className="col-6 col-md-6 col-lg-4 form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Type"
                          id="typedateorday"
                          value="1"
                          onChange={handleDateChange}
                          defaultChecked
                        />
                        <label
                          className="form-check-label m-0"
                          htmlFor="typedateorday"
                        >
                          Date Wise
                        </label>
                      </div>
                      <div className="col-6 col-md-6 col-lg-4 form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Type"
                          id="daywise"
                          value="2"
                          onChange={handleDateChange}
                        />
                        <label
                          className="form-check-label m-0"
                          htmlFor="daywise"
                        >
                          Day Wise
                        </label>
                      </div>
                      {TravelDate.Type == "2" && (
                        <>
                          <div className="col-6 col-md-12 col-lg-6">
                            <select
                              type="select"
                              className="form-input-2"
                              name="SeasonType"
                              value={queryFields.SeasonType}
                              onChange={handleDateChange}
                            >
                              <option value="1">Winter</option>
                              <option value="2">Summer</option>
                              <option value="3">Both Season</option>
                            </select>
                          </div>
                          <div className="col-6 col-md-12 col-lg-6">
                            <select
                              type="select"
                              className="form-input-2"
                              name="SeasonYear"
                              value={queryFields.SeasonYear}
                              onChange={handleDateChange}
                            >
                              <option value="1">2024</option>
                              <option value="2">2025</option>
                              <option value="3">2026</option>
                              <option value="4">2027</option>
                              <option value="5">2028</option>
                              <option value="6">2029</option>
                              <option value="7">2030</option>
                            </select>
                          </div>
                        </>
                      )}
                      {TravelDate.Type == "2" ? (
                        ""
                      ) : (
                        <div className="col-6 col-md-12 col-lg-6">
                          <label className="m-0">From Date</label>
                          <input
                            type="date"
                            className="form-input-2"
                            name="FromDate"
                            value={TravelDate.FromDate}
                            onChange={handleDateChange}
                          ></input>
                        </div>
                      )}
                      <div
                        className={
                          TravelDate.Type == "2"
                            ? "col-6"
                            : "col-4 col-md-6 col-lg-3"
                        }
                      >
                        <label htmlFor="queryType" className="m-0">
                          Total Nights
                        </label>
                        <input
                          type="text"
                          className="form-input-2 text-center p-0"
                          placeholder="0"
                          name="TotalNights"
                          value={TravelDate.TotalNights}
                          onChange={handleDateChange}
                        />
                      </div>
                      <div className={"col-4 col-md-6 col-lg-2 mt-3"}>
                        <button className="btn btn-primary p-1 height-30">
                          Add Night
                        </button>
                      </div>
                      {TravelDate.TotalNights !== "" &&
                      TravelDate.FromDate !== "" &&
                      TravelDate.Type !== "2" ? (
                        <div className="row p-2">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Date/Day</th>
                                <th>Country</th>
                                <th>Destination</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {dateArray.map((value, index) => {
                                return (
                                  <tr key={index + 1}>
                                    <td className="p-0 text-center">{value}</td>
                                    <td className="p-1">
                                      <select
                                        type="select"
                                        className="form-input-1"
                                        style={{ height: "30px" }}
                                        name={`Country${value.Id}`}
                                        onChange={handleDateDestination}
                                      >
                                        <option value="1">Select</option>
                                        {dropdownState.countryList.map(
                                          (value, index) => {
                                            return (
                                              <option
                                                value={value.Id}
                                                key={index + 1}
                                              >
                                                {value.Name}
                                              </option>
                                            );
                                          }
                                        )}
                                      </select>
                                    </td>
                                    <td className="p-1">
                                      <select
                                        type="select"
                                        className="form-input-1"
                                        style={{ height: "30px" }}
                                        name={`Destination${value.Id}`}
                                        onChange={handleDateDestination}
                                      >
                                        <option value="1">Select</option>
                                        {filteredCity.map((value, index) => {
                                          return (
                                            <option
                                              value={value.Id}
                                              key={index + 1}
                                            >
                                              {value.Name}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </td>
                                    <td>
                                      <i
                                        className="fa-solid fa-trash pr-1
                                                text-danger cursor-pointer"
                                        onClick={dateDeleting}
                                      ></i>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        ""
                      )}
                      {TravelDate.Type == "2" &&
                        TravelDate.TotalNights !== "" && (
                          <div className="row p-2">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Date/Day</th>
                                  <th>Country</th>
                                  <th>Destination</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                {dayWiseNights.map((value, index) => {
                                  return (
                                    <tr key={index + 1}>
                                      <td className="p-0 text-center">
                                        Day {value}
                                      </td>
                                      <td className="p-1">
                                        <select
                                          type="select"
                                          className="form-input-1"
                                          style={{ height: "30px" }}
                                          name={`Country${index}`}
                                        >
                                          <option value="1">Select</option>
                                          {dropdownState.countryList?.map(
                                            (value, index) => {
                                              return (
                                                <option
                                                  value={value.Id}
                                                  key={index + 1}
                                                >
                                                  {value.Name}
                                                </option>
                                              );
                                            }
                                          )}
                                        </select>
                                      </td>
                                      <td className="p-1">
                                        <select
                                          type="select"
                                          className="form-input-1"
                                          style={{ height: "30px" }}
                                          name={`Destination${index}`}
                                        >
                                          <option value="1">Select</option>
                                          <option value="2">Delhi</option>
                                          {dropdownDispatch.cityList.map(
                                            (value, index) => {
                                              return (
                                                <option
                                                  value={value.Id}
                                                  key={index + 1}
                                                >
                                                  {value.Name}
                                                </option>
                                              );
                                            }
                                          )}
                                        </select>
                                      </td>
                                      <td>
                                        <i
                                          className="fa-solid fa-trash pr-1
                                                text-danger cursor-pointer"
                                          onClick={dateDeleting}
                                        ></i>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="row py-1 row-gap-2">
                  <div className="col-12 col-sm-5 d-flex flex-column justify-content-between">
                    <p
                      className="font-weight-bold 
                    bg-primary form-input-3 px-3 rounded 
                    border-0 height-30 d-flex align-items-center m-0"
                    >
                      Set Preference
                    </p>
                    <div className=" mt-1">
                      <label htmlFor="salesperson" className="m-0 font-size-12">
                        Sales Person
                      </label>
                      <input
                        type="text"
                        id="salesperson"
                        className="form-input-3"
                        placeholder="Sales Person"
                        name="SalesPerson"
                        value={queryFields.SalesPerson}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="">
                      <label htmlFor="assignuser" className="m-0 font-size-12">
                        Assign User
                      </label>
                      <input
                        type="text"
                        id="assignuser"
                        className="form-input-3"
                        placeholder="Assign User"
                        name="AssignUser"
                        value={queryFields.AssignUser}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="">
                      <label htmlFor="contracting" className="m-0 font-size-12">
                        Contracting Person
                      </label>
                      <input
                        type="text"
                        id="contracting"
                        className="form-input-3"
                        placeholder="Contracting Person"
                        name="ContractPerson"
                        value={queryFields.ContractPerson}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="">
                      <label htmlFor="priority" className="m-0 font-size-12">
                        Priority
                      </label>
                      <select
                        type="select"
                        id="priority"
                        className="form-input-3 w-100"
                        name="Priority"
                        value={queryFields.Priority}
                        onChange={handleChange}
                      >
                        <option value={"1"}>Normal</option>
                        <option value={"2"}>Medium</option>
                        <option value={"3"}>High</option>
                      </select>
                    </div>
                    <div className="">
                      <label htmlFor="hoteltype" className="m-0 font-size-12">
                        Hotel Type
                      </label>
                      <select
                        type="select"
                        id="hoteltype"
                        className="form-input-3"
                        name="HotelType"
                        value={queryFields.HotelType}
                        onChange={handleChange}
                      >
                        <option>All</option>
                        {dropdownState.hotelType?.map((value, index) => {
                          return (
                            <option value={value.Id} key={index + 1}>
                              {value.Name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="">
                      <label
                        htmlFor="adventuretour"
                        className="m-0 font-size-12"
                        name="TourType"
                        value={queryFields.TourType}
                        onChange={handleChange}
                      >
                        Tour Type
                      </label>
                      <select
                        type="select"
                        id="adventuretour"
                        className="form-input-3"
                        name="TourType"
                        value={queryFields.TourType}
                        onChange={handleChange}
                      >
                        <option>Select Tour</option>
                        {dropdownState.tourType?.map((value, index) => {
                          return (
                            <option value={value.Id} key={index + 1}>
                              {value.Name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="">
                      <label htmlFor="vehicle" className="m-0 font-size-12">
                        Vehicle Preference
                      </label>
                      <select
                        type="select"
                        id="vehicle"
                        className="form-input-3"
                        name="VehiclePrefrence"
                        value={queryFields.VehiclePrefrence}
                        onChange={handleChange}
                      >
                        <option>Select Vehicle</option>
                      </select>
                    </div>
                    <div className="">
                      <label htmlFor="leadsource" className="m-0 font-size-12">
                        Lead Source
                      </label>
                      <select
                        type="select"
                        id="leadsource"
                        className="form-input-3"
                        name="LeadSource"
                        value={queryFields.LeadSource}
                        onChange={handleChange}
                      >
                        <option>Select Source</option>
                        {dropdownState.leadList?.map((value, index) => {
                          return (
                            <option value={value.Id} key={index + 1}>
                              {value.Name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="">
                      <label
                        htmlFor="leadreferenced"
                        className="m-0 font-size-12"
                      >
                        Lead ReferecedId
                      </label>
                      <input
                        type="text"
                        id="leadreferenced"
                        className="form-input-3"
                        placeholder="#87738727667"
                        name="LeadReferencedId"
                        value={queryFields.LeadReferencedId}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-7 border rounded p-2">
                    <h6 className="font-weight-bold">Suggested Packages</h6>
                    <div>
                      <input
                        type="text"
                        placeholder="Search Packages "
                        className="form-input-3 rounded-pill"
                        name="SuggestedPackage"
                        onChange={handleSearchSuggestedPackage}
                      />
                      {filteredPackage != "" && (
                        <label htmlFor="" className="font-size-12">
                          Click to select the packages
                        </label>
                      )}
                    </div>
                    {filteredPackage?.map((value, index) => {
                      return (
                        <div
                          className="padding-2 d-flex align-items-center border rounded cursor-pointer mt-1"
                          key={index + 1}
                          onClick={() => handleSuggestPackage(value)}
                        >
                          <div>
                            <img
                              src={value.PackageImage}
                              alt={value.PackageName}
                              style={{ height: "35px", width: "35px" }}
                              className="rounded"
                            />
                          </div>
                          <div className="pl-2">
                            <p className="font-size-12 font-weight-bold m-0 p-0">
                              {value.PackageName}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                    {filteredPackage == "" && (
                      <p className="text-center font-weight-bold mt-3">
                        No Package Matched
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 p-0">
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1" className="m-0">
                    Description
                  </label>
                  <textarea
                    className="form-input-2"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    style={{ height: "100px" }}
                  ></textarea>
                </div>
              </div>
              <div className="col-12 p-0 d-flex justify-content-end">
                <div className="p-0">
                  <button
                    type="button"
                    className="orange-button"
                    data-toggle="modal"
                    data-target="#modal_form_vertical"
                  >
                    <span>Un-Submited Query</span>
                  </button>
                  <div
                    className="modal fade"
                    id="modal_form_vertical"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header  bg-info-700">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Un-Submitted Query List
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        {storedData ? (
                          <div className="modal-body">
                            <div
                              className="border rounded p-1 d-flex gap-3 cursor-pointer"
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={handleUnSubmittedQuery}
                            >
                              <div className="border rounded px-2 d-flex align-items-center">
                                {storedData?.PackageCode}
                              </div>
                              <div className="d-flex gap-3">
                                <div>
                                  <span className="text-secondary">
                                    Package Name
                                  </span>
                                  <p className="">{storedData?.PackageName}</p>
                                </div>
                                <div>
                                  <span className="text-secondary">
                                    Lead RerfrencedId
                                  </span>
                                  <p className="">
                                    {storedData?.LeadReferencedId}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-secondary">
                                    Contracting Person
                                  </span>
                                  <p className="">
                                    {storedData?.ContractPerson}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <h1 className="my-3 text-center display-6 font-weight-bold text-secondary">
                            No Query Available
                          </h1>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="blue-button" name="SaveButton">
                    Save
                  </button>
                  <button className="green-button" name="SubmitButton">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* </Formik> */}
        </div>
      </div>
    </>
  );
};
export default Query;
