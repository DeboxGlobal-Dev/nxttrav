import React from "react";
import Layout from "../../Component/Layout/Layout";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import CustomizedSteppers from "./CustomizedSteppers";

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
                  {/* <span className="badge badge-mark border-success mr-1"></span>  */}
                  <span className="text-muted">Query#: DB123/00788</span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3 mb-sm-0">
                <div className="ml-3">
                  <span className="text-muted">
                    Subject: 02-11-2023 DeBox Global Pvt. Ltd.
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3 mb-sm-0">
                <div className="ml-3">
                  <span className="text-muted">
                    Status{" "}
                    <span className="badge bg-warning-400 ml-auto">
                      Pending
                    </span>
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3 mb-sm-0">
                <div className="ml-3">
                  <span className="text-muted">Date: Jun 4, 4:00 am</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <CustomizedSteppers step={2} />
          </div> */}
          <div className="col-xl-12 px-4" style={{ padding: 0 }}>
            <ul className="nav nav-pills-toolbar d-flex justify-content-between">
              <li className="nav-item view-nav-item"> 
                <NavLink
                  to="/querylist/queryview/"
                  className={`nav-link fs-6 rounded-0 ${
                    pathname === "/querylist/queryview/"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Query
                </NavLink>
              </li>
              <li className="nav-item view-nav-item">
                <NavLink
                  to="querydetails"
                  className={`nav-link fs-6 ${
                    pathname === "/querylist/queryview/querydetails"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Quotation
                </NavLink>
              </li>
              <li className="nav-item view-nav-item">
                <NavLink
                  to="quotation"
                  className={`nav-link fs-6 ${
                    pathname === "/querylist/queryview/quotation"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Cost Sheet
                </NavLink>
              </li>
              <li className="nav-item view-nav-item">
                <NavLink
                  to="proposal"
                  className={`nav-link fs-6 ${
                    pathname === "/querylist/queryview/proposal"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  
                  Proposal
                </NavLink>
              </li>
              <li className="nav-item view-nav-item">
                <NavLink
                  to="clientcomm"
                  className={`nav-link fs-6 ${
                    pathname === "/querylist/queryview/clientcomm"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Client Communication
                </NavLink>
              </li>
              <li className="nav-item view-nav-item">
                <NavLink
                  to="suppliercomm"
                  className={`nav-link fs-6 ${
                    pathname === "/querylist/queryview/suppliercomm"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Supplier Communication
                </NavLink>
              </li>
              <li className="nav-item view-nav-item">
                <NavLink
                  to="tourextension"
                  className={`nav-link fs-6 ${
                    pathname === "/querylist/queryview/tourextension"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  <i className="fa-solid fa-puzzle-piece"></i>
                  Tour Extension
                </NavLink>
              </li>
              <li className="nav-item view-nav-item">
                <NavLink
                  to="vouchers"
                  className={`nav-link fs-6 ${
                    pathname === "/querylist/queryview/vouchers"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Vouchers
                </NavLink>
              </li>
              <li className="nav-item view-nav-item">
                <NavLink
                  to="invoices"
                  className={`nav-link fs-6 rounded-0 ${
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
