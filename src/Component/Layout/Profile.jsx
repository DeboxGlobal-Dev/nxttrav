import React from "react";
import Layout from "./Layout";

const Profile = () => {
  return (
    <>
      <Layout>
        <div className="content pt-0 mt-3 mb-4">
          <div className="row">
            <div className="col-xl-3">
              <div className="card">
                <div className="card-body text-center">
                  <div
                    className="card-img-actions d-inline-block mb-3 profile"
              
                  >
                    <img
                      className="img-fluid rounded-circle"
                      src={
                        "https://deboxglobal.in/salescrm/profilepic/1597303900iifa.PNG"
                      }
                      alt="user"
                    />
                    <div className="card-img-actions-overlay card-img rounded-circle"></div>
                  </div>
                  <h6 className="font-weight-semibold mb-0"></h6>
                  <span className="d-block text-muted">
                    Administrator
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="card">
                <div className="card-header bg-white">
                  <h6 className="card-title">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    &nbsp;&nbsp;&nbsp;My Profile
                  </h6>
                </div>

                <form method="post" className="submitstyleform" name="popid">
                  <div className="card-body">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>First Name</label>
                            <input
                              name="firstName"
                              type="text"
                              className="form-control validate"
                              id="firstName"
                              value="Satendra"
                              maxlength="60"
                              displayname="First Name"
                              autocomplete="off"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Last Name</label>
                            <input
                              name="lastName"
                              type="text"
                              className="form-control"
                              id="lastName"
                              value="Gurjar"
                              maxlength="60"
                              displayname="Last Name"
                              autocomplete="off"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              name="email"
                              type="email"
                              className="form-control validate"
                              id="email"
                              value="satendra.gurjar@deboxglobal.com"
                              displayname="Email"
                              autocomplete="off"
                              disabled="disabled"
                            />
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Profile</label>
                            <select
                              id="profileId"
                              name="profileId"
                              className="form-control"
                              displayname="Profile"
                              autocomplete="off"
                              disabled="disabled"
                            >
                              <option value="">Select Profile</option>
                              <option value="86">Director</option>
                              <option value="87">Vice President</option>
                              <option value="88">CBO</option>
                              <option value="89">Sales Manager</option>
                              <option value="90">Sales</option>
                              <option value="91">Client</option>
                              <option value="92">Support</option>
                              <option value="93">Development</option>
                              <option value="94">Business Partner</option>
                              <option value="95">Creative (Marketing)</option>
                              <option value="96">Digital Marketing</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Phone</label>
                            <input
                              name="phone"
                              type="text"
                              className="form-control"
                              id="phone"
                              value="111111111111"
                              maxlength="15"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Mobile</label>
                            <input
                              name="mobile"
                              type="text"
                              className="form-control"
                              id="mobile"
                              value="1111111111"
                              maxlength="15"
                            />
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Street</label>
                            <input
                              name="street"
                              type="text"
                              className="form-control"
                              id="street"
                              value="Noida"
                              maxlength="60"
                            />
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Country</label>
                            <select
                              id="country"
                              name="country"
                              className="form-control"
                              onchange="selectstate();"
                            >
                              <option value="">Select</option>
                              <option value="1">Afghanistan</option>
                              <option value="2">Albania</option>
                              <option value="3">Algeria</option>
                              <option value="4">American Samoa</option>
                              <option value="5">Andorra</option>
                              <option value="6">Angola</option>
                              <option value="7">Anguilla</option>
                              <option value="8">Antarctica</option>
                              <option value="9">Antigua And Barbuda</option>
                              <option value="10">Argentina</option>
                              <script>selectcity();</script>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabindex="0"
                                  aria-labelledby="select2-state-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-state-container"
                                    title="Uttar Pradesh"
                                  >
                                    Uttar Pradesh
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation"></b>
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              ></span>
                            </span>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="form-group">
                            <label>City</label>
                            <select
                              id="city"
                              name="city"
                              className="form-control select2 select2-hidden-accessible"
                              tabindex="-1"
                              aria-hidden="true"
                            >
                              <option value="">Select</option>
                              <option value="4531">Achhalda</option>
                              <option value="4532">Achhnera</option>
                              <option value="4533">Adari</option>
                              <option value="4534">Afzalgarh</option>
                              <option value="4535">Agarwal Mandi</option>
                              <option value="4536">Agra</option>
                              <option value="4537">Agra Cantonment</option>
                              <option value="4538">Ahraura</option>
                              <option value="4539">Ailum</option>
                              <option value="4540">Air Force Area</option>
                              <option value="4541">Ajhuwa</option>
                              <option value="4542">Akbarpur</option>
                              <option value="4543">Alapur</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabindex="0"
                                  aria-labelledby="select2-city-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-city-container"
                                    title="Noida"
                                  >
                                    Noida
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation"></b>
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              ></span>
                            </span>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Zip</label>
                            <input
                              name="zip"
                              type="text"
                              className="form-control"
                              id="zip"
                              value="201301"
                              maxlength="15"
                            />
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Date Modified</label>
                            <input
                              name="datem"
                              type="text"
                              readonly="readonly"
                              className="form-control"
                              id="datem"
                              value="04/12/2023 - 01:14 pm"
                              maxlength="200"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        type="button"
                        name="submitbtn"
                        id="submitbtn"
                        className="btn btn-primary"
                        onclick="formValidation('popid','submitbtn','0');"
                        style={{ margin: "0px" }}
                      >
                        Save
                        <i
                          className="fa fa-floppy-o ml-2"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div className="card-group-control card-group-control-right">
            <div className="card mb-2">
              <div className="card-header">
                <h6 className="card-title"> <a className="text-default collapsed" data-toggle="collapse" href="#question4" aria-expanded="false"> <i className="icon-cog3 mr-2"></i> &nbsp;Change Password </a> </h6>
              </div>
              <div id="question4" className="collapse" >
                <form action="" method="post" enctype="multipart/form-data">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Old Password</label>
                          <input name="oldpassword" type="password" className="form-control" id="firstName" value=""/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>New Password</label>
                          <input name="newpassword" type="password" className="form-control" id="firstName" value="" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Confirm Password</label>
                          <input name="confirmpassword" type="password" className="form-control" id="firstName" value=""/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary" style={{marginTop: "28px"}}>Update Password<i className="fa fa-floppy-o ml-2" aria-hidden="true"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
                            </div> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
