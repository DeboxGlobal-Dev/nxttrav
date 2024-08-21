import React, { useState } from "react";
import { addDocumentsInitialValue } from "../mastersInitialValues";
import { axiosOther } from "../../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";

const CompanyDocument = ({partner_payload}) => {
  const [formData, setFormData] = useState(addDocumentsInitialValue);

  const handleChangFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(`form with partner ${partner_payload.name}` , formData);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result;
      setFormData({ ...formData, DocumentPath: base64String });
    };
  };

  const handleSubmitData = () => {
    const { data } = axiosOther.post("addupdatecompanydocument");

    if (data.status == 1) {
      toast.success(data.Message);
    }
    if (data.status == -1) {
      toast.error(data.message);
    }
  };

  console.log("company-documents", formData);

  return (
    <>
      <div className="">
        <div className="d-flex gap-5">
          <p className="fs-6 font-weight-bold">Company Documents</p>
          <p
            data-toggle="modal"
            data-target="#companydocuments"
            className="fs-6 font-weight-bold text-success cursor-pointer"
          >
            + Add Documets
          </p>
          <Toaster />
          <div
            className="modal fade"
            id="companydocuments"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header bg-info-700 py-2">
                  <h5 className="modal-title" id="exampleModalLabel">
                    ADD DOCUMENTS
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

                <form>
                  <div className="modal-body">
                    <div className="row row-gap-2">
                      <div className="col-4">
                        <label htmlFor="documentname" className="m-0">
                          Document Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Document Name"
                          name="DocumentName"
                          value={formData.DocumentName}
                          onChange={handleChangFormData}
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="documentnumber" className="m-0">
                          Document Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Document Number"
                          name="DocumentNumber"
                          value={formData.DocumentNumber}
                          onChange={handleChangFormData}
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="issuedate" className="m-0">
                          Issue Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Issue Date"
                          name="IssueDate"
                          value={formData.IssueDate}
                          onChange={handleChangFormData}
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="expirydate" className="m-0">
                          Expiry Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Expiry Date"
                          name="ExpireDate"
                          value={formData.ExpireDate}
                          onChange={handleChangFormData}
                        />
                      </div>
                      <div className="col-8">
                        <label className="m-0 font-size-10">
                          Document File
                        </label>
                        <label
                          htmlFor="agentheader"
                          className="form-input-1 border-0 p-0"
                        >
                          <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                            <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                            <p className="m-0 dark-primary-color">
                              Upload Here..
                            </p>
                          </div>
                        </label>
                        <input
                          type="file"
                          name="DocumentPath"
                          id="agentheader"
                          className="form-input-1"
                          value=""
                          onChange={handleImageChange}
                          hidden
                        ></input>
                      </div>
                      <div className="col-12">
                        <label htmlFor="remarks" className="m-0">
                          Remarks
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Remarks"
                          name="Remarks"
                          value={formData.Remarks}
                          onChange={handleChangFormData}
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
                    <button onClick={handleSubmitData} className="green-button">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-bordered agent-view-table">
          <thead className="thead-dark">
            <tr>
              <th className="px-1">#</th>
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
            <tr>
              <th className="py-1">1</th>
              <td className="py-1">Mark</td>
              <td className="py-1">Otto</td>
              <td className="py-1">@mdo</td>
              <td className="py-1">@mdo</td>
              <td className="py-1">@mdo</td>
              <td className="py-1">@mdo</td>
              <td className="py-1">@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompanyDocument;
