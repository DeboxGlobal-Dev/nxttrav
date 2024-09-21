import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { Field, ErrorMessage } from "formik";
import {
  seasonTypeInitialValue,
  seasonTypeValidationSchema,
} from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";

const SeasonMaster = () => {
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
  let data = JSON.stringify({ Name: "SanaulAnsari" });

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("seasonlist", postData);
        setGetData(data.DataList);
        setFilterData(data.DataList);
        console.log(data.DataList);
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
    console.log("row-value", rowValue);
    setEditData({
      ...rowValue,
      Status: rowValue.Status === "Active" ? 1 : 0,
    });
    setIsEditing(true);
  };

  const columns = [
    {
      name: "Season Name",
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
      name: "From Date",
      selector: (row) => row.FromDate,
      sortable: true,
    },
    {
      name: "To Date",
      selector: (row) => row.ToDate,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => {
        return <span>{row.Status}</span>;
      },
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
                <h5 className="card-title d-none d-sm-block">Season Type</h5>
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
                  heading={"Add Season Type"}
                  apiurl={"addupdateseason"}
                  initialValues={seasonTypeInitialValue}
                  validationSchema={seasonTypeValidationSchema}
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
                        <label htmlFor="Season" className="m-0 font-size-12">
                          Season Name
                        </label>
                        <span className="font-size-10 text-danger">
                          {<ErrorMessage name="Name" />}
                        </span>
                      </div>
                      <Field
                        className="form-input-6"
                        component={"select"}
                        id="Season"
                        name="SeasonName"
                      >
                        <option value={1}>Summer</option>
                        <option value={2}>Winter</option>
                        <option value={3}>All</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <div className="d-flex justify-content-between">
                      <label htmlFor="country" className="m-0 font-size-12">From Date</label>
                      <span className="font-size-10 text-danger">
                        <ErrorMessage name="FromDate" />
                      </span>
                      </div>
                      <Field
                        type="date"
                        placeholder="Name"
                        className="form-input-6"
                        name="FromDate"
                      />
                      
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="country" className="m-0 font-size-12">To Date</label>
                      <Field
                        type="date"
                        placeholder="Name"
                        className="form-input-6"
                        name="ToDate"
                      />
                      <span className="font-size-10 text-danger">
                        <ErrorMessage name="ToDate" />
                      </span>
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

export default SeasonMaster;
