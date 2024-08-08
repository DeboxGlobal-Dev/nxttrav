import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";


const Agent = () => {
  const [filterData, setFilterData] = useState([]);
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateData, setUpdateData] = useState(false);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("agentlist");
        setLoading(false);
        setFilterData(data.DataList);
        setGetData(data.DataList);
        console.log(data.DataList);
      } catch (error) {
        console.log(error);
      }
    };
    postDataToServer();
  }, [updateData]);

  const columns = [
    {
      name: "Company",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.CompanyName}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Bussiness Type",
      selector: (row) => row.BussinessType,
      sortable: true,
    },
    {
      name: "Company Phone",
      selector: (row) => (
        <span>
          Admin <br /> {row.CompanyPhone}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Company Email",
      selector: (row) => (
        <span>
          Admin <br /> {row.CompanyEmail}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Assign Person",
      selector: (row) => (
        <span>
          Admin <br /> {row.SalesPerson}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Nationality",
      selector: (row) => (
        <span>
          Admin <br /> {row.Nationality}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => (
        <span>
          Admin <br /> {row.Country}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Market Type",
      selector: (row) => (
        <span>
          Admin <br /> {row.MarketType}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Updated By",
      selector: (row) => {
        return (
          <span>
            Admin <br /> {row.UpdatedBy}
          </span>
        );
      },
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true,
    },
  ];

  return (
    <Layout>
      <div className="container-fluid p-3 mb-4">
        <div className="card shadow-none border" style={{ marginBottom: "0" }}>
          <div
            className="card-header header-elements-inline bg-info-700 py-2"
            style={{ padding: "10px" }}
          >
            <div className="col-xl-10 d-flex align-items-center">
              <h5 className="card-title d-none d-sm-block">Agent Master</h5>
            </div>
            <div className="col-xl-2 d-flex justify-content-end">
              <NavLink
                to="/master"
                className="gray-button"
                aria-expanded="false"
              >
                Back
              </NavLink>
              <NavLink
                to="/master/agent/add"
                type="button"
                className="blue-button text-white "
              >
                Create New
              </NavLink>
            </div>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                <input
                  type="text"
                  name="Search"
                  placeholder="Search here.."
                  className="search-input focus-ring form-input"
                />
              </div>
              <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                <select
                  className="select-input focus-ring form-input"
                  name="Status"
                >
                  <option>Select Status</option>
                  <option value={0}>Inactive</option>
                  <option value={1}>Active</option>
                </select>
              </div>
              <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                <button className="btn bg-teal-400 w-75 custom-h-37">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*******************------Table Card-----*******************/}
        <div className="card shadow-none border mt-2">
          <DataTable
            columns={columns}
            data={filterData}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="280px"
            highlightOnHover
            progressPending={loading}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Agent;
