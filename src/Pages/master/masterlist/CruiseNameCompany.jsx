import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { Field, ErrorMessage } from "formik";
import {
  cruiseNameCompanyInitialValue,
  cruiseNameCompanyValidationSchema,
} from "./MasterValidations";
import { axiosOther, axiosCruise } from "../../../http/axios/axios_new";

const CruiseNameCompany = () => {
  
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

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post(
          "cruisenamemasterlist",
          postData
        );
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
    setImageValue({
      ImageData: "",
      ImageName: "",
    });
    setEditData({
      ...rowValue,
      CountryId: rowValue.CountryName === "India" ? "1" : "2",
      StateId: rowValue.StateName === "Rajsthan" ? "1" : "2",
      Status: rowValue.Status === "Active" ? 1 : 0,
    });
    setIsEditing(true);
  };

  const handleCruiseImage = (e) => {
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
          <img
            src={row.ImageName}
            alt="cruise-image"
            style={{ height: "30px", width: "30px" }}
          ></img>
        </span>
      ),
      sortable: true,
    },
    {
      name: "Cruise Company",
      selector: (row) => row.CruiseCompany,
      sortable: true,
    },
    {
      name: "Cruise Name",
      selector: (row) => row.CruiseName,
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
                  Cruise Name Company
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
                  heading={"Add Cruise Name"}
                  apiurl={"addupdatecruisenamemaster"}
                  initialValues={cruiseNameCompanyInitialValue}
                  validationSchema={cruiseNameCompanyValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                  imageValue={imageValue}
                  setImageValue={setImageValue}
                  axiosRoute={axiosCruise}
                >
                  <div className="row row-gap-3">
                    <div className="col-sm-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="country" className="m-0 font-size-12">
                          Cruise Name Comapany
                        </label>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="CruiseCompany" />
                        </span>
                      </div>
                      <Field
                        className="form-input-6"
                        component={"select"}
                        name="CruiseCompany"
                      >
                        <option value={""}>Select</option>
                        <option value={"1"}>ABC</option>
                        <option value={"2"}>DEF</option>
                        <option value={"3"}>SEF</option>
                        <option value={"4"}>DJH</option>
                        <option value={"5"}>KHDA</option>
                        <option value={"6"}>DJHA</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <div className="d-flex justify-content-betwen">
                        <label className="m-0 font-size-12">Cruise Name</label>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="CruiseName" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        placeholder="Cruise Name"
                        className="form-input-6"
                        name="CruiseName"
                      />
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
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Cruise Image</label>
                      <input
                        type="file"
                        className="form-input-6 border-0"
                        name="ImageData"
                        onChange={handleCruiseImage}
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

export default CruiseNameCompany;
