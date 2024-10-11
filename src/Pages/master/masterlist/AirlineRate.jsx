import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink, useLocation, useParams } from "react-router-dom";
import {
  airlineRateAddInitialValue,
  airlineRateValidationSchema,
  monumentRateInitialValue,
  monumnetRateValidationSchema,
} from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";

const AirlineRate = () => {
  const [formValue, setFormValue] = useState(airlineRateAddInitialValue);
  const [supplierList, setSupplierList] = useState([]);
  const [nationalityList, setNationalityList] = useState([]);
  const [taxSlabList, setTaxSlabList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [errorMessgae, setErrorMessage] = useState("");
  const { id } = useParams();
  const { state } = useLocation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await airlineRateValidationSchema?.validate(formValue, {
        abortEarly: false,
      });
      setErrorMessage("");
      console.log("value", {
        ...formValue,
        MonumentId: id,
      });

      const data = await axiosOther.post("addmonumentrate", {
        ...formValue,
        MonumentId: id,
      });

      console.log("response", data);
    } catch (err) {
      console.log("error", err);
      if (err.inner) {
        const errMessage = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrorMessage(errMessage);
      }
    }
  };

  // getting data for dropdown

  const postDataToServer = async () => {
    try {
      const { data } = await axiosOther.post("supplierlist", {
        id: "",
        Name: "",
      });
      setSupplierList(data?.DataList);
    } catch (error) {
      console.log(error);
    }

    try {
      const { data } = await axiosOther.post("nationalitylist", {
        id: "",
        Name: "",
        Status: "",
      });
      setNationalityList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
    try {
      const { data } = await axiosOther.post("currencymasterlist", {
        id: "",
        Name: "",
        Status: "",
      });
      setCurrencyList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
    try {
      const { data } = await axiosOther.post("taxmasterlist", {
        Id: "",
        Search: "",
        Status: "",
      });
      setTaxSlabList(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    postDataToServer();
  }, []);
  return (
    <Layout>
      <div className="container-fluid p-3 pb-0">
        <div className="card shadow-none border" style={{ marginBottom: "0" }}>
          <div
            className="card-header header-elements-inline bg-info-700 py-2"
            style={{ padding: "10px" }}
          >
            <div className="col-xl-10 d-flex align-items-center">
              <h5 className="card-title d-none d-sm-block">{state?.Name}</h5>
            </div>
            <div className="col-xl-2 d-flex justify-content-end">
              {/*Bootstrap Modal*/}
              <NavLink
                to="/master/monument"
                className="gray-button"
                aria-expanded="false"
              >
                Back
              </NavLink>
            </div>
          </div>
          <div className="card-body">
            <div className="row align-items-center row-gap-3">
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    FLIGHT NUMBER <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.FlightNumber && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.FlightNumber}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="FLIGHT NUMBER"
                  className="form-input-6"
                  name="FlightNumber"
                  value={formValue?.FlightNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    FLIGHT CLASS<span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.FlightClass && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.FlightClass}
                    </span>
                  )}
                </div>
                <select
                  name="FlightClass"
                  value={formValue?.FlightClass}
                  onChange={handleInputChange}
                  id=""
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  <option value="1">Corintech</option>
                  <option value="2">Debox</option>
                  <option value="3">Sparsh</option>
                </select>
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    CURRENCY <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.Currency && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.Currency}
                    </span>
                  )}
                </div>
                <select
                  name="Currency"
                  value={formValue?.Currency}
                  onChange={handleInputChange}
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  <option value="1">Corintech</option>
                  <option value="2">Debox</option>
                  <option value="3">Sparsh</option>
                </select>
              </div>
              <div className="col-3">
                <div className="border p-1 d-flex flex-column">
                  <label htmlFor="" className="m-0 text-center">
                    ADULT COST
                  </label>
                  <div className="row">
                    <div className="col-4">
                      <span className="m-0 position-absolute text-danger">
                        *
                      </span>
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Base Fare"
                        name="AdultCost"
                        value={formValue?.AdultCost?.base_fare}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-4 p-0">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Airline Tax"
                        name="AdultCost"
                        value={formValue?.AdultCost?.airline_tax}
                      />
                    </div>
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Total Cost"
                        value={""}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="p-1 border d-flex flex-column">
                  <label htmlFor="" className="m-0 text-center">
                    CHILD COST
                  </label>
                  <div className="row">
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Base Fare"
                      />
                    </div>
                    <div className="col-4 p-0">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Airline Tax"
                      />
                    </div>
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Total Cost"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="border p-1 d-flex flex-column">
                  <label htmlFor="" className="m-0 text-center">
                    INFANT COST
                  </label>
                  <div className="row">
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Base Fare"
                      />
                    </div>
                    <div className="col-4 p-0">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Airline Tax"
                      />
                    </div>
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Total Cost"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5 mt-1">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    BAGGAGE
                  </label>
                </div>
                <textarea
                  type="text"
                  className="form-input-6 "
                  placeholder="Remarks"
                  name="Remarks"
                  value={formValue?.Remarks}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-4 mt-1">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    ALLOWENCE
                  </label>
                </div>
                <textarea
                  type="text"
                  className="form-input-6"
                  placeholder="Remarks"
                  name="Remarks"
                  value={formValue?.Remarks}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12 ">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    REMARKS
                  </label>
                </div>
                <textarea
                  type="text"
                  className="form-input-6 height-60"
                  placeholder="Remarks"
                  name="Remarks"
                  value={formValue?.Remarks}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-2">
                <button
                  className="modal-save-button w-auto px-3 mt-3"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-3 pb-4 mb-5">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered  table-striped">
              <thead>
                <tr>
                  <th className="p-0 text-center py-1">Validity</th>
                  <th className="p-0 text-center py-1">Entrance Name</th>
                  <th className="p-0 text-center py-1">Nationality</th>
                  <th className="p-0 text-center py-1">Supplier</th>
                  <th className="p-0 text-center py-1">Adult Cost</th>
                  <th className="p-0 text-center py-1">Child Cost</th>
                  <th className="p-0 text-center py-1">GST Slab</th>
                  <th className="p-0 text-center py-1">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td className="text-center">Mark</td>
                  <td className="text-center">Otto</td>
                  <td className="text-center">@mdo</td>
                  <td className="text-center">@mdo</td>
                  <td className="text-center">@mdo</td>
                  <td className="text-center">@mdo</td>
                  <td className="text-center">@mdo</td>
                  <td>
                    <i className="fa-solid fa-pen-to-square text-success fs-5 cursor-pointer"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AirlineRate;
