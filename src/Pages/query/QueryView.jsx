import React from "react";
import Layout from "../../Component/Layout/Layout";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import CustomizedSteppers from "./CustomizedSteppers";
import Stepper from "./Stepper";

const QueryView = () => {
  const quotationBasePath = "/querylist/queryview/quotation" ;
  const { pathname } = useLocation();
  const cardBody = {
    MsFlex: "1 1 auto",
    flex: "1 1 auto",
    padding: "0.8rem 1rem"
  };

  const linecss = {
    background: "#f1f2f2",
    boxShadow: "2px 3px 2px #cccccc",
    padding: "10px",
    margin: "7px 2px 7px 0px"
  };

  return (
    <Layout>
      <div className="container-fluid mt-3 mb-5">
        <div className="row">
          <div className="col-xl-12 px-4">
            <div
              className="card-body d-sm-flex align-items-sm-center justify-content-sm-between flex-sm-wrap"
              style={linecss}
            >
              <div className="d-flex align-items-center mb-3 mb-sm-0">
                <div className="ml-3">
                  <span>Query#: DB123/00788</span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3 mb-sm-0">
                <div className="ml-3">
                  <span>TourId: 02-11-2023/AD& R20240589</span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3 mb-sm-0">
                <div className="ml-3">
                  <span>Subject: 02-11-2023 DeBox Global Pvt. Ltd.</span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3 mb-sm-0">
                <div className="ml-3">
                  <span>Date: Jun 4, 4:00 am</span>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3 mb-sm-0">
                <div className="ml-3">
                  <img
                    src="\global_assets\images\qoutation\Bell.png"
                    alt="remainder"
                    style={{ height: "30px", width: "30px" }}
                  />
                </div>
                <div className="ml-3">
                  <img
                    src="\global_assets\images\qoutation\remainder.png"
                    alt="remainder"
                    style={{ height: "30px", width: "80px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex m-0">
              <Stepper />
          </div>
          <div className="col-xl-12 px-4 mt-2" style={{ padding: 0 }}>
            <ul className="nav nav-pills-toolbar d-flex align-items-center justify-content-between p-1 radius-10">
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="/querylist/queryview/"
                  className={`font-size-14 rounded-pill d-flex align-items-center font-weight-500 ${
                    pathname === "/querylist/queryview/"
                      ? "Active text-light"
                      : "text-dark"
                  }`}
                >
                  Query
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="quotation"
                  className={`font-size-14 rounded-pill d-flex align-items-center font-weight-500 ${
                    pathname === `${quotationBasePath}` 
                    || pathname === `${quotationBasePath}/` 
                    || pathname ===`${quotationBasePath}/policies`
                    || pathname ===`${quotationBasePath}/commission`
                    || pathname ===`${quotationBasePath}/summary`
                      ? "Active"
                      : "text-dark"
                  }`}
                >
                  Quotation
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="costsheet"
                  className={`font-size-14 rounded-pill d-flex align-items-center font-weight-500 ${
                    pathname === "/querylist/queryview/costsheet"
                      ? "Active"
                      : "text-dark"
                  }`}
                >
                  Cost Sheet
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="proposal"
                  className={`font-size-14 rounded-pill d-flex align-items-center font-weight-500 ${
                    pathname === "/querylist/queryview/proposal"
                      ? "Active"
                      : "text-dark"
                  }`}
                >
                  Proposal
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="clientcomm"
                  className={`font-size-14 rounded-pill d-flex align-items-center font-weight-500 ${
                    pathname === "/querylist/queryview/clientcomm"
                      ? "Active"
                      : "text-dark"
                  }`}
                >
                  Client Communication
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="suppliercomm"
                  className={`font-size-14 rounded-pill d-flex align-items-center font-weight-500 ${
                    pathname === "/querylist/queryview/suppliercomm"
                      ? "Active"
                      : "text-dark"
                  }`}
                >
                  Supplier Communication
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="payments"
                  className={`font-size-14 rounded-pill d-flex align-items-center font-weight-500 ${
                    pathname === "/querylist/queryview/payments"
                      ? "Active"
                      : "text-dark"
                  }`}
                >
                  Payments
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="vouchers"
                  className={`font-size-14 rounded-pill d-flex align-items-center font-weight-500 ${
                    pathname === "/querylist/queryview/vouchers"
                      ? "Active"
                      : "text-dark"
                  }`}
                >
                  Vouchers
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="invoices"
                  className={`font-size-14 rounded-pill d-flex align-items-center font-weight-500 ${
                    pathname === "/querylist/queryview/invoices"
                      ? "Active"
                      : "text-dark"
                  }`}
                >
                  Invoices
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="tourextension"
                  className={`nav-link font-size-14 rounded-pill d-flex align-items-center font-weight-500 ${
                    pathname === "/querylist/queryview/tourextension"
                      ? "Active"
                      : "text-dark"
                  }`}
                >
                  Tour Extension
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="assignuser"
                  className={`nav-link font-size-14 rounded-pill d-flex align-items-center font-weight-500 ${
                    pathname === "/querylist/queryview/assignuser"
                      ? "Active"
                      : "text-dark"
                  }`}
                >
                  Assign User
                </NavLink>
              </li>
            </ul>
            <div className="card shadow-none mt-1">
              <div className="card-body" style={{ padding: "1px" }}>
                <div className="tab-content">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QueryView;
