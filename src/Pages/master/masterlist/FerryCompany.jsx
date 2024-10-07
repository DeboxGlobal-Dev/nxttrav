import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther, axiosFerry } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  ferryCompanyInitialValue,
  ferryCompanyValidationSchema,
} from "./MasterValidations";

const FerryCompany = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [updateData, setUpdateData] = useState(false);
  const [changeValue, setChangeValue] = useState("");
  const [destinationList, setDestinationList] = useState([]);
  const [devisioinList, setDevisionList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataToServer = async () => {
    try {
      const destination = await axiosOther.post("destinationlist", {
        Search: "",
        Status: 1,
      });
      setDestinationList(destination.data.DataList);
    } catch (err) {
      console.log("Erro Occured", err);
    }

    try {
      const devision = await axiosOther.post("devisionlist", {
        Search: "",
        Status: 1,
      });
      setDevisionList(devision.data.DataList);
    } catch (err) {
      console.log("Erro Occured", err);
    }
  };
  useEffect(() => {
    getDataToServer();
  }, []);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("ferrycompanylist", postData);
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
      Status: rowValue.Status === "Active" ? 1 : 0,
    });
    setIsEditing(true);
  };

  const columns = [
    {
      name: "Ferry Country",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.FerryCompanyName}
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
      name: "Ferry Website",
      selector: (row) => row.Website,
      sortable: true,
    },
    {
      name: "Self Supplier",
      selector: (row) => {
        return (
          <span>
            Admin <br /> {row.SelfSupplier}
          </span>
        );
      },
    },
    {
      name: "Cont..Person",
      selector: (row) => {
        return (
          <span>
            Admin <br /> {row.ContactPers}
          </span>
        );
      },
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
      selector: (row) => {
        return <span>{row.Status}</span>;
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
                <h5 className="card-title d-none d-sm-block">Ferry Company</h5>
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
                  heading={"Add Ferry Company"}
                  apiurl={"addupdateferrycompany"}
                  initialValues={ferryCompanyInitialValue}
                  validationSchema={ferryCompanyValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                  axiosFerry
                >
                  <div className="row row-gap-3">
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">
                        Ferry Company Name
                      </label>
                      <Field
                        type="text"
                        name="FerryCompanyName"
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
                        <option value="0">ALL</option>
                        {destinationList.map((value, index) => {
                          return (
                            <option value={value.Id} key={index + 1}>
                              {value.Name}
                            </option>
                          );
                        })}
                      </Field>
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
                      <label className="m-0 font-size-12">Self Supplier</label>
                      <Field
                        name="SelfSupplier"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">
                        Contact Person Division
                      </label>
                      <Field
                        name="Type"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="0">Select Division</option>
                        {devisioinList?.map((value, index) => {
                          return (
                            <option value={value.Id} key={index + 1}>
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
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="ContactPers"
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
                        <label  className="m-0 font-size-12">Phone</label>
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
                        <option value={1}>Active</option>
                        <option value={0}>Inactive</option>
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

export default FerryCompany;
