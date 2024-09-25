import React, { createContext, useState } from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import Popup from "./Popup";
import QoutationList from "./QoutationList";
const quotationContext = createContext();

const Quotation = () => {
  const [quotationGlobalData, setQuotationGlobalData] = useState("");
  const quotationBasePath = "/querylist/queryview/quotation";
  const { pathname } = useLocation();

  return (
    <>
      <quotationContext.Provider
        value={{
          quotationGlobalData,
          setQuotationGlobalData,
        }}
      >
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
              <ul className="nav nav-pills-toolbar d-flex justify-content-between align-items-center border top-border-radius px-100">
                <li className="pt-2">
                  <NavLink
                    to="/querylist/queryview/quotation/"
                    className={`${
                      pathname === `${quotationBasePath}` ||
                      pathname === `${quotationBasePath}/`
                        ? "active-bottom-border"
                        : "font-weight-bold"
                    }`}
                  >
                    Itineraries
                  </NavLink>
                </li>
                <li className="pt-2">
                  <NavLink
                    to="policies"
                    className={`${
                      pathname === `${quotationBasePath}/policies`
                        ? "active-bottom-border"
                        : "font-weight-bold"
                    }`}
                  >
                    Policies
                  </NavLink>
                </li>
                <li className="pt-2">
                  <NavLink
                    to="commission"
                    className={`${
                      pathname === `${quotationBasePath}/commission`
                        ? "active-bottom-border"
                        : "font-weight-bold"
                    }`}
                  >
                    Commission & Mark up
                  </NavLink>
                </li>
                <li className="pt-2">
                  <NavLink
                    to="summary"
                    className={`${
                      pathname === `${quotationBasePath}/summary`
                        ? "active-bottom-border"
                        : "font-weight-bold"
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
      </quotationContext.Provider>
      {/* <QoutationList /> */}
    </>
  );
};

export default Quotation;
export { quotationContext };
