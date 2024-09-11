import React, { useEffect, useState } from "react";
import Layout from "../../../../Component/Layout/Layout";
import { NavLink, useParams } from "react-router-dom";
import Office from "../common/Offce";
import ContactPerson from "../common/ContactPerson";
import CompanyDocument from "../common/CompanyDocument";
import BankDetails from "../common/BankDetails";
import { axiosOther } from "../../../../http/axios/axios_new";

const ViewSupplier = () => {
  
  const { id } = useParams();

  const [supplierList, setSupplierList] = useState([]);

  const getSupplierList = async () => {
    const { data } = await axiosOther.post("supplierlist", {
      Name: "",
      id: id,
    });
    setSupplierList(data?.DataList[0]);
    console.log("supplier-list", supplierList);
  };

  useEffect(() => {
    getSupplierList();
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
              <div className="col-12 mb-4">
                <div className="table-responsive custom-table custom-table-scroll p-0">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="px-2 font-size-12">Supplier Name</th>
                        <th className="px-2 font-size-12">Alias Name</th>
                        <th className="px-2 font-size-12">Supplier Services</th>
                        <th className="px-2 font-size-12">Payment Terms</th>
                        <th className="px-2 font-size-12">Local Agent</th>
                        <th className="px-2 font-size-12">PAN No</th>
                        <th className="px-2 font-size-12">GST No</th>
                        <th className="px-2 font-size-12">Destination</th>
                        <th className="px-2 font-size-12">Created By</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 font-size-12">
                          {supplierList?.Name}
                        </td>
                        <td className="p-2 font-size-12">
                          {supplierList?.AliasName}
                        </td>
                        <td className="p-2 font-size-12">
                          {supplierList?.SupplierService}
                        </td>
                        <td className="p-2 font-size-12">
                          {supplierList?.PaymentTerm}
                        </td>
                        <td className="p-2 font-size-12">
                          {supplierList?.LocalAgent}
                        </td>
                        <td className="p-2 font-size-12">
                          {supplierList?.PanInformation}
                        </td>

                        <td className="p-2 font-size-12">
                          {supplierList?.GstNo}
                        </td>
                        <td className="p-2 font-size-12">
                          {supplierList?.Destination}
                        </td>
                        <td className="p-2 font-size-12">Created By</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* images */}
              <div className="col-4">
                <div className="card">
                  {supplierList != "" ? (
                    <div className="card-body d-flex gap-2 p-1 ">
                      {supplierList?.CompanyLogoImageName && (
                        <div className="card w-50 shadow-0 m-0">
                          <img
                            className="card-img-top image-style"
                            src={supplierList?.CompanyLogoImageName}
                            alt="Card image cap"
                          />
                          <p className="card-text text-center">Company Logo</p>
                        </div>
                      )}
                      {supplierList?.AgentHeaderImageName && (
                        <div className="card w-50 shadow-0 m-0">
                          <img
                            className="card-img-top image-style"
                            src={supplierList?.AgentHeaderImageName}
                            alt="Card image cap"
                          />
                          <p className="card-text text-center">Agent Header</p>
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
              <div className="col-8 agent-view-table">
                <Office
                  partner_payload={{ Fk_partnerid: id, Type: "Supplier" }}
                />
              </div>
              {/* Contact Person */}
              <div className="col-12 agent-view-table mt-4">
                <ContactPerson
                  partner_payload={{ Fk_partnerid: id, Type: "Supplier" }}
                />
              </div>
              {/* Company Documents */}
              <div className="col-12 agent-view-table mt-4">
                <CompanyDocument
                  partner_payload={{ Fk_partnerid: id, Type: "Supplier" }}
                />
              </div>
              {/* Bank Details */}
              <div className="col-12 agent-view-table mt-4">
                <BankDetails
                  partner_payload={{ Fk_partnerid: id, Type: "Supplier" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewSupplier;
