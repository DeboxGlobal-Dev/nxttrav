import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  itenararyOverviewInitialValue,
  itenararyOverviewValidationSchema,
} from "./MasterValidations";
import Editor from "../../../helper/Editor";

const ItenaryOverview = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [editorValue, setEditorValue] = useState({
    OverviewInformation: "",
    HighlightInformation: "",
    ItineraryIntroduction: "",
    ItinerarySummary: "",
  });
  const [changeValue, setChangeValue] = useState("");
  const [updateData, setUpdateData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post(
          "itineraryoverviewlist",
          postData
        );
        setLoading(false);
        setGetData(data?.DataList);
        setFilterData(data?.DataList);
        console.log("overview-data", data);
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
      Status: rowValue.Status === "Active" ? 1 : 0,
    });
    setEditorValue({
      ...editorValue,
      OverviewInformation: rowValue?.OverviewInformation,
    });
    setEditorValue({
      ...editorValue,
      HighlightInformation: rowValue?.HighlightInformation,
    });
    setEditorValue({
      ...editorValue,
      ItineraryIntroduction: rowValue?.ItineraryIntroduction,
    });
    setEditorValue({
      ...editorValue,
      ItinerarySummary: rowValue?.ItinerarySummary,
    });
    setIsEditing(true);
  };

  const handleOverviewInformationEditor = (content) => {
    setEditorValue({ ...editorValue, OverviewInformation: content });
  };

  const handleHighlightInformationEditor = (content) => {
    setEditorValue({ ...editorValue, HighlightInformation: content });
  };
  const hanldeItenararyIntroductionEditor = (content) => {
    setEditorValue({ ...editorValue, ItineraryIntroduction: content });
  };
  const handleItenararySummaryEditor = (content) => {
    setEditorValue({ ...editorValue, ItinerarySummary: content });
  };

  const columns = [
    {
      name: "Overview Name",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.OverviewName}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Overview Information",
      selector: (row) => row.OverviewInformation,
      sortable: true,
    },
    {
      name: "Highlight Information",
      selector: (row) => row.HighlightInformation,
      sortable: true,
    },
    {
      name: "Itinerary Introduction",
      selector: (row) => row.ItineraryIntroduction,
      sortable: true,
    },
    {
      name: "Itinerary Summary",
      selector: (row) => row.ItinerarySummary,
      sortable: true,
    },
    {
      name: "Status Name",
      selector: (row) => row.Status,
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
                <h5 className="card-title d-none d-sm-block">
                  Itenarary Overview
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
                  heading={"Add Overview"}
                  apiurl={"addupdateitineraryoverview"}
                  initialValues={itenararyOverviewInitialValue}
                  validationSchema={itenararyOverviewValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                  description={{ ...editorValue }}
                >
                  <div className="card-body">
                    <div className="row row-gap-3">
                      <div className="col-sm-12">
                        <div>
                          <label className="m-0">
                            Overview Name <span className="text-danger">*</span>
                          </label>
                        </div>
                        <Field
                          type="text"
                          name="OverviewName"
                          className="form-input-6"
                          placeholder="Overview Name"
                        />
                      </div>
                      <div className="col-sm-12">
                        <label className="m-0">Overview Information</label>
                        <Editor
                          handleChangeEditor={handleOverviewInformationEditor}
                          heightValue="60%"
                          initialValue={editorValue?.OverviewInformation}
                        />
                      </div>
                      <div className="col-sm-12 mt-4">
                        <label className="m-0">Highlight Information</label>
                        <Editor
                          handleChangeEditor={handleHighlightInformationEditor}
                          heightValue="60%"
                          initialValue={editorValue?.HighlightInformation}
                        />
                      </div>
                      <div className="col-sm-12 mt-4">
                        <label className="m-0">Itinerary Introduction</label>
                        <Editor
                          handleChangeEditor={hanldeItenararyIntroductionEditor}
                          heightValue="60%"
                          initialValue={editorValue?.ItineraryIntroduction}
                        />
                      </div>
                      <div className="col-sm-12 mt-4">
                        <label className="m-0">Itenarary Summary</label>
                        <Editor
                          handleChangeEditor={handleItenararySummaryEditor}
                          heightValue="60%"
                          initialValue={editorValue?.ItinerarySummary}
                        />
                      </div>
                      <div className="col-sm-6 mt-4">
                        <label>Status</label>
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

export default ItenaryOverview;
