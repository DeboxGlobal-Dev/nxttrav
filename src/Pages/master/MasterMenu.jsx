import React from "react";
import { NavLink } from "react-router-dom";

const MasterMenu = () => {
  return(
    <>
      {/* General Master Menu List */}
      <div className="card w-100 shadow-none border">
        <div className="card-body p-2 ">
          <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
            GENERAL
          </p>

          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 master-head-img">
              <img
                className="mt-2 mt-lg-0 mt-xl-0"
                src="/public/assets/icons/main-menu.png"
                alt="main-menu"
              ></img>
            </div>

            <div className="col-xl-11 col-lg-10 col-md-10 col-sm-10">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/country">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/countries.png" alt="image" />
                      <span className="pl-1">Country Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/business_type">
                    <div className="master-list-icon">
                      <img src="assets/icons/process.png" alt="image" />
                      <span className="pl-1">Business Type Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/state">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/united-states.png" alt="image" />
                      <span className="pl-1">State Master</span>
                    </div>
                  </NavLink>

                  <NavLink to="/master/language">
                    <div className="master-list-icon">
                      <img src="assets/icons/languages.png" alt="image" />
                      <span className="pl-1">Language Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/city">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/city.png" alt="image" />
                      <span className="pl-1">City Master</span>
                    </div>
                  </NavLink>

                  <NavLink to="/master/division">
                    <div className="master-list-icon">
                      <img src="assets/icons/split.png" alt="image" />
                      <span className="pl-1">Division Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/lead_source">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/conversion-rate.png" alt="image" />
                      <span className="pl-1">Lead Source Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/tour_type">
                    <div className="master-list-icon">
                      <img src="assets/icons/tourtype.png" alt="image" />
                      <span className="pl-1">Tour Type</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/destination">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/destination.png" alt="image" />
                      <span className="pl-1">Destination Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/season">
                    <div className="master-list-icon">
                      <img src="assets/icons/season.png" alt="image" />
                      <span className="pl-1">Season Master</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hotel Master Menu List */}
      <div className="card w-100 shadow-none border">
        <div className="card-body p-2 ">
          <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
            HOTEL
          </p>

          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 master-head-img">
              <img
                className="mt-2 mt-lg-0 mt-xl-0"
                src="assets/icons/hotel.png"
                alt="main-menu"
              ></img>
            </div>

            <div className="col-xl-11 col-lg-10 col-md-10 col-sm-10">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/hotelmaster">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/document.png" alt="image"/>
                      <span className="pl-1">Hotel Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/hotelcategory">
                    <div className="master-list-icon">
                      <img src="assets/icons/hotel1.png" alt="image" />
                      <span className="pl-1">Hotel Category Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/roomtype">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/living-room.png" alt="image" />
                      <span className="pl-1">Room Type Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/hotel_additional">
                    <div className="master-list-icon">
                      <img src="assets/icons/hotel3.png" alt="image" />
                      <span className="pl-1">Hotel Additional Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/amenties">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/amenities.png" alt="image" />
                      <span className="pl-1">Amenties Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/room_master">
                    <div className="master-list-icon">
                      <img src="assets/icons/room.png" alt="image" />
                      <span className="pl-1">Room Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/hoteltype">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/hotel2.png" alt="image" />
                      <span className="pl-1">Hotel Type Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/hotelchain">
                    <div className="master-list-icon">
                      <img src="assets/icons/building.png" alt="image" />
                      <span className="pl-1">Hotel Chain Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/hotelmeal">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/restaurant.png" alt="image" />
                      <span className="pl-1">Hotel Meal Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/resturant">
                    <div className="master-list-icon">
                      <img src="assets/icons/restaurant-1.png" alt="image" />
                      <span className="pl-1">Restaurant Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/weekend">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/countries.png" alt="image" />
                      <span className="pl-1">Weekend Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/resturant_mealplan">
                    <div className="master-list-icon">
                      <img src="assets/icons/process.png" alt="image" />
                      <span className="pl-1">Restaurant Meal Plan</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sightseeing Master Menu List */}
      <div className="card w-100 shadow-none border">
        <div className="card-body p-2 ">
          <div className="row row-gap-2">
            <div className="col-md-3 col-sm-6">
              <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
                SIGHTSEEING/ACTIVITY
              </p>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 master-head-img">
                  <img
                    className="mt-2 mt-lg-0 mt-xl-0"
                    src="assets/icons/sightseeing.png"
                    alt="main-menu"
                  ></img>
                </div>
                <div className="col-7 p-0 ml-2">
                  <NavLink to="/master/monument">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/monument.png" alt="image"/>
                      <span className="pl-1">Monument Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/sightseeing">
                    <div className="master-list-icon">
                      <img src="assets/icons/binocular.png" alt="image" />
                      <span className="pl-1">Sightseeing Master</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
                TOUR ESCORT
              </p>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 master-head-img">
                  <img
                    className="mt-2 mt-lg-0 mt-xl-0"
                    src="assets/icons/tour-guide.png"
                    alt="main-menu"
                  ></img>
                </div>
                <div className="col-7 p-0 ml-2">
                  <NavLink to="/master/tourescort">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/customer.png" alt="image"/>
                      <span className="pl-1">Tour Escort Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/tourescortprice">
                    <div className="master-list-icon">
                      <img src="assets/icons/technical-support.png" alt="image"/>
                      <span className="pl-1">Tour Escort Price Master</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
                VISA
              </p>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 master-head-img">
                  <img
                    className="mt-2 mt-lg-0 mt-xl-0"
                    src="assets/icons/passport9.png"
                    alt="main-menu"
                  ></img>
                </div>
                <div className="col-7 p-0 ml-2">
                  <NavLink to="/master/visatype">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/boarding-pass.png" alt="image"/>
                      <span className="pl-1">Visa Type</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/visacost">
                    <div className="master-list-icon">
                      <img src="assets/icons/visa.png" alt="image" />
                      <span className="pl-1">Visa Cost</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
                INSURANCE
              </p>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 master-head-img">
                  <img
                    className="mt-2 mt-lg-0 mt-xl-0"
                    src="assets/icons/health-ins.png"
                    alt="main-menu"
                  ></img>
                </div>
                <div className="col-7 p-0 ml-2">
                  <NavLink to="/master/insurancetype">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/family.png" alt="image"/>
                      <span className="pl-1">Insurance Type</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/insurancecost">
                    <div className="master-list-icon">
                      <img src="assets/icons/insur.png" alt="image" />
                      <span className="pl-1">Insurance Cost</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Passport Master Menu List */}
      <div className="card w-100 shadow-none border">
        <div className="card-body p-2 ">
          <div className="row row-gap-2">
            <div className="col-md-3 col-sm-6">
              <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
                PASSPORT
              </p>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 master-head-img">
                  <img
                    className="mt-2 mt-lg-0 mt-xl-0"
                    src="assets/icons/passport8.png"
                    alt="main-menu"
                  ></img>
                </div>
                <div className="col-7 p-0 ml-2">
                  <NavLink to="/master/passporttype">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/passport5.png" alt="image"/>
                      <span className="pl-1">Passport Type</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/passportcost">
                    <div className="master-list-icon">
                      <img src="assets/icons/passport7.png" alt="image" />
                      <span className="pl-1">Passport Cost</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
                AIRLINE/TRAIN
              </p>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 master-head-img">
                  <img
                    className="mt-2 mt-lg-0 mt-xl-0"
                    src="assets/icons/tour-guide.png"
                    alt="main-menu"
                  ></img>
                </div>
                <div className="col-7 p-0 ml-2">
                  <NavLink to="/master/train">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/rail.png" alt="image"/>
                      <span className="pl-1">Train Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/airline">
                    <div className="master-list-icon">
                      <img src="assets/icons/travelling.png" alt="image"/>
                      <span className="pl-1">Airline Master</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
                OTHERS
              </p>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 master-head-img">
                  <img
                    className="mt-2 mt-lg-0 mt-xl-0"
                    src="assets/icons/other.png"
                    alt="main-menu"
                  ></img>
                </div>
                <div className="col-7 p-0 ml-2">
                  <NavLink to="/master/additionalrequirement">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/gear.png" alt="image"/>
                      <span className="pl-1">Additional Requirement</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/operationrestriction">
                    <div className="master-list-icon">
                      <img src="assets/icons/hotel1.png" alt="image" />
                      <span className="pl-1">Operation Restriction</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Transport Master Menu List */}
      <div className="card w-100 shadow-none border">
        <div className="card-body p-2 ">
          <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
            TRANSPORT
          </p>

          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 master-head-img">
              <img
                className="mt-2 mt-lg-0 mt-xl-0"
                src="assets/icons/sep.png"
                alt="main-menu"
                style={{width:'40px', height:'30px'}}
              ></img>
            </div>
            <div className="col-xl-11 col-lg-10 col-md-10 col-sm-10">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/transfermaster">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/document.png" alt="image" />
                      <span className="pl-1">Transfer Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/vehicletype">
                    <div className="master-list-icon">
                      <img src="assets/icons/hotel1.png" alt="image" />
                      <span className="pl-1">Vehicle Type Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/transfertype">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/living-room.png" alt="image" />
                      <span className="pl-1">Transfer Type</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/vehiclebrand">
                    <div className="master-list-icon">
                      <img src="assets/icons/hotel3.png" alt="image" />
                      <span className="pl-1">Vehicle Brand Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/transport">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/amenities.png" alt="image" />
                      <span className="pl-1">Transport Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/driver">
                    <div className="master-list-icon">
                      <img src="assets/icons/room.png" alt="image" />
                      <span className="pl-1">Driver Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/vehiclemaster">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/hotel2.png" alt="image" />
                      <span className="pl-1">Vehicle Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/fleet">
                    <div className="master-list-icon">
                      <img src="assets/icons/building.png" alt="image" />
                      <span className="pl-1">Fleet Master</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Cruise Master Menu List */}
      <div className="card w-100 shadow-none border">
        <div className="card-body p-2 ">
          <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
            Cruise
          </p>
          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 master-head-img">
              <img
                className="mt-2 mt-lg-0 mt-xl-0"
                src="assets/icons/ship1.png"
                alt="main-menu"
              ></img>
            </div>
            <div className="col-xl-11 col-lg-10 col-md-10 col-sm-10">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/cruisecompany">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/enterprise.png" alt="image" />
                      <span className="pl-1">Cruise Componey</span>
                    </div>
                  </NavLink>

                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/cruisenamecompany">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/cruise1.png" alt="image" />
                      <span className="pl-1">Cruise Name Company</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/cabintype">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/cabin.png" alt="image" />
                      <span className="pl-1">Cabin Type</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/cabincategory">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/cabin1.png" alt="image" />
                      <span className="pl-1">Cabin Category</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/cruisemaster">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/ship.png" alt="image" />
                      <span className="pl-1">Cruise Master</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Ferry Master Menu List */}
      <div className="card w-100 shadow-none border">
        <div className="card-body p-2 ">
          <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
            Ferry
          </p>
          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 master-head-img">
              <img
                className="mt-2 mt-lg-0 mt-xl-0"
                src="assets/icons/cruise4.png"
                alt="main-menu"
              ></img>
            </div>
            <div className="col-xl-11 col-lg-10 col-md-10 col-sm-10">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/ferrycompany">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/ferry.png" alt="image" />
                      <span className="pl-1">Ferry Componey</span>
                    </div>
                  </NavLink>

                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/ferrymaster">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/ferry2.png" alt="image" />
                      <span className="pl-1">Ferry Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/ferryseat">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/cruise2.png" alt="image" />
                      <span className="pl-1">Ferry Seat Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/ferryprice">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/cruise3.png" alt="image" />
                      <span className="pl-1">Ferry Price Master</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Itinerary Proposal Setting Master Menu List */}
      <div className="card w-100 shadow-none border">
        <div className="card-body p-2 ">
          <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
            ITINERARY PROPOSAL SETTING
          </p>
          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 master-head-img">
              <img
                className="mt-2 mt-lg-0 mt-xl-0"
                src="assets/icons/itinerary3.png"
                alt="main-menu"
                style={{width:'30px'}}
              ></img>
            </div>
            <div className="col-xl-11 col-lg-10 col-md-10 col-sm-10">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/itenaryrequirement">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/destination.png" alt="image" />
                      <span className="pl-1">Itenarary Requirement</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/lettermaster">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/letter.png" alt="image" />
                      <span className="pl-1">Letter Master</span>
                    </div>
                  </NavLink>

                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/itenararyoverview">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/itinerary2.png" alt="image" />
                      <span className="pl-1">Itenarary Overview</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/proposalsetting">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/business-proposal.png" alt="image" />
                      <span className="pl-1">Proposal Setting</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/emergencydetails">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/resume.png" alt="image" />
                      <span className="pl-1">Emergency Details</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/fit">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/t&c2.png" alt="image" />
                      <span className="pl-1">FIT Inc&Exc/T&C</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/git">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/t&c1.png" alt="image" />
                      <span className="pl-1">GIT Inc&Exc/T&C</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Finance Proposal Setting Master Menu List */}
      <div className="card w-100 shadow-none border">
        <div className="card-body p-2 ">
          <p className="text-primary fw-500 m-0 mb-1 d-block master-head">
            FINANCE
          </p>
          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 master-head-img">
              <img
                className="mt-2 mt-lg-0 mt-xl-0"
                src="assets/icons/budget1.png"
                alt="main-menu"
              ></img>
            </div>
            <div className="col-xl-11 col-lg-10 col-md-10 col-sm-10">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/currencymaster">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/exchange.png" alt="image" />
                      <span className="pl-1">Currency Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/bankmaster">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/bank.png" alt="image" />
                      <span className="pl-1">Bank Master</span>
                    </div>
                  </NavLink>

                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/commissionmaster">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/commission.png" alt="image" />
                      <span className="pl-1">Commission Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/saccode">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/code.png" alt="image" />
                      <span className="pl-1">SAC Code Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/taxmaster">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/taxes.png" alt="image" />
                      <span className="pl-1">Tax Master</span>
                    </div>
                  </NavLink>
                  <NavLink to="/master/paymenttype">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/payment-method.png" alt="image" />
                      <span className="pl-1">Payment Type Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/expensetype">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/expenses.png" alt="image" />
                      <span className="pl-1">Expense Type Master</span>
                    </div>
                  </NavLink>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 my-2 my-md-2 my-lg-0 my-xl-0 p-0 px-2">
                  <NavLink to="/master/expensehead">
                    <div className="mb-lg-2 mb-xl-2 mb-md-1 mb-1 master-list-icon">
                      <img src="assets/icons/expense1.png" alt="image" />
                      <span className="pl-1">Expense Head Master</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default MasterMenu;
