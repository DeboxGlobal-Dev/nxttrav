import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink, useLocation, useParams } from "react-router-dom";
import {
  guideRateInitialValue,
  guideRateValidationSchema,
} from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";

const GuideRate = () => {
  const [formValue, setFormValue] = useState(guideRateInitialValue);
  const [supplierList, setSupplierList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [guideMasterList, setGuideMasterList] = useState([]);
  const [slabList, setSlabList] = useState([]);
  const [guideRateList, setGuideRateList] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [errorMessgae, setErrorMessage] = useState("");
  const { id } = useParams();
  const { state } = useLocation();

  const getGuideRateList = async () => {
    try {
      const { data } = await axiosOther.post("guideratelist", {
        id: id,
        ServiceName: "",
        ServiceType: "",
      });
      setGuideRateList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGuideRateList();
  }, []);

  console.log("guide-rate-lsit", guideRateList);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await guideRateValidationSchema?.validate(formValue, {
        abortEarly: false,
      });

      setErrorMessage("");
      console.log("value", { ...formValue, id: id });

      const { data } = await axiosOther.post(
        !isUpdating ? "addupdateguiderate" : "updateguideratejson",
        {
          ...formValue,
          id: id,
        }
      );
      console.log("response", data);

      if (data?.Status == 1) {
        getGuideRateList();
        toast.success(data?.Message);
        setFormValue(guideRateInitialValue);
        setIsUpdating(false)
      }
      if (data?.Status != 1) {
        toast.success(data?.Message);
      }
    } catch (err) {
      if (err.inner) {
        const errMessage = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrorMessage(errMessage);
      }
    }
  };

  // setted all value into form
  const handleRateEdit = (value, companyId) => {
    setIsUpdating(true);
    setFormValue({
      ...value,
      RateUniqueId: value?.UniqueID,
      CompanyId: companyId,
    });
  };

  //reset all value from form
  const handleRestForm = () => {
    setIsUpdating(false);
    setFormValue(guideRateInitialValue);
  };

  // get data from server for dropdown
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
      setSlabList(data);
    } catch (error) {
      console.log(error);
    }
    try {
      const { data } = await axiosOther.post("tourescortmasterlist", {
        Search: "",
        Status: "",
      });
      setGuideMasterList(data?.DataList);
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
                to="/master/guideprice"
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
                    PAX RANGE <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.PaxRange && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.PaxRange}
                    </span>
                  )}
                </div>
                <select
                  name="PaxRange"
                  id=""
                  className="form-input-6"
                  value={formValue?.PaxRange}
                  onChange={handleInputChange}
                >
                  <option value="">All</option>
                  <option value="1">1-5</option>
                  <option value="2">6-10</option>
                  <option value="3">11-15</option>
                  <option value="4">16-20</option>
                </select>
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    DAY TYPE <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.DayType && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.DayType}
                    </span>
                  )}
                </div>
                <select
                  name="DayType"
                  id=""
                  className="form-input-6"
                  value={formValue?.DayType}
                  onChange={handleInputChange}
                >
                  <option value="Half Day">Half Day</option>
                  <option value="Full Day">Full Day</option>
                </select>
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    UNIVERSAL COST <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.UniversalCost && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.UniversalCost}
                    </span>
                  )}
                </div>
                <select
                  name="UniversalCost"
                  id=""
                  className="form-input-6"
                  value={formValue?.UniversalCost}
                  onChange={handleInputChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              {formValue?.UniversalCost == "No" && (
                <div className="col-2">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="" className="m-0 font-size-12">
                      SELECT GUIDE/PORTER
                    </label>
                  </div>
                  <select
                    name="GuideId"
                    id=""
                    className="form-input-6"
                    value={formValue?.GuideId}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Guide</option>
                    {guideMasterList?.map((item) => {
                      return (
                        <option value={item?.id} key={item?.id}>
                          {item?.Name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              )}
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
                  id=""
                  className="form-input-6"
                  value={formValue?.Currency}
                  onChange={handleInputChange}
                >
                  <option value="0">Select</option>
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
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    SERVICE COST
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="ServiceCost"
                  placeholder="Service Cost"
                  value={formValue?.ServiceCost}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    LANGUAGE ALLOWENCE
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="LangAllowance"
                  placeholder="Language Allowance"
                  value={formValue?.LangAllowance}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    OTHER COST
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="OtherCost"
                  placeholder="Other Cost"
                  value={formValue?.OtherCost}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    GST SLAB(%) <span className="text-danger">*</span>
                  </label>
                </div>
                <select
                  name="GstSlabid"
                  value={formValue?.GstSlabid}
                  onChange={handleInputChange}
                  id=""
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  {slabList?.DataList?.map((item) => {
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
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
              <div className="col-2 d-flex gap-3">
                <button
                  className="modal-save-button w-auto px-3 mt-3"
                  onClick={handleSubmit}
                >
                  {!isUpdating ? "Save" : "Update"}
                </button>
                {isUpdating && (
                  <button
                    className="modal-save-button w-auto px-3 mt-3"
                    onClick={handleRestForm}
                  >
                    Reset
                  </button>
                )}
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
                  <th className="p-0 text-center py-1">Validity</th>
                  <th className="p-0 text-center py-1">Day Type</th>
                  <th className="p-0 text-center py-1">Pax Range</th>
                  <th className="p-0 text-center py-1">
                    Service Cost(Per Day)
                  </th>
                  <th className="p-0 text-center py-1">Lang Allowence</th>
                  <th className="p-0 text-center py-1">Other Cost</th>
                  <th className="p-0 text-center py-1">Guide GST(%)</th>
                  <th className="p-0 text-center py-1">Status</th>
                </tr>
              </thead>
              <tbody>
                {guideRateList?.map((item1) => {
                  return item1?.Ratejson?.Data?.map((item2) => {
                    return item2?.RateDetails?.map((item) => {
                      return (
                        <tr key={item?.UniqueID}>
                          <td className="text-center">{item?.SupplierName}</td>
                          <td className="text-center">
                            {item?.ValidFrom?.split("-")?.reverse().join("-")}{" "}
                            To {item?.ValidTo?.split("-").reverse().join("-")}
                          </td>
                          <td className="text-center">{item?.DayType}</td>
                          <td className="text-center">{item?.PaxRangeName}</td>
                          <td className="text-center">{item?.ServiceCost}</td>
                          <td className="text-center">{item?.LangAllowance}</td>
                          <td className="text-center">{item?.OtherCost}</td>
                          <td className="text-center">{item?.GstSlabValue}</td>
                          <td>
                            <i
                              className="fa-solid fa-pen-to-square text-success fs-5 cursor-pointer"
                              onClick={() =>
                                handleRateEdit(item, item1?.CompanyId)
                              }
                            ></i>
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

export default GuideRate;
