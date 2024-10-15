import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink, useLocation, useParams } from "react-router-dom";
import {
  restaurantRateAddInitialValue,
  restaurantRateValidationSchema,
} from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";

const RestaurantRate = () => {
  const [formValue, setFormValue] = useState(restaurantRateAddInitialValue);
  const [supplierList, setSupplierList] = useState([]);
  const [mealPlanList, setMealPlanList] = useState([]);
  const [taxSlabList, setTaxSlabList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [restaurantRateList, setRestaurantRateList] = useState([]);
  const [errorMessgae, setErrorMessage] = useState("");
  const { id } = useParams();
  const { state } = useLocation();

  const getRestaurantRateList = async () => {
    try {
      const { data } = await axiosOther.post("restaurantmasterRatelist", {
        id: id,
      });
      setRestaurantRateList(data?.DataList)
    } catch (error) {
      console.log(error);
    }
  };

  console.log('restaurant-list', restaurantRateList);


  useEffect(() => {
    getRestaurantRateList();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await restaurantRateValidationSchema?.validate(formValue, {
        abortEarly: false,
      });
      setErrorMessage("");
      console.log("value", {
        ...formValue,
        RestaurantId: id,
      });

      const {data} = await axiosOther.post("addrestaurantrate", {
        ...formValue,
        RestaurantId: id,
      });

      console.log("response", data);
      if(data?.Status ==1){
        getRestaurantRateList();
        toast.success(data?.Message);
        setFormValue(restaurantRateAddInitialValue);
      }
      if(data?.Status !=1){
        toast.error(data?.Message);
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

    const handleRateEdit = (value) =>{
      setFormValue(value);
    }

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
      const { data } = await axiosOther.post("hotelmealplanlist", {
        Search: "",
        Status: "",
      });
      setMealPlanList(data?.DataList);
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
                to="/master/resturant"
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
                    MEAL TYPE <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.MealTypeId && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.MealTypeId}
                    </span>
                  )}
                </div>
                <select
                  name="MealTypeId"
                  value={formValue?.MealTypeId}
                  onChange={handleInputChange}
                  className="form-input-6"
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
                  id=""
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
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    ADULT <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.AdultCost && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.AdultCost}
                    </span>
                  )}
                </div>
                <input
                  type="number"
                  placeholder="ADULT"
                  className="form-input-6"
                  name="AdultCost"
                  value={formValue?.AdultCost}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    CHILD
                  </label>
                </div>
                <input
                  type="number"
                  placeholder="CHILD"
                  className="form-input-6"
                  name="ChildCost"
                  value={formValue?.ChildCost}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    GST SLAB(%) <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.GstSlabId && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.GstSlabId}
                    </span>
                  )}
                </div>
                <select
                  name="GstSlabId"
                  value={formValue?.GstSlabId}
                  onChange={handleInputChange}
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
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    STATUS
                  </label>
                </div>
                <select
                  name="Status"
                  value={formValue?.Status}
                  onChange={handleInputChange}
                  className="form-input-6"
                >
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
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
                  <th className="p-0 text-center py-1">Supplier Name</th>
                  <th className="p-0 text-center py-1">Meal Plan</th>
                  <th className="p-0 text-center py-1">Currency</th>
                  <th className="p-0 text-center py-1">Adult Cost</th>
                  <th className="p-0 text-center py-1">Child Cost</th>
                  <th className="p-0 text-center py-1">Restaurant Tax Slab</th>
                  <th className="p-0 text-center py-1">Status</th>
                  <th className="p-0 text-center py-1">Action</th>
                </tr>
              </thead>
              <tbody>
              {restaurantRateList?.map((item) => {
                  return item?.Data?.map((item) => {
                    return item?.RateDetails?.map((item) => {
                      return (
                        <tr key={item?.UniqueID}>
                          <td className="text-center">{item?.SupplierName}</td>
                          <td className="text-center">{item?.MealType}</td>
                          <td className="text-center">{item?.CurrencyName}</td>
                          <td className="text-center">{item?.AdultCost}</td>
                          <td className="text-center">{item?.ChildCost}</td>
                          <td className="text-center">{item?.GstSlabName} ({item?.GstSlabValue})</td>
                          <td className="text-center">{item?.Status==1? 'Active' :'Inactive'}</td>
                          <td>
                            <i className="fa-solid fa-pen-to-square text-success fs-5 cursor-pointer" onClick={()=>handleRateEdit(item)}></i>
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

export default RestaurantRate;
