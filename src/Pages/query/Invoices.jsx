import React from "react";
import TaxInvoice from "./TaxInvoice";
import PerformanceInvoice from "./PerformanceInoive";

const Invoices = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 mt-2">
          <ul class="nav nav-tabs custom-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link custom-tab-link active"
                id="manual-invoice-tab"
                data-bs-toggle="tab"
                data-bs-target="#manual-invoice"
                type="button"
                role="tab"
                aria-controls="manual-invoice"
                aria-selected="true"
              >
                Manual Invoice
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link custom-tab-link"
                id="item-wise-invoice-tab"
                data-bs-toggle="tab"
                data-bs-target="#item-wise-invoice"
                type="button"
                role="tab"
                aria-controls="item-wise-invoice"
                aria-selected="true"
              >
                Item Wise Invoice
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="manual-invoice"
              role="tabpanel"
              aria-labelledby="manual-invoice-tab"
            >
              <TaxInvoice/>
            </div>
            <div
              class="tab-pane fade show"
              id="item-wise-invoice"
              role="tabpanel"
              aria-labelledby="item-wise-invoice-tab"
            >
              <PerformanceInvoice/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoices;
