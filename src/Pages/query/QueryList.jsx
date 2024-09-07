import React, { useState, useEffect } from "react";
import Layout from "../../Component/Layout/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";

const QueryList = () => {

  const navigate = useNavigate();
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [postData, setPostData] = useState({
    Search: "",
    Status: ""
  });

  const postDataToServer = async () => {

    try {
      // const { data } = await axios.post(
        // "http://20.197.55.39/api/querymasterlist",
        // postData
      // );
      const queryList = localStorage?.getItem("queryData");

      const finalList = JSON.parse(queryList);

      console.log(finalList);
      if(queryList === null){
        return
      }

      setGetData(finalList);
      setFilterData(finalList);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const result = getData.filter((item) => {
      return item.QueryId.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  useEffect(() => {
    postDataToServer();
  }, []);

  const handleQueryEdit = (data) =>{
    navigate(`/querylist/queryview`, {state:data});
  }


  const columns = [
    {
      name: "",
      selector: (row) => {
        return (
          <div className="btn-className">
            {/* <Link
              to="/querylist/queryview"
              className="btn btn-warning"
              state={row}
              style={{
                padding: "5px",
                margin: "0px",
                backgroundColor: "#324148",
              }}
            >
            </Link> */}
              <i
                className="fa fa-pencil "
                aria-hidden="true"
                style={{ backgroundColor: "#26A69A", fontSize: "10px", color:'white', padding:'8px', borderRadius:'50%', cursor:"pointer" }}
                onClick={()=>handleQueryEdit(row)}
              ></i>
          </div>
        );
      },
    },
    {
      name: "Query Id",
      selector: (row) => {
        return (
          // <Link to={"/querylist"} className="linkCls">
          // </Link>
          <span className="text-success">{row.QueryId}</span>
        );
      },
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.BusinessType === '1' ? 'Agent' : 'B2B',
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.ClientType,
      sortable: true,
    },
    {
      name: "Query Date",
      selector: (row) => {
        return <span>{row?.Traveldate}</span>;
      },
    },
    {
      name: "Tour Date",
      selector: (row) => {
        return <span>{row?.Traveldate}</span>;
      },
    },
    {
      name: "Destination",
      selector: (row) => {
        row.ToDate;
      },
    },
    {
      name: "Pax Type",
      selector: (row) => {
        return(
          <span>{row?.PaxType == '1'? 'FIT' : 'GIT'}</span>
        );
      },
    },
    {
      name: "Query Type",
      selector: (row) => row.QueryType,
    },
    {
      name: "Lead Source",
      selector: (row) => {
        return (
          <span>
            {row?.LeadSource}
          </span>
        );
      },
    },
    {
      name: "Priority",
      selector: (row) => {
        return (
          <span>{row?.Priority}</span>
        )
      },
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
              <div className="col-xl-8 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Query</h5>
              </div>
              <div className="col-xl-4 d-flex justify-content-end">
                <NavLink
                  to="/querylist/queryview/"
                  className="blue-button"
                  aria-expanded="false"
                >
                  + Create Query
                </NavLink>
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
