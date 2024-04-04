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
    margin: "7px 2px 7px 0px"
  }

  return (
    <Layout>
      <div className="container-fluid mt-3 mb-5">
        <div className="row">
          <div>
            <CustomizedSteppers step={2} />
          </div>

          <div className="col-xl-12 px-4">
          <div className="card-body d-sm-flex align-items-sm-center justify-content-sm-between flex-sm-wrap" style={linecss}>
            <div className="d-flex align-items-center mb-3 mb-sm-0">
              <div className="ml-3">
                {/* <span className="badge badge-mark border-success mr-1"></span>  */}
                <span className="text-muted">Query#: DB123/00788</span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3 mb-sm-0">
              <div className="ml-3">
                <span className="text-muted">Subject: 02-11-2023 DeBox Global Pvt. Ltd.</span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3 mb-sm-0">
              <div className="ml-3">
                <span className="text-muted">
                  Status{" "}
                  <span className="badge bg-warning-400 ml-auto">Pending</span>
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

          <div className="col-xl-12 px-4" style={{ padding: 0 }}>
            <div className="card shadow-none border">
              <div className="card-body" style={{ padding: "1px" }}>
                <ul className="nav nav-pills-toolbar border-bottom nav-justified p-1">
                  <li className="nav-item rounded-pill">
                    <NavLink
                      to="/querylist/queryview/"
                      className={`nav-link fs-6 py-1 rounded-pill ${
                        pathname === "/querylist/queryview/"
                          ? "Active"
                          : "text-dark"
                      }`}
                    >
                      Query
                    </NavLink>
                  </li>
                  <li className="nav-item rounded-pill">
                    <NavLink
                      to="querydetails"
                      className={`nav-link fs-6 py-1 rounded-pill ${
                        pathname === "/querylist/queryview/querydetails"
                          ? "Active"
                          : "text-dark"
                      }`}
                    >
                      Query Details
                    </NavLink>
                  </li>
                  <li className="nav-item rounded-pill">
                    <NavLink
                      to="quotation"
                      className={`nav-link fs-6 py-1 rounded-pill ${
                        pathname === "/querylist/queryview/quotation"
                          ? "Active"
                          : "text-dark"
                      }`}
                    >
                      Quotation
                    </NavLink>
                  </li>
                  <li className="nav-item rounded-pill">
                    <NavLink
                      to="tourextension"
                      className={`nav-link fs-6 py-1 rounded-pill ${
                        pathname === "/querylist/queryview/tourextension"
                          ? "Active"
                          : "text-dark"
                      }`}
                    >
                      Tour Extension
                    </NavLink>
                  </li>
                  <li className="nav-item rounded-pill">
                    <NavLink
                      to="clientcomm"
                      className={`nav-link fs-6 py-1 rounded-pill ${
                        pathname === "/querylist/queryview/clientcomm"
                          ? "Active"
                          : "text-dark"
                      }`}
                    >
                      Client Communi...
                    </NavLink>
                  </li>
                  <li className="nav-item rounded-pill">
                    <NavLink
                      to="suppliercomm"
                      className={`nav-link fs-6 py-1 rounded-pill  ${
                        pathname === "/querylist/queryview/suppliercomm"
                          ? "Active"
                          : "text-dark"
                      }`}
                    >
                      Supplier Communi...
                    </NavLink>
                  </li>
                </ul>
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
