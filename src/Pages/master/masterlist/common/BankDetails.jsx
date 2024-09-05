import React, { useState, useEffect, useRef } from "react";
import { agentBankDetailsInitialValue } from "../mastersInitialValues";
import { axiosOther } from "../../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";
import { memo } from "react";
import { bankDetailsValidationSchema } from "../MasterValidations";

const BankDetails = ({ partner_payload }) => {
  const [formData, setFormData] = useState(agentBankDetailsInitialValue);
  const [bankList, setBankList] = useState([]);
  const [errors, setErrors] = useState({});
  const closeRef = useRef(null);
  const modalRef = useRef(null);


  const handleBankDataChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitBankData = async () => {
    try {
      await bankDetailsValidationSchema.validate(formData, {
        abortEarly: false,
      });

      const { data } = await axiosOther.post("addupdatebankdetails", {
        ...formData,
        ...partner_payload
      });
      console.log('add-bank', data);
      if (data?.Status) {
        toast.success(data.Message);
        fetchingBankData();
        setFormData(agentBankDetailsInitialValue);
        closeRef.current.click();
      }
      console.log(data);
    } catch (error) {
      if (error?.inner) {
        const errorMessages = error?.inner.reduce((acc, curr) => {
          acc[curr?.path] = curr?.message;
          return acc;
        }, {});
        setErrors(errorMessages);
      }
    }
  };

  // console.log('bank-form', formData);

  async function fetchingBankData() {
    const { data } = await axiosOther.post("bankdetailslist", partner_payload);
    setBankList(data?.DataList);
  }

  useEffect(() => {
    fetchingBankData();
  }, []);

  const handleEditData = (data) =>{
    modalRef.current.click();
    setFormData(data);
  }

  const handleDeleteData = async (id) => {
    const { data } = await axiosOther.post("destroybankdetails", {
      id: id,
    });
    if (data?.Status === 1) {
      toast.success(data?.Message);
      fetchingBankData();
    }
    console.log(data);
  };

  return (
    <>
      <div className="">
        <div className="d-flex gap-5">
          <p className="fs-6 font-weight-bold">Bank Details</p>
          <p
            data-toggle="modal"
            data-target="#bankdetails"
            className="fs-6 font-weight-bold text-success cursor-pointer"
            ref={modalRef}
          >
            + Add Bank Details
          </p>
          <Toaster />
          <div
            className="modal fade"
            id="bankdetails"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header bg-info-700 py-2">
                  <h5 className="modal-title" id="exampleModalLabel">
                    ADD BANK DETAILS
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
                  <div className="row row-gap-2">
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="bankname" className="m-0">
                          Bank Name <span className="text-danger">*</span>
                        </label>
                        {errors?.BankName && (
                          <span className="text-danger font-size-10">
                            {errors?.BankName}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Bank Name"
                        name="BankName"
                        value={formData.BankName}
                        onChange={handleBankDataChange}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="phoneno" className="m-0">
                        Phone No
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone No"
                        name="PhoneNumber"
                        value={formData.PhoneNumber}
                        onChange={handleBankDataChange}
                      />
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="branchname" className="m-0">
                          Branch Name <span className="text-danger">*</span>
                        </label>
                        {errors?.BankBranch && (
                          <span className="text-danger font-size-10">
                            {errors?.BankBranch}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Branch Name"
                        name="BankBranch"
                        value={formData.BankBranch}
                        onChange={handleBankDataChange}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="emailid" className="m-0">
                        Email Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Id"
                        name="EmailId"
                        value={formData.EmailId}
                        onChange={handleBankDataChange}
                      />
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="benifeciaryn" className="m-0">
                          Benifeciary N <span className="text-danger">*</span>
                        </label>
                        {errors?.BenificiryName && (
                          <span className="text-danger font-size-10">
                            {errors?.BenificiryName}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Benifeciary Name"
                        name="BenificiryName"
                        value={formData.BenificiryName}
                        onChange={handleBankDataChange}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="swiftcode" className="m-0">
                        Swift Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Swift Code"
                        name="SwiftCode"
                        value={formData.SwiftCode}
                        onChange={handleBankDataChange}
                      />
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="accountnumber" className="m-0">
                          Account Number
                        </label>
                        {errors?.AccountNumber && (
                          <span className="text-danger font-size-10">
                            {errors?.AccountNumber}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Account Number"
                        name="AccountNumber"
                        value={formData.AccountNumber}
                        onChange={handleBankDataChange}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="documentnumber" className="m-0">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        name="Address"
                        value={formData.Address}
                        onChange={handleBankDataChange}
                      />
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="ifsccode" className="m-0">
                          IFSC Code
                        </label>
                        {errors?.IfscCode && (
                          <span className="text-danger font-size-10">
                            {errors?.IfscCode}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="IFSC Code"
                        name="IfscCode"
                        value={formData.IfscCode}
                        onChange={handleBankDataChange}
                      />
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
                  <button className="green-button" onClick={submitBankData}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-bordered agent-view-table">
          <thead className="thead-dark">
            <tr>
              <th className="px-1">Bank Name</th>
              <th className="py-1">Branch Name</th>
              <th className="py-1">Beneficiary</th>
              <th className="py-1">Account No</th>
              <th className="py-1">IFSC Code</th>
              <th className="py-1">Phone No</th>
              <th className="py-1">Email Id</th>
              <th className="py-1">Swift Code</th>
              <th className="py-1">Primary</th>
              <th className="py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {bankList?.length > 0 ? (
              bankList.map((list, index) => {
                return (
                  <tr key={index + 1}>
                    <th className="py-1">{list?.BankName}</th>
                    <td className="py-1">{list?.BankBranch}</td>
                    <td className="py-1">{list?.BenificiryName}</td>
                    <td className="py-1">{list?.AccountNumber}</td>
                    <td className="py-1">{list?.IfscCode}</td>
                    <td className="py-1">{list?.PhoneNumber}</td>
                    <td className="py-1">{list?.EmailId}</td>
                    <td className="py-1">{list?.SwiftCode}</td>
                    <td className="py-1"></td>
                    <td className="py-1 d-flex justify-content-center gap-2">
                      <i className="fa-solid fa-pen-to-square fs-6 text-success" onClick={()=>handleEditData(list)}></i>
                      <i 
                      className="fa-solid fa-trash fs-6 cursor-pointer text-danger"
                      onClick={()=>handleDeleteData(list?.id)}
                      ></i>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={10} className="fs-6">
                  No Records Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default memo(BankDetails);
