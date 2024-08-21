import React, { useState } from "react";


const ContactPerson = ({partner_payload}) => {

  const [firstImage, setFirstImage] = useState({
    ImageName: "",
    ImageData: "",
  });
  const [secondImage, setSecondImage] = useState({
    ImageName: "",
    ImageData: "",
  });
  const [thirdImage, setthirdImage] = useState({
    ImageName: "",
    ImageData: "",
  });
//   console.log(`form with partner ${partner_payload.name}` , formData);

  const handleBusinessCardFirstImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64String = reader.result;
      setFirstImage({ ...firstImage, ImageData: base64String });
    };
  };

  const handleBusinessCardSecondImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64String = reader.result;
      console.log("second-image", base64String);
      setSecondImage({ ...secondImage, ImageData: base64String });
    };
  };

  const handleBusinessCardThirdImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result;
      setthirdImage({ ...thirdImage, ImageData: base64String });
    };
  };

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

                <form>
                  <div className="modal-body">
                    <div className="row row-gap-2">
                      <div className="col-4">
                        <label htmlFor="officename" className="m-0">
                          Office Name
                        </label>
                        <select className="form-control">
                          <option value="">Select</option>
                          <option value="">Main Office</option>
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
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="title" className="m-0">
                          Title
                        </label>
                        <select className="form-control">
                          <option value="None">None</option>
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Ms">Ms</option>
                        </select>
                      </div>
                      <div className="col-4">
                        <label htmlFor="firstname" className="m-0">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="First Name"
                          name="FirstName"
                          className="form-control"
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
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="divison" className="m-0">
                          Divison
                        </label>
                        <select className="form-control">
                          <option value="">Accounts</option>
                          <option value="">Finance</option>
                        </select>
                      </div>
                      <div className="col-4">
                        <label htmlFor="designation" className="m-0">
                          Designation
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Designation"
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="newsletter" className="m-0">
                          News Letter
                        </label>
                        <select className="form-control">
                          <option value="">Yes</option>
                          <option value="">No</option>
                        </select>
                      </div>
                      <div className="col-4">
                        <label htmlFor="countrycode" className="m-0">
                          Country Code
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Designation"
                          name="CountryCode"
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="phone" className="m-0">
                          Phone
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                          name="Phone"
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
                          name="Mobile"
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
                          name=" AlternateEmail"
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="dob" className="m-0">
                          DOB
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          name=" DOB"
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="anniversarydate" className="m-0">
                          Anniversary Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          name="AnniversarDate"
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
                          name="Skype"
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
                          name="MSN"
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
                          name="Facebook"
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
                          name="Linkedin"
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
                          name="Twitter"
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
                          name="Instagram"
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="status" className="m-0">
                          Status
                        </label>
                        <select className="form-control">
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
                                  Upload Here..
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
                                  Upload Here..
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
                                  Upload Here..
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
                    <button type="submit" className="green-button">
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

export default ContactPerson;
