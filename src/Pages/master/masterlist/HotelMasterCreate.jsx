import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import { axiosHotel, axiosOther } from "../../../http/axios/axios_new";
import Editor from "../../../helper/Editor";
import { hotelAddInitialValue } from "./MasterValidations";
import { hotelAddContactInitialValue } from "./MasterValidations";
import {
  hotelAddValidationSchema,
  hotelAddContactArraySchema,
} from "./MasterValidations";
import toast, { Toaster } from "react-hot-toast";

const HotelMasterCreate = () => {

  const [formValue, setFormValue] = useState(hotelAddInitialValue);
  const [contactFormValue, setContactFormValue] = useState([
    hotelAddContactInitialValue,
  ]);
  const [editorValue, setEditorValue] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);

  const [hotelCategory, setHotelCategory] = useState([]);
  const [destination, setDestination] = useState([]);
  const [roomType, setRoomType] = useState([]);
  const [hotelType, setHotelType] = useState([]);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const hanldeSubmit = (value) => {
    console.log(value);
  };

  const getDataForDropdown = async () => {
    try {
      const { data } = await axiosOther.post("countrylist", {
        Search: "",
        Status: "",
      });
      console.log("country-data", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataForDropdown();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];

      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        setFormValue({
          ...formValue,
          ImageData: base64String,
          ImageName: file.name,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setFormValue({ ...formValue, [name]: value });
    }
  };

  const handleContactChange = (index, e) => {
    const { name, value } = e.target;
    setContactFormValue((prevArr) => {
      const newArray = [...prevArr];
      newArray[index] = { ...newArray[index], [name]: value };
      return newArray;
    });
  };

  const handleContactIncrement = () => {
    setContactFormValue([...contactFormValue, hotelAddContactInitialValue]);
    // contactFormValue.push(hotelAddContactInitialValue);
  };

  // console.log("contactFormValue", contactFormValue);

  const handleSubmit = async () => {
    console.log("Form Submitted");

    try {
      await hotelAddValidationSchema.validate(
        {
          ...formValue,
        },
        { abortEarly: false }
      );

      await hotelAddContactArraySchema.validate(contactFormValue, {
        abortEarly: false,
      });

      setErrorMessage("");
      const { data } = await axiosHotel.post("addupdatehotel", {
        ...formValue,
        HotelInfo: editorValue,
        contacts: contactFormValue,
      });

      if (data?.Status == "1") {
        toast.success("Data Addedd Successfully !");
        setFormValue(hotelAddInitialValue);
        setContactFormValue([hotelAddContactInitialValue]);
      }
    } catch (err) {
      const errorMessage = err?.inner.reduce((acc, crr) => {
        acc[crr?.path] = crr?.message;
        return acc;
      }, {});
      setErrorMessage(errorMessage);
    }
  };

  const handleEditorValue = (content) => {
    setEditorValue(content);
  };

  console.log("messageError", errorMessage["[0].Email"]);

  const handleContactDelete = (index) => {
    const filteredContact = contactFormValue.filter((i, ind) => ind !== index);
    setContactFormValue(filteredContact);
  };

  return (
    <>
      <Layout>
        <div className="container-fluid mt-3 mb-5">
          <div className="card shadow-none border">
            <div
              className="card-header header-elements-inline bg-info-700 py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Create New</h5>
              </div>
              <div className="">
                <NavLink
                  to="/master/hotelmaster"
                  className="gray-button py-2"
                  aria-expanded="false"
                >
                  Back
                </NavLink>
                <button className="green-button" onClick={handleSubmit}>
                  Save
                </button>
                <Toaster />
              </div>
            </div>

            <div className="card-body">
              <div className="row row-gap-2">
                <div className="col-sm-2">
                  <label className="m-0">Hotel Chain</label>
                  <select
                    className="form-input-6"
                    component={"select"}
                    name="HotelChain"
                    value={formValue?.HotelChain}
                    onChange={handleInputChange}
                  >
                    <option value={""}>Select</option>
                    <option value={"1"}>ITC</option>
                    <option value={"2"}>Oberoi Group</option>
                    <option value={"3"}>Taj Group</option>
                  </select>
                </div>
                <div className="col-sm-2">
                  <div className="d-flex justify-content-between">
                    <label className="m-0">
                      Hotel Name <span className="text-danger">*</span>
                    </label>
                    {errorMessage?.HotelName && (
                      <span className="text-danger font-size-11">
                        {errorMessage?.HotelName}
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Hotel Name"
                    className="form-input-6"
                    name="HotelName"
                    value={formValue?.HotelName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-2">
                  <div className="d-flex justify-content-between">
                    <label className="m-0">
                      Destination <span className="text-danger">*</span>
                    </label>
                    {errorMessage?.Destination && (
                      <span className="text-danger font-size-11">
                        {errorMessage?.Destination}
                      </span>
                    )}
                  </div>
                  <select
                    className="form-input-6"
                    component="select"
                    name="Destination"
                    value={formValue?.Destination}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="1">Kashmir</option>
                    <option value="2">Laddakh</option>
                    {destination.map((value, ind) => {
                      return (
                        <option value={ind + 1} key={ind + 1}>
                          {value.Name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-sm-2">
                  <label className="m-0">Hotel Category</label>
                  <select
                    className="form-input-6"
                    component={"select"}
                    name="HotelCategory"
                    value={formValue?.HotelCategory}
                    onChange={handleInputChange}
                  >
                    <option value={""}>Select</option>
                    {hotelCategory.map((value, ind) => {
                      return (
                        <option value={ind + 1} key={ind + 1}>
                          {value.Name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-sm-2">
                  <label className="m-0">Hotel Type</label>
                  <select
                    className="form-input-6"
                    component={"select"}
                    name="HotelType"
                    value={formValue?.HotelType}
                    onChange={handleInputChange}
                  >
                    <option value={""}>Select</option>
                    {hotelType.map((value, ind) => {
                      return (
                        <option value={ind + 1} key={ind + 1}>
                          {value.Name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="col-sm-2">
                  <div className="d-flex justify-content-between">
                    <label className="m-0">Hotel Link</label>
                  </div>
                  <input
                    type="text"
                    placeholder="Link"
                    className="form-input-6"
                    name="HotelLink"
                    value={formValue?.HotelLink}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-2">
                  <div className="d-flex justify-content-between">
                    <label className="m-0">Hotel Amenities</label>
                  </div>
                  <input
                    type="text"
                    placeholder="Amenities"
                    className="form-input-6"
                    name="HotelAmenities"
                    value={formValue?.HotelAmenities}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-2">
                  <div className="d-flex justify-content-between">
                    <label className="m-0">
                      Room Type <span className="text-danger">*</span>
                    </label>
                    {errorMessage?.HotelRoomType && (
                      <span className="text-danger font-size-11">
                        {errorMessage?.HotelRoomType}
                      </span>
                    )}
                  </div>
                  <select
                    className="form-input-6"
                    component={"select"}
                    name="HotelRoomType"
                    value={formValue?.HotelRoomType}
                    onChange={handleInputChange}
                  >
                    <option value={""}>Select</option>
                    <option value={"3"}>3 Star</option>
                    <option value={"4"}>4 Star</option>
                    {roomType.map((value, ind) => {
                      return (
                        <option value={ind + 1} key={ind + 1}>
                          {value.Name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-sm-2">
                  <label className="m-0">Self Supplier</label>
                  <select
                    className="form-input-6"
                    component={"select"}
                    name="SelfSupplier"
                    value={formValue?.SelfSupplier}
                    onChange={handleInputChange}
                  >
                    <option value={"1"}>Yes</option>
                    <option value={"2"}>No</option>
                  </select>
                </div>
                <div className="col-sm-2">
                  <div className="d-flex justify-content-between">
                    <label className="m-0">
                      Country <span className="text-danger">*</span>
                    </label>
                    {errorMessage?.HotelCountry && (
                      <span className="text-danger font-size-11">
                        {errorMessage?.HotelCountry}
                      </span>
                    )}
                  </div>
                  <select
                    className="form-input-6"
                    component={"select"}
                    name="HotelCountry"
                    value={formValue?.HotelCountry}
                    onChange={handleInputChange}
                  >
                    <option value={""}>Select</option>
                    <option value={"1"}>India</option>
                    <option value={"2"}>Afghanistan</option>
                  </select>
                </div>
                <div className="col-sm-2">
                  <label className="m-0">State</label>
                  <select
                    className="form-input-6"
                    component={"select"}
                    name="HotelState"
                    value={formValue?.HotelState}
                    onChange={handleInputChange}
                  >
                    <option value={"1"}>Delhi</option>
                  </select>
                </div>
                <div className="col-sm-2">
                  <label className="m-0">City</label>
                  <select
                    className="form-input-6"
                    component={"select"}
                    name="HotelCity"
                    value={formValue?.HotelCity}
                    onChange={handleInputChange}
                  >
                    <option value={"1"}>New Delhi</option>
                  </select>
                </div>
                <div className="col-sm-2">
                  <label className="m-0">Pin Code</label>
                  <input
                    type="text"
                    className="form-input-6"
                    placeholder="201301"
                    name="HotelPinCode"
                    value={formValue?.HotelPinCode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-2">
                  <label className="m-0">Address</label>
                  <input
                    type="text"
                    className="form-input-6"
                    placeholder="Address"
                    name="HotelAddress"
                    value={formValue?.HotelAddress}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-2">
                  <label className="m-0">GSTN</label>
                  <input
                    type="text"
                    className="form-input-6"
                    placeholder="GSTN"
                    name="HotelGSTN"
                    value={formValue?.HotelGSTN}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-2">
                  <div className="d-flex justify-content-between">
                    <label className="m-0">
                      Hotel Status <span className="text-danger">*</span>
                    </label>
                    {errorMessage?.Status && (
                      <span className="text-danger font-size-11">
                        {errorMessage?.Status}
                      </span>
                    )}
                  </div>
                  <select
                    className="form-input-6"
                    component={"select"}
                    name="Status"
                    value={formValue?.Status}
                    onChange={handleInputChange}
                  >
                    <option value={"Active"}>Active</option>
                    <option value={"Inactive"}>Inactive</option>
                  </select>
                </div>
                <div className="col-sm-2">
                  <label className="m-0">Weekend Days</label>
                  <select
                    className="form-input-6"
                    component={"select"}
                    name="HotelWeekend"
                    value={formValue?.HotelWeekend}
                    onChange={handleInputChange}
                  >
                    <option value={"none"}>None</option>
                    <option value={"sunday"}>Sunday</option>
                  </select>
                </div>
                <div className="col-sm-2">
                  <div className="d-flex justify-content-between">
                    <label className="m-0">
                      Days <span className="text-danger">*</span>
                    </label>
                    {errorMessage?.Days && (
                      <span className="text-danger font-size-11">
                        {errorMessage?.Days}
                      </span>
                    )}
                  </div>
                  <select
                    className="form-input-6"
                    component={"select"}
                    name="Days"
                    value={formValue?.Days}
                    onChange={handleInputChange}
                  >
                    <option value={""}>Select</option>
                    <option value={"1"}>Sun</option>
                    <option value={"2"}>Sat</option>
                  </select>
                </div>
                <div className="col-sm-2">
                  <label className="m-0">Check In Time</label>
                  <input
                    type="time"
                    className="form-input-6"
                    placeholder="GSTN"
                    name="CheckInTime"
                    value={formValue?.CheckInTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-sm-2">
                  <label className="m-0">Check Out Time</label>
                  <input
                    type="time"
                    className="form-input-6"
                    placeholder="GSTN"
                    name="CheckOutTime"
                    value={formValue?.CheckOutTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12 mt-2">
                  <div className="border-bottom"></div>
                  <div className="d-flex gap-3 mt-1">
                    <p className="font-weight-bold m-0 p-1 ">Contact Person</p>
                    <span
                      className="p-1 bg-primary m-0 rounded cursor-pointer"
                      onClick={handleContactIncrement}
                    >
                      + Add More
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  {contactFormValue?.map((form, index) => {
                    return (
                      <div
                        className={`row row-gap-1 ${index > 0 && "mt-3"}`}
                        key={index}
                      >
                        <div className="col-sm-2">
                          <label className="m-0">Divisioin</label>
                          <select
                            className="form-input-6"
                            component={"select"}
                            name="Division"
                            value={contactFormValue[index]?.Division}
                            onChange={(e) => handleContactChange(index, e)}
                          >
                            <option value={"1"}>Select</option>
                            <option value={"FIT"}>FIT Reservation</option>
                            <option value={"GIT"}>GIT Reservation</option>
                            <option value={"OPERATION"}>Operation</option>
                          </select>
                        </div>
                        <div className="col-sm-2">
                          <label className="m-0">Title</label>
                          <select
                            className="form-input-6"
                            component={"select"}
                            name="Title"
                            value={contactFormValue[index]?.Title}
                            onChange={(e) => handleContactChange(index, e)}
                          >
                            <option value={"Mr"}>Mr</option>
                            <option value={"Mrs"}>Mrs</option>
                            <option value={"Ms"}>Ms</option>
                          </select>
                        </div>
                        <div className="col-sm-2">
                          <div className="d-flex justify-content-between">
                            <label className="m-0">
                              First Name <span className="text-danger">*</span>
                            </label>
                            {errorMessage[`[${index}].FirstName`] && (
                              <span className="text-danger font-size-11">
                                {errorMessage[`[${index}].FirstName`]}
                              </span>
                            )}
                          </div>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="form-input-6"
                            name="FirstName"
                            value={contactFormValue[index]?.FirstName}
                            onChange={(e) => handleContactChange(index, e)}
                          />
                        </div>
                        <div className="col-sm-2">
                          <label className="m-0">Last Name</label>
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="form-input-6"
                            name="LastName"
                            value={contactFormValue[index]?.LastName}
                            onChange={(e) => handleContactChange(index, e)}
                          />
                        </div>
                        <div className="col-sm-2">
                          <label className="m-0">Designation</label>
                          <input
                            type="text"
                            placeholder="Designation"
                            className="form-input-6"
                            name="Designation"
                            value={contactFormValue[index]?.Designation}
                            onChange={(e) => handleContactChange(index, e)}
                          />
                        </div>
                        <div className="col-sm-2">
                          <label className="m-0">Country Code </label>
                          <input
                            type="text"
                            placeholder="+91"
                            className="form-input-6"
                            name="CountryCode"
                            value={contactFormValue[index]?.CountryCode}
                            onChange={(e) => handleContactChange(index, e)}
                          />
                        </div>
                        <div className="col-sm-2">
                          <label className="m-0">Phone 1</label>
                          <input
                            type="text"
                            placeholder="Phone 1"
                            className="form-input-6"
                            name="Phone1"
                            value={contactFormValue[index]?.Phone1}
                            onChange={(e) => handleContactChange(index, e)}
                          />
                        </div>
                        <div className="col-sm-2">
                          <label className="m-0">Phone 2</label>
                          <input
                            type="text"
                            placeholder="Phone 2"
                            className="form-input-6"
                            name="Phone2"
                            value={contactFormValue[index]?.Phone2}
                            onChange={(e) => handleContactChange(index, e)}
                          />
                        </div>
                        <div className="col-sm-2">
                          <label className="m-0">Phone 3</label>
                          <input
                            type="text"
                            placeholder="Phone 3"
                            className="form-input-6"
                            name="Phone3"
                            value={contactFormValue[index]?.Phone3}
                            onChange={(e) => handleContactChange(index, e)}
                          />
                        </div>
                        <div className="col-sm-2">
                          <div className="d-flex justify-content-between">
                            <label className="m-0">
                              Email <span className="text-danger">*</span>
                            </label>
                            {errorMessage[`[${index}].Email`] && (
                              <span className="text-danger font-size-11">
                                {errorMessage[`[${index}].Email`]}
                              </span>
                            )}
                          </div>
                          <input
                            type="text"
                            placeholder="Email"
                            className="form-input-6"
                            name="Email"
                            value={contactFormValue[index]?.Email}
                            onChange={(e) => handleContactChange(index, e)}
                          />
                        </div>
                        <div className="col-sm-2">
                          <label className="m-0">Secondary Email</label>
                          <input
                            type="text"
                            placeholder="Secondary Email"
                            className="form-input-6"
                            name="SecondaryEmail"
                            value={contactFormValue[index]?.SecondaryEmail}
                            onChange={(e) => handleContactChange(index, e)}
                          />
                        </div>
                        <div className="col-2">
                          {index > 0 && (
                            <i
                              className="fa-solid fa-trash mt-4 text-danger cursor-pointer"
                              onClick={() => handleContactDelete(index)}
                            ></i>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="col-6 mt-3">
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="" className="m-0">
                        Hotel Information
                      </label>
                      <Editor
                        heightValue={"93%"}
                        handleChangeEditor={handleEditorValue}
                        initialValue={editorValue}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 mt-3">
                  <div className="row row-gap-2">
                    <div className="col-12">
                      <label htmlFor="" className="m-0">
                        Policy
                      </label>
                      <input
                        type="textarea"
                        placeholder="Policy"
                        className="form-input-6"
                        name="HotelPolicy"
                        value={formValue?.HotelPolicy}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="m-0">
                        T&C Image
                      </label>
                      <input
                        type="file"
                        className="form-input-6 border-0"
                        name="ImageName"
                        value=""
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="m-0">
                        T&C
                      </label>
                      <input
                        type="text"
                        placeholder="Terms & Condition"
                        className="form-input-6"
                        name="HotelTC"
                        value={formValue?.HotelTC}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-2 pr-0">
                          <label htmlFor="" className="m-0">
                            Verified
                          </label>
                          <select
                            name="Verified"
                            id=""
                            className="form-input-6"
                            value={formValue?.Verified}
                            onChange={handleInputChange}
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="col-10">
                          <label htmlFor="" className="m-0">
                            Internal Note
                          </label>
                          <input
                            type="text"
                            placeholder="Internal Note"
                            className="form-input-6"
                            name="InternalNote"
                            value={formValue?.InternalNote}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
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

export default HotelMasterCreate;
