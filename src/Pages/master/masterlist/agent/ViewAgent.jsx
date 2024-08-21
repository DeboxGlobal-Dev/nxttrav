import React from "react";
import Layout from "../../../../Component/Layout/Layout";
import { NavLink, useParams } from "react-router-dom";
import Office from "../common/Offce";
import ContactPerson from "../common/ContactPerson";
import CompanyDocument from "../common/CompanyDocument";
import BankDetails from "../common/BankDetails";
import Calls from "./viewPages/Calls";
import Meetings from "./viewPages/Meetings";
import Tasks from "./viewPages/Tasks";

const ViewAgent = () => {
  const { id } = useParams();

  const allAgentListFromStorage = localStorage.getItem("agentList");
  const parsedAgentList = JSON.parse(allAgentListFromStorage);

  const filteredAgentList = parsedAgentList.filter((list) => list.id == id);
  const filteredObject = filteredAgentList[0];

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
                to="/master/agent"
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
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Sales Person</th>
                        <th>Operation Person</th>
                        <th>Market Type</th>
                        <th>Competitor</th>
                        <th>Nationality</th>
                        <th>Preferred Language</th>
                        <th>Tour Type</th>
                        <th>Category</th>
                        <th>Created By</th>
                        <th>Modified By</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr>
                        <td>{filteredObject?.SalesPerson}</td>
                        <td>{filteredObject?.OperationsPerson}</td>
                        <td>{filteredObject?.MarketType}</td>
                        <td>{filteredObject?.Competitor}</td>
                        <td>{filteredObject?.Nationality}</td>
                        <td>{filteredObject?.PreferredLanguage}</td>
                        <td>{filteredObject?.TourType}</td>
                        <td>{filteredObject?.Category}</td>
                        <td>Sandy</td>
                        <td>Sandy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card overflow-x-auto agent-view-table">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Bussiness Type</th>
                        <th>Company Type</th>
                        <th>Company</th>
                        <th>Company Email</th>
                        <th>Company Phone</th>
                        <th>Website Url</th>
                        <th>Company Remark</th>
                        <th>Agent Info</th>
                        <th>ISO</th>
                        <th>Consortia</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr>
                        <td>{filteredObject?.BussinessType}</td>
                        <td>{filteredObject?.CompanyType}</td>
                        <td>{filteredObject?.CompanyName}</td>
                        <td>{filteredObject?.CompanyEmailAddress}</td>
                        <td>{filteredObject?.CompanyPhoneNumber}</td>
                        <td>{filteredObject?.WebsiteUrl}</td>
                        <td>{filteredObject?.Remarks}</td>
                        <td>{filteredObject?.AgentInfo}</td>
                        <td>{filteredObject?.ISO}</td>
                        <td>{filteredObject?.Consortia}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* images */}
              <div className="col-6">
                <div className="card">
                  <div className="card-body d-flex gap-2 p-1 ">
                    {filteredObject?.CompanyLogoImageData && (
                      <div className="card w-50 shadow-0 m-0">
                        <img
                          className="card-img-top image-style"
                          src={filteredObject?.CompanyLogoImageData}
                          alt="Card image cap"
                        />
                        <p className="card-text text-center">Company Logo</p>
                      </div>
                    )}
                    {filteredObject?.AgentHeaderImageData && (
                      <div className="card w-50 shadow-0 m-0">
                        <img
                          className="card-img-top image-style"
                          src={filteredObject?.AgentHeaderImageData}
                          alt="Card image cap"
                        />
                        <p className="card-text text-center">Agent Header</p>
                      </div>
                    )}
                    {filteredObject?.AgentFooterImageData && (
                      <div className="card w-50 shadow-0 m-0">
                        <img
                          className="card-img-top image-style"
                          src={filteredObject?.AgentFooterImageData}
                          alt="Card image cap"
                        />
                        <p className="card-text text-center">Agent Footer</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="col-6 agent-view-table">
                <Office partner_payload={{ id: 1, name: "agent" }} />
              </div>
              {/* Contact Person */}
              <div className="col-12 agent-view-table mt-4">
                <ContactPerson partner_payload={{ id: 1, name: "agent" }} />
              </div>
              {/* Company Documents */}
              <div className="col-12 agent-view-table mt-4">
                <CompanyDocument partner_payload={{ id: 1, name: "agent" }} />
              </div>
              {/* Bank Details */}
              <div className="col-12 agent-view-table mt-4">
                <BankDetails partner_payload={{ id: 1, name: "agent" }} />
              </div>
              {/* calls */}
              <Calls />
              {/* Meetings */}
              <Meetings />
              {/* Tasks */}
              <Tasks />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewAgent;
