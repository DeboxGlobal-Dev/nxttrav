import React, { useState } from "react";
import Editor from "../../../helper/Editor";

const itenararyJson = [
  {
    id: "1",
    Title: "Rajsthan",
    Text: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti hic voluptate minima doloru qui architecto dolor, porro quas incidunt",
  },
  {
    id: "2",
    Title: "Jaipur",
    Text: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti hic voluptate minima doloru qui architecto dolor, porro quas incidunt",
  },
  {
    id: "3",
    Title: "Delhi",
    Text: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti hic voluptate minima doloru qui architecto dolor, porro quas incidunt",
  },
  {
    id: "4",
    Title: "Gurgaon",
    Text: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti hic voluptate minima doloru qui architecto dolor, porro quas incidunt",
  },
  {
    id: "5",
    Title: "Agra",
    Text: "Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti hic voluptate minima doloru qui architecto dolor, porro quas incidunt",
  },
];

const ItenararyModalForm = () => {
  const [formData, setFormData] = useState({
    Language: "",
  });

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const handleItenararyEditor = (content) => {};

  const handleBackTitle = () => {
    setSelectedValue("");
  };

  return (
    <>
      {selectedValue == "" && (
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Search Keyword"
              className="form-control"
            />
          </div>
          <div className="col-12 mt-3">
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
                {itenararyJson?.map((value) => {
                  return (
                    <tr key={value?.id}>
                      <td className="p-1 font-size-11 text-center">
                        {value?.id}
                      </td>
                      <td className="p-1 font-size-11">
                        <p className="m-0 font-weight-bold">{value?.Title}</p>
                        <p>{value?.Text}</p>
                      </td>
                      <td className="p-1 font-size-11 text-center">
                        <select
                          name="Language"
                          value={formData?.Language}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="">Select</option>
                          <option value="1">English</option>
                          <option value="2">Hindi</option>
                        </select>
                      </td>
                      <td className="p-1 font-size-11 text-center">
                        <p
                          className="border px-3 py-1 bg-success rounded m-0 cursor-pointer"
                          onClick={() => handleSelect(value)}
                        >
                          Select
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {selectedValue != "" && (
        <div className="row row-gap-3 position-relative">
          <div className="col-12">
            <input
              type="text"
              name="Title"
              value={selectedValue?.Title}
              className="form-control"
            />
          </div>
          <div className="col-12">
            <Editor
              heightValue="100px"
              handleChangeEditor={handleItenararyEditor}
              initialValue={selectedValue == "" ? "" : selectedValue?.Text}
            />
          </div>
          <button
            className="position-absolute btn yellow-bg width-70 border rounded right-160 bottom-92 px-0"
            onClick={handleBackTitle}
          >
            Back
          </button>
        </div>
      )}
    </>
  );
};
const HotelModalForm = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [addNew, setAddNew] = useState(false);
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
  const [addFormData, setAddFormData] = useState({
    HotelChain:'',
    HotelAmenities:'',
    HotelName:'',
    RoomType:'',
    Destination:'',
    Supplier:'',
    HotelCategory:'',
    Country:'',
    State:'',
    City:'',
    PinCode:'',
    HotelLink:'',
    Address:'',
    WeekendDays:'',
    Gstn:'',
    Days:'',
    HotelStatus:'',
    CheckInTime:'',
    CheckOutTime:'',
    HotelConfirmation:'',
    Policy:'',
    TandC:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    setIsSearching(true);
  };

  const handleAddDataChange = (e) =>{
    const {name, value} = useState();
    setAddFormData({...addFormData, [naem]:value});
  }

  return (
    <>
      {!addNew && (
        <div className="position-relative">
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
                <option value="1">India</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DESTINATION
              </label>
              <select
                name="Destinations"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.Destinations}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">Delhi</option>
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
                <option value="1">1 Star</option>
                <option value="2">2 Star</option>
                <option value="3">3 Star</option>
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
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">All</option>
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
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">All</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                FROM
              </label>
              <select
                name="From"
                id=""
                value={formData?.From}
                onChange={handleChange}
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Nigh-1 Delhi</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                TO
              </label>
              <select
                name="To"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.To}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">Night-1 Delhi</option>
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
                value={formData?.HotelName}
                onChange={handleChange}
              />
            </div>
            <div className="col-1 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                MEAL TYPE
              </label>
              <select
                name="MealType"
                id=""
                className="border rounded font-size-10 py-1"
                value={formData?.MealType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">All</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
              <p
                onClick={handleSearch}
                className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer"
              >
                Search
              </p>
            </div>
          </div>
          {isSearching && (
            <>
              <div className="row mt-2 justify-content-end px-2">
                <div className="col-2 p-0 d-flex justify-content-end">
                  <button
                    className="btn btn-success font-size-10"
                    onClick={() => setAddNew(true)}
                  >
                    Add New +
                  </button>
                </div>
              </div>
              <div className="row mt-2">
                <form action="">
                  <div className="col-12 p-0">
                    <table className="table table-bordered table-striped">
                      <thead className="border-0">
                        <tr className="border-0">
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Hotel
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Supplier
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Category/Hotel Type
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Room Type/Meal
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Tariff Type
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Rate Validate
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Double
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Action
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-1 font-size-11">Delhi Red Fort</td>
                          <td className="p-1 font-size-11 text-center">
                            Srikanth
                          </td>
                          <td className="p-1 font-size-11 text-center">
                            INR[1]
                          </td>
                          <td className="p-1 font-size-11 text-center">13</td>
                          <td className="p-1 font-size-11 text-center">0</td>
                          <td className="p-1 font-size-11 text-center">0</td>
                          <td className="p-1 font-size-11 text-center">0</td>

                          <td className="p-1 font-size-11 text-center width-80">
                            <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                              Select
                            </p>
                          </td>
                          <td className="p-1 font-size-11 text-center width-100">
                            <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10 d-flex justify-content-center">
                              + Add Price
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      )}
      {addNew && (
        <div>
          <div className="row row-gap-2">
            <div className="col-3">
              <label className="m-0">HOTEL CHAIN</label>
              <select name="HotelChain" id="" className="form-input-5" value={addFormData?.HotelChain} onChange={handleAddDataChange}>
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">HOTEL AMENITIES</label>
              <select name="HotelAmenities" id="" className="form-input-5" value={addFormData?.HotelAmenities} onChange={handleAddDataChange}>
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">HOTEL NAME</label>
              <input
                type="text"
                className="form-input-5"
                placeholder="Hotel Name"
                name="HotelName"
                value={addFormData?.HotelName}  
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label className="m-0">ROOM TYPE</label>
              <select name="RoomType" id="" className="form-input-5" value={addFormData?.RoomType} onChange={handleAddDataChange}>
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">DESTINATION</label>
              <select name="Destination" id="" className="form-input-5" value={addFormData?.Destination}  onChange={handleAddDataChange}>
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">SUPPLIER</label>
              <select name="Supplier" id="" className="form-input-5" value={addFormData?.Supplier} onChange={handleAddDataChange}>
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">HOTEL CATEGORY</label>
              <select name="HotelCategory" id="" className="form-input-5" value={addFormData?.HotelCategory} onChange={handleAddDataChange}>
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">COUNTRY</label>
              <select name="Country" id="" className="form-input-5" value={addFormData?.Country} onChange={handleAddDataChange}>
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">STATE</label>
              <select name="State" id="" className="form-input-5" value={addFormData?.State} onChange={handleAddDataChange}>
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">CITY</label>
              <select name="City" id="" className="form-input-5" value={addFormData?.City} onChange={handleAddDataChange}>
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">PIN CODE</label>
              <input
                type="text"
                className="form-input-5"
                placeholder="Pin Code"
                name="PinCode"
                value={addFormData?.PinCode}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label className="m-0">HOTEL LINK</label>
              <input
                type="text"
                className="form-input-5"
                placeholder="Hotel Link"
                name="HotelLink"
                value={addFormData?.HotelLink}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label className="m-0">ADDRESS</label>
              <input
                type="text"
                className="form-input-5"
                placeholder="Address"
                name="Address"
                value={addFormData?.Address}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label className="m-0">WEEKEND DAYS</label>
              <input
                type="text"
                className="form-input-5"
                placeholder="Weekend Days"
                name="WeekendDays"
                value={addFormData?.WeekendDays}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label className="m-0">GSTN</label>
              <input type="text" className="form-input-5" placeholder="GSTN" name="Gstn" value={addFormData?.Gstn} onChange={handleAddDataChange}/>
            </div>
            <div className="col-3">
              <label className="m-0">DAYS</label>
              <input type="text" className="form-input-5" placeholder="GSTN" name="Days" value={addFormData?.Days} onChange={handleAddDataChange}/>
            </div>
            <div className="col-3">
              <label className="m-0">HOTEL STATUS</label>
              <input type="text" className="form-input-5" placeholder="GSTN" name="HotelStatus" value={addFormData?.HotelStatus} onChange={handleAddDataChange}/>
            </div>
            <div className="col-3">
              <label className="m-0">CHECK IN TIME</label>
              <input type="text" className="form-input-5" placeholder="GSTN" name="CheckInTime" value={addFormData?.CheckInTime} onChange={handleAddDataChange}/>
            </div>
            <div className="col-3">
              <label className="m-0">CHECK OUT TIME</label>
              <input type="text" className="form-input-5" placeholder="GSTN" name="CheckOutTime" value={addFormData?.CheckOutTime} onChange={handleAddDataChange}/>
            </div>
          </div>
          <div className="row mt-3 row-gap-2">
            <div className="d-flex gap-5 pb-1">
              <label className="m-0">CONTACT PERSON</label>
              <p className="m-0 bg-primary px-1 rounded cursor-pointer">
                +ADD MORE
              </p>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-2">
                  <select name="" id="" className="form-input-5">
                    <option value="">Operations</option>
                  </select>
                </div>
                <div className="col-2">
                  <input
                    type="text"
                    placeholder="Contact Person"
                    className="form-input-5"
                  />
                </div>
                <div className="col-2">
                  <input
                    type="text"
                    placeholder="Designation"
                    className="form-input-5"
                  />
                </div>
                <div className="col-3">
                  <div className="row">
                    <div className="col-3">
                      <input
                        type="text"
                        placeholder="+91"
                        className="form-input-5"
                      />
                    </div>
                    <div className="col-9 pl-0">
                      <input
                        type="text"
                        placeholder="9887878770"
                        className="form-input-5"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <input
                    type="text"
                    placeholder="exampl@gmail.com"
                    className="form-input-5"
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <label className="m-0">HOTEL INFORMATION</label>
              <textarea type="textarea" className="form-input-5 h-auto" />
            </div>
            <div className="col-12">
              <label className="m-0">POLICY</label>
              <textarea type="textarea" className="form-input-5 h-auto" />
            </div>
            <div className="col-12">
              <label className="m-0">T&C</label>
              <textarea type="textarea" className="form-input-5 h-auto" name="TandC" value={addFormData?.TandC} onChange={handleAddDataChange}/>
            </div>
            <button
              onClick={() => setAddNew(false)}
              className="btn border yellow-bg position-absolute bottom-83 right-160 width-70"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};
const GuideModalForm = () => {
  const [addNew, setAddNew] = useState(false);

  const [formData, setFormData] = useState({
    ServiceType: "",
    DestinationType: "",
    Destination: "",
    PaxRange: "",
    Unknown: "",
    FromDay: "",
    ToDay: "",
    GuideService: "",
    MealType: "",
  });
  const [addFormData, setAddFormData] = useState({
    GuideService:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDataChange = (e) =>{
    const {name, value} = e.target;
    setAddFormData({...addFormData, [name]:value});
  }

  return (
    <>
      {!addNew && (
        <div>
          <div className="row px-2">
            <div className="col-1 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                SERVICE TYPE
              </label>
              <select
                name="ServiceType"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.ServiceType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">Agent</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DESTINATION TYPE
              </label>
              <select
                name="DestinationType"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.DestinationType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">Delhi</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DESTINATION
              </label>
              <select
                name="Destination"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.Destination}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">All</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                PAX RANGE
              </label>
              <select
                name="PaxRange"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.PaxRange}
                onChange={handleChange}
              >
                <option value="">PaxRange</option>
                <option value="1">All</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                ---
              </label>
              <select
                name="Unknown"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.Unknown}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">All</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                FROM DAY
              </label>
              <select
                name="FromDay"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.FromDay}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">Nigh-1 Delhi</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                TO DAY
              </label>
              <select
                name="ToDay"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.ToDay}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">Night-1 Delhi</option>
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
                name="GuideService"
                value={formData?.GuideService}
                onChange={handleChange}
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
                value={formData?.MealType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">All</option>
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
              <button
                className="btn btn-success font-size-10"
                onClick={() => setAddNew(true)}
              >
                Add New +
              </button>
            </div>
          </div>
          <div className="row mt-2">
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
          </div>
        </div>
      )}

      {addNew && (
        <div>
          <div className="row position-relative">
            <div className="col-12">
              <label htmlFor="">GUIDE SERVICE</label>
              <input
                type="text"
                placeholder="Guide Service"
                className="form-input-5"
                name="GuideService"
                value={addFormData?.GuideService}
                onChange={handleAddDataChange}
              />
            </div>
            <button
              className="btn width-70 position-absolute yellow-bg right-160 bottom-92 border"
              onClick={() => setAddNew(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};
const ActivityModalForm = () => {
  const [addNew, setAddNew] = useState(false);
  const [formData, setFormData] = useState({
    DestinationType: "",
    Destination: "",
    Date: "",
    Type: "",
    Unknown: "",
    ActivityName: "",
  });
  const [addFormData, setAddFormData] = useState({
    Type:'',
    ActivityName:'',
    Destination:'',
    Default:'',
    SelectSupplier:'',
    Status:'',
    Description:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDataChange = (e) =>{
    const {name, value} = e.target;
    setAddFormData({...addFormData, [name]:value});
  }
  return (
    <>
      {!addNew && (
        <div>
          <div className="row px-2">
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DESTINATION TYPE
              </label>
              <select
                name="DestinationType"
                value={formData?.DestinationType}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Destination</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DESTINATION
              </label>
              <select
                name="Destination"
                value={formData?.Destination}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Delhi</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DATE
              </label>
              <input
                type="date"
                name="Date"
                value={formData?.Date}
                onChange={handleChange}
                className="font-size-10 border py-1 rounded"
              />
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                Type
              </label>
              <select
                name="Type"
                value={formData?.Type}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Activity</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                ---
              </label>
              <select
                name="Unknown"
                id=""
                value={formData?.Unknown}
                onChange={handleChange}
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">All Activity</option>
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
                name="ActivityName"
                value={formData?.ActivityName}
                onChange={handleChange}
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
              <button
                className="btn btn-success font-size-10"
                onClick={() => setAddNew(true)}
              >
                Add New +
              </button>
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
        </div>
      )}
      {addNew && (
        <div>
          <div className="row row-gap-2 position-relative">
            <div className="col-3">
              <label htmlFor="" className="m-0">
                TYPE
              </label>
              <select name="Type" id="" className="form-input-5" value={addFormData?.Type} onChange={handleAddDataChange}>
                <option value="">Select</option>
              </select>
            </div>
            <div className="col-3">
              <label htmlFor="" className="m-0">
                ACTIVITY NAME
              </label>
              <select name="ActivityName" id="" className="form-input-5" value={addFormData?.ActivityName} onChange={handleAddDataChange}>
                <option value="">Select</option>
              </select>
            </div>
            <div className="col-3">
              <label htmlFor="" className="m-0">
                DESTINATION
              </label>
              <select name="Destination" id="" className="form-input-5" value={addFormData?.Destination} onChange={handleAddDataChange}>
                <option value="">Select</option>
              </select>
            </div>
            <div className="col-3">
              <label htmlFor="" className="m-0">
                DEFAULT
              </label>
              <select name="Default" id="" className="form-input-5" value={addFormData?.Default} onChange={handleAddDataChange}>
                <option value="">Select</option>
              </select>
            </div>
            <div className="col-3">
              <label htmlFor="" className="m-0">
                SELECT SUPPLIER
              </label>
              <select name="SelectSupplier" id="" className="form-input-5" value={addFormData?.SelectSupplier} onChange={handleAddDataChange}>
                <option value="">Select</option>
              </select>
            </div>
            <div className="col-3">
              <label htmlFor="" className="m-0">
                STATUS
              </label>
              <select name="Status" id="" className="form-input-5" value={addFormData?.Status} onChange={handleAddDataChange}>
                <option value="">Select</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="" className="m-0">
                DESCRIPTION
              </label>
              <textarea name="Description" id="" className="form-input-5 h-100" value={addFormData?.Description} onChange={handleAddDataChange}></textarea>
            </div>
            <button
              className="btn border yellow-bg position-absolute right-160 width-70 bottom-92"
              onClick={() => setAddNew(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};
const MonumentModalForm = () => {
  const [addNew, setAddNew] = useState(false);
  const [formData, setFormData] = useState({
    LocationType: "",
    Destination: "",
    FromDay: "",
    ToDay: "",
    Unknown: "",
    Search: "",
  });
  const [addFormData , setAddFormData] = useState({
    EntranceName:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDataChange = (e) =>{
    const {name, value} = e.target;
    setAddFormData({...addFormData, [name]:value});
  }

  return (
    <>
      {!addNew && (
        <div>
          <div className="row px-2">
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                LOCATION TYPE
              </label>
              <select
                name="LocationType"
                value={formData?.LocationType}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Destination</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DESTINATION
              </label>
              <select
                name="Destination"
                value={formData?.Destination}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Delhi</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                FROM DAY
              </label>
              <select
                name="FromDay"
                value={formData?.FromDay}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">1 Night</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                TO DAY
              </label>
              <select
                name="ToDay"
                value={formData?.ToDay}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">1 Night</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                ---
              </label>
              <select
                name="Unknown"
                value={formData?.Unknown}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">All Entrance</option>
                <option value="2">Default Entrance</option>
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
                name="Search"
                value={formData.Search}
                onChange={handleChange}
              />
            </div>
            <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
              <p className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer">
                Search
              </p>
            </div>
          </div>
          <div className="row mt-2 justify-content-end px-2">
            <div className="col-2 p-0 d-flex justify-content-end gap-4">
              <button className="btn btn-success font-size-10">
                Select All
              </button>
              <button
                className="btn btn-success font-size-10"
                onClick={() => setAddNew(true)}
              >
                Add New +
              </button>
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
                      <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1 font-size-11">Delhi Red Fort</td>
                      <td className="p-1 font-size-11 text-center">Srikanth</td>
                      <td className="p-1 font-size-11 text-center">INR[1]</td>
                      <td className="p-1 font-size-11 text-center">13</td>
                      <td className="p-1 font-size-11 text-center">0</td>

                      <td className="p-1 font-size-11 text-center width-80">
                        <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                          Select
                        </p>
                      </td>
                      <td className="p-1 font-size-11 text-center width-100">
                        <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10 d-flex justify-content-center">
                          Edit Price
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      )}
      {addNew && (
        <div>
          <div className="row position-relative">
            <div className="col-12">
              <label htmlFor="" className="">
                ENTRANCE NAME
              </label>
              <input
                type="text"
                placeholder="Entrance Name"
                className="form-input-5"
                name="EntranceName"
                value={addFormData?.EntranceName}
                onChange={handleAddDataChange}
              />
            </div>
            <button
              className="btn position-absolute width-70 right-160 bottom-92 border yellow-bg"
              onClick={() => setAddNew(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};
const TransferModalForm = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const [formData, setFormData] = useState({
    Unknown: "",
    FromDestination: "",
    ToDestination: "",
    TransferType: "",
    TransferName: "",
    EnterName: "",
  });
  const [addFormData, setAddFormData] = useState({
    TrnasferName:'',
    VehicleType:'',
    TransferType:'',
    VehicleMode:''
  }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDataChange = (e) =>{
    const {name, value} = e.target;
    setAddFormData({...formData, [name]:value});
  }

  return (
    <>
      {!addNew && (
        <div>
          <div className="row px-2">
            <div className="col-1 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                --
              </label>
              <select
                name="Unknown"
                value={formData?.Unknown}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Destination</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                FROM DESTINATION
              </label>
              <select
                name="FromDestination"
                value={formData?.FromDestination}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Delhi</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                TO DESTINATION
              </label>
              <select
                name="ToDestination"
                value={formData?.ToDestination}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">All</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                TRANSFER TYPE
              </label>
              <select
                name="TransferType"
                value={formData?.TransferType}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">All</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                TRANSFER NAME
              </label>
              <select
                name="TransferName"
                value={formData?.TransferName}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
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
                name="EnterName"
                value={formData?.EnterName}
                onChange={handleChange}
              />
            </div>
            <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
              <p
                className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer"
                onClick={() => setIsSearching(true)}
              >
                Search
              </p>
            </div>
          </div>
          {isSearching && (
            <div className="mt-4">
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-success border font-size-10"
                  onClick={() => setAddNew(true)}
                >
                  {" "}
                  + Add New
                </button>
              </div>
              <div className="row mt-1">
                <div className="col">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th className="p-0 text-center font-size-12 py-1">
                          Supplier Name
                        </th>
                        <th className="p-0 text-center font-size-12 py-1">
                          Transfer Name
                        </th>
                        <th className="p-0 text-center font-size-12 py-1">
                          Transfer Type
                        </th>
                        <th className="p-0 text-center font-size-12 py-1">
                          Vehicle Type/Name
                        </th>
                        <th className="p-0 text-center font-size-12 py-1">
                          Vehicle Cost
                        </th>
                        <th className="p-0 text-center font-size-12 py-1">
                          No Of Vehicle
                        </th>
                        <th className="p-0 text-center font-size-12 py-1">
                          Pax Slab
                        </th>
                        <th className="p-0 text-center font-size-12 py-1">
                          <button className="btn py-1 px-2 bg-success font-size-10">
                            Select All
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {addNew && (
        <div>
          <div className="row row-gap-2 mt-2 position-relative">
            <div className="col-3">
              <label htmlFor="" className="m-0">
                TRANSFER NAME
              </label>
              <input
                type="text"
                placeholder="Transfer Name"
                className="form-input-5"
                name="TrnasferName"
                value={addFormData?.TrnasferName}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label htmlFor="" className="m-0">
                VEHICLE TYPE
              </label>
              <select name="VehicleType" id="" className="form-input-5" value={addFormData?.VehicleType} onChange={handleAddDataChange}>
                <option value="">All Vehicle Type</option>
              </select>
            </div>
            <div className="col-3">
              <label htmlFor="" className="m-0">
                TRANSFER TYPE
              </label>
              <select name="TransferType" id="" className="form-input-5" value={addFormData?.TransferType} onChange={handleAddDataChange}>
                <option value="">Arrival</option>
              </select>
            </div>
            <div className="col-3">
              <label htmlFor="" className="m-0">
                VEHICLE MODE
              </label>
              <select name="VehicleMode" id="" className="form-input-5" value={addFormData?.VehicleMode} onChange={handleAddDataChange}>
                <option value="">All Vehicle</option>
              </select>
            </div>
            <button
              className="btn border width-70 yellow-bg position-absolute right-160 bottom-92"
              onClick={() => setAddNew(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};
const FlightModalForm = () => {
  const [addNew, setAddNew] = useState(false);
  const [formData, setFormData] = useState({
    Destination: "",
    DepartureFrom: "",
    ArrivalTo: "",
    FlightType: "",
    Search: "",
  });

  const [addFormData, setAddFormData] = useState({
      FlightName:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddChange = (e) =>{
    const {name, value} = e.target;
    setAddFormData({...addFormData, [name]:value});
  }

  return (
    <>
      {!addNew && (
        <div>
          <div className="row px-2">
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                ----
              </label>
              <select
                name="Destination"
                value={formData?.Destination}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select Destination</option>
                <option value="1">All Destination</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DEPARTURE FROM
              </label>
              <select
                name="DepartureFrom"
                value={formData?.DepartureFrom}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Delhi</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                ARRIVAL TO
              </label>
              <select
                name="ArrivalTo"
                value={formData?.ArrivalTo}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">1 Night</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                FLIGHT TYPE
              </label>
              <select
                name="FlightType"
                value={formData?.FlightType}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">1 Night</option>
              </select>
            </div>
            <div className="col-3 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                SEARCH
              </label>
              <input
                type="text"
                placeholder="Search"
                className="font-size-10 border py-1 rounded outline-0"
                name="Search"
                value={formData?.Search}
                onChange={handleChange}
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
              <button
                className="btn btn-success font-size-10"
                onClick={() => setAddNew(true)}
              >
                Add New +
              </button>
            </div>
          </div>
          <div className="row mt-2">
            <form action="">
              <div className="col-12 p-0">
                <table className="table table-bordered table-striped">
                  <thead className="border-0">
                    <tr className="border-0">
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Flight Name
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Supplier Name
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Flight Number
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Flight Class
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Currency[ROE]
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Adult Cost
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Child Cost
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1 font-size-11">Delhi Red Fort</td>
                      <td className="p-1 font-size-11 text-center">Srikanth</td>
                      <td className="p-1 font-size-11 text-center">INR[1]</td>
                      <td className="p-1 font-size-11 text-center">13</td>
                      <td className="p-1 font-size-11 text-center">0</td>
                      <td className="p-1 font-size-11 text-center">0</td>
                      <td className="p-1 font-size-11 text-center">0</td>

                      <td className="p-1 font-size-11 text-center width-80">
                        <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                          Select
                        </p>
                      </td>
                      <td className="p-1 font-size-11 text-center width-100">
                        <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10 d-flex justify-content-center">
                          Edit Price
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      )}
      {addNew && (
        <div>
          <div className="row mt-2 position-relative">
            <div className="col-12">
              <label htmlFor="">FLIGHT NAME</label>
              <input
                type="text"
                className="form-input-5"
                placeholder="Flight Name"
                name="FlightName"
                value={addFormData?.FlightName}
                onChange={handleAddChange}
              />
            </div>
            <button
              className="btn border yellow-bg width-70 position-absolute right-160 bottom-92"
              onClick={() => setAddNew(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};
const EnrouteModalForm = () => {
  const [addNew, setAddNew] = useState(false);
  const [formData, setFormData] = useState({
    Unknown: "",
    Destination: "",
    Default: "",
  });

  const [addFormData, setAddFormData] = useState({
    EnrouteName:'',
    Currency:'',
    PerPaxCost:'',
    Destination:'',
    Default:'',
    Status:'',
    Description:''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleAddDataChange = (e) =>{
    const {name, value} = e.target;
    setAddFormData({...addFormData, [name]:value});
  }

  return (
    <>
      {!addNew && (
        <div>
          <div className="row px-2">
            <div className="col-4 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                ----
              </label>
              <select
                name="Unknown"
                value={formData?.Unknown}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select Destination</option>
                <option value="1">All Destination</option>
              </select>
            </div>
            <div className="col-4 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DESTINATION
              </label>
              <select
                name="Destination"
                value={formData?.Destination}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Delhi</option>
              </select>
            </div>
            <div className="col-3 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DEFAULT
              </label>
              <select
                name="Default"
                value={formData?.Default}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Default Enroute</option>
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
              <button
                className="btn btn-success font-size-10"
                onClick={() => setAddNew(true)}
              >
                Add New +
              </button>
            </div>
          </div>
          <div className="row mt-2">
            <form action="">
              <div className="col-12 p-0">
                <table className="table table-bordered table-striped">
                  <thead className="border-0">
                    <tr className="border-0">
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Enroute Name
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Pax Cost
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1 font-size-11 text-center">13</td>
                      <td className="p-1 font-size-11 text-center">0</td>

                      <td className="p-1 font-size-11 text-center width-80">
                        <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                          Select
                        </p>
                      </td>
                      <td className="p-1 font-size-11 text-center width-100">
                        <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10 d-flex justify-content-center">
                          Edit Price
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      )}

      {addNew && (
        <div>
          <div className="row row-gap-2 position-relative">
            <div className="col-3">
              <label htmlFor="" className="m-0">
                EROUTE NAME
              </label>
              <input
                type="text"
                placeholder="Enroute Name"
                className="form-input-5"
                name="EnrouteName"
                value={addFormData?.EnrouteName}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label htmlFor="" className="m-0">
                Currency
              </label>
              <select name="Currency" id="" className="form-input-5" value={addFormData?.Currency} onChange={handleAddDataChange}>
                <option value="">INR</option>
                <option value="">DINAR</option>
              </select>
            </div>
            <div className="col-3">
              <label htmlFor="" className="m-0">
                PER PAX COST
              </label>
              <input
                type="text"
                className="form-input-5"
                placeholder="Per pax cost"
                name="PerPaxCost"
                value={addFormData?.PerPaxCost}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label htmlFor="" className="m-0">
                Destination
              </label>
              <select name="Destination" id="" className="form-input-5" value={addFormData?.Destination} onChange={handleAddDataChange}>
                <option value="">Noida</option>
                <option value="">Delhi</option>
              </select>
            </div>
            <div className="col-3">
              <label htmlFor="" className="m-0">
                Default
              </label>
              <select name="Default" id="" className="form-input-5" value={addFormData?.Default} onChange={handleAddDataChange}>
                <option value="">Noida</option>
                <option value="">Delhi</option>
              </select>
            </div>
            <div className="col-3">
              <label htmlFor="" className="m-0">
                Status
              </label>
              <select name="Status" id="" className="form-input-5" value={addFormData?.Status} onChange={handleAddDataChange}>
                <option value="">Active</option>
                <option value="">InActive</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="" className="m-0">
                DESCRIPTION
              </label>
              <textarea name="Description" id="" className="form-input-5 h-100" value={addFormData?.Description} onChange={handleAddDataChange}></textarea>
            </div>
            <button
              className="btn border yellow-bg width-70 position-absolute right-160 bottom-92"
              onClick={() => setAddNew(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};
const RestaurantModalForm = () => {
  const [addNew, setAddNew] = useState(false);
  const [formData, setFormData] = useState({
    LocationType: "",
    Destination: "",
    Search: "",
  });

  const [addFormData, setAddFormData] = useState({
    RestaurantName:'',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleAddDataChange = (e) =>{
    const {name, value} = e.target;
    setAddFormData({...addFormData, [name]:value});
  }
  return (
    <>
      {!addNew && (
        <div>
          <div className="row px-2">
            <div className="col-3 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                LOCATION TYPE
              </label>
              <select
                name="LocationType"
                value={formData?.LocationType}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">India</option>
              </select>
            </div>
            <div className="col-3 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DESTINATION
              </label>
              <select
                name="Destination"
                value={formData?.Destination}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Delhi</option>
              </select>
            </div>
            <div className="col-5 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                SEARCH
              </label>
              <input
                type="text"
                placeholder="Search"
                className="font-size-10 border py-1 rounded outline-0"
                name="Search"
                value={formData?.Search}
                onChange={handleChange}
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
              <button
                className="btn btn-success font-size-10"
                onClick={() => setAddNew(true)}
              >
                Add New +
              </button>
            </div>
          </div>
          <div className="row mt-2">
            <form action="">
              <div className="col-12 p-0">
                <table className="table table-bordered table-striped">
                  <thead className="border-0">
                    <tr className="border-0">
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Restaurant Name
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
                      <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1 font-size-11">Delhi Red Fort</td>
                      <td className="p-1 font-size-11 text-center">Srikanth</td>
                      <td className="p-1 font-size-11 text-center">INR[1]</td>
                      <td className="p-1 font-size-11 text-center">13</td>
                      <td className="p-1 font-size-11 text-center">0</td>

                      <td className="p-1 font-size-11 text-center">
                        <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                          Select
                        </p>
                      </td>
                      <td className="p-1 font-size-11 text-center">
                        <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10 d-flex justify-content-center">
                          Edit Price
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      )}

      {addNew && (
        <div>
          <div className="row mt-2 position-relative">
            <div className="col-12">
              <label htmlFor="">RESTAURANT NAME</label>
              <input
                type="text"
                placeholder="Restaurant Name"
                className="form-input-5"
                name="RestaurantName"
                value={addFormData?.RestaurantName}
                onChange={handleAddDataChange}
              />
            </div>
            <button
              className="btn border yellow-bg width-70 position-absolute right-160 bottom-92"
              onClick={() => setAddNew(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};
const TransportationModalForm = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const [formData, setFormData] = useState({
    From: "",
    To: "",
    Uknown: "",
    FromDestination: "",
    ToDestination: "",
    TransferType: "",
    Transportation: "",
    CostType: "",
    EnterName: "",
  });

  const [addFormData,setAddFormData] = useState({
    TransportationName:'',
    VehicleType:'',
    TransportationType:'',
    VehicleModel:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    setIsSearching(true);
  };

  const handleAddDataChange = (e) =>{
    const {name, value} = e.target;
    setAddFormData({...addFormData, [name]:value});
  }

  return (
    <>
      {!addNew && (
        <div className="position-relative">
          <div className="row px-2">
            <div className="col-1 p-0 d-flex flex-column justify-content-between border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                FROM
              </label>
              <select
                name="SelectDestination"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.From}
                onChange={handleChange}
              >
                <option value="">Destination</option>
                <option value="1">India</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column justify-content-between border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                To
              </label>
              <select
                name="Destinations"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.To}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">Delhi</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column justify-content-between border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                ----
              </label>
              <select
                name="StartRating"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.Unknown}
                onChange={handleChange}
              >
                <option value="">Select Destination</option>
                <option value="1">Noida</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column justify-content-between border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                FROM DESTINAION
              </label>
              <select
                name="HotelType"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.FromDestination}
                onChange={handleChange}
              >
                <option value="">Noida</option>
                <option value="1">Delhi</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column justify-content-between border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                TO DESTINATION
              </label>
              <select
                name="RoomType"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.ToDestination}
                onChange={handleChange}
              >
                <option value="">Delhi</option>
                <option value="1">Noida</option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column justify-content-between border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                TRANSFER TYPE
              </label>
              <select
                name="From"
                id=""
                value={formData?.TransferType}
                onChange={handleChange}
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1"></option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column justify-content-between border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                TRANSPORTATION
              </label>
              <select
                name="To"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.Transportation}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1"></option>
              </select>
            </div>
            <div className="col-1 p-0 d-flex flex-column justify-content-between border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                Cost Type
              </label>
              <select
                name="To"
                id=""
                className="font-size-10 border py-1 rounded"
                value={formData?.CostType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1"></option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column justify-content-between border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                ENTER NAME
              </label>
              <input 
              type="text" 
              placeholder="Enter Keyword" 
              name="EnterName"
              value={formData?.EnterName} 
              onChange={handleChange}
              className="form-control"
              />
            </div>
            <div className="col-1 p-0 d-flex justify-content-center align-items-center  border">
              <p
                onClick={handleSearch}
                className="m-0 font-size-10 px-2 py-1 bg-success rounded cursor-pointer"
              >
                Search
              </p>
            </div>
          </div>
          {isSearching && (
            <>
              <div className="row mt-2 justify-content-end px-2">
                <div className="col-2 p-0 d-flex justify-content-end">
                  <button
                    className="btn btn-success font-size-10"
                    onClick={() => setAddNew(true)}
                  >
                    Add New +
                  </button>
                </div>
              </div>
              <div className="row mt-2">
                <form action="">
                  <div className="col-12 p-0">
                    <table className="table table-bordered table-striped">
                      <thead className="border-0">
                        <tr className="border-0">
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Supplier Name
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            TPT Name
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Vehicle Type
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Currency[ROE]
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Pax Capacity 
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Package Cost
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Days
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            No Of Vehicle
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            Pax Slab
                          </th>
                          <th className="border-0 font-size-10 p-0 p-1 text-center">
                            <p className="m-0 py-1 font-size-10 bg-success rounded">Select All</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-1 font-size-11">Delhi Red Fort</td>
                          <td className="p-1 font-size-11 text-center">
                            Srikanth
                          </td>
                          <td className="p-1 font-size-11 text-center">
                            INR[1]
                          </td>
                          <td className="p-1 font-size-11 text-center">13</td>
                          <td className="p-1 font-size-11 text-center">0</td>
                          <td className="p-1 font-size-11 text-center">0</td>
                          <td className="p-1 font-size-11 text-center">0</td>
                          <td className="p-1 font-size-11 text-center">0</td>

                          <td className="p-1 font-size-11 text-center width-80">
                            
                          </td>
                          <td className="p-1 font-size-11 text-center width-100">
                            
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      )}
      {addNew && (
        <div>
          <div className="row row-gap-2">
          <div className="col-3">
              <label className="m-0">TRANSPORTATION NAME</label>
              <input
                type="text"
                className="form-input-5"
                placeholder="Transportation Name"
                name="TransportationName"
                value={addFormData?.TransportationName}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label className="m-0">VEHICLE TYPE</label>
              <select name="VehicleType" id="" className="form-input-5" value={addFormData?.VehicleType} onChange={handleAddDataChange}>
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">TRANSPORTATION TYPE</label>
              <select name="TransportationType" id="" className="form-input-5" value={addFormData?.TransportationType} onChange={handleAddDataChange}>
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">VEHICLE MODEL</label>
              <select name="VehicleModel" id="" className="form-input-5" value={addFormData?.VehicleModel} onChange={handleAddDataChange}>
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>

            <button 
              className="btn border width-70 yellow-bg position-absolute right-160 bottom-83" 
              onClick={()=> setAddNew(false)}
            >Back</button>
          </div>
        </div>
      )}
    </>
  );
};
const TrainModalForm = () => {
  const [addNew, setAddNew] = useState(false);
  const [formData, setFormData] = useState({
    Destination: "",
    DepartureFrom: "",
    ArrivalTo: "",
    FlightType: "",
    Search: "",
  });
  const [addFormData, setAddFormData] = useState({
    TrainName:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDataChange = (e) =>{
    const {name, value} = e.target;
    setAddFormData({...addFormData, [name]:value});
  }

  return (
    <>
      {!addNew && (
        <div>
          <div className="row px-2">
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                ----
              </label>
              <select
                name="Destination"
                value={formData?.Destination}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select Destination</option>
                <option value="1">All Destination</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DEPARTURE FROM
              </label>
              <select
                name="DepartureFrom"
                value={formData?.DepartureFrom}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Delhi</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                ARRIVAL TO
              </label>
              <select
                name="ArrivalTo"
                value={formData?.ArrivalTo}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">1 Night</option>
              </select>
            </div>
            <div className="col-5 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                SEARCH
              </label>
              <input
                type="text"
                placeholder="Search"
                className="font-size-10 border py-1 rounded outline-0"
                name="Search"
                value={formData?.Search}
                onChange={handleChange}
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
              <button
                className="btn btn-success font-size-10"
                onClick={() => setAddNew(true)}
              >
                Add New +
              </button>
            </div>
          </div>
          <div className="row mt-2">
            <form action="">
              <div className="col-12 p-0">
                <table className="table table-bordered table-striped">
                  <thead className="border-0">
                    <tr className="border-0">
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Train Name
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Supplier Name
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Train Number
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Train Class
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Currency[ROE]
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Adult Cost
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Child Cost
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1 font-size-11">Delhi Red Fort</td>
                      <td className="p-1 font-size-11 text-center">Srikanth</td>
                      <td className="p-1 font-size-11 text-center">INR[1]</td>
                      <td className="p-1 font-size-11 text-center">13</td>
                      <td className="p-1 font-size-11 text-center">13</td>
                      <td className="p-1 font-size-11 text-center">13</td>
                      <td className="p-1 font-size-11 text-center">0</td>

                      <td className="p-1 font-size-11 text-center">
                        <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                          Select
                        </p>
                      </td>
                      <td className="p-1 font-size-11 text-center">
                        <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10 d-flex justify-content-center">
                          Edit Price
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      )}

      {addNew && (
        <div>
          <div className="row position-relative mt-2">
            <div className="col-12">
              <label htmlFor="" className="">
                TRAIN NAME
              </label>
              <input
                type="text"
                placeholder="Train Name"
                className="form-input-5"
                name="TrainName"
                value={addFormData?.TrainName}
                onChange={handleAddDataChange}
              />
            </div>
            <button
              className="btn yellow-bg border width-70 position-absolute right-160 bottom-92"
              onClick={() => setAddNew(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};
const AddOnsModalForm = () => {
  const [addNew, setAddNew] = useState(false);
  const [formData, setFormData] = useState({
    Destination: "",
    DestinationName: "",
    Type: "",
    AdditionalName: "",
  });

  const [addFormData, setAddFormData] = useState({
    AdditionalName:'',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDataChange = (e) =>{
    const {name, value} = e.target;

    setAddFormData({...addFormData, [name]:value});
  }

  return (
    <>
      {!addNew && (
        <div>
          <div className="row px-2">
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DESTINATION
              </label>
              <select
                name="Destination"
                value={formData?.Destination}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select Destination</option>
                <option value="1">All Destination</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                DESTINATION NAME
              </label>
              <select
                name="DestinationName"
                value={formData?.DestinationName}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">Delhi</option>
              </select>
            </div>
            <div className="col-2 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                TYPE
              </label>
              <select
                name="Type"
                value={formData?.Type}
                onChange={handleChange}
                id=""
                className="font-size-10 border py-1 rounded"
              >
                <option value="">Select</option>
                <option value="1">1 Night</option>
              </select>
            </div>
            <div className="col-5 p-0 d-flex flex-column border p-1">
              <label htmlFor="" className="m-0 font-size-9 font-weight-bold">
                ADDITIONAL NAME
              </label>
              <input
                type="text"
                placeholder="Search"
                className="font-size-10 border py-1 rounded outline-0"
                name="AdditionalName"
                value={formData?.AdditionalName}
                onChange={handleChange}
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
              <button
                className="btn btn-success font-size-10"
                onClick={() => setAddNew(true)}
              >
                Add New +
              </button>
            </div>
          </div>
          <div className="row mt-2">
            <form action="">
              <div className="col-12 p-0">
                <table className="table table-bordered table-striped">
                  <thead className="border-0">
                    <tr className="border-0">
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Type
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Service Name
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Supplier Name
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Cost Type
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Group Cost
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Adult Cost
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center">
                        Child Cost
                      </th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                      <th className="border-0 font-size-10 p-0 p-1 text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1 font-size-11">Delhi Red Fort</td>
                      <td className="p-1 font-size-11 text-center">Srikanth</td>
                      <td className="p-1 font-size-11 text-center">INR[1]</td>
                      <td className="p-1 font-size-11 text-center">13</td>
                      <td className="p-1 font-size-11 text-center">13</td>
                      <td className="p-1 font-size-11 text-center">13</td>
                      <td className="p-1 font-size-11 text-center">0</td>

                      <td className="p-1 font-size-11 text-center">
                        <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10">
                          Select
                        </p>
                      </td>
                      <td className="p-1 font-size-11 text-center">
                        <p className="border py-1 px-1 bg-success rounded m-0 cursor-pointer font-size-10 d-flex justify-content-center">
                          Edit Price
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      )}

      {addNew && (
        <div>
          <div className="row mt-2 position-relative">
            <div className="col-12">
              <label htmlFor="">ADDITIONAL NAME</label>
              <input
                type="text"
                placeholder="Additional Name"
                className="form-input-5"
                name="AdditionalName"
                value={addFormData?.AdditionalName}
                onChange={handleAddDataChange}
              />
            </div>
            <button
              className="btn yellow-bg border width-70 position-absolute right-160 bottom-92"
              onClick={() => setAddNew(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
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
  AddOnsModalForm,
};
