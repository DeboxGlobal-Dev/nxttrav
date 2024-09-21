import React, { useEffect, useRef, useState } from "react";
import { companyDocumentsInitialValue } from "../mastersInitialValues";
import { axiosOther } from "../../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";
import { memo } from "react";
import { companyDocumentValidationSchema } from "../MasterValidations";
import useImageUploader from "../../../../helper/custom_hook/useImageUploader";

const CompanyDocument = ({ partner_payload }) => {
  const [formData, setFormData] = useState(companyDocumentsInitialValue);
  const [imageName, setImageName] = useState("");
  const [documentList, setDocumentList] = useState([]);
  const { imageData, handleImage } = useImageUploader();
  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);
  const closeRef = useRef(null);

  const handleChangFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitData = async () => {
    try {
      await companyDocumentValidationSchema.validate(
        {
          ...formData,
          DocumentImageData: imageData?.DocumentImage?.data,
          DocumentImageName: imageData?.DocumentImage?.name,
        },
        {
          abortEarly: false,
        }
      );
      setErrors({});

      const { data } = await axiosOther.post("addupdatecompanydocument", {
        ...formData,
        DocumentImageData: imageData?.DocumentImage?.data,
        DocumentImageName: imageData?.DocumentImage?.name,
        ...partner_payload,
      });

      if (data.Status === 1) {
        toast.success(data.Message);
        setFormData(companyDocumentsInitialValue);
        closeRef.current.click();
        getDocumentListData();
      }
      if (data.Status === -1) {
        toast.error(data.Message);
      }
    } catch (err) {
      if (err?.inner) {
        const errorMessages = err?.inner.reduce((acc, crr) => {
          acc[crr.path] = crr.message;
          return acc;
        }, {});

        setErrors(errorMessages);
      }
    }
  };

  async function getDocumentListData() {
    try {
      const { data } = await axiosOther.post(
        "companydocumentlist",
        partner_payload
      );
      setDocumentList(data?.DataList);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDocumentListData();
  }, []);

  const handleEditData = (data) => {
    modalRef.current.click();
    setFormData(data);
  };

  const handleDeleteData = async (id) => {
    const { data } = await axiosOther.post("destroycompanydocument", {
      id: id,
    });
    if (data?.Status === 1) {
      toast.success(data?.Message);
      getDocumentListData();
    }
    console.log(data);
  };

  return (
    <>
      <div className="">
        <div className="d-flex gap-5">
          <p className="fs-6 font-weight-bold">Company Documents</p>
          <p
            data-toggle="modal"
            data-target="#companydocuments"
            className="fs-6 font-weight-bold text-success cursor-pointer"
            ref={modalRef}
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

                <div className="modal-body">
                  <div className="row row-gap-2">
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="documentname" className="m-0">
                          Document Name <span className="text-danger">*</span>
                        </label>
                        {errors?.DocumentName && (
                          <span className="text-danger font-size-10">
                            {errors?.DocumentName}
                          </span>
                        )}
                      </div>
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
                      <div className="d-flex justify-content-between">
                        <label className="m-0 ">
                          Document File <span className="text-danger">*</span>
                        </label>
                        {errors?.DocumentImageData && (
                          <span className="text-danger font-size-10">
                            {errors?.DocumentImageData}
                          </span>
                        )}
                      </div>
                      <label
                        htmlFor="agentheader"
                        className="form-input-1 border-0 p-0"
                      >
                        <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                          <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                          <p className="m-0 dark-primary-color">
                            {imageData?.DocumentImage?.name
                              ? imageData?.DocumentImage?.name
                              : "Upload Here.."}
                          </p>
                        </div>
                      </label>
                      <input
                        type="file"
                        name="DocumentImageData"
                        id="agentheader"
                        className="form-input-1"
                        value=""
                        onChange={(e) => handleImage(e, "DocumentImage")}
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
                    ref={closeRef}
                  >
                    Close
                  </button>
                  <button onClick={handleSubmitData} className="green-button">
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
              <th className="px-1">#</th>
              <th className="py-1">DOCUMENT NAME</th>
              <th className="py-1">DOCUMENT NUMBER</th>
              <th className="py-1">ISSUE DATE</th>
              <th className="py-1">EXPIRY DATE</th>
              <th className="py-1">DOCUMENT</th>
              <th className="py-1">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {documentList?.length > 0 ? (
              documentList?.map((list, index) => {
                return (
                  <tr key={index + 1}>
                    <th className="py-1">{index + 1}</th>
                    <td className="py-1">{list?.DocumentName}</td>
                    <td className="py-1">{list?.DocumentNumber}</td>
                    <td className="py-1">{list?.IssueDate}</td>
                    <td className="py-1">{list?.ExpireDate}</td>
                    <td className="py-1">view document</td>
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
                <td colSpan="7" className="fs-6 text-center">
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

export default React.memo(CompanyDocument);
