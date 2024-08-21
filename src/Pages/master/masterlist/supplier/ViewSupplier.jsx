import React from "react";
import Layout from "../../../../Component/Layout/Layout";
import { NavLink, useParams } from "react-router-dom";
import Office from "../common/Offce";
import ContactPerson from "../common/ContactPerson";
import CompanyDocument from "../common/CompanyDocument";
import BankDetails from "../common/BankDetails";

const ViewSupplier = () => {
  const { id } = useParams();

  const allAgentListFromStorage = localStorage.getItem("supplierList");
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
                to="/master/supplier"
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
                        <th>Suplier Name</th>
                        <th>Alias Name</th>
                        <th>Supplier Services</th>
                        <th>Payment Terms</th>
                        <th>Nationality</th>
                        <th>Local Agent</th>
                        <th>PAN NO</th>
                        <th>GST NO</th>
                        <th>Destination</th>
                        <th>Created By</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr>
                        <td>{filteredObject?.SupplierName}</td>
                        <td>{filteredObject?.AliasName}</td>
                        <td>{filteredObject?.SupplierServices?.join(",")}</td>
                        <td>{filteredObject?.PaymentTerm}</td>
                        <td>{filteredObject?.Nationality}</td>
                        <td>{filteredObject?.LocalAgent}</td>
                        <td>{filteredObject?.PanNo}</td>
                        <td>{filteredObject?.GstNo}</td>
                        <td>
                          {filteredObject?.Destinations?.length >= 1 &&
                            filteredObject?.Destinations[0]?.label}
                        </td>
                        <td>Sandy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* images */}
              <div className="col-4">
                <div className="card">
                  <div className="card-body d-flex gap-2 p-1 ">
                    {filteredObject?.AgentFooterImageData && (
                      <div className="card w-50 shadow-0 m-0">
                        <img
                          className="card-img-top image-style"
                          src={filteredObject?.AgentFooterImageData}
                          alt="Card image cap"
                        />
                        <p className="card-text text-center">Agreemnt</p>
                      </div>
                    )}
                    {filteredObject?.AgentFooterImageData && (
                      <div className="card w-50 shadow-0 m-0">
                        <img
                          className="card-img-top image-style"
                          src={filteredObject?.AgentFooterImageData}
                          alt="Card image cap"
                        />
                        <p className="card-text text-center">Agreemnt</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Office Address */}
              <div className="col-8 agent-view-table">
                <Office partner_payload={{ id: 1, name: "supplier" }} />
              </div>
              {/* Contact Person */}
              <div className="col-12 agent-view-table mt-4">
                <ContactPerson partner_payload={{ id: 1, name: "supplier" }} />
              </div>
              {/* Company Documents */}
              <div className="col-12 agent-view-table mt-4">
                <CompanyDocument
                  partner_payload={{ id: 1, name: "supplier" }}
                />
              </div>
              {/* Bank Details */}
              <div className="col-12 agent-view-table mt-4">
                <BankDetails partner_payload={{ id: 1, name: "supplier" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewSupplier;
