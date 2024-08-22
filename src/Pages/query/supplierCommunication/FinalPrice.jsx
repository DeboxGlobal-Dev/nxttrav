import React from "react";

const FinalPrice = () => {
  return (
    <div className="row row-gap-2">
      <div className="col-12 d-flex justify-content-end">
        <div className="d-flex gap-3">
          <select className="button-style-4 p-1 font-size-11">
            <option value="">DB24-25/000070-A | Main</option>
          </select>
          <button className="button-style-4 p-1 px-2 font-size-11 bg-white">
            Apply Filter
          </button>
          <button className="button-style-4 py-1 px-3 font-size-11 bg-white">
            Back
          </button>
        </div>
      </div>
      <div className="col-12">
        <div className="row yellow-bg align-items-center">
          <div className="col-2 d-flex justify-content-between bg-white border">
            <div className="p-0">
              <span className="m-0 font-size-10">Service Type:</span>
              <p className="font-weight-bold m-0 text-primary">HOTEL</p>
            </div>
            <div className="p-0 d-flex align-items-center">
              <span className="font-weight-bold m-0 text-danger">
                Main Qoutation
              </span>
            </div>
          </div>
          <div className="col-2 py-1 d-flex justify-content-center">
            <p className="m-0">
              <span className="font-size-11">Hotel- </span>
              <span className="font-weight-bold font-size-11">
                Africa Avenue(Delhi)
              </span>
              <span className="font-size-11">| 5 Star </span>
            </p>
          </div>
          <div className="col-2 py-1 d-flex justify-content-center">
            <p className="m-0">
              <span className="font-size-11">Room Type -</span>{" "}
              <span className="font-weight-bold font-size-11">
                Classic Room
              </span>
            </p>
          </div>
          <div className="col-2 py-1 d-flex justify-content-center">
            <p className="m-0">
              <span className="font-size-11">Meal PLan -</span>{" "}
              <span className="font-weight-bold font-size-11">CP</span>
            </p>
          </div>
          <div className="col-2 py-1 d-flex justify-content-center">
            <p className="m-0">
              <span className="font-size-11">Supplier Nam -</span>{" "}
              <span className="font-weight-bold font-size-11">
                Mohammad Rizwan
              </span>
            </p>
          </div>
          <div className="col-2 py-1 d-flex justify-content-center">
            <p className="m-0">
              <span className="font-size-11">Date -</span>{" "}
              <span className="font-weight-bold font-size-11">20-04-2024</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 p-0">
        <table className="table table-bordered custom-table">
          <thead>
            <tr className="">
              <th className="py-1"></th>
              <th className="text-center py-1">Single</th>
              <th className="text-center py-1">Double</th>
              <th className="text-center py-1">Triple</th>
              <th className="text-center py-1">Twin</th>
              <th className="text-center py-1">ExtraBed</th>
              <th className="text-center py-1">ChildWB</th>
              <th className="text-center py-1">ChildNB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}>Quote Price</td>
              <td>
                <div className="d-flex justify-content-around">
                  <span>Price</span>
                  <span>Room</span>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around">
                  <span>Price</span>
                  <span>Room</span>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around">
                  <span>Price</span>
                  <span>Room</span>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around">
                  <span>Price</span>
                  <span>Room</span>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around">
                  <span>Price</span>
                  <span>Room</span>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around">
                  <span>Price</span>
                  <span>Room</span>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around">
                  <span>Price</span>
                  <span>Room</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="light-background px-1">1500</span>
                  </div>
                  <div>
                    <span className="light-background px-1">01</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="light-background px-1">1500</span>
                  </div>
                  <div>
                    <span className="light-background px-1">01</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="light-background px-1">1500</span>
                  </div>
                  <div>
                    <span className="light-background px-1">01</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="light-background px-1">1500</span>
                  </div>
                  <div>
                    <span className="light-background px-1">01</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="light-background px-1">1500</span>
                  </div>
                  <div>
                    <span className="light-background px-1">01</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="light-background px-1">1500</span>
                  </div>
                  <div>
                    <span className="light-background px-1">01</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="light-background px-1">1500</span>
                  </div>
                  <div>
                    <span className="light-background px-1">01</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2">Final Price</td>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="border px-1">1500</span>
                  </div>
                  <div>
                    <span className="border px-1">01</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="border px-1">1500</span>
                  </div>
                  <div>
                    <span className="border px-1">01</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="border px-1">1500</span>
                  </div>
                  <div>
                    <span className="border px-1">01</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="border px-1">1500</span>
                  </div>
                  <div>
                    <span className="border px-1">01</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="border px-1">1500</span>
                  </div>
                  <div>
                    <span className="border px-1">01</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="border px-1">1500</span>
                  </div>
                  <div>
                    <span className="border px-1">01</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-around border-0 py-2">
                  <div>
                    <span className="border px-1">1500</span>
                  </div>
                  <div>
                    <span className="border px-1">01</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td
                className="py-1"
                colSpan={8}
                style={{ backgroundColor: "rgb(232, 252, 255)" }}
              >
                <div className="row">
                  <div className="col-4 d-flex gap-1 align-items-center pl-4">
                    <span className="m-0 font-weight-bold">Approved By :</span>
                    <input
                      type="text"
                      className="px-4 bg-light border m-0 outline-0"
                      value="Nishank Shukla"
                    />
                  </div>
                  <div className="col-4 d-flex gap-1 align-items-center pl-4">
                    <span className="m-0 font-weight-bold">
                      Approved Date :
                    </span>
                    <input type="date" className="px-4 bg-light border m-0" />
                  </div>
                  <div className="col-4 d-flex gap-1 align-items-center pl-4">
                    <button className=" border-0 px-3 bg-primary rounded-pill">
                      Save
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Transport row */}
      <div className="col-12 mt-2">
        <div className="row yellow-bg align-items-center">
          <div className="col-3 d-flex justify-content-between bg-white border">
            <div className="p-0">
              <span className="m-0 font-size-10">Service Type:</span>
              <p className="font-weight-bold m-0 font-size-11 text-primary">
                TRANSPORT
              </p>
            </div>
            <div className="p-0 d-flex align-items-center">
              <span className="font-weight-bold m-0 text-danger">
                Main Qoutation
              </span>
            </div>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Transport Name - </span>
              <span className="font-weight-bold font-size-11">
                Airport to Hotel (Delhi)
              </span>
              <span className="font-size-11">| 5 Star </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Supplier Name -</span>
              <span className="font-weight-bold font-size-11">
                Mohmmad Rizwan
              </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Date -</span>
              <span className="font-weight-bold font-size-11">10-10-2024</span>
            </p>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 p-0 border py-1" >
            <div className="row">
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Type :{" "}
                  </span>
                  <span className="font-size-12">12 Seater Traveller</span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Cost :{" "}
                  </span>
                  <span className="font-size-12 pl-2">Quote Price</span>{" "}
                  <span>
                    <input
                      type="text"
                      className="w-25 border-0 light-background outline-0 ml-2"
                    />
                  </span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Final Price :{" "}
                  </span>
                  <span className="font-size-12">
                    <input
                      type="text"
                      className="w-25 border outline-0 bg-white ml-2"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 border py-1 border-top-0" style={{ backgroundColor: "rgb(232, 252, 255)" }}>
            <div className="row">
              <div className="col-4 d-flex gap-1 align-items-center pl-3">
                <span className="m-0 font-weight-bold">Approved By :</span>
                <input
                  type="text"
                  className="px-4 bg-light border m-0 outline-0"
                  value="Nishank Shukla"
                />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <span className="m-0 font-weight-bold">Approved Date :</span>
                <input type="date" className="px-4 bg-light border m-0" />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <button className=" border-0 px-3 bg-primary rounded-pill">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ENTRANCE ROW */}
      <div className="col-12 mt-3">
        <div className="row yellow-bg align-items-center">
          <div className="col-3 d-flex justify-content-between bg-white border">
            <div className="p-0">
              <span className="m-0 font-size-10">Service Type:</span>
              <p className="font-weight-bold m-0 font-size-11 text-primary">
                ENTRANCE
              </p>
            </div>
            <div className="p-0 d-flex align-items-center">
              <span className="font-weight-bold m-0 text-danger">
                Main Qoutation
              </span>
            </div>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Transport Name - </span>
              <span className="font-weight-bold font-size-11">
                Airport to Hotel (Delhi)
              </span>
              <span className="font-size-11">| 5 Star </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Supplier Name -</span>
              <span className="font-weight-bold font-size-11">
                Mohmmad Rizwan
              </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Date -</span>
              <span className="font-weight-bold font-size-11">10-10-2024</span>
            </p>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 p-0 border py-1" >
            <div className="row">
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Type :{" "}
                  </span>
                  <span className="font-size-12">12 Seater Traveller</span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Cost :{" "}
                  </span>
                  <span className="font-size-12 pl-2">Quote Price</span>{" "}
                  <span>
                    <input
                      type="text"
                      className="w-25 border-0 light-background outline-0 ml-2"
                    />
                  </span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Final Price :{" "}
                  </span>
                  <span className="font-size-12">
                    <input
                      type="text"
                      className="w-25 border outline-0 bg-white ml-2"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 border py-1 border-top-0" style={{ backgroundColor: "rgb(232, 252, 255)" }}>
            <div className="row">
              <div className="col-4 d-flex gap-1 align-items-center pl-3">
                <span className="m-0 font-weight-bold">Approved By :</span>
                <input
                  type="text"
                  className="px-4 bg-light border m-0 outline-0"
                  value="Nishank Shukla"
                />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <span className="m-0 font-weight-bold">Approved Date :</span>
                <input type="date" className="px-4 bg-light border m-0" />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <button className=" border-0 px-3 bg-primary rounded-pill">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TRAIN ROW */}
      <div className="col-12 mt-3">
        <div className="row yellow-bg align-items-center">
          <div className="col-3 d-flex justify-content-between bg-white border">
            <div className="p-0">
              <span className="m-0 font-size-10">Service Type:</span>
              <p className="font-weight-bold m-0 font-size-11 text-primary">
                TRAIN
              </p>
            </div>
            <div className="p-0 d-flex align-items-center">
              <span className="font-weight-bold m-0 text-danger">
                Main Qoutation
              </span>
            </div>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Transport Name - </span>
              <span className="font-weight-bold font-size-11">
                Airport to Hotel (Delhi)
              </span>
              <span className="font-size-11">| 5 Star </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Supplier Name -</span>
              <span className="font-weight-bold font-size-11">
                Mohmmad Rizwan
              </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Date -</span>
              <span className="font-weight-bold font-size-11">10-10-2024</span>
            </p>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 p-0 border py-1" >
            <div className="row">
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Type :{" "}
                  </span>
                  <span className="font-size-12">12 Seater Traveller</span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Cost :{" "}
                  </span>
                  <span className="font-size-12 pl-2">Quote Price</span>{" "}
                  <span>
                    <input
                      type="text"
                      className="w-25 border-0 light-background outline-0 ml-2"
                    />
                  </span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Final Price :{" "}
                  </span>
                  <span className="font-size-12">
                    <input
                      type="text"
                      className="w-25 border outline-0 bg-white ml-2"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 border py-1 border-top-0" style={{ backgroundColor: "rgb(232, 252, 255)" }}>
            <div className="row">
              <div className="col-4 d-flex gap-1 align-items-center pl-3">
                <span className="m-0 font-weight-bold">Approved By :</span>
                <input
                  type="text"
                  className="px-4 bg-light border m-0 outline-0"
                  value="Nishank Shukla"
                />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <span className="m-0 font-weight-bold">Approved Date :</span>
                <input type="date" className="px-4 bg-light border m-0" />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <button className=" border-0 px-3 bg-primary rounded-pill">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FLIGHT ROW */}
      <div className="col-12 mt-3">
        <div className="row yellow-bg align-items-center">
          <div className="col-3 d-flex justify-content-between bg-white border">
            <div className="p-0">
              <span className="m-0 font-size-10">Service Type:</span>
              <p className="font-weight-bold m-0 font-size-11 text-primary">
                FLIGHT
              </p>
            </div>
            <div className="p-0 d-flex align-items-center">
              <span className="font-weight-bold m-0 text-danger">
                Main Qoutation
              </span>
            </div>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Transport Name - </span>
              <span className="font-weight-bold font-size-11">
                Airport to Hotel (Delhi)
              </span>
              <span className="font-size-11">| 5 Star </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Supplier Name -</span>
              <span className="font-weight-bold font-size-11">
                Mohmmad Rizwan
              </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Date -</span>
              <span className="font-weight-bold font-size-11">10-10-2024</span>
            </p>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 p-0 border py-1" >
            <div className="row">
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Type :{" "}
                  </span>
                  <span className="font-size-12">12 Seater Traveller</span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Cost :{" "}
                  </span>
                  <span className="font-size-12 pl-2">Quote Price</span>{" "}
                  <span>
                    <input
                      type="text"
                      className="w-25 border-0 light-background outline-0 ml-2"
                    />
                  </span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Final Price :{" "}
                  </span>
                  <span className="font-size-12">
                    <input
                      type="text"
                      className="w-25 border outline-0 bg-white ml-2"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 border py-1 border-top-0" style={{ backgroundColor: "rgb(232, 252, 255)" }}>
            <div className="row">
              <div className="col-4 d-flex gap-1 align-items-center pl-3">
                <span className="m-0 font-weight-bold">Approved By :</span>
                <input
                  type="text"
                  className="px-4 bg-light border m-0 outline-0"
                  value="Nishank Shukla"
                />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <span className="m-0 font-weight-bold">Approved Date :</span>
                <input type="date" className="px-4 bg-light border m-0" />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <button className=" border-0 px-3 bg-primary rounded-pill">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RESTAURANT ROW */}
      <div className="col-12 mt-3">
        <div className="row yellow-bg align-items-center">
          <div className="col-3 d-flex justify-content-between bg-white border">
            <div className="p-0">
              <span className="m-0 font-size-10">Service Type:</span>
              <p className="font-weight-bold m-0 font-size-11 text-primary">
                RESTAURANT
              </p>
            </div>
            <div className="p-0 d-flex align-items-center">
              <span className="font-weight-bold m-0 text-danger">
                Main Qoutation
              </span>
            </div>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Transport Name - </span>
              <span className="font-weight-bold font-size-11">
                Airport to Hotel (Delhi)
              </span>
              <span className="font-size-11">| 5 Star </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Supplier Name -</span>
              <span className="font-weight-bold font-size-11">
                Mohmmad Rizwan
              </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Date -</span>
              <span className="font-weight-bold font-size-11">10-10-2024</span>
            </p>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 p-0 border py-1" >
            <div className="row">
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Type :{" "}
                  </span>
                  <span className="font-size-12">12 Seater Traveller</span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Cost :{" "}
                  </span>
                  <span className="font-size-12 pl-2">Quote Price</span>{" "}
                  <span>
                    <input
                      type="text"
                      className="w-25 border-0 light-background outline-0 ml-2"
                    />
                  </span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Final Price :{" "}
                  </span>
                  <span className="font-size-12">
                    <input
                      type="text"
                      className="w-25 border outline-0 bg-white ml-2"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 border py-1 border-top-0" style={{ backgroundColor: "rgb(232, 252, 255)" }}>
            <div className="row">
              <div className="col-4 d-flex gap-1 align-items-center pl-3">
                <span className="m-0 font-weight-bold">Approved By :</span>
                <input
                  type="text"
                  className="px-4 bg-light border m-0 outline-0"
                  value="Nishank Shukla"
                />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <span className="m-0 font-weight-bold">Approved Date :</span>
                <input type="date" className="px-4 bg-light border m-0" />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <button className=" border-0 px-3 bg-primary rounded-pill">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ACTIVITY ROW */}
      <div className="col-12 mt-3">
        <div className="row yellow-bg align-items-center">
          <div className="col-3 d-flex justify-content-between bg-white border">
            <div className="p-0">
              <span className="m-0 font-size-10">Service Type:</span>
              <p className="font-weight-bold m-0 font-size-11 text-primary">
                ACTIVITY
              </p>
            </div>
            <div className="p-0 d-flex align-items-center">
              <span className="font-weight-bold m-0 text-danger">
                Main Qoutation
              </span>
            </div>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Transport Name - </span>
              <span className="font-weight-bold font-size-11">
                Airport to Hotel (Delhi)
              </span>
              <span className="font-size-11">| 5 Star </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Supplier Name -</span>
              <span className="font-weight-bold font-size-11">
                Mohmmad Rizwan
              </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Date -</span>
              <span className="font-weight-bold font-size-11">10-10-2024</span>
            </p>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 p-0 border py-1" >
            <div className="row">
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Type :{" "}
                  </span>
                  <span className="font-size-12">12 Seater Traveller</span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Cost :{" "}
                  </span>
                  <span className="font-size-12 pl-2">Quote Price</span>{" "}
                  <span>
                    <input
                      type="text"
                      className="w-25 border-0 light-background outline-0 ml-2"
                    />
                  </span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Final Price :{" "}
                  </span>
                  <span className="font-size-12">
                    <input
                      type="text"
                      className="w-25 border outline-0 bg-white ml-2"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 border py-1 border-top-0" style={{ backgroundColor: "rgb(232, 252, 255)" }}>
            <div className="row">
              <div className="col-4 d-flex gap-1 align-items-center pl-3">
                <span className="m-0 font-weight-bold">Approved By :</span>
                <input
                  type="text"
                  className="px-4 bg-light border m-0 outline-0"
                  value="Nishank Shukla"
                />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <span className="m-0 font-weight-bold">Approved Date :</span>
                <input type="date" className="px-4 bg-light border m-0" />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <button className=" border-0 px-3 bg-primary rounded-pill">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* GUIDE ROW */}
      <div className="col-12 mt-3">
        <div className="row yellow-bg align-items-center">
          <div className="col-3 d-flex justify-content-between bg-white border">
            <div className="p-0">
              <span className="m-0 font-size-10">Service Type:</span>
              <p className="font-weight-bold m-0 font-size-11 text-primary">
                GUIDE
              </p>
            </div>
            <div className="p-0 d-flex align-items-center">
              <span className="font-weight-bold m-0 text-danger">
                Main Qoutation
              </span>
            </div>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Transport Name - </span>
              <span className="font-weight-bold font-size-11">
                Airport to Hotel (Delhi)
              </span>
              <span className="font-size-11">| 5 Star </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Supplier Name -</span>
              <span className="font-weight-bold font-size-11">
                Mohmmad Rizwan
              </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Date -</span>
              <span className="font-weight-bold font-size-11">10-10-2024</span>
            </p>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 p-0 border py-1" >
            <div className="row">
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Type :{" "}
                  </span>
                  <span className="font-size-12">12 Seater Traveller</span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Cost :{" "}
                  </span>
                  <span className="font-size-12 pl-2">Quote Price</span>{" "}
                  <span>
                    <input
                      type="text"
                      className="w-25 border-0 light-background outline-0 ml-2"
                    />
                  </span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Final Price :{" "}
                  </span>
                  <span className="font-size-12">
                    <input
                      type="text"
                      className="w-25 border outline-0 bg-white ml-2"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 border py-1 border-top-0" style={{ backgroundColor: "rgb(232, 252, 255)" }}>
            <div className="row">
              <div className="col-4 d-flex gap-1 align-items-center pl-3">
                <span className="m-0 font-weight-bold">Approved By :</span>
                <input
                  type="text"
                  className="px-4 bg-light border m-0 outline-0"
                  value="Nishank Shukla"
                />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <span className="m-0 font-weight-bold">Approved Date :</span>
                <input type="date" className="px-4 bg-light border m-0" />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <button className=" border-0 px-3 bg-primary rounded-pill">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ADDITIONAL ROW */}
      <div className="col-12 mt-3">
        <div className="row yellow-bg align-items-center">
          <div className="col-3 d-flex justify-content-between bg-white border">
            <div className="p-0">
              <span className="m-0 font-size-10">Service Type:</span>
              <p className="font-weight-bold m-0 font-size-11 text-primary">
                ADDITIONAL
              </p>
            </div>
            <div className="p-0 d-flex align-items-center">
              <span className="font-weight-bold m-0 text-danger">
                Main Qoutation
              </span>
            </div>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Transport Name - </span>
              <span className="font-weight-bold font-size-11">
                Airport to Hotel (Delhi)
              </span>
              <span className="font-size-11">| 5 Star </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Supplier Name -</span>
              <span className="font-weight-bold font-size-11">
                Mohmmad Rizwan
              </span>
            </p>
          </div>
          <div className="col-3 py-1 d-flex justify-content-end">
            <p className="m-0">
              <span className="font-size-11">Date -</span>
              <span className="font-weight-bold font-size-11">10-10-2024</span>
            </p>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 p-0 border py-1" >
            <div className="row">
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Type :{" "}
                  </span>
                  <span className="font-size-12">12 Seater Traveller</span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Vehicle Cost :{" "}
                  </span>
                  <span className="font-size-12 pl-2">Quote Price</span>{" "}
                  <span>
                    <input
                      type="text"
                      className="w-25 border-0 light-background outline-0 ml-2"
                    />
                  </span>
                </p>
              </div>
              <div className="col-4 px-3">
                <p className="m-0">
                  <span className="font-weight-bold font-size-11">
                    Final Price :{" "}
                  </span>
                  <span className="font-size-12">
                    <input
                      type="text"
                      className="w-25 border outline-0 bg-white ml-2"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 border py-1 border-top-0" style={{ backgroundColor: "rgb(232, 252, 255)" }}>
            <div className="row">
              <div className="col-4 d-flex gap-1 align-items-center pl-3">
                <span className="m-0 font-weight-bold">Approved By :</span>
                <input
                  type="text"
                  className="px-4 bg-light border m-0 outline-0"
                  value="Nishank Shukla"
                />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <span className="m-0 font-weight-bold">Approved Date :</span>
                <input type="date" className="px-4 bg-light border m-0" />
              </div>
              <div className="col-4 d-flex gap-1 align-items-center pl-4">
                <button className=" border-0 px-3 bg-primary rounded-pill">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPrice;
