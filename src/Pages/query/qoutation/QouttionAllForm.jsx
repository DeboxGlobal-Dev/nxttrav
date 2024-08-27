import React, { useState } from "react";

const ItenararyModalForm = () => {
  return (
    <>
      <div className="row">
        <form action="">
          <div className="col-6 p-0">
            <input
              type="text"
              placeholder="Enter Search Keyword"
              className="form-control"
            />
          </div>

          <div className="col-12 mt-3 p-0">
            <table className="table table-bordered table-striped">
              <thead className="border-0">
                <tr className="border-0">
                  <th className="border-0">#</th>
                  <th className="border-0">TITLE/DESCRIPTION</th>
                  <th className="border-0">LANGUAGE</th>
                  <th className="border-0">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1 font-size-11 text-center">1</td>
                  <td className="p-1 font-size-11">
                    Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Enim deleniti hic voluptate minima dolorum
                    qui architecto dolor, porro quas incidunt.
                  </td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">Select</option>
                      <option value="">English</option>
                      <option value="">Hindi</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">
                    <p className="border px-3 py-1 bg-success rounded m-0 cursor-pointer">
                      Select
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11 text-center">2</td>
                  <td className="p-1 font-size-11">
                    Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Enim deleniti hic voluptate minima dolorum
                    qui architecto dolor, porro quas incidunt.
                  </td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">Select</option>
                      <option value="">English</option>
                      <option value="">Hindi</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">
                    <p className="border px-3 py-1 bg-success rounded m-0 cursor-pointer">
                      Select
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11 text-center">3</td>
                  <td className="p-1 font-size-11">
                    Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Enim deleniti hic voluptate minima dolorum
                    qui architecto dolor, porro quas incidunt.
                  </td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">Select</option>
                      <option value="">English</option>
                      <option value="">Hindi</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">
                    <p className="border px-3 py-1 bg-success rounded m-0 cursor-pointer">
                      Select
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11 text-center">4</td>
                  <td className="p-1 font-size-11">
                    Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Enim deleniti hic voluptate minima dolorum
                    qui architecto dolor, porro quas incidunt.
                  </td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">Select</option>
                      <option value="">English</option>
                      <option value="">Hindi</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">
                    <p className="border px-3 py-1 bg-success rounded m-0 cursor-pointer">
                      Select
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};
const HotelModalForm = () => {
  const [formData, setFormData] = useState({
    SelectDestination: "",
    Destinations: "",
    StartRating: "",
    HotelType: "",
    RoomType: "",
    HotelName: "",
    MealType: "",
    From: "",
    To: "",
  });

  const handleChange = (e) => {};

  return (
    <div className="row px-2">
      <div className="col-2 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          SELECT DESTINATION
        </label>
        <select
          name="SelectDestination"
          id=""
          className="font-size-10 border py-1 rounded"
          value={formData?.SelectDestination}
          onChange={handleChange}
        >
          <option value="">Select Destination</option>
        </select>
      </div>
      <div className="col-1 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          DESTINATIONS
        </label>
        <select
          name="Destinations"
          id=""
          className="font-size-10 border py-1 rounded"
          value={formData?.Destinations}
          onChange={handleChange}
        >
          <option value="">Delhi</option>
        </select>
      </div>
      <div className="col-1 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          START RATING
        </label>
        <select
          name="StartRating"
          id=""
          className="font-size-10 border py-1 rounded"
          value={formData?.StartRating}
          onChange={handleChange}
        >
          <option value="">All</option>
        </select>
      </div>
      <div className="col-1 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          HOTEL TYPE
        </label>
        <select
          name="HotelType"
          id=""
          className="font-size-10 border py-1 rounded"
          value={formData?.HotelType}
        >
          <option value="">All</option>
        </select>
      </div>
      <div className="col-1 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          ROOM TYPE
        </label>
        <select
          name="RoomType"
          id=""
          className="font-size-10 border py-1 rounded"
          value={formData?.RoomType}
        >
          <option value="">All</option>
        </select>
      </div>
      <div className="col-1 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          FROM
        </label>
        <select name="From" id="" className="font-size-10 border py-1 rounded">
          <option value="">Nigh-1 Delhi</option>
        </select>
      </div>
      <div className="col-1 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          TO
        </label>
        <select name="To" id="" className="font-size-10 border py-1 rounded">
          <option value="">Night-1 Delhi</option>
        </select>
      </div>
      <div className="col-2 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          HOTEL NAME
        </label>
        <input
          type="text"
          placeholder="Search Hotel"
          className="font-size-10 border py-1 rounded outline-0"
          name="HotelName"
        />
      </div>
      <div className="col-1 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          MEAL TYPE
        </label>
        <select
          name="MealType"
          id=""
          className="border rounded font-size-10 py-1 "
        >
          <option value="">All</option>
        </select>
      </div>
      <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
        <p className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer">
          Search
        </p>
      </div>
    </div>
  );
};
const GuideModalForm = () => {
  return (
    <>
      <div className="row px-2">
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            SERVICE TYPE
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Select Destination</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            DESTINATION TYPE
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Delhi</option>
          </select>
        </div>
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            DESTINATION
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">All</option>
          </select>
        </div>
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            PAX RANGE
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">All</option>
          </select>
        </div>
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            ---
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">All</option>
          </select>
        </div>
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            FROM DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Nigh-1 Delhi</option>
          </select>
        </div>
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            TO DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Night-1 Delhi</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            GUIDE SERVICE
          </label>
          <input
            type="text"
            placeholder="Search Hotel"
            className="font-size-10 border py-1 rounded outline-0"
          />
        </div>
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            MEAL TYPE
          </label>
          <select name="" id="" className="border rounded font-size-10 py-1 ">
            <option value="">All</option>
          </select>
        </div>
        <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
          <p className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer">
            Search
          </p>
        </div>
      </div>
      <div className="row mt-2 justify-content-end px-2">
        <div className="col-2 p-0 d-flex justify-content-end">
          <button className="btn btn-success">Add New +</button>
        </div>
      </div>
      <div className="row mt-2">
        <form action="">
          <div className="col-12 p-0">
            <table className="table table-bordered table-striped">
              <thead className="border-0">
                <tr className="border-0">
                  <th className="border-0">Guide Service</th>
                  <th className="border-0">Day Type</th>
                  <th className="border-0">Pax Range</th>
                  <th className="border-0">Pax Slab</th>
                  <th className="border-0">Guide Cost</th>
                  <th className="border-0">L.Allowance</th>
                  <th className="border-0">Other Cost</th>
                  <th className="border-0"></th>
                  <th className="border-0"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};
const ActivityModalForm = () => {
  return (
    <>
      <div className="row px-2">
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            DESTINATION TYPE
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Select Destination</option>
          </select>
        </div>
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            DESTINATION
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Delhi</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            DATE
          </label>
          <input type="date" className="font-size-10 border py-1 rounded" />
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            Type
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Activity</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            ---
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">All Activity</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            ACTIVITY NAME
          </label>
          <input
            type="text"
            placeholder="Activity Name"
            className="font-size-10 border py-1 rounded outline-0"
          />
        </div>
        <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
          <p className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer">
            Search
          </p>
        </div>
      </div>
      <div className="row mt-2 justify-content-end px-2">
        <div className="col-2 p-0 d-flex justify-content-end">
          <button className="btn btn-success">Add New +</button>
        </div>
      </div>
      <div className="row mt-2">
        <form action="">
          <div className="col-12 p-0">
            <table className="table table-bordered table-striped">
              <thead className="border-0">
                <tr className="border-0">
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Service Name
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Type
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Supplier
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Pax Slab
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Currency (ROE)
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Pax Range
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Activity Cost
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    No Of Activity
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 font-size-11">Lorem, ipsum dolor.</td>
                  <td className="p-1 font-size-11 text-center">NA</td>
                  <td className="p-1 font-size-11 text-center">All</td>
                  <td className="p-1 font-size-11 text-center">
                    <select name="" id="" className="form-control">
                      <option value="">All Pax</option>
                      <option value="">1 Pax</option>
                    </select>
                  </td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center">0</td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                  </td>
                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};
const MonumentModalForm = () => {
  return (
    <>
      <div className="row px-2">
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            LOCATION TYPE
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Select Destination</option>
          </select>
        </div>
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            DESTINATION
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Delhi</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            FROM DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">1 Night</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            TO DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">1 Night</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            ---
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">All Entrance</option>
            <option value="">Default Entrance</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            SEARCH
          </label>
          <input
            type="text"
            placeholder="Search"
            className="font-size-10 border py-1 rounded outline-0"
          />
        </div>
        <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
          <p className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer">
            Search
          </p>
        </div>
      </div>
      <div className="row mt-2 justify-content-end px-2">
        <div className="col-2 p-0 d-flex justify-content-end">
          <button className="btn btn-success">Add New +</button>
        </div>
      </div>
      <div className="row mt-2">
        <form action="">
          <div className="col-12 p-0">
            <table className="table table-bordered table-striped">
              <thead className="border-0">
                <tr className="border-0">
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Monument Name
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Supplier Name
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Currency [ROE]
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Adult Cost
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Child Cost
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1 font-size-11">Delhi Red Fort</td>
                  <td className="p-1 font-size-11 text-center">Srikanth</td>
                  <td className="p-1 font-size-11 text-center">INR[1]</td>
                  <td className="p-1 font-size-11 text-center">13</td>
                  <td className="p-1 font-size-11 text-center">0</td>

                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};
const TransferModalForm = () => {
  return (
    <div className="row px-2">
      <div className="col-1 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          --
        </label>
        <select name="" id="" className="font-size-10 border py-1 rounded">
          <option value="">Select Destination</option>
        </select>
      </div>
      <div className="col-2 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          FROM DESTINATION
        </label>
        <select name="" id="" className="font-size-10 border py-1 rounded">
          <option value="">Delhi</option>
        </select>
      </div>
      <div className="col-2 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          TO DESTINATION
        </label>
        <select name="" id="" className="font-size-10 border py-1 rounded">
          <option value="">All</option>
        </select>
      </div>
      <div className="col-2 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          TRANSFER TYPE
        </label>
        <select name="" id="" className="font-size-10 border py-1 rounded">
          <option value="">All</option>
        </select>
      </div>
      <div className="col-2 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          TRANSFER NAME
        </label>
        <select name="" id="" className="font-size-10 border py-1 rounded">
          <option value="">All</option>
        </select>
      </div>
      <div className="col-2 p-0 d-flex flex-column border p-1">
        <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
          ENTER NAME
        </label>
        <input
          type="text"
          placeholder="Enter Keyword"
          className="font-size-10 border py-1 rounded outline-0"
        />
      </div>
      <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
        <p className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer">
          Search
        </p>
      </div>
    </div>
  );
};
const FlightModalForm = () => {
  return (
    <>
      <div className="row px-2">
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            LOCATION TYPE
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Select Destination</option>
          </select>
        </div>
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            DESTINATION
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Delhi</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            FROM DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">1 Night</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            TO DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">1 Night</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            ---
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">All Entrance</option>
            <option value="">Default Entrance</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            SEARCH
          </label>
          <input
            type="text"
            placeholder="Search"
            className="font-size-10 border py-1 rounded outline-0"
          />
        </div>
        <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
          <p className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer">
            Search
          </p>
        </div>
      </div>
      <div className="row mt-2 justify-content-end px-2">
        <div className="col-2 p-0 d-flex justify-content-end">
          <button className="btn btn-success">Add New +</button>
        </div>
      </div>
      <div className="row mt-2">
        <form action="">
          <div className="col-12 p-0">
            <table className="table table-bordered table-striped">
              <thead className="border-0">
                <tr className="border-0">
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Monument Name
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Supplier Name
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Currency [ROE]
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Adult Cost
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Child Cost
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1 font-size-11">Delhi Red Fort</td>
                  <td className="p-1 font-size-11 text-center">Srikanth</td>
                  <td className="p-1 font-size-11 text-center">INR[1]</td>
                  <td className="p-1 font-size-11 text-center">13</td>
                  <td className="p-1 font-size-11 text-center">0</td>

                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};
const EnrouteModalForm = () => {
  return (
    <>
      <div className="row px-2">
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            LOCATION TYPE
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Select Destination</option>
          </select>
        </div>
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            DESTINATION
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Delhi</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            FROM DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">1 Night</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            TO DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">1 Night</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            ---
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">All Entrance</option>
            <option value="">Default Entrance</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            SEARCH
          </label>
          <input
            type="text"
            placeholder="Search"
            className="font-size-10 border py-1 rounded outline-0"
          />
        </div>
        <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
          <p className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer">
            Search
          </p>
        </div>
      </div>
      <div className="row mt-2 justify-content-end px-2">
        <div className="col-2 p-0 d-flex justify-content-end">
          <button className="btn btn-success">Add New +</button>
        </div>
      </div>
      <div className="row mt-2">
        <form action="">
          <div className="col-12 p-0">
            <table className="table table-bordered table-striped">
              <thead className="border-0">
                <tr className="border-0">
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Monument Name
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Supplier Name
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Currency [ROE]
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Adult Cost
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Child Cost
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1 font-size-11">Delhi Red Fort</td>
                  <td className="p-1 font-size-11 text-center">Srikanth</td>
                  <td className="p-1 font-size-11 text-center">INR[1]</td>
                  <td className="p-1 font-size-11 text-center">13</td>
                  <td className="p-1 font-size-11 text-center">0</td>

                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};
const RestaurantModalForm = () => {
  return (
    <>
      <div className="row px-2">
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            LOCATION TYPE
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Select Destination</option>
          </select>
        </div>
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            DESTINATION
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Delhi</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            FROM DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">1 Night</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            TO DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">1 Night</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            ---
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">All Entrance</option>
            <option value="">Default Entrance</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            SEARCH
          </label>
          <input
            type="text"
            placeholder="Search"
            className="font-size-10 border py-1 rounded outline-0"
          />
        </div>
        <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
          <p className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer">
            Search
          </p>
        </div>
      </div>
      <div className="row mt-2 justify-content-end px-2">
        <div className="col-2 p-0 d-flex justify-content-end">
          <button className="btn btn-success">Add New +</button>
        </div>
      </div>
      <div className="row mt-2">
        <form action="">
          <div className="col-12 p-0">
            <table className="table table-bordered table-striped">
              <thead className="border-0">
                <tr className="border-0">
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Monument Name
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Supplier Name
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Currency [ROE]
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Adult Cost
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Child Cost
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1 font-size-11">Delhi Red Fort</td>
                  <td className="p-1 font-size-11 text-center">Srikanth</td>
                  <td className="p-1 font-size-11 text-center">INR[1]</td>
                  <td className="p-1 font-size-11 text-center">13</td>
                  <td className="p-1 font-size-11 text-center">0</td>

                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};
const TransportationModalForm = () => {
  return (
    <>
      <div className="row px-2">
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            LOCATION TYPE
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Select Destination</option>
          </select>
        </div>
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            DESTINATION
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Delhi</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            FROM DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">1 Night</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            TO DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">1 Night</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            ---
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">All Entrance</option>
            <option value="">Default Entrance</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            SEARCH
          </label>
          <input
            type="text"
            placeholder="Search"
            className="font-size-10 border py-1 rounded outline-0"
          />
        </div>
        <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
          <p className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer">
            Search
          </p>
        </div>
      </div>
      <div className="row mt-2 justify-content-end px-2">
        <div className="col-2 p-0 d-flex justify-content-end">
          <button className="btn btn-success">Add New +</button>
        </div>
      </div>
      <div className="row mt-2">
        <form action="">
          <div className="col-12 p-0">
            <table className="table table-bordered table-striped">
              <thead className="border-0">
                <tr className="border-0">
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Monument Name
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Supplier Name
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Currency [ROE]
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Adult Cost
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Child Cost
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1 font-size-11">Delhi Red Fort</td>
                  <td className="p-1 font-size-11 text-center">Srikanth</td>
                  <td className="p-1 font-size-11 text-center">INR[1]</td>
                  <td className="p-1 font-size-11 text-center">13</td>
                  <td className="p-1 font-size-11 text-center">0</td>

                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};
const TrainModalForm = () => {
  return (
    <>
      <div className="row px-2">
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            LOCATION TYPE
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Select Destination</option>
          </select>
        </div>
        <div className="col-1 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            DESTINATION
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">Delhi</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            FROM DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">1 Night</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            TO DAY
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">1 Night</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            ---
          </label>
          <select name="" id="" className="font-size-10 border py-1 rounded">
            <option value="">All Entrance</option>
            <option value="">Default Entrance</option>
          </select>
        </div>
        <div className="col-2 p-0 d-flex flex-column border p-1">
          <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
            SEARCH
          </label>
          <input
            type="text"
            placeholder="Search"
            className="font-size-10 border py-1 rounded outline-0"
          />
        </div>
        <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
          <p className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer">
            Search
          </p>
        </div>
      </div>
      <div className="row mt-2 justify-content-end px-2">
        <div className="col-2 p-0 d-flex justify-content-end">
          <button className="btn btn-success">Add New +</button>
        </div>
      </div>
      <div className="row mt-2">
        <form action="">
          <div className="col-12 p-0">
            <table className="table table-bordered table-striped">
              <thead className="border-0">
                <tr className="border-0">
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Monument Name
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Supplier Name
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Currency [ROE]
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Adult Cost
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Child Cost
                  </th>
                  <th className="border-0 font-size-10 p-0 p-1 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1 font-size-11">Delhi Red Fort</td>
                  <td className="p-1 font-size-11 text-center">Srikanth</td>
                  <td className="p-1 font-size-11 text-center">INR[1]</td>
                  <td className="p-1 font-size-11 text-center">13</td>
                  <td className="p-1 font-size-11 text-center">0</td>

                  <td className="p-1 font-size-11 text-center d-felx">
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Select
                    </p>
                    <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                      Edit Price
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};

export {
  ItenararyModalForm,
  HotelModalForm,
  GuideModalForm,
  ActivityModalForm,
  MonumentModalForm,
  TransferModalForm,
  FlightModalForm,
  EnrouteModalForm,
  RestaurantModalForm,
  TransportationModalForm,
  TrainModalForm,
};
