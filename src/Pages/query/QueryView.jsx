import React from "react";
import Layout from "../../Component/Layout/Layout";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import CustomizedSteppers from "./CustomizedSteppers";
import Stepper from "./Stepper";

const QueryView = () => {
  const { pathname } = useLocation();
  const cardBody = {
    MsFlex: "1 1 auto",
    flex: "1 1 auto",
    padding: "0.8rem 1rem",
  };

  const linecss = {
    background: "#f1f2f2",
    boxShadow: "2px 3px 2px #cccccc",
    padding: "10px",
    margin: "7px 2px 7px 0px",
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
                    src="\public\global_assets\images\qoutation\Bell.png"
                    alt="remainder"
                    style={{ height: "30px", width: "30px" }}
                  />
                </div>
                <div className="ml-3">
                  <img
                    src="\public\global_assets\images\qoutation\remainder.png"
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
            <ul className="nav nav-pills-toolbar d-flex align-items-center justify-content-between border py-1">
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="/querylist/queryview/"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === "/querylist/queryview/"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Query
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="quotation"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === "/querylist/queryview/quotation"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Quotation
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="costsheet"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === "/querylist/queryview/costsheet"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Cost Sheet
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="proposal"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === "/querylist/queryview/proposal"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Proposal
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="clientcomm"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === "/querylist/queryview/clientcomm"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Client Communication
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="suppliercomm"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === "/querylist/queryview/suppliercomm"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Supplier Communication
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="payments"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === "/querylist/queryview/payments"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  <i className="fa-solid fa-puzzle-piece"></i>
                  Payments
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="vouchers"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === "/querylist/queryview/vouchers"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Vouchers
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="invoices"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === "/querylist/queryview/invoices"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Invoices
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
