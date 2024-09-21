import React from "react";

const ReservationRequest = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col d-flex flex-column">
                <label htmlFor="" className="m-0">
                  Suppliers
                </label>
                <select className="w-100 bg-white px-2 text-secondary secondary-border rounded top-bottom-padding-3">
                  <option value="">All Supplier</option>
                </select>
              </div>
              <div className="col d-flex flex-column">
                <label htmlFor="" className="m-0">
                  Service Type
                </label>
                <select className="w-100 bg-white px-2 text-secondary secondary-border rounded top-bottom-padding-3">
                  <option value="">Service Type</option>
                </select>
              </div>
              <div className="col d-flex flex-column">
                <label htmlFor="" className="m-0">
                  Status
                </label>
                <select className="w-100 bg-white px-2 text-secondary secondary-border rounded top-bottom-padding-3">
                  <option value="">Active</option>
                </select>
              </div>
              <div className="col d-flex flex-column">
                <label htmlFor="" className="m-0">
                  Quotation
                </label>
                <select className="w-100 bg-white px-2 text-secondary secondary-border rounded top-bottom-padding-3">
                  <option value="">Quotations</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex align-items-end">
            <div className="row w-100">
              <div className="col-6">
                <button className="px-3 gray-background secondary-border rounded-pill text-secondary">
                  Search
                </button>
              </div>
              <div className="col-6 d-flex gap-2 justify-content-end pr-0">
                <button className="px-3 bg-primary rounded-pill border-0 fs-10">
                  Save
                </button>
                <button className="px-3 gray-background secondary-border rounded-pill text-secondary fs-10">
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 px-2">
          <table className="table border">
            <thead>
              <tr>
                <th className="py-1 text-center">Suppliers</th>
                <th className="py-1 text-center">Total Service</th>
                <th className="py-1 text-center">Pending</th>
                <th className="py-1 text-center">Cancelled</th>
                <th className="py-1 text-center">Requested</th>
                <th className="py-1 text-center">Confirmed</th>
                <th className="py-1 text-center">Rejected</th>
                <th className="py-1 text-center">Waitlist</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
                <td className="py-2 text-center">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row mt-3 yellow-bg align-items-center">
          <div className="col-4 py-1">
            <p className="m-0">
              <span className="font-size-10">SUPPLIER - </span>{" "}
              <span className="font-weight-bold">Agman Sufary-[ ]</span>
            </p>
          </div>
          <div className="col-4 py-1">
            <p className="m-0">
              <span className="font-size-10">PAYMENT TERM - </span>{" "}
              <span className="font-weight-bold">Cash </span>
            </p>
          </div>
          <div className="col-4 py-1">
            <button className="border-0 py-0 bg-primary rounded"><i className="fa-regular fa-paper-plane font-size-10"></i>  Send Reservation Request</button>
          </div>
        </div>
        <div className="row mt-3 border-bottom pb-3">
        <table className="table table-bordered">
          <thead>
            <tr className="">
              <th className="text-center py-1">Quotation</th>
              <th className="text-center py-1">Hotel</th>
              <th className="text-center py-1">Check In</th>
              <th className="text-center py-1">Check Out</th>
              <th className="text-center py-1">Room Type</th>
              <th className="text-center py-1">Total Nights</th>
              <th className="text-center py-1">Meal Plan</th>
              <th className="text-center py-1">Hotel Type</th>
              <th className="text-center py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center py-1">Main Quotation</td>
              <td className="text-center py-1">Agman Sufary</td>
              <td className="text-center py-1">01-02-2024</td>
              <td className="text-center py-1">01-02-2024</td>
              <td className="text-center py-1">1 Nights</td>
              <td className="text-center py-1">CP</td>
              <td className="text-center py-1">Standard</td>
              <td className="text-center py-1">Agma Suffary</td>
              <td className="text-center py-1">
                <select
                  name=""
                  id=""
                  className="w-100 py-1 border gray-background outline-0"
                >
                  <option value="">Confirmed</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="row mt-3">
          <div className="col-11">
            <div className="row">
              <div className="col d-flex flex-column d-flex">
                <button className="my-auto w-100 bg-white font-size-11 text-secondary secondary-border rounded py-1">Special reports and remarks</button>
              </div>
              <div className="col d-flex flex-column">
                <label htmlFor="" className="m-0">
                  Confirmation No
                </label>
                <input type="text" className="w-100 bg-white px-2 text-secondary secondary-border-1 rounded"/>
              </div>
              <div className="col d-flex flex-column">
                <label htmlFor="" className="m-0">
                  Confirmation Date
                </label>
                <input type="date" className="w-100 bg-white px-2 text-secondary secondary-border-1 rounded"/>
              </div>
              <div className="col d-flex flex-column">
                <label htmlFor="" className="m-0">
                   Cutoff Date
                </label>
                <input type="date" className="w-100 bg-white px-2 text-secondary secondary-border-1 rounded"/>
              </div>
              <div className="col d-flex flex-column">
                <label htmlFor="" className="m-0">
                   Confirmed By
                </label>
                <input type="text" className="w-100 bg-white px-2 text-secondary secondary-border-1 rounded"/>
              </div>
              <div className="col d-flex flex-column">
                <label htmlFor="" className="m-0">
                   Confirmed Note
                </label>
                <input type="text" className="w-100 bg-white px-2 text-secondary secondary-border-1 rounded"/>
              </div>
            </div>
          </div>
          <div className="col-1 d-flex align-items-end">
            <button className="border-0 px-2 bg-success font-size-10">Save</button>
          </div>
        </div>
        <div className="row mt-3 yellow-bg align-items-center">
          <div className="col-4 py-1">
            <p className="m-0">
              <span className="font-size-10">SUPPLIER - </span>{" "}
              <span className="font-weight-bold">Munna-[ ]</span>
            </p>
          </div>
          <div className="col-4 py-1">
            <p className="m-0">
              <span className="font-size-10">PAYMENT TERM - </span>{" "}
              <span className="font-weight-bold">Cash </span>
            </p>
          </div>
          <div className="col-4 py-1">
            <button className="border-0 py-0 bg-primary rounded"><i className="fa-regular fa-paper-plane font-size-10"></i>  Send Reservation Request</button>
          </div>
        </div>
        <div className="row mt-3 border-bottom pb-3">
        <table className="table table-bordered">
          <thead>
            <tr className="">
              <th className="text-center py-1">Quotation</th>
              <th className="text-center py-1">Hotel</th>
              <th className="text-center py-1">Check In</th>
              <th className="text-center py-1">Check Out</th>
              <th className="text-center py-1">Room Type</th>
              <th className="text-center py-1">Total Nights</th>
              <th className="text-center py-1">Meal Plan</th>
              <th className="text-center py-1">Hotel Type</th>
              <th className="text-center py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center py-1">Main Quotation</td>
              <td className="text-center py-1">Agman Sufary</td>
              <td className="text-center py-1">01-02-2024</td>
              <td className="text-center py-1">01-02-2024</td>
              <td className="text-center py-1">1 Nights</td>
              <td className="text-center py-1">CP</td>
              <td className="text-center py-1">Standard</td>
              <td className="text-center py-1">Agma Suffary</td>
              <td className="text-center py-1">
                <select
                  name=""
                  id=""
                  className="w-100 py-1 border gray-background outline-0"
                >
                  <option value="">Confirmed</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default ReservationRequest;
