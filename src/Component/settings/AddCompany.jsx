import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { NavLink } from "react-router-dom";
import { companyFormInitialValue } from "./formInitialValue";
import { axiosOther } from "../../http/axios/axios_new";

const AddCompany = () => {
  const [companyFormData, setCompanyFormData] = useState(
    companyFormInitialValue
  );

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setCompanyFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmitData = async () => {
    const { data } = await axiosOther.post(
      "createupdatecompany",
      companyFormData
    );

    console.log(data);
  };

  console.log("companyFormData", companyFormData);

  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="card shadow-none border">
            <div className="card-header header-elements-inline py-2 bg-teal backgroundColor-2">
              <div className="col-xl-12 d-flex align-items-center justify-content-between">
                <h5 className="card-title d-none d-sm-block">
                  Company Information
                </h5>
                <div>
                  <NavLink to="/setting/company" className="btn btn-light mr-2">
                    Back
                  </NavLink>
                  <button className="btn btn-light" onClick={handleSubmitData}>
                    Save
                  </button>
                </div>
              </div>
              <div></div>
            </div>
            <div className="card-body mb-5 mt-3">
              <div className="row row-gap-3">
                <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                  <div className="d-flex justify-content-between ">
                    <label className="">Company Name</label>
                    <span className="font-size-10 text-danger pt-1"></span>
                  </div>
                  <input
                    type="text"
                    name="COMPANYNAME"
                    className="form-input-1"
                    placeholder="Company Name"
                    value={companyFormData.COMPANYNAME}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                  <div className="d-flex justify-content-between ">
                    <label className="">Email</label>
                    <span className="font-size-10 text-danger pt-1"></span>
                  </div>
                  <input
                    type="text"
                    name="REGISTEREDEMAIL"
                    className="form-input-1"
                    placeholder="Email"
                    value={companyFormData.REGISTEREDEMAIL}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                  <div className="d-flex justify-content-between">
                    <label className="">License Key</label>
                    <span className="font-size-10 text-danger pt-1"></span>
                  </div>
                  <input
                    type="text"
                    name="LICENSEKEY"
                    className="form-input-1"
                    placeholder="License Key"
                    value={companyFormData.LICENSEKEY}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                  <div className="d-flex justify-content-between">
                    <label className="">Action Date</label>
                    <span className="font-size-10 text-danger pt-1"></span>
                  </div>
                  <input
                    type="date"
                    name="ACTIONDATE"
                    className="form-input-1"
                    value={companyFormData.ACTIONDATE}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                  <label>PAN</label>
                  <input
                    type="text"
                    name="PAN"
                    className="form-input-1"
                    placeholder="PAN"
                    value={companyFormData.PAN}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                  <label>TAN</label>
                  <input
                    type="text"
                    name="TAN"
                    className="form-input-1"
                    placeholder="TAN"
                    value={companyFormData.TAN}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                  <div className="d-flex justify-content-between">
                    <label className="">CIN</label>
                  </div>
                  <input
                    type="text"
                    name="CIN"
                    className="form-input-1"
                    placeholder="CIN"
                    value={companyFormData.CIN}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                  <label className="">LUTN</label>
                  <input
                    type="text"
                    name="LUT"
                    className="form-input-1"
                    placeholder="LUTN"
                    value={companyFormData.LUT}
                    onChange={handleFormDataChange}
                  />
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-12">
                  <label>Pin</label>
                  <input
                    type="text"
                    name="ZIP"
                    className="form-input-1"
                    placeholder="Pin"
                    value={companyFormData.ZIP}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="col-lg-1 col-md-3 col-sm-4 col-12">
                  <label>Is Active</label>
                  <select
                    type="select"
                    name="ISACTIVE"
                    className="form-input-1"
                    value={companyFormData.ISACTIVE}
                    onChange={handleFormDataChange}
                  >
                    <option value="">Select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                  <label>Password</label>
                  <input
                    type="text"
                    name="PASSWORD"
                    placeholder="Password"
                    className="form-input-1"
                    value={companyFormData.PASSWORD}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="d-flex justify-content-between">
                    <label className="">Address-1</label>
                    <span className="font-size-10 text-danger pt-1"></span>
                  </div>
                  <input
                    type="text"
                    name="ADDRESS1"
                    className="form-input-1"
                    placeholder="ADDRESS1"
                    value={companyFormData.ADDRESS1}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <label>Address-2</label>
                  <input
                    type="text"
                    name="ADDRESS2"
                    className="form-input-1"
                    placeholder="ADDRESS2"
                    value={companyFormData.ADDRESS2}
                    onChange={handleFormDataChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddCompany;
