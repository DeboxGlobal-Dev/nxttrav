import React from "react";
import SupplierSelection from "./SupplierSelection";
import ReservationRequest from "./ReservationRequest";
import FinalPrice from "./FinalPrice";

const SupplierConfirmation = () => {
  return (
    <div>
      <ul className="nav nav-tabs sup-com-custom-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link sup-com-custom-tab-link active"
            id="supplier-selection"
            data-bs-toggle="tab"
            data-bs-target="#supplier-selection-control"
            type="button"
            role="tab"
            aria-controls="supplier-selection-control"
            aria-selected="false"
          >
            Supplier Selection
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link sup-com-custom-tab-link"
            id="reservation-request"
            data-bs-toggle="tab"
            data-bs-target="#reservation-request-control"
            type="button"
            role="tab"
            aria-controls="reservation-request-control"
            aria-selected="false"
          >
            Reservation Request
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link sup-com-custom-tab-link"
            id="final-price"
            data-bs-toggle="tab"
            data-bs-target="#final-price-control"
            type="button"
            role="tab"
            aria-controls="final-price-control"
            aria-selected="false"
          >
            Final Price
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="supplier-selection-control"
          role="tabpanel"
          aria-labelledby="supplier-selection"
        >
          <SupplierSelection />
        </div>
        <div
          className="tab-pane fade show"
          id="reservation-request-control"
          role="tabpanel"
          aria-labelledby="reservation-request"
        >
          <ReservationRequest />
        </div>
        <div
          className="tab-pane fade show"
          id="final-price-control"
          role="tabpanel"
          aria-labelledby="final-price"
        >
          <FinalPrice />
        </div>
      </div>
    </div>
  );
};

export default SupplierConfirmation;
