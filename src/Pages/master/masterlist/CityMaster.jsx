import React, { useState, useEffect, useMemo } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { Field, ErrorMessage, useFormik } from "formik";
import { cityInitialValue, cityValidationSchema } from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";

const CityMaster = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [countryList,  setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [changeValue, setChangeValue] = useState("");
  const [updateData, setUpdateData] = useState(false);
  const [loading,setLoading] = useState(true);

  const getDataToServer = async () => {
    console.log('First Action');
    try {
      const countryData = await axiosOther.post("countrylist", {
        Search: "",
        Status: 1,
      });
      setCountryList(countryData.data.DataList);
     
    } catch (err) {
      console.log(err);
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
    console.log('Second Action');
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("citylist", postData);
        setLoading(false);
        setGetData(data.DataList);
        setFilterData(data.DataList);
        console.log('CityList', data);
      } catch (error) {
        console.log(error);
      }
    };

    postDataToServer();
  }, [updateData]);

  useEffect(() => {
    console.log('Third Action');
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
    });
    setIsEditing(true);
  };


  const stateFiltered = useMemo(() => {
    
    const filteredState = stateList.filter(
      (value) => changeValue.CountryId == value.CountryId
    );
    return filteredState;
  }, [changeValue.CountryId, changeValue.StateId]);

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
      name: "State Name",
      selector: (row) => row.StateName,
      sortable: true,
    },
    {
      name: "Country Name",
      selector: (row) => row.CountryName,
      sortable: true,
    },
    {
      name: "Added By",
      selector: (row) => {
        return (
          <span>
            Admin <br /> {row.Created_at}
          </span>
        );
      },
    },
    {
      name: "Updated By",
      selector: (row) => {
        return (
          <span>
            {row.UpdatedBy == true ? "Admin" : "-"} <br /> {row.Updated_at}
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
                <h5 className="card-title d-none d-sm-block">City Master</h5>
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
                  heading={"Add City"}
                  apiurl={"addupdatecity"}
                  initialValues={cityInitialValue}
                  validationSchema={cityValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <label htmlFor="country">Country</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="CountryId"
                        >
                          <option value="">Select Country</option>
                          {countryList.map((value, index) => {
                            // console.log(value);
                            return (
                              <option value={value.id} key={index + 1}>
                                {value.Name}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                      <div className="col-sm-3">
                        <label>State</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="StateId"
                        >
                          <option value="">Select State</option>
                          {stateFiltered?.map((value, index) => {
                            console.log(value);
                            return (
                              <option value={value.id} key={index + 1}>
                                {value.Name}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                      <div className="col-sm-3">
                        <label>Name</label>
                        <Field
                          type="text"
                          placeholder="City Name"
                          className="form-control"
                          name="Name"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-3">
                        <label>Status</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="Status"
                        >
                          <option value={1}>Active</option>
                          <option value={0}>Inactive</option>
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
              progressPending={loading}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CityMaster;
