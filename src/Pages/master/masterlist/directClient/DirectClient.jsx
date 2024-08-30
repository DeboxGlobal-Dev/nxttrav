import React, { useState, useEffect } from "react";
import Layout from "../../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../../http/axios/axios_new";

const DirectClient = () => {
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
        const { data } = await axiosOther.post("directClientlist", postData);
        setLoading(false);
        console.log("direct-client-list", data);
        setFilterData(data?.DataList);
        setGetData(data?.DataList);
      } catch (err) {
        console.log(err);
      }
    };
    postDataToServer();
  }, [updateData]);

  const columns = [
    {
      name: "Name",
      selector: (row) => (
        <NavLink to={`/master/directclient/view/${row.id}`}>
          <span>{row.FirstName}</span>
        </NavLink>
      ),
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row?.Address,
      sortable: true,
    },
    {
      name: "Contact Information",
      selector: (row) => (
        <>
          <span>
            {row?.Contactinfo == null ? "" : row?.Contactinfo[0]?.Mobile}
          </span>
          <br></br>
          <span>
            {row?.Contactinfo == null ? "" : row?.Contactinfo[0]?.Email}
          </span>
        </>
      ),
      sortable: true,
    },
    {
      name: "Address Proof",
      selector: (row) => <span>img</span>,
      sortable: true,
    },
    {
      name: "Passport",
      selector: (row) => <span className="text-warning">No Attachment</span>,
      sortable: true,
    },
    {
      name: "VISA",
      selector: (row) => <span className="text-warning">No Attachment</span>,
      sortable: true,
    },
    {
      name: "Driver License",
      selector: (row) => <span className="text-warning">No Attachment</span>,
      sortable: true,
    },
    {
      name: "Covid Certificate",
      selector: (row) => <span className="text-warning">No Attachment</span>,
      sortable: true,
    },
    {
      name: "Other",
      selector: (row) => {
        return <span className="text-warning">No Attachment</span>;
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
              <h5 className="card-title d-none d-sm-block">Direct Client</h5>
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
                to="/master/directclient/add"
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

export default DirectClient;
