import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  gitInitialValue,
  gitValidationSchema
} from "./MasterValidations";

const GIT = () => {
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
  const [destinationList, setDestinationList] = useState([]);
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
  };
  useEffect(() => {
    getDataToServer();
  }, []);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("gitmasterlist", postData);
        setLoading(false);
        setGetData(data.ItineraryInfoMaster);
        setFilterData(data.ItineraryInfoMaster);
      } catch (error) {
        console.log(error);
      }
    };
    postDataToServer();
  }, [updateData]);

  useEffect(() => {
    const result = getData.filter((item) => {
      return item.Name.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleEditClick = (rowValue) => {
    setEditData({
      ...rowValue,
      SetDefault: rowValue.SetDefault === "Yes" ? 1 : 0,
      Status: rowValue.Status === "Active" ? 1 : 0
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
      name: "Destination",
      selector: (row) => row.Destination,
      sortable: true,
    },
    {
      name: "Inclusion",
      selector: (row) => row.Inclusion,
      sortable: true,
    },
    {
      name: "Exclusion",
      selector: (row) => row.Exclusion,
      sortable: true,
    },
    {
      name: "Language",
      selector: (row) => row.Language,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true,
    }
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
                  GIT Inculsions I Exculsions I T & C I Cancellation Policy
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
                  heading={"Add GIT Inculsions I Exculsions"}
                  apiurl={"addupdategit"}
                  initialValues={gitInitialValue}
                  validationSchema={gitValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                >
                  <div className="card-body">
                    <div className="row row-gap-3">
                      <div className="col-sm-6">
                        <label>Name</label>
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>Destination</label>
                        <Field
                          name="Destination"
                          className="form-control"
                          component={"select"}
                        >
                          <option value="0">ALL</option>
                          {
                            destinationList.map((value, index)=>{
                              return <option value={value.Id} key={index+1}>{value.Name}</option>
                            })
                          }
                        </Field>
                      </div>
                      <div className="col-sm-6">
                        <label>Inclusion</label>
                        <Field
                          as="textarea"
                          name="Inclusion"
                          placeholder="Write Here..."
                          className="form-control"
                          style={{ height: "38px" }}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>Exclusion</label>
                        <Field
                          as="textarea"
                          name="Exclusion"
                          placeholder="Write Here..."
                          className="form-control"
                          style={{ height: "38px" }}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>Terms Condition</label>
                        <Field
                          as="textarea"
                          name="TermsCondition"
                          placeholder="Write Here..."
                          className="form-control"
                          style={{ height: "38px" }}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>Cancelation</label>
                        <Field
                          as="textarea"
                          name="Cancelation"
                          placeholder="Write Here..."
                          className="form-control"
                          style={{ height: "38px" }}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>Service Upgradation</label>
                        <Field
                          as="textarea"
                          name="ServiceUpgradation"
                          placeholder="Write Here..."
                          className="form-control"
                          style={{ height: "38px" }}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>Optional Tour</label>
                        <Field
                          as="textarea"
                          name="OptionalTour"
                          placeholder="Write Here..."
                          className="form-control"
                          style={{ height: "38px" }}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>Payment Policy</label>
                        <Field
                          as="textarea"
                          name="PaymentPolicy"
                          placeholder="Write Here..."
                          className="form-control"
                          style={{ height: "38px" }}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>Remarks</label>
                        <Field
                          as="textarea"
                          name="Remarks"
                          placeholder="Write Here..."
                          className="form-control"
                          style={{ height: "38px" }}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label>Status</label>
                        <Field
                          name="Status"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Active</option>
                          <option value={0}>Inactive</option>
                        </Field>
                      </div>
                      <div className="col-sm-6">
                        <label>Default</label>
                        <Field
                          name="Status"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={0}>No</option>
                          <option value={1}>Yes</option>
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

export default GIT
