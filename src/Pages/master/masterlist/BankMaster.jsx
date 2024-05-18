import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  bankInitialValue,
  bankMasterValidationSchema
} from "./MasterValidations";

const BankMaster = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [loading, setLoading] = useState(true);
  const [changeValue, setChangeValue] = useState("");
  const [updateData, setUpdateData] = useState(false);
  const [imageValue, setImageValue] = useState({
    ImageData:'',
    ImageName:''
  });

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("bankmasterlist", postData);
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
      return item.Name.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleEditClick = (rowValue) => {
    setImageValue({
      ImageData:"",
      ImageName:""
    });
    setEditData({
      ...rowValue,
      SetDefault: rowValue.SetDefault === "Yes" ? 1 : 0,
      Status: rowValue.Status === "Active" ? 1 : 0,
    });
    setIsEditing(true);
  };

  const hanldeBankChange = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () =>{
      const base64 = reader.result;
      const base64String = base64.split(',')[1];
      setImageValue({
        ImageData:base64String,
        ImageName:file.name
      })
    };

    reader.readAsDataURL(file);
  };


  const columns = [
    {
      name: "Bank Name",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          <img src={row.ImageName} alt="image" style={{height:'30px', width:'30px'}}></img>
        </span>
      ),
      sortable: true,
    },
    {
      name: "Account Type",
      selector: (row) => row.AccountType,
      sortable: true,
    },
    {
      name: "Account Number",
      selector: (row) => row.AccountNumber,
      sortable: true,
    },
    {
      name: "Benificiary Name",
      selector: (row) => row.BeneficiaryName,
      sortable: true,
    },
    {
      name: "IFSC Code",
      selector: (row) => row.BranchIfsc,
      sortable: true,
    },
    {
      name: "Branch Address",
      selector: (row) => row.BranchAddress,
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
          <div
            className="card shadow-none border"
            style={{ marginBottom: "0" }}
          >
            <div
              className="card-header header-elements-inline bg-info-700 py-2"
              style={{padding:"10px"}}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Bank Master</h5>
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
                  heading={"Add Bank"}
                  apiurl={"addupdatebank"}
                  initialValues={bankInitialValue}
                  validationSchema={bankMasterValidationSchema}
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
                        <label>Bank Name</label>
                        <Field
                          type="text"
                          name="BankName"
                          placeholder="SAC Code"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Account Type</label>
                        <Field
                          name="AccountType"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Saving</option>
                          <option value={2}>Current</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Account Number</label>
                        <Field
                          type="text"
                          name="AccountNumber"
                          placeholder="Account Number"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Branch IFSC</label>
                        <Field
                          type="text"
                          name="BranchIfsc"
                          placeholder="Branch IFSC"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Benificiary Name</label>
                        <Field
                          type="text"
                          name="BeneficiaryName"
                          placeholder="Benificiary Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Branch Address</label>
                        <Field
                          type="text"
                          name="BranchAddress"
                          placeholder="Branch Address"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Branch Swift Code</label>
                        <Field
                          type="text"
                          name="BranchSwiftCode"
                          placeholder="Branch Swift Code"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>UPI ID</label>
                        <Field
                          type="text"
                          name="UpiId"
                          placeholder="UPI ID"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Attach QR Code Image</label>
                        <input
                          type="file"
                          name="ImageData"
                          className="form-control"
                          onChange={hanldeBankChange}
                        />
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
                        <label>Set Default</label>
                        <Field
                          name="SetDefault"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Yes</option>
                          <option value={0}>No</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Show/Hide</label>
                        <Field
                          name="ShowHide"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Yes</option>
                          <option value={0}>No</option>
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

export default BankMaster;
