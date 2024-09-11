import React, { useCallback, useEffect, useRef, useState } from "react";
import { addOfficeInitialValue } from "../mastersInitialValues";
import { axiosOther } from "../../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";
import { addAddressValidationSchema } from "../MasterValidations";

const Office = ({ partner_payload }) => {
  const [formData, setFormData] = useState(addOfficeInitialValue);
  const [officeList, setOfficeList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [errors, setErrors] = useState({});
  const closeRef = useRef(null);
  const modalRef = useRef(null);

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitData = async () => {

    try {
      await addAddressValidationSchema.validate(formData, {
        abortEarly: false,
      });
      const { data } = await axiosOther.post("addupdateoffice",{
        ...formData,
        ...partner_payload,
      });
      if (data?.Status === 1) {
        getOfficeListData();
        toast.success(data.Message);
        setFormData(addOfficeInitialValue);
        closeRef.current.click();
      }
    } catch (err) {
      const { Name } = err?.response?.data?.Errors;
      if (err?.inner) {
        const errorMessage = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrors(errorMessage);
      }

      if (err.response.status === 400) {
        toast.error(Name[0]);
      }
    }
  };

  async function getOfficeListData() {
    try {
      const { data } = await axiosOther.post("officelist", partner_payload);
      setOfficeList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOfficeListData();
  }, []);

  const handleEditData = (list) => {
    modalRef.current.click();
    setFormData(list);
  };

  const handleDeleteData = async (id) => {
    const { data } = await axiosOther.post("destroyoffice", {
      id: id,
    });
    if (data?.Status === 1) {
      toast.success(data?.Message);
      getOfficeListData();
    }
  };



  const getDataToServer = async () => {
    try {
      const countryData = await axiosOther.post("countrylist", {
        Search: "",
        Status: 1,
      });
      setCountryList(countryData.data.DataList);
    } catch (err) {
      console.log(err);
    }

    try {
      const stateData = await axiosOther.post("statelist", {
        Search: "",
        Status: 1,
      });
      setStateList(stateData.data.DataList);
    } catch (err) {
      console.log(err);
    }
    try {
      const stateData = await axiosOther.post("citylist", {
        Search: "",
        Status: 1,
      });
      setCityList(stateData.data.DataList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDataToServer();
  }, []);

  return (
    <>
      <div className="">
        <div className="d-flex gap-5">
          <p className="fs-6 font-weight-bold">Office Address</p>
          <p
            data-toggle="modal"
            data-target="#modal_form_vertical"
            className="fs-6 font-weight-bold text-success cursor-pointer"
            ref={modalRef}
          >
            + Add Office
          </p>
          <Toaster />
          <div
            className="modal fade"
            id="modal_form_vertical"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header bg-info-700 py-2">
                  <h5 className="modal-title" id="exampleModalLabel">
                    ADD ADDRESS
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row row-gap-3">
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="officename" className="m-0">
                          Office Name <span className="text-danger">*</span>
                        </label>
                        {errors?.Name && (
                          <span className="text-danger font-size-10">
                            {errors?.Name}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Office Name"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="country" className="m-0">
                          Country <span className="text-danger">*</span>
                        </label>
                        {errors?.Country && (
                          <span className="text-danger font-size-10">
                            {errors?.Country}
                          </span>
                        )}
                      </div>
                      <select
                        className="form-control"
                        name="Country"
                        value={formData.Country}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        {
                          countryList?.map((country, index)=>{
                            return(
                              <option value={country?.id} key={index+1}>{country?.Name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="col-4">
                      <label htmlFor="state" className="m-0">
                        State
                      </label>
                      <select
                        className="form-control"
                        name="State"
                        value={formData.State}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        {
                          stateList?.map((state, index)=>{
                            return(
                              <option value={state?.id} key={index+1}>{state?.Name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="col-4">
                      <label htmlFor="city" className="m-0">
                        City
                      </label>
                      <select
                        className="form-control"
                        name="City"
                        value={formData.City}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        {
                          cityList?.map((city,index)=>{
                            return(
                              <option value={city?.id} key={index+1}>{city?.Name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="col-4">
                      <label htmlFor="address" className="m-0">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        name="Address"
                        value={formData.Address}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="pincode" className="m-0">
                        Pin Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="PIN CODE"
                        name="PinCode"
                        value={formData.PinCode}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="gstn" className="m-0">
                        GSTN
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="GSTN"
                        name="Gstn"
                        value={formData.Gstn}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="pan" className="m-0">
                        PAN
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="PAN"
                        name="Pan"
                        value={formData.Pan}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="primaryaddress" className="m-0">
                        Primary Address
                      </label>
                      <select
                        className="form-control"
                        name="PrimaryAddress"
                        value={formData.PrimaryAddress}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        <option value="1">YES</option>
                        <option value="0">NO</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <label htmlFor="primaryaddress" className="m-0">
                        Place of delivery for invoice
                      </label>
                      <select
                        className="form-control"
                        name="PlaceOfDeliveryInvoice"
                        value={formData.PlaceOfDeliveryInvoice}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        <option value="1">Agent</option>
                        <option value="2">Agent By</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    id="cancel"
                    className="default-button"
                    data-dismiss="modal"
                    ref={closeRef}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="green-button"
                    onClick={handleSubmitData}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-bordered agent-view-table">
          <thead>
            <tr>
              <th className="px-1">Sr</th>
              <th className="py-1">Office Name</th>
              <th className="py-1">Country</th>
              <th className="py-1">Postal Zip</th>
              <th className="py-1">GSTN</th>
              <th className="py-1">Pan</th>
              <th className="py-1">Address</th>
              <th className="py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {officeList ? (
              officeList?.map((list, index) => {
                return (
                  <tr key={list?.id}>
                    <th className="py-1">{index + 1}</th>
                    <td className="py-1">{list?.Name}</td>
                    <td className="py-1">{list?.Country}</td>
                    <td className="py-1">{list?.PinCode}</td>
                    <td className="py-1">{list?.Gstn}</td>
                    <td className="py-1">{list?.Pan}</td>
                    <td className="py-1">{list?.Address}</td>
                    <td className="py-1 d-flex gap-2 justify-content-center border-0">
                      <i
                        className="fa-solid fa-pen-to-square fs-6 cursor-pointer text-success"
                        onClick={() => handleEditData(list)}
                      ></i>
                      <i
                        className="fa-solid fa-trash fs-6 cursor-pointer text-danger"
                        onClick={() => handleDeleteData(list?.id)}
                      ></i>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8">No Records Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default React.memo(Office);
