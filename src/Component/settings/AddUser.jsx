import React from "react";
import Layout from "../Layout/Layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import bcrypt from "bcryptjs";
import {
  addUserInitialValue,
  addUserValidationSchema,
} from "../Layout/FormValidation";
import { NavLink } from "react-router-dom";

const AddUser = () => {
  const handleSubmit = async (value, { resetForm }) => {
    try {
      // let password = await bcrypt.hash(value.Password, 10) // Here bycrypted our password from json
      // value.Password=password;  // Here i stored bycrypted password again inside json
      console.log(value);
      const postData = await axios.post("createupdateuser", value); // now i have posted our json data to api
      resetForm();
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
              initialValues={addUserInitialValue}
              validationSchema={addUserValidationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="header-elements-inline py-2 backgroundColor-2">
                  <div className="col-xl-12 d-flex align-items-center justify-content-between">
                    <h5 className="card-title d-none d-sm-block m-0 text-light">
                      Account Information
                    </h5>
                    <div className="col-2 d-flex justify-content-around">
                    <NavLink  to="/setting" className="btn btn-light" type="submit">
                      Back
                    </NavLink>
                    <button className="btn btn-light" type="submit">
                      Save
                    </button>
                    </div>
                  </div>
                </div>
                <div className="card-body mt-4">
                  <div className="row justify-content-between flex-sm-row flex-column row-gap-3">
                    <div className="col-sm-3 col-12 rounded py-1 backgroundColor w-100">
                      <div className="row row-gap-2">
                        <div className="col-lg-6 col-12">
                          <div className="d-flex justify-content-between">
                            <label className="">First Name</label>
                            <span className="font-size-10 text-danger pt-1">
                              <ErrorMessage name="FirstName" />
                            </span>
                          </div>
                          <Field
                            type="text"
                            name="FirstName"
                            className="form-input-1 borderNone backgroundColor-1"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="col-lg-6 col-12">
                          <label>Last Name</label>
                          <Field
                            type="text"
                            name="LastName"
                            className="form-input-1 borderNone backgroundColor-1"
                            placeholder="Last Name"
                          />
                        </div>
                        <div className="col-12">
                          <div className="d-flex justify-content-between">
                            <label className="">Email</label>
                            <span className="font-size-10 text-danger pt-1">
                              <ErrorMessage name="Email" />
                            </span>
                          </div>
                          <Field
                            type="text"
                            name="Email"
                            className="form-input-1 borderNone backgroundColor-1"
                            placeholder="Email"
                          />
                        </div>
                        <div className="col-12">
                          <label>Pin</label>
                          <Field
                            type="text"
                            name="Pin"
                            className="form-input-1 borderNone backgroundColor-1"
                            placeholder="Pin"
                          />
                        </div>
                        <div className="col-12">
                          <div className="d-flex justify-content-between">
                            <label className="">Password</label>
                            <span className="font-size-10 text-danger pt-1">
                              <ErrorMessage name="Password" />
                            </span>
                          </div>
                          <Field
                            type="text"
                            name="Password"
                            className="form-input-1 borderNone backgroundColor-1"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-9 col-12 pl-sm-4 py-1 w-100">
                      <div className="row row-gap-3">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                          <div className="d-flex justify-content-between">
                            <label className="">User Code</label>
                            <span className="font-size-10 text-danger pt-1">
                              <ErrorMessage name="UserCode" />
                            </span>
                          </div>
                          <Field
                            type="text"
                            name="UserCode"
                            className="form-input-1"
                            placeholder="User Code"
                          />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                          <label>Phone</label>
                          <Field
                            type="text"
                            name="Phone"
                            className="form-input-1"
                            placeholder="Phone"
                          />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                          <label>Mobile</label>
                          <Field
                            type="text"
                            name="Moblie"
                            className="form-input-1"
                            placeholder="Mobile"
                          />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                          <label>Street</label>
                          <Field
                            type="text"
                            name="Street"
                            className="form-input-1"
                            placeholder="Street"
                          />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                          <label>Time Format</label>
                          <Field
                            component={"select"}
                            name="TimeFormat"
                            className="form-input-1"
                          >
                            <option value="">Select</option>
                            <option value={1}>12 Hours</option>
                            <option value={2}>24 Hours</option>
                          </Field>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                          <label>Language Known</label>
                          <Field
                            component={"select"}
                            name="LanguageKnown"
                            className="form-input-1"
                          >
                            <option value="">Select</option>
                            <option value={1}>Hindi</option>
                            <option value={2}>Urdu</option>
                            <option value={3}>Arabic</option>
                            <option value={4}>English</option>
                            <option value={5}>Persion</option>
                            <option value={6}>Russian</option>
                          </Field>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                          <label>Destination</label>
                          <Field
                            component={"select"}
                            name="Destination"
                            className="form-input-1"
                          >
                            <option value="">Select</option>
                            <option value={1}>Delhi</option>
                            <option value={2}>Noida</option>
                            <option value={3}>Gurgaon</option>
                            <option value={4}>Banglore</option>
                          </Field>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                          <div className="d-flex justify-content-between">
                            <label className="">Role</label>
                            <span className="font-size-10 text-danger pt-1">
                              <ErrorMessage name="Role" />
                            </span>
                          </div>
                          <Field
                            component={"select"}
                            name="Role"
                            className="form-input-1"
                          >
                            <option value="">Select</option>
                            <option value={1}>CEO</option>
                            <option value={2}>Vice President</option>
                            <option value={3}>Manager</option>
                            <option value={4}>Operation</option>
                            <option value={5}>Software Developer</option>
                          </Field>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                          <div className="d-flex justify-content-between">
                            <label className="">User Department</label>
                            <span className="font-size-10 text-danger pt-1">
                              <ErrorMessage name="UserDepartment" />
                            </span>
                          </div>
                          <Field
                            component={"select"}
                            name="UserDepartment"
                            className="form-input-1"
                          >
                            <option value="">Select</option>
                            <option value={1}>Technichal Department</option>
                            <option value={2}>Operation</option>
                            <option value={3}>Sales</option>
                          </Field>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                          <div className="d-flex justify-content-between">
                            <label className="">Profile</label>
                            <span className="font-size-10 text-danger pt-1">
                              <ErrorMessage name="Profile" />
                            </span>
                          </div>

                          <Field
                            component={"select"}
                            name="Profile"
                            className="form-input-1"
                          >
                            <option value="">Select</option>
                            <option value={1}>Agent</option>
                            <option value={2}>Operation</option>
                            <option value={3}>Technichal Dashboard</option>
                          </Field>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                          <div className="d-flex justify-content-between">
                            <label className="">Reporting Manager</label>
                            <span className="font-size-10 text-danger pt-1">
                              <ErrorMessage name="ReportingManager" />
                            </span>
                          </div>

                          <Field
                            component={"select"}
                            name="ReportingManager"
                            className="form-input-1"
                          >
                            <option value="">Select</option>
                            <option value={1}>Administator CRM</option>
                            <option value={2}>Ansar</option>
                          </Field>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                          <label>User Type</label>
                          <Field
                            component={"select"}
                            name="UserType"
                            className="form-input-1"
                          >
                            <option value="">Select</option>
                            <option value={1}>Sales Person</option>
                            <option value={2}>Operations Person</option>
                            <option value={2}>Account Manager</option>
                            <option value={2}>Contracting Person</option>
                            <option value={2}>Reserveration</option>
                          </Field>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                          <label>User Login Type</label>
                          <Field
                            component={"select"}
                            name="UserLoginType"
                            className="form-input-1"
                          >
                            <option value="">Select</option>
                            <option value={1}>Internal User</option>
                            <option value={2}>External User</option>
                          </Field>
                        </div>
                      </div>
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

export default AddUser;
