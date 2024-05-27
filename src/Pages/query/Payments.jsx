import React from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";

const Payments = () => {

  const {pathname} = useLocation();
  

  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row border-top">
          <div className="col-12 p-0">
            <h3 className="m-0 mb-1 px-2 font-weight-bold">Payment Request</h3>

            <ul className="nav nav-pills-toolbar d-flex gap-5 border-bottom py-1">
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="/querylist/queryview/payments/"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === "/querylist/queryview/payments/"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Supplier Payment Request
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="agentpayments"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === "/querylist/queryview/payments/agentpayments"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Agent Payment Request
                </NavLink>
              </li>
              <li className="nav-item view-nav-item rounded-pill">
                <NavLink
                  to="expenseentry"
                  className={`nav-link fs-6 rounded-pill height-30 d-flex align-items-center ${
                    pathname === "/querylist/queryview/payments/expenseentry"
                      ? "Active"
                      : "text-primary"
                  }`}
                >
                  Expense Entry
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

export default Payments;
