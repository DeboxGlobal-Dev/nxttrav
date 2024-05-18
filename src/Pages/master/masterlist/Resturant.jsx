import React, { useState, useEffect, useMemo } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { Field, ErrorMessage } from "formik";
import {  resturantInitialValue, resturantValidationSchema } from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";

const Resturant = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [changeValue, setChangeValue] = useState("");
  const [updateData, setUpdateData] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [destinationList, setDestinationList] = useState([]);
  const [divisionList, setDivisionList] = useState([]);
  const [imageValue, setImageValue] = useState({
    ImageData:'',
    ImageName:''
  });

  const getDataToServer = async () => {
    try {
      const countryData = await axiosOther.post("countrylist", {
        Search: "",
        Status: 1,
      });
      setCountryList(countryData.data.DataList);
    } catch (err) {
      console.log(err);
    }

    try {
      const stateData = await axiosOther.post("statelist", {
        Search: "",
        Status: 1,
      });
      setStateList(stateData.data.DataList);
    } catch (err) {
      console.log(err);
    }

    try {
      const cityData = await axiosOther.post("citylist", {
        Search: "",
        Status: 1,
      });
      setCityList(cityData.data.DataList);
    } catch (err) {
      console.log(err);
    }

    try {
      const destination = await axiosOther.post("destinationlist", {
        Search: "",
        Status: 1,
      });
      setDestinationList(destination.data.DataList);
    } catch (err) {
      console.log(err);
    }
    try {
      const division = await axiosOther.post("divisionlist", {
        Search: "",
        Status: 1,
      });
      setDivisionList(division.data.DataList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDataToServer();
  }, []);
  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("restaurantmasterlist", postData);
        setGetData(data.DataList);
        setFilterData(data.DataList);
      } catch (error) {
        console.log(error);
      }
    };
    postDataToServer();
  }, [updateData]);

  useEffect(() => {
    const result = getData.filter((item) => {
      return item.Name.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleEditClick = (rowValue) => {
    setImageValue({
      ImageData:"",
      ImageName:""
    });
    setValueForEdit({
      ...rowValue,
      Status:rowValue.Status==="Active"? 1:0
    });
    setIsEditing(true);
  };

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
         <img src={row.ImageName} alt="image" style={{height:'30px', height:'30px'}}></img>
        </span>
      ),
      sortable: true,
    },
    {
      name: "Resturant Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Destination",
      selector: (row) => row.DestinationId,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.Address,
      sortable: true,
    },
    {
      name: "Rate Sheet",
      selector: (row) => row.Sheet,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true,
    },
  ];

  const stateFiltered = useMemo(() => {
    const filteredState = stateList.filter(
      (value) => changeValue.CountryId == value.CountryId
    );
    return filteredState;
  }, [changeValue.CountryId, changeValue.StateId]);


  const cityFiltered = useMemo(() => {
    const filteredCity = cityList.filter(
      (value) => changeValue.StateId == value.StateId
    );
    return filteredCity;
  }, [changeValue.cityId, changeValue.StateId, changeValue.CountryId]);


  const handleRestaurantImage = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () =>{
      const base64 = reader.result;
      const base64String = base64.split(',')[1];
      setImageValue({
        ImageData:base64String,
        ImageName:file.name
      });
    };
    reader.readAsDataURL(file);
  };

  // console.log('ImageValue', imageValue);

  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="card shadow-none border">
            <div
              className="card-header header-elements-inline bg-info-700 py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Restaurant</h5>
              </div>
              <div className="col-xl-2 d-flex justify-content-end">
                {/* Bootstrap Modal */}
                <NavLink
                  to="/master"
                  className="gray-button"
                  aria-expanded="false"
                >
                  Back
                </NavLink>
                <Model
                  heading={"Add Restaurant"}
                  apiurl={"addupdaterestaurantmaster"}
                  initialValues={resturantInitialValue}
                  validationSchema={resturantValidationSchema}
                  editData = {editData}
                  isEditing= {isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                  imageValue={imageValue}
                  setImageValue={setImageValue}
                >
                  <div className="card-body">
                    <div className="row row-gap-3">
                      <div className="col-sm-4">
                        <label>Restaurant Name</label>
                        <Field
                          type="text"
                          placeholder="Restaurant Name"
                          className="form-control"
                          name="Name"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label htmlFor="">Destination</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="DestinationId"
                        >
                          <option value={"0"}>Select Destination</option>
                          {
                            destinationList.map((value, index)=>{
                              return <option value={value.id} key={index+1}>{value.Name}</option>
                            })
                          }
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Address</label>
                        <Field
                          type="text"
                          placeholder="Address"
                          className="form-control"
                          name="Address"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Address" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Country</label>
                        <Field
                          name="CountryId"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={0}>Select</option>
                          {countryList.map((value, index) => {
                            return (
                              <option value={value.id} key={index + 1}>
                                {value.Name}
                              </option>
                            );
                          })}
                        </Field>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="CountryId" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>State</label>
                        <Field
                          name="StateId"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={0}>Select</option>
                          {stateFiltered.map((value, index) => {
                            return (
                              <option value={value.id} key={index + 1}>
                                {value.Name}
                              </option>
                            );
                          })}
                        </Field>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="StateId"/>
                        </span>
                      </div>

                      <div className="col-sm-4">
                        <label>City</label>
                        <Field
                          name="CityId"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={0}>Select</option>
                          {cityFiltered.map((value, index) => {
                            return (
                              <option value={value.id} key={index + 1}>
                                {value.Name}
                              </option>
                            );
                          })}
                        </Field>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="CityId"/>
                        </span>
                      </div>

                      <div className="col-sm-4">
                        <label>Supplier</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="SelfSupplier"
                        >
                          <option value="1">Yes</option>
                          <option value="0">No</option>
                        </Field>
                      </div>

                      <div className="col-sm-4">
                        <label>Pin Code</label>
                        <Field
                          type="text"
                          placeholder="Pin Code"
                          className="form-control"
                          name="PinCode"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="PinCode" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>GSTN</label>
                        <Field
                          type="text"
                          placeholder="GSTN"
                          className="form-control"
                          name="GSTN"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="GSTN" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Image Upload</label>
                        <input
                          type="file"
                          name="ImageData"
                          className="form-control"
                          onChange={handleRestaurantImage}
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Image"/>
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Status</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="Status"
                        >
                          <option value="1">Active</option>
                          <option value="0">Inactive</option>
                        </Field>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Status" />
                        </span>
                      </div>
                    </div>
                    <div className="row mt-3 row-gap-1">
                      <label className="">Contact Person</label>
                      <div className="col-sm-3 px-1">
                        <Field
                          className="form-control px-1"
                          component={"select"}
                          name="ContactType"
                        >
                          <option value={""}>Select Contact</option>
                          {
                            divisionList.map((value, index)=>{
                              return <option value={value.Id} key={index+1}>{value.Name}</option>
                            })
                          }
                        </Field>
                      </div>
                      <div className="col-sm-3 px-1">
                        <Field
                          type="text"
                          placeholder="Contact Person"
                          className="form-control"
                          name="ContactName"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ContactName"/>
                        </span>
                      </div>
                      <div className="col-sm-3 px-1">
                        <Field
                          type="text"
                          placeholder="Designation"
                          className="form-control"
                          name="ContactDesignation"
                        />
                         <span className="font-size-10 text-danger">
                          <ErrorMessage name="ContactDesignation"/>
                        </span>
                      </div>
                      <div className="col-sm-3 px-1">
                        <Field
                          type="text"
                          placeholder="+91"
                          className="form-control"
                          name="CountryCode"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="CountryCode"/>
                        </span>
                      </div>
                      <div className="col-sm-3 px-1">
                        <Field
                          type="text"
                          placeholder="Phone 1"
                          className="form-control"
                          name="Phone1"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Phone1"/>
                        </span>
                      </div>
                      <div className="col-sm-3 px-1">
                        <Field
                          type="text"
                          placeholder="Phone 2"
                          className="form-control"
                          name="Phone2"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Phone2"/>
                        </span>
                      </div>
                      <div className="col-sm-3 ">
                        <Field
                          type="text"
                          placeholder="Phone 3"
                          className="form-control"
                          name="Phone3"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Phone3"/>
                        </span>
                      </div>
                      <div className="col-sm-3 px-1">
                        <Field
                          type="email"
                          placeholder="Email"
                          className="form-control"
                          name="ContactEmail"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ContactEmail"/>
                        </span>
                      </div>
                    </div>
                  </div>
                </Model>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input focus-ring form-input"
                    name="Search"
                    value={postData.Search}
                    onChange={(e) =>
                      setPostData({ ...postData, Search: e.target.value })
                    }
                  />
                </div>
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <select
                    className="select-input focus-ring form-input"
                    name="Status"
                    value={postData.Status}
                    onChange={(e) =>
                      setPostData({ ...postData, Status: e.target.value })
                    }
                  >
                    <option value="0">Select Status</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                  </select>
                </div>
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <button className="btn bg-teal-400 w-75 custom-h-37">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-none border">
            <DataTable
              columns={columns}
              data={
                postData.Search !== "" || postData.Status !== ""
                  ? filterData
                  : getData
              }
              pagination
              fixedHeader
              fixedHeaderScrollHeight="280px"
              highlightOnHover
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Resturant;
