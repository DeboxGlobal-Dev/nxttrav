import React, { useState, useEffect } from "react";
import { agentBankDetailsInitialValue } from "../mastersInitialValues";
import { axiosOther } from "../../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";

const BankDetails = ({partner_payload}) => {
  const [bankData, setBankData] = useState(agentBankDetailsInitialValue);
  const [bankList, setBankList] = useState([]);

  console.log(`form with partner ${partner_payload.name}` , bankData);
  const handleBankDataChange = (e) => {
    const { name, value } = e.target;

    setBankData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitBankData = async () => {
    const { data } = await axiosOther.post("addupdatebankdetails", bankData);
    toast.success(data.Message);
    setBankData(agentBankDetailsInitialValue);
  };

  const fetchingBankData = async () => {
    const { data } = await axiosOther.post("bankdetailslist", {
      Fk_partnerid: "1",
      Type: "",
    });
    setBankList(data.DataList);
  };

  useEffect(() => {
    fetchingBankData();
  }, []);

  return (
    <>
      <div className="">
        <div className="d-flex gap-5">
          <p className="fs-6 font-weight-bold">Bank Details</p>
          <p
            data-toggle="modal"
            data-target="#bankdetails"
            className="fs-6 font-weight-bold text-success cursor-pointer"
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
                      <label htmlFor="bankname" className="m-0">
                        Bank Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Bank Name"
                        name="BankName"
                        value={bankData.BankName}
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
                        value={bankData.PhoneNumber}
                        onChange={handleBankDataChange}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="branchname" className="m-0">
                        Branch Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Branch Name"
                        name="BankBranch"
                        value={bankData.BankBranch}
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
                        value={bankData.EmailId}
                        onChange={handleBankDataChange}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="benifeciaryn" className="m-0">
                        Benifeciary N
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Benifeciary Name"
                        name="BenificiryName"
                        value={bankData.BenificiryName}
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
                        value={bankData.SwiftCode}
                        onChange={handleBankDataChange}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="accountnumber" className="m-0">
                        Account Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Account Number"
                        name="AccountNumber"
                        value={bankData.AccountNumber}
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
                        value={bankData.Address}
                        onChange={handleBankDataChange}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="ifsccode" className="m-0">
                        IFSC Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="IFSC Code"
                        name="IfscCode"
                        value={bankData.IfscCode}
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
            {bankList.map((details, index) => {
              return (
                <tr key={index + 1}>
                  <th className="py-1">{details?.BankName}</th>
                  <td className="py-1">{details?.BankBranch}</td>
                  <td className="py-1">{details?.BenificiryName}</td>
                  <td className="py-1">{details?.AccountNumber}</td>
                  <td className="py-1">{details?.IfscCode}</td>
                  <td className="py-1">{details?.PhoneNumber}</td>
                  <td className="py-1">{details?.EmailId}</td>
                  <td className="py-1">{details?.SwiftCode}</td>
                  <td className="py-1"></td>
                  <td className="py-1">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash pl-2"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BankDetails;
