import React, { createContext, useState, useReducer, useEffect } from "react";
import Contact from "./Contact";
import PaxDetails from "./PaxDetails";
import Accomodation from "./Accomodation";
import TravelInfo from "./TravelInfo";
import SetPreference from "./SetPreference";
import DestinationTemplate from "./DestinationTemplate";
import {
  travelInitial,
  paxInitial,
  roomInitial,
  valueAddInitial,
  queryInitial,
} from "../QueryInitialValue";
import { axiosOther } from "../../../http/axios/axios_new";

const addQueryContext = createContext();

const AddQuery = () => {
  ///* All State Start Here*/
  const [TravelDate, setTravelDate] = useState({ ...travelInitial });
  const [PaxInfo, setPaxInfo] = useState({ ...paxInitial });
  const [RoomInfo, setRoomInfo] = useState({ ...roomInitial });
  const { Room, Single, Double, Twin, Triple, ExtraBed } = RoomInfo;
  const [valueAddServices, setValueAddServices] = useState({
    ...valueAddInitial,
  });
  const [queryFields, setQueryFields] = useState({ ...queryInitial });
  const [agentData, setAgentData] = useState({
    Agent: "",
    Contact: "",
  });

  const dropdownInitialState = {
    hotelType: [],
    hotelMeal: [],
    leadList: [],
    tourType: [],
    countryList: [],
    cityList: [],
    businessType: [],
    vehicleType: [],
    seasonList: [],
    destinationList: [],
    hotelCategory: [],
    agentList: [],
    roomList: [],
    queryType: [],
  };
  ///* All State End Here*/

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
      case "BUSINESS-TYPE":
        return { ...state, businessType: action.payload };
      case "VEHICLE-TYPE":
        return { ...state, vehicleType: action.payload };
      case "SEASON-LIST":
        return { ...state, seasonList: action.payload };
      case "DESTINATION-LIST":
        return { ...state, destinationList: action.payload };
      case "HOTEL-CATEGORY":
        return { ...state, hotelCategory: action.payload };
      case "AGENT-LIST":
        return { ...state, agentList: action.payload };
      case "ROOM-LIST":
        return { ...state, roomList: action.payload };
      case "QUERY-TYPE":
        return { ...state, queryType: action.payload };
    }
    return state;
  };

  const [dropdownState, dropdownDispatch] = useReducer(
    dropdownReducer,
    dropdownInitialState
  );

  // Getting data from master api for Dropdown
  useEffect(() => {
    const gettingDataForDropdown = async () => {
      try {
        const { data } = await axiosOther.post("leadlist", {
          Search: "",
          Status: "1",
        });
        dropdownDispatch({ type: "LEAD-LIST", payload: data?.DataList });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosOther.post("hoteltypelist", {
          Search: "",
          Status: "1",
        });
        dropdownDispatch({ type: "HOTEL-TYPE", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosOther.post("tourlist", {
          Search: "",
          Status: "1",
        });
        dropdownDispatch({ type: "TOUR-TYPE", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosOther.post("countrylist", {
          Search: "",
          Status: "1",
        });
        dropdownDispatch({ type: "COUNTRY-LIST", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosOther.post("citylist", {
          Search: "",
          Status: "1",
        });
        dropdownDispatch({ type: "CITY-LIST", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosOther.post("businesstypelist", {
          Search: "",
          Status: "1",
        });
        dropdownDispatch({ type: "BUSINESS-TYPE", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosOther.post("vehicletypemasterlist", {
          Search: "",
          Status: "1",
        });

        dropdownDispatch({ type: "VEHICLE-TYPE", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosOther.post("seasonlist", {
          Search: "",
          Status: "1",
        });

        dropdownDispatch({ type: "SEASON-LIST", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosOther.post("destinationlist", {
          Search: "",
          Status: "1",
        });

        dropdownDispatch({ type: "DESTINATION-LIST", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosOther.post("hotelcategorylist", {
          Search: "",
          Status: "1",
        });

        dropdownDispatch({ type: "HOTEL-CATEGORY", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosOther.post("roomsharingmasterlist", {
          Search: "",
          Status: "1",
        });

        dropdownDispatch({ type: "ROOM-LIST", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }
      try {
        const { data } = await axiosOther.post("querytypelist", {
          Search: "",
          Status: "1",
        });

        dropdownDispatch({ type: "QUERY-TYPE", payload: data.DataList });
      } catch (err) {
        console.log(err);
      }
    };
    gettingDataForDropdown();
  }, []);

  /* All Functions Start Here */
  const handleUnSubmittedQuery = () => {};

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    console.log({
      ...queryFields,
      PaxInfo: PaxInfo,
      RoomInfo: RoomInfo,
      TravelDate: TravelDate,
    });
  };

  const storedData = "abc";

  console.log("query-all-data", {...queryFields, PaxInfo, RoomInfo, TravelDate});

  return (
    <addQueryContext.Provider
      value={{
        queryObjects: {
          queryFields,
          setQueryFields,
        },
        paxObject: {
          PaxInfo,
          setPaxInfo,
        },
        roomObject: {
          RoomInfo,
          setRoomInfo,
        },
        travelObject: {
          TravelDate,
          setTravelDate,
        },
        dropdownObject: {
          dropdownState,
        },
      }}
    >
      <div className="container-fluid mt-2">
        <form onSubmit={handleQuerySubmit}>
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="row py-1 column-gap-2 row-gap-2">
                <Contact />
                <PaxDetails />
              </div>
              <div className="row mt-3 py-1 column-gap-2 row-gap-2">
                <Accomodation />
                <TravelInfo />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="row py-1 row-gap-2">
                <SetPreference />
                <DestinationTemplate />
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
                                  {storedData?.LeadRefrencedId}
                                </p>
                              </div>
                              <div>
                                <span className="text-secondary">
                                  Contracting Person
                                </span>
                                <p className="">{storedData?.ContractPerson}</p>
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
                <button className="blue-button cursor-none" name="SaveButton">
                  Save
                </button>
                {location.state == null ? (
                  <button
                    className="green-button cursor-none"
                    name="SubmitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className="green-button cursor-none"
                    name="UpdateButton"
                  >
                    Update
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </addQueryContext.Provider>
  );
};

export default AddQuery;
export { addQueryContext };
