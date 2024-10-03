import React, { useState } from "react";
import { hotelPopupList } from "../../quotationdata";

const contactDetails = {
  ContactPerson: "",
  Name: "",
  Designation: "",
  CountryCode: "",
  Phone: "",
  Email: "",
};

const addFormIntiailValue = {
  HotelChain: "",
  HotelAmenities: "",
  HotelName: "",
  RoomType: "",
  Destination: "",
  Supplier: "",
  HotelCategory: "",
  Country: "",
  State: "",
  City: "",
  PinCode: "",
  HotelLink: "",
  Address: "",
  WeekendDays: "",
  Gstn: "",
  Days: "",
  HotelStatus: "",
  CheckInTime: "",
  CheckOutTime: "",
  HotelConfirmation: "",
  Policy: "",
  TandC: "",
};

const HotelModal = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const [contactFormArray, setContactFormArray] = useState([contactDetails]);

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

  const [addFormData, setAddFormData] = useState(addFormIntiailValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    setIsSearching(true);
  };

  const handleAddDataChange = (e) => {
    const { name, value } = e.target;
    setAddFormData({ ...addFormData, [name]: value });
  };

  const handleIncreaseContactDeatails = () => {
    setContactFormArray([...contactFormArray, contactDetails]);
  };

  const handleContactForm = (e, index) => {
    const { name, value } = e.target;

    setContactFormArray((prevArr) => {
      const newArr = [...prevArr];
      newArr[index] = { ...prevArr[index], [name]: value };
      return newArr;
    });
  };

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
                        {hotelPopupList?.Data?.map((item) => {
                          return (
                            <tr>
                              <td className="p-1 font-size-11">
                                {item?.HotelName}
                              </td>
                              <td className="p-1 font-size-11 text-center">
                                {item?.Supplier}
                              </td>
                              <td className="p-1 font-size-11 text-center">
                                INR[1]
                              </td>
                              <td className="p-1 font-size-11 text-center">
                                {item?.RoomBedType}
                              </td>
                              <td className="p-1 font-size-11 text-center">
                              {item?.RateJson?.TariffTypeName}
                              TariffTypeName
                              </td>
                              <td className="p-1 font-size-11 text-center">
                                0
                              </td>
                              <td className="p-1 font-size-11 text-center">
                                0
                              </td>

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
                          );
                        })}
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
              <select
                name="HotelChain"
                className="form-input-6"
                value={addFormData?.HotelChain}
                onChange={handleAddDataChange}
              >
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">HOTEL AMENITIES</label>
              <select
                name="HotelAmenities"
                id=""
                className="form-input-6"
                value={addFormData?.HotelAmenities}
                onChange={handleAddDataChange}
              >
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">HOTEL NAME</label>
              <input
                type="text"
                className="form-input-6"
                placeholder="Hotel Name"
                name="HotelName"
                value={addFormData?.HotelName}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label className="m-0">ROOM TYPE</label>
              <select
                name="RoomType"
                id=""
                className="form-input-6"
                value={addFormData?.RoomType}
                onChange={handleAddDataChange}
              >
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">DESTINATION</label>
              <select
                name="Destination"
                id=""
                className="form-input-6"
                value={addFormData?.Destination}
                onChange={handleAddDataChange}
              >
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">SUPPLIER</label>
              <select
                name="Supplier"
                id=""
                className="form-input-6"
                value={addFormData?.Supplier}
                onChange={handleAddDataChange}
              >
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">HOTEL CATEGORY</label>
              <select
                name="HotelCategory"
                id=""
                className="form-input-6"
                value={addFormData?.HotelCategory}
                onChange={handleAddDataChange}
              >
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">COUNTRY</label>
              <select
                name="Country"
                id=""
                className="form-input-6"
                value={addFormData?.Country}
                onChange={handleAddDataChange}
              >
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">STATE</label>
              <select
                name="State"
                id=""
                className="form-input-6"
                value={addFormData?.State}
                onChange={handleAddDataChange}
              >
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">CITY</label>
              <select
                name="City"
                id=""
                className="form-input-6"
                value={addFormData?.City}
                onChange={handleAddDataChange}
              >
                <option value="">Select</option>
                <option value="1">None</option>
              </select>
            </div>
            <div className="col-3">
              <label className="m-0">PIN CODE</label>
              <input
                type="text"
                className="form-input-6"
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
                className="form-input-6"
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
                className="form-input-6"
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
                className="form-input-6"
                placeholder="Weekend Days"
                name="WeekendDays"
                value={addFormData?.WeekendDays}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label className="m-0">GSTN</label>
              <input
                type="text"
                className="form-input-6"
                placeholder="GSTN"
                name="Gstn"
                value={addFormData?.Gstn}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label className="m-0">DAYS</label>
              <input
                type="text"
                className="form-input-6"
                placeholder="GSTN"
                name="Days"
                value={addFormData?.Days}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label className="m-0">HOTEL STATUS</label>
              <input
                type="text"
                className="form-input-6"
                placeholder="GSTN"
                name="HotelStatus"
                value={addFormData?.HotelStatus}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label className="m-0">CHECK IN TIME</label>
              <input
                type="text"
                className="form-input-6"
                placeholder="GSTN"
                name="CheckInTime"
                value={addFormData?.CheckInTime}
                onChange={handleAddDataChange}
              />
            </div>
            <div className="col-3">
              <label className="m-0">CHECK OUT TIME</label>
              <input
                type="text"
                className="form-input-6"
                placeholder="GSTN"
                name="CheckOutTime"
                value={addFormData?.CheckOutTime}
                onChange={handleAddDataChange}
              />
            </div>
          </div>
          <div className="row mt-3 row-gap-2">
            <div className="d-flex gap-5 pb-1">
              <label className="m-0">CONTACT PERSON</label>
              <p
                className="m-0 bg-primary px-1 rounded cursor-pointer"
                onClick={handleIncreaseContactDeatails}
              >
                +ADD MORE
              </p>
            </div>
            {contactFormArray.map((field, index) => {
              return (
                <div className="col-12" key={index + 1}>
                  <div className="row">
                    <div className="col-2">
                      <select name="" id="" className="form-input-6">
                        <option value="">Operations</option>
                      </select>
                    </div>
                    <div className="col-2">
                      <input
                        type="text"
                        placeholder="Contact Person"
                        className="form-input-6"
                        name="Name"
                        value={field.Name}
                        onChange={(e) => handleContactForm(e, index)}
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="text"
                        placeholder="Designation"
                        className="form-input-6"
                        name="Designation"
                        value={field.Designation}
                        onChange={(e) => handleContactForm(e, index)}
                      />
                    </div>
                    <div className="col-3">
                      <div className="row">
                        <div className="col-3">
                          <input
                            type="text"
                            placeholder="+91"
                            className="form-input-6"
                            name="CountryCode"
                            value={field.CountryCode}
                            onChange={(e) => handleContactForm(e, index)}
                          />
                        </div>
                        <div className="col-9 pl-0">
                          <input
                            type="text"
                            placeholder="9887878770"
                            className="form-input-6"
                            name="Phone"
                            value={field.Phone}
                            onChange={(e) => handleContactForm(e, index)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <input
                        type="text"
                        placeholder="exampl@gmail.com"
                        className="form-input-6"
                        name="Email"
                        value={field.Email}
                        onChange={(e) => handleContactForm(e, index)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-12">
              <label className="m-0">HOTEL INFORMATION</label>
              <textarea type="textarea" className="form-input-6 h-auto" />
            </div>
            <div className="col-12">
              <label className="m-0">POLICY</label>
              <textarea type="textarea" className="form-input-6 h-auto" />
            </div>
            <div className="col-12">
              <label className="m-0">T&C</label>
              <textarea
                type="textarea"
                className="form-input-6 h-auto"
                name="TandC"
                value={addFormData?.TandC}
                onChange={handleAddDataChange}
              />
            </div>
            <button
              onClick={() => setAddNew(false)}
              className="position-absolute bottom-70 right-160 modal-save-button bg-secondary"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HotelModal;
