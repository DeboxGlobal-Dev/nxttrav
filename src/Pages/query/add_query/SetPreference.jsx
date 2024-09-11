import React, { useContext, useState } from "react";
import { queryInitial } from "../QueryInitialValue";
import { NavLink } from "react-router-dom";
import { addQueryContext } from "./Addquery";

const SetPreference = () => {
  const { dropdownObject, queryObjects } = useContext(addQueryContext);
  const { dropdownState } = dropdownObject;
  const { queryFields, setQueryFields } = queryObjects;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryFields({ ...queryFields, [name]: value });
  };

  return (
    <div className="col-12 col-sm-5 d-flex flex-column justify-content-between">
      <NavLink to="/preferrence">
        <p
          className="font-weight-bold 
    bg-primary form-input-3 px-3 rounded 
    border-0 height-30 d-flex align-items-center m-0"
        >
          Set Preference
        </p>
      </NavLink>
      <div className=" mt-1">
        <label htmlFor="salesperson" className="m-0 font-size-12">
          Sales Person
        </label>
        <select
          type="select"
          id="salesperson"
          className="form-input-3 w-100"
          name="SalesPerson"
          value={queryFields.SalesPerson}
          onChange={handleChange}
        >
          <option value={""}>Select</option>
          <option value={"1"}>Ansar</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="assignuser" className="m-0 font-size-12">
          Assign User
        </label>
        <select
          type="select"
          id="assignuser"
          className="form-input-3 w-100"
          name="AssignUser"
          value={queryFields.AssignUser}
          onChange={handleChange}
        >
          <option value={""}>Select</option>
          <option value={"1"}>Nishank</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="contracting" className="m-0 font-size-12">
          Contracting Person
        </label>
        <select
          type="select"
          id="contracting"
          className="form-input-3 w-100"
          name="ContractPerson"
          value={queryFields.ContractPerson}
          onChange={handleChange}
        >
          <option value={""}>Select</option>
          <option value={"1"}>Sanif</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="priority" className="m-0 font-size-12">
          Priority
        </label>
        <select
          type="select"
          id="priority"
          className="form-input-3 w-100"
          name="Priority"
          value={queryFields.Priority}
          onChange={handleChange}
        >
          <option value={""}>Select</option>
          <option value={"1"}>Normal</option>
          <option value={"2"}>Medium</option>
          <option value={"3"}>High</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="hoteltype" className="m-0 font-size-12">
          Hotel Type
        </label>
        <select
          type="select"
          id="hoteltype"
          className="form-input-3"
          name="HotelType"
          value={queryFields.HotelType}
          onChange={handleChange}
        >
          <option>Select</option>
          {dropdownState.hotelType?.map((value, index) => {
            return (
              <option value={value.id} key={index + 1}>
                {value.Name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="">
        <label
          htmlFor="adventuretour"
          className="m-0 font-size-12"
          name="TourType"
          value={queryFields.TourType}
          onChange={handleChange}
        >
          Tour Type
        </label>
        <select
          type="select"
          id="adventuretour"
          className="form-input-3"
          name="TourType"
          value={queryFields.TourType}
          onChange={handleChange}
        >
          <option>Select</option>
          {dropdownState.tourType?.map((value, index) => {
            return (
              <option value={value.id} key={index + 1}>
                {value.Name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="">
        <label htmlFor="vehicle" className="m-0 font-size-12">
          Vehicle Preference
        </label>
        <select
          type="select"
          id="vehicle"
          className="form-input-3"
          name="VehiclePrefrence"
          value={queryFields.VehiclePrefrence}
          onChange={handleChange}
        >
          <option>Select</option>
          {dropdownState.vehicleType.map((value, index) => {
            return (
              <option value={value.id} key={index}>
                {value.Name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="">
        <label htmlFor="leadsource" className="m-0 font-size-12">
          Lead Source
        </label>
        <select
          type="select"
          id="leadsource"
          className="form-input-3"
          name="LeadSource"
          value={queryFields.LeadSource}
          onChange={handleChange}
        >
          <option>Select</option>
          {dropdownState.leadList?.map((value, index) => {
            return (
              <option value={value.id} key={index + 1}>
                {value.Name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="">
        <label htmlFor="leadreferenced" className="m-0 font-size-12">
          Lead RefrecedId
        </label>
        <input
          type="text"
          id="leadreferenced"
          className="form-input-3"
          placeholder="#87738727667"
          name="QueryId"
          value={queryFields.QueryId}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default React.memo(SetPreference);
