import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage, Formik } from "formik";
import {
  monumentInitialValue,
  monumentValidatinSchema,
} from "./MasterValidations";
import "jquery";
import "select2";
import Editor from "../../../helper/Editor";

const Monument = () => {
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
  const [destinationList, setDestinationList] = useState([]);
  const [weekendList, setWeekendList] = useState([]);

  const getDataToServer = async () => {
    try {
      const destination = await axiosOther.post("destinationlist", {
        Search: "",
        Status: 1,
      });
      setDestinationList(destination.data.DataList);
    } catch (err) {
      console.log("Erro Occured", err);
    }

    try {
      const weekend = await axiosOther.post("weekendlist", {
        Search: "",
        Status: 1,
      });
      setWeekendList(weekend.data.DataList);
    } catch (err) {
      console.log("Erro Occured", err);
    }
  };

  useEffect(() => {
    getDataToServer();
  }, []);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("monumentmasterlist", postData);
        setGetData(data.DataList);
        setFilterData(data.DataList);
        console.log("data", data?.DataList);
      } catch (error) {
        console.log(error);
      }
    };
    postDataToServer();
  }, [updateData]);

  useEffect(() => {
    const result = getData.filter((item) => {
      return item?.Name?.toLowerCase()?.match(postData?.Search?.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleEditClick = (rowValue) => {
    setEditData({
      ...rowValue,
      Status: rowValue.Status === "Active" ? 1 : 0,
    });
    setIsEditing(true);
  };

  const handleDescriptionEditor = (content) => {
    console.log(content);
  };

  // console.log("monument-list", getData);
  const columns = [
    {
      name: "Photo",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.Photo}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Monument Name",
      selector: (row) => row.MonumentName,
      sortable: true,
    },
    {
      name: "Destination",
      selector: (row) => row.Destination,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.Description,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: "Langauge",
      selector: (row) => (
        <button className="border font-size-10 p-1 px-2 rounded-pill bg-success">
          View Language
        </button>
      ),
      sortable: true,
    },
    {
      name: "Gallery",
      selector: (row) => (
        <button className="border font-size-10 p-1 px-2 rounded-pill bg-success">
          + Gallery
        </button>
      ),
      sortable: true,
    },
    {
      name: "Rate Sheet",
      selector: (row) => (
        <NavLink
          to={`/master/monument/rate/${row?.id}`}
          state={{ Name: row?.MonumentName }}
        >
          <button className="border font-size-10 p-1 px-2 rounded-pill bg-success">
            + View/Add
          </button>
        </NavLink>
      ),
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
                <h5 className="card-title d-none d-sm-block">
                  Monument Master
                </h5>
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
                  heading={"Add Monument"}
                  apiurl={"addupdatemonumentmaster"}
                  initialValues={monumentInitialValue}
                  validationSchema={monumentValidatinSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                >
                  <div className="row row-gap-3">
                    <div className="col-sm-4">
                      <div className="d-flex justify-content-between">
                        <label className="m-0 font-size-12">
                          Monument Name
                        </label>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="MonumentName"
                        placeholder="Monument Name"
                        className="form-input-6"
                      />
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Destination</label>
                      <Field
                        name="Destination"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="">Select Destination</option>
                        {destinationList.map((value, index) => {
                          return (
                            <option value={value.id} key={index + 1}>
                              {value.Name}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Transfer Type</label>
                      <Field
                        name="TransferType"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="1">Ticket Only</option>
                        <option value="2">ALL</option>
                        <option value="3">SIC</option>
                        <option value="4">PVT</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Status</label>
                      <Field
                        name="Status"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Closed On Days</label>
                      <Field
                        name="ClosedOnDays"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="1">Sunday</option>
                        <option value="2">Monday</option>
                        <option value="3">Tuesday</option>
                        <option value="4">Wednesday</option>
                        <option value="5">Thirsday</option>
                        <option value="6">Friday</option>
                        <option value="7">Saturday</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-0">
                        SetDefault for Qoutation
                      </label>
                      <Field
                        name="DefaultQuotation"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">
                        SetDefault for Proposal
                      </label>
                      <Field
                        name="DefaultProposal"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Weekend Days</label>
                      <Field
                        name="WeekendDays"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="">Select Weekend</option>
                        {weekendList.map((value, index) => {
                          return (
                            <option value={value.id} key={index + 1}>
                              {value.WeekendDays}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                    <div className="col-sm-12">
                      <label className="m-0 font-size-12">Description</label>
                      <Editor
                        handleChangeEditor={handleDescriptionEditor}
                        heightValue="60%"
                      />
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

export default Monument;
