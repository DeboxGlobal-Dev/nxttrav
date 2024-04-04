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
    Single: "",
    Double: "",
    Twin: "",
    Triple: "",
    ExtraBed: "",
  });
  const [queryFields, setQueryFields] = useState({
    CompanyInfo: "",
    AddEmail: "",
    LeadPax: "",
    Subject: "",
    AdditionalInfo: "",
    SearchPackage: "",
    OperationPerson: "",
    ContractPerson: "",
    Priority: "",
    TAT: "",
    TourType: "",
    LeadSource: "",
    HotelCategory: "",
    LeadReferenced: "",
    HotelType: "",
    MealPlan: "",
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
    counter4: 0,
    counter5: 0,
    counter6: 0,
    counter7: 0,
    counter8: 0,
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
        // console.log('TourType', tour)
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
      toast.success('Query Form Cleared !');  
      setEmptyData(!emptyData);
    } else if (document.activeElement.name === "SubmitButton") {
      localStorage.removeItem("Query");
      console.log("SUBMIT-BUTTON-RENDERED");
      toast.success('Query Submitted Successfully!');
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
  };

  const handleQueryChange = (e) => {
    setQueryFields({ ...queryFields, [e.target.name]: e.target.value });
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
    setTravelDate({ ...TravelDate, ToDate: finalToDate });
    createDateArray();
  }, [TravelDate.FromDate, TravelDate.TotalNights, TravelDate.ToDate]);

  // Update Total Values in Pax and Rooms
  const updateTotal = () => {
    const {
      counter1,
      counter2,
      counter3,
      counter4,
      counter5,
      counter6,
      counter7,
      counter8,
    } = state;
    setPaxTotal(counter1 + counter2 + counter3);
    setRoomsTotal(counter4 + counter5 + counter6 + counter7 + counter8);
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

  useEffect(() => {
    updateTotal();
    setRoomInfo({
      Single: state.counter4,
      Double: state.counter5,
      Twin: state.counter6,
      Triple: state.counter7,
      ExtraBed: state.counter8,
    });
  }, [state]);

  // Data Set into input field from localstorage and remove on Submit and Clear;
  useEffect(() => {
    const {
      TravelDate,PaxInfo,RoomInfo,CompanyInfo,AddEmail,
      LeadPax,Subject,AdditionalInfo,SearchPackage,
      OperationPerson,ContractPerson,Priority,TAT,TourType,
      LeadSource,HotelCategory,LeadReferenced,HotelType,MealPlan,
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
    dispatch({ type: "SET", value: Single ? Single : 0, counter: "counter4" });
    dispatch({ type: "SET", value: Double ? Double : 0, counter: "counter5" });
    dispatch({ type: "SET", value: Twin ? Twin : 0, counter: "counter6" });
    dispatch({ type: "SET", value: Triple ? Triple : 0, counter: "counter7" });
    dispatch({
      type: "SET",
      value: ExtraBed ? ExtraBed : 0,
      counter: "counter8",
    });

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
              <h5 className="card-title d-none d-sm-block m-0 p-0">
                Query Form
              </h5>
              <div className="p-0 m-0">
                <button className="blue-button" type="submit" name="SaveButton">
                  Save
                </button>
                <button
                  className="orange-button"
                  type="submit"
                  name="ClearButton"
                >
                  Clear
                </button>
                <button
                  className="green-button"
                  type="submit"
                  name="SubmitButton"
                >
                  Submit
                </button>
                <Toaster />
                <NavLink to="/querylist" className={"gray-button py-2"}>
                  Back
                </NavLink>
              </div>
            </div>
            <div className="row p-1 column-gap-md-1 row-gap-2 justify-content-between">
              <div className="col-12 p-0 ">
                <div className="card shadow-none border p-1 bg-gray">
                  <h6 className="text-dark m-0">Contact Information</h6>
                  <div className="row row-gap-2 ">
                    <div className="col-12 col-sm-6 col-md-3">
                      <input
                        type="text"
                        className="form-input-2"
                        placeholder="Company, Email, Phone, Contact Person"
                        name="CompanyInfo"
                        onChange={handleQueryChange}
                        value={queryFields.CompanyInfo}
                      ></input>
                      {errors.CompanyInfo && (
                        <span className="text-danger font-size-10">
                          {errors.CompanyInfo}
                        </span>
                      )}
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                      <input
                        type="text"
                        placeholder="text@example.com"
                        className="form-input-2"
                        name="AddEmail"
                        onChange={handleQueryChange}
                        value={queryFields.AddEmail}
                      ></input>
                      {errors.AddEmail && (
                        <span className="text-danger font-size-10">
                          {errors.AddEmail}
                        </span>
                      )}
                    </div>
                    <div className="col-12 col-sm-6 col-md-2">
                      <input
                        type="text"
                        className="form-input-2"
                        placeholder="Lead Pax Name"
                        name="LeadPax"
                        onChange={handleQueryChange}
                        value={queryFields.LeadPax}
                      ></input>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2">
                      <input
                        type="text"
                        className="form-input-2"
                        placeholder="Subject"
                        name="Subject"
                        onChange={handleQueryChange}
                        value={queryFields.Subject}
                      ></input>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2">
                      <input
                        type="textArea"
                        placeholder="Additional Information"
                        className="form-input-2"
                        name="AdditionalInfo"
                        onChange={handleQueryChange}
                        value={queryFields.AdditionalInfo}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md col-sm-6 border rounded px-1">
                <div className="row row-gap-2 p-0 pt-1 ">
                  <h6 className="m-0">Destination Details</h6>
                  <div className="col-md-12 col-12">
                    <select
                      component={"select"}
                      className="form-input-1"
                      name="Type"
                      value={TravelDate.Type}
                      onChange={handleChange}
                    >
                      <option value="1">Date Wise</option>
                      <option value="2">Day Wise</option>
                    </select>
                  </div>
                  <div className="col-5 pl-2 pr-0">
                    <label>From Date</label>
                    <input
                      type="date"
                      className="form-input-1"
                      name="FromDate"
                      value={TravelDate.FromDate}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="col-5 pl-1 pr-0">
                    <label>To Date</label>
                    <input
                      type="date"
                      className="form-input-1"
                      name="ToDate"
                      value={TravelDate.ToDate}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="col-2 pl-1">
                    <label>Night</label>
                    <input
                      type="text"
                      className="form-input-1 backgroundColor-3"
                      placeholder=""
                      name="TotalNights"
                      value={TravelDate.TotalNights}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                {TravelDate.TotalNights !== "" && TravelDate.FromDate !== "" ? (
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
              <div className="col-md col-sm-6 border rounded">
                <div className="row py-1 row-gap-2 ">
                  <h6 className="m-0 p-0 pl-2">Pax Information</h6>
                  <div className="col-4">
                    <label htmlFor="" className="m-0">
                      Adult
                    </label>
                    <Counter
                      value={state.counter1}
                      dispatch={dispatch}
                      counter="counter1"
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="" className="m-0">
                      Child
                    </label>
                    <Counter
                      value={state.counter2}
                      dispatch={dispatch}
                      counter="counter2"
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="" className="m-0">
                      Infant
                    </label>
                    <Counter
                      value={state.counter3}
                      dispatch={dispatch}
                      counter="counter3"
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="" className="m-0">
                      Total
                    </label>
                    <div
                      className="backgroundColor-1 rounded
                      d-flex justify-content-center align-items-center font-weight-bold"
                      style={{ height: "25px" }}
                    >
                      Total : {PaxTotal}
                    </div>
                  </div>
                </div>
                <div className="row row-gap-2">
                  <h6 className="m-0">Room's Information</h6>
                  <div className="col-4">
                    <label htmlFor="" className="m-0">
                      Single
                    </label>
                    <Counter
                      value={state.counter4}
                      dispatch={dispatch}
                      counter="counter4"
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="" className="m-0">
                      Double
                    </label>
                    <Counter
                      value={state.counter5}
                      dispatch={dispatch}
                      counter="counter5"
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="" className="m-0">
                      Twin
                    </label>
                    <Counter
                      value={state.counter6}
                      dispatch={dispatch}
                      counter="counter6"
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="" className="m-0">
                      Triple
                    </label>
                    <Counter
                      value={state.counter7}
                      dispatch={dispatch}
                      counter="counter7"
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="" className="m-0">
                      Extra Bed
                    </label>
                    <Counter
                      value={state.counter8}
                      dispatch={dispatch}
                      counter="counter8"
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="" className="m-0">
                      Total
                    </label>
                    <div
                      className="backgroundColor-1 rounded
                      d-flex justify-content-center align-items-center font-weight-bold"
                      style={{ height: "25px" }}
                    >
                      Total : {RoomsTotal}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md col-sm-6 border py-2 rounded">
                <div className="row row-gap-2">
                  <h6>Suggested Package</h6>
                  <div className="col-12">
                    <label>Search:</label>
                    <input
                      type="text"
                      className="form-input-1"
                      placeholder="Search Package.."
                      name="Search"
                      onChange={handleQueryChange}
                      value={queryFields.SearchPackage}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-md col-sm-6 border py-2 rounded">
                <div className="row row-gap-2">
                  <h6>Other Detail's</h6>
                  <div className="col-md-6 col-12">
                    <label> Operation Person </label>
                    <select
                      type="select"
                      className="form-input-1"
                      name="OperationPerson"
                      onChange={handleQueryChange}
                      value={queryFields.OperationPerson}
                    >
                      <option value={0}>Select Person</option>
                      <option value={1}>Ansar</option>
                      <option value={2}>Satendra</option>
                      <option value={3}>Prasang</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-12">
                    <label> Contract.. Person </label>
                    <input
                      type="text"
                      className="form-input-1"
                      name="ContractingPerson"
                      placeholder="Person"
                      onChange={handleQueryChange}
                      value={queryFields.ContractingPerson}
                    />
                  </div>
                  <div className="col-md-6 col-12">
                    <label> Priority </label>
                    <select
                      type="select"
                      className="form-input-1"
                      name="Priority"
                      onChange={handleQueryChange}
                      value={queryFields.Priority}
                    >
                      <option value={0}>Select Priority</option>
                      <option value={1}>Normal</option>
                      <option value={2}>Medium</option>
                      <option value={3}>Hight</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-12">
                    <label> TAT </label>
                    <select
                      type="select"
                      className="form-input-1"
                      name="TAT"
                      onChange={handleQueryChange}
                      value={queryFields.TAT}
                    >
                      <option value={0}>Select TAT</option>
                      <option value={1}>24 Hours</option>
                      <option value={2}>48 Hours</option>
                      <option value={3}>72 Hours</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-12">
                    <label> Tour Type </label>
                    <select
                      type="select"
                      className="form-input-1"
                      name="TourType"
                      onChange={handleQueryChange}
                      value={queryFields.TourType}
                    >
                      <option value={0}>Select</option>
                      {tourType.map((value, ind) => {
                        return (
                          <option value={ind + 1} key={ind + 1}>
                            {value.Name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-md-6 col-12">
                    <label> Lead Source </label>
                    <select
                      type="select"
                      className="form-input-1"
                      name="LeadSource"
                      onChange={handleQueryChange}
                      value={queryFields.LeadSource}
                    >
                      <option value={0}>Select</option>
                      {leadList.map((value, ind) => {
                        return (
                          <option value={ind + 1} key={ind + 1}>
                            {value.Name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-md-6 col-12">
                    <label> Hotel Category </label>
                    <div className="form-input-1 pl-0 border-0 d-flex justify-content-between align-items-center">
                      <i className="fa-solid fa-star cursor-pointer font-size-15 color-gold"></i>
                      <i className="fa-solid fa-star cursor-pointer font-size-15 color-gold"></i>
                      <i className="fa-solid fa-star cursor-pointer font-size-15 color-gold"></i>
                      <i className="fa-solid fa-star cursor-pointer font-size-15 color-gold"></i>
                      <i className="fa-solid fa-star cursor-pointer font-size-15 color-gold"></i>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <label> Lead Referenced </label>
                    <input
                      type="text"
                      className="form-input-1"
                      name="LeadReferenced"
                      placeholder="Referenced Id"
                      onChange={handleQueryChange}
                      value={queryFields.LeadReferenced}
                    />
                  </div>
                  <div className="col-md-6 col-12">
                    <label> Hotel Type </label>
                    <select
                      type="select"
                      className="form-input-1"
                      name="HotelType"
                      onChange={handleQueryChange}
                      value={queryFields.HotelType}
                    >
                      <option value={0}>Select Type</option>

                      {hotelType.map((value, ind) => {
                        return (
                          <option value={ind + 1} key={ind + 1}>
                            {value.Name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-md-6 col-12">
                    <label> Meal Plan </label>
                    <select
                      type="select"
                      className="form-input-1"
                      name="MealPlan"
                      onChange={handleQueryChange}
                      value={queryFields.MealPlan}
                    >
                      <option value={0}>Select Plan</option>
                      {hotelMeal.map((value, ind) => {
                        return (
                          <option value={ind + 1} key={ind + 1}>
                            {value.Name}
                          </option>
                        );
                      })}
                    </select>
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
