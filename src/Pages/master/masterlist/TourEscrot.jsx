import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  tourEscortInitialValue,
  tourEscortValidationSchema
} from "./MasterValidation";
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

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("tourescortlist", postData);
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
      id: rowValue.Id,
      ServiceType:rowValue.ServiceType,
      Name: rowValue.Name,
      MobileNumber: rowValue.MobileNumber,
      WhatsAppNumber: rowValue.WhatsAppNumber,
      AlternateNumber: rowValue.AlternateNumber,
      Email: rowValue.Email,
      TourEscortLicenseOne: rowValue.TourEscortLicenseOne,
      LicenseExpiry: rowValue.LicenseExpiry,
      Destination: rowValue.Destination,
      Language: rowValue.Language,
      TourEscortImageName: rowValue.TourEscortImageName,
      TourEscortImageData: rowValue.TourEscortImageData,
      Supplier: rowValue.Supplier,
      TourEscortLicenseTwo: rowValue.TourEscortLicenseTwo,
      ContactPerson: rowValue.ContactPerson,
      Designation: rowValue.Designation,
      Country: rowValue.Country,
      State: rowValue.State,
      City: rowValue.City,
      PinCode: rowValue.PinCode,
      Detail: rowValue.Detail,
      Address: rowValue.Address,
      Status: rowValue.Status,
      AddedBy: rowValue.AddedBy,
      UpdatedBy: rowValue.UpdatedBy,
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
          {row.Image}
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
                  apiurl={"addupdatetourescort"}
                  initialValues={tourEscortInitialValue}
                  validationSchema={tourEscortValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
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
                          <option value={1}>Tour Escort</option>
                          <option value={0}>Tour Manager</option>
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
                          type="text"
                          name="Destination"
                          placeholder="Destination"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Destination" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Language</label>
                        <Field
                          type="text"
                          name="Language"
                          placeholder="Language"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label className="font-size-10">
                          Tour Escort / Tour Manager Image
                        </label>
                        <Field
                          type="file"
                          name="TourEscortImageData"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Supplier</label>
                        <Field
                          name="Supplier"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Yes</option>
                          <option value={0}>No</option>
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
                          <option value={0}>Select</option>
                          <option value={1}>India</option>
                          <option value={1}>Pakistan</option>
                          <option value={1}>Nepal</option>
                          <option value={1}>Bangaldesh</option>
                          <option value={1}>Shri Lanka</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>State</label>
                        <Field
                          name="State"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={0}>Select</option>
                          <option value={1}>Delhi</option>
                          <option value={1}>Hydrabad</option>
                          <option value={1}>Haryana</option>
                          <option value={1}>Bihar</option>
                          <option value={1}>West Bangal</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>City</label>
                        <Field
                          name="City"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={0}>Select</option>
                          <option value={1}>Delhi</option>
                          <option value={1}>Gurgaon</option>
                          <option value={1}>Noida</option>
                          <option value={1}>Lucknow</option>
                          <option value={1}>Munger</option>
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
                          <option value={1}>Active</option>
                          <option value={0}>InActive</option>

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
                    <option value={0}>Inactive</option>
                    <option value={1}>Active</option>
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
