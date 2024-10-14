import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther, axiosCruise } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  currencyMasterInitialValue,
  currencyMasterValidationSchema,
} from "./MasterValidations";

const CurrencyMaster = () => {

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
  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataToServer = async () => {
    try {
      const countryData = await axiosOther.post("countrylist", {
        Search: "",
        Status: 1,
      });
      setCountryList(countryData.data.DataList);
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
        const { data } = await axiosOther.post("currencymasterlist", postData);
        setLoading(false);
        setGetData(data.DataList);
        setFilterData(data.DataList);
        console.log(data);
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
    console.log("Row Value", rowValue);
    setEditData({
      ...rowValue,
      Status: rowValue.Status === "Active" ? 1 : 0,
      SetDefault: rowValue.SetDefault === "Yes" ? 1 : 0,
    });
    setIsEditing(true);
  };

  const columns = [
    {
      name: "Country Name",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row?.CountryName}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Currency Code",
      selector: (row) => row.CountryCode,
      sortable: true,
    },
    {
      name: "Currency Name",
      selector: (row) => row.CurrencyName,
      sortable: true,
    },
    {
      name: "Exchange Rate in INR",
      selector: (row) => row.CurrencyCode,
      sortable: true,
    },
    {
      name: "Rate List",
      selector: (row) => "View",
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
                  Currency Master
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
                  heading={"Add Currency"}
                  apiurl={"addupdatecurrencymaster"}
                  initialValues={currencyMasterInitialValue}
                  validationSchema={currencyMasterValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                >
                  <div className="row row-gap-3">
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Country</label>
                      <Field
                        name="CountryId"
                        className="form-input-6"
                        component={"select"}
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
                      <div className="d-flex justify-content-between">
                        <label className="m-0 font-size-12">Country Code <span className="text-danger">*</span></label>
                        <span className="font-size-10 text-danger pt-1">
                          <ErrorMessage name="CountryCode" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="CountryCode"
                        placeholder="Currency Code"
                        className="form-input-6"
                      />
                    </div>
                    <div className="col-sm-4">
                      <div className="d-flex justify-content-between">
                        <label className="m-0 font-size-12">Currency Name <span className="text-danger">*</span></label>
                        <span className="font-size-10 text-danger pt-1">
                          <ErrorMessage name="CurrencyName" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="Name"
                        placeholder="Currency Name"
                        className="form-input-6"
                      />
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Status</label>
                      <Field
                        name="Status"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value={"1"}>Active</option>
                        <option value={"0"}>Inactive</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="font-size-12 m-0">Set Default</label>
                      <Field
                        name="SetDefault"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value={"1"}>Yes</option>
                        <option value={"0"}>No</option>
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
              progressPending={loading}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CurrencyMaster;
