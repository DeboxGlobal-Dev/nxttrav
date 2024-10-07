import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  sightseeingInitialValue,
  sightseeingValidationSchema,
} from "./MasterValidations";
import "jquery";
import "select2";
import Editor from "../../../helper/Editor";

const Sightseeing = () => {

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

  const getDataToServer = async () => {
    try {
      const destination = await axiosOther.post("destinationlist", {
        Search: "",
        Status: 1,
      });
      setDestinationList(destination.data.DataList);
    } catch (err) {
      console.log("Error Occured", err);
    }
  };
  useEffect(() => {
    getDataToServer();
  }, []);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post(
          "sightseeingmasterlist",
          postData
        );
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
      return item?.Name?.toLowerCase()?.match(postData?.Search?.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleEditClick = (rowValue) => {
    setEditData({
      ...rowValue,
    });
    setIsEditing(true);
  };

  const handleImportantNoteEditor = (content) => {
    console.log(content);
  };

  const handleDescriptionEditor = (content) => {
    console.log(content);
  };

  const handleInclusionEditor = (content) => {
    console.log(content);
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
      name: "Sightseeing Name",
      selector: (row) => row.SightseeingName,
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
      name: "Added By",
      selector: (row) => {
        return (
          <span>
            Admin <br /> {row.AddedBy}
          </span>
        );
      },
    },
    {
      name: "Updated By",
      selector: (row) => {
        return (
          <span>
            {row.UpdatedBy == true ? "Admin" : "-"} <br /> {row.UpdatedBy}
          </span>
        );
      },
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
                <h5 className="card-title d-none d-sm-block">Sightseeing</h5>
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
                  heading={"Add Sightseeing"}
                  apiurl={"addupdatesightseeingmaster"}
                  initialValues={sightseeingInitialValue}
                  validationSchema={sightseeingValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                  axiosRoute={axiosOther}
                >
                  <div className="row row-gap-3">
                    <div className="col-sm-4">
                      <div className="d-flex justify-content-between">
                        <label className="m-0 font-size-12">
                          Sightseeing Name
                        </label>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="SightseeingName" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="SightseeingName"
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
                        <option value="">Ticket Only</option>
                        <option value={1}>ALL</option>
                        <option value={2}>SIC</option>
                        <option value={3}>PVT</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">SetDefault for Qoutation</label>
                      <Field
                        name="DefaultQuotation"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value={0}>No</option>
                        <option value={1}>Yes</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Status</label>
                      <Field
                        name="Status"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">SetDefault for Proposal</label>
                      <Field
                        name="DefaultProposal"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value={0}>No</option>
                        <option value={1}>Yes</option>
                      </Field>
                    </div>
                    <div className="col-sm-12 mt-2">
                      <label className="m-0">Description</label>
                      <Editor
                        handleChangeEditor={handleDescriptionEditor}
                        heightValue="60%"
                      />
                    </div>
                    <div className="col-sm-12 mt-4">
                      <label className="m-0">
                        Inclusion / Exclusion & Timing
                      </label>
                      <Editor
                        handleChangeEditor={handleInclusionEditor}
                        heightValue="60%"
                      />
                    </div>
                    <div className="col-sm-12 mt-4">
                      <label className="m-0">Important Note</label>
                      <Editor
                        handleChangeEditor={handleImportantNoteEditor}
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

export default Sightseeing;
