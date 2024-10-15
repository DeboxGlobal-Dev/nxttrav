import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink, useLocation, useParams } from "react-router-dom";
import {
  trainRateAddInitialValue,
  trainRateValidationShema,
} from "./MasterValidations";
import { axiosOther } from "../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";

const TrainRate = () => {
  const [formValue, setFormValue] = useState(trainRateAddInitialValue);
  const [supplierList, setSupplierList] = useState([]);
  const [trainList, setTrainList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [trainRateList, setTrainRateList] = useState([]);
  const [errorMessgae, setErrorMessage] = useState("");
  const { id } = useParams();
  const { state } = useLocation();

  const getTrainRateList = async () => {
    try {
      const { data } = await axiosOther.post("trainratelist", {
        id: id,
      });
      setTrainRateList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrainRateList();
  }, []);

  console.log("train-rate-list", trainRateList);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await trainRateValidationShema?.validate(formValue, {
        abortEarly: false,
      });
      setErrorMessage("");
      console.log("value", {
        ...formValue,
        TrainId: id,
      });

      const { data } = await axiosOther.post("addtrainrate", {
        ...formValue,
        TrainId: id,
      });

      console.log("response", data);
      if (data?.Status == 1) {
        getTrainRateList();
        toast.success(data?.Message);
        setFormValue(trainRateAddInitialValue);
      }

      if (data?.Status != 1) {
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

  const handleRateEdit = (value) => {
    setFormValue(value);
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
      const { data } = await axiosOther.post("trainclasslist", {
        Search: "",
        Status: "",
      });
      setTrainList(data?.DataList);
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
                to="/master/train"
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
                    Train Number <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.TrainNumber && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.TrainNumber}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="TRAIN NUMBER"
                  className="form-input-6"
                  name="TrainNumber"
                  value={formValue?.TrainNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    JOURNEY TYPE <span className="text-danger">*</span>
                  </label>
                  {errorMessgae?.JourneyType && (
                    <span className="text-danger font-size-12">
                      {errorMessgae?.JourneyType}
                    </span>
                  )}
                </div>
                <select
                  name="JourneyType"
                  value={formValue?.JourneyType}
                  onChange={handleInputChange}
                  className="form-input-6"
                >
                  <option value="day_journey">Day Journey</option>
                  <option value="overnight_journey">Overnight Journey</option>
                </select>
              </div>
              <div className="col-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="" className="m-0 font-size-12">
                    TRAIN CLASSES
                  </label>
                </div>
                <select
                  name="TrainClassId"
                  value={formValue?.TrainClassId}
                  onChange={handleInputChange}
                  className="form-input-6"
                >
                  <option value="">Select</option>
                  {trainList?.map((item) => {
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
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    ADULT COST
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="AdultCost"
                  placeholder="ADULT COST"
                  value={formValue?.AdultCost}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    CHILD COST
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="ChildCost"
                  placeholder="CHILD COST"
                  value={formValue?.ChildCost}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="" className="m-0 font-size-12">
                    INFANT COST
                  </label>
                </div>
                <input
                  type="number"
                  className="form-input-6"
                  name="InfantCost"
                  placeholder="INFANT COST"
                  value={formValue?.InfantCost}
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
                  <th className="p-0 text-center py-1">Train Name</th>
                  <th className="p-0 text-center py-1">Train Class</th>
                  <th className="p-0 text-center py-1">Journey Type</th>
                  <th className="p-0 text-center py-1">Currency</th>
                  <th className="p-0 text-center py-1">Adult Cost</th>
                  <th className="p-0 text-center py-1">Child Cost</th>
                  <th className="p-0 text-center py-1">Infant Cost</th>
                  <th className="p-0 text-center py-1">Remarks</th>
                  <th className="p-0 text-center py-1">Status</th>
                  <th className="p-0 text-center py-1">Action</th>
                </tr>
              </thead>
              <tbody>
                {trainRateList?.map((item) => {
                  return item?.Data?.map((item) => {
                    return item?.RateDetails?.map((item) => {
                      return (
                        <tr key={item?.UniqueID}>
                          <td className="text-center">{item?.SupplierName}</td>
                          <td className="text-center">{item?.TrainNumber}</td>
                          <td className="text-center">
                            {item?.TrainClassName}
                          </td>
                          <td className="text-center">{item?.JourneyType}</td>
                          <td className="text-center">--</td>
                          <td className="text-center">{item?.AdultCost}</td>
                          <td className="text-center">{item?.ChildCost}</td>
                          <td className="text-center">{item?.InfantCost}</td>
                          <td className="text-center">{item?.Remarks}</td>
                          <td className="text-center">{item?.Status}</td>
                          <td>
                            <i
                              className="fa-solid fa-pen-to-square text-success fs-5 cursor-pointer"
                              onClick={() => handleRateEdit()}
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

export default TrainRate;
