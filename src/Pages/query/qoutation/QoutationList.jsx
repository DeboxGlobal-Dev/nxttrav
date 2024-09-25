import React from "react";

const QoutationList = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row border quotatation-shadow padding-around">
          <div className="col-12">
            <div className="row justify-content-between">
              <div className="col-2 p-0">
                <p className="m-0 font-size-12 font-weight-medium">
                  Query Date:
                </p>
                <p className="m-0">1 August 2024 | 12:46 PM</p>
              </div>
              <div className="col-2 p-0">
                <p className="m-0 font-size-12 font-weight-medium">Status:</p>
                <p className="m-0 text-primary font-weight-bold">
                  Query Confirmed
                </p>
              </div>
              <div className="col-2 p-0">
                <p className="m-0 font-size-12 font-weight-medium">End Date:</p>
                <p className="m-0 ">2 August 2024 | 12:46</p>
              </div>
              <div className="col-2 p-0 d-flex gap-3">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-circle-user fs-4 text-secondary"></i>
                </div>
                <div>
                  <p className="m-0 font-size-12 font-weight-bold">
                    Pawan Travel India
                  </p>
                  <p className="m-0 font-weight-bold font-size-10">876636556</p>
                </div>
              </div>
              <div className="col-2 d-flex justify-content-between align-items-center">
                <button className="modal-save-button w-auto rounded-pill bg-success font-size-12 px-2">
                  Add Quotation
                </button>
                <button className="modal-close-button rounded-pill">
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2 border quotatation-shadow py-2 px-1">
            <p className="text-center fs-6">Destination</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="m-0">From</p>
                <p className="font-weight-bold m-0">Delhi</p>
              </div>
              <div>
                <p className=""></p>
                <p>
                  <i className="fa-solid fa-right-long"></i>
                </p>
              </div>
              <div>
                <p className="m-0">To</p>
                <p className="font-weight-bold m-0">Agra</p>
              </div>
            </div>
            <div className="mt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="p-0 font-weight-normal font-size-12 text-center">
                      Duration
                    </th>
                    <th className="p-0 font-weight-normal font-size-12 text-center">
                      Destination
                    </th>
                    <th className="p-0 font-weight-normal font-size-12 text-center">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-0 font-size-12 text-center padding-y-5">
                      Day 1
                    </td>
                    <td className="p-0 font-size-12 text-center padding-y-5">
                      Delhi
                    </td>
                    <td className="p-0 font-size-12 text-center padding-y-5">
                      09-01-2024
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0 font-size-12 text-center padding-y-5">
                      Day 1
                    </td>
                    <td className="p-0 font-size-12 text-center padding-y-5">
                      Delhi
                    </td>
                    <td className="p-0 font-size-12 text-center padding-y-5">
                      09-01-2024
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0 font-size-12 text-center padding-y-5">
                      Day 1
                    </td>
                    <td className="p-0 font-size-12 text-center padding-y-5">
                      Delhi
                    </td>
                    <td className="p-0 font-size-12 text-center padding-y-5">
                      09-01-2024
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0 font-size-12 text-center padding-y-5">
                      Day 1
                    </td>
                    <td className="p-0 font-size-12 text-center padding-y-5">
                      Delhi
                    </td>
                    <td className="p-0 font-size-12 text-center padding-y-5">
                      09-01-2024
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <div className="d-flex flex-column border width-30-percent">
                <span className="m-0 text-center font-size-11">NIGHTS</span>
                <span className="font-weight-bold text-center font-size-12">
                  1
                </span>
              </div>
              <div className="d-flex flex-column border width-30-percent">
                <span className="m-0 text-center font-size-11">ADULTS</span>
                <span className="font-weight-bold text-center font-size-12">
                  1
                </span>
              </div>
              <div className="d-flex flex-column border width-30-percent">
                <span className="m-0 text-center font-size-11">CHILDS</span>
                <span className="font-weight-bold text-center font-size-12">
                  1
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex flex-column border width-30-percent">
                <span className="m-0 text-center font-size-11">SGL</span>
                <span className="font-weight-bold text-center font-size-12">
                  1
                </span>
              </div>
              <div className="d-flex flex-column border width-30-percent">
                <span className="m-0 text-center font-size-11">DBL</span>
                <span className="font-weight-bold text-center font-size-12">
                  1
                </span>
              </div>
              <div className="d-flex flex-column border width-30-percent">
                <span className="m-0 text-center font-size-11">TPL</span>
                <span className="font-weight-bold text-center font-size-12">
                  1
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-1">
              <div className="d-flex flex-column border px-1">
                <span className="m-0 text-center font-size-11">TWIN</span>
                <span className="font-weight-bold text-center font-size-12">
                  1
                </span>
              </div>
              <div className="d-flex flex-column border px-1">
                <span className="m-0 text-center font-size-11">CWB</span>
                <span className="font-weight-bold text-center font-size-12">
                  1
                </span>
              </div>
              <div className="d-flex flex-column border px-1">
                <span className="m-0 text-center font-size-11">CNB</span>
                <span className="font-weight-bold text-center font-size-12">
                  1
                </span>
              </div>
              <div className="d-flex flex-column border px-1">
                <span className="m-0 text-center font-size-11">E.BED</span>
                <span className="font-weight-bold text-center font-size-12">
                  1
                </span>
              </div>
            </div>
            <div className="mt-2">
              <div className="w-50 border d-flex flex-column p-0">
                <span className="text-center m-0 font-size-10">BUDGET</span>
                <span className="text-center m-0 font-siz-11">0</span>
              </div>
            </div>
            <div className="border p-0 py-2 mt-2 border-right-0 border-left-0">
              <p className="m-0 font-size-10">ROOM PREFERENCE :</p>
            </div>
            <div className="mt-2">
              <div className="d-flex flex-column">
                <span className="font-size-10">OPERATION PERSON</span>
                <span className="font-size-11 font-weight-bold">
                  Mohd Rizwan
                </span>
              </div>
            </div>
          </div>
          <div className="col-10  mt-3 overflow main-content-table">
            <table class="table">
              <thead>
                <tr className="light-gray-text">
                  <th className="p-0 py-2 px-1 border-0">QUOTATION ID</th>
                  <th className="p-0 py-2 px-1 border-0">FROM DATE</th>
                  <th className="p-0 py-2 px-1 border-0">TO DATE</th>
                  <th className="p-0 py-2 px-1 border-0">DURATION</th>
                  <th className="p-0 py-2 px-1 border-0">TOTAL PAX</th>
                  <th className="p-0 py-2 px-1 border-0">ACTION</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="quotatio-table-data table-border quotation-table-tr">
                  <td className="text-primary p-0 py-1 px-1 border-0">
                    DB23-09023-SD32
                  </td>
                  <td className="p-0 py-1 px-1 border-0">01-02-2024</td>
                  <td className="p-0 py-1 px-1 border-0">05-03-2024</td>
                  <td className="p-0 py-1 px-1 border-0">6N/7D</td>
                  <td className="p-0 py-1 px-1 border-0">5 Pax</td>
                  <td className="p-0 py-1 px-1 d-flex justify-content-between border-0">
                    <button className="border px-1">Costsheet</button>
                    <button className="border px-1">Proposal</button>
                    <button className="border px-1">Duplicate</button>
                    <button className="border px-1">Payment Request</button>
                  </td>
                </tr>
                <tr className="quotatio-table-data table-border quotation-table-tr">
                  <td className="text-primary p-0 py-1 px-1 border-0">
                    DB23-09023-SD32
                  </td>
                  <td className="p-0 py-1 px-1 border-0">01-02-2024</td>
                  <td className="p-0 py-1 px-1 border-0">05-03-2024</td>
                  <td className="p-0 py-1 px-1 border-0">6N/7D</td>
                  <td className="p-0 py-1 px-1 border-0">5 Pax</td>
                  <td className="p-0 py-1 px-1 d-flex justify-content-between border-0">
                    <button className="border px-1">Costsheet</button>
                    <button className="border px-1">Proposal</button>
                    <button className="border px-1">Duplicate</button>
                    <button className="border px-1">Payment Request</button>
                  </td>
                </tr>
                <tr className="quotatio-table-data table-border quotation-table-tr">
                  <td className="text-primary p-0 py-1 px-1 border-0">
                    DB23-09023-SD32
                  </td>
                  <td className="p-0 py-1 px-1 border-0">01-02-2024</td>
                  <td className="p-0 py-1 px-1 border-0">05-03-2024</td>
                  <td className="p-0 py-1 px-1 border-0">6N/7D</td>
                  <td className="p-0 py-1 px-1 border-0">5 Pax</td>
                  <td className="p-0 py-1 px-1 d-flex justify-content-between border-0">
                    <button className="border px-1">Costsheet</button>
                    <button className="border px-1">Proposal</button>
                    <button className="border px-1">Duplicate</button>
                    <button className="border px-1">Payment Request</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default QoutationList;
