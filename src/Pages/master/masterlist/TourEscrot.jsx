import React, { useEffect, useState, useMemo } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  tourEscortInitialValue,
  tourEscortValidationSchema,
} from "./MasterValidations";
import "jquery";
import "select2";

const TourEscort = () => {
  
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [changeValue, setChangeValue] = useState("");
  const [updateData, setUpdateData] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [destinationList, setDestinationList] = useState([]);
  const [languageList, setLanguageList] = useState([]);
  const [imageValue, setImageValue] = useState({
    TourEscortImageName:''
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
      const language = await axiosOther.post("languagelist", {
        Search: "",
        Status: 1,
      });
      setLanguageList(language.data.DataList);
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
        const { data } = await axiosOther.post(
          "tourescortmasterlist",
          postData
        );
        console.log('TourEscortAPI-Data',data.DataList)
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

  const handleEscortImage = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload =()=>{
      const base64 = reader.result;
      const base64String = base64.split(',')[1]
      setImageValue({
        TourEscortImageName:base64String,
      });
    };
    reader.readAsDataURL(file);
    console.log('image-boject-', URL.createObjectURL(e.target.files[0]));
  };
  

  const handleEditClick = (rowValue) => {
    console.log('RowValue', rowValue);

    setImageValue({
      TourEscortImageName: "",
    })
    // setEditData({
    //   id: rowValue.Id,
    //   ServiceType: rowValue.ServiceType,
    //   Name: rowValue.Name,
    //   MobileNumber: rowValue.MobileNumber,
    //   WhatsAppNumber: rowValue.WhatsAppNumber,
    //   AlternateNumber: rowValue.AlternateNumber,
    //   Email: rowValue.Email,
    //   TourEscortLicenseOne: rowValue.TourEscortLicenseOne,
    //   LicenseExpiry: rowValue.LicenseExpiry,
    //   Destination: rowValue.Destination,
    //   Language: rowValue.Language,
    //   Supplier: rowValue.Supplier,
    //   TourEscortLicenseTwo: rowValue.TourEscortLicenseTwo,
    //   ContactPerson: rowValue.ContactPerson,
    //   Designation: rowValue.Designation,
    //   Country: rowValue.Country,
    //   State: rowValue.State,
    //   City: rowValue.City,
    //   PinCode: rowValue.PinCode,
    //   Detail: rowValue.Detail,
    //   Address: rowValue.Address,
    //   Status: rowValue.Status === "Active" ? 1 : 0,
    //   AddedBy: rowValue.AddedBy,
    //   UpdatedBy: rowValue.UpdatedBy,
    // });
    
    setEditData({...rowValue});
    setIsEditing(true);
  };

  const stateFiltered = useMemo(() => {
    const filteredState = stateList.filter(
      (value) => changeValue.Country == value.CountryId
    );
    return filteredState;
  }, [changeValue.Country, changeValue.StateId]);

  const cityFiltered = useMemo(() => {
    const filteredCity = cityList.filter(
      (value) => changeValue.State == value.StateId
    );
    return filteredCity;
  }, [changeValue.city, changeValue.State, changeValue.Country]);

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
          {<img src={row.TourEscortImageData} alt='image' style={{height:'30px', width:'30px'}}></img>}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Service Type",
      selector: (row) => row.ServiceType,
      sortable: true,
    },
    {
      name: "Email/Phone",
      selector: (row) => (
        <>
          <span className="font-size-10">{row.Email} /</span>
          <span className="font-size-10">{row.MobileNumber}</span>
        </>
      ),
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.Address,
      sortable: true,
    },
    {
      name: "Language",
      selector: (row) => row.Language,
      sortable: true,
    },
    {
      name: "Destination",
      selector: (row) => row.Destination,
      sortable: true,
    },
    {
      name: "Details",
      selector: (row) => row.Details,
      sortable: true,
    },
    {
      name: "Status Name",
      selector: (row) => row.Status,
      sortable: true,
    },
  ];

  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div
            className="card shadow-none border"
            style={{ marginBottom: "0" }}
          >
            <div
              className="card-header header-elements-inline bg-info-700 py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Tour Escort</h5>
              </div>
              <div className="col-xl-2 d-flex justify-content-end">
                {/*Bootstrap Modal*/}
                <NavLink
                  to="/master"
                  className="gray-button"
                  aria-expanded="false"
                >
                  Back
                </NavLink>
                <Model
                  heading={"Add Tour Escort / Tour Manager"}
                  apiurl={"addupdatetourescortmaster"}
                  initialValues={tourEscortInitialValue}
                  validationSchema={tourEscortValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
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
                        <label>Service Type</label>
                        <Field
                          name="ServiceType"
                          className="form-control"
                          component={"select"}
                        >
                          <option value="1">Tour Escort</option>
                          <option value="2">Tour Manager</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Name</label>
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Name"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Mobile Number</label>
                        <Field
                          type="text"
                          name="MobileNumber"
                          placeholder="Number"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="MobileNumber" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Whatsapp Number</label>
                        <Field
                          type="text"
                          name="WhatsAppNumber"
                          placeholder="Number"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Alternate Number</label>
                        <Field
                          type="text"
                          name="AlternateNumber"
                          placeholder="Number"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Email</label>
                        <Field
                          type="email"
                          name="Email"
                          placeholder="Email"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Email" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Tour Escort License</label>
                        <Field
                          type="text"
                          name="TourEscortLicenseOne"
                          placeholder="Licence"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>License Expiry</label>
                        <Field
                          type="date"
                          name="LicenseExpiry"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Destination</label>
                        <Field
                          name="Destination"
                          className="form-control"
                          component={"select"}
                        >
                          <option value="">Select Destination</option>
                          {destinationList.map((value, index) => {
                            return (
                              <option value={value.Id} key={index + 1}>
                                {value.Name}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Language</label>
                        <Field
                          name="Language"
                          className="form-control"
                          component={"select"}
                        >
                          <option value="">Select Language</option>
                          {languageList.map((value, index) => {
                            return (
                              <option value={value.Id} key={index + 1}>
                                {value.Name}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label className="font-size-10">
                          Tour Escort / Tour Manager Image
                        </label>
                        <input
                          type="file"
                          name="TourEscortImageName"
                          className="form-control"
                          onChange={handleEscortImage}
                          // value={imageValue.TourEscortImageName}
                          accept="image/*"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Supplier</label>
                        <Field
                          name="Supplier"
                          className="form-control"
                          component={"select"}
                        >
                          <option value="1">Yes</option>
                          <option value="0">No</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Tour Escort License</label>
                        <Field
                          type="text"
                          name="TourEscortLicenseTwo"
                          placeholder="Licence"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Contact Person</label>
                        <Field
                          type="text"
                          name="ContactPerson"
                          placeholder="Person"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Designation</label>
                        <Field
                          type="text"
                          name="Designation"
                          placeholder="Designation"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Country</label>
                        <Field
                          name="Country"
                          className="form-control"
                          component={"select"}
                        >
                          <option value="">Select</option>
                          {countryList.map((value, index) => {
                            return (
                              <option value={value.Id} key={index + 1}>
                                {value.Name}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>State</label>
                        <Field
                          name="State"
                          className="form-control"
                          component={"select"}
                        >
                          <option value="">Select</option>
                          {stateFiltered.map((value, index) => {
                            return (
                              <option value={value.Id} key={index + 1}>
                                {value.Name}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>City</label>
                        <Field
                          name="City"
                          className="form-control"
                          component={"select"}
                        >
                          <option value="">Select</option>
                          {cityFiltered.map((value, index) => {
                            return (
                              <option value={value.Id} key={index + 1}>
                                {value.Name}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Pin Code</label>
                        <Field
                          type="text"
                          name="PinCode"
                          placeholder="Pin Code"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Details</label>
                        <Field
                          as="textarea"
                          name="Detail"
                          placeholder="Details"
                          className="form-control"
                          style={{ height: "38px" }}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Address</label>
                        <Field
                          as="textarea"
                          name="Address"
                          placeholder="Address"
                          className="form-control"
                          style={{ height: "38px" }}
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Address" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Status</label>
                        <Field
                          name="Status"
                          className="form-control"
                          component={"select"}
                        >
                          <option value="1">Active</option>
                          <option value="0">InActive</option>
                        </Field>
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
                    name="Search"
                    placeholder="Search here.."
                    className="search-input focus-ring form-input"
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
                    <option>Select Status</option>
                    <option value="0">Inactive</option>
                    <option value="1">Active</option>
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

          {/*******************------Table Card-----*******************/}
          <div className="card shadow-none border mt-2">
            <DataTable
              columns={columns}
              data={filterData}
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

export default TourEscort;
