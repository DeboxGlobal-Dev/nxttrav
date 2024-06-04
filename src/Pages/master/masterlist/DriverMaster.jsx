import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import {
  driverMasterInitialValue,
  driverMasterValidationSchema,
} from "./MasterValidations";

const DriverMaster = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [loading, setLoading] = useState(true);
  const [changeValue, setChangeValue] = useState("");
  const [updateData, setUpdateData] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [imageValue, setImageValue] = useState({
    LicenseData:'',
    LicenseName:''
  });
  const [anotherImage, setAnotherImage] = useState({
    ImageData:'',
    ImageName:''
  });
  

  
  const getDataToServer = async () => {
    try {
      const destination = await axiosOther.post("countrylist", {
        Search: "",
        Status: 1,
      });
      setCountryList(destination.data.DataList);
    } catch (err) {
      console.log("Erro Occured", err);
    }
  };
  useEffect(() => {
    getDataToServer();
  }, []);


  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("drivermasterlist", postData);
        setLoading(false);
        setGetData(data.DataList);
        setFilterData(data.DataList);
      } catch (error) {
        console.log(error);
      }
    };
    postDataToServer();
  }, [updateData]);

  useEffect(() => {
    const result = getData.filter((item) => {
      return item?.Name?.toLowerCase()?.match(postData?.Search?.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);

  const handleEditClick = (rowValue) => {
    setImageValue({
      ImageData:"",
      ImageName:""
    });
    setAnotherImage({
      LicenseData:"",
      LicenseName:""
    });
    setEditData({
      ...rowValue,
      Status:rowValue.Status==="Active"? 1:0
    });
    setIsEditing(true);
  };

  const handleDriverChange1 = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () =>{
      const base64 = reader.result;
      const base64String = base64.split(',')[1];
      setImageValue({
        LicenseData:base64String,
        LicenseName:file.name
      })
    };  
    reader.readAsDataURL(file);
  }

  const handleDriverChange2 = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () =>{
      const base64 = reader.result;
      const base64String = base64.split(',')[1];
      setAnotherImage({
        ImageData:base64String,
        ImageName:file.name
      })
    };  
    reader.readAsDataURL(file);
  }

  // console.log('image-value', imageValue);
  const columns = [
    {
      name: "Profile",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          <img src={row.ImageName} style={{height:'30PX', width:'30px'}} alt="profile-image"></img>
        </span>
      ),
      sortable: true,
    },
    {
      name: "Document",
      selector: (row) => <img src={row.LicenseName} style={{height:'30PX', width:'30px'}} alt="License-image"></img>,
      sortable: true,
    },
    {
      name: "Driver Name",
      selector: (row) => row.DriverName,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.Country,
      sortable: true,
    },
    {
      name: "Emiratees Id/License Number",
      selector: (row) => row.LicenseNumber,
      sortable: true,
    },
    {
      name: "Mobile Number",
      selector: (row) => row.MobileNumber,
      sortable: true,
    },
    {
      name: "Alt Number",
      selector: (row) => row.AlternateMobileNo,
      sortable: true,
    },
    {
      name: "Whatsapp Number",
      selector: (row) => row.WhatsappNumber,
      sortable: true,
    },
    {
      name: "Passport Number",
      selector: (row) => row.WhatsappNumber,
      sortable: true,
    },
    {
      name: "Vehicles",
      selector: (row) => row.Vehicle,
      sortable: true,
    },
    {
      name: "Seating Capacity",
      selector: (row) => row.Vehicle,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => {
        return (
          <span>
            {row.UpdatedBy == true ? "Admin" : "-"} <br /> {row.Status}
          </span>
        );
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
                <h5 className="card-title d-none d-sm-block">Driver Master</h5>
              </div>
              <div className="col-xl-2 d-flex justify-content-end">
                {/*Bootstrap Modal*/}
                <NavLink
                  to="/master"
                  className="gray-button"
                  aria-expanded="false"
                >
                  Back
                </NavLink>
                <Model
                  heading={"Add Driver"}
                  apiurl={"addupdatedrivermaster"}
                  initialValues={driverMasterInitialValue}
                  validationSchema={driverMasterValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                  imageValue={{...imageValue,...anotherImage}}
                  setImageValue={setImageValue}
                >
                  <div className="card-body">
                    <div className="row row-gap-3">
                      <div className="col-sm-4">
                        <label>Country</label>
                        <Field
                          name="Country"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Select Country</option>
                          {
                            countryList.map((value, index)=>{
                              return <option value={value.id} key={index + 1}>{value.Name}</option>
                            })
                          }
                        </Field>
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Country" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Driver Name</label>
                        <Field
                          type="text"
                          name="DriverName"
                          placeholder="Driver Name"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="DriverName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Mobile Number</label>
                        <Field
                          type="text"
                          name="MobileNumber"
                          placeholder="Mobile Number"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="MobileNumber" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>WhatsApp Number</label>
                        <Field
                          type="text"
                          name="WhatsappNumber"
                          placeholder="WhatsAppNumber"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="WhatsAppNumber" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Alternate Mobile Number</label>
                        <Field
                          type="text"
                          name="AlternateMobileNo"
                          placeholder="Enter Short Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>License Number</label>
                        <Field
                          type="text"
                          name="LicenseNumber"
                          placeholder="License Number"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Birthdate</label>
                        <Field
                          type="date"
                          name="BirthDate"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Valid Upto</label>
                        <Field
                          type="date"
                          name="ValidUpto"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Passport Number</label>
                        <Field
                          type="text"
                          name="PassportNumber"
                          placeholder="Enter Short Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Address</label>
                        <Field
                          type="text"
                          name="Address"
                          placeholder="Address"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Address" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Upload License</label>
                        <input
                          type="file"
                          name="LicenseData"
                          className="form-control"
                          onChange={handleDriverChange1}
                          // value={imageValue.LicenseData}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Image</label>
                        <input
                          type="file"
                          name="ImageData"
                          className="form-control"
                          onChange={handleDriverChange2}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Status</label>
                        <Field
                          name="Status"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Active</option>
                          <option value={0}>Inactive</option>
                        </Field>
                      </div>
                    </div>
                  </div>
                </Model>
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
                    value={postData.Search}
                    onChange={(e) =>
                      setPostData({ ...postData, Search: e.target.value })
                    }
                  />
                </div>
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <select
                    className="select-input focus-ring form-input"
                    name="Status"
                    value={postData.Status}
                    onChange={(e) =>
                      setPostData({ ...postData, Status: e.target.value })
                    }
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
    </>
  );
};

export default DriverMaster;
