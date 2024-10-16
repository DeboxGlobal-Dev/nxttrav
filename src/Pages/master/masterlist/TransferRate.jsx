import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink, useLocation, useParams } from "react-router-dom";
import {
  transferRateAddInitialValue,
  transferRateValidationSchema,
} from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";

const TransferRate = () => {
  const [formValue, setFormValue] = useState(transferRateAddInitialValue);
  const [supplierList, setSupplierList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [destinationList, setDestinationList] = useState([]);
  const [vehicleList, setVehicleList] = useState([]);
  const [slabList, setSlabList] = useState([]);
  const [transferRateList, setTransferRateList] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [errorMessgae, setErrorMessage] = useState("");
  const { id } = useParams();
  const { state } = useLocation();

  const getTransferRateList = async () => {
    try {
      const { data } = await axiosOther.post("transferratelist", {
        id: id,
      });
      setTransferRateList(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransferRateList();
  }, []);

  console.log("transfer-list", transferRateList);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await transferRateValidationSchema?.validate(formValue, {
        abortEarly: false,
      });
      setErrorMessage("");
      console.log("value", {
        ...formValue,
        TransferId: id,
      });

      const { data } = await axiosOther.post(
        !isUpdating ? "addtransferrate" : "updatetransferrate",
        {
          ...formValue,
          TransferId: id,
        }
      );

      console.log("response", data);
      if (data?.Status ==1) {
        getTransferRateList();
        toast.success(data?.Message);
        setFormValue(transferRateAddInitialValue);
      }
      if (data?.Status !=1) {
        toast.error(data?.Message);
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

  const handleRateEdit = (value, tranferId, destinationId, companyId) => {
    setFormValue({
      TransferId: tranferId,
      RateUniqueId: value?.UniqueID,
      CompanyId: companyId,
      DestinationID: destinationId,
      SupplierId: value?.SupplierId,
      ValidFrom: value?.ValidFrom,
      ValidTo: value?.ValidTo,
      CurrencyId: value?.CurrencyId,
      VehicleTypeId: value?.VehicleTypeId,
      VehicleCost: value?.VehicleCost,
      ParkingFee: value?.ParkingFee,
      RapEntryFee: value?.RapEntryFee,
      Assistance: value?.Assistance,
      AdtnlAllowance: value?.AdtnlAllowance,
      InterStateToll: value?.InterStateToll,
      MiscCost: value?.MiscCost,
      TaxSlabId: value?.TaxSlabId,
      Remarks: value?.Remarks,
      Status: value?.Status,
      AddedBy: value?.AddedBy,
      UpdatedBy: value?.UpdatedBy,
      AddedDate: "2024-09-11",
      UpdatedDate: "2024-09-11",
    });
    setIsUpdating(true);
  };

  const handleResetForm = () => {
    setFormValue(transferRateAddInitialValue);
    setIsUpdating(false);
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
      const { data } = await axiosOther.post("destinationlist", {
        CountryId: "",
        StateId: "",
        Name: "",
        Default: "",
        Status: "",
      });
      setDestinationList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
    try {
      const { data } = await axiosOther.post("vehicletypemasterlist", {
        Search: "",
        Status: "",
      });
      setVehicleList(data?.DataList);
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
        <div className="card shadow-none border mb-0">
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
                to="/master/transfer"
                className="gray-button"
                aria-expanded="false"
              >
                Back
              </NavLink>
              <Toaster/>
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
                    DESTINATION <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.DestinationID && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.DestinationID}
                    </span>
                  )}
                </div>
                <select
                  name="DestinationID"
                  value={formValue?.DestinationID}
                  onChange={handleInputChange}
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  {destinationList?.map((item) => {
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
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    VEHICLE TYPE
                  </label>
                </div>
                <select
                  name="VehicleTypeId"
                  className="form-input-6"
                  value={formValue?.VehicleTypeId}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  {vehicleList?.map((item) => {
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
                    TAX SLAB <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.TaxSlabId && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.TaxSlabId}
                    </span>
                  )}
                </div>
                <select
                  name="TaxSlabId"
                  id=""
                  className="form-input-6"
                  value={formValue?.TaxSlabId}
                  onChange={handleInputChange}
                >
                  <option value="0">Select</option>
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
                    VEHICLE COST
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="VehicleCost"
                  placeholder="VEHICLE COST"
                  value={formValue?.VehicleCost}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    PARKING FEE
                  </label>
                </div>
                <input
                  type="text"
                  className="form-input-6"
                  name="ParkingFee"
                  placeholder="PARKING FEE"
                  value={formValue?.ParkingFee}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    REP ENTRY FEE
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="RapEntryFee"
                  placeholder="ENTRY FEE"
                  value={formValue?.RapEntryFee}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    ASSISTANCE
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="Assistance"
                  placeholder="ASSISTANCE"
                  value={formValue?.Assistance}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    ADTNL ALLOWENCE
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="AdtnlAllowance"
                  placeholder="ALLOWENCE"
                  value={formValue?.AdtnlAllowance}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    ENTER STATE & TOLL
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="InterStateToll"
                  placeholder="STATE TOLL"
                  value={formValue?.InterStateToll}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    MISC COST
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="MiscCost"
                  placeholder="MISC COST"
                  value={formValue?.MiscCost}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    STATUS <span className="text-danger">*</span>
                  </label>
                </div>
                <select
                  name="DayType"
                  id=""
                  className="form-input-6"
                  value={formValue?.Status}
                  onChange={handleInputChange}
                >
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
              <div className="col-12">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    REMARKS
                  </label>
                </div>
                <textarea
                  type="text"
                  className="form-input-6"
                  name="Remarks"
                  placeholder="REMARKS"
                  value={formValue?.Remarks}
                  onChange={handleInputChange}
                />
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
                  <th className="p-0 text-center py-1">Transportation Name</th>
                  <th className="p-0 text-center py-1">Type</th>
                  <th className="p-0 text-center py-1">Destination</th>
                  <th className="p-0 text-center py-1">Vehicle Type</th>
                  <th className="p-0 text-center py-1">Tax Slab(TAX%)</th>
                  <th className="p-0 text-center py-1">Vehicle Cost</th>
                  <th className="p-0 text-center py-1">Parking</th>
                  <th className="p-0 text-center py-1">
                    Representative Entry Fee
                  </th>
                  <th className="p-0 text-center py-1">Assistance</th>
                  <th className="p-0 text-center py-1">Additional Allowence</th>
                  <th className="p-0 text-center py-1">Inter State & Toll</th>
                  <th className="p-0 text-center py-1">Miscellaneous Cost</th>
                  <th className="p-0 text-center py-1">Status</th>
                  <th className="p-0 text-center py-1">Action</th>
                </tr>
              </thead>
              <tbody>
                {transferRateList?.map((item1) => {
                  return item1?.Data?.map((item2) => {
                    return item2?.RateDetails?.map((item) => {
                      return (
                        <tr key={item?.UniqueID}>
                          <td className="text-center">
                            {item?.VehicleTypeName}
                          </td>
                          <td className="text-center">{item?.Service}</td>
                          <td className="text-center">
                            {item?.DestinationName}
                          </td>
                          <td className="text-center">
                            {item?.VehicleTypeName}
                          </td>
                          <td className="text-center">{item?.TaxSlabVal}</td>
                          <td className="text-center">{item?.VehicleCost}</td>
                          <td className="text-center">{item?.ParkingFee}</td>
                          <td className="text-center">{item?.RapEntryFee}</td>
                          <td className="text-center">{item?.Assistance}</td>
                          <td className="text-center">
                            {item?.AdtnlAllowance}
                          </td>
                          <td className="text-center">
                            {item?.InterStateToll}
                          </td>
                          <td className="text-center">{item?.MiscCost}</td>
                          <td className="text-center">{item?.Status}</td>
                          <td>
                            <i
                              className="fa-solid fa-pen-to-square text-success fs-5 cursor-pointer"
                              onClick={() =>
                                handleRateEdit(
                                  item,
                                  item1?.TransferId,
                                  item1?.DestinationID,
                                  item1?.companyId
                                )
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

export default TransferRate;
