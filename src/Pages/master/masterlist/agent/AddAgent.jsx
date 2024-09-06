import React, { useEffect, useReducer, useState } from "react";
import Layout from "../../../../Component/Layout/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import { agentMasterInitialValue } from "../mastersInitialValues";
import { axiosOther } from "../../../../http/axios/axios_new";
import { toast, Toaster } from "react-hot-toast";
import Editor from "../../../../helper/Editor";
import { agentMasterValidationSchema } from "../MasterValidations";

const AddAgent = () => {

  const navigate = useNavigate();

  const initialState = {
    businessTypeList: [],
    consortiaList: [],
    isoList: [],
    marketType: [],
    companyType: [],
    nationalityList: [],
    tourList: [],
    countryList: [],
    preferredLanguage: [],
    countryList: [],
  };
  
  const [agentInfoValue, setAgentInfoValue] = useState("");
  const [remarksValue, setRemarksValue] = useState("");
  const [errors, setErrors] = useState({});

  const [agentInputData, setAgentInputData] = useState({
    ...agentMasterInitialValue,
  });
  const [logoImageData, setLogoImageData] = useState({
    CompanyLogoImageName: "",
    CompanyLogoImageData: "",
  });
  const [headerImageData, setHeaderImageData] = useState({
    AgentHeaderImageName: "",
    AgentHeaderImageData: "",
  });
  const [footerImageData, setFooterImageData] = useState({
    AgentFooterImageName: "",
    AgentFooterImageData: "",
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "BUSINESS-TYPE":
        return { ...state, businessTypeList: action.payload };
      case "CONSORTIA-LIST":
        return { ...state, consortiaList: action.payload };
      case "ISO-LIST":
        return { ...state, isoList: action.payload };
      case "MARKET-TYPE":
        return { ...state, marketType: action.payload };
      case "COMPANY-TYPE":
        return { ...state, companyType: action.payload };
      case "NATIONALITY-LIST":
        return { ...state, nationalityList: action.payload };
      case "TOUR-LIST":
        return { ...state, tourList: action.payload };
      case "PREFERED-LANGUAGE":
        return { ...state, preferredLanguage: action.payload };
      case "COUNTRY-LIST":
        return { ...state, countryList: action.payload };
    }
    return state;
  };

  const [allApiList, dispatch] = useReducer(reducer, initialState);

  const handleAgentInputChange = (e) => {
    setAgentInputData({ ...agentInputData, [e.target.name]: e.target.value });
  };

  const handleAgentLogoInputChange = (e) => {
    const file = e.target.files[0];
    file;

    if (file) {
      const reader = new FileReader();

      reader.onload = function () {
        const base64String = reader.result;
        setLogoImageData({
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
        setHeaderImageData({
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
        setFooterImageData({
          AgentFooterImageName: file.name,
          AgentFooterImageData: base64String,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const postingDataIntoAgentApi = async () => {
    try {
      await agentMasterValidationSchema.validate(
        {
          ...headerImageData,
          ...footerImageData,
          ...agentInputData,
        },
        {
          abortEarly: false,
        }
      );
      console.log({
        ...logoImageData,
        ...headerImageData,
        ...footerImageData,
        ...agentInputData,
      });
      const { data } = await axiosOther.post("addupdateagent", {
        ...logoImageData,
        ...headerImageData,
        ...footerImageData,
        ...agentInputData,
      });
     
      

      if (data.Status === 1) {
        toast.success(data?.Message);
        setTimeout(()=>{
          navigate(`/master/agent/view/${data?.AgentId}`);
        },1500);
      }
      if (data.Status === -1) {
        toast.error(data?.Message);
      }
    } catch (err) {
      if (err.inner) {
        const errorMessages = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrors(errorMessages);
      }
      console.log(err);
    }
  };

  // console.log('errors', errors)
  const getApiListForDropdown = async () => {
    try {
      const { data } = await axiosOther.post("businesstypelist", {
        Search: "",
        Status: "",
      });

      dispatch({ type: "BUSINESS-TYPE", payload: data?.DataList });
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axiosOther.post("consortiamasterlist ", {
        Search: "",
        Status: "",
      });

      dispatch({ type: "CONSORTIA-LIST", payload: data?.DataList });
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axiosOther.post("isomasterlist ", {
        Search: "",
        Status: "",
      });

      dispatch({ type: "ISO-LIST", payload: data?.DataList });
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axiosOther.post("markettypemasterlist", {
        Search: "",
        Status: "",
      });

      dispatch({ type: "MARKET-TYPE", payload: data?.DataList });
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axiosOther.post("companytypemasterlist", {
        Search: "",
        Status: "",
      });

      dispatch({ type: "COMPANY-TYPE", payload: data?.DataList });
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axiosOther.post("nationalitylist", {
        Search: "",
        Status: "",
      });

      dispatch({ type: "NATIONALITY-LIST", payload: data?.DataList });
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axiosOther.post("tourlist", {
        Search: "",
        Status: "",
      });

      dispatch({ type: "TOUR-LIST", payload: data?.DataList });
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axiosOther.post("countrylist", {
        Search: "",
        Status: "",
      });

      dispatch({ type: "COUNTRY-LIST", payload: data?.DataList });
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await axiosOther.post("preferredlanguagelist", {
        Search: "",
        Status: "",
      });

      dispatch({ type: "PREFERED-LANGUAGE", payload: data?.DataList });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getApiListForDropdown();
  }, []);

  const agentInfoChangeHandler = (content) => {
    setAgentInfoValue(content);
  };

  const remarksChangeHandler = (content) => {
    setRemarksValue(content);
  };

  return (
    <Layout>
      <div className="container-fluid p-3 mb-4">
        <div className="card shadow-none border">
          <div className="card-header header-elements-inline py-2 bg-teal backgroundColor-2">
            <div className="col-xl-12 d-flex align-items-center justify-content-between">
              <h5 className="card-title d-none d-sm-block">Add Agent</h5>
              <div>
                <NavLink to="/master/agent" className="btn btn-light mr-2">
                  Back
                </NavLink>
                <button
                  className="btn btn-light"
                  onClick={postingDataIntoAgentApi}
                >
                  Save
                </button>
                <Toaster />
              </div>
            </div>
            <div></div>
          </div>
          <div className="card-body mb-5 mt-3">
            <div className="row row-gap-3">
              <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                <div className="d-flex justify-content-between">
                  <label>
                    Bussiness Type <span className="text-danger">*</span>
                  </label>
                  {errors?.BussinessType && (
                    <span className="text-danger font-size-10">
                      {errors?.BussinessType}
                    </span>
                  )}
                </div>
                <select
                  type={"select"}
                  name="BussinessType"
                  className="form-input-1"
                  onChange={handleAgentInputChange}
                  value={agentInputData.BussinessType}
                >
                  <option value="">select</option>
                  {allApiList?.businessTypeList?.map((list, index) => {
                    return (
                      <option value={list?.id} key={index + 1}>
                        {list?.Name}
                      </option>
                    );
                  })}
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
                  <label>
                    Sales Person <span className="text-danger">*</span>
                  </label>
                  {errors?.SalesPerson && (
                    <span className="text-danger font-size-10">
                      {errors?.SalesPerson}
                    </span>
                  )}
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
                <div className="d-flex justify-content-between">
                  <label>
                    Company Name <span className="text-danger">*</span>
                  </label>
                  {errors?.CompanyName && (
                    <span className="text-danger font-size-10">
                      {errors?.CompanyName}
                    </span>
                  )}
                </div>
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
                  {allApiList?.companyType?.map((list, index) => {
                    return (
                      <option key={index + 1} value={list?.id}>
                        {list?.Name}
                      </option>
                    );
                  })}
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
                  {allApiList?.consortiaList?.map((list, index) => {
                    return (
                      <option value={list?.id} key={index + 1}>
                        {list?.Name}
                      </option>
                    );
                  })}
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
                  {allApiList?.isoList?.map((list, index) => {
                    return (
                      <option value={list?.id} key={index + 1}>
                        {list?.Name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="d-flex justify-content-between">
                  <label
                    className={`${
                      errors?.CompanyPhoneNumber && "font-size-10 pt-1"
                    }`}
                  >
                    Company Phone Number
                    <span className="text-danger">*</span>
                  </label>
                  {errors?.CompanyPhoneNumber && (
                    <span className="text-danger font-size-10 pt-1">
                      {errors?.CompanyPhoneNumber}
                    </span>
                  )}
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
                <div className="d-flex justify-content-between">
                  <label
                    className={`${
                      errors?.CompanyPhoneNumber && "font-size-10 pt-1"
                    }`}
                  >
                    Company Email Address <span className="text-danger">*</span>
                  </label>
                  {errors?.CompanyEmailAddress && (
                    <span className="text-danger font-size-10 pt-1">
                      {errors?.CompanyEmailAddress}
                    </span>
                  )}
                </div>
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
                <div className="d-flex justify-content-between">
                  <label>
                    Market Type
                    <span className="text-danger">*</span>
                  </label>
                  {errors?.MarketType && (
                    <span className="text-danger font-size-10">
                      {errors?.MarketType}
                    </span>
                  )}
                </div>
                <select
                  type="select"
                  name="MarketType"
                  className="form-input-1"
                  onChange={handleAgentInputChange}
                  value={agentInputData.MarketType}
                >
                  <option value="">Select</option>
                  {allApiList?.marketType?.map((list, index) => {
                    return (
                      <option value={list?.id} key={index + 1}>
                        {list?.Name}
                      </option>
                    );
                  })}
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
                      id="agentyes"
                      value="Yes"
                      onChange={handleAgentInputChange}
                      defaultChecked
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
                      value="No"
                      onChange={handleAgentInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                <div className="d-flex justify-content-between">
                  <label>
                    Nationality <span className="text-danger">*</span>
                  </label>
                  {errors?.Nationality && (
                    <span className="text-danger font-size-10">
                      {errors?.Nationality}
                    </span>
                  )}
                </div>
                <select
                  type={"select"}
                  name="Nationality"
                  className="form-input-1"
                  onChange={handleAgentInputChange}
                  value={agentInputData.Nationality}
                >
                  <option value="">Select</option>
                  {allApiList?.nationalityList?.map((list, index) => {
                    return (
                      <option value={list?.id} key={index + 1}>
                        {list?.Name}
                      </option>
                    );
                  })}
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
                  {allApiList?.countryList?.map((list, index) => {
                    return (
                      <option value={list?.id} key={index + 1}>
                        {list?.Name}
                      </option>
                    );
                  })}
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
                  {allApiList?.tourList?.map((list, index) => {
                    return (
                      <option value={list?.id} key={index + 1}>
                        Select
                      </option>
                    );
                  })}
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
                  {allApiList?.preferredLanguage?.map((list, index) => {
                    return (
                      <option value={list?.id} key={index + 1}>
                        Select
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                <div className="d-flex justify-content-between">
                  <label>
                    Status
                    <span className="text-danger">*</span>
                  </label>
                  {errors?.Status == "Status" && (
                    <span className="text-danger">{errors?.Status}</span>
                  )}
                </div>
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
                    <p className="m-0 dark-primary-color">
                      {logoImageData.CompanyLogoImageName != ""
                        ? logoImageData.CompanyLogoImageName
                        : "Upload Image"}
                    </p>
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
                <div className="d-flex justify-content-between">
                  <label>
                    Agent Header
                    <span className="text-danger">*</span>
                  </label>
                  {errors?.AgentHeaderImageData && (
                    <span className="text-danger font-size-10">
                      {errors?.AgentHeaderImageData}
                    </span>
                  )}
                </div>
                <label htmlFor="agentheader">
                  <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                    <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                    <p className="m-0 dark-primary-color">
                      {headerImageData.AgentHeaderImageName != ""
                        ? headerImageData.AgentHeaderImageName
                        : "Upload Header"}
                    </p>
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
                <div className="d-flex justify-content-between">
                  <label>
                    Agent Footer
                    <span className="text-danger">*</span>
                  </label>
                  {errors?.AgentFooterImageData && (
                    <span className="text-danger font-size-10">
                      {errors?.AgentFooterImageData}
                    </span>
                  )}
                </div>
                <label htmlFor="agentfooter">
                  <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                    <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                    <p className="m-0 dark-primary-color">
                      {footerImageData.AgentFooterImageName != ""
                        ? footerImageData.AgentFooterImageName
                        : "Upload Footer"}
                    </p>
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
              <div className="col-6">
                <label>Agent Info</label>
                <Editor
                  handleChangeEditor={agentInfoChangeHandler}
                  heightValue={"60%"}
                  initialValue={agentInfoValue}
                />
              </div>
              <div className="col-6">
                <label>Remarks</label>
                <Editor
                  handleChangeEditor={remarksChangeHandler}
                  heightValue={"60%"}
                  initialValue={remarksValue}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddAgent;
