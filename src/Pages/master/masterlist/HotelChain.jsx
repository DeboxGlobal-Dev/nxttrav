import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { Field, ErrorMessage } from "formik";
import { hotelChainInitialValue, hotelChainValidationSchema } from "./MasterValidation";
import { axiosOther } from "../../../http/axios/axios_new";

const HotelChain = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("hotelchainlist", postData);
        setGetData(data.DataList);
        setFilterData(data.DataList);
      } catch (error) {
        console.log(error);
      }
    };

    postDataToServer();
  }, [getData]);

  useEffect(() => {
    const result = getData.filter((item) => {
      return item.Name.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleEditClick = (rowValue) => {
    setEditData({ 
      Name:rowValue.Name,
      Location:rowValue.Location,
      HotelWebsite:rowValue.HotelWebsite,
      SelfSupplier:rowValue.SelfSupplier,
      ContaractPerson:rowValue.ContaractPerson,
      AddedBy:rowValue.AddedBy,
      UpdatedBy:rowValue.UpdatedBy,
      Status:rowValue.Status==="Active"?1:0
     });
    setIsEditing(true);
  };

  const columns = [
    {
      name: "Hotel Chain Name",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.Name}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Hotel Website",
      selector: (row) => row.HotelWebsite,
      sortable: true,
    },
    {
      name: "Self Supplier",
      selector: (row) => row.Supplier,
      sortable: true,
    },
    {
      name: "Cont.Person",
      selector: (row) => row.ContractPerson,
      sortable: true,
    },
    {
      name: "AddedBy",
      selector: (row) => row.AddedBy,
      sortable: true,
    },
    {
      name: "UpdatedBy",
      selector: (row) => row.UpdatedBy,
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
                <h5 className="card-title d-none d-sm-block">
                  Hotel Chain Master
                </h5>
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
                  heading={"Add Hotel Chain"}
                  apiurl={"addupdatehotelchain"}
                  initialValues={hotelChainInitialValue}
                  validationSchema={hotelChainValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <label>Hotel Chain Name</label>
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
                      <div className="col-sm-3">
                        <label>Location</label>
                        <Field
                          type="text"
                          placeholder="Location"
                          className="form-control"
                          name="Location"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Location" />
                        </span>
                      </div>
                      <div className="col-sm-3">
                        <label>Hotel Website</label>
                        <Field
                          type="text"
                          placeholder="Hotel Website"
                          className="form-control"
                          name="HotelWebsite"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="HotelWebsite" />
                        </span>
                      </div>
                      <div className="col-sm-3">
                        <label>Self Supplier</label>
                        <Field
                          type="text"
                          placeholder="Self Supplier"
                          className="form-control"
                          name="SelfSupplier"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="SelfSupplier" />
                        </span>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <label>Contact Person</label>
                      <div className="col-sm-2">
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
                      <div className="col-sm-2 px-1">
                        <Field
                          type="text"
                          placeholder="Contact Person"
                          className="form-control"
                          name="ContactName"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ContactName" />
                        </span>
                      </div>
                      <div className="col-sm-2 px-1">
                        <Field
                          type="text"
                          placeholder="Designation"
                          className="form-control"
                          name="ContactDesignation"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ContactDesignation" />
                        </span>
                      </div>
                      <div className="col-sm-2 px-1">
                        <Field
                          type="text"
                          placeholder="+91"
                          className="form-control"
                          name="ContactCountryCode"
                        />
                         <span className="font-size-10 text-danger">
                          <ErrorMessage name="ContactCountryCode" />
                        </span>
                      </div>
                      <div className="col-sm-2 px-1">
                        <Field
                          type="text"
                          placeholder="Phone"
                          className="form-control"
                          name="ContactMobile"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ContactMobile" />
                        </span>
                      </div>
                      <div className="col-sm-2 px-1">
                        <Field
                          type="text"
                          placeholder="Email"
                          className="form-control"
                          name="ContactEmail"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ContactEmail" />
                        </span>
                      </div>
                    </div>
                    <div className="row mt-2">
                    <div className="col-sm-3">
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

export default HotelChain;
