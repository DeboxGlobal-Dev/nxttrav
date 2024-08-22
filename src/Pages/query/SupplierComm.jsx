import React from "react";
import { NavLink } from "react-router-dom";
import HotelAvailability from "./supplierCommunication/HotelAvailability";
import SupplierConfirmation from "./supplierCommunication/SupplierConfirmation";

const SupplierComm = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0 mt-3">
          <ul class="nav nav-tabs custom-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link custom-tab-link active"
                id="supp-comm-tab"
                data-bs-toggle="tab"
                data-bs-target="#supp-comm"
                type="button"
                role="tab"
                aria-controls="supp-comm"
                aria-selected="true"
              >
                Supplier Communication
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link custom-tab-link"
                id="supp-conf-tab"
                data-bs-toggle="tab"
                data-bs-target="#supp-conf"
                type="button"
                role="tab"
                aria-controls="supp-conf"
                aria-selected="false"
              >
                Supplier Confirmation
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link custom-tab-link" 
                id="supp-vouch-tab"
                data-bs-toggle="tab"
                data-bs-target="#supp-vouch"
                type="button"
                role="tab"
                aria-controls="supp-vouch"
                aria-selected="false"
              >
                Supplier Voucher
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link custom-tab-link"
                id="hotel-ava-tab"
                data-bs-toggle="tab"
                data-bs-target="#hotel-ava"
                type="button"
                role="tab"
                aria-controls="hotel-ava"
                aria-selected="false"
              >
                Hotel Availability
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link custom-tab-link"
                id="hotel-room-tab"
                data-bs-toggle="tab"
                data-bs-target="#hotel-room"
                type="button"
                role="tab"
                aria-controls="hotel-room"
                aria-selected="false"
              >
                Hotel Rooming List
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="supp-comm"
              role="tabpanel"
              aria-labelledby="supp-comm-tab"
            >
              <h1>Supplier Communication</h1>
            </div>
            <div
              class="tab-pane fade"
              id="supp-conf"
              role="tabpanel"
              aria-labelledby="supp-conf-tab"
            >
              <SupplierConfirmation />
            </div>
            <div
              class="tab-pane fade"
              id="supp-vouch"
              role="tabpanel"
              aria-labelledby="supp-vouch-tab"
            >
              <h1>Supplier Voucher</h1>
            </div>
            <div
              class="tab-pane fade"
              id="hotel-ava"
              role="tabpanel"
              aria-labelledby="hotel-ava-tab"
            >
              {/* Hotel Availability */}
              <HotelAvailability />
            </div>
            <div
              class="tab-pane fade"
              id="hotel-room"
              role="tabpanel"
              aria-labelledby="hotel-room-tab"
            >
              <h1>Hotel Rooming List</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierComm;
