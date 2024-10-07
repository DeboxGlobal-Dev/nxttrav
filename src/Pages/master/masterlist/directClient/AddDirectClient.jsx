import React, { useEffect, useState } from "react";
import Layout from "../../../../Component/Layout/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import {
  directClientContact,
  directClientDocumentation,
  directClientInitialValue,
} from "../mastersInitialValues";
import { axiosOther } from "../../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";
import fetchingDataForDropdownList from "../../../../helper/MasterHelper/fetchingDataForList";
import { direcetClientValidationSchema } from "../MasterValidations";

const AddDirectClient = () => {
  const navigate = useNavigate();
  const [addMoreInfo, setAddMoreInfo] = useState(true);
  const [contactListArray, setContactListArray] = useState([1]);
  const [documentationListArray, setDocumentationListArray] = useState([1]);
  const [formData, setFormData] = useState({ ...directClientInitialValue });
  const [errors, setErrors] = useState({});
  const [contactFormDataArray, setContactFormDataArray] = useState([
    directClientContact,
  ]);
  const [documentationDataArray, setDocumentationDataArray] = useState([
    directClientDocumentation,
  ]);

  console.log("final object for post data", {
    ...formData,
    ContactInfo: contactFormDataArray,
    Documentation: documentationDataArray,
  });

  const increaseContactList = () => {
    const length = contactListArray.length;
    const lastValue = contactListArray[length - 1];
    setContactListArray([...contactListArray, lastValue + 1]);
    setContactFormDataArray((prevArr) => [...prevArr, directClientContact]);
  };

  const increaseDocumentationList = () => {
    const length = documentationListArray.length;
    const lastValue = documentationListArray[length - 1];
    setDocumentationListArray([...documentationListArray, lastValue + 1]);

    setDocumentationDataArray((prevArr) => [
      ...prevArr,
      directClientDocumentation,
    ]);
  };

  const deleteContactListItem = () => {
    if (contactListArray.length == 1) {
      return null;
    }
    const afterDelete = contactListArray;
    afterDelete.pop();
    setContactListArray([...afterDelete]);
  };

  const deleteDocumentationListArray = () => {
    const afterDelete = documentationListArray;
    afterDelete.pop();
    setDocumentationListArray([...afterDelete]);
  };



  const handleChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactInfoChangeData = (index, e) => {
    
    const { name, value } = e.target;
    setContactFormDataArray((prevArr) => {
      const newArray = [...prevArr];
      newArray[index] = { ...newArray[index], [name]: value };
      return newArray;
    });
  };

  const handleDocumentationChangeFormData = (index, e) => {
    const { name, value, files } = e.target;

    if (files && files.length > 0) {
      const fileData = files[0];
      const reader = new FileReader();

      reader.readAsDataURL(fileData);
      reader.onload = () => {
        const base64String = reader.result;

        // Update only the ImageData for the specific index
        setDocumentationDataArray((prevArr) => {
          const newArray = [...prevArr];
          newArray[index] = {
            ...newArray[index],
            ImageData: base64String,
          };
          return newArray;
        });
      };
    }

    // Update other fields without waiting for file processing
    setDocumentationDataArray((prevArr) => {
      const newArray = [...prevArr];
      newArray[index] = { ...newArray[index], [name]: value };
      return newArray;
    });
  };

  const handleSumbitData = async () => {
    try {
      const { data } = await axiosOther.post("addupdatedirectClient", {
        ...formData,
        ContactInfo: contactFormDataArray,
        Documentation: documentationDataArray,
      });

      console.log("direct-client", data);
      if (data?.Status === 1) {
        toast.success(data?.Message);
        setTimeout(() => {
          navigate(`/master/directclient/view/${data?.id}`, {
            state: data?.id,
          });
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log("errors-errors", errors);

  // fetching data from server for dropdown list

  const handleDropdownListApi = async () => {
    const nationalityResponse = await fetchingDataForDropdownList(
      "nationalitylist",
      {
        Search: "",
        Status: "",
      }
    );
    const CompanyResponse = await fetchingDataForDropdownList(
      "companytypemasterlist",
      {
        Search: "",
        Status: "",
      }
    );
    const CountryResponse = await fetchingDataForDropdownList("countrylist", {
      Search: "",
      Status: "",
    });
    const StateResponse = await fetchingDataForDropdownList("statelist", {
      Search: "",
      Status: "",
    });
    const CityResponse = await fetchingDataForDropdownList("citylist", {
      Search: "",
      Status: "",
    });
  };

  useEffect(() => {
    handleDropdownListApi();
  }, []);

  const handleHeaderImageChange = (e) => {};

  return (
    <Layout>
      <div className="container-fluid p-3 mb-4">
        <div className="card shadow-none border">
          <div className="card-header header-elements-inline py-2 bg-teal backgroundColor-2">
            <div className="col-xl-12 d-flex align-items-center justify-content-between">
              <h5 className="card-title d-none d-sm-block">
                Add Direct Client
              </h5>
              <div>
                <NavLink
                  to="/master/directClient"
                  className="btn btn-light mr-2"
                >
                  Back
                </NavLink>
                <button className="btn btn-light" onClick={handleSumbitData}>
                  Save
                </button>
                <Toaster />
              </div>
            </div>
          </div>
          <div className="card-body mb-5 mt-3">
            <div className="row justify-content-between">
              <div className="col-6">
                {/* contact information */}
                <div className="row">
                  <div className="col-4">
                    <label
                      htmlFor="contactinformation"
                      className="font-weight-bold m-0"
                    >
                      Contact Information
                    </label>
                    <select
                      className="form-input-5"
                      name="ContactType"
                      value={formData.ContactType}
                      onChange={handleChangeFormData}
                    >
                      <option value="B2C">B2C</option>
                      <option value="Employe">Employe</option>
                      <option value="GuestList">GuestList</option>
                    </select>
                  </div>
                </div>
                {/* personal information */}
                <div className="row mt-1 row-gap-4">
                  <p className="font-weight-bold m-0">Personal Information</p>
                  <div className="col-3 pt-0 mt-0">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="nationality" className="m-0">
                        Nationality <span className="text-danger">*</span>
                      </label>
                      {errors?.Nationality && (
                        <span className="text-danger font-size-12 m-0">
                          {errors?.Nationality}
                        </span>
                      )}
                    </div>
                    <select
                      name="Nationality"
                      value={formData.Nationality}
                      onChange={handleChangeFormData}
                      id=""
                      className="form-input-5"
                    >
                      <option value="">Select</option>
                      <option value="1">Indian</option>
                      <option value="2">American</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="title" className="m-0">
                        Title <span className="text-danger">*</span>
                      </label>
                      {errors?.Title && (
                        <span className="text-danger font-size-12">
                          {errors?.Title}
                        </span>
                      )}
                    </div>
                    <select
                      name="Title"
                      onChange={handleChangeFormData}
                      value={formData.Title}
                      id=""
                      className="form-input-5"
                    >
                      <option value="">Select</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="firstname" className="m-0">
                        First Name <span className="text-danger">*</span>
                      </label>
                      {errors?.FirstName && (
                        <span className="text-danger font-size-12">
                          {errors?.FirstName}
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      className="form-input-5"
                      placeholder="First Name"
                      name="FirstName"
                      value={formData.FirstName}
                      onChange={handleChangeFormData}
                      id="fname"
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="mName" className="m-0">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      className="form-input-5"
                      placeholder="Middle Name"
                      name="MiddleName"
                      value={formData.MiddleName}
                      onChange={handleChangeFormData}
                      id="mName"
                    />
                  </div>
                  <div className="col-3">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="lastname" className="m-0">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      {errors?.LastName && (
                        <span className="text-danger font-size-12">
                          {errors?.LastName}
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      className="form-input-5"
                      placeholder="Last Name"
                      name="LastName"
                      value={formData.LastName}
                      onChange={handleChangeFormData}
                      id="lName"
                    />
                  </div>
                  <div className="col-3">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="gender" className="m-0">
                        Gender <span className="text-danger">*</span>
                      </label>
                      {errors?.Gender && (
                        <span className="text-danger font-size-12">
                          {errors?.Gender}
                        </span>
                      )}
                    </div>
                    <select
                      id="gender"
                      className="form-input-5"
                      name="Gender"
                      value={formData.Gender}
                      onChange={handleChangeFormData}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="dob" className="m-0">
                        DOB <span className="text-danger">*</span>
                      </label>
                      {errors?.DOB && (
                        <span className="text-danger font-size-12">
                          {errors?.DOB}
                        </span>
                      )}
                    </div>
                    <input
                      type="date"
                      name="DOB"
                      className="form-input-5"
                      id="dob"
                      value={formData.DOB}
                      onChange={handleChangeFormData}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="anniversary" className="m-0">
                      Anniversary Date
                    </label>
                    <input
                      type="date"
                      name="AnniversaryDate"
                      className="form-input-5"
                      id="anniversary"
                      value={formData.AnniversaryDate}
                      onChange={handleChangeFormData}
                    />
                  </div>
                </div>
                {/* contact information */}
                <div className="row mt-1">
                  <div className="d-flex justify-content-between">
                    <p className="font-weight-bold m-0">Contact Information</p>
                    <p
                      className="font-weight-bold m-0 cursor-pointer"
                      onClick={increaseContactList}
                    >
                      <span className="fs-4">+</span>
                    </p>
                  </div>
                  <div className="col-12">
                    {contactListArray?.map((value, index) => {
                      return (
                        <div
                          className="row row-gap-3 justify-content-between"
                          key={value}
                        >
                          <div className="pr-0 width-16">
                            <label
                              htmlFor="contacttype"
                              className="m-0 font-size-10"
                            >
                              Mobile
                            </label>
                            <select
                              name="Contact_Type"
                              id="contacttype"
                              className="form-input-5"
                              value={contactFormDataArray[index].Contact_Type}
                              onChange={(e) =>
                                handleContactInfoChangeData(index, e)
                              }
                            >
                              <option value="">Select</option>
                              <option value="Work">Work</option>
                              <option value="Residence">Residence</option>
                              <option value="Fax">Fax</option>
                              <option value="Phone">Phone</option>
                            </select>
                          </div>
                          <div className="p-0 width-6">
                            <label htmlFor="code" className="m-0 font-size-10">
                              Code
                            </label>
                            <input
                              type="text"
                              className="form-input-5 pl-1"
                              placeholder="+91"
                              name="CountryCode"
                              value={contactFormDataArray[index].CountryCode}
                              onChange={(e) =>
                                handleContactInfoChangeData(index, e)
                              }
                            />
                          </div>
                          <div className="p-0 width-25">
                            <label
                              htmlFor="moblie"
                              className="m-0 font-size-10 "
                            >
                              Mobile
                            </label>
                            <input
                              type="text"
                              className="form-input-5 pl-1"
                              placeholder="987654321"
                              name="Mobile"
                              id="mobile"
                              value={contactFormDataArray[index].Mobile}
                              onChange={(e) =>
                                handleContactInfoChangeData(index, e)
                              }
                            />
                          </div>
                          <div className="p-0 width-16">
                            <label htmlFor="email" className="m-0 font-size-10">
                              Email
                            </label>
                            <select
                              name="EmailType"
                              id="email"
                              value={contactFormDataArray[index].EmailType}
                              onChange={(e) =>
                                handleContactInfoChangeData(index, e)
                              }
                              className="form-input-5 pl-0"
                            >
                              <option value="">Select</option>
                              <option value="Office">Office</option>
                              <option value="Home">Home</option>
                              <option value="Other">Other</option>
                              <option value="Operation">Operation</option>
                            </select>
                          </div>
                          <div className="p-0 width-30">
                            <label htmlFor="email" className="m-0 font-size-10">
                              Email
                            </label>
                            <input
                              type="text"
                              placeholder="Email"
                              className="form-input-5"
                              value={contactFormDataArray[index].Email}
                              name="Email"
                              onChange={(e) =>
                                handleContactInfoChangeData(index, e)
                              }
                            />
                          </div>
                          {contactListArray.length > 1 && (
                            <div className="width-4 d-flex justify-content-center align-items-center pl-0">
                              {index == 0 ? (
                                <i className="fa-solid fa-trash pt-3 text-white"></i>
                              ) : (
                                <i
                                  className="fa-solid fa-trash text-danger pt-3  cursor-pointer"
                                  onClick={deleteContactListItem}
                                ></i>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* address information */}
                <div className="row mt-1 row-gap-3">
                  <p className="font-weight-bold m-0">Address Information</p>
                  <div className="col-3">
                    <label htmlFor="country" className="m-0 ">
                      Country
                    </label>
                    <select
                      name="Country"
                      id="country"
                      className="form-input-5"
                      value={formData.Country}
                      onChange={handleChangeFormData}
                    >
                      <option value="">Select</option>
                      <option value="1">India</option>
                      <option value="2">Bnagladesh</option>
                      <option value="3">SriLanka</option>
                      <option value="4">Nepal</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <label htmlFor="state" className="m-0">
                      State
                    </label>
                    <select
                      name="State"
                      value={formData.State}
                      onChange={handleChangeFormData}
                      id="state"
                      className="form-input-5"
                    >
                      <option value="">Select</option>
                      <option value="1">Delhi</option>
                      <option value="2">Haryana</option>
                      <option value="3">West Bangal</option>
                      <option value="4">Banglore</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <label htmlFor="city" className="m-0">
                      City
                    </label>
                    <select
                      name="City"
                      value={formData.City}
                      onChange={handleChangeFormData}
                      id="city"
                      className="form-input-5"
                    >
                      <option value="">Select</option>
                      <option value="1">New Delhi</option>
                      <option value="2">Gurugram</option>
                      <option value="3">Noida</option>
                      <option value="4">Howrah</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <label htmlFor="email" className="m-0">
                      Pin/Zip
                    </label>
                    <input
                      type="text"
                      className="form-input-5 pl-1"
                      placeholder="201301"
                      name="Pin_Zip"
                      id="mobile"
                      value={formData.Pin_Zip}
                      onChange={handleChangeFormData}
                    />
                  </div>
                </div>
                {/* address textarea */}
                <div className="row mt-1">
                  <label htmlFor="address">Address</label>
                  <div className="col-12">
                    <textarea
                      className="form-input-5"
                      name="Address"
                      value={formData.Address}
                      onChange={handleChangeFormData}
                      placeholder="Address..."
                    />
                  </div>
                </div>
              </div>
              {/* Add More Information */}
              <div className="col-6">
                <p
                  className="font-weight-bold fs-6 m-0 cursor-pointer"
                  onClick={() => setAddMoreInfo(!addMoreInfo)}
                >
                  Add More Information
                  {!addMoreInfo ? (
                    <i className="fa-solid fa-caret-down fs-6 pl-1"></i>
                  ) : (
                    <i className="fa-solid fa-caret-up fs-6 pl-1"></i>
                  )}
                </p>
                {addMoreInfo && (
                  <>
                    <div className="row">
                      <div className="col-3">
                        <label htmlFor="salesperson" className="m-0">
                          Sales Person
                        </label>
                        <select
                          name="SalesPerson"
                          id="salesperson"
                          onChange={handleChangeFormData}
                          value={formData.SalesPerson}
                          className="form-input-5"
                        >
                          <option value="">Select</option>
                          <option value="1">Ansar</option>
                          <option value="2">Rizwan</option>
                        </select>
                      </div>
                      <div className="col-3">
                        <div className="d-flex justify-content-between">
                          <label htmlFor="firstname" className="m-0">
                            Status <span className="text-danger">*</span>
                          </label>
                          {errors?.Status && (
                            <span className="text-danger font-size-12">
                              {errors?.Status}
                            </span>
                          )}
                        </div>
                        <select
                          name="Status"
                          value={formData.Status}
                          onChange={handleChangeFormData}
                          id="status"
                          className="form-input-5"
                        >
                          <option value="">Select</option>
                          <option value="1">Active</option>
                          <option value="0">Inactive</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <p className="m-0 font-weight-bold">Family Information</p>
                      <div className="col-4">
                        <label htmlFor="familycode" className="m-0">
                          Family Code
                        </label>
                        <input
                          type="text"
                          className="form-input-5"
                          name="FamilyCode"
                          value={formData.FamilyCode}
                          onChange={handleChangeFormData}
                          placeholder="Family Code"
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="familyrelation" className="m-0">
                          Family Relation
                        </label>
                        <select
                          className="form-input-5"
                          onChange={handleChangeFormData}
                          value={formData.FamilyRelation}
                          name="FamilyRelation"
                        >
                          <option value="">Select</option>
                          <option value="1">Father</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <p className="m-0 font-weight-bold">Preference</p>
                      <div className="col-3">
                        <label
                          htmlFor="familyrelation"
                          className="font-size-12 m-0"
                        >
                          Meal Preference
                        </label>
                        <select
                          className="form-input-5"
                          name="MealPreference"
                          value={formData.MealPreference}
                          onChange={handleChangeFormData}
                        >
                          <option value="">Select</option>
                          <option value="1">Indian Meal</option>
                          <option value="2">Vegiterian</option>
                          <option value="3">Non Veg</option>
                        </select>
                      </div>
                      <div className="col-3">
                        <label
                          htmlFor="familyrelation"
                          className="font-size-12 m-0"
                        >
                          Special Assistence
                        </label>
                        <select
                          className="form-input-5"
                          name="SpecialAssisteance"
                          value={formData.SpecialAssisteance}
                          onChange={handleChangeFormData}
                        >
                          <option value="">Select</option>
                          <option value="1">Wheel Chair</option>
                          <option value="2">Bed Requirements</option>
                        </select>
                      </div>
                      <div className="col-3">
                        <label
                          htmlFor="familyrelation"
                          className="font-size-12 m-0"
                        >
                          Seat Preference
                        </label>
                        <select
                          className="form-input-5"
                          name="SeatPreference"
                          value={formData.SeatPreference}
                          onChange={handleChangeFormData}
                        >
                          <option value="">Select</option>
                          <option value="Window">Window</option>
                          <option value="Aisle">Aisle</option>
                        </select>
                      </div>
                      <div className="col-3">
                        <label
                          htmlFor="familyrelation"
                          className="font-size-12 m-0"
                        >
                          Accomodation Pref
                        </label>
                        <select
                          className="form-input-5"
                          name="AccomodationPreference"
                          value={formData.AccomodationPreference}
                          onChange={handleChangeFormData}
                        >
                          <option value="">Select</option>
                          <option value="1">Guest House</option>
                          <option value="1">Holiday Home</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <p className="m-0 font-weight-bold">Others</p>
                      <div className="col-3">
                        <label
                          htmlFor="markettype"
                          className="font-size-12 m-0"
                        >
                          Market Type
                        </label>
                        <select
                          className="form-input-5"
                          name="MarketType"
                          value={formData.MarketType}
                          onChange={handleChangeFormData}
                        >
                          <option value="">Select</option>
                          <option value="1">General</option>
                        </select>
                      </div>
                      <div className="col-3">
                        <label
                          htmlFor="familyrelation"
                          className="font-size-12 m-0"
                        >
                          Holiday Preference
                        </label>
                        <input
                          type="text"
                          className="form-input-5"
                          name="HolidayPreference"
                          value={formData.HolidayPreference}
                          onChange={handleChangeFormData}
                        />
                      </div>
                      <div className="col-3">
                        <label
                          htmlFor="covidvaccinated"
                          className="font-size-12 m-0"
                        >
                          Covid Vaccinated
                        </label>
                        <select
                          className="form-input-5"
                          name="CovidVaccinated"
                          value={formData.CovidVaccinated}
                          onChange={handleChangeFormData}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div className="col-3">
                        <label
                          htmlFor="newsletter"
                          className="font-size-12 m-0"
                        >
                          News Letter
                        </label>
                        <select
                          className="form-input-5"
                          id="newsletter"
                          name="NewsLetter"
                          value={formData.NewsLetter}
                          onChange={handleChangeFormData}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <p className="m-0 font-weight-bold">
                        Emergency Contact Details
                      </p>

                      <div className="col-4">
                        <label
                          htmlFor="emergencyContactName"
                          className="font-size-12 m-0"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-input-5"
                          id="emergencyContactName"
                          name="EmergencyContactName"
                          value={formData.EmergencyContactName}
                          onChange={handleChangeFormData}
                          placeholder="Name"
                        />
                      </div>
                      <div className="col-4">
                        <label
                          htmlFor="emergencyContactRelation"
                          className="font-size-12 m-0"
                        >
                          Relation
                        </label>
                        <input
                          type="text"
                          className="form-input-5"
                          id="emergencyContactRelation"
                          name="Relation"
                          value={formData.Relation}
                          onChange={handleChangeFormData}
                          placeholder="Relation"
                        />
                      </div>
                      <div className="col-4">
                        <label
                          htmlFor="emergencyContact"
                          className="font-size-12 m-0"
                        >
                          Contact
                        </label>
                        <input
                          type="text"
                          className="form-input-5"
                          id="emergencyContact"
                          name="EmergencyContactNumber"
                          value={formData.EmergencyContactNumber}
                          onChange={handleChangeFormData}
                          placeholder="Contact"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* documentation */}
            <div className="row row-gap-3">
              <div className="d-flex justify-content-between">
                <p className="font-weight-500 fs-5 m-0">Documentation</p>
                <p
                  className="font-weight-500 fs-5 m-0 cursor-pointer"
                  onClick={increaseDocumentationList}
                >
                  <span className="fs-3">+</span>
                </p>
              </div>
              <div className="col-12 d-flex flex-column gap2">
                {documentationListArray.map((value, index) => {
                  return (
                    <div className="row" key={value}>
                      <div className="col-1">
                        <label
                          htmlFor="documenttype"
                          className="m-0 font-size-10"
                        >
                          Document Type
                        </label>
                        <select
                          name="DocumentType"
                          value={documentationDataArray[index].DocumentType}
                          onChange={(e) =>
                            handleDocumentationChangeFormData(index, e)
                          }
                          id="docuemnttype"
                          className="form-input-5"
                        >
                          <option value="1">Adhar</option>
                          <option value="2">Pan</option>
                          <option value="3">VISA</option>
                          <option value="4">Passport</option>
                        </select>
                      </div>
                      <div className="col-1">
                        <label htmlFor="required" className="m-0 font-size-10">
                          Required
                        </label>
                        <select
                          name="DocumentRequired"
                          value={documentationDataArray[index].DocumentRequired}
                          onChange={(e) =>
                            handleDocumentationChangeFormData(index, e)
                          }
                          id="required"
                          className="form-input-5"
                        >
                          <option value="">Select</option>
                          <option value="No">No</option>
                          <option value="Yes">Yes</option>
                        </select>
                      </div>
                      <div className="col-2">
                        <label htmlFor="documentno" className="m-0">
                          Document No
                        </label>
                        <input
                          type="text"
                          id="documentno"
                          className="form-input-5"
                          name="DocumentNo"
                          placeholder="Document Number"
                          value={documentationDataArray[index].DocumentNo}
                          onChange={(e) =>
                            handleDocumentationChangeFormData(index, e)
                          }
                        />
                      </div>
                      <div className="col-1 p-0">
                        <label htmlFor="issuedate" className="m-0 font-size-10">
                          Issue Date
                        </label>
                        <input
                          type="date"
                          id="issuedate"
                          className="form-input-5 font-size-12"
                          name="IssueDate"
                          value={documentationDataArray[index].IssueDate}
                          onChange={(e) =>
                            handleDocumentationChangeFormData(index, e)
                          }
                        />
                      </div>
                      <div className="col-1 p-0 pl-1">
                        <label
                          htmlFor="expiredate"
                          className="m-0 font-size-10"
                        >
                          Expire Date
                        </label>
                        <input
                          type="date"
                          id="expiredate"
                          className="form-input-5 font-size-12"
                          name="ExpiryDate"
                          value={documentationDataArray[index].ExpiryDate}
                          onChange={(e) =>
                            handleDocumentationChangeFormData(index, e)
                          }
                        />
                      </div>
                      <div className="col-2">
                        <label
                          htmlFor="issuecountry"
                          className="m-0 font-size-10"
                        >
                          Issue Country
                        </label>
                        <select
                          id="issuecountry"
                          className="form-input-5"
                          name="IssueCountry"
                          value={documentationDataArray[index].IssueCountry}
                          onChange={(e) =>
                            handleDocumentationChangeFormData(index, e)
                          }
                        >
                          <option value="">India</option>
                          <option value="1">Zimbabwe</option>
                        </select>
                      </div>
                      <div className="col-2">
                        <label
                          htmlFor="documentitle"
                          className="m-0 font-size-10"
                        >
                          Document Title
                        </label>
                        <select
                          id="documentitle"
                          className="form-input-5"
                          name="DocumentTitle"
                          value={documentationDataArray[index].DocumentTitle}
                          onChange={(e) =>
                            handleDocumentationChangeFormData(index, e)
                          }
                        >
                          <option value="Both">Both</option>
                          <option value="Front">Front</option>
                          <option value="Back">Back</option>
                        </select>
                      </div>
                      <div className="col-2 d-flex">
                        <div className="">
                          <label className="m-0 font-size-10">
                            Upload Document
                          </label>
                          <label
                            htmlFor="agentheader"
                            className="form-input-5 border-0 p-0"
                          >
                            <div className="form-input-5 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                              <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                              <p className="m-0 dark-primary-color">
                                Upload Here..
                              </p>
                            </div>
                          </label>
                          <input
                            type="file"
                            name="ImageData"
                            id="agentheader"
                            className="form-input-5"
                            value=""
                            hidden
                            onChange={(e) =>
                              handleDocumentationChangeFormData(index, e)
                            }
                          ></input>
                        </div>
                        {documentationListArray.length > 1 && (
                          <div className="d-flex justify-content-center align-items-center">
                            {index == 0 ? (
                              <i className="fa-solid fa-trash pt-2 pl-1 text-white"></i>
                            ) : (
                              <i
                                className="fa-solid fa-trash text-danger pt-2 pl-1 cursor-pointer"
                                onClick={deleteDocumentationListArray}
                              ></i>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* socialmedia */}
            <div className="row mt-2 ">
              <p className="font-weight-500 fs-5 m-0">Social Media</p>
              <div className="col-12 d-flex flex-column gap-2">
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="facebook" className="m-0">
                      Facebook Profile
                    </label>
                    <input
                      type="text"
                      id="facebook"
                      className="form-input-5"
                      name="Facebook"
                      placeholder="Facebook"
                      value={formData.Facebook}
                      onChange={handleChangeFormData}
                    />
                  </div>
                  <div className="col-2">
                    <label htmlFor="twitter" className="m-0">
                      Twitter Profile
                    </label>
                    <input
                      type="text"
                      id="twitter"
                      className="form-input-5"
                      name="Twitter"
                      placeholder="Twitter"
                      value={formData.Twitter}
                      onChange={handleChangeFormData}
                    />
                  </div>
                  <div className="col-2">
                    <label htmlFor="linked" className="m-0">
                      LinkedIn Profile
                    </label>
                    <input
                      type="text"
                      id="linked"
                      className="form-input-5"
                      name="LinkedIn"
                      placeholder="Linked"
                      value={formData.LinkedIn}
                      onChange={handleChangeFormData}
                    />
                  </div>
                  <div className="col-2">
                    <label htmlFor="instagram" className="m-0">
                      Instagram Profile
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      className="form-input-5"
                      name="Instagram"
                      placeholder="Instagram"
                      value={formData.Instagram}
                      onChange={handleChangeFormData}
                    />
                  </div>
                  <div className="col-2">
                    <label htmlFor="skypeid" className="m-0">
                      Skype Id
                    </label>
                    <input
                      type="text"
                      id="skypeid"
                      className="form-input-5"
                      name="Skype"
                      placeholder="Skype"
                      value={formData.Skype}
                      onChange={handleChangeFormData}
                    />
                  </div>
                  <div className="col-2 d-flex ">
                    <div>
                      <label htmlFor="msnid" className="m-0">
                        MSN Id
                      </label>
                      <input
                        type="text"
                        id="msnid"
                        className="form-input-5"
                        name="MSN_Id"
                        placeholder="MSN"
                        value={formData.MSN_Id}
                        onChange={handleChangeFormData}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-4">
                    <label htmlFor="remark1" className="m-0">
                      Remarks 1
                    </label>
                    <textarea
                      name="Remark1"
                      value={formData.Remark1}
                      onChange={handleChangeFormData}
                      className="form-input-5"
                      id="remark1"
                    ></textarea>
                  </div>
                  <div className="col-4">
                    <label htmlFor="remark2" className="m-0">
                      Remarks 2
                    </label>
                    <textarea
                      name="Remark2"
                      value={formData.Remark2}
                      onChange={handleChangeFormData}
                      className="form-input-5"
                      id="remark2"
                    ></textarea>
                  </div>
                  <div className="col-4">
                    <label htmlFor="remark3" className="m-0">
                      Remarks 3
                    </label>
                    <textarea
                      name="Remark3"
                      value={formData.Remark3}
                      onChange={handleChangeFormData}
                      className="form-input-5"
                      id="remark3"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddDirectClient;
