import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { Field, ErrorMessage } from "formik";
import {
  divisionInitialValue,
  divisionValidationSchema,
} from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";

const DivisionMaster = () => {
  
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getDivisionList = async () => {
      try {
        const { data } = await axiosOther.post("divisionlist", postData);
        setLoading(false);
        setGetData(data.DataList);
        setFilterData(data.DataList);
      } catch (error) {
        console.log(error);
      }
    };

    getDivisionList();
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
      name: "Added By",
      selector: (row) => row.AddedBy,
      sortable: true,
    },
    {
      name: "Updated By",
      selector: (row) => {
        return (
          <span>
            Admin <br /> {row.UpdatedBy}
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
                <h5 className="card-title d-none d-sm-block">
                  Division Master
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
                  heading={"Add Divison"}
                  apiurl={"addupdatedivision"}
                  initialValues={divisionInitialValue}
                  validationSchema={divisionValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                  axiosRoute={axiosOther}
                >
                  <div className="row">
                    <div className="col-4">
                      <label className="m-0 font-size-12">Name</label>
                      <Field
                        type="text"
                        placeholder="Divison Name"
                        className="form-input-6"
                        name="Name"
                      />
                      <span className="font-size-10 text-danger">
                        <ErrorMessage name="Name" />
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

export default DivisionMaster;
