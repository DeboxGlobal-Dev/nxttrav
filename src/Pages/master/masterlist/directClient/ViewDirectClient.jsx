import React from "react";
import Layout from "../../../../Component/Layout/Layout";
import { NavLink, useParams } from "react-router-dom";
import CompanyDocument from "../common/CompanyDocument";

const ViewDirectClient = () => {
  const { id } = useParams();

  const allAgentListFromStorage = localStorage.getItem("directClientList");
  const parsedAgentList = JSON.parse(allAgentListFromStorage);

  const filteredAgentList = parsedAgentList?.filter((list) => list.id == id);
  const filteredObject =
    filteredAgentList == undefined ? "" : filteredAgentList[0];

  console.log("filteredObject", filteredObject);

  return (
    <Layout>
      <div className="container-fluid p-3 mb-4">
        <div className="card shadow-none border">
          <div
            className="card-header header-elements-inline bg-info-700 py-2"
            style={{ padding: "10px" }}
          >
            <div className="col-xl-10 d-flex align-items-center">
              <h5 className="card-title d-none d-sm-block">
                Company Information
              </h5>
            </div>
            <div className="col-xl-2 d-flex justify-content-end">
              <NavLink
                to="/master/directclient"
                className="gray-button"
                aria-expanded="false"
              >
                Back
              </NavLink>
            </div>
          </div>

          <div className="card-body">
            <div className="row">
              {/* view details */}
              <div className="col-12">
                <div className="card overflow-x-auto agent-view-table">
                  <div className="row py-2 px-2 border-bottom font-weight-bold">
                    {/* it heading of data view */}
                    <div className="col text-center font-size-11">
                      Full Name
                    </div>
                    <div className="col text-center font-size-11">DOB</div>
                    <div className="col text-center font-size-11">
                      Anniversary Date
                    </div>
                    <div className="col text-center font-size-11">
                      Emergency Name
                    </div>
                    <div className="col text-center font-size-11">
                      Emergency Relation
                    </div>
                    <div className="col text-center font-size-11">
                      Emergency Contact
                    </div>
                    <div className="col text-center font-size-11">Facebook</div>
                    <div className="col text-center font-size-11">Twitter</div>
                    <div className="col text-center font-size-11">LinkedIn</div>
                    <div className="col text-center font-size-11">
                      Instagram
                    </div>
                    <div className="col text-center font-size-11">Skype</div>
                    <div className="col text-center font-size-11">MSN Id</div>
                    <div className="col text-center font-size-11">Created</div>
                  </div>
                  {/* set value here */}
                  <div className="row py-2 px-2">
                    <div className="col text-center font-size-11">
                      {filteredObject?.FirstName +
                        filteredObject?.MiddleName +
                        filteredObject?.LastName}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.DOB}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.AnniversaryDate}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.EmergencyContactName}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.EmergencyContactRelation}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.EmergencyContactNumber}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.Facebook}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.Twitter}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.LinkedIn}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.Instagram}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.Skype}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.MSN_Id}
                    </div>
                    <div className="col text-center font-size-11">Anar</div>
                  </div>
                </div>
                <div className="card overflow-x-auto agent-view-table">
                  {/* Heading of data view */}
                  <div className="row py-2 px-2 border-bottom font-weight-bold">
                    <div className="col text-center font-size-11">
                      Market Type
                    </div>
                    <div className="col text-center font-size-11">
                      Nationality
                    </div>
                    <div className="col text-center font-size-11">
                      Tour Type
                    </div>
                    <div className="col text-center font-size-11">
                      Meal Preference
                    </div>
                    <div className="col text-center font-size-11">
                      Holiday Preference
                    </div>
                    <div className="col text-center font-size-11">
                      Special Assistance
                    </div>
                    <div className="col text-center font-size-11">
                      Seat Preference
                    </div>
                    <div className="col text-center font-size-11">
                      Accomodation Preference
                    </div>
                    <div className="col text-center font-size-11">Country</div>
                    <div className="col text-center font-size-11">State</div>
                    <div className="col text-center font-size-11">City</div>
                    <div className="col text-center font-size-11">Address</div>
                    <div className="col text-center font-size-11">Remark 1</div>
                    <div className="col text-center font-size-11">Remark 2</div>
                    <div className="col text-center font-size-11">Remark 3</div>
                    <div className="col text-center font-size-11">Pin Code</div>
                    <div className="col text-center font-size-11">
                      Sales Person
                    </div>
                  </div>
                  {/* set value here */}
                  <div className="row py-2 px-2">
                    <div className="col text-center font-size-11">
                      {filteredObject?.MarketType}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.Nationality}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.TourType}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.MealPreference}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.HolidayPreference}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.SpecialAssisteance}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.SeatPreference}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.AccomodationPreference}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.Country}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.State}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.City}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.Address}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.Remark1}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.Remark2}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.Remark3}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.PinCode}
                    </div>
                    <div className="col text-center font-size-11">
                      {filteredObject?.SalesPerson}
                    </div>
                  </div>
                </div>
              </div>
              {/* images */}
              {filteredObject?.CompanyLogoImageData && (
                <div className="col-6">
                  <div className="card">
                    <div className="card-body d-flex gap-2 p-1 ">
                      <div className="card w-50 shadow-0 m-0">
                        <img
                          className="card-img-top image-style"
                          src={filteredObject?.CompanyLogoImageData}
                          alt="Card image cap"
                        />
                        <p className="card-text text-center">Company Logo</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <CompanyDocument partner_payload={{Fk_partnerid:1, Type:'Direct Client'}}/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewDirectClient;
