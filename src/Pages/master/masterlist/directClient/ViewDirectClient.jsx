import React, { useEffect, useState } from "react";
import Layout from "../../../../Component/Layout/Layout";
import { NavLink, useParams } from "react-router-dom";
import CompanyDocument from "../common/CompanyDocument";
import { axiosOther } from "../../../../http/axios/axios_new";

const ViewDirectClient = () => {
  const { id } = useParams();

  const [directClientList, setDirectClientList] = useState({});

  const getDirectClientListById = async () => {
    const { data } = await axiosOther.post("directClientlist", {
      id: id,
      FirstName: "",
    });
    setDirectClientList(data?.DataList[0]);
  };

  useEffect(()=>{
    getDirectClientListById();
  }, []);

  const filteredObject = "";
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
                      {directClientList?.FirstName +
                        directClientList?.MiddleName +
                        directClientList?.LastName}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.DOB}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.AnniversaryDate}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.EmergencyContactName}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.EmergencyContactRelation}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.EmergencyContactNumber}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.Facebook}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.Twitter}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.LinkedIn}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.Instagram}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.Skype}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.MSN_Id}
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
                      {directClientList?.MarketType}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.Nationality}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.TourType}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.MealPreference}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.HolidayPreference}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.SpecialAssisteance}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.SeatPreference}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.AccomodationPreference}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.Country}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.State}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.City}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.Address}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.Remark1}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.Remark2}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.Remark3}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.PinCode}
                    </div>
                    <div className="col text-center font-size-11">
                      {directClientList?.SalesPerson}
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
              <CompanyDocument
                partner_payload={{ Fk_partnerid: id, Type: "DirectClient" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewDirectClient;
