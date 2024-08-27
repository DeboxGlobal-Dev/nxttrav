import React from "react";
import Layout from "../../Component/Layout/Layout";
const SetPreferrence = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row mt-2">
          <h6 className="font-weight-bold">Add Preferrence</h6>
          <div className="col-12">
            <div className="row justify-content-between preference-parent gap-3">
              <div className="col border gray-background-1 py-1 first-child">
                <label htmlFor="" className="font-size-11 font-weight-bold">
                  Business Type
                </label>
                <div className="d-flex justify-content-between">
                  <div className="w-25 d-flex align-items-center justify-content-between border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="agent" className="m-0 font-size-10">
                      Agent
                    </label>
                    <input
                      type="radio"
                      id="agent"
                      className="radio-input-size radio-button"
                      name="BusinessType"
                      value="agent"
                      defaultChecked
                    />
                  </div>
                  <div className="w-25 d-flex align-items-center justify-content-between border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="b2b" className="m-0 font-size-10">
                      B2B
                    </label>
                    <input
                      type="radio"
                      id="b2b"
                      className="radio-input-size"
                      name="BusinessType"
                      value="b2b"
                    />
                  </div>
                  <div className="w-25 d-flex align-items-center justify-content-between border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="b2c" className="m-0 font-size-10">
                      B2C
                    </label>
                    <input
                      type="radio"
                      id="b2c"
                      className="radio-input-size"
                      name="BusinessType"
                      value="b2c"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 border gray-background-1 py-1">
                <label htmlFor="" className="font-size-11 font-weight-bold">
                  Query Type
                </label>
                <div className="d-flex justify-content-between">
                  <div className=" d-flex align-items-center gap-2 border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="query" className="m-0 font-size-10">
                      Query
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="QueryType"
                      value="query"
                      id="query"
                      defaultChecked
                    />
                  </div>
                  <div className=" d-flex align-items-center gap-2 border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="series" className="m-0 font-size-10">
                      Series
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="QueryType"
                      value="series"
                      id="series"
                    />
                  </div>
                  <div className=" d-flex align-items-center gap-2 border bg-white px-1 padding-y-3 rounded">
                    <label
                      htmlFor="fixed_departure"
                      className="m-0 font-size-10"
                    >
                      Fixed Departure
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="QueryType"
                      value="series"
                      id="fixed_departure"
                    />
                  </div>
                  <div className=" d-flex align-items-center gap-2 border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="package" className="m-0 font-size-10">
                      Package
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="QueryType"
                      value="package"
                      id="package"
                    />
                  </div>
                  <div className=" d-flex align-items-center gap-2 border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="transfer" className="m-0 font-size-10">
                      Transfer
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="QueryType"
                      value="transfer"
                      id="transfer"
                    />
                  </div>
                  <div className=" d-flex align-items-center gap-2 border bg-white px-1 padding-y-3 rounded">
                    <label
                      htmlFor="duplicate_query"
                      className="m-0 font-size-10"
                    >
                      Duplicate Query
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="QueryType"
                      id="duplicate_query"
                    />
                  </div>
                </div>
              </div>
              <div className="col-3 border gray-background-1 py-1">
                <label htmlFor="" className="font-size-11 font-weight-bold">
                  Pax Type
                </label>
                <div className="d-flex justify-content-between">
                  <div className=" d-flex align-items-center gap-2 border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="fit" className="m-0 font-size-10">
                      FIT
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="PaxType"
                      id="fit"
                      defaultChecked
                    />
                  </div>
                  <div className=" d-flex align-items-center gap-2 border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="git" className="m-0 font-size-10">
                      GIT
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="PaxType"
                      id="git"
                    />
                  </div>
                  <div className=" d-flex align-items-center gap-2 border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="date_wise" className="m-0 font-size-10">
                      Date Wise
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="PaxType"
                      id="date_wise"
                    />
                  </div>
                  <div className=" d-flex align-items-center gap-2 border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="day_wise" className="m-0 font-size-10">
                      Day Wise
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="PaxType"
                      id="day_wise"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between preference-parent gap-3 mt-3">
              <div className="col border gray-background-1 py-1 first-child d-flex flex-column justify-content-between">
                <label htmlFor="" className="font-size-11 font-weight-bold">
                  Travel Type
                </label>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-2 align-items-center justify-content-between border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="inbound" className="m-0 font-size-10">
                      Inbound
                    </label>
                    <input
                      type="radio"
                      id="inbound"
                      className="radio-input-size"
                      name="TravelType"
                      value="inbound"
                      defaultChecked
                    />
                  </div>
                  <div className="d-flex gap-2 align-items-center justify-content-between border bg-white px-1 padding-y-3 rounded">
                    <label
                      htmlFor="valueaddservice"
                      className="m-0 font-size-10"
                    >
                      Value Add Service
                    </label>
                    <input
                      type="radio"
                      id="valueaddservice"
                      className="radio-input-size"
                      name="TravelType"
                      value="valueaddservice"
                    />
                  </div>
                </div>
              </div>
              <div className="col-3 border gray-background-1 py-1 d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between align-items-center">
                  <label
                    htmlFor=""
                    className="m-0 font-size-11 font-weight-bold"
                  >
                    Hotel Category
                  </label>
                  <select
                    name=""
                    id=""
                    className="border rounded padding-y-3 outline-0 px-1 font-size-10"
                  >
                    <option value="">Hotel Type</option>
                  </select>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <div className=" d-flex align-items-center gap-2 border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="three" className="m-0 font-size-10">
                      3*
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="HotelCategory"
                      id="three"
                      defaultChecked
                    />
                  </div>
                  <div className=" d-flex align-items-center gap-2 border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="four" className="m-0 font-size-10">
                      4*
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="HotelCategory"
                      id="four"
                    />
                  </div>
                  <div className=" d-flex align-items-center gap-2 border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="five" className="m-0 font-size-10">
                      5*
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="HotelCategory"
                      id="five"
                    />
                  </div>
                  <div className=" d-flex align-items-center gap-3 border bg-white px-1 padding-y-3 rounded">
                    <label htmlFor="all" className="m-0 font-size-10">
                      All
                    </label>
                    <input
                      type="radio"
                      className="radio-input-size"
                      name="HotelCategory"
                      id="all"
                    />
                  </div>
                </div>
              </div>
              <div className="col-4 border gray-background-1 py-1">
                <label htmlFor="" className="m-0 font-size-11 font-weight-bold">
                  Assignment
                </label>
                <div className="d-flex justify-content-between">
                  <div className="width-30">
                    <label htmlFor="salesperson" className="m-0 font-size-10">
                      Sales Person
                    </label>
                    <input
                      type="text"
                      className="border rounded outline-0 pl-1 width-full-100 height-20"
                      name="SalesPerson"
                    />
                  </div>
                  <div className="width-30">
                    <label htmlFor="" className="m-0 font-size-10">
                      Assign User
                    </label>
                    <input
                      type="text"
                      className="border rounded outline-0 pl-1 width-full-100 height-20"
                      name="SalesPerson"
                    />
                  </div>
                  <div className="width-30">
                    <label htmlFor="day_wise" className="m-0 font-size-10">
                      Contracting Person
                    </label>
                    <input
                      type="text"
                      className="border rounded outline-0 pl-1 width-full-100 height-20"
                      name="SalesPerson"
                    />
                  </div>
                </div>
              </div>
              <div className="col-2 border gray-background-1 py-1">
                <label htmlFor="" className="m-0 font-size-11 font-weight-bold">
                  Pax Type
                </label>
                <div className="d-flex justify-content-between">
                  <div className="width-48">
                    <label htmlFor="salesperson" className="m-0 font-size-10">
                      ISO
                    </label>

                    <select
                      name=""
                      id=""
                      className="border rounded padding-y-3 outline-0 px-1 font-size-10 width-full-100 height-20"
                    >
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="width-48">
                    <label htmlFor="date_wise" className="m-0 font-size-10">
                      Contrac.. Person
                    </label>
                    <select
                      name=""
                      id=""
                      className="border rounded padding-y-3 outline-0 px-1 font-size-10 width-full-100 height-20"
                    >
                      <option value="">Rizwan</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SetPreferrence;
