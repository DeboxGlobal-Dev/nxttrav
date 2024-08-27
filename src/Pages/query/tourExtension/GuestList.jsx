import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Guest from "./Guest";
import Employe from "./Employe";
import B2C from "./B2C";

const GuestList = () => {
  const [formData, setFormData] = useState({
    ContactType: "GuestList",
  });

  const handleFormChangeData = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="row border-bottom mx-0 pb-2">
        <div className="col-2 d-flex justify-content-between align-items-center">
          <NavLink to="" className="btn border p-0 px-3 rounded-pill">
            Back
          </NavLink>
          <h6 className="m-0 font-weight-500">{formData?.ContactType}</h6>
        </div>
        <div className="col-5">
          <div className="row">
            <div className="col-5">
              <input
                type="text"
                placeholder="Enter Name, Contact, Email"
                className="w-100 rounded-pill border pl-2 font-size-12 outline-0"
              />
            </div>
            <div className="col-4">
              <select
                name=""
                id=""
                className="w-100 rounded-pill text-secondary pl-1"
              >
                <option value="">All Asign User</option>
              </select>
            </div>
            <div className="col-3">
              <input
                type="text"
                placeholder="Search"
                className="w-100 rounded-pill border pl-2 bg-primary outline-0"
              />
            </div>
          </div>
        </div>
        <div className="col-5 d-flex justify-content-between">
          <button className="btn py-0 border rounded-pill bg-success font-size-10 ">
            <i className="fa-solid fa-download pr-1"></i>
            Download Format
          </button>
          <button className="btn py-0 border rounded-pill bg-info font-size-10">
            <i className="fa-solid fa-file-import pr-1"></i>
            Import Excel
          </button>
          <button className="btn py-0 border rounded-pill bg-warning font-size-10">
            <i className="fa-regular fa-eye pr-1"></i>
            View Logs
          </button>
          <button className="btn py-0 border rounded-pill bg-primary font-size-10">
            <i className="fa-solid fa-plus pr-1"></i>
            Add Guest
          </button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-2">
          <label htmlFor="contactType" className="m-0">
            Contact Type
          </label>
          <select
            name="ContactType"
            id="contactType"
            className="w-75 py-1 font-size-12 text-secondary outline-0 border"
            value={formData.ContactType}
            onChange={handleFormChangeData}
          >
            <option value="GuestList">Guest List</option>
            <option value="B2C">B2C</option>
            <option value="Employe">Employe</option>
          </select>
        </div>
        <div className="col-2 d-flex flex-column">
          <label htmlFor="tourId" className="m-0">
            Tour Id
          </label>
          <input
            type="text"
            placeholder="8768686"
            className="w-75 outline-0 border padding-x-4 pl-1"
            id="tourId"
          />
        </div>
        <div className="col-2 d-flex flex-column">
          <label htmlFor="agentName" className="m-0">
            Agent Name
          </label>
          <input
            type="text"
            placeholder="Shubham Travel"
            className="w-75 outline-0 border pl-1 padding-x-4"
            id="agentName"
          />
        </div>
      </div>

      {/* managing guest , employe and b2c component*/}
      {formData.ContactType == "GuestList" && <Guest />}
      {formData.ContactType == "Employe" && <Employe />}
      {formData.ContactType == "B2C" && <B2C />}
    </>
  );
};

export default GuestList;
