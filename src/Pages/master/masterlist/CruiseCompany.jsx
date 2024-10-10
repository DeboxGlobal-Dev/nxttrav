import React, { useEffect, useState, useMemo } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther, axiosCruise } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  cruiseCompanyInitialValue,
  cruiseCompanyValidationSchema,
} from "./MasterValidations";

const CruiseCompany = () => {
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
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [destinationList, setDestinationList] = useState([]);
  const [devisionList, setDeivionsList] = useState([]);
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

    try {
      const stateData = await axiosOther.post("statelist", {
        Search: "",
        Status: 1,
      });
      setStateList(stateData.data.DataList);
    } catch (err) {
      console.log(err);
    }

    try {
      const cityData = await axiosOther.post("citylist", {
        Search: "",
        Status: 1,
      });
      setCityList(cityData.data.DataList);
    } catch (err) {
      console.log(err);
    }

    try {
      const destination = await axiosOther.post("destinationlist", {
        Search: "",
        Status: 1,
      });
      setDestinationList(destination.data.DataList);
    } catch (err) {
      console.log(err);
    }
    try {
      const devision = await axiosOther.post("divisionlist", {
        Search: "",
        Status: 1,
      });
      setDeivionsList(devision.data.DataList);
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
        const { data } = await axiosOther.post(
          "cruisecompanymasterlist",
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
    setEditData({
      ...rowValue,
      SetDefault: rowValue.SetDefault === "Yes" ? 1 : 0,
      Status: rowValue.Status === "Active" ? 1 : 0,
    });
    setIsEditing(true);
  };

  const stateFiltered = useMemo(() => {
    const filteredState = stateList.filter(
      (value) => changeValue.Country == value.CountryId
    );
    return filteredState;
  }, [changeValue.Country, changeValue.StateId]);

  const cityFiltered = useMemo(() => {
    const filteredCity = cityList.filter(
      (value) => changeValue.State == value.StateId
    );
    return filteredCity;
  }, [changeValue.city, changeValue.State, changeValue.Country]);

  // console.log('changeValue..', changeValue);

  const columns = [
    {
      name: "Cruise Company Name",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.CruiseCompanyName}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Destination",
      selector: (row) => row.Destination,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.Country,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.State,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "State ",
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: "PinCode",
      selector: (row) => row.PinCode,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.Address,
      sortable: true,
    },
    {
      name: "Website",
      selector: (row) => row.Website,
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
                <h5 className="card-title d-none d-sm-block">Cruise Company</h5>
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
                  heading={"Add Cruise Company"}
                  apiurl={"addupdatecruisecompanymaster"}
                  initialValues={cruiseCompanyInitialValue}
                  validationSchema={cruiseCompanyValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  updateData={updateData}
                  setUpdateData={setUpdateData}
                  axiosRoute={axiosCruise}
                >
                  <div className="row row-gap-3">
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">
                        Cruise Company Name
                      </label>
                      <Field
                        type="text"
                        name="CruiseCompanyName"
                        placeholder="Cruise Company"
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
                      <label className="m-0 font-size-12">Country</label>
                      <Field
                        name="Country"
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
                      <label className="font-size-12 m-0">State</label>
                      <Field
                        name="State"
                        className="form-input-6"
                        component={"select"}
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
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">City</label>
                      <Field
                        name="City"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="">Select City</option>
                        {cityFiltered.map((value, index) => {
                          return (
                            <option value={value.id} key={index + 1}>
                              {value.Name}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Pin Code</label>
                      <Field
                        type="text"
                        name="PinCode"
                        placeholder="Pin Code"
                        className="form-input-6"
                      />
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Address</label>
                      <Field
                        type="text"
                        name="Address"
                        placeholder="Address"
                        className="form-input-6"
                      />
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Website</label>
                      <Field
                        type="text"
                        name="Website"
                        placeholder="Website"
                        className="form-input-6"
                      />
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">GST</label>
                      <Field
                        type="text"
                        name="GST"
                        placeholder="GST"
                        className="form-input-6"
                      />
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Self Supplier</label>
                      <Field
                        name="SelfSupplier"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value={"Yes"}>Yes</option>
                        <option value={"No"}>No</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">
                        Contact Person Division
                      </label>
                      <Field
                        name="ContactPersonDivision"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value={1}>Select Division</option>
                        {devisionList?.map((value, index) => {
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
                        <label className="m-0 font-size-12">
                          Contact Person
                        </label>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ContactPerson" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="ContactPerson"
                        placeholder="Contact Person"
                        className="form-input-6"
                      />
                    </div>
                    <div className="col-sm-4">
                      <div className="d-flex justify-content-between">
                        <label className="m-0 font-size-12">Designation</label>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="Designation"
                        placeholder="Designation"
                        className="form-input-6"
                      />
                    </div>

                    <div className="col-sm-4">
                      <div className="d-flex justify-content-between">
                        <label className="m-0 font-size-12">Country Code</label>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="CountryCode"
                        placeholder="+91"
                        className="form-input-6"
                        value="+91"
                      />
                    </div>
                    <div className="col-sm-4">
                      <div className="d-flex justify-content-between">
                        <label className="m-0 font-size-12">Phone</label>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="Phone"
                        placeholder="Phone"
                        className="form-input-6"
                      />
                    </div>
                    <div className="col-sm-4">
                      <div className="d-flex justify-content-between">
                        <label className="m-0 font-size-12">Email</label>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <Field
                        type="email"
                        name="Email"
                        placeholder="Email"
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

export default CruiseCompany;
