import React, { useState, useEffect } from "react";
import Layout from "../../Component/Layout/Layout";
import { NavLink, Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";

const QueryList = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const data = localStorage.getItem('Query');
  const storedData = JSON.parse(data);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axios.post(
          "http://127.0.0.1:8000/api/querymasterlist",
          postData
        );
        setGetData(data.DataList);
        setFilterData(data.DataList);
        console.log("QUERY DATA: ", getData);
      } catch (error) {
        console.log(error);
      }
    };

    postDataToServer();
  }, []);

  useEffect(() => {
    const result = getData.filter((item) => {
      return item.QueryId.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const columns = [
    {
      name: "",
      selector: (row) => {
        return (
          <div className="btn-className">
            <Link
              href="#"
              className="btn btn-warning"
              style={{
                padding: "5px",
                margin: "0px",
                backgroundColor: "#324148",
              }}
            >
              <i
                className="fa fa-pencil "
                aria-hidden="true"
                style={{ color: "#fffffff1", fontSize: "10px" }}
              ></i>
            </Link>
          </div>
        );
      },
    },
    {
      name: "Query Id",
      selector: (row) => {
        return (
          <Link to={"/query_list/queryview/" + row.QueryId} className="linkCls">
            {row.QueryId}
          </Link>
        );
      },
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.ClientType,
      sortable: true,
    },
    {
      name: "Lead Pax",
      selector: (row) => row.LeadPax,
      sortable: true,
    },
    {
      name: "Query Date",
      selector: (row) => {
        return (
          <span>
            {" "}
            {row.CreatedDate}
            <br />
            {row.CreatedTime}
          </span>
        );
      },
    },
    {
      name: "Tour Date",
      selector: (row) => "-",
    },
    {
      name: "Destination",
      selector: (row) => "-",
    },
    {
      name: "Query Type",
      selector: (row) => row.QueryType,
    },
    {
      name: "Total Pax",
      selector: (row) => "-",
    },
    {
      name: "Estimated Value",
      selector: (row) => "-",
    },
    {
      name: "Payment Information",
      selector: (row) => "-",
    },
    {
      name: "Assign To",
      selector: (row) => {
        return <span> Admin </span>;
      },
    },
    {
      name: "Status",
      selector: (row) => {
        return <span> Pending </span>;
      },
    },
  ];
  
  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div
            className="card shadow-none border"
            style={{ marginBottom: "0" }}
          >
            <div
              className="card-header header-elements-inline bg-info-700 py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Query</h5>
              </div>
              <div className="col-xl-2 d-flex justify-content-end">

              {storedData?<div className="progress-container col-10 ml-auto p-0 mr-3">
                  <div className="progress-bar p-0">
                    <div className="progress-text"><NavLink to="/querylist/queryview/" style={{color:'white'}}>Un-Submitted Query</NavLink></div>
                  </div>
                </div>:<NavLink
                  to="/querylist/queryview/"
                  className="blue-button"
                  aria-expanded="false"
                >
                  + Create Query
                </NavLink>}
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <input
                    type="text"
                    placeholder="Search here.."
                    className="search-input focus-ring form-input"
                    name="Search"
                    value={postData.Search}
                    onChange={(e) => {
                      setPostData({
                        ...postData,
                        Search: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <select
                    className="select-input focus-ring form-input"
                    name="Status"
                    value={postData.Status}
                    onChange={(e) => {
                      setPostData({
                        ...postData,
                        Status: e.target.value,
                      });
                    }}
                  >
                    <option value="">Select Status</option>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
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
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default QueryList;
