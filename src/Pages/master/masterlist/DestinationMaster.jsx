import React, { useState, useEffect, useMemo } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { Field, ErrorMessage } from "formik";
import {
  destinationInitialValue,
  destinationValidationSchema,
} from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";
import { isDeepEqual } from "@mui/x-data-grid/internals";
import Editor from "../../../helper/Editor";

const DestinationMaster = () => {

  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [changeValue, setChangeValue] = useState("");
  const [stateList, setStateList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [updateData, setUpdateData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editorDescription, setEditorDescription] = useState("");

  const getDataToServer = async () => {
    try {
      const countryData = await axiosOther.post("countrylist", {
        Search: "",
        Status: 1,
      });
      setCountryList(countryData.data.DataList);
    } catch (err) {
      console.log("Erro Occured", err);
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
  };
  useEffect(() => {
    getDataToServer();
  }, []);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("destinationlist", postData);
        setLoading(false);
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
    console.log(rowValue);
    setEditData({
      ...rowValue,
      SetDefault: rowValue.SetDefault === "Yes" ? 1 : 0,
      Status: rowValue.Status === "Active" ? 1 : 0,
    });
    setIsEditing(true);
  };

  const stateFiltered = useMemo(() => {
    const filteredState = stateList.filter(
      (value) => changeValue.CountryId == value.CountryId
    );
    return filteredState;
  }, [changeValue.CountryId, changeValue.StateId]);

  const handleDescription = (content) => {
    setEditorDescription(content);
  };

  const columns = [
    {
      name: "Name",
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
      name: "DESTIONATION",
      selector: (row) => row.StateName,
      sortable: true,
    },
    {
      name: "COUNTRY ",
      selector: (row) => row.CountryName,
      sortable: true,
    },
    {
      name: "DESCRIPTION",
      selector: (row) => {
        return (
          <span>
            Admin <br /> {row.Description}
          </span>
        );
      },
    },
    {
      name: "Added BY",
      selector: (row) => {
        return (
          <span>
            {row.AddedBy == true ? "Admin" : "-"} <br /> {row.Updated_at}
          </span>
        );
      },
    },
    {
      name: "MODIFIED BY",
      selector: (row) => row.UpdatedBy,
      sortable: true,
    },
    {
      name: "IMAGE",
      selector: (row) => row.Image,
      sortable: true,
    },
    {
      name: "GALLERY",
      selector: (row) => row.Gallery,
      sortable: true,
    },
    {
      name: "DESTINATION INFO",
      selector: (row) => row.DestinationInfo,
      sortable: true,
    },
    {
      name: "STATUS",
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
                  Destination Master
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
                  heading={"Add Destination"}
                  apiurl={"addupdatedestination"}
                  initialValues={destinationInitialValue}
                  validationSchema={destinationValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  updateData={updateData}
                  setUpdateData={setUpdateData}
                  description={{Description:editorDescription}}
                >
                  <div className="row row-gap-3">
                    <div className="col-sm-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="country" className="m-0 font-size-12">
                          Country <span className="text-danger">*</span>
                        </label>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="CountryId" />
                        </span>
                      </div>
                      <Field
                        className="form-input-6"
                        component={"select"}
                        name="CountryId"
                      >
                        <option value="">Select Country</option>
                        {countryList.map((value, index) => {
                          return (
                            <option value={value.id} key={index + 1}>
                              {value.Name}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">State</label>
                      <Field
                        className="form-input-6"
                        component={"select"}
                        name="StateId"
                      >
                        <option value="">Select State</option>
                        {stateFiltered.map((value, index) => {
                          return (
                            <option value={value.id} key={index + 1}>
                              {value.Name}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                    <div className="col-sm-4 h-100">
                      <div className="d-flex justify-content-between">
                        <label className="m-0 font-size-12">
                          Destination Name
                          <span className="text-danger"> *</span>
                        </label>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        placeholder="Name"
                        className="form-input-6"
                        name="Name"
                      />
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Set Default</label>
                      <Field
                        name="SetDefault"
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
                        className="form-input-6"
                        component={"select"}
                        name="Status"
                      >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                      </Field>
                    </div>
                    <div className="col-sm-12">
                      <label className="m-0 font-size-12">Description</label>
                      <Editor
                        handleChangeEditor={handleDescription}
                        heightValue="60%"
                        initialValue={editorDescription}
                      />
                      <span className="font-size-10 text-danger">
                        <ErrorMessage name="Description" />
                      </span>
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
              progressPending={loading}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DestinationMaster;
