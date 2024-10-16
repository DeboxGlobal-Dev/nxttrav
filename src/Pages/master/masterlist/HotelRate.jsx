import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink, useLocation, useParams } from "react-router-dom";
import {
  hotelRateAddInitialValue,
  hotelRateAddValidationSchema,
} from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";

const HotelRate = () => {
  const [formValue, setFormValue] = useState(hotelRateAddInitialValue);
  const [marketTypeList, setMarketTypeList] = useState([]);
  const [supplierList, setSupplierList] = useState([]);
  const [tarifTypeList, setTarifTypeList] = useState([]);
  const [bedTypeList, setBedTypeList] = useState([]);
  const [seasonList, setSeasonList] = useState([]);
  const [paxTypeList, setPaxTypeList] = useState([]);
  const [roomTypeList, setRoomTypeList] = useState([]);
  const [mealPlanList, setMealPlanList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [taxSlabList, setTaxSlabList] = useState([]);
  const [hotelRateList, setHotelRateList] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [errorMessgae, setErrorMessage] = useState("");
  const { id } = useParams();
  const { state } = useLocation();

  const getHotelRateList = async () => {
    try {
      const { data } = await axiosOther.post("listHotelRatesJson", {
        id: id,
      });
      setHotelRateList(data?.data);
      console.log("hotel-data", data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHotelRateList();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await hotelRateAddValidationSchema?.validate(formValue, {
        abortEarly: false,
      });
      setErrorMessage("");
      console.log("value", {
        ...formValue,
        HotelId: id,
      });

      const { data } = await axiosOther.post(
        !isUpdating ? "addhotelrates" : "updatehotelratejson",
        {
          ...formValue,
          HotelId: id,
        }
      );
      console.log("response", data);
      if (data?.Status == 1) {
        getHotelRateList();
        toast.success(data?.Message);
        setFormValue(hotelRateAddInitialValue);
      }
      if (data?.Status != 1) {
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

  const handleRateEdit = (value, hoteluuId, destinationId, hotelId) => {
    setFormValue({
      HotelId: hotelId,
      RateUniqueId: value?.UniqueID,
      HotelUUID: hoteluuId,
      CompanyId: "COMP0001",
      DestinationID: destinationId,
      SupplierId: value?.SupplierId,
      ValidFrom: value?.ValidFrom,
      ValidTo: value?.ValidTo,
      MarketTypeId: value?.MarketTypeId,
      PaxTypeId: value?.PaxTypeId,
      TarrifeTypeId: value?.TarrifeTypeId,
      SeasonTypeID: value?.SeasonTypeID,
      SeasonYear: value?.SeasonYear,
      RoomCost: value?.RoomCost,
      MealCost: value?.MealCost,
      CurrencyId: value?.CurrencyId,
      RoomTypeID: value?.RoomTypeID,
      MealPlanId: value?.MealPlanId,
      RoomBedType: value?.RoomBedType,
      RoomTaxSlabId: value?.RoomTaxSlabId,
      MealSlabId: value?.MealSlabId,
      MarkupType: value?.MarkupType,
      MarkupCost: value?.MarkupCost,
      MealType: value?.MealType,
      Remarks: value?.Remarks,
      Status: value?.Status,
      AddedBy: value?.AddedBy,
      UpdatedBy: value?.UpdatedBy,
      UpdatedDate: "2024-08-30",
    });
    setIsUpdating(true);
  };

  const handleResetForm = () => {
    setFormValue(hotelRateAddInitialValue);
    setIsUpdating(false);
  };
  // console.log("hotel-rate-list", hotelRateList);

  // get data from server for dropdown
  const postDataToServer = async () => {
    try {
      const { data } = await axiosOther.post("fetch-supplier-name-list", {
        id: "",
        Name: "",
      });
      setSupplierList(data?.DataList);
      console.log("supplier-list", data);
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
      console.log("currency-list", data);
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
      console.log("tax-master", data);
    } catch (error) {
      console.log(error);
    }
    try {
      const { data } = await axiosOther.post("paxlist", {
        PaxType: "",
      });
      setPaxTypeList(data?.DataList);
      console.log("paxlist", data);
    } catch (error) {
      console.log(error);
    }
    try {
      const { data } = await axiosOther.post("roomsharingmasterlist", {
        Search: "",
        Status: "",
      });
      console.log;
      "room-sharing", data;
      setBedTypeList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
    try {
      const { data } = await axiosOther.post("seasonlist", {
        Search: "",
        Status: "",
      });
      console.log("season-list", data);
      setSeasonList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
    try {
      const { data } = await axiosOther.post("roomtypelist", {
        Search: "",
        Status: "",
      });
      console.log("roomtype", data);
      setRoomTypeList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
    try {
      const { data } = await axiosOther.post("hotelmealplanlist", {
        Search: "",
        Status: "",
      });
      console.log("hotel-meal-plan", data);
      setMealPlanList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
    // try {
    //   const { data } = await axiosOther.post("markettypemasterlist", {
    //     id: "",
    //     Search: "",
    //     Status: "",
    //   });
    //   console.log("market-type-list", data);
    //   setMarketTypeList(data?.DataList);
    // } catch (error) {
    //   console.log(error);
    // }
    try {
      const { data } = await axiosOther.post("tarifftypelist", {
        id: "",
        Search: "",
        Status: "",
      });
      console.log("tariff-type", data);
      setTarifTypeList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postDataToServer();
  }, []);

  // season year
  const getYearForSeason = () => {
    const currentYear = new Date().getFullYear();
    const tenYearArr = [];

    for (let i = 0; i < 10; i++) {
      tenYearArr.push(currentYear + i);
    }
    return tenYearArr;
  };
  const YearList = getYearForSeason();

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
                to="/master/hotelmaster"
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
                    MARKET TYPE <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.MarketTypeId && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.MarketTypeId}
                    </span>
                  )}
                </div>
                <select
                  name="MarketTypeId"
                  value={formValue?.MarketTypeId}
                  onChange={handleInputChange}
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  {marketTypeList?.map((item) => {
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
                    PAX TYPE
                  </label>
                </div>
                <select
                  name="PaxTypeId"
                  id=""
                  value={formValue?.PaxTypeId}
                  onChange={handleInputChange}
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  {paxTypeList?.map((item) => {
                    return (
                      <option value={item?.id} key={item?.id}>
                        {item?.Paxtype}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    TARIF TYPE <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.TarrifeTypeId && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.TarrifeTypeId}
                    </span>
                  )}
                </div>
                <select
                  name="TarrifeTypeId"
                  id=""
                  value={formValue?.TarrifeTypeId}
                  onChange={handleInputChange}
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  {tarifTypeList?.map((item) => {
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
                    SEASON TYPE <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.SeasonTypeID && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.SeasonTypeID}
                    </span>
                  )}
                </div>
                <select
                  name="SeasonTypeID"
                  id=""
                  value={formValue?.SeasonTypeID}
                  onChange={handleInputChange}
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  {seasonList?.map((item) => {
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
                    SEASON YEAR <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.SeasonYear && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.SeasonYear}
                    </span>
                  )}
                </div>
                <select
                  name="SeasonYear"
                  id=""
                  value={formValue?.SeasonYear}
                  onChange={handleInputChange}
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  {YearList?.map((year, ind) => {
                    return (
                      <option value={year} key={ind}>
                        {year}
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
                    ROOM TYPE <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.RoomTypeID && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.RoomTypeID}
                    </span>
                  )}
                </div>
                <select
                  name="RoomTypeID"
                  id=""
                  className="form-input-6"
                  value={formValue?.RoomTypeID}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  {roomTypeList?.map((item) => {
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
                    MEAL PLAN <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.MealPlanId && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.MealPlanId}
                    </span>
                  )}
                </div>
                <select
                  name="MealPlanId"
                  id=""
                  className="form-input-6"
                  value={formValue?.MealPlanId}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  {mealPlanList?.map((item) => {
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

              <div className="col-4">
                <div className="border p-2">
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="" className="m-0 font-size-12">
                        BED TYPE
                      </label>
                      <div>
                        <select
                          name="RoomBedType"
                          value={formValue?.RoomBedType}
                          onChange={handleInputChange}
                          className="form-input-6"
                        >
                          <option value="">Select</option>
                          {bedTypeList?.map((item) => {
                            return (
                              <option value={item?.id} key={item?.id}>
                                {item?.Name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor="" className="m-0 font-size-12">
                        ROOM COST
                      </label>
                      <div>
                        <input
                          type="number"
                          placeholder="Cost"
                          className="form-input-6"
                          name="RoomCost"
                          value={formValue?.RoomCost}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor="" className="m-0 font-size-12">
                        ROOM TAX SLAB <span className="text-danger">*</span>
                      </label>
                      <div>
                        <select
                          name="RoomTaxSlabId"
                          value={formValue?.RoomTaxSlabId}
                          onChange={handleInputChange}
                          className="form-input-6"
                        >
                          <option value="">Select</option>
                          {taxSlabList?.DataList?.map((item) => {
                            return (
                              <option value={item?.id} key={item?.id}>
                                {" "}
                                {item?.TaxSlabName} ({item?.TaxValue})
                              </option>
                            );
                          })}
                        </select>
                        {errorMessgae?.RoomTaxSlabId && (
                          <span className="text-danger font-size-12">
                            {errorMessgae?.RoomTaxSlabId}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="border p-2">
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="" className="m-0 font-size-12">
                        MEAL TYPE
                      </label>
                      <div>
                        <select
                          name="MealType"
                          value={formValue?.MealType}
                          onChange={handleInputChange}
                          className="form-input-6"
                        >
                          <option value="breakfast">Breakfast</option>
                          <option value="lunch">Lunch</option>
                          <option value="dinner">Dinner</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor="" className="m-0 font-size-12">
                        MEAL COST
                      </label>
                      <div>
                        <input
                          type="number"
                          placeholder="Cost"
                          className="form-input-6"
                          name="MealCost"
                          value={formValue?.MealCost}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="">
                        <label htmlFor="" className="m-0 font-size-12">
                          MEAL TAX SLAB <span className="text-danger">*</span>
                        </label>
                      </div>
                      <div>
                        <select
                          name="MealSlabId"
                          value={formValue?.MealSlabId}
                          onChange={handleInputChange}
                          className="form-input-6"
                        >
                          <option value="">Slab 1</option>
                          {taxSlabList?.DataList?.map((item) => {
                            return (
                              <option value={item?.id} key={item?.id}>
                                {item?.TaxSlabName} ({item?.TaxValue})
                              </option>
                            );
                          })}
                        </select>
                        {errorMessgae?.MealSlabId && (
                          <span className="text-danger font-size-12">
                            {errorMessgae?.MealSlabId}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="border p-2">
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="" className="m-0 font-size-12">
                        MARKUP TYPE
                      </label>
                      <div>
                        <select
                          name="MarkupType"
                          value={formValue?.MarkupType}
                          onChange={handleInputChange}
                          className="form-input-6"
                        >
                          <option value="percentage">%</option>
                          <option value="flat">Flat</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-6">
                      <label htmlFor="" className="m-0 font-size-12">
                        MARKUP COST
                      </label>
                      <div>
                        <input
                          type="number"
                          placeholder="Cost"
                          className="form-input-6"
                          name="MarkupCost"
                          value={formValue?.MarkupCost}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    STATUS
                  </label>
                </div>
                <select
                  name="Status"
                  id=""
                  className="form-input-6"
                  value={formValue?.Status}
                  onChange={handleInputChange}
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
                  name="Remarks"
                  placeholder="Remarks"
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
        <div className="row ">
          <div className="col-12 overflow-x-scroll rate-list-table">
            <table className="table table-bordered  table-striped table-responsive">
              <thead>
                <tr>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    SEASON
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    VALIDITY
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    PAX TYPE
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    MARKET TYPE
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    SUPPLIER
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    TARIF TYPE
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    ROOM TYPE
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    MEAL PLAN
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    ROOM BED TYPE
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    ROOM COST
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    MEAL TYPE
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    MEAL COST
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    TAC(%)
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10 ">
                    ROOM TAX SLAB
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    MEAL TAX SLAB
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    MARKUP
                  </th>
                  <th className="p-0 text-center py-1 text-nowrap px-1 font-size-10">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {hotelRateList?.map((item1) => {
                  return item1?.Data?.map((item2) => {
                    return item2?.RateDetails?.map((item) => {
                      return (
                        <tr key={item?.UniqueID}>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.SeasonTypeName}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.ValidTo}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.PaxTypeName}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.MarketTypeName}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.SupplierName}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.TarrifeTypeName}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.RoomTypeName}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.MealPlanName}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.RoomBedType}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.RoomCost}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.Status}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.Status}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.TAC?.toFixed(2)}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.RoomTaxSlabValue}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.MealSlabValue}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.MarkupType}
                          </td>
                          <td className="text-center text-nowrap font-size-10">
                            {item?.Status}
                          </td>
                          <td>
                            <i
                              className="fa-solid fa-pen-to-square text-success fs-5 cursor-pointer"
                              onClick={() =>
                                handleRateEdit(
                                  item,
                                  item1?.HotelUUID,
                                  item1?.DestinationID,
                                  item1?.hotelId
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

export default HotelRate;
