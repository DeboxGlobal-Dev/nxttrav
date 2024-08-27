import React from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import SupplierPayment from "./SupplierPayment";
import AgentPayment from "./AgentPayment";
import ExpenseEntry from "./ExpenseEntery";

const Payments = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <ul class="nav nav-tabs custom-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link custom-tab-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#supplier"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Supplier Payment Request
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link custom-tab-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#agent"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Agent Payment Request
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link custom-tab-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#expense"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Expense Entry
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="supplier"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <SupplierPayment/>
            </div>
            <div
              class="tab-pane fade"
              id="agent"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <AgentPayment/>
            </div>
            <div
              class="tab-pane fade"
              id="expense"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <ExpenseEntry/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
