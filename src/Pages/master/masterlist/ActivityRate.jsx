import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink, useLocation, useParams } from "react-router-dom";
import {
  activityRateAddInitialValue,
  activityRateValidationSchema,
} from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";

const ActivityRate = () => {
  const [formValue, setFormValue] = useState(activityRateAddInitialValue);
  const [supplierList, setSupplierList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [taxSlabList, setTaxSlabList] = useState([]);
  const [activityRateList, setActivityRateList] = useState([]);
  const [errorMessgae, setErrorMessage] = useState("");
  const { id } = useParams();
  const { state } = useLocation();

  const getGuideRateList = async () => {
    try {
      const { data } = await axiosOther.post("activityratelist", {
        id: id,
      });
      setActivityRateList(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGuideRateList();
  }, []);

  console.log("activityRateList", activityRateList);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await activityRateValidationSchema?.validate(formValue, {
        abortEarly: false,
      });
      setErrorMessage("");
      console.log("value", {
        ...formValue,
        ActivityId: id,
      });

      const { data } = await axiosOther.post("addactivityrate", {
        ...formValue,
        ActivityId: id,
      });

      if (data?.Status == 1) {
        toast.success("Rate Added Successfully !");
        setFormValue(activityRateAddInitialValue);
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

  const postDataToServer = async () => {
    try {
      const { data } = await axiosOther.post("fetch-supplier-name-list", {
        id: "",
        Name: "",
      });
      setSupplierList(data?.DataList);
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
                to="/master/activity"
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
                    SUPPLIER NAME <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.SupplierId && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.SupplierId}
                    </span>
                  )}
                </div>
                <select
                  name="SupplierId"
                  value={formValue?.SupplierId}
                  onChange={handleInputChange}
                  id=""
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  {supplierList?.map((item) => {
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
                    RATE VALID FROM <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.ValidFrom && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.ValidFrom}
                    </span>
                  )}
                </div>
                <input
                  type="date"
                  className="form-input-6"
                  name="ValidFrom"
                  value={formValue?.ValidFrom}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    RATE VALID TO <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.ValidTo && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.ValidTo}
                    </span>
                  )}
                </div>
                <input
                  type="date"
                  className="form-input-6"
                  name="ValidTo"
                  value={formValue?.ValidTo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    CURRENCY <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.CurrencyId && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.CurrencyId}
                    </span>
                  )}
                </div>
                <select
                  name="CurrencyId"
                  id=""
                  className="form-input-6"
                  value={formValue?.CurrencyId}
                  onChange={handleInputChange}
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
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    SERVICE <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.Service && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.Service}
                    </span>
                  )}
                </div>
                <select
                  name="Service"
                  id=""
                  value={formValue?.Service}
                  onChange={handleInputChange}
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  <option value="1">HP</option>
                  <option value="2">DP</option>
                  <option value="3">AP</option>
                </select>
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    PAX RANGE
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="PaxRange"
                  placeholder="Entrance Fee"
                  value={formValue?.PaxRange}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    TOTAL COST
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="TotalCost"
                  placeholder="Entrance Fee"
                  value={formValue?.TotalCost}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    PER PAX COST
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="PaxCost"
                  placeholder="Entrance Fee"
                  value={formValue?.PaxCost}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    TAX SLAB(TAX %) <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.TaxSlabId && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.TaxSlabId}
                    </span>
                  )}
                </div>
                <select
                  name="TaxSlabId"
                  value={formValue?.TaxSlabId}
                  onChange={handleInputChange}
                  id=""
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  {taxSlabList?.DataList?.map((item) => {
                    return (
                      <option value={item?.id} key={item?.id}>
                        {item?.TaxSlabName} ({item?.TaxValue})
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    STATUS
                  </label>
                </div>
                <select
                  name="Status"
                  value={formValue?.Status}
                  onChange={handleInputChange}
                  id=""
                  className="form-input-6"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="col-12">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    REMARKS
                  </label>
                </div>
                <textarea
                  className="form-input-6"
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
                  <th className="p-0 text-center py-1">Supplier</th>
                  <th className="p-0 text-center py-1">Service</th>
                  <th className="p-0 text-center py-1">Pax Range</th>
                  <th className="p-0 text-center py-1">Total Cost</th>
                  <th className="p-0 text-center py-1">P/P Cost</th>
                  <th className="p-0 text-center py-1">GST Slab</th>
                  <th className="p-0 text-center py-1">Remarks</th>
                  <th className="p-0 text-center py-1">Status</th>
                  <th className="p-0 text-center py-1">Action</th>
                </tr>
              </thead>
              <tbody>
                {activityRateList?.map((item) => {
                  return item?.Data?.map((item) => {
                    return item?.RateDetails?.map((item) => {
                      return (
                        <tr key={item?.UniqueID}>
                          <td className="text-center">{item?.SupplierName}</td>
                          <td className="text-center">{item?.Service}</td>
                          <td className="text-center">{item?.PaxRange}</td>
                          <td className="text-center">{item?.TotalCost}</td>
                          <td className="text-center">{item?.PaxCost}</td>
                          <td className="text-center">{item?.LangAllowance}</td>
                          <td className="text-center">{item?.OtherCost}</td>
                          <td className="text-center">{item?.GstSlabValue}</td>
                          <td>
                            <i className="fa-solid fa-pen-to-square text-success fs-5 cursor-pointer"></i>
                          </td>
                        </tr>
                      );
                    });
                  });
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActivityRate;
