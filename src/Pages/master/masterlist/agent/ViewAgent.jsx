import React, { useState, useEffect } from "react";
import Layout from "../../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import { agentBankDetailsInitialValue } from "../mastersInitialValues";
import {axiosOther} from "../../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";

const ViewAgent = () => {
  const [bankData, setBankData] = useState(agentBankDetailsInitialValue);

  const handleBankDataChange = (e) => {
    const {name, value} = e.target;

    setBankData((prevData)=>({
      ...prevData, [name]:value
    }));
  };

  const submitBankData = async () =>{
    const {data} = await axiosOther.post("addupdatebankdetails", bankData);
    toast.success(data.Message);
  }

  console.log("bank-data", bankData);

  return (
    <Layout>
      <div className="container-fluid p-3 mb-4">
        <div className="card shadow-none border">
          <div
            className="card-header header-elements-inline bg-info-700 py-2"
            style={{ padding: "10px" }}
          >
            <div className="col-xl-10 d-flex align-items-center">
              <h5 className="card-title d-none d-sm-block">
                Company Information
              </h5>
            </div>
            <div className="col-xl-2 d-flex justify-content-end">
              <NavLink
                to="/master"
                className="gray-button"
                aria-expanded="false"
              >
                Back
              </NavLink>
              <Toaster/>
            </div>
          </div>

          <div className="card-body">
            <div className="row">
              {/* view details */}
              <div className="col-12">
                <div className="card overflow-x-auto agent-view-table">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Sales Person</th>
                        <th>Operation Person</th>
                        <th>Market Type</th>
                        <th>Competitor</th>
                        <th>Nationality</th>
                        <th>Preferred Language</th>
                        <th>Tour Type</th>
                        <th>Category</th>
                        <th>Created By</th>
                        <th>Modified By</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr>
                        <td>Dinesh Khari</td>
                        <td>Mohd Rizwan</td>
                        <td>USA</td>
                        <td>Glbal</td>
                        <td>Inian</td>
                        <td>Italian</td>
                        <td>Ashu,Family,Tuor</td>
                        <td>Medium</td>
                        <td>Sandy</td>
                        <td>Sandy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card overflow-x-auto agent-view-table">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Bussiness Type</th>
                        <th>Company Type</th>
                        <th>Company</th>
                        <th>Company Email</th>
                        <th>Company Phone</th>
                        <th>Website Url</th>
                        <th>Company Remark</th>
                        <th>Agent Info</th>
                        <th>ISO</th>
                        <th>Consortia</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr>
                        <td>Agent</td>
                        <td>Private Limited</td>
                        <td>Debox Global</td>
                        <td>global@gmail.com</td>
                        <td>7678688767</td>
                        <td>www.deboxglobal.com</td>
                        <td>Remark</td>
                        <td>Medium</td>
                        <td>Sandy</td>
                        <td>Sandy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* images */}
              <div className="col-6">
                <div className="card">
                  <div className="card-body d-flex gap-2 p-1 ">
                    <div className="card w-50 shadow-0 m-0">
                      <img
                        className="card-img-top image-style"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhSyjLncH7IPlycCz3yNRnK7dWZm38J7GHw&s"
                        alt="Card image cap"
                      />
                      <p className="card-text text-center">Company Logo</p>
                    </div>
                    <div className="card w-50 shadow-0 m-0">
                      <img
                        className="card-img-top image-style"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5du35a43HLmQE6GcdwWvdCHhRahjsTFJaqg&s"
                        alt="Card image cap"
                      />
                      <p className="card-text text-center">Agent Header</p>
                    </div>
                    <div className="card w-50 shadow-0 m-0">
                      <img
                        className="card-img-top image-style"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5du35a43HLmQE6GcdwWvdCHhRahjsTFJaqg&s"
                        alt="Card image cap"
                      />
                      <p className="card-text text-center">Agent Footer</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Office Address */}
              <div className="col-6 agent-view-table">
                <div className="d-flex gap-5">
                  <p className="fs-6 font-weight-bold">Office Address</p>
                  <p
                    data-toggle="modal"
                    data-target="#modal_form_vertical"
                    className="fs-6 font-weight-bold text-success cursor-pointer"
                  >
                    + Add Office
                  </p>
                  <div
                    className="modal fade"
                    id="modal_form_vertical"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header bg-info-700 py-2">
                          <h5 className="modal-title" id="exampleModalLabel">
                            ADD ADDRESS
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>

                        <form>
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-12">
                                <label htmlFor="officename" className="m-0">
                                  Office Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Office Name"
                                />
                              </div>
                              <div className="col-4 mt-3">
                                <label htmlFor="country" className="m-0">
                                  Country
                                </label>
                                <select className="form-control">
                                  <option value="">India</option>
                                  <option value="">Bangladesh</option>
                                </select>
                              </div>
                              <div className="col-4 mt-3">
                                <label htmlFor="state" className="m-0">
                                  State
                                </label>
                                <select className="form-control">
                                  <option value="">Delhi</option>
                                  <option value="">Dhanka</option>
                                </select>
                              </div>
                              <div className="col-4 mt-3">
                                <label htmlFor="city" className="m-0">
                                  City
                                </label>
                                <select className="form-control">
                                  <option value="">New Delhi</option>
                                </select>
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="address" className="m-0">
                                  Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Address"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="pincode" className="m-0">
                                  Pin Code
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="PIN CODE"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="gstn" className="m-0">
                                  GSTN
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="GSTN"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="pan" className="m-0">
                                  PAN
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="PAN"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="primaryaddress" className="m-0">
                                  Primary Address
                                </label>
                                <select className="form-control">
                                  <option value="">YES</option>
                                  <option value="">NO</option>
                                </select>
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="primaryaddress" className="m-0">
                                  Place of delivery for invoice
                                </label>
                                <select className="form-control">
                                  <option value="">Agent</option>
                                  <option value="">Agent By</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="modal-footer">
                            <button
                              type="button"
                              id="cancel"
                              className="default-button"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="submit" className="green-button">
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table table-bordered agent-view-table">
                  <thead>
                    <tr>
                      <th className="px-1">#</th>
                      <th className="py-1">Office Name</th>
                      <th className="py-1">Country</th>
                      <th className="py-1">Postal Zip</th>
                      <th className="py-1">GSTN</th>
                      <th className="py-1">Pan</th>
                      <th className="py-1">Address</th>
                      <th className="py-1">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="py-1">1</th>
                      <td className="py-1">Mark</td>
                      <td className="py-1">Otto</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Contact Person */}
              <div className="col-12 agent-view-table mt-4">
                <div className="d-flex gap-5">
                  <p className="fs-6 font-weight-bold">Contact Person</p>
                  <p
                    data-toggle="modal"
                    data-target="#addcontactperson"
                    className="fs-6 font-weight-bold text-success cursor-pointer"
                  >
                    + Add Contact Person
                  </p>
                  <div
                    className="modal fade"
                    id="addcontactperson"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header bg-info-700 py-2">
                          <h5 className="modal-title" id="exampleModalLabel">
                            ADD Contact Person
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>

                        <form>
                          <div className="modal-body">
                            <div className="row row-gap-2">
                              <div className="col-4">
                                <label htmlFor="officename" className="m-0">
                                  Office Name
                                </label>
                                <select className="form-control">
                                  <option value="">Select</option>
                                  <option value="">Main Office</option>
                                </select>
                              </div>
                              <div className="col-4">
                                <label htmlFor="metduring" className="m-0">
                                  Met During
                                </label>
                                <input
                                  type="text"
                                  placeholder="Met During"
                                  className="form-control"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="title" className="m-0">
                                  Title
                                </label>
                                <select className="form-control">
                                  <option value="None">None</option>
                                  <option value="Mr">Mr</option>
                                  <option value="Mrs">Mrs</option>
                                  <option value="Ms">Ms</option>
                                </select>
                              </div>
                              <div className="col-4">
                                <label htmlFor="firstname" className="m-0">
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  placeholder="First Name"
                                  name="FirstName"
                                  className="form-control"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="lastname" className="m-0">
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  placeholder="Last Name"
                                  name="LastName"
                                  className="form-control"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="divison" className="m-0">
                                  Divison
                                </label>
                                <select className="form-control">
                                  <option value="">Accounts</option>
                                  <option value="">Finance</option>
                                </select>
                              </div>
                              <div className="col-4">
                                <label htmlFor="designation" className="m-0">
                                  Designation
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Designation"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="newsletter" className="m-0">
                                  News Letter
                                </label>
                                <select className="form-control">
                                  <option value="">Yes</option>
                                  <option value="">No</option>
                                </select>
                              </div>
                              <div className="col-4">
                                <label htmlFor="countrycode" className="m-0">
                                  Country Code
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Designation"
                                  name="CountryCode"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="phone" className="m-0">
                                  Phone
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Phone"
                                  name="Phone"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="mobile" className="m-0">
                                  Mobile
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Mobile"
                                  name="Mobile"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="email" className="m-0">
                                  Email
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Email"
                                  name="Email"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="alternateemail" className="m-0">
                                  Alternate Email
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Alternate Email"
                                  name=" AlternateEmail"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="dob" className="m-0">
                                  DOB
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  name=" DOB"
                                />
                              </div>
                              <div className="col-4">
                                <label
                                  htmlFor="anniversarydate"
                                  className="m-0"
                                >
                                  Anniversary Date
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  name="AnniversarDate"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="skypeid" className="m-0">
                                  Skype Id
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Skype"
                                  name="Skype"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="skypeid" className="m-0">
                                  MSN ID
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="MSN"
                                  name="MSN"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="facebook" className="m-0">
                                  Facebook Profile
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Facebook Profile"
                                  name="Facebook"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="linkedin" className="m-0">
                                  LinkedIn Profile
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="LinkedIn Profile"
                                  name="Linkedin"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="twitter" className="m-0">
                                  Twitter Profile
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Twitter Profile"
                                  name="Twitter"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="instagram" className="m-0">
                                  Instagram Profile
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Instagram Profile"
                                  name="Instagram"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="status" className="m-0">
                                  Status
                                </label>
                                <select className="form-control">
                                  <option value="">Active</option>
                                  <option value="">InActive</option>
                                </select>
                              </div>
                              <div className="col-12">
                                <div className="row">
                                  <label htmlFor="" className="m-0">
                                    Business Card
                                  </label>
                                  <div className="col-4">
                                    <label className="m-0 font-size-10">
                                      Image 1
                                    </label>
                                    <label
                                      htmlFor="agentheader"
                                      className="form-input-1 border-0 p-0"
                                    >
                                      <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                                        <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                                        <p className="m-0 dark-primary-color">
                                          Upload Here..
                                        </p>
                                      </div>
                                    </label>
                                    <input
                                      type="file"
                                      name="AgentHeaderImageData"
                                      id="agentheader"
                                      className="form-input-1"
                                      value=""
                                      hidden
                                    ></input>
                                  </div>
                                  <div className="col-4">
                                    <label className="m-0 font-size-10">
                                      Image 2
                                    </label>
                                    <label
                                      htmlFor="agentheader"
                                      className="form-input-1 border-0 p-0"
                                    >
                                      <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                                        <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                                        <p className="m-0 dark-primary-color">
                                          Upload Here..
                                        </p>
                                      </div>
                                    </label>
                                    <input
                                      type="file"
                                      name="AgentHeaderImageData"
                                      id="agentheader"
                                      className="form-input-1"
                                      value=""
                                      hidden
                                    ></input>
                                  </div>
                                  <div className="col-4">
                                    <label className="m-0 font-size-10">
                                      Image 3
                                    </label>
                                    <label
                                      htmlFor="agentheader"
                                      className="form-input-1 border-0 p-0"
                                    >
                                      <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                                        <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                                        <p className="m-0 dark-primary-color">
                                          Upload Here..
                                        </p>
                                      </div>
                                    </label>
                                    <input
                                      type="file"
                                      name="AgentHeaderImageData"
                                      id="agentheader"
                                      className="form-input-1"
                                      value=""
                                      hidden
                                    ></input>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="modal-footer">
                            <button
                              type="button"
                              id="cancel"
                              className="default-button"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="submit" className="green-button">
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table table-bordered agent-view-table">
                  <thead className="thead-dark">
                    <tr>
                      <th className="px-1">#</th>
                      <th className="py-1">Office Name</th>
                      <th className="py-1">Country</th>
                      <th className="py-1">Postal Zip</th>
                      <th className="py-1">GSTN</th>
                      <th className="py-1">Pan</th>
                      <th className="py-1">Address</th>
                      <th className="py-1">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="py-1">1</th>
                      <td className="py-1">Mark</td>
                      <td className="py-1">Otto</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Company Documents */}
              <div className="col-12 agent-view-table mt-4">
                <div className="d-flex gap-5">
                  <p className="fs-6 font-weight-bold">Company Documents</p>
                  <p
                    data-toggle="modal"
                    data-target="#companydocuments"
                    className="fs-6 font-weight-bold text-success cursor-pointer"
                  >
                    + Add Documets
                  </p>
                  <div
                    className="modal fade"
                    id="companydocuments"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header bg-info-700 py-2">
                          <h5 className="modal-title" id="exampleModalLabel">
                            ADD DOCUMENTS
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>

                        <form>
                          <div className="modal-body">
                            <div className="row row-gap-2">
                              <div className="col-4">
                                <label htmlFor="documentname" className="m-0">
                                  Document Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Document Name"
                                  name="DocumentName"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="documentnumber" className="m-0">
                                  Document Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Document Number"
                                  name="DocumentNumber"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="issuedate" className="m-0">
                                  Issue Date
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  placeholder="Issue Date"
                                  name="IssueDate"
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="expirydate" className="m-0">
                                  Expiry Date
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  placeholder="Expiry Date"
                                  name="ExpiryDate"
                                />
                              </div>
                              <div className="col-8">
                                <label className="m-0 font-size-10">
                                  Document File
                                </label>
                                <label
                                  htmlFor="agentheader"
                                  className="form-input-1 border-0 p-0"
                                >
                                  <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                                    <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                                    <p className="m-0 dark-primary-color">
                                      Upload Here..
                                    </p>
                                  </div>
                                </label>
                                <input
                                  type="file"
                                  name="AgentHeaderImageData"
                                  id="agentheader"
                                  className="form-input-1"
                                  value=""
                                  hidden
                                ></input>
                              </div>
                              <div className="col-12">
                                <label htmlFor="remarks" className="m-0">
                                  Remarks
                                </label>
                                <textarea
                                  className="form-control"
                                  placeholder="Remarks"
                                  name="Remarks"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="modal-footer">
                            <button
                              type="button"
                              id="cancel"
                              className="default-button"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="submit" className="green-button">
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table table-bordered agent-view-table">
                  <thead className="thead-dark">
                    <tr>
                      <th className="px-1">#</th>
                      <th className="py-1">Office Name</th>
                      <th className="py-1">Country</th>
                      <th className="py-1">Postal Zip</th>
                      <th className="py-1">GSTN</th>
                      <th className="py-1">Pan</th>
                      <th className="py-1">Address</th>
                      <th className="py-1">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="py-1">1</th>
                      <td className="py-1">Mark</td>
                      <td className="py-1">Otto</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Bank Details */}
              <div className="col-12 agent-view-table mt-4">
                <div className="d-flex gap-5">
                  <p className="fs-6 font-weight-bold">Bank Details</p>
                  <p
                    data-toggle="modal"
                    data-target="#bankdetails"
                    className="fs-6 font-weight-bold text-success cursor-pointer"
                  >
                    + Add Bank Details
                  </p>
                  <div
                    className="modal fade"
                    id="bankdetails"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header bg-info-700 py-2">
                          <h5 className="modal-title" id="exampleModalLabel">
                            ADD BANK DETAILS
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>

                        {/* <form>
                        </form> */}
                          <div className="modal-body">
                            <div className="row row-gap-2">
                              <div className="col-4">
                                <label htmlFor="bankname" className="m-0">
                                  Bank Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Bank Name"
                                  name="BankName"
                                  value={bankData.BankName}
                                  onChange={handleBankDataChange}
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="phoneno" className="m-0">
                                  Phone No
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Phone No"
                                  name="PhoneNumber"
                                  value={bankData.PhoneNumber}
                                  onChange={handleBankDataChange}
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="branchname" className="m-0">
                                  Branch Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Branch Name"
                                  name="BankBranch"
                                  value={bankData.BankBranch}
                                  onChange={handleBankDataChange}
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="emailid" className="m-0">
                                  Email Id
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Email Id"
                                  name="EmailId"
                                  value={bankData.EmailId}
                                  onChange={handleBankDataChange}
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="benifeciaryn" className="m-0">
                                  Benifeciary N
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Benifeciary Name"
                                  name="BenificiryName"
                                  value={bankData.BenificiryName}
                                  onChange={handleBankDataChange}
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="swiftcode" className="m-0">
                                  Swift Code
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Swift Code"
                                  name="SwiftCode"
                                  value={bankData.SwiftCode}
                                  onChange={handleBankDataChange}
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="accountnumber" className="m-0">
                                  Account Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Account Number"
                                  name="AccountNumber"
                                  value={bankData.AccountNumber}
                                  onChange={handleBankDataChange}
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="documentnumber" className="m-0">
                                  Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Address"
                                  name="Address"
                                  value={bankData.Address}
                                  onChange={handleBankDataChange}
                                />
                              </div>
                              <div className="col-4">
                                <label htmlFor="ifsccode" className="m-0">
                                  IFSC Code
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="IFSC Code"
                                  name="IfscCode"
                                  value={bankData.IfscCode}
                                  onChange={handleBankDataChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              id="cancel"
                              className="default-button"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button className="green-button" onClick={submitBankData}>
                              Save
                            </button>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table table-bordered agent-view-table">
                  <thead className="thead-dark">
                    <tr>
                      <th className="px-1">#</th>
                      <th className="py-1">Office Name</th>
                      <th className="py-1">Country</th>
                      <th className="py-1">Postal Zip</th>
                      <th className="py-1">GSTN</th>
                      <th className="py-1">Pan</th>
                      <th className="py-1">Address</th>
                      <th className="py-1">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="py-1">1</th>
                      <td className="py-1">Mark</td>
                      <td className="py-1">Otto</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* cals */}
              <div className="col-12 agent-view-table mt-4">
                <div className="d-flex gap-5">
                  <p className="fs-6 font-weight-bold">Calls</p>
                  <p
                    data-toggle="modal"
                    data-target="#modal_form_vertical"
                    className="fs-6 font-weight-bold text-success cursor-pointer"
                  >
                    + Add Calls
                  </p>
                  <div
                    className="modal fade"
                    id="modal_form_vertical"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header bg-info-700 py-2">
                          <h5 className="modal-title" id="exampleModalLabel">
                            ADD ADDRESS
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>

                        <form>
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-12">
                                <label htmlFor="officename" className="m-0">
                                  Office Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Office Name"
                                />
                              </div>
                              <div className="col-4 mt-3">
                                <label htmlFor="country" className="m-0">
                                  Country
                                </label>
                                <select className="form-control">
                                  <option value="">India</option>
                                  <option value="">Bangladesh</option>
                                </select>
                              </div>
                              <div className="col-4 mt-3">
                                <label htmlFor="state" className="m-0">
                                  State
                                </label>
                                <select className="form-control">
                                  <option value="">Delhi</option>
                                  <option value="">Dhanka</option>
                                </select>
                              </div>
                              <div className="col-4 mt-3">
                                <label htmlFor="city" className="m-0">
                                  City
                                </label>
                                <select className="form-control">
                                  <option value="">New Delhi</option>
                                </select>
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="address" className="m-0">
                                  Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Address"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="pincode" className="m-0">
                                  Pin Code
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="PIN CODE"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="gstn" className="m-0">
                                  GSTN
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="GSTN"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="pan" className="m-0">
                                  PAN
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="PAN"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="primaryaddress" className="m-0">
                                  Primary Address
                                </label>
                                <select className="form-control">
                                  <option value="">YES</option>
                                  <option value="">NO</option>
                                </select>
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="primaryaddress" className="m-0">
                                  Place of delivery for invoice
                                </label>
                                <select className="form-control">
                                  <option value="">Agent</option>
                                  <option value="">Agent By</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="modal-footer">
                            <button
                              type="button"
                              id="cancel"
                              className="default-button"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="submit" className="green-button">
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table table-bordered agent-view-table">
                  <thead className="thead-dark">
                    <tr>
                      <th className="px-1">#</th>
                      <th className="py-1">Office Name</th>
                      <th className="py-1">Country</th>
                      <th className="py-1">Postal Zip</th>
                      <th className="py-1">GSTN</th>
                      <th className="py-1">Pan</th>
                      <th className="py-1">Address</th>
                      <th className="py-1">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="py-1">1</th>
                      <td className="py-1">Mark</td>
                      <td className="py-1">Otto</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Meetings */}
              <div className="col-12 agent-view-table mt-4">
                <div className="d-flex gap-5">
                  <p className="fs-6 font-weight-bold">Meetings</p>
                  <p
                    data-toggle="modal"
                    data-target="#modal_form_vertical"
                    className="fs-6 font-weight-bold text-success cursor-pointer"
                  >
                    + Add Meetings
                  </p>
                  <div
                    className="modal fade"
                    id="modal_form_vertical"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header bg-info-700 py-2">
                          <h5 className="modal-title" id="exampleModalLabel">
                            ADD ADDRESS
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>

                        <form>
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-12">
                                <label htmlFor="officename" className="m-0">
                                  Office Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Office Name"
                                />
                              </div>
                              <div className="col-4 mt-3">
                                <label htmlFor="country" className="m-0">
                                  Country
                                </label>
                                <select className="form-control">
                                  <option value="">India</option>
                                  <option value="">Bangladesh</option>
                                </select>
                              </div>
                              <div className="col-4 mt-3">
                                <label htmlFor="state" className="m-0">
                                  State
                                </label>
                                <select className="form-control">
                                  <option value="">Delhi</option>
                                  <option value="">Dhanka</option>
                                </select>
                              </div>
                              <div className="col-4 mt-3">
                                <label htmlFor="city" className="m-0">
                                  City
                                </label>
                                <select className="form-control">
                                  <option value="">New Delhi</option>
                                </select>
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="address" className="m-0">
                                  Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Address"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="pincode" className="m-0">
                                  Pin Code
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="PIN CODE"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="gstn" className="m-0">
                                  GSTN
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="GSTN"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="pan" className="m-0">
                                  PAN
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="PAN"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="primaryaddress" className="m-0">
                                  Primary Address
                                </label>
                                <select className="form-control">
                                  <option value="">YES</option>
                                  <option value="">NO</option>
                                </select>
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="primaryaddress" className="m-0">
                                  Place of delivery for invoice
                                </label>
                                <select className="form-control">
                                  <option value="">Agent</option>
                                  <option value="">Agent By</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="modal-footer">
                            <button
                              type="button"
                              id="cancel"
                              className="default-button"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="submit" className="green-button">
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table table-bordered agent-view-table">
                  <thead className="thead-dark">
                    <tr>
                      <th className="px-1">#</th>
                      <th className="py-1">Office Name</th>
                      <th className="py-1">Country</th>
                      <th className="py-1">Postal Zip</th>
                      <th className="py-1">GSTN</th>
                      <th className="py-1">Pan</th>
                      <th className="py-1">Address</th>
                      <th className="py-1">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="py-1">1</th>
                      <td className="py-1">Mark</td>
                      <td className="py-1">Otto</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Tasks */}
              <div className="col-12 agent-view-table mt-4">
                <div className="d-flex gap-5">
                  <p className="fs-6 font-weight-bold">Task</p>
                  <p
                    data-toggle="modal"
                    data-target="#modal_form_vertical"
                    className="fs-6 font-weight-bold text-success cursor-pointer"
                  >
                    + Add Task
                  </p>
                  <div
                    className="modal fade"
                    id="modal_form_vertical"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header bg-info-700 py-2">
                          <h5 className="modal-title" id="exampleModalLabel">
                            ADD ADDRESS
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>

                        <form>
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-12">
                                <label htmlFor="officename" className="m-0">
                                  Office Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Office Name"
                                />
                              </div>
                              <div className="col-4 mt-3">
                                <label htmlFor="country" className="m-0">
                                  Country
                                </label>
                                <select className="form-control">
                                  <option value="">India</option>
                                  <option value="">Bangladesh</option>
                                </select>
                              </div>
                              <div className="col-4 mt-3">
                                <label htmlFor="state" className="m-0">
                                  State
                                </label>
                                <select className="form-control">
                                  <option value="">Delhi</option>
                                  <option value="">Dhanka</option>
                                </select>
                              </div>
                              <div className="col-4 mt-3">
                                <label htmlFor="city" className="m-0">
                                  City
                                </label>
                                <select className="form-control">
                                  <option value="">New Delhi</option>
                                </select>
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="address" className="m-0">
                                  Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Address"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="pincode" className="m-0">
                                  Pin Code
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="PIN CODE"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="gstn" className="m-0">
                                  GSTN
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="GSTN"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="pan" className="m-0">
                                  PAN
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="PAN"
                                />
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="primaryaddress" className="m-0">
                                  Primary Address
                                </label>
                                <select className="form-control">
                                  <option value="">YES</option>
                                  <option value="">NO</option>
                                </select>
                              </div>
                              <div className="col-6 mt-3">
                                <label htmlFor="primaryaddress" className="m-0">
                                  Place of delivery for invoice
                                </label>
                                <select className="form-control">
                                  <option value="">Agent</option>
                                  <option value="">Agent By</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="modal-footer">
                            <button
                              type="button"
                              id="cancel"
                              className="default-button"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="submit" className="green-button">
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table table-bordered agent-view-table">
                  <thead className="thead-dark">
                    <tr>
                      <th className="px-1">#</th>
                      <th className="py-1">Office Name</th>
                      <th className="py-1">Country</th>
                      <th className="py-1">Postal Zip</th>
                      <th className="py-1">GSTN</th>
                      <th className="py-1">Pan</th>
                      <th className="py-1">Address</th>
                      <th className="py-1">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="py-1">1</th>
                      <td className="py-1">Mark</td>
                      <td className="py-1">Otto</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                      <td className="py-1">@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewAgent;
