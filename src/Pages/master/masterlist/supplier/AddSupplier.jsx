import React, { useState } from "react";
import Layout from "../../../../Component/Layout/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";
import { supplierValidationSchema } from "../MasterValidations";
import useImageUploader from "../../../../helper/custom_hook/useImageUploader";
import { axiosOther } from "../../../../http/axios/axios_new";
import useDestinationSelect from "../../../../helper/custom_hook/useDestinationSelect";
import { supplierAddInitialValue } from "../mastersInitialValues";

const checkBoxArray = [
  "hotel",
  "airlines",
  "restaurant",
  "activity",
  "transfer",
  "entrance",
  "guide",
  "train",
  "visa",
  "insurance",
  "other",
];

const AddSupplier = () => {
  const { imageData, handleImage } = useImageUploader();
  const { SelectInput, selectedDestination } = useDestinationSelect();
  const navigate = useNavigate();

  const [selectedServices, setSelectedServices] = useState([]);
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState(supplierAddInitialValue);

  // here handling checkbox value from form
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked && value != "allSelected") {
      // Add the checked value to the array
      setSelectedServices([...selectedServices, value]);
      setFormData({
        ...formData,
        SupplierService: [...selectedServices, value],
      });
    } else if (value == "allSelected" && checked) {
      // set all check box
      setSelectedServices(checkBoxArray);
      setFormData({ ...formData, SupplierService: [...checkBoxArray] });
    } else if (value == "allSelected" && !checked) {
      //remove al checkbox
      setSelectedServices([]);
      setFormData({ ...formData, SupplierService: [] });
    } else {
      // Remove the unchecked value from the array
      setSelectedServices(
        selectedServices.filter((service) => service !== value)
      );
      setFormData({
        ...formData,
        SupplierService: [
          selectedServices.filter((service) => service !== value),
        ],
      });
    }
  };

  // here handling all form values
  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // it's a callback funtion for checking every condition for all select checkbox
  const handleEveryCheck = (element) => selectedServices.includes(element);

  // here handling submitting data
  const handleSubmitData = async () => {
    try {
      await supplierValidationSchema.validate(formData, {
        abortEarly: false,
      });

      const { data } = await axiosOther.post("addupdatesupplier", {
        ...formData,
        Destination: selectedDestination,
      });
      setErrors({});
      
      if(data?.Status === 1){
        toast.success(data?.Message);
      }

    } catch (err) {
      if (err.inner) {
        const errorMessages = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrors(errorMessages);
      }
    }
  };

  return (
    <Layout>
      <div className="container-fluid p-3 mb-4">
        <div className="card shadow-none border">
          <div className="card-header header-elements-inline py-2 bg-teal backgroundColor-2">
            <div className="col-xl-12 d-flex align-items-center justify-content-between">
              <h5 className="card-title d-none d-sm-block">Add Supplier</h5>
              <div>
                <NavLink to="/master/supplier" className="btn btn-light mr-2">
                  Back
                </NavLink>
                <button className="btn btn-light" onClick={handleSubmitData}>
                  Save
                </button>
                <Toaster />
              </div>
            </div>
          </div>
          <div className="card-body mb-5 mt-3">
            <div className="row">
              <div className="col-6">
                <div className="row row-gap-3">
                  <div className="col-6">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="contactinformation" className="m-0">
                        Supplier Name <span className="text-danger ">*</span>
                      </label>
                      {errors?.Name && (
                        <span className="font-size-12 text-danger m-0">
                          {errors?.Name}
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="Supplier Name"
                      className="form-input-1"
                      name="Name"
                      value={formData?.Name}
                      onChange={handleChangeFormData}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="aliasname" className="m-0">
                      Alias Name
                    </label>
                    <input
                      type="text"
                      placeholder="Alias Name"
                      className="form-input-1"
                      value={formData.AliasName}
                      name="AliasName"
                      onChange={handleChangeFormData}
                    />
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="supplierservices" className="m-0">
                        Supplier Services
                        <span className="text-danger fs-6">*</span>
                      </label>
                      {errors?.SupplierService && (
                        <span className="font-size-12 text-danger m-0">
                          {errors?.SupplierService}
                        </span>
                      )}
                    </div>
                    <div className="border p-2 rounded d-flex flex-column gap-1">
                      <div className="check-box d-flex gap-2 alin-items-center">
                        <input
                          type="checkbox"
                          id="allselect"
                          name="SupplierService"
                          value={"allSelected"}
                          onChange={handleCheckboxChange}
                          checked={checkBoxArray.every(handleEveryCheck)}
                        />
                        <label htmlFor="allselect" className="m-0">
                          All Select Services
                        </label>
                      </div>
                      {checkBoxArray.map((services, index) => {
                        return (
                          <div
                            className="check-box d-flex gap-2 alin-items-center"
                            key={index + 1}
                          >
                            <input
                              type="checkbox"
                              id={services}
                              name="SupplierServices"
                              onChange={handleCheckboxChange}
                              value={services}
                              checked={selectedServices.includes(services)}
                            />
                            <label htmlFor={services} className="m-0">
                              {services.charAt(0).toUpperCase() +
                                services.slice(1)}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row row-gap-3">
                  <div className="col-4">
                    <label htmlFor="status" className="m-0">
                      Status <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-input-1"
                      name="Status"
                      value={formData.Status}
                      onChange={handleChangeFormData}
                    >
                      <option value="Yes">Active</option>
                      <option value="No">InActive</option>
                    </select>
                  </div>
                  <div className="col-8">
                    <label htmlFor="paninformation" className=" m-0">
                      PAN Information
                    </label>
                    <input
                      type="text"
                      placeholder="PAN Information"
                      className="form-input-1"
                      value={formData.PanInformation}
                      name="PanInformation"
                      onChange={handleChangeFormData}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="destionation" className="m-0">
                      Destination
                    </label>
                    <SelectInput />
                  </div>
                  <div className="col-3">
                    <label htmlFor="paymentterm" className="m-0">
                      Payment Term
                    </label>
                    <div className="form-input-1 justify-content-between d-flex px-1">
                      <div className="d-flex gap-1 align-items-center">
                        <input
                          type="radio"
                          id="cash"
                          name="PaymentTerm"
                          value="Cash"
                          onChange={handleChangeFormData}
                          defaultChecked
                        />
                        <label htmlFor="cash" className="font-size-12  m-0">
                          Cash
                        </label>
                      </div>
                      <div className="d-flex gap-1 align-items-center">
                        <input
                          type="radio"
                          id="credit"
                          name="PaymentTerm"
                          value="Credit"
                          onChange={handleChangeFormData}
                        />
                        <label htmlFor="credit" className="font-size-12 m-0">
                          Credit
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <label htmlFor="paymentterm" className="m-0">
                      Confirmation Type
                    </label>
                    <div className="form-input-1 justify-content-between d-flex px-1">
                      <div className="d-flex gap-1 align-items-center">
                        <input
                          type="radio"
                          id="auto"
                          name="ConfirmationType"
                          value="Auto"
                          onChange={handleChangeFormData}
                        />
                        <label
                          htmlFor="auto"
                          className="font-size-12  m-0"
                          defaultChecked
                        >
                          Auto
                        </label>
                      </div>
                      <div className="d-flex gap-1 align-items-center">
                        <input
                          type="radio"
                          id="manual"
                          name="ConfirmationType"
                          value="Manual"
                          onChange={handleChangeFormData}
                          defaultChecked
                        />
                        <label htmlFor="manual" className="font-size-12 m-0">
                          Manual
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <label htmlFor="paymentterm" className="m-0">
                      Local Agent
                    </label>
                    <div className="form-input-1 gap-3 d-flex px-1">
                      <div className="d-flex gap-1 align-items-center">
                        <input type="radio" id="agentyes" name="LocalAgent" />
                        <label
                          htmlFor="agentyes"
                          className="font-size-12  m-0"
                          value="Yes"
                          onChange={handleChangeFormData}
                          defaultChecked
                        >
                          Yes
                        </label>
                      </div>
                      <div className="d-flex gap-1 align-items-center">
                        <input
                          type="radio"
                          id="agentno"
                          name="LocalAgent"
                          value="No"
                          onChange={handleChangeFormData}
                          defaultChecked
                        />
                        <label htmlFor="agentno" className="font-size-12 m-0">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <label htmlFor="paymentterm" className="m-0">
                      Agreement
                    </label>
                    <div className="form-input-1 gap-3 d-flex px-1">
                      <div className="d-flex gap-1 align-items-center">
                        <input
                          type="radio"
                          id="agreementyes"
                          name="Agreement"
                          value="Yes"
                          onChange={handleChangeFormData}
                        />
                        <label
                          htmlFor="agreementyes"
                          className="font-size-12  m-0"
                          defaultChecked
                        >
                          Yes
                        </label>
                      </div>
                      <div className="d-flex gap-1 align-items-center">
                        <input
                          type="radio"
                          id="agreementno"
                          name="Agreement"
                          value="No"
                          onChange={handleChangeFormData}
                          defaultChecked
                        />
                        <label
                          htmlFor="agreementno"
                          className="font-size-12 m-0"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  {formData.Agreement == "Yes" && (
                    <>
                      <div className="col-6">
                        <div className="">
                          <label className="m-0">1 Agreement Attachment</label>
                          <label
                            htmlFor="firstagreement"
                            className="form-input-1 border-0 p-0"
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
                            id="firstagreement"
                            className="form-input-5"
                            value=""
                            onChange={(e) => handleImage(e, "FirstAgreement")}
                            hidden
                          ></input>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="">
                          <label className="m-0">2 Agreement Attachment</label>
                          <label
                            htmlFor="secondagreement"
                            className="form-input-1 border-0 p-0"
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
                            id="secondagreement"
                            className="form-input-5"
                            value=""
                            onChange={(e) => handleImage(e, "SecondAgreement")}
                            hidden
                          ></input>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="row-12">
                    <label htmlFor="destionation" className="m-0">
                      Default Destionation
                    </label>
                    <select
                      name="DefaultDestination"
                      id="destination"
                      className="form-input-1"
                      onChange={handleChangeFormData}
                      value={formData?.DefaultDestination}
                    >
                      <option value="">Select</option>
                      <option value="1">New Delhi</option>
                      <option value="2">Gurgaon</option>
                      <option value="3">Kolkata</option>
                      <option value="4">Surat</option>
                      <option value="5">Pujab</option>
                    </select>
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

export default AddSupplier;
