import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { Field, ErrorMessage } from "formik";
import {
  seasonTypeInitialValue,
  seasonTypeValidationSchema,
} from "./MasterValidation";
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

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("seasonlist", postData);
        setGetData(data.DataList);
        setFilterData(data.DataList);
        console.log('Data of Season Master', data.DataList);
      } catch (error) {
        console.log(error);
      }
    };

    postDataToServer();
  }, []);
  useEffect(()=>{
    getData.map((v)=>{
      console.log(v["Status"]);
    })
  })

  useEffect(() => {
    const result = getData.filter((item) => {
      return item.Name.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleEditClick = (rowValue) => {
    setEditData({
      id: rowValue.Id,
      Name: rowValue.Name,
      FromDate: rowValue.FromDate,
      ToDate: rowValue.ToDate,
      Status: rowValue.Status==="Active"? 1:0,
      AddedBy: rowValue.AddedBy,
      UpdatedBy: rowValue.UpdatedBy,
      Created_at: rowValue.Created_at,
      Updated_at: rowValue.Updated_at,
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
      selector: (row) => row["FromDate"],
      sortable: true,
    },
    {
      name: "To Date",
      selector: (row) => row["ToDate"],
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => {
        return (
          <span>
            Admin <br /> {row.Status}
          </span>
        );
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
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <label htmlFor="Season">Season Name</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          id="Season"
                          name="Name"
                        >
                          <option value={1}>Summer</option>
                          <option value={2}>Winter</option>
                          <option value={3}>All</option>
                        </Field>
                        <span className="font-size-10 text-danger">
                          {<ErrorMessage name="Name" />}
                        </span>
                      </div>
                      <div className="col-sm-3">
                        <label htmlFor="country">From Date</label>
                        <Field
                          type="date"
                          placeholder="Name"
                          className="form-control"
                          name="FromDate"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="FromDate" />
                        </span>
                      </div>
                      <div className="col-sm-3">
                        <label htmlFor="country">To Date</label>
                        <Field
                          type="date"
                          placeholder="Name"
                          className="form-control"
                          name="ToDate"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ToDate" />
                        </span>
                      </div>

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

export default SeasonMaster;
