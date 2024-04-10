import React, { useState, useReducer, useEffect } from "react";
import { axiosOther } from "../../http/axios/axios_new";
import { eachDayOfInterval, format } from "date-fns";
import {
  hotelTypeInitialValue,
  hotelMealInitialValue,
  leadSourceInitialValue,
  tourtypeInitialValue,
} from "../master/masterList/MasterValidation";
import * as Yup from "yup";
import axios from "axios";
import "jquery";
import "select2";
import { NavLink, useNavigate } from "react-router-dom";
import Counter from "./Counter";
import toast, { Toaster } from "react-hot-toast";

const Query = () => {
  const navigate = useNavigate();
  const [TravelDate, setTravelDate] = useState({
    Type: "",
    FromDate: "",
    ToDate: "",
    TotalNights: "",
    SeasonType: "",
    SeasonYear: "",
  });
  const [PaxInfo, setPaxInfo] = useState({
    Adult: "",
    Child: "",
    Infant: "",
  });
  const [RoomInfo, setRoomInfo] = useState({
    Room: "",
    Single: "",
    Double: "",
    Twin: "",
    Triple: "",
    ExtraBed: "",
  });
  const [queryFields, setQueryFields] = useState({
    SalesPerson: "",
    AssignUser: "",
    ContractPerson: "",
    Priority: "",
    HotelType: "",
    TourType: "",
    VehiclePreference: "",
    LeadSource: "",
    LeadReferencedId: "",
    QueryType: "",
    BusinessType: "",
    AgentName: "",
    HotelCategory: "",
    PaxType: "",
    PackageCode: "",
    PackageName: "",
    QueryId: "",
    TravelType: "1",
    TravelSeason: "",
    TravelYear:"",
    Budget:"",
    PackageSearch:""
  });
  // console.log("JSON Values...", {
  //   ...queryFields,
  //   TravelDate,
  //   PaxInfo,
  //   RoomInfo,
  // });
  const validationSchema = Yup.object().shape({
    CompanyInfo: Yup.string().required("Required"),
    AddEmail: Yup.string().email("Invalid Email").required("Required"),
  });
  const [hotelType, setHotelType] = useState([]);
  const [hotelMeal, setHotelMeal] = useState([]);
  const [leadList, setLeadList] = useState([]);
  const [tourType, setTourType] = useState([]);
  const [toDate, setToDate] = useState();
  const [dateArray, setDateArray] = useState([]);
  const [emptyData, setEmptyData] = useState(false);

  const initialState = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
  };

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

  const [PaxTotal, setPaxTotal] = useState(0);
  const [RoomsTotal, setRoomsTotal] = useState(0);
  const [errors, setErrors] = useState({});

  const data = localStorage.getItem("Query");
  const storedData = JSON.parse(data);

  // Getting data to server for Dropdown
  useEffect(() => {
    const getDataToServer = async () => {
      try {
        const type = await axiosOther.post(
          "hoteltypelist",
          hotelTypeInitialValue
        );
        const meal = await axiosOther.post(
          "hotelmealplanlist",
          hotelMealInitialValue
        );
        const lead = await axiosOther.post("leadlist", leadSourceInitialValue);
        // const tour = await axiosOther.post(
        //   "tourlist",
        //   tourtypeInitialValue
        // );
        // console.log('TourType', tour);
        setHotelType(type.data.DataList);
        setHotelMeal(meal.data.DataList);
        setLeadList(lead.data.DataList);
        // setTourType(tour.data.DataList);
      } catch (error) {
        console.log(error);
      }
    };
    getDataToServer();
  }, []);

  // Handling Submit Query Data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (document.activeElement.name === "SaveButton") {
      localStorage.setItem(
        "Query",
        JSON.stringify({
          ...queryFields,
          TravelDate,
          PaxInfo,
          RoomInfo,
        })
      );
      console.log("SAVE-BUTTON-RENDERED");
      navigate("/querylist");
    } else if (document.activeElement.name === "ClearButton") {
      localStorage.removeItem("Query");
      console.log("CLEAR-BUTTON-RENDERED");
      toast.success("Query Form Cleared !");
      setEmptyData(!emptyData);
    } else if (document.activeElement.name === "SubmitButton") {
      localStorage.removeItem("Query");
      console.log("SUBMIT-BUTTON-RENDERED");
      toast.success("Query Submitted Successfully!");
      setEmptyData(!emptyData);
      try {
        await validationSchema.validate(
          { ...queryFields, TravelDate, PaxInfo, RoomInfo },
          { abortEarly: false }
        );
        console.log({ ...queryFields, TravelDate, PaxInfo, RoomInfo });
        const response = await axios.post(
          "http://127.0.0.1:8000/api/addupdatequerymaster",
          { ...queryFields, TravelDate, PaxInfo, RoomInfo }
        );
        localStorage.removeItem("Query");
      } catch (validationErrors) {
        const formattedErrors = {};
        validationErrors.inner.forEach((error) => {
          formattedErrors[error.path] = error.message;
        });
        setErrors(formattedErrors);
        console.log("Errors From Yup...", formattedErrors);
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
    setTravelDate({ ...TravelDate, [e.target.name]: e.target.value });
    setQueryFields({ ...queryFields, [e.target.name]: e.target.value });
    setRoomInfo({ ...RoomInfo, [e.target.name]: e.target.value });
  };
  console.log({ ...queryFields, TravelDate, RoomInfo, PaxInfo });

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
    setTravelDate({ ...TravelDate, ToDate: finalToDate });
    createDateArray();
  }, [TravelDate.FromDate, TravelDate.TotalNights, TravelDate.ToDate]);

  // Update Total Values in Pax and Rooms
  const updateTotal = () => {
    const { counter1, counter2, counter3 } = state;
    setPaxTotal(counter1 + counter2 + counter3);
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

  // Data Set into input field from localstorage and remove on Submit and Clear;
  useEffect(() => {
    const {
      TravelDate,
      PaxInfo,
      RoomInfo,
      CompanyInfo,
      AddEmail,
      LeadPax,
      Subject,
      AdditionalInfo,
      SearchPackage,
      OperationPerson,
      ContractPerson,
      Priority,
      TAT,
      TourType,
      LeadSource,
      HotelCategory,
      LeadReferenced,
      HotelType,
      MealPlan,
    } = storedData ?? {};
    const { Type, FromDate, ToDate, TotalNights, SeasonType, SeasonYear } =
      TravelDate ?? {};
    const { Adult, Child, Infant } = PaxInfo ?? {};
    const { Single, Double, Twin, Triple, ExtraBed } = RoomInfo ?? {};
    setTravelDate({
      Type: Type ? Type : "",
      FromDate: FromDate ? FromDate : "",
      ToDate: ToDate ? ToDate : "",
      TotalNights: TotalNights ? TotalNights : "",
      SeasonType: SeasonType ? SeasonType : "",
      SeasonYear: SeasonType ? SeasonYear : "",
    });
    dispatch({ type: "SET", value: Adult ? Adult : 0, counter: "counter1" });
    dispatch({ type: "SET", value: Child ? Child : 0, counter: "counter2" });
    dispatch({ type: "SET", value: Infant ? Infant : 0, counter: "counter3" });

    setQueryFields({
      CompanyInfo: CompanyInfo ? CompanyInfo : "",
      AddEmail: AddEmail ? AddEmail : "",
      LeadPax: LeadPax ? LeadPax : "",
      Subject: Subject ? Subject : "",
      AdditionalInfo: AdditionalInfo ? AdditionalInfo : "",
      SearchPackage: SearchPackage ? SearchPackage : "",
      OperationPerson: OperationPerson ? OperationPerson : "",
      ContractPerson: ContractPerson ? ContractPerson : "",
      Priority: Priority ? Priority : "",
      TAT: TAT ? TAT : "",
      TourType: TourType ? TourType : "",
      LeadSource: LeadSource ? LeadSource : "",
      HotelCategory: HotelCategory ? HotelCategory : "",
      LeadReferenced: LeadReferenced ? LeadReferenced : "",
      HotelType: HotelType ? HotelType : "",
      MealPlan: MealPlan ? MealPlan : "",
    });
  }, [emptyData]);

  return (
    <>
      <div className="container-fluid mt-2">
        <div className="">
          {/* <Formik
            initialValues={QueryinputInitialValue}
            // validationSchema={QueryInputSchema}
            onSubmit={handleSubmit}
          > */}
          <form onSubmit={handleSubmit}>
            {/* <div className=""> */}
            <div className="col-xl-12 d-flex align-items-start justify-content-between p-0">
              {/* <h5 className="card-title d-none d-sm-block m-0 p-0">
                Query Form
              </h5>
              <div className="p-0 m-0">
                <button className="blue-button" type="submit" name="SaveButton">
                  Save
                </button> */}
              {/* <button
                  className="orange-button"
                  type="submit"
                  name="ClearButton"
                >
                  Clear
                </button> */}
              {/* <button
                  className="green-button"
                  type="submit"
                  name="SubmitButton"
                >
                  Submit
                </button>
                <Toaster />
                <NavLink to="/querylist" className={"gray-button py-2"}>
                  Back
                </NavLink> */}
              {/* </div> */}
            </div>

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
                            name="AgentName"
                            value={queryFields.AgentName}
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
                          name="PaxType"
                          value={queryFields.PaxType}
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
                              name="hotelCategory"
                              value={queryFields.HotelCategory}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col form-div d-flex justify-content-center align-items-center">
                            <label htmlFor="four" className="m-0 pr-2">
                              4*
                            </label>
                            <input
                              className="form-check-input m-0 p-0 ml-3"
                              type="radio"
                              name="hotelCategory"
                              id="four"
                              value={queryFields.HotelCategory}
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
                              name="hotelCategory"
                              id="five"
                              value={queryFields.HotelCategory}
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
                              name="hotelCategory"
                              id="all"
                              value={queryFields.HotelCategory}
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
                            onChange={handleChange}
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-1">
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            1
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            2
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            3
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            4
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
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
                            onChange={handleChange}
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-1">
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            1
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            2
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            3
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            4
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
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
                            onChange={handleChange}
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-1">
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            1
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            2
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            3
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            4
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
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
                            onChange={handleChange}
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-1">
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            1
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            2
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            3
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            4
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
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
                            name="TplRoom"
                            value={RoomInfo.Triple}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-1">
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            1
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            2
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            3
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            4
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
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
                            onChange={handleChange}
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-1">
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            1
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            2
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            3
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            4
                          </div>
                          <div
                            className="py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center"
                            style={{ height: "19px" }}
                          >
                            5
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-lg-6 d-flex align-items-center">
                        <p className="font-weight-bold">Total Rooms : 0</p>
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
                          value={queryFields.Budget}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6 col-md-6 col-lg-4 form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="TravelType"
                          id="typedateorday"
                          value={queryFields.TravelType}
                          onChange={handleChange}
                        />
                        <label className="form-check-label m-0" htmlFor="typedateorday">
                          Date Wise
                        </label>
                      </div>
                      <div className="col-6 col-md-6 col-lg-4 form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="TravelType"
                          id="daywise"
                          value={queryFields.TravelType}
                          onChange={handleChange}
                        />
                        <label className="form-check-label m-0" htmlFor="daywise">
                          Day Wise
                        </label>
                      </div>
                      {queryFields.TravelType=='2' &&
                        <>
                          <div className="col-6 col-md-12 col-lg-6">
                            <select
                              type="select"
                              className="form-input-2"
                              name="TravelSeason"
                              value={queryFields.TravelSeason}
                              onChange={handleChange}
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
                              name="TravelYear"
                              value={queryFields.TravelYear}
                              onChange={handleChange}
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
                      }
                      {queryFields.TravelType=="2" ? "" : 
                      <div className="col-6 col-md-12 col-lg-6">
                        <label className="m-0">From Date</label>
                        <input
                          type="date"
                          className="form-input-2"
                          name="FromDate"
                          value={TravelDate.FromDate}
                          onChange={handleChange}
                        ></input>
                      </div>}
                      <div className={queryFields.TravelType=="2"? 'col-6' : 'col-4 col-md-6 col-lg-3'}>
                        <label htmlFor="queryType" className="m-0">
                          Total Nights
                        </label>
                        <input
                          type="text"
                          className="form-input-2 text-center p-0"
                          placeholder="0"
                          name="TotalNights"
                          value={TravelDate.TotalNights}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={'col-4 col-md-6 col-lg-2 mt-3'}>
                        <button className="btn btn-primary p-1 height-30">
                          Add Night
                        </button>
                      </div>
                      {TravelDate.TotalNights !== "" &&
                      TravelDate.FromDate !== "" ? (
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
                                        name={`Country${index}`}
                                      >
                                        <option value="1">Select</option>
                                        <option value="2">Inida</option>
                                        <option value="3">Australia</option>
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
                                        <option value="3">Dubai</option>
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
                        <option value={"3"}>Hight</option>
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
                        <option>Adventure Tour</option>
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
                        name="VehiclePreference"
                        value={queryFields.VehiclePreference}
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
                        <option>Instagram</option>
                        <option>Facebook</option>
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
                        name="PackageSearch"
                        value={queryFields.PackageSearch}
                        onChange={handleChange}
                      />
                      <label htmlFor="" className="font-size-12">
                        Click to select the packages
                      </label>
                    </div>
                    <div className="padding-2 d-flex align-items-center border rounded cursor-pointer mt-1">
                      <div>
                        <img
                          src="https://media.cntraveller.com/photos/617936a2a8f76267fba5d115/master/w_1600%2Cc_limit/The%2520Burj%2520Khalifa-GettyImages-1084264582.jpeg"
                          alt=""
                          style={{ height: "35px", width: "35px" }}
                          className="rounded"
                        />
                      </div>
                      <div className="pl-2">
                        <p className="font-size-12 font-weight-bold m-0 p-0">
                          Discover Dubai 5 days
                        </p>
                      </div>
                    </div>
                    <div className="padding-2 d-flex align-items-center border rounded cursor-pointer mt-1">
                      <div>
                        <img
                          src="https://i.natgeofe.com/n/483e77f7-f52b-432a-a0f5-d9cd1489a95a/madinat-jumeirah-dubai-uae_3x4.jpg"
                          alt=""
                          style={{ height: "35px", width: "35px" }}
                          className="rounded"
                        />
                      </div>
                      <div className="pl-2">
                        <p className="font-size-12 font-weight-bold m-0 p-0">
                          Dubai Odessey 6 days
                        </p>
                      </div>
                    </div>
                    <div className="padding-2 d-flex align-items-center border rounded cursor-pointer mt-1">
                      <div>
                        <img
                          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/377486240.jpg?k=956825fb96b0ccd1d754e9b01d3f8fa33d83eb47c44b171bee406d9ae7b78c5e&o=&hp=1"
                          alt=""
                          style={{ height: "35px", width: "35px" }}
                          className="rounded"
                        />
                      </div>
                      <div className="pl-2">
                        <p className="font-size-12 font-weight-bold m-0 p-0">
                          Dubai Unleashed 5 days
                        </p>
                      </div>
                    </div>
                    <div className="padding-2 d-flex align-items-center border rounded cursor-pointer mt-1">
                      <div>
                        <img
                          src="https://r1imghtlak.mmtcdn.com/a271073a79ca11eca91e0a58a9feac02.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg&downsize=192:224.4&crop=192:224.4"
                          alt=""
                          style={{ height: "35px", width: "35px" }}
                          className="rounded margin-l"
                        />
                      </div>
                      <div className="pl-2">
                        <p className="font-size-12 font-weight-bold m-0 p-0">
                          Captivating Highlight 7 days
                        </p>
                      </div>
                    </div>
                    <div className="padding-2 d-flex align-items-center border rounded cursor-pointer mt-1">
                      <div>
                        <img
                          src="https://static.dezeen.com/uploads/2022/02/museum-of-the-future-killa-design-dubai_dezeen_2364_col_20-scaled.jpg"
                          alt=""
                          style={{ height: "35px", width: "35px" }}
                          className="rounded margin-l"
                        />
                      </div>
                      <div className="pl-2">
                        <p className="font-size-12 font-weight-bold m-0 p-0">
                          Enhancing Dubai Delight 6 days
                        </p>
                      </div>
                    </div>
                    <div className="padding-2 d-flex align-items-center border rounded cursor-pointer mt-1">
                      <div>
                        <img
                          src="https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2021_06/story_1330/assets/46.jpeg?time=1624977644&size=*:900"
                          alt=""
                          style={{ height: "35px", width: "35px" }}
                          className="rounded margin-l"
                        />
                      </div>
                      <div className="pl-2">
                        <p className="font-size-12 font-weight-bold m-0 p-0">
                          Maligcal Dubai 5 days
                        </p>
                      </div>
                    </div>
                    <div className="padding-2 d-flex align-items-center border rounded cursor-pointer mt-1">
                      <div>
                        <img
                          src="https://media.architecturaldigest.com/photos/6032b3c9a0b9bd2edd5510d1/1:1/w_2880,h_2880,c_limit/Hero_Soneva%20Jani%20Chapter%20Two%20by%20Aksham%20Abdul%20Ghadir.jpg"
                          alt=""
                          style={{ height: "35px", width: "35px" }}
                          className="rounded margin-l"
                        />
                      </div>
                      <div className="pl-2">
                        <p className="font-size-12 font-weight-bold m-0 p-0">
                          Maldives Magical 5 days
                        </p>
                      </div>
                    </div>
                    <div className="padding-2 d-flex align-items-center border rounded cursor-pointer mt-1">
                      <div>
                        <img
                          src="https://assets.vogue.in/photos/63889b741b8712b28236a56b/2:3/w_2560%2Cc_limit/Goa.jpeg"
                          alt=""
                          style={{ height: "35px", width: "35px" }}
                          className="rounded margin-l"
                        />
                      </div>
                      <div className="pl-2">
                        <p className="font-size-12 font-weight-bold m-0 p-0">
                          Goa Enhance 5 days
                        </p>
                      </div>
                    </div>
                  </div>
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
