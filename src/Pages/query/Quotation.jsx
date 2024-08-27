import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import Popup from "./qoutation/Popup";

const Quotation = () => {
  const quotationBasePath = "/querylist/queryview/quotation";
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <div className="container-fluid mt-3 mb-5">
        <div className="row">
          <div className="col-12 p-0">
            <div className="row ">
              <div className="col-12 col-md-3">
                <p>
                  Lead Pax Name :
                  <span className="pl-2 text-success">
                    <i className="fa-solid fa-pen-to-square"></i> Rahul Kumar
                  </span>
                </p>
              </div>
              <div className="col-12 col-md-7 d-flex gap-2 flex-column flex-md-row">
                <p>
                  <span className="font-weight-bold">
                    Define Pax Slab (Min Pax: 10 | Max PAX: 10)
                  </span>
                  | Single Hotel Categoy
                </p>
                <div className="width-120 height-20 bg-primary d-flex justify-content-center align-items-center gap-2 p-1">
                  <i className="fa-solid fa-square-plus"></i> Tour Log
                </div>
                <div className="width-120 height-20 bg-primary d-flex justify-content-center align-items-center gap-2 p-1">
                  <i className="fa-solid fa-square-plus"></i> Tour Change
                </div>
              </div>
              <div className="col-12 col-md-2 d-flex justify-content-end">
                <button className="height-20 btn border rounded-pill d-flex justify-content-center align-items-center">
                  Back
                </button>
              </div>
            </div>
          </div>
          {/* all popups */}
          <Popup />
          {/* all popups */}
          <div className="col-12 mt-3">
            <ul className="nav nav-pills-toolbar d-flex justify-content-between align-items-center border top-border-radius px-100 py-1">
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="/querylist/queryview/quotation/"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === `${quotationBasePath}` ||
                    pathname === `${quotationBasePath}/`
                      ? "q-active"
                      : "text-primary"
                  }`}
                >
                  Itineraries
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="policies"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === `${quotationBasePath}/policies`
                      ? "q-active"
                      : "text-primary"
                  }`}
                >
                  Policies
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="commission"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === `${quotationBasePath}/commission`
                      ? "q-active"
                      : "text-primary"
                  }`}
                >
                  Commission & Mark up
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="summary"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === `${quotationBasePath}/summary`
                      ? "q-active"
                      : "text-primary"
                  }`}
                >
                  Summary
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotation;
