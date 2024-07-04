import React from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";

const TourExtension = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0 mt-3">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Guest List
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Contact List
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row border-bottom mx-0 pb-2">
                  <div className="col-2 d-flex justify-content-between align-items-center">
                    <NavLink to="" className="btn border p-0 px-3 rounded-pill">
                      Back
                    </NavLink>
                    <h6 className="m-0 font-weight-500">Guest List</h6>
                  </div>
                  <div className="col-5">
                    <div className="row">
                      <div className="col-5">
                        <input
                          type="text"
                          placeholder="Enter Name, Contact, Email"
                          className="w-100 rounded-pill border pl-2 font-size-12 outline-0"
                        />
                      </div>
                      <div className="col-4">
                        <select
                          name=""
                          id=""
                          className="w-100 rounded-pill text-secondary pl-1"
                        >
                          <option value="">All Asign User</option>
                        </select>
                      </div>
                      <div className="col-3">
                        <input
                          type="text"
                          placeholder="Search"
                          className="w-100 rounded-pill border pl-2 bg-primary outline-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-5 d-flex justify-content-between">
                    <button className="btn py-0 border rounded-pill bg-success font-size-10 ">
                      <i className="fa-solid fa-download pr-1"></i>
                      Download Format
                    </button>
                    <button className="btn py-0 border rounded-pill bg-info font-size-10">
                      <i className="fa-solid fa-file-import pr-1"></i>
                      Import Excel
                    </button>
                    <button className="btn py-0 border rounded-pill bg-warning font-size-10">
                      <i className="fa-regular fa-eye pr-1"></i>
                      View Logs
                    </button>
                    <button className="btn py-0 border rounded-pill bg-primary font-size-10">
                      <i className="fa-solid fa-plus pr-1"></i>
                      Add Guest
                    </button>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-2">
                    <label htmlFor="contactType" className="m-0">
                      Contact Type
                    </label>
                    <select
                      name=""
                      id="contactType"
                      className="w-75 py-1 font-size-12 text-secondary outline-0"
                    >
                      <option value="">Guest List</option>
                      <option value="">Employe</option>
                      <option value="">B2C</option>
                    </select>
                  </div>
                  <div className="col-2 d-flex flex-column">
                    <label htmlFor="tourId" className="m-0">
                      Tour Id
                    </label>
                    <input
                      type="text"
                      placeholder="8768686"
                      className="w-75 outline-0"
                      id="tourId"
                    />
                  </div>
                  <div className="col-2 d-flex flex-column">
                    <label htmlFor="agentName" className="m-0">
                      Agent Name
                    </label>
                    <input
                      type="text"
                      placeholder="Shubham Travel"
                      className="w-75 outline-0"
                      id="agentName"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th className="py-1 px-0 text-center">Type</th>
                          <th className="py-1 px-0 text-center">Name</th>
                          <th className="py-1 px-0 text-center">Address</th>
                          <th className="py-1 px-0 text-center">Contact Information</th>
                          <th className="py-1 px-0 text-center">Address Proof</th>
                          <th className="py-1 px-0 text-center">Passport</th>
                          <th className="py-1 px-0 text-center">Visa</th>
                          <th className="py-1 px-0 text-center">Drveing License</th>
                          <th className="py-1 px-0 text-center">Covid Certificate</th>
                          <th className="py-1 px-0 text-center">Other</th>
                          <th className="py-1 px-0 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <h1>Contact List</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TourExtension;
