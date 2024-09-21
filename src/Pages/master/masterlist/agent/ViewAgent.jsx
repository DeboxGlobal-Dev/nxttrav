import React, { useCallback, useEffect, useMemo, useState } from "react";
import Layout from "../../../../Component/Layout/Layout";
import { NavLink, useParams } from "react-router-dom";
import Office from "../common/Offce";
import ContactPerson from "../common/ContactPerson";
import CompanyDocument from "../common/CompanyDocument";
import BankDetails from "../common/BankDetails";
import Calls from "./viewPages/Calls";
import Meetings from "./viewPages/Meetings";
import Tasks from "./viewPages/Tasks";
import { axiosOther } from "../../../../http/axios/axios_new";

const ViewAgent = () => {
  const { id } = useParams();

  const [viewData, setViewData] = useState("");

  const getSingleAgentList = async () => {
    const { data } = await axiosOther.post("agentlist", {
      id: id,
      BusinessType: 1,
    });
    setViewData(data?.DataList[0]);
  };

  useEffect(() => {
    getSingleAgentList();
  }, [id]);

  const props_payload = useMemo(() => (
    { Fk_partnerid: id, Type: "agent" }
  ), [id]);

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
                        <td>{viewData?.SalesPerson}</td>
                        <td>{viewData?.OperationsPerson}</td>
                        <td>{viewData?.MarketType}</td>
                        <td>{viewData?.Competitor}</td>
                        <td>{viewData?.Nationality}</td>
                        <td>{viewData?.PreferredLanguage}</td>
                        <td>{viewData?.TourType}</td>
                        <td>{viewData?.Category}</td>
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
                        <td>{viewData?.BussinessType}</td>
                        <td>{viewData?.CompanyType}</td>
                        <td>{viewData?.CompanyName}</td>
                        <td>{viewData?.CompanyEmailAddress}</td>
                        <td>{viewData?.CompanyPhoneNumber}</td>
                        <td>{viewData?.WebsiteUrl}</td>
                        <td>{viewData?.Remarks}</td>
                        <td>{viewData?.AgentInfo}</td>
                        <td>{viewData?.ISO}</td>
                        <td>{viewData?.Consortia}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* images */}
              <div className="col-6">
                <div className="card">
                  {viewData != "" ? (
                    <div className="card-body d-flex gap-2 p-1 ">
                      {viewData?.CompanyLogoImageName && (
                        <div className="card w-50 shadow-0 m-0">
                          <img
                            className="card-img-top image-style"
                            src={viewData?.CompanyLogoImageName}
                            alt="Card image cap"
                          />
                          <p className="card-text text-center">Company Logo</p>
                        </div>
                      )}
                      {viewData?.AgentHeaderImageName && (
                        <div className="card w-50 shadow-0 m-0">
                          <img
                            className="card-img-top image-style"
                            src={viewData?.AgentHeaderImageName}
                            alt="Card image cap"
                          />
                          <p className="card-text text-center">Agent Header</p>
                        </div>
                      )}
                      {viewData?.AgentFooterImageName && (
                        <div className="card w-50 shadow-0 m-0">
                          <img
                            className="card-img-top image-style"
                            src={viewData?.AgentFooterImageName}
                            alt="Card image cap"
                          />
                          <p className="card-text text-center">Agent Footer</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="card-body d-flex gap-2 p-1 ">
                      <div className="card w-50 shadow-0 m-0 image-box shimmer"></div>
                      <div className="card w-50 shadow-0 m-0 image-box shimmer"></div>
                      <div className="card w-50 shadow-0 m-0 image-box shimmer"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Office Address */}
              <div className="col-6 agent-view-table">
                <Office partner_payload={props_payload} />
              </div>
              {/* Contact Person */}
              <div className="col-12 agent-view-table mt-4">
                <ContactPerson
                  partner_payload={{ Fk_partnerid: id, Type: "agent" }}
                />
              </div>
              {/* Company Documents */}
              <div className="col-12 agent-view-table mt-4">
                <CompanyDocument
                  partner_payload={{ Fk_partnerid: id, Type: "agent" }}
                />
              </div>
              {/* Bank Details */}
              <div className="col-12 agent-view-table mt-4">
                <BankDetails
                  partner_payload={{ Fk_partnerid: id, Type: "agent" }}
                />
              </div>
              {/* calls */}
              <Calls partner_payload={{ Fk_partnerid: id, Type: "agent" }} />
              {/* Meetings */}
              <Meetings partner_payload={{ Fk_partnerid: id, Type: "agent" }} />
              {/* Tasks */}
              <Tasks partner_payload={{ Fk_partnerid: id, Type: "agent" }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewAgent;
