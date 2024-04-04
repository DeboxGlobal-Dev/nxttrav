import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DataTable from "react-data-table-component";
import Layout from "../Layout/Layout";
import Model from "../Layout/Model";
import { Field, ErrorMessage } from "formik";
import {
  amentiesInitialValue,
  amentiesValidationSchema,
} from "../../Pages/master/masterList/MasterValidation";
import { axiosOther } from "../../http/axios/axios_new";
import { userJson } from "./dummyjson";
import { dummyUser } from "./dummyjson";

const Users = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isActivate, setIsActivate] = useState(true);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("amenitieslist", postData);
        setGetData(data.DataList);
        setFilterData(data.DataList);
      } catch (error) {
        console.log(error);
      }
    };

    postDataToServer();
  }, []);

  useEffect(() => {
    const result = getData.filter((item) => {
      return item.Name.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleEditClick = (rowValue) => {
    setEditData({
      id: rowValue.Id,
      Name: rowValue.Name,
      SetDefault: rowValue.SetDefault === "Yes" ? 1 : 0,
      Status: rowValue.SetDefault === "Active" ? 1 : 0,
      AddedBy: rowValue.AddedBy,
      UpdatedBy: rowValue.UpdatedBy,
      Created_at: rowValue.Created_at,
      Updated_at: rowValue.Updated_at,
    });
    setIsEditing(true);
  };

  const handleActivation = (id) =>{
    console.log(userJson);
  }

  const columns = [
    {
      name: "User Code",
      selector: (row) => <span>{row.UserCode}</span>,
      sortable: true,
    },
    {
      name: "User Name",
      selector: (row) => row.FirstName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.Role,
      sortable: true,
    },
    {
      name: "User Type",
      selector: (row) => row.UserType,
      sortable: true,
    },
    {
      name: "Profile",
      selector: (row) => row.Profile,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) =>row.Status,
      sortable: true,
    },
    {
      name:"Action",
      selector: (row) => (
        <span className="d-flex align-items-center">
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            onClick={() => handleEditClick(row)}
          ></i>
          <i className="fa-solid fa-trash cursor-pointer"></i>
          {row.Status=='Active'?<i className="fa-solid fa-eye pl-2 cursor-pointer"
            onClick={()=>handleActivation(row.Id)}
          ></i>:
          <i className="fa-solid fa-eye-slash pl-2 cursor-pointer"
            onClick={()=>handleActivation(row.Id)}
          ></i>}
        </span>
      ),
      sortable: true,
    },
  ];

  return (
    <>
      <div className="card shadow-none border">
        <div
          className="header-elements-inline bg-teal py-2 backgroundColor-2"
          style={{ padding: "10px" }}
        >
          <div className="col-xl-10 d-flex align-items-center">
            <h5 className="card-title d-none d-sm-block m-0">Users</h5>
          </div>
          <div className="col-xl-2 d-flex justify-content-end">
            {/* Bootstrap Modal */}
            <NavLink
              to="/master"
              className="btn btn-gray mr-2 fs-11 shadow"
              aria-expanded="false"
            >
              Back
            </NavLink>
            <NavLink
              to="/users/add"
              type="button"
              className="btn text-light add-button fs-11 shadow-2"
            >
              <i className="fa fa-plus pr-1" aria-hidden="true"></i>
              Create New
            </NavLink>
          </div>
        </div>
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 mt-2 mt-md-0">
              <input
                type="text"
                placeholder="Search"
                className="search-input focus-ring form-input"
                name="Search"
                value={postData.Search}
                onChange={(e) =>
                  setPostData({ ...postData, Search: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-none border">
        <DataTable
          columns={columns}
          // data={
          //   postData.Search !== "" || postData.Status !== ""
          //     ? filterData
          //     : getData
          // }
          data={dummyUser}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="280px"
          highlightOnHover
        />
      </div>
    </>
  );
};

export default Users;
