import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { Field, ErrorMessage } from "formik";
import {
  hotelAdditonalInitialValue,
  hotelAdditionalValidationSchema,
} from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";
import { InputAdornment } from "@mui/material";
import Editor from "../../../helper/Editor";

const HotelAdditional = () => {
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
  const [imageValue, setImageValue] = useState({
    ImageData: "",
    ImageName: "",
  });
  const [loading, setLoading] = useState(true);

  const handleDetailEditor = (content) => {
    console.log(content);
  };

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("hoteladditionlist", postData);
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
    setImageValue({
      ImageData: "",
      ImageName: "",
    });
    setEditData({
      ...rowValue,
      Status: rowValue.Status === "Active" ? 1 : 0,
    });
    setIsEditing(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result;
      const base64String = base64.split(",")[1];
      setImageValue({
        ImageData: base64String,
        ImageName: file.name,
      });
    };
    reader.readAsDataURL(file);
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
          {
            <img
              src={row.ImageName}
              alt="AdditionImage"
              style={{ height: "30px", width: "30px" }}
            ></img>
          }
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
      name: "Information",
      selector: (row) => row.Details,
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
                  Hotel Additional
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
                  heading={"Add Additional"}
                  apiurl={"addupdatehoteladdition"}
                  initialValues={hotelAdditonalInitialValue}
                  validationSchema={hotelAdditionalValidationSchema}
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
                        <label>Additonal Name</label>
                        <Field
                          type="text"
                          placeholder="Additional Name"
                          className="form-control"
                          name="Name"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Image</label>
                        <input
                          type="file"
                          id="file"
                          name="ImageData"
                          className="form-control"
                          onChange={handleImageChange}
                        />
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
                      </div>
                      <div className="col-sm-12">
                        <label>Details</label>
                        <Editor
                          handleChangeEditor={handleDetailEditor}
                          heightValue="60%"
                        />
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
              progressPending={loading}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HotelAdditional;
