import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { Field, ErrorMessage } from "formik";
import {  resturantInitialValue, resturantValidationSchema } from "./MasterValidation";
import { axiosOther } from "../../../http/axios/axios_new";

const Resturant = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [valueForEdit, setValueForEdit] = useState({});

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
  }, []);

  useEffect(() => {
    const result = getData.filter((item) => {
      return item.Name.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleEditClick = (rowValue) => {
    setValueForEdit({ ...rowValue });
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
          {row.Image}
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
      selector: (row) => row.Destination,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.Address,
      sortable: true,
    },
    {
      name: "Rate Sheet",
      selector: (row) => row.Shift,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true,
    },
  ];

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
                <h5 className="card-title d-none d-sm-block">Resturant</h5>
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
                  heading={"Add Resturant"}
                  apiurl={"addupdaterestaurantmaster"}
                  initialValues={resturantInitialValue}
                  validationSchema={resturantValidationSchema}
                  valueForEdit={valueForEdit}
                >
                  <div className="card-body">
                    <div className="row row-gap-3">
                      <div className="col-sm-4">
                        <label>Resturant Name</label>
                        <Field
                          type="text"
                          placeholder="Hotel Chain Name"
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
                          <option value={"1"}>Rajsthan</option>
                          <option value={"2"}>Hryana</option>
                          <option value={"4"}>Bihar</option>
                          <option value={"5"}>West Bangal</option>
                          <option value={"6"}>Banglore</option>
                          <option value={"7"}>Uttar Pradesh</option>
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
                          className="form-control"
                          component={"select"}
                          name="CountryId"
                        >
                          <option value={"0"}>Select Destination</option>
                          <option value={"1"}>India</option>
                          <option value={"2"}>Nepal</option>
                          <option value={"4"}>Pakistan</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>State</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="StateId"
                        >
                          <option value={"0"}>Select Destination</option>
                          <option value={"1"}>Rajsthan</option>
                          <option value={"2"}>Hryana</option>
                          <option value={"4"}>Bihar</option>
                          <option value={"5"}>West Bangal</option>
                          <option value={"6"}>Banglore</option>
                          <option value={"7"}>Uttar Pradesh</option>
                        </Field>
                      </div>

                      <div className="col-sm-4">
                        <label>City</label>
                        <Field
                          className="form-control px-1"
                          component={"select"}
                          name="CityId"
                        >
                          <option value={""}>Select City</option>
                          <option value={"2"}>Gurgaon</option>
                          <option value={"4"}>Noida</option>
                          <option value={"5"}>Delhi</option>
                        </Field>
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
                        <Field
                          type="file"
                          id="file"
                          name="Image"
                          className="form-control"
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
                          <option value={""}>Select Division</option>
                          <option value={"2"}>Accounts</option>
                          <option value={"4"}>FIT Reservation</option>
                          <option value={"5"}>GIT Reservation</option>
                          <option value={"6"}>HR</option>
                          <option value={"7"}>Operation</option>
                          <option value={"7"}>Other</option>
                          <option value={"7"}>Sales</option>
                          <option value={"7"}>Software Developer</option>
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
