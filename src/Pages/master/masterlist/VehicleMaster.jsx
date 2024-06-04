import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import { vehicleMasterInitialValue, vehicleMasterValidationSchema } from "./MasterValidations";


const VehicleMaster = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });
  const [changeValue, setChangeValue] = useState("");
  const [updateData, setUpdateData] = useState(false);
  const [imageValue, setImageValue] = useState({
    ImageName:"",
    ImageData:""
  });
  const [showImage, setShowImage] = useState('');
  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("vehiclemasterlist", postData);
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
    console.log('Row Value....', rowValue);
    setImageValue({
      ImageName:"",
      ImageData:""
    });
    setEditData({
      ...rowValue,
      Status:rowValue.Status==="Active"?1:0
    });
    setIsEditing(true);
    setShowImage(rowValue.ImageName);
  };

  const handleImageChange = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload =()=>{
      const base64 = reader.result;
      const base64String = base64.split(',')[1];
      setImageValue({
        ImageName:file.name,
        ImageData:base64String
      });
    }
    reader.readAsDataURL(file);
  }

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          <img src={row.ImageName} alt="image" style={{height:'30px', height:'30px'}}></img>
        </span>
      ),
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Vehicle Type",
      selector: (row) => row.VehicleTypeName,
      sortable: true,
    },
    {
      name: "Vehicle Brand",
      selector: (row) => row.VehicleBrandName,
      sortable: true,
    },
    {
      name: "Capacity",
      selector: (row) => row.Capacity,
      sortable: true,
    },
    {
      name: "Added By",
      selector: (row) => {
        return (
          <span>
            Admin <br /> {row.AddedBy}
          </span>
        );
      },
    },
    {
      name: "Updated By",
      selector: (row) => {
        return (
          <span>
            {row.UpdatedBy == true ? "Admin" : "-"} <br /> {row.UpdatedBy}
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
                <h5 className="card-title d-none d-sm-block">Vehicle Master</h5>
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
                  heading={"Add Amenties"}
                  apiurl={"addupdatevehiclemaster"}
                  initialValues={vehicleMasterInitialValue}
                  validationSchema={vehicleMasterValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  updateData={updateData}
                  setUpdateData={setUpdateData}
                  imageValue={imageValue}
                  setImageValue={setImageValue}
                >
                  <div className="card-body">
                    <div className="row row-gap-3">
                      <div className="col-sm-4">
                        <label>Name</label>
                        <Field
                          type="text"
                          name="Name"
                          placeholder="Enter Name"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="Name" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Vehicle Type</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="VehicleType"
                        >
                          <option value="">Select Vehicle </option>
                          <option value={1}>TATA</option>
                          <option value={2}>Maruti</option>
                          <option value={3}>BMW</option>
                          <option value={3}>Rolls Royce</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Capacity</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="Capacity"
                        >
                          <option value="">Select Capacity</option>
                          <option value={1}>8 Seater</option>
                          <option value={2}>9 Seater</option>
                          <option value={3}>10 Seater</option>
                          <option value={3}>11 Seater</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Vehile Brand</label>
                        <Field
                          className="form-control"
                          component={"select"}
                          name="VehicleBrand"
                        >
                          <option value="">Select Brand </option>
                          <option value={1}>TATA</option>
                          <option value={2}>Maruti</option>
                          <option value={3}>BMW</option>
                          <option value={3}>Rolls Royce</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Image</label>
                        <input
                          type="file"
                          name="ImageData"
                          className="form-control"
                          onChange={handleImageChange}
                        />
                        {isEditing && <img src={showImage} alt="" style={{height:'50px', width:'50px', marginTop:'5px'}}/>}
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
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default VehicleMaster;
