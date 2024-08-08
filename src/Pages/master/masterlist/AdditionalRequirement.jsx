import React, { createContext, useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  additionalRequiremntInitialValue,
  additionaRequirementValidationSchema
} from "./MasterValidations";
import Editor from "./TextEditor/Editor";

const AdditionalRequirement = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [postData, setPostData] = useState({
    Search: "",
    Status: ""
  });

  const [loading, setLoading] = useState(true);
  const [changeValue, setChangeValue] = useState("");
  const [updateData, setUpdateData] = useState(false);
  const [destinationList, setDestinationList] = useState([]);
  const [taxSlabList, setTaxSlabList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [imageValue, setImageValue] = useState({
    ImageData:'',
    ImageName:''
  });

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
      const taxslab = await axiosOther.post("taxmasterlist", {
        Search: "",
        Status: 1,
      });
      setTaxSlabList(taxslab.data.DataList);
      console.log('TaxSlab', taxslab);
    } catch (err) {
      console.log("Erro Occured", err);
    }

    try {
      const currency = await axiosOther.post("currencymasterlist", {
        Search: "",
        Status: 1
      });
      setCurrencyList(currency.data.DataList);
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
        const { data } = await axiosOther.post(
          "additionalrequirementmasterlist",
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
    setImageValue({
      ImageName:"",
      ImageData:""
    });
    setEditData({
      ...rowValue,
      Status:rowValue.Status==="Active"?1:0
    });
    setIsEditing(true);
  };

  const handleImageChange = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () =>{
      const base64 = reader.result;
      const base64String = base64.split(',')[1];
      setImageValue({
        ImageData:base64String,
        ImageName:file.name
      })
    }

    reader.readAsDataURL(file);
  };

  const handleDetailEditor = (content) =>{
    console.log(content);
  }

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          <img src={row.ImageName} alt="image" style={{height:'30px', height:'30px'}}></img>
        </span>
      ),
      sortable: true,
    },
    {
      name: "Additional Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Destination",
      selector: (row) => row.DestinationName,
      sortable: true,
    },
    {
      name: "Per Pax Cost",
      selector: (row) => {
        return (
          <span>
          {row.CostType}
          </span>
        );
      },
    },
    {
      name: "Description",
      selector: (row) => {
        return (
          <span>
           {row.Details}
          </span>
        );
      },
    },
    {
      name: "AddedBy",
      selector: (row) => {
        return (
          <span>
            {row.UpdatedBy == true ? "Admin" : "-"} <br /> {row.AddedBy}
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
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">
                  Additional Requirement
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
                  heading={"Add Additional Requirement"}
                  apiurl={"addupdateadditionalrequirementmaster"}
                  initialValues={additionalRequiremntInitialValue}
                  validationSchema={additionaRequirementValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  updateData={updateData}
                  setUpdateData={setUpdateData}
                  imageValue={imageValue}
                  setImageValue={setImageValue}
                >
                  <div className="card-body">
                    <div className="row row-gap-3">
                      <div className="col-sm-4">
                        <label>Additional Name</label>
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Name"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Destination</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="DestinationId"
                        >
                          <option value="">Select Destination</option>
                          {
                            destinationList?.map((value, index)=>{
                              return <option value={value?.id} key={index+1}>{value?.Name}</option>
                            })
                          }
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>TAX SLAB(%)</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="TaxSlab"
                        >
                          <option value="">Select Tax Slab</option>
                          {
                            taxSlabList?.map((value, index)=>{
                              return <option value={value?.id} key={index+1}>{value?.TaxSlabName}</option>
                            })
                          }
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Markup Apply</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="MarkupApply"
                        >
                          <option value={1}>Yes</option>
                          <option value={0}>No</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Currency</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="CurrencyId"
                        >
                          <option value="">Select Currency</option>
                          {
                            currencyList.map((value, index)=>{

                              return  <option value={value?.id} key={index+1}>{value?.Currencyname}</option>
                            })
                          }
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Cost Type</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="CostType"
                        >
                          <option value={1}>Per Person</option>
                          <option value={2}>Group Cost</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Adult Cost</label>
                        <Field
                          type="text"
                          name="AdultCost"
                          placeholder="Adult Cost"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Child Cost</label>
                        <Field
                          type="text"
                          name="ChildCost"
                          placeholder="Child Cost"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Infant Cost</label>
                        <Field
                          type="text"
                          name="InfantCost"
                          placeholder="Infant Cost"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Show In Proposal</label>
                        <Field
                          name="ShowInProposal"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Yes</option>
                          <option value={0}>No</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
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
                      <div className="col-sm-4">
                        <label>Add Image</label>
                        <input
                          name="ImageData"
                          className="form-control"
                          type="file"
                          onChange={handleImageChange}
                        />
                      </div>
                      <div className="col-sm-12">
                        <label>Details</label>
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

export default AdditionalRequirement;