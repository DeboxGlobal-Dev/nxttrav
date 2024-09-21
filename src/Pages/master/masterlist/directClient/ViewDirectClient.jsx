import React, { useEffect, useState } from "react";
import Layout from "../../../../Component/Layout/Layout";
import { NavLink, useParams } from "react-router-dom";
import CompanyDocument from "../common/CompanyDocument";
import { axiosOther } from "../../../../http/axios/axios_new";

const ViewDirectClient = () => {
  const { id } = useParams();

  const [directClientList, setDirectClientList] = useState([]);

  const getDirectClientListById = async () => {
    const { data } = await axiosOther.post("directClientlist", {
      id: id,
      FirstName: "",
    });

    console.log("list", data?.DataList[0]);
    setDirectClientList(data?.DataList[0]);
  };

  useEffect(() => {
    getDirectClientListById();
  }, []);

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
              <div className="col-12 mb-2">
                <div className="row m-0 mb-3">
                  <div className="table-responsive custom-table custom-table-scroll p-0">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th className="px-2 font-size-12">Full Name</th>
                          <th className="px-2 font-size-12">Date Of Birth</th>
                          <th className="px-2 font-size-12">Anniversay Date</th>
                          <th className="px-2 font-size-12">Emergency Name</th>
                          <th className="px-2 font-size-12">
                            Emergency Relation
                          </th>
                          <th className="px-2 font-size-12">
                            Emergency Contact
                          </th>
                          <th className="px-2 font-size-12">Facebook</th>
                          <th className="px-2 font-size-12">Twitter</th>
                          <th className="px-2 font-size-12">Linkedin</th>
                          <th className="px-2 font-size-12">Istagram</th>
                          <th className="px-2 font-size-12">Skype</th>
                          <th className="px-2 font-size-12">MSN Id</th>
                          <th className="px-2 font-size-12">Created By</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 font-size-12">
                            {directClientList?.FirstName}
                          </td>
                          <td className="p-2 font-size-12">
                            {directClientList?.DOB}
                          </td>
                          <td className="p-2 font-size-12">
                            {directClientList?.AnniversaryDate}
                          </td>
                          <td className="p-2 font-size-12">
                            {directClientList?.EmergencyContactName}
                          </td>
                          <td className="p-2 font-size-12">
                            Emergency Relation
                          </td>
                          <td className="p-2 font-size-12">
                            {directClientList?.EmergencyContactNumber}
                          </td>

                          <td className="p-2 font-size-12">
                            {directClientList?.Facebook}
                          </td>
                          <td className="p-2 font-size-12">
                            {directClientList?.Twitter}
                          </td>
                          <td className="p-2 font-size-12">
                            {directClientList?.LinkedIn}
                          </td>
                          <td className="p-2 font-size-12">
                            {directClientList?.Instagram}
                          </td>
                          <td className="p-2 font-size-12">
                            {directClientList?.Skype}
                          </td>
                          <td className="p-2 font-size-12">
                            {directClientList?.MSN_Id}
                          </td>
                          <td className="p-2 font-size-12">Created By</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="table-responsive custom-table custom-table-scroll p-0">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Market Type
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Nationality
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Tour Type
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Meal Preference
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Holiday Preference
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Special Assistance
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Seat Preference
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Accomodation Preference
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Country
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            State
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            City
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Address
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Remark 1
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Remark 2
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Remark 3
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Pin Code
                          </th>
                          <th
                            className="p-2 font-size-12 text-center"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Sales Person
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.MarketType}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.Nationality}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.TourType}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.MealPreference}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            holiday
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.SpecialAssistence}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.SeatPreference}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.AccomodationPreference}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.Country}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.State}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.City}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.Address}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.Remark1}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.Remark2}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.Remark3}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.Pin_Zip}
                          </td>
                          <td className="p-2" style={{ whiteSpace: "nowrap" }}>
                            {directClientList?.SalesPerson}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* images */}
              {directClientList?.CompanyLogoImageData && (
                <div className="col-6">
                  <div className="card">
                    <div className="card-body d-flex gap-2 p-1 ">
                      <div className="card w-50 shadow-0 m-0">
                        <img
                          className="card-img-top image-style"
                          src={directClientList?.CompanyLogoImageData}
                          alt="Card image cap"
                        />
                        <p className="card-text text-center">Company Logo</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="col-12 mt-4">
                <CompanyDocument
                  partner_payload={{ Fk_partnerid: id, Type: "DirectClient" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewDirectClient;
