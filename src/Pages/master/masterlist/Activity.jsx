import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  activityMasterInitialValue,
  activityMasterValidationSchema,
} from "./MasterValidations";
import Editor from "../../../helper/Editor";

const Activity = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [destinationList, setDestinationList] = useState([]);
  const [supplierList, setSupplierList] = useState([]);
  const [postData, setPostData] = useState({
    ServiceName: "",
    id: "",
  });

  const [updateData, setUpdateData] = useState(false);
  const [changeValue, setChangeValue] = useState("");

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const {data} = await axiosOther.post("activitymasterlist");
        console.log('acitity-list', data?.DataList)
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
    console.log("Row-Value---", rowValue);
    setEditData({
      ...rowValue,
      SetDefault: rowValue.SetDefault === "Yes" ? 1 : 0,
      Status: rowValue.Status === "Active" ? 1 : 0,
    });
    setIsEditing(true);
  };

  const getDataForDropdown = async () => {
    try {
      const { data } = await axiosOther.post("destinationlist");
      setDestinationList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
    try {
      const { data } = await axiosOther.post("supplierlist");
      setSupplierList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataForDropdown();
  }, []);
  const columns = [
    {
      name: "Service Code",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.Name} &nbsp;
          {row.SetDefault == "Yes" ? (
            <span className="badge bg-success">Default</span>
          ) : (
            ""
          )}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row?.ServiceName,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row?.Type,
    },
    {
      name: "Destination",
      selector: (row) => row?.Destination,
    },
    {
      name: "Supplier",
      selector: (row) => row?.Supplier,
    },
    {
      name: "Description",
      selector: (row) => row?.Description,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
    },
    {
      name: "Language",
      selector: (row) => (
        <button className="border font-size-10 p-1 px-2 rounded-pill bg-success">
          View Language
        </button>
      ),
    },
    {
      name: "Gallery",
      selector: (row) => (
        <button className="border font-size-10 p-1 px-2 rounded-pill bg-success">
          + Gallery
        </button>
      ),
    },
    {
      name: "Rate Sheet",
      selector: (row) => (
        <NavLink
          to={`/master/activity/rate/${row?.id}`}
          state={{ Name: row?.ServiceName, DestinationId:row.DestinationId }}
        >
          <button className="border font-size-10 p-1 px-2 rounded-pill bg-success">
            + View/Add
          </button>
        </NavLink>
      ),
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
              className="card-header header-elements-inline bg-primary-700 py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Activity</h5>
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
                  heading={"Add Activity"}
                  apiurl={"addupdateactivitymaster"}
                  initialValues={activityMasterInitialValue}
                  validationSchema={activityMasterValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                >
                  <div className="row row-gap-3">
                    <div className="col-sm-4">
                      <div className="d-flex justify-content-between">
                        <label className="m-0 font-size-12">Type</label>
                      </div>
                      <Field
                        name="Type"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="">Select</option>
                        <option value="activity">Activity</option>
                        <option value="experience">Experience</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <div className="d-flex justify-content-between">
                        <label className="m-0 font-size-12">
                          Service Name <span className="text-danger">*</span>
                        </label>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ServiceName" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="ServiceName"
                        placeholder="Service Name"
                        className="form-input-6"
                      />
                    </div>
                    <div className="col-sm-4">
                      <div className="d-flex justify-content-between">
                        <label className="m-0 font-size-12">
                          Destination <span className="text-danger">*</span>
                        </label>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ServiceName" />
                        </span>
                      </div>
                      <Field
                        name="Destination"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="">Select</option>
                        {destinationList?.map((item) => {
                          return (
                            <option value={item?.id} key={item?.id}>
                              {item?.Name}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Default</label>
                      <Field
                        name="Default"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">
                        Select Supplier
                      </label>
                      <Field
                        name="Supplier"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="">Select</option>
                        {supplierList?.map((item) => {
                          return (
                            <option value={item?.id} key={item?.id}>
                              {item?.Name}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                    <div className="col-sm-4">
                      <label className="m-0 font-size-12">Status</label>
                      <Field
                        name="Status"
                        className="form-input-6"
                        component={"select"}
                      >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                      </Field>
                    </div>
                    <div className="col-12">
                      <Editor heightValue={"70%"} />
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

export default Activity;
