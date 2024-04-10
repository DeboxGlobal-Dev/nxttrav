import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  tourEscrotPriceInitialValue,
  tourEscortPriceValidationSchema
} from "./MasterValidation";
import "jquery";
import "select2";

const TourEscortPrice = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("tourescortpricelist", postData);
        setGetData(data.DataList);
        setFilterData(data.DataList);
      } catch (error) {
        console.log(error);
      }
    };
    postDataToServer();
  }, [getData]);

  useEffect(() => {
    const result = getData.filter((item) => {
      return item.Name.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleEditClick = (rowValue) => {
    setEditData({
      id: rowValue.Id,
      ServiceType: rowValue.ServiceType,
      Destination: rowValue.Destination,
      TourEscortService: rowValue.TourEscortService,
      Status: rowValue.Status === "Active" ? 1 : 0,
      Default: rowValue.Default === "Yes" ? 1 : 0,
      AddedBy: rowValue.AddedBy,
      UpdatedBy: rowValue.UpdatedBy,
    });
    setIsEditing(true);
  };

  const columns = [
    {
      name: "Guide/Porter Service",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.TourEscortService}
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
      name: "Service Type",
      selector: (row) => row.ServiceType,
      sortable: true,
    },
    {
      name: "Rate Sheet",
      selector: (row) => <button className="btn btn-primary">+Add/View</button>,
    },
    {
      name: "Status",
      selector: (row) => {
        row.Status, sortable;
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
                <h5 className="card-title d-none d-sm-block">
                  Guide / Porter Price
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
                  heading={"Add Tour Escort Service"}
                  apiurl={"addupdatetourprice"}
                  initialValues={tourEscrotPriceInitialValue}
                  validationSchema={tourEscortPriceValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                >
                  <div className="card-body">
                    <div className="row row-gap-3">
                      <div className="col-sm-3">
                        <label>Service Type</label>
                        <Field
                          name="ServiceType"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={0}>Guide</option>
                          <option value={1}>Porter</option>
                        </Field>
                      </div>
                      <div className="col-sm-3">
                        <label>Destination</label>
                        <Field
                          name="Destination"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={0}>ALL</option>
                          <option value={1}>Dubai</option>
                          <option value={2}>Abu Dhabi</option>
                          <option value={3}>Delhi</option>
                          <option value={4}>Banglore</option>
                          <option value={5}>Gurugram</option>
                        </Field>
                      </div>
                      <div className="col-sm-3">
                        <label>Tour Escort Service</label>
                        <Field
                          type="text"
                          name="TourEscortService"
                          placeholder="Monument Name"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name"/>
                        </span>
                      </div>
                      <div className="col-sm-3">
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
                      <div className="col-sm-3">
                        <label>SetDefault</label>
                        <Field
                          name="SetDefault"
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
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TourEscortPrice;
