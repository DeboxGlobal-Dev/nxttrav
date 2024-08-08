import React, { useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { Formik, Form, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import { agentMasterInitialValue } from "./mastersInitialValues";
import { axiosOther } from "../../../http/axios/axios_new";

const AddAgent = () => {
  const [agentInputData, setAgentInputData] = useState({
    ...agentMasterInitialValue,
  });
  const [agentLogoImageData, setAgentLogoImageData] = useState({
    CompanyLogoImageName: "",
    CompanyLogoImageData: "",
  });
  const [agentHeaderImageData, setAgentHeaderImageData] = useState({
    AgentHeaderImageName: "",
    AgentHeaderImageData: "",
  });
  const [agentFooterImageData, setAgentFooterImageData] = useState({
    AgentFooterImageName: "",
    AgentFooterImageData: "",
  });

  const handleAgentInputChange = (e) => {
    setAgentInputData({ ...agentInputData, [e.target.name]: e.target.value });
  };

  const handleAgentLogoInputChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function () {
        const base64String = reader.result;
        setAgentLogoImageData({
          CompanyLogoImageName: file.name,
          CompanyLogoImageData: base64String,
        });
      };

      reader.readAsDataURL(file);
    }
  };
  const handleAgentHeaderImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function () {
        const base64String = reader.result;
        setAgentHeaderImageData({
          AgentHeaderImageName: file.name,
          AgentHeaderImageData: base64String,
        });
      };

      reader.readAsDataURL(file);
    }
  };
  const handleAgentFooterImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function () {
        const base64String = reader.result;
        setAgentFooterImageData({
          AgentFooterImageName: file.name,
          AgentFooterImageData: base64String,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const postingDataIntoAgentApi = async () => {
    try {
      const {data} = await axiosOther.post("addupdateagent", {
        ...agentLogoImageData,
        ...agentHeaderImageData,
        ...agentFooterImageData,
        ...agentInputData,
      });
      console.log('api-response',data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("image-data", {
    ...agentLogoImageData,
    ...agentHeaderImageData,
    ...agentFooterImageData,
    ...agentInputData,
  });

  return (
    <Layout>
      <div className="container-fluid p-3 mb-4">
        <div className="card shadow-none border">
              <div className="card-header header-elements-inline py-2 bg-teal backgroundColor-2">
                <div className="col-xl-12 d-flex align-items-center justify-content-between">
                  <h5 className="card-title d-none d-sm-block">Add Agent</h5>
                  <div>
                    <NavLink
                      to="/master/agent"
                      className="btn btn-light mr-2"
                    >
                      Back
                    </NavLink>
                    <button className="btn btn-light" onClick={postingDataIntoAgentApi}>
                      Save
                    </button>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="card-body mb-5 mt-3">
                <div className="row row-gap-3">
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <label>Bussiness Type</label>
                    <select
                      type={"select"}
                      name="BussinessType"
                      className="form-input-1"
                      onChange={handleAgentInputChange}
                      value={agentInputData.BussinessType}
                    >
                      <option value="">select</option>
                      <option value="1">Agent</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <div className="d-flex justify-content-between ">
                      <label className="">Website Url</label>
                      <span className="font-size-10 text-danger pt-1">
                        {/* <ErrorMessage name="WebsiteUrl" /> */}
                      </span>
                    </div>
                    <input
                      type="text"
                      name="WebsiteUrl"
                      className="form-input-1"
                      placeholder="Website URL"
                      onChange={handleAgentInputChange}
                      value={agentInputData.WebsiteUrl}
                    />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <div className="d-flex justify-content-between">
                      <label className="">Sales Person</label>
                      <span className="font-size-10 text-danger pt-1">
                        {/* <ErrorMessage name="LicenseKey" /> */}
                      </span>
                    </div>
                    <select
                      type={"select"}
                      name="SalesPerson"
                      className="form-input-1"
                      onChange={handleAgentInputChange}
                      value={agentInputData.SalesPerson}
                    >
                      <option value="">Select</option>
                      <option value={1}>Ansar</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <div className="d-flex justify-content-between">
                      <label className="">Operation Person</label>
                      <span className="font-size-10 text-danger pt-1">
                        {/* <ErrorMessage name="ActionDate" /> */}
                      </span>
                    </div>
                    <select
                      type={"select"}
                      name="OperationsPerson"
                      className="form-input-1"
                      onChange={handleAgentInputChange}
                      value={agentInputData.OperationsPerson}
                    >
                      <option value="">Select</option>
                      <option value="1">Rizwan</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="CompanyName"
                      className="form-input-1"
                      placeholder="Company Name"
                      onChange={handleAgentInputChange}
                      value={agentInputData.CompanyName}
                    />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <label>Company Type</label>
                    <select
                      type={"select"}
                      name="CompanyType"
                      className="form-input-1"
                      onChange={handleAgentInputChange}
                      value={agentInputData.CompanyType}
                    >
                      <option value="">Select</option>
                      <option value={1}>B2B</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <div className="d-flex justify-content-between">
                      <label className="">Consortia</label>
                    </div>
                    <select
                      type="select"
                      name="Consortia"
                      className="form-input-1"
                      onChange={handleAgentInputChange}
                      value={agentInputData.Consortia}
                    >
                      <option value="">Select</option>
                      <option value="1">ABC</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <label className="">ISO</label>
                    <select
                      type={"select"}
                      name="ISO"
                      className="form-input-1"
                      onChange={handleAgentInputChange}
                      value={agentInputData.ISO}
                    >
                      <option value="">Select</option>
                      <option value="1">ABC</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                    <div className="d-flex justify-content-between">
                      <label className="">Company Phone Number</label>
                      <span className="font-size-10 text-danger pt-1">
                        {/* <ErrorMessage name="Address1" /> */}
                      </span>
                    </div>
                    <input
                      type="text"
                      name="CompanyPhoneNumber"
                      className="form-input-1"
                      placeholder="Phone Number"
                      onChange={handleAgentInputChange}
                      value={agentInputData.CompanyPhoneNumber}
                    />
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                    <label>Company Email Address</label>
                    <input
                      type="text"
                      name="CompanyEmailAddress"
                      className="form-input-1"
                      placeholder="Email Address"
                      onChange={handleAgentInputChange}
                      value={agentInputData.CompanyEmailAddress}
                    />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <label>Competitor</label>
                    <input
                      type="text"
                      name="Competitor"
                      className="form-input-1"
                      placeholder="Competitor"
                      onChange={handleAgentInputChange}
                      value={agentInputData.Competitor}
                    />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <label>Market Type</label>
                    <select
                      type="select"
                      name="MarketType"
                      className="form-input-1"
                      onChange={handleAgentInputChange}
                      value={agentInputData.MarketType}
                    >
                      <option value="">Select</option>
                      <option value="1">ABC</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <label>Local Agent</label>
                    <div className="form-input-1 d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center gap-1">
                        <label htmlFor="agentyes" className="m-0">
                          Yes
                        </label>
                        <input
                          type="radio"
                          name="LocalAgent"
                          checked
                          id="agentyes"
                          value="YES"
                          onChange={handleAgentInputChange}
                        />
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <label htmlFor="agentno" className="m-0">
                          No
                        </label>
                        <input
                          type="radio"
                          name="LocalAgent"
                          id="agentno"
                          value="NO"
                          onChange={handleAgentInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <label>Nationality</label>
                    <select
                      type={"select"}
                      name="Nationality"
                      className="form-input-1"
                      onChange={handleAgentInputChange}
                      value={agentInputData.Nationality}
                    >
                      <option value="">Select</option>
                      <option value={1}>Indian</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <label>Country</label>
                    <select
                      component={"select"}
                      name="Country"
                      className="form-input-1"
                      onChange={handleAgentInputChange}
                      value={agentInputData.Country}
                    >
                      <option value="">Select</option>
                      <option value={2}>India</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <label>Category</label>
                    <select
                      type="select"
                      name="Category"
                      className="form-input-1"
                      onChange={handleAgentInputChange}
                      value={agentInputData.Category}
                    >
                      <option value="">Select</option>
                      <option value="1">ABC</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <label>Tour Type</label>
                    <select
                      type="select"
                      name="TourType"
                      className="form-input-1"
                      onChange={handleAgentInputChange}
                      value={agentInputData.TourType}
                    >
                      <option value="">Select</option>
                      <option value="1">ABC</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <label>Preferred Language</label>
                    <select
                      type="select"
                      name="PreferredLanguage"
                      className="form-input-1"
                      onChange={handleAgentInputChange}
                      value={agentInputData.PreferredLanguage}
                    >
                      <option value="">Select</option>
                      <option value="1">Hindi</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                    <label>Status</label>
                    <select
                      type="select"
                      name="Status"
                      className="form-input-1"
                      onChange={handleAgentInputChange}
                      value={agentInputData.Status}
                    >
                      <option value="1">Active</option>
                      <option value="0">InActive</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12 d-flex flex-column">
                    <label>Company Logo</label>
                    <label htmlFor="companylogo">
                      <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                        <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                        <p className="m-0 dark-primary-color">Upload Logo</p>
                      </div>
                    </label>
                    <input
                      type="file"
                      name="CompanyLogoImageData"
                      id="companylogo"
                      className="form-input-1"
                      onChange={handleAgentLogoInputChange}
                      value=""
                      hidden
                    ></input>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12 d-flex flex-column">
                    <label>Agent Header</label>
                    <label htmlFor="agentheader">
                      <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                        <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                        <p className="m-0 dark-primary-color">Upload Header</p>
                      </div>
                    </label>
                    <input
                      type="file"
                      name="AgentHeaderImageData"
                      id="agentheader"
                      className="form-input-1"
                      onChange={handleAgentHeaderImageChange}
                      value=""
                      hidden
                    ></input>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-12 d-flex flex-column">
                    <label>Agent Footer</label>
                    <label htmlFor="agentfooter">
                      <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                        <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                        <p className="m-0 dark-primary-color">Upload Footer</p>
                      </div>
                    </label>
                    <input
                      type="file"
                      name="AgentFooterImageData"
                      id="agentfooter"
                      className="form-input-1"
                      onChange={handleAgentFooterImageChange}
                      value=""
                      hidden
                    ></input>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddAgent;
