import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import { axiosOther } from "../../../http/axios/axios_new";
import {
  amentiesInitialValue,
  cityInitialValue,
  countryInitialValue,
  destinationInitialValue,
  hotelCategoryInitialValue,
  hotelChainInitialValue,
  hotelMasterCreateInitialValue,
  hotelMasterCreateValidationSchema,
  hotelMasterInitialValue,
  hotelTypeInitialValue,
  roomTypeInitialValue,
  stateInitialValue,
} from "./MasterValidation";

const HotelMasterCreate = () => {
  const [moreAddress, setMoreAddress] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [hotelChain, setHotelChain] = useState([]);
  const [hotelName, setHotelName] = useState([]);
  const [hotelCategory, setHotelCategory] = useState([]);
  const [hotelType, setHotelType] = useState([]);
  const [destination, setDestination] = useState([]);
  const [roomType, setRoomType] = useState([]);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [amenties, setAmenties] = useState([]);

  console.log('HotelCategory', hotelCategory);
  console.log('HotelType', hotelType);
  console.log('Country', country);
  console.log('State', state);
  console.log('City', city);

  const hanldeSubmit = (value) => {
    console.log(value);
  };

  const getDataToServer = async () => {
    // const chainData = await axiosOther.post(
    //   "hotelchainlist",
    //   hotelChainInitialValue
    // );
    // const nameData = await axiosOther.post(
    //   "hotellist",
    //   hotelMasterInitialValue
    // );
    const categoryData = await axiosOther.post(
      "hotelcategorylist",
      hotelCategoryInitialValue
    );
    const typeData = await axiosOther.post(
      "hoteltypelist",
      hotelTypeInitialValue
    );
    // const destinationData = await axiosOther.post(
    //   "destinationlist",
    //   destinationInitialValue
    // );
    // const roomData = await axiosOther.post(
    //   "roomtypelist",
    //   roomTypeInitialValue
    // );
    const countryData = await axiosOther.post(
      "countrylist",
      countryInitialValue
    );
    const stateData = await axiosOther.post("statelist", stateInitialValue);
    const cityData = await axiosOther.post("citylist", cityInitialValue);
    // const amentyData = await axiosOther.post(
    //   "amenitieslist",
    //   amentiesInitialValue
    // );


    // setHotelChain(chainData.data.DataList);
    // setHotelName(nameData.data.DataList);
    setHotelCategory(categoryData.data.DataList);
    setHotelType(typeData.data.DataList);
    // setDestination(destinationData.data.DataList);
    // setRoomType(roomData.data.DataList);
    setCountry(countryData.data.DataList);
    setState(stateData.data.DataList);
    setCity(cityData.data.DataList);
    // setAmenties(amentyData.data.DataList);
  };

  useEffect(() => {
    getDataToServer();
    console.log("UseEffect Rendered.....");
  }, []);

  return (
    <>
      <Layout>
        <div className="container-fluid mt-3 mb-5">
          <div className="card shadow-none border">
            <Formik
              initialValues={hotelMasterCreateInitialValue}
              validationSchema={hotelMasterCreateValidationSchema}
              onSubmit={hanldeSubmit}
            >
              <Form>
                <div
                  className="card-header header-elements-inline bg-info-700 py-2"
                  style={{ padding: "10px" }}
                >
                  <div className="col-xl-10 d-flex align-items-center">
                    <h5 className="card-title d-none d-sm-block">Create New</h5>
                  </div>
                  <div className="">
                    <NavLink
                      to="/master/hotelmaster"
                      className="gray-button py-2"
                      aria-expanded="false"
                    >
                      Back
                    </NavLink>
                    <button className="green-button" type="submit">
                      Save
                    </button>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row row-gap-3">
                    <div className="col-sm-2">
                      <label>Hotel Chain</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="HotelChain"
                      >
                        <option value={""}>Select</option>
                        <option value={"1"}>ITC</option>
                        <option value={"2"}>Oberoi Group</option>
                        <option value={"3"}>Taj Group</option>
                      </Field>
                    </div>
                    <div className="col-sm-2">
                      <label>Hotel Name</label>
                      <Field
                        type="text"
                        placeholder="Hotel Name"
                        className="form-input-1"
                        name="HotelName"
                      />
                      <span className="font-size-10 text-danger">
                        <ErrorMessage name="HotelName" />
                      </span>
                    </div>
                    <div className="col-sm-2">
                      <label>Hotel Category</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="HotelCategory"
                      >
                        <option value={""}>Select</option>
                        {hotelCategory.map((value, ind) => {
                          return (
                            <option value={ind + 1} key={ind + 1}>
                              {value.Name}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                    <div className="col-sm-2">
                      <label>Hotel Type</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="HotelType"
                      >
                        <option value={""}>Select</option>
                        {hotelType.map((value, ind) => {
                          return (
                            <option value={ind + 1} key={ind + 1}>
                              {value.Name}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                    <div className="col-sm-2">
                      <label>Destination</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="HotelDestination"
                      >
                        <option value={""}>Select</option>
                        {destination.map((value, ind) => {
                          return (
                            <option value={ind + 1} key={ind + 1}>
                              {value.Name}
                            </option>
                          );
                        })}
                      </Field>
                      <span className="font-size-10 text-danger">
                        <ErrorMessage name="HotelDestination" />
                      </span>
                    </div>
                    <div className="col-sm-2">
                      <label>Locality</label>
                      <Field
                        type="text"
                        placeholder="Locality"
                        className="form-input-1"
                        name="HotelLocality"
                      />
                      <span className="font-size-10 text-danger">
                        <ErrorMessage name="HotelLocality" />
                      </span>
                    </div>
                    <div className="col-sm-2">
                      <label>Room Type</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="HotelRoomType"
                      >
                        <option value={""}>Select</option>
                        {roomType.map((value, ind) => {
                          return (
                            <option value={ind + 1} key={ind + 1}>
                              {value.Name}
                            </option>

                          );
                        })}
                      </Field>
                      <span className="font-size-10 text-danger">
                        <ErrorMessage name="HotelRoomType" />
                      </span>
                    </div>
                    <div className="col-sm-2">
                      <label>Self Supplier</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="SelfSupplier"
                      >
                        <option value={"1"}>Yes</option>
                        <option value={"2"}>No</option>
                      </Field>
                    </div>
                    <div className="col-sm-2">
                      <label>Status</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="HotelStatus"
                      >
                        <option value={"1"}>Active</option>
                        <option value={"2"}>Inactive</option>
                      </Field>
                    </div>
                    <p className="font-weight-bold mt-1">Contact Person</p>
                    <div className="col-sm-2">
                      <label>Accounts</label>
                      <Field
                        className="form-input-1"
                        component={"select"}
                        name="Accounts"
                      >
                        <option value={"1"}>Select</option>
                        <option value={"2"}>FIT Reservation</option>
                        <option value={"2"}>GIT Reservation</option>
                        <option value={"2"}>Operation</option>
                      </Field>
                    </div>
                    <div className="col-sm-2">
                      <label>Contact Person</label>
                      <Field
                        type="text"
                        placeholder="Contact Person"
                        className="form-input-1"
                        name="ContactPerson"
                      />
                    </div>
                    <div className="col-sm-2">
                      <label>Designation</label>
                      <Field
                        type="text"
                        placeholder="Designation"
                        className="form-input-1"
                        name="Designation"
                      />
                    </div>
                    <div className="col-sm-2">
                      <label>Phone 1</label>
                      <Field
                        type="text"
                        placeholder="Phone 1"
                        className="form-input-1"
                        name="Phone1"
                      />
                    </div>
                    <div className="col-sm-2">
                      <label>Phone 2</label>
                      <Field
                        type="text"
                        placeholder="Phone 2"
                        className="form-input-1"
                        name="Phone2"
                      />
                    </div>
                    <div className="col-sm-2">
                      <label>Email</label>
                      <Field
                        type="text"
                        placeholder="Email"
                        className="form-input-1"
                        name="Email"
                      />
                    </div>
                    <span
                      className="cursor-pointer font-weight-bold text-success"
                      onClick={() => setMoreAddress(!moreAddress)}
                    >
                      <i className="fa-solid fa-plus font-size-15 pr-2"></i>
                      Add Address
                    </span>
                    {moreAddress && (
                      <>
                        <div className="col-sm-2">
                          <label>Country</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="HotelCountry"
                          >
                            <option value={""}>Select</option>
                            {country.map((value, ind) => {
                              return (
                                <option value={ind + 1} key={ind + 1}>
                                  {value.Name}
                                </option>
                              );
                            })}
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>State</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="HotelState"
                          >
                            <option value={""}>Select</option>
                            {state.map((value, ind) => {
                              return (
                                <option value={ind + 1} key={ind + 1}>
                                  {value.Name}
                                </option>
                              );
                            })}
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>City</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="HotelCity"
                          >
                            <option value={""}>Select</option>
                            {city.map((value, ind) => {
                              return (
                                <option value={ind + 1} key={ind + 1}>
                                  {value.Name}
                                </option>
                              );
                            })}
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>PinCode</label>
                          <Field
                            type="text"
                            placeholder="Pin Code"
                            className="form-input-1"
                            name="HotelPinCode"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="PinCode" />
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <label>Address</label>
                          <Field
                            type="text"
                            placeholder="Address"
                            className="form-input-1"
                            name="HotelAddress"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="HotelAddress" />
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <label>GSTN</label>
                          <Field
                            type="text"
                            placeholder="GSTN"
                            className="form-input-1"
                            name="HotelGSTN"
                          />
                        </div>
                      </>
                    )}

                    <p
                      className="cursor-pointer font-weight-bold"
                      onClick={() => setMoreInfo(!moreInfo)}
                    >
                      More Information
                      <span className="pl-2 font-size-15">
                        {moreInfo ? (
                          <i className="fa-solid fa-caret-up"></i>
                        ) : (
                          <i className="fa-solid fa-caret-down"></i>
                        )}
                      </span>
                    </p>
                    {moreInfo && (
                      <>
                        <div className="col-sm-2">
                          <label>Weekend Days</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="HotelWeekend"
                          >
                            <option value={"1"}>SAT-SUN</option>
                            <option value={"2"}>Special Weekend</option>
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>Check In Time</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="CheckIn"
                          >
                            <option value={"1"}>01:00</option>
                            <option value={"2"}>02:00</option>
                            <option value={"3"}>05:00</option>
                            <option value={"4"}>06:00</option>
                            <option value={"5"}>07:00</option>
                            <option value={"6"}>08:00</option>
                            <option value={"7"}>09:00</option>
                            <option value={"8"}>10:00</option>
                            <option value={"9"}>11:00</option>
                            <option value={"10"}>12:00</option>
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>Check Out Time</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="CheckOut"
                          >
                            <option value={"1"}>01:00</option>
                            <option value={"2"}>02:00</option>
                            <option value={"3"}>05:00</option>
                            <option value={"4"}>06:00</option>
                            <option value={"5"}>07:00</option>
                            <option value={"6"}>08:00</option>
                            <option value={"7"}>09:00</option>
                            <option value={"8"}>10:00</option>
                            <option value={"9"}>11:00</option>
                            <option value={"10"}>12:00</option>
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>Hotel Link</label>
                          <Field
                            type="text"
                            placeholder="Locality"
                            className="form-input-1"
                            name="HotelLink"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="HotelLink" />
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <label>Hotel Amenties</label>
                          <Field
                            className="form-input-1"
                            component={"select"}
                            name="HotelAmenties"
                          >
                            <option value={""}>Select</option>
                            {amenties.map((value, ind) => {
                              return (
                                <option value={ind + 1} key={ind + 1}>
                                  {value.Name}
                                </option>
                              );
                            })}
                          </Field>
                        </div>
                        <div className="col-sm-2">
                          <label>Hotel Information</label>
                          <Field
                            type="text"
                            placeholder="Locality"
                            className="form-input-1"
                            name="HotelInfo"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="HotelInfo" />
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <label>Policy</label>
                          <Field
                            type="text"
                            placeholder="Locality"
                            className="form-input-1"
                            name="HotelPolicy"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="HotelPolicy" />
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <label>T&C</label>
                          <Field
                            type="text"
                            placeholder="Locality"
                            className="form-input-1"
                            name="HotelTC"
                          />
                          <span className="font-size-10 text-danger">
                            <ErrorMessage name="T&C" />
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HotelMasterCreate;
