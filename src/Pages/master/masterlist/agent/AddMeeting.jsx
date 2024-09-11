import Layout from "../../../../Component/Layout/Layout";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Editor from "../../../../helper/Editor";
import { meetingAddIntitalValue } from "../mastersInitialValues";
import { useState, useEffect } from "react";
import { axiosOther } from "../../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";
import { memo } from "react";
import { meetingsValidationSchema } from "../MasterValidations";
import useDestinationSelect from "../../../../helper/custom_hook/useDestinationSelect";

const AddMeeting = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { SelectInput, selectedDestination } = useDestinationSelect();
  const { Fk_partnerid, Type } = state?.payload;
  const updateData = state?.data;
  const [formData, setFormData] = useState(
    updateData == undefined
      ? meetingAddIntitalValue
      : { ...updateData, Destination: selectedDestination }
  );
  const [errors, setErrors] = useState({});
  const [showAgentPopup, setShowAgentPopup] = useState(true);
  const [agentList, setAgentList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [leadSourceList, setLeadSourceList] = useState([]);
  const [BusinessTypeList, setBusinessTypeList] = useState([]);

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChangeValue = (content) => {
    setFormData({ ...formData, Description: content });
  };

  const handleSubmitData = async () => {
    try {
      await meetingsValidationSchema.validate(
        { ...formData, Destination: selectedDestination },
        { abortEarly: false }
      );
      setErrors({});

      const { data } = await axiosOther.post("addupdatemeetings", {
        ...formData,
        Destination: selectedDestination,
        ...state?.payload,
      });
      if (data.Status === 1) {
        toast.success(data.Message);
        setTimeout(() => {
          navigate(`/master/agent/view/${Fk_partnerid}`);
        }, 2000);
      }
    } catch (error) {
      if (error?.inner) {
        const errorMessages = error?.inner.reduce((acc, crr) => {
          acc[crr?.path] = crr?.message;
          return acc;
        }, {});
        setErrors(errorMessages);
      }
    }
  };

  const getAgentList = async () => {
    const { data } = await axiosOther.post("agentlist", {
      id: "",
      BusinessType: "",
    });
    setAgentList(data?.DataList);
  };

  useEffect(() => {
    getAgentList();
  }, [formData?.BusinessType]);

  const handleSetDataToAgent = (agent, contact) => {
    setFormData({
      ...formData,
      AgentContactPerson: contact?.Name,
      EmailId: contact?.Email,
      AgentName: agent?.CompanyName,
      AgentId: agent?.id,
      AgentContactPersonId: 1,
    });
  };

  const getDataToServer = async () => {
    try {
      const countryData = await axiosOther.post("countrylist", {
        Search: "",
        Status: 1,
      });
      setCountryList(countryData.data.DataList);
    } catch (err) {
      console.log(err);
    }

    try {
      const stateData = await axiosOther.post("leadlist", {
        Search: "",
        Status: 1,
      });
      setLeadSourceList(stateData.data.DataList);
    } catch (err) {
      console.log(err);
    }
    try {
      const stateData = await axiosOther.post("businesstypelist", {
        Search: "",
        Status: 1,
      });
      setBusinessTypeList(stateData.data.DataList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDataToServer();
  }, []);

  console.log('add-meeting-component');

  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="card shadow-none border">
            <div className="card-header header-elements-inline py-2 bg-teal backgroundColor-2">
              <div className="col-xl-12 d-flex align-items-center justify-content-between">
                <h5 className="card-title d-none d-sm-block">Add Meeting</h5>
                <div>
                  <NavLink
                    to={`/master/agent/view/${Fk_partnerid}`}
                    className="btn btn-light mr-2"
                  >
                    Back
                  </NavLink>
                  <button className="btn btn-light" onClick={handleSubmitData}>
                    Save
                  </button>
                  <Toaster />
                </div>
              </div>
              <div></div>
            </div>
            <div className="card-body mb-5 mt-3">
              <div className="row row-gap-3 justify-content-between">
                <div className="col-6">
                  <div className="row row-gap-3">
                    <div className="col-lg-4 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label className="m-0">
                          Lead Source <span className="text-danger">*</span>
                        </label>
                        {errors?.Fk_Leadsource && (
                          <span className="font-size-10 text-danger">
                            {errors?.Fk_Leadsource}
                          </span>
                        )}
                      </div>
                      <select
                        className="form-input-1"
                        name="Fk_Leadsource"
                        value={formData.Fk_Leadsource}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        {leadSourceList?.map((lead, index) => {
                          return (
                            <option value={lead?.id} key={index + 1}>
                              {lead?.Name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label className="m-0">
                          Business Type <span className="text-danger">*</span>
                        </label>
                        {errors?.BusinessType && (
                          <span className="font-size-10 text-danger pt-1">
                            {errors?.BusinessType}
                          </span>
                        )}
                      </div>
                      <select
                        className="form-input-1"
                        name="BusinessType"
                        value={formData.BusinessType}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        {BusinessTypeList?.map((business, index) => {
                          return (
                            <option value={business?.id} key={index + 1}>
                              {business?.Name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between">
                        <label className="m-0">
                          Agent <span className="text-danger">*</span>{" "}
                        </label>
                        {errors?.AgentName && (
                          <span className="font-size-10 text-danger">
                            {errors?.AgentName}
                          </span>
                        )}
                      </div>

                      <input
                        type="text"
                        placeholder="Search Agent"
                        className="form-input-1"
                        name="AgentName"
                        value={formData.AgentName}
                        onChange={handleChangeFormData}
                        onClick={() => setShowAgentPopup(true)}
                      />
                    </div>
                    {showAgentPopup && formData.BusinessType !== "" && (
                      <div className="custom-search-dropdown custom-top-pos">
                        <div
                          className="col-12 d-flex justify-content-end cursor-pointer p-0"
                          onClick={() => setShowAgentPopup(!showAgentPopup)}
                        >
                          <i className="fa-solid fa-xmark font-size-15 font-weight-bold px-1"></i>
                        </div>
                        <div className="row w-100 align-items-center gap-1 m-0 px-1">
                          {agentList
                            ?.filter((agent) => {
                              return formData?.AgentName != ""
                                ? agent.CompanyName.toLowerCase().includes(
                                    formData?.AgentName.toLowerCase()
                                  )
                                : agent;
                            })
                            .map((agent, ind) => {
                              return (
                                <div
                                  className="col-12 d-flex flex-column py-1 rounded border"
                                  key={ind + 1}
                                >
                                  <div>
                                    <span className="font-weight-bold">
                                      {agent?.CompanyName}
                                    </span>
                                  </div>
                                  {agent?.ContactList[0]?.ContactDetail?.map(
                                    (contact, ind) => {
                                      return (
                                        <div
                                          className="d-flex justify-content-between p-2 rounded cursor-pointer alternate-color mb-1"
                                          key={ind + 1}
                                          onClick={() => {
                                            handleSetDataToAgent(
                                              agent,
                                              contact
                                            ),
                                              setShowAgentPopup(
                                                !showAgentPopup
                                              );
                                          }}
                                        >
                                          <span className="m-0 ">
                                            {contact?.Name}
                                          </span>
                                          <span className="m-0 ">
                                            {contact?.Phone}
                                          </span>
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              );
                            })}
                          {agentList == "" && (
                            <div className="col-12 d-flex justify-content-center">
                              <h6 className="text-secondary">
                                There are no records for show
                              </h6>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    <div className="col-lg-4 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between">
                        <label className="m-0">
                          ContactPersonName{" "}
                          <span className="text-danger">*</span>
                        </label>
                        {errors?.AgentContactPerson && (
                          <span className="font-size-10 text-danger pt-1">
                            {errors?.AgentContactPerson}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        className="form-input-1"
                        placeholder="Contact Person"
                        name="AgentContactPerson"
                        value={formData.AgentContactPerson}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between">
                        <label className="m-0">
                          Email Addres <span className="text-danger">*</span>
                        </label>
                        {errors?.EmailId && (
                          <span className="font-size-10 text-danger pt-1">
                            {errors?.EmailId}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        className="form-input-1"
                        placeholder="Email Address"
                        name="EmailId"
                        value={formData.EmailId}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between">
                        <label className="m-0">
                          Country <span className="text-danger">*</span>
                        </label>
                        {errors?.CountryId && (
                          <span className="font-size-10 text-danger pt-1">
                            {errors?.CountryId}
                          </span>
                        )}
                      </div>
                      <select
                        className="form-input-1"
                        name="CountryId"
                        value={formData.CountryId}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        {countryList?.map((country, index) => {
                          return (
                            <option value={country?.id} key={index + 1}>
                              {country?.Name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-12">
                      <div className="d-flex justify-content-between">
                        <label className="m-0">
                          Destination <span className="text-danger">*</span>
                        </label>
                        {errors?.Destination && (
                          <span className="font-size-10 text-danger pt-1">
                            {errors?.Destination}
                          </span>
                        )}
                      </div>
                      <SelectInput />
                    </div>
                  </div>
                  <div className="row row-gap-3 mt-3">
                    <h1>Meeting Information</h1>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between">
                        <label className="m-0">
                          Start Date <span className="text-danger">*</span>
                        </label>
                        {errors?.Startdate && (
                          <span className="font-size-10 text-danger pt-1">
                            {errors?.Startdate}
                          </span>
                        )}
                      </div>
                      <input
                        type="date"
                        className="form-input-1"
                        name="Startdate"
                        value={formData.Startdate}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label className="m-0">Start Time</label>
                        <span className="font-size-10 text-danger pt-1"></span>
                      </div>
                      <select
                        className="form-input-1"
                        name="StartTime"
                        value={formData.StartTime}
                        onChange={handleChangeFormData}
                      >
                        <option value={"9:00 AM".split(" ").join()}>
                          9:00 AM
                        </option>
                        <option value={"9:15 AM".split(" ").join()}>
                          9:15 AM
                        </option>
                        <option value={"9:30 AM".split(" ").join()}>
                          9:30 AM
                        </option>
                      </select>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label className="m-0">Call Duration</label>
                        <span className="font-size-10 text-danger pt-1"></span>
                      </div>
                      <select
                        className="form-input-1"
                        name="CallDuration"
                        value={formData.CallDuration}
                        onChange={handleChangeFormData}
                      >
                        <option value={"5 Minute".split(" ").join()}>
                          5 Minute
                        </option>
                        <option value={"10 Minute".split(" ").join()}>
                          10 Minute
                        </option>
                        <option value={"15 Minute".split(" ").join()}>
                          15 Minute
                        </option>
                      </select>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label className="m-0">End Time</label>
                        <span className="font-size-10 text-danger pt-1"></span>
                      </div>
                      <input
                        type="text"
                        className="form-input-1"
                        placeholder="End Time"
                        name="EndTime"
                        value={formData.EndTime}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label
                          className={`m-0 ${
                            errors?.NextFollowUpdate && "font-size-9"
                          }`}
                        >
                          Next FollowUp Date
                          <span className="text-danger">*</span>
                          {errors?.NextFollowUpdate && (
                            <span className="text-danger">Required</span>
                          )}
                        </label>
                      </div>
                      <input
                        type="date"
                        className="form-input-1"
                        placeholder="End Time"
                        name="NextFollowUpdate"
                        value={formData.NextFollowUpdate}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label className="m-0">Next Follow Up Time</label>
                        <span className="font-size-10 text-danger pt-1"></span>
                      </div>
                      <select
                        className="form-input-1"
                        name="NextFollowUpTime"
                        value={formData.NextFollowUpTime}
                        onChange={handleChangeFormData}
                      >
                        <option value={"9:00 Am".split(" ").join()}>
                          9:00 AM
                        </option>
                        <option value={"9:15 Am".split(" ").join()}>
                          9:15 AM
                        </option>
                        <option value={"9:30 Am".split(" ").join()}>
                          9:30 AM
                        </option>
                      </select>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label className="m-0">Reminder Time</label>
                        <span className="font-size-10 text-danger pt-1"></span>
                      </div>
                      <select
                        className="form-input-1"
                        name="ReminderTime"
                        value={formData.ReminderTime}
                        onChange={handleChangeFormData}
                      >
                        <option value="1">Before 15 Min</option>
                        <option value="2">Before 30 Min</option>
                        <option value="3">Before 1 hour</option>
                        <option value="4">Before 2 hour</option>
                      </select>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label className="m-0">Status</label>
                        <span className="font-size-10 text-danger pt-1"></span>
                      </div>
                      <select
                        className="form-input-1"
                        name="CallStatus"
                        value={formData.CallStatus}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        <option value="1">Scheduled</option>
                        <option value="2">Held</option>
                        <option value="3">Canceled</option>
                      </select>
                    </div>
                    <div className="col-lg-6 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label className="m-0">Meeting Outcome</label>
                        <span className="font-size-10 text-danger pt-1"></span>
                      </div>
                      <select
                        className="form-input-1"
                        name="MeetingOutcome"
                        value={formData.MeetingOutcome}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        <option value="1">Long Term Prospect</option>
                        <option value="2">Long Term Prospect</option>
                        <option value="3">Not Interested</option>
                      </select>
                    </div>
                    <div className="col-lg-6 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label className="m-0">Campaign</label>
                        <span className="font-size-10 text-danger pt-1"></span>
                      </div>
                      <select
                        className="form-input-1"
                        name="Campaign"
                        value={formData.Campaign}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        <option value="1">ABC</option>
                        <option value="2">DEF</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <div className="d-flex justify-content-between">
                        <label className="m-0">
                          Meeting Agenda <span className="text-danger">*</span>
                        </label>
                        {errors?.MeetingAgenda && (
                          <span className="font-size-10 text-danger">
                            {errors?.MeetingAgenda}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        className="form-input-1"
                        placeholder="Task Subject"
                        name="MeetingAgenda"
                        value={formData.MeetingAgenda}
                        onChange={handleChangeFormData}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <div className="row row-gap-3">
                    <div className="col-lg-8 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between">
                        <label className="m-0">
                          Sales Person <span className="text-danger">*</span>
                        </label>
                        {errors?.SalesPerson && (
                          <span className="font-size-10 text-danger">
                            {errors?.SalesPerson}
                          </span>
                        )}
                      </div>
                      <select
                        className="form-input-1"
                        name="SalesPerson"
                        value={formData.SalesPerson}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        <option value="1">Ansar</option>
                        <option value="2">Rizwan</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <div className="d-flex justify-content-between">
                        <label className="m-0">
                          Mobile Number <span className="text-danger">*</span>{" "}
                        </label>
                        {errors?.MobileNumber && (
                          <span className="font-size-10 text-danger pt-1">
                            {errors?.MobileNumber}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        className="form-input-1"
                        name="MobileNumber"
                        value={formData.MobileNumber}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-6">
                      <div className="d-flex justify-content-between">
                        <label className="m-0">Contact Number</label>
                        <span className="font-size-10 text-danger pt-1"></span>
                      </div>
                      <input
                        type="text"
                        placeholder="Contact Number"
                        className="form-input-1"
                        name="ContactNumber"
                        value={formData.ContactNumber}
                        onChange={handleChangeFormData}
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="d-flex justify-content-between">
                      <label className="m-0">Description</label>
                      <span className="font-size-10 text-danger pt-1"></span>
                    </div>
                    <Editor
                      handleChangeEditor={handleEditorChangeValue}
                      style={{ heigh: "260px" }}
                      initialValue={formData?.Description}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default memo(AddMeeting);
