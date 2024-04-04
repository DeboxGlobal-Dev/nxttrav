import React from "react";
import Layout from "../Layout/Layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import bcrypt from "bcryptjs";
import {
  addCompanyInitialValue,
  addCompanyValidationSchema,
} from "../Layout/FormValidation";
import { NavLink } from "react-router-dom";

const AddCompany = () => {
  const handleSubmit = async (value, { resetForm }) => {
    try {
    //   const postData = await axios.post("url", value); 
      console.log(value);
    } catch (err) {
      console.log(err);
    }
    resetForm();
  };

  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="card shadow-none border">
            <Formik
              initialValues={addCompanyInitialValue}
              validationSchema={addCompanyValidationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="card-header header-elements-inline py-2 bg-teal">
                  <div className="col-xl-12 d-flex align-items-center justify-content-between">
                    <h5 className="card-title d-none d-sm-block">
                      Company Information
                    </h5>
                    <div>
                      <NavLink to="/company" className="btn btn-light mr-2">
                        Back
                      </NavLink>
                      <button className="btn btn-light" type="submit">
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
                        <span className="font-size-10 text-danger pt-1">
                          <ErrorMessage name="CompanyName" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="CompanyName"
                        className="form-input-1"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between ">
                        <label className="">Email</label>
                        <span className="font-size-10 text-danger pt-1">
                          <ErrorMessage name="Email"/>
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="Email"
                        className="form-input-1"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between">
                        <label className="">License Key</label>
                        <span className="font-size-10 text-danger pt-1">
                          <ErrorMessage name="LicenseKey" />
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="LicenseKey"
                        className="form-input-1"
                        placeholder="License Key"
                      />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between">
                        <label className="">Action Date</label>
                        <span className="font-size-10 text-danger pt-1">
                          <ErrorMessage name="ActionDate"/>
                        </span>
                      </div>
                      <Field
                        type="date"
                        name="ActionDate"
                        className="form-input-1"
                      />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                      <label>PAN</label>
                      <Field
                        type="text"
                        name="PAN"
                        className="form-input-1"
                        placeholder="PAN"
                      />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                      <label>TAN</label>
                      <Field
                        type="text"
                        name="TAN"
                        className="form-input-1"
                        placeholder="TAN"
                      />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                      <div className="d-flex justify-content-between">
                        <label className="">CIN</label>
                      </div>
                      <Field
                        type="text"
                        name="CIN"
                        className="form-input-1"
                        placeholder="CIN"
                      />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                        <label className="">LUTN</label>
                      <Field
                        type="text"
                        name="LUTN"
                        className="form-input-1"
                        placeholder="LUTN"
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="d-flex justify-content-between">
                        <label className="">Address-1</label>
                        <span className="font-size-10 text-danger pt-1">
                          <ErrorMessage name="Address1"/>
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="Address1"
                        className="form-input-1"
                        placeholder="Addrres-1"
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <label>Address-2</label>
                      <Field
                        type="text"
                        name="Address2"
                        className="form-input-1"
                        placeholder="Address-2"
                      />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                      <label>Pin</label>
                      <Field
                        type="text"
                        name="Pin"
                        className="form-input-1"
                        placeholder="Pin"
                      />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-12">
                      <label>Status</label>
                      <Field
                        component={"select"}
                        name="Status"
                        className="form-input-1"
                      >
                        <option value={1}>Active</option>
                        <option value={2}>InActive</option>
                      </Field>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddCompany;
