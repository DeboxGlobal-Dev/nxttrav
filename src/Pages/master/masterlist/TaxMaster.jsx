import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  taxMasterInitialValue,
  taxMasterValidationSchema,
} from "./MasterValidations";

const TaxMaster = () => {
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

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("taxmasterlist", postData);
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
      id: rowValue.Id,
      ServiceType: rowValue.ServiceType,
      TaxSlabName: rowValue.TaxSlabName,
      TaxValue:rowValue.TaxValue,
      Status: rowValue.Status === "Active" ? 1 : 0,
      SetDefault : rowValue.SetDefault === "Yes"?1:0,
      AddedBy: rowValue.AddedBy,
      UpdatedBy:rowValue.UpdatedBy
    });
    setIsEditing(true);
  };

  const columns = [
    {
      name: "Service Type",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.ServiceType}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Slab Name",
      selector: (row) => row.TaxSlabName,
      sortable: true,
    },
    {
      name: "Tax Rate",
      selector: (row) => row.TaxValue,
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
      name: "Status",
      selector: (row) => {
        return (
          <span>
             {row.Status}
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
              style={{padding:"10px"}}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Tax Master</h5>
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
                  heading={"Add TAX Master"}
                  apiurl={"addupdatetax"}
                  initialValues={taxMasterInitialValue}
                  validationSchema={taxMasterValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                >
                  <div className="card-body">
                    <div className="row row-gap-3">
                      <div className="col-sm-4">
                        <label>Service Type</label>
                        <Field
                          name="ServiceType"
                          className="form-control"
                          component={"select"}
                        >
                          <option value="1">Service Type</option>
                          <option value="2">Hotel</option>
                          <option value="3">Guide</option>
                          <option value="4">Activity</option>
                          <option value="5">Entrance</option>
                          <option value="6">Transfer</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>TAX Slab Name</label>
                        <Field
                          type="text"
                          name="TaxSlabName"
                          placeholder="Tax Slab"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>TAX Value (in %)</label>
                        <Field
                          type="text"
                          name="TaxValue"
                          placeholder="Tax Value"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Status</label>
                        <Field
                          name="Status"
                          className="form-control"
                          component={"select"}
                        >
                          <option value="1">Active</option>
                          <option value="0">Inactive</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Set Default</label>
                        <Field
                          name="SetDefault"
                          className="form-control"
                          component={"select"}
                        >
                          <option value="1">Yes</option>
                          <option value="0">No</option>
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
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TaxMaster;
