import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route, useLocation, Outlet } from "react-router-dom";
import Layout from "../Layout/Layout";
import { axiosOther } from "../../http/axios/axios_new";


const Setting = () => {
  const { pathname } = useLocation();

  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
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

  const columns = [
    {
      name: "Action",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.AmenityImage}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Profile Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Profile Description",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Added By",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Updated By",
      selector: (row) => row.Name,
      sortable: true,
    },
  ];
  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-12">
              <div className="card shadow-none border">
                <div className="card-header border-bottom py-2">
                  <h6 className="my-1">Settings</h6>
                </div>
                <NavLink to="/setting" className={`py-2 px-3 d-flex ${pathname==="/setting"? 'Active':''}`}>
                  <div>
                     <i className="icon-user-plus mr-2"></i>Users
                  </div>
                  <span className="badge badge-pill bg-blue ml-auto">12</span>
                </NavLink>
                <NavLink to="profile" className={`py-2 px-3 d-flex ${pathname==="/setting/profile"? 'Active':''}`}>
                  <div>
                    <i className="fa-solid fa-user mr-2"></i>Profile
                  </div>
                  <span className="badge badge-pill bg-blue ml-auto">24</span>
                </NavLink>
                <NavLink to="email" className={`py-2 px-3 d-flex ${pathname==="/setting/email"? 'Active':''}`}>
                  <div>
                    <i className="fa-solid fa-building mr-2"></i>Email Setting
                  </div>
                  <span className="badge badge-pill bg-blue ml-auto">36</span>
                </NavLink>
                <NavLink to="reporting" className={`py-2 px-3 ${pathname==="/setting/reporting"? 'Active':''}`}>
                  <i className="fa-solid fa-gear mr-2"></i> Reporting Chart
                </NavLink>
                <NavLink to="database" className={`py-2 px-3 ${pathname==="/setting/database"? 'Active':''}`}>
                  <i className="icon-comment-discussion mr-2"></i>Database Backup
                </NavLink>
              </div>
            </div>
            <div className="col-lg-10 col-md-9 col-12"><Outlet/></div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Setting;
