import React, { useState } from "react";
import { addOfficeInitialValue } from "../mastersInitialValues";
import { axiosOther } from "../../../../http/axios/axios_new";
import toast, { Toaster } from "react-hot-toast";

const Office = ({partner_payload}) => {
  const [formData, setFormData] = useState(addOfficeInitialValue);

  console.log(`form with partner ${partner_payload.name}` , formData);

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitData = () => {
    const { data } = axiosOther.post("addupdateoffice", {...formData,...partner_payload});
    toast.success(data.Message);
    console.log(data);
  };

  console.log("formdata", formData);
  return (
    <>
      <div className="">
        <div className="d-flex gap-5">
          <p className="fs-6 font-weight-bold">Office Address</p>
          <p
            data-toggle="modal"
            data-target="#modal_form_vertical"
            className="fs-6 font-weight-bold text-success cursor-pointer"
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

                <form>
                  <div className="modal-body">
                    <div className="row row-gap-3">
                      <div className="col-4">
                        <label htmlFor="officename" className="m-0">
                          Office Name
                        </label>
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
                        <label htmlFor="country" className="m-0">
                          Country
                        </label>
                        <select
                          className="form-control"
                          name="Country"
                          value={formData.Country}
                          onChange={handleChangeFormData}
                        >
                          <option value="">Select</option>
                          <option value="1">India</option>
                          <option value="2">Bangladesh</option>
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
                          <option value="1">Delhi</option>
                          <option value="2">Dhanka</option>
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
                          <option value="1">New Delhi</option>
                          <option value="2">Gurgaon</option>
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
                </form>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-bordered agent-view-table">
          <thead>
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

export default Office;
