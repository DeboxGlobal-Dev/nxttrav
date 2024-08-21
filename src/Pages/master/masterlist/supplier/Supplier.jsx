import React, { useState, useEffect } from "react";
import Layout from "../../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../../http/axios/axios_new";

const Supplier = () => {
  const [filterData, setFilterData] = useState([]);
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateData, setUpdateData] = useState(false);
  const [postData, setPostData] = useState({
    Id: "",
    FirstName: "",
  });

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        // const { data } = await axiosOther.post("directClientlist", postData);
        const getDataFromLocalStorage = localStorage.getItem("supplierList");
        if (getDataFromLocalStorage == null) {
          return null;
        }
        const data = JSON.parse(getDataFromLocalStorage);
        setLoading(false);
        setFilterData(data);
        setGetData(data);
      } catch (error) {
        console.log(error);
      }
    };
    postDataToServer();
  }, [updateData]);

  const columns = [
    {
      name: "Action",
      selector: (row) => (
        <span>
          <i className="fa-solid fa-pen-to-square"></i>
        </span>
      ),
      sortable: true,
    },
    {
      name: "#",
      selector: (row) => <span>9878979</span>,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => (
        <NavLink to={`/master/supplier/view/${row.id}`}>
          <span>{row?.SupplierName}</span>
        </NavLink>
      ),
      sortable: true,
    },
    {
      name: "Alias Name",
      selector: (row) => row?.AliasName,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => (
        <>
          <span>{row?.SupplierServices?.join(",")}</span>
        </>
      ),
      sortable: true,
    },
    {
      name: "Destionation",
      selector: (row) => row?.Destinations?.join(","),
      sortable: true,
    },
    {
      name: "Contact Person",
      selector: (row) => "Rizwan",
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => <span>87978979</span>,
      sortable: true,
    },
    {
      name: "Email Address",
      selector: (row) => <span>example@gmail.com</span>,
      sortable: true,
    },
    {
      name: "View",
      selector: (row) => {
        return <span className="text-success cursor-pointer">View</span>;
      },
    },
    {
      name: "Status",
      selector: (row) => row?.Status,
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
              <h5 className="card-title d-none d-sm-block">Supplier</h5>
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
                to="/master/supplier/add"
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
            className="masterListDataTable"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Supplier;
