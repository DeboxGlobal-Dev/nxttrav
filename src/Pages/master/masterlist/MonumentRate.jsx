import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink, useLocation, useParams } from "react-router-dom";
import {
  monumentRateInitialValue,
  monumnetRateValidationSchema,
} from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";

const MonumentRate = () => {
  const [formValue, setFormValue] = useState(monumentRateInitialValue);
  const [supplierList, setSupplierList] = useState([]);
  const [nationalityList, setNationalityList] = useState([]);
  const [taxSlabList, setTaxSlabList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [rateList, setRateList] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [errorMessgae, setErrorMessage] = useState("");
  const { id } = useParams();
  const { state } = useLocation();

  const getMonumentRateList = async () => {
    try {
      const { data } = await axiosOther.post("monumentlist", {
        id: id,
      });
      setRateList(data?.DataList);
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMonumentRateList();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  // submitting rate
  const handleRateSubmit = async () => {
    try {
      await monumnetRateValidationSchema?.validate(formValue, {
        abortEarly: false,
      });
      setErrorMessage("");
      console.log("value", {
        ...formValue,
        MonumentId: id,
      });

      const { data } = await axiosOther.post(
        !isUpdating ? "addmonumentrate" : "updatemonumentrate",
        {
          ...formValue,
          MonumentId: id,
        }
      );

      console.log("response", data);

      if (data?.Status == 1) {
        getMonumentRateList();
        toast.success(data?.Message);
        setFormValue(monumentRateInitialValue);
      }
      if (data?.Status != 1) {
        toast.success(data?.Message);
      }
    } catch (err) {
      console.log("error", err);
      if (err.response.status == 500) {
      }
      if (err.inner) {
        const errMessage = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrorMessage(errMessage);
      }
    }
  };

  // set value into form
  const handleRateEdit = (value, companyId) => {
    setIsUpdating(true);
    setFormValue({
      ...value,
      RateUniqueId: value?.UniqueID,
      DestinationID: 33,
      Remarks: value.Remarks == null ? "" : value.Remarks,
      TAC: value.TAC == null ? "" : value.TAC,
      Policy: value.Policy == null ? "" : value.Policy,
      CompanyId: companyId,
    });
    console.log("edit-value", value);
    console.log("company-id", companyId);
  };

  //reset all form value

  const handleResetForm = () => {
    setIsUpdating(false);
    setFormValue(monumentRateInitialValue);
  };

  // getting data for dropdown
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
                    NATIONALITY <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.NationalityId && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.NationalityId}
                    </span>
                  )}
                </div>
                <select
                  name="NationalityId"
                  id=""
                  value={formValue?.NationalityId}
                  onChange={handleInputChange}
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  {nationalityList?.map((item, ind) => {
                    return (
                      <option value={item?.id} key={ind + 1}>
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
                  {currencyList?.map((item, ind) => {
                    return (
                      <option value={item?.id} key={ind + 1}>
                        {item?.CurrencyName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    ADULT ENTRANCE FEE
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="AdultEntFee"
                  placeholder="Entrance Fee"
                  value={formValue?.AdultEntFee}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    CHILD ENTRANCE FEE
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="ChildEntFee"
                  placeholder="Entrance Fee"
                  value={formValue?.ChildEntFee}
                  onChange={handleInputChange}
                />
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
              <div className="col-12">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    POLICY
                  </label>
                </div>
                <textarea
                  type="text"
                  className="form-input-6 height-60"
                  placeholder="Policy"
                  name="Policy"
                  value={formValue?.Policy}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    T&C
                  </label>
                </div>
                <textarea
                  type="text"
                  className="form-input-6 height-60"
                  placeholder="Terms & Condition"
                  name="TAC"
                  value={formValue?.TAC}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12">
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

              <div className="col-2 d-flex gap-3">
                <button
                  className="modal-save-button w-auto px-3 mt-3"
                  onClick={handleRateSubmit}
                >
                  Save
                </button>
                {isUpdating && (
                  <button
                    className="modal-save-button w-auto px-3 mt-3"
                    onClick={handleResetForm}
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
                {rateList?.map((item1) => {
                  return item1?.RateJson?.Data?.map((item2) => {
                    return item2?.RateDetails?.map((item) => {
                      return (
                        <tr key={item?.UniqueID}>
                          <td className="text-center px-0">
                            {item?.ValidFrom?.split("-")?.reverse()?.join("-")}
                            &nbsp; To &nbsp;
                            {item?.ValidTo?.split("-").reverse()?.join("-")}
                          </td>
                          <td className="text-center">Mark</td>
                          <td className="text-center">
                            {item?.NationalityName}
                          </td>
                          <td className="text-center">{item?.SupplierName}</td>
                          <td className="text-center">{item?.AdultEntFee}</td>
                          <td className="text-center">{item?.ChildEntFee}</td>
                          <td className="text-center">{item?.TaxSlabVal}</td>
                          <td className="text-center">
                            {item?.Status == 1 ? "Active" : "Inactive"}
                          </td>
                          <td>
                            <i
                              className="fa-solid fa-pen-to-square text-success fs-5 cursor-pointer"
                              onClick={() =>
                                handleRateEdit(item, item1?.RateJson?.companyId)
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

export default MonumentRate;
