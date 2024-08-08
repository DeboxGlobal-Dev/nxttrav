import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { Field, ErrorMessage } from "formik";
import { cruiseMasterInitialValue, cruiseMasterValidationSchema } from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";
import Editor from "./TextEditor/Editor";

const CruiseMaster = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [changeValue, setChangeValue] = useState("");
  const [updateData, setUpdateData] = useState(false);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [destinationList, setDestinationList] = useState([]);
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
        const { data } = await axiosOther.post("cruisemasterlist", postData);
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
      Status: rowValue.Status === "Active" ? 1 : 0
    });
    setIsEditing(true);
  };

  const handleDetailEditor = (content) =>{
    console.log(content);
  };

  const columns = [
    {
      name: "Cruise Package Name",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.CruisePackageName}
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
      name: "Running Days",
      selector: (row) => row.RunningDays,
      sortable: true,
    },
    {
      name: "Arrivale Date",
      selector: (row) => row.ArrivalTime,
      sortable: true,
    },
    {
      name: "Departure Date",
      selector: (row) => row.DepartureTime,
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
                <h5 className="card-title d-none d-sm-block">Cruise Master</h5>
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
                  heading={"Add Cruise Package Name"}
                  apiurl={"addupdatecruisemaster"}
                  initialValues={cruiseMasterInitialValue}
                  validationSchema={cruiseMasterValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  updateData={updateData}
                  setUpdateData={setUpdateData}
                >
                  <div className="card-body">
                    <div className="row row-gap-3">
                      <div className="col-sm-4">
                        <label>Cruise Package Name</label>
                        <Field
                          type="text"
                          placeholder="Cruise Package Name"
                          className="form-control"
                          name="CruisePackageName"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="CruisePackageName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
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
                      <div className="col-sm-4">
                        <label htmlFor="running">Running Days</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="RunningDays"
                          id="running"
                        >
                          <option value={"1"}>Monday</option>
                          <option value={"2"}>Tuesday</option>
                          <option value={"3"}>Wednesday</option>
                          <option value={"4"}>Thirsday</option>
                          <option value={"4"}>Friday</option>
                          <option value={"4"}>Saturday</option>
                          <option value={"4"}>Sunday</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Arrival Time</label>
                        <Field
                          type="date"
                          className="form-control"
                          name="ArrivalTime"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Departure Time</label>
                        <Field
                          type="date"
                          className="form-control"
                          name="DepartureTime"
                        />
                      </div>
                      <div className="col-sm-4">
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
                      <div className="col-sm-12">
                        <label>Detail</label>
                        <Editor
                          handleChangeEditor={handleDetailEditor}
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
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CruiseMaster;
