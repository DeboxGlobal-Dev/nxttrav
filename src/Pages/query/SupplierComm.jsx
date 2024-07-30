import React from "react";
import { NavLink } from "react-router-dom";

const SupplierComm = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0 mt-3">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
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
                class="nav-link"
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
                class="nav-link"
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
                class="nav-link"
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
                class="nav-link"
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
              <h1>Supplier Confirmation</h1>
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
              <div className="row m-0">
                <div
                  className="col-10 d-flex justify-content-between align-items-center"
                  style={{ backgroundColor: "rgb(255, 255, 186)" }}
                >
                  <p className="m-0 py-1 font-weight-500">
                    The Oberoi Amarvillas | 5 star | Taj East Gate Road Agra,
                    Uttar pradesh Pin Code : 282001
                  </p>
                  <button
                    className="blue-button d-flex justify-content-center align-items-center"
                    style={{ height: "25px", width: "70px" }}
                  >
                    send
                  </button>
                </div>
                <div className="col-10 p-0 border mt-1">
                  <table class="table">
                    <thead>
                      <tr>
                        <th className="text-center">Destination</th>
                        <th className="text-center">From-Date</th>
                        <th className="text-center">To-Date</th>
                        <th className="text-center">Nights</th>
                        <th className="text-center">DBL</th>
                        <th className="text-center">Room Type</th>
                        <th className="text-center">Meal Plan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="text-center">Agra</th>
                        <td className="text-center">20-02-2024</td>
                        <td className="text-center">25-02-2024</td>
                        <td className="text-center">2</td>
                        <td className="text-center">1</td>
                        <td className="text-center">Premier Room</td>
                        <td className="text-center">CP</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row m-0 mt-4">
                <div
                  className="col-10 d-flex justify-content-between align-items-center"
                  style={{ backgroundColor: "rgb(255, 255, 186)" }}
                >
                  <p className="m-0 py-1 font-weight-500">
                    The Oberoi Amarvillas | 5 star | Taj East Gate Road Agra,
                    Uttar pradesh Pin Code : 282001
                  </p>
                  <button
                    className="blue-button d-flex justify-content-center align-items-center"
                    style={{ height: "25px", width: "70px" }}
                  >
                    send
                  </button>
                </div>
                <div className="col-10 p-0 border mt-1">
                  <table class="table">
                    <thead>
                      <tr>
                        <th className="text-center">Destination</th>
                        <th className="text-center">From-Date</th>
                        <th className="text-center">To-Date</th>
                        <th className="text-center">Nights</th>
                        <th className="text-center">DBL</th>
                        <th className="text-center">Room Type</th>
                        <th className="text-center">Meal Plan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="text-center">Agra</th>
                        <td className="text-center">20-02-2024</td>
                        <td className="text-center">25-02-2024</td>
                        <td className="text-center">2</td>
                        <td className="text-center">1</td>
                        <td className="text-center">Premier Room</td>
                        <td className="text-center">CP</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row m-0 mt-4">
                <div
                  className="col-10 d-flex justify-content-between align-items-center"
                  style={{ backgroundColor: "rgb(255, 255, 186)" }}
                >
                  <p className="m-0 py-1 font-weight-500">
                    The Oberoi Amarvillas | 5 star | Taj East Gate Road Agra,
                    Uttar pradesh Pin Code : 282001
                  </p>
                  <button
                    className="blue-button d-flex justify-content-center align-items-center"
                    style={{ height: "25px", width: "70px" }}
                  >
                    send
                  </button>
                </div>
                <div className="col-10 p-0 border mt-1">
                  <table class="table">
                    <thead>
                      <tr>
                        <th className="text-center">Destination</th>
                        <th className="text-center">From-Date</th>
                        <th className="text-center">To-Date</th>
                        <th className="text-center">Nights</th>
                        <th className="text-center">DBL</th>
                        <th className="text-center">Room Type</th>
                        <th className="text-center">Meal Plan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="text-center">Agra</th>
                        <td className="text-center">20-02-2024</td>
                        <td className="text-center">25-02-2024</td>
                        <td className="text-center">2</td>
                        <td className="text-center">1</td>
                        <td className="text-center">Premier Room</td>
                        <td className="text-center">CP</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row m-0 mt-4">
                <div
                  className="col-10 d-flex justify-content-between align-items-center"
                  style={{ backgroundColor: "rgb(255, 255, 186)" }}
                >
                  <p className="m-0 py-1 font-weight-500">
                    The Oberoi Amarvillas | 5 star | Taj East Gate Road Agra,
                    Uttar pradesh Pin Code : 282001
                  </p>
                  <button
                    className="blue-button d-flex justify-content-center align-items-center"
                    style={{ height: "25px", width: "70px" }}
                  >
                    send
                  </button>
                </div>
                <div className="col-10 p-0 border mt-1">
                  <table class="table">
                    <thead>
                      <tr>
                        <th className="text-center">Destination</th>
                        <th className="text-center">From-Date</th>
                        <th className="text-center">To-Date</th>
                        <th className="text-center">Nights</th>
                        <th className="text-center">DBL</th>
                        <th className="text-center">Room Type</th>
                        <th className="text-center">Meal Plan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="text-center">Agra</th>
                        <td className="text-center">20-02-2024</td>
                        <td className="text-center">25-02-2024</td>
                        <td className="text-center">2</td>
                        <td className="text-center">1</td>
                        <td className="text-center">Premier Room</td>
                        <td className="text-center">CP</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
