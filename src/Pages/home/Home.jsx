import React from "react";
import Layout from "../../Component/Layout/Layout";
import DestinationChart from "./DestinationChart";

const Home = () => {
  return (
    <Layout>
      <div className="container-fluid px-4">
        <div className="row mt-1 gap-2">
          {/* TODO LIST  */}
          <div className="col-5 border">
            <div className="row">
              <div className="col-12 dashboard-chart-bg-4 d-flex justify-content-between py-1">
                <p className="m-0 fs-6">Todo List</p>
                <select
                  name=""
                  id=""
                  className="form-input-6 w-50 font-size-12"
                >
                  <option value="">All Operation Person</option>
                </select>
              </div>
            </div>
            <div
              className="row overflow-y-auto custom-table-scroll"
              style={{ height: "200px" }}
            >
              <div className="col-12 p-0">
                <table className="table table-stripped">
                  <thead>
                    <tr>
                      <th className="p-1 text-center font-size-11">Query Id</th>
                      <th className="p-1 text-center font-size-11">Date</th>
                      <th className="p-1 text-center font-size-11">Time</th>
                      <th className="p-1 text-center font-size-11">Details</th>
                      <th className="p-1 text-center font-size-11">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                    <tr>
                      <th className="p-1 text-center font-size-11">
                        DB24-25/002311
                      </th>
                      <td className="p-1 text-center font-size-11">
                        10-11-2024
                      </td>
                      <td className="p-1 text-center font-size-11">10:15</td>
                      <td className="p-1 text-center font-size-11">
                        Internal Note
                      </td>
                      <td
                        className="p-1 text-center text-primary cursor-pointer font-size-11"
                        data-toggle="modal"
                        data-target=".bd-action-modal-sm"
                      >
                        Action
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col d-flex flex-column justify-content-between ">
            <div className="row gap-1">
              <div className="width-30-percent border height-115 p-0 position-relative d-flex flex-column justify-content-end dashboard-chart-bg-1">
                <p className="text-center fs-1 m-0">0</p>
                <p className="text-center no-wrap m-0 font-size-11 font-weight-bold mb-3">
                  Today's Query
                </p>
                <div className="position-absolute top-0 right-0 dashboard-icon-bg rounded-pill h-w-40 d-flex justify-content-center align-items-center m-1">
                  <span className="">
                    <i className="fa-solid fa-snowflake fs-6 text-ligth"></i>
                  </span>
                </div>
              </div>
              <div className="width-30-percent border height-115 p-0 position-relative d-flex flex-column justify-content-end dashboard-chart-bg-2">
                <p className="text-center fs-1 m-0 ">0</p>
                <p className="text-center no-wrap m-0 font-size-11 font-weight-bold mb-3">
                  Yesterday's Query
                </p>
                <div className="position-absolute top-0 right-0 p-2 dashboard-icon-bg rounded-pill h-w-40 d-flex justify-content-center align-items-center m-1">
                  <i className="fa-brands fa-codepen fs-6 text-light"></i>
                </div>
              </div>
              <div className="width-30-percent border height-115 p-0 position-relative d-flex flex-column justify-content-end dashboard-chart-bg-3">
                <p className="text-center fs-1 m-0 ">0</p>
                <p className="text-center no-wrap m-0 font-size-11 font-weight-bold mb-3">
                  September's Query
                </p>
                <div className="position-absolute top-0 right-0 p-2 dashboard-icon-bg rounded-pill h-w-40 d-flex justify-content-center align-items-center m-1">
                  <i className="fa-regular fa-calendar-days fs-6 text-light"></i>
                </div>
              </div>
            </div>
            <div className="row gap-1">
              <div className="width-30-percent border height-115 p-0 position-relative d-flex flex-column justify-content-end dashboard-chart-bg-4">
                <p className="text-center fs-1 m-0">0</p>
                <p className="text-center no-wrap m-0 font-size-11 font-weight-bold mb-3">
                  Total Confirmed Query
                </p>
                <div className="position-absolute top-0 right-0 p-2 dashboard-icon-bg rounded-pill h-w-40 d-flex justify-content-center align-items-center m-1">
                  <i className="fa-regular fa-thumbs-up fs-6 text-light"></i>
                </div>
              </div>
              <div className="width-30-percent border height-115 p-0 position-relative d-flex flex-column justify-content-end dashboard-chart-bg-5">
                <p className="text-center fs-1 m-0 ">0</p>
                <p className="text-center no-wrap m-0 font-size-11 font-weight-bold mb-3">
                  Total Pax Travelling
                </p>
                <div className="position-absolute top-0 right-0 p-2 dashboard-icon-bg rounded-pill h-w-40 d-flex justify-content-center align-items-center m-1">
                  <i className="fa-solid fa-users fs-6 text-light"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className="m-0 text-center">Top 5 Destination</h4>
            <DestinationChart />
          </div>
        </div>
      </div>

      {/* action modal */}
      <div
        class="modal fade bd-action-modal-sm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content ">
            <p className="py-1 px-2 bg-primary rounded">SELECT STATUS</p>
            <div className="px-2 ">
              <select name="" id="" className="form-input-6 w-50">
                <option value="">Select</option>
                <option value="">Completed</option>
                <option value="">Extended</option>
              </select>
            </div>
            <div className="modal-footer m-0 mt-3 p-1">
              <button className="modal-save-button">Save</button>
              <button className="modal-close-button" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
