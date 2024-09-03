import React, { useEffect, useState } from "react";
import { memo } from "react";
import { addContactInitialValue } from "../mastersInitialValues";
import { axiosOther } from "../../../../http/axios/axios_new";
import { addContactPersonValidationSchema } from "../MasterValidations";
import { error } from "jquery";

const ContactPerson = ({ partner_payload }) => {
  const [formData, setFormData] = useState(addContactInitialValue);
  const [contactList, setContactList] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBusinessCardFirstImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64String = reader.result;
      setFormData({
        ...formData,
        ImageNameOne: file.name,
        ImageOneData: base64String,
      });
    };
  };

  const handleBusinessCardSecondImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64String = reader.result;
      setFormData({
        ...formData,
        ImageNameTwo: file.name,
        ImageTwoData: base64String,
      });
    };
  };

  const handleBusinessCardThirdImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result;
      setFormData({
        ...formData,
        ImageNameThree: file.name,
        ImageThreeData: base64String,
      });
    };
  };

  const handleSubmitData = async () => {
    try {
      await addContactPersonValidationSchema.validate(formData, {
        abortEarly: false,
      });
      const { data } = await axiosOther.post("addupdatecontact", {
        ...formData,
        ParentId: 36,
      });
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

  const getContacList = async () => {
    try {
      const { data } = await axiosOther.post("contactlist", {
        Fk_partnerid: 38,
        BusinessType: "agent",
      });
      setContactList(data?.DataList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getContacList();
  }, []);

  console.log("contactList", contactList);

  return (
    <>
      <div className="">
        <div className="d-flex gap-5">
          <p className="fs-6 font-weight-bold">Contact Person</p>
          <p
            data-toggle="modal"
            data-target="#addcontactperson"
            className="fs-6 font-weight-bold text-success cursor-pointer"
          >
            + Add Contact Person
          </p>
          <div
            className="modal fade"
            id="addcontactperson"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header bg-info-700 py-2">
                  <h5 className="modal-title" id="exampleModalLabel">
                    ADD Contact Person
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
                        <label htmlFor="officename" className="m-0">
                          Office Name <span className="text-danger">*</span>
                        </label>
                        {errors?.OfficeName && (
                          <span className="text-danger font-size-10">
                            {errors?.OfficeName}
                          </span>
                        )}
                      </div>
                      <select
                        className="form-control"
                        name="OfficeName"
                        value={formData?.OfficeName}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Select</option>
                        <option value="1">Main Office</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <label htmlFor="metduring" className="m-0">
                        Met During
                      </label>
                      <input
                        type="text"
                        placeholder="Met During"
                        className="form-control"
                        name="MetDuring"
                        value={formData?.MetDuring}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="title" className="m-0">
                          Title{" "}
                          <span className="text-danger font-size-10">*</span>
                        </label>
                        {
                          <span className="text-danger font-size-10">
                            {errors?.Title}
                          </span>
                        }
                      </div>
                      <select
                        className="form-control"
                        name="Title"
                        value={formData?.Title}
                        onChange={handleChangeFormData}
                      >
                        <option value="None">None</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="firstname" className="m-0">
                          First Name <span className="text-danger">*</span>
                        </label>
                        {errors?.FirstName && (
                          <span className="text-danger font-size-10">
                            {errors?.FirstName}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="FirstName"
                        className="form-control"
                        value={formData?.FirstName}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="lastname" className="m-0">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="LastName"
                        className="form-control"
                        value={formData?.LastName}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="divison" className="m-0">
                          Divison <span className="text-danger">*</span>
                        </label>
                        {errors?.Division && (
                          <span className="text-danger font-size-10">
                            {errors?.Division}
                          </span>
                        )}
                      </div>
                      <select
                        className="form-control"
                        name="Division"
                        value={formData?.Division}
                        onChange={handleChangeFormData}
                      >
                        <option value="1">Finance</option>
                        <option value="2">Accounts</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="designation" className="m-0">
                          Designation <span className="text-danger">*</span>
                        </label>
                        {errors?.Designation && (
                          <span className="text-danger font-size-10">
                            {errors?.Designation}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Designation"
                        name="Designation"
                        value={formData?.Designation}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="newsletter" className="m-0">
                        News Letter
                      </label>
                      <select
                        className="form-control"
                        name="Newsletter"
                        value={formData?.Newsletter}
                        onChange={handleChangeFormData}
                      >
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="countrycode" className="m-0">
                          Country Code <span className="text-danger">*</span>
                        </label>
                        {errors?.CountryCode && (
                          <span className="text-danger font-size-10">
                            {errors?.CountryCode}
                          </span>
                        )}
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Designation"
                        name="CountryCode"
                        value={formData?.CountryCode}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="phone" className="m-0">
                          Phone <span className="text-danger">*</span>
                        </label>
                        {errors?.Phone && <span className="font-size-10 text-danger">{errors?.Phone}</span>}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        name="Phone"
                        value={formData?.Phone}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="mobile" className="m-0">
                        Mobile
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile"
                        name="MobileNo"
                        value={formData?.MobileNo}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="email" className="m-0">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="Email"
                        value={formData?.Email}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="alternateemail" className="m-0">
                        Alternate Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Alternate Email"
                        name="AlternateEmail"
                        value={formData?.AlternateEmail}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="dob" className="m-0">
                        DOB
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name="DateOfBirth"
                        value={formData?.DateOfBirth}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="anniversarydate" className="m-0">
                        Anniversary Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name="AnniversaryDate"
                        value={formData?.AnniversaryDate}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="skypeid" className="m-0">
                        Skype Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Skype"
                        name="SkypeId"
                        value={formData?.SkypeId}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="skypeid" className="m-0">
                        MSN ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="MSN"
                        name="MsnId"
                        value={formData?.MsnId}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="facebook" className="m-0">
                        Facebook Profile
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Facebook Profile"
                        name="FacebookProfile"
                        value={formData?.FacebookProfile}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="linkedin" className="m-0">
                        LinkedIn Profile
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="LinkedIn Profile"
                        name="LinkedInProfile"
                        value={formData?.LinkedInProfile}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="twitter" className="m-0">
                        Twitter Profile
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Twitter Profile"
                        name="TwitterProfile"
                        value={formData?.TwitterProfile}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="instagram" className="m-0">
                        Instagram Profile
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Instagram Profile"
                        name="InstagramProfile"
                        value={formData?.InstagramProfile}
                        onChange={handleChangeFormData}
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="status" className="m-0">
                        Status
                      </label>
                      <select
                        className="form-control"
                        name="Status"
                        value={formData?.Status}
                        onChange={handleChangeFormData}
                      >
                        <option value="">Active</option>
                        <option value="">InActive</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <label htmlFor="" className="m-0">
                          Business Card
                        </label>
                        <div className="col-4">
                          <label className="m-0 font-size-10">Image 1</label>
                          <label
                            htmlFor="firstimage"
                            className="form-input-1 border-0 p-0"
                          >
                            <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                              <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                              <p className="m-0 dark-primary-color">
                                {formData?.ImageNameOne
                                  ? formData?.ImageNameOne
                                  : " Upload Here.."}
                              </p>
                            </div>
                          </label>
                          <input
                            type="file"
                            name="ImageData"
                            id="firstimage"
                            className="form-input-1"
                            // value={firstImage}
                            onChange={handleBusinessCardFirstImage}
                            hidden
                          ></input>
                        </div>
                        <div className="col-4">
                          <label className="m-0 font-size-10">Image 2</label>
                          <label
                            htmlFor="secondimage"
                            className="form-input-1 border-0 p-0"
                          >
                            <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                              <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                              <p className="m-0 dark-primary-color">
                                {formData?.ImageNameTwo
                                  ? formData?.ImageNameTwo
                                  : " Upload Here.."}
                              </p>
                            </div>
                          </label>
                          <input
                            type="file"
                            name="ImageData"
                            id="secondimage"
                            className="form-input-1"
                            // value={secondImage.ImageData}
                            onChange={handleBusinessCardSecondImage}
                            hidden
                          ></input>
                        </div>
                        <div className="col-4">
                          <label className="m-0 font-size-10">Image 3</label>
                          <label
                            htmlFor="thirdimage"
                            className="form-input-1 border-0 p-0"
                          >
                            <div className="form-input-1 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                              <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                              <p className="m-0 dark-primary-color">
                                {formData?.ImageNameThree
                                  ? formData?.ImageNameThree
                                  : " Upload Here.."}
                              </p>
                            </div>
                          </label>
                          <input
                            type="file"
                            name="ImageData"
                            id="thirdimage"
                            className="form-input-1"
                            // value={thirdImage.ImageData}
                            onChange={handleBusinessCardThirdImage}
                            hidden
                          ></input>
                        </div>
                      </div>
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
                  <button className="green-button" onClick={handleSubmitData}>
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

export default memo(ContactPerson);
