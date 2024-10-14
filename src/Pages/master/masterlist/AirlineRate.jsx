import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink, useLocation, useParams } from "react-router-dom";
import {
  airlineRateAddInitialValue,
  airlineRateValidationSchema,
} from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";

const AirlineRate = () => {
  const [formValue, setFormValue] = useState(airlineRateAddInitialValue);
  const [currencyList, setCurrencyList] = useState([]);
  const [flightClass, setFlightClass] = useState([]);
  const [airRateList, setAirRateList] = useState([]);
  const [errorMessgae, setErrorMessage] = useState("");
  const { id } = useParams();
  const { state } = useLocation();

  const getAirlineRateList = async () => {
    try {
      const { data } = await axiosOther.post("airratelist", {
        id: id,
      });
      setAirRateList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAirlineRateList();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (
      name.startsWith("AdultCost") ||
      name.startsWith("ChildCost") ||
      name.startsWith("InfantCost")
    ) {
      const [costType, key] = name.split(".");
      setFormValue({
        ...formValue,
        [costType]: { ...formValue[costType], [key]: parseFloat(value) || 0 },
      });
    } else {
      setFormValue({ ...formValue, [name]: value });
    }
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

      const { data } = await axiosOther.post("addupdateairlinerate", {
        ...formValue,
        id: id,
      });

      if (data?.Status == 1) {
        toast.success("Rate Added Successfully !");
        setFormValue(airlineRateAddInitialValue);
      }
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
      const { data } = await axiosOther.post("flightclasslist", {
        id: "",
      });

      setFlightClass(data?.DataList);
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
                to="/master/restaurant"
                className="gray-button"
                aria-expanded="false"
              >
                Back
              </NavLink>
              <Toaster />
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
                    <span className="text-danger font-size-11">
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
                    <span className="text-danger font-size-11">
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
                  <option value={""}>Select</option>
                  {flightClass?.map((item) => {
                    return (
                      <option value={item?.id} key={item?.id}>
                        {item?.Name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    CURRENCY <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.Currency && (
                    <span className="text-danger font-size-11">
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
                  {currencyList?.map((item) => {
                    return (
                      <option value={item?.id} key={item?.id}>
                        {item?.CurrencyName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-3">
                <div className="border p-1 d-flex flex-column">
                  <div className="d-flex justify-content-center gap-5">
                    {errorMessgae["AdultCost.base_fare"] && (
                      <span className="text-danger font-size-11">
                        {errorMessgae["AdultCost.base_fare"]}
                      </span>
                    )}
                    <label htmlFor="" className="m-0 text-center">
                      ADULT COST
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <span className="m-0 position-absolute text-danger">
                        *
                      </span>
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Base Fare"
                        name="AdultCost.base_fare"
                        value={formValue?.AdultCost?.base_fare}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-4 p-0">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Airline Tax"
                        name="AdultCost.airline_tax"
                        value={formValue?.AdultCost?.airline_tax}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Total Cost"
                        value={
                          formValue?.AdultCost?.base_fare +
                          formValue?.AdultCost?.airline_tax
                        }
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
                        name="ChildCost.base_fare"
                        value={formValue?.ChildCost?.base_fare}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-4 p-0">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Airline Tax"
                        name="ChildCost.airline_tax"
                        value={formValue?.ChildCost?.airline_tax}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Total Cost"
                        value={
                          formValue?.ChildCost?.base_fare +
                          formValue?.ChildCost?.airline_tax
                        }
                        readOnly
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
                        name="InfantCost.base_fare"
                        value={formValue?.InfantCost?.base_fare}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-4 p-0">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Airline Tax"
                        name="InfantCost.airline_tax"
                        value={formValue?.InfantCost?.airline_tax}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-input-6"
                        placeholder="Total Cost"
                        value={
                          formValue?.InfantCost?.base_fare +
                          formValue?.InfantCost?.airline_tax
                        }
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5 mt-1">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    BAGGAGE ALLOWENCE
                  </label>
                </div>
                <textarea
                  type="text"
                  className="form-input-6 "
                  placeholder="BAGGAGE ALLOWENCE"
                  name="BaggageAllowance"
                  value={formValue?.BaggageAllowance}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-4 mt-1">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    CANCELLATION POLICY
                  </label>
                </div>
                <textarea
                  type="text"
                  className="form-input-6 pb-0"
                  placeholder="CANCELLATION POLICY"
                  name="CancallationPolicy"
                  value={formValue?.CancallationPolicy}
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
                  placeholder="REMARKS"
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
                  <th className="p-0 text-center py-1">Flight Number</th>
                  <th className="p-0 text-center py-1">Flight Class</th>
                  <th className="p-0 text-center py-1">Adult Cost</th>
                  <th className="p-0 text-center py-1">Child Cost</th>
                  <th className="p-0 text-center py-1">Infant Cost</th>
                  <th className="p-0 text-center py-1">Baggage Allowence</th>
                  <th className="p-0 text-center py-1">Cancellation Policy</th>
                  <th className="p-0 text-center py-1">Status</th>
                  <th className="p-0 text-center py-1">Remarks</th>
                  <th className="p-0 text-center py-1">Action</th>
                </tr>
              </thead>
              <tbody>
                {airRateList?.map((item) => {
                  console.log('airline-items', item);
                  return (
                    <tr>
                      <td className="text-center">{item?.FlightNumber}</td>
                      <td className="text-center">{item?.FlightClass?.Name}</td>
                      <td className="text-center">
                        <div className="d-flex gap-3">
                          <span className="font-weight-bold text-nowrap">Base Fare :</span>
                          <span>{item?.adult_cost?.base_fare}</span>
                        </div>
                        <div className="d-flex gap-3">
                          <span className="font-weight-bold text-nowrap">Airline Tax :</span>
                          <span>{item?.adult_cost?.airline_tax}</span>
                        </div>
                        <div className="d-flex gap-3">
                          <span className="font-weight-bold text-nowrap">Total Cost :</span>
                          <span>{item?.adult_cost?.total}</span>
                        </div>
                      </td>
                      <td className="text-center">
                      <div className="d-flex gap-3">
                          <span className="font-weight-bold text-nowrap">Base Fare :</span>
                          <span>{item?.child_cost?.base_fare}</span>
                        </div>
                        <div className="d-flex gap-3">
                          <span className="font-weight-bold text-nowrap">Airline Tax :</span>
                          <span>{item?.child_cost?.airline_tax}</span>
                        </div>
                        <div className="d-flex gap-3">
                          <span className="font-weight-bold text-nowrap">Total Cost :</span>
                          <span>{item?.child_cost?.total}</span>
                        </div>
                      </td>
                      <td className="text-center">
                      <div className="d-flex gap-3">
                          <span className="font-weight-bold text-nowrap">Base Fare :</span>
                          <span>{item?.infant_cost?.base_fare}</span>
                        </div>
                        <div className="d-flex gap-3">
                          <span className="font-weight-bold text-nowrap" >Airline Tax :</span>
                          <span>{item?.infant_cost?.airline_tax}</span>
                        </div>
                        <div className="d-flex gap-3">
                          <span className="font-weight-bold text-nowrap">Total Cost :</span>
                          <span>{item?.infant_cost?.total}</span>
                        </div>
                      </td>
                      <td className="text-center">{item?.BaggageAllowance}</td>
                      <td className="text-center">{item?.CancellationPolicy}</td>
                      <td className="text-center">{item?.Status}</td>
                      <td className="text-center">{item?.Remarks}</td>
                      <td>
                        <i className="fa-solid fa-pen-to-square text-success fs-5 cursor-pointer"></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AirlineRate;
