import Layout from "../../../../Component/Layout/Layout";
import { NavLink, useLocation } from "react-router-dom";
import Editor from "../../../../helper/Editor";
import { meetingAddIntitalValue } from "../mastersInitialValues";
import { useState } from "react";
import { axiosOther } from "../../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";
import { memo } from "react";

const AddMeeting = () => {
  const  {state}  = useLocation();
  const { Fk_partnerid } = state;
  const [formData, setFormData] = useState(meetingAddIntitalValue);

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChangeValue = (content) => {
    setFormData({ ...formData, Description: content });
  };

  const handleSubmitData = async () => {
    try {
      const { data } = await axiosOther.post("addupdatemeetings", {
        ...formData,
        ...state,
      });
      toast.success(data.Message);
      console.log("submitting-data", data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("meeting-form-data", {...formData, ...state});

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
                        <label className="m-0">Lead Source</label>
                        <span className="font-size-10 text-danger pt-1"></span>
                      </div>
                      <select
                        className="form-input-1"
                        name="Fk_Leadsource"
                        value={formData.Fk_Leadsource}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        <option value="1">Facebook</option>
                        <option value="2">Instagram</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label className="m-0">Business Type</label>
                        <span className="font-size-10 text-danger pt-1"></span>
                      </div>
                      <select
                        className="form-input-1"
                        name="BusinessType"
                        value={formData.BusinessType}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        <option value="1">Agent</option>
                        <option value="2">B2B</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between">
                        <label className="m-0">Agent</label>
                        <span className="font-size-10 text-danger pt-1"></span>
                      </div>
                      <select
                        className="form-input-1"
                        name="AgentName"
                        value={formData.AgentName}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        <option value="1">Rizwan</option>
                        <option value="2">Ansar</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between">
                        <label className="m-0">Contact Person Name</label>
                        <span className="font-size-10 text-danger pt-1"></span>
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
                        <label className="m-0">Email Addres</label>
                        <span className="font-size-10 text-danger pt-1"></span>
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
                      <label className="m-0">Country</label>
                      <select
                        className="form-input-1"
                        name="CountryId"
                        value={formData.CountryId}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        <option value="1">India</option>
                        <option value="2">Canada</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-4 col-12">
                      <label className="m-0">Destination</label>
                      <select
                        name="Destination"
                        value={formData.Destination}
                        onChange={handleChangeFormData}
                        className="form-input-1"
                      >
                        <option value="">Select</option>
                        <option value="1">Noida</option>
                        <option value="2">Agra</option>
                        <option value="2">Gurgaon</option>
                      </select>
                    </div>
                  </div>
                  <div className="row row-gap-3 mt-3">
                    <h1>Meeting Information</h1>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label className="m-0">Start Date</label>
                        <span className="font-size-10 text-danger pt-1"></span>
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
                        <label className="m-0">Next Follow Up Date</label>
                        <span className="font-size-10 text-danger pt-1"></span>
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
                        <label className="m-0">Meeting Agenda</label>
                        <span className="font-size-10 text-danger pt-1"></span>
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
                        <label className="m-0">Sales Person</label>
                        <span className="font-size-10 text-danger pt-1"></span>
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
                        <label className="m-0">Mobile Number</label>
                        <span className="font-size-10 text-danger pt-1"></span>
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
