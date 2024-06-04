import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import { countryInitialValue, countryValidationSchema } from "./MasterValidations";


const FleetMaster = () => {
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
    ImageData:'',
    ImageName:''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("fleetmasterlist", postData);
        setLoading(false);
        setGetData(data.DataList);
        setFilterData(data.DataList);
      } catch (error) {
        console.log(error);
      }
    };
    postDataToServer();
  }, [getData]);

  useEffect(() => {
    const result = getData.filter((item) => {
      return item?.Name?.toLowerCase()?.match(postData?.Search?.toLowerCase());
    });

    setFilterData(result);
  }, [updateData]);


  const handleEditClick = (rowValue) => {
    setImageValue({
      ImageData:"",
      ImageName:""
    });
    setEditData({
      ...rowValue,
      SetDefault: rowValue.SetDefault === "Yes" ? 1 : 0,
      Status: rowValue.Status === "Active" ? 1 : 0
    });
    setIsEditing(true);
  };

  const handleFleetChange = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () =>{
      const base64 = reader.result;
      const base64String = base64.split(',')[1];
      setImageValue({
        ImageData:base64String,
        ImageName:file.name
      });
    }
    reader.readAsDataURL(file);
  }

  const columns = [
    {
      name: "Country Name",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            data-toggle="modal"
            data-target="#modal_form_vertical"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.Name}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Short Name",
      selector: (row) => row.ShortName,
      sortable: true,
    },
    {
      name: "Status Name",
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: "Added By",
      selector: (row) => {
        return (
          <span>
            Admin <br /> {row.Created_at}
          </span>
        );
      },
    },
    {
      name: "Updated By",
      selector: (row) => {
        return (
          <span>
            {row.UpdatedBy == true ? "Admin" : "-"} <br /> {row.Updated_at}
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
                <h5 className="card-title d-none d-sm-block">Fleet Master</h5>
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
                  heading={"Add Fleet"}
                  apiurl={"addupdatefleetmaster"}
                  initialValues={countryInitialValue}
                  validationSchema={countryValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setChangeValue={setChangeValue}
                  setUpdateData={setUpdateData}
                  updateData={updateData}
                  imageValue={imageValue}
                  setImageValue={setImageValue}
                >
                  <div className="card-body">
                  <div className="row row-gap-3">
                    <div className="col-sm-4">
                        <label>Vehicle Type</label>
                        <Field
                          name="SetDefault"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>12 Seater</option>
                          <option value={2}>12 Seater Traveller</option>
                          <option value={3}>14 Seater Traveller</option>
                        </Field>
                    </div>
                    <div className="col-sm-4">
                        <label>Chassis Number</label>
                        <Field
                          type="text"
                          name="ChassisNumber"
                          placeholder="Chassis"
                          className="form-control"
                        />
                    </div>
                    <div className="col-sm-4">
                        <label>Brand</label>
                        <Field
                          name="Brand"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>None</option>
                          <option value={2}>Toyota</option>
                          <option value={3}>Tempo Traveller</option>
                        </Field>
                    </div>
                    <div className="col-sm-4">
                        <label>Engine Number</label>
                        <Field
                          type="text"
                          name="EngineNumber"
                          placeholder="Engine"
                          className="form-control"
                        />
                    </div>
                    <div className="col-sm-4">
                        <label>Vehicle</label>
                        <Field
                          name="Vehicle"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Select Vehicle</option>
                          <option value={2}>Volvo Bus</option>
                        </Field>
                    </div>
                    <div className="col-sm-4">
                        <label>Company Name</label>
                        <Field
                          type="text"
                          name="CompanyName"
                          placeholder="Company Name"
                          className="form-control"
                        />
                    </div>
                    <div className="col-sm-4">
                        <label>Color</label>
                        <Field
                          type="text"
                          name="Color"
                          placeholder="Color"
                          className="form-control"
                        />
                    </div>
                    <div className="col-sm-4">
                        <label>Policy Number</label>
                        <Field
                          type="text"
                          name="PolicyNumber"
                          placeholder="Policy Number"
                          className="form-control"
                        />
                    </div>
                    <div className="col-sm-4">
                        <label>Fuel Type</label>
                        <Field
                          name="FuelType"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Petrol</option>
                          <option value={2}>Diesel</option>
                          <option value={3}>CNG</option>
                          <option value={4}>Electric</option>
                        </Field>
                    </div>
                    <div className="col-sm-4">
                        <label>Issue Date</label>
                        <Field
                          type="date"
                          name="IssueDate"
                          className="form-control"
                        />
                    </div>
                    <div className="col-sm-4">
                        <label className="font-size-10">Seating Capacity (Including Driver)</label>
                        <Field
                          type="text"
                          name="SeatingCapacity"
                          placeholder="Capacity"
                          className="form-control"
                        />
                    </div>
                      <div className="col-sm-4">
                        <label>Assigned Driver</label>
                        <Field
                          name="AssignedDriver"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>None</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Category Vehicle-Group</label>
                        <Field
                          type="text"
                          name="CategoryVehicle"
                          placeholder="Vehicle-Group"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Registration Number</label>
                        <Field
                          type="text"
                          name="RegistrationNumber"
                          placeholder="Vehicle-Group"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Registered Owner Name</label>
                        <Field
                          type="text"
                          name="RegisteredOwnerName"
                          placeholder="Vehicle-Group"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Pollution Permits Expire</label>
                        <Field
                          type="date"
                          name="PollutionPermitsExpire"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Registration Date</label>
                        <Field
                          type="date"
                          name="RegistrationDate"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Car Photo</label>
                        <Field
                          type="file"
                          name="ImageData"
                          className="form-control"
                          onChange={handleFleetChange}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Due Date</label>
                        <Field
                          type="date"
                          name="DueDate"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Premium Amount</label>
                        <Field
                          type="text"
                          name="PremiumAmount"
                          placeholder="Premium Amount"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Cover Amount</label>
                        <Field
                          type="text"
                          name="CoverAmount"
                          placeholder="Cover Amount"
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
                      </div>
                      <div className="col-sm-4">
                        <label>Expiry Date</label>
                        <Field
                          type="date"
                          name="ExpiryDate"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Type</label>
                        <Field
                          type="text"
                          name="Type"
                          placeholder="Premium Amount"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Expiry Date</label>
                        <Field
                          type="date"
                          name="ExpiryDate"
                          className="form-control"
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

export default FleetMaster;
