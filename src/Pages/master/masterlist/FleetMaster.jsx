import React, { useEffect, useState } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import Model from "../../../Component/Layout/Model";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { Field, ErrorMessage } from "formik";
import { countryInitialValue, countryValidationSchema } from "./MasterValidation";


const FleetMaster = () => {
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
        const { data } = await axiosOther.post("countrylist", postData);
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
      return item.Name.toLowerCase().match(postData.Search.toLowerCase());
    });

    setFilterData(result);
  }, [postData]);


  const handleEditClick = (rowValue) => {
    setEditData({
      id: rowValue.Id,
      Name: rowValue.Name,
      ShortName: rowValue.ShortName,
      SetDefault: rowValue.SetDefault === "Yes" ? 1 : 0,
      Status: rowValue.Status === "Active" ? 1 : 0,
      AddedBy: rowValue.AddedBy,
      UpdatedBy: rowValue.UpdatedBy,
    });
    setIsEditing(true);
  };

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
                  apiurl={"addupdatecountry"}
                  initialValues={countryInitialValue}
                  validationSchema={countryValidationSchema}
                  forEdit={editData}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
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
                          <option value={1}>12 Seater Traveller</option>
                          <option value={1}>14 Seater Traveller</option>
                          <option value={2}>18 Seater Mini Coach</option>
                          <option value={2}>26 Seater Mini Coach</option>
                          <option value={2}>30 Seater Bus</option>
                          <option value={2}>34 Seater Large Coach</option>
                          <option value={2}>35 Seater</option>
                          <option value={2}>6 Seater Luxury Traveller</option>
                          <option value={2}>9 Seater Traveller</option>
                          <option value={2}>Default</option>
                          <option value={2}>Hatchback</option>
                          <option value={2}>Luxury Sedan</option>
                          <option value={2}>Sadan</option>
                          <option value={2}>Sadan</option>
                          <option value={2}>SUV-Crysta</option>
                          <option value={2}>SUV-Innova</option>
                          <option value={2}>SUV-Luxury</option>
                          <option value={2}>Vovlo-Large-Coach</option>
                        </Field>
                    </div>
                      <div className="col-sm-4">
                        <label>Brand</label>
                        <Field
                          name="SetDefault"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>None</option>
                          <option value={1}>Toyota</option>
                          <option value={1}>Tempo Traveller</option>
                          <option value={2}>AC Innova</option>
                          <option value={2}>AC Mini Coach</option>
                          <option value={2}>AC Tempo</option>
                          <option value={2}>AC Volvo Coach</option>
                          <option value={2}>VolksWagen</option>
                          <option value={2}>BMW</option>
                          <option value={2}>Maruti</option>
                          <option value={2}>Innova</option>
                          <option value={2}>SUV-Innova</option>
                          <option value={2}>9 Seater Traveller</option>
                          <option value={2}>Sadan</option>
                          <option value={2}>Sadan</option>
                          <option value={2}>SUV-Crysta</option>
                          <option value={2}>SUV-Innova</option>
                          <option value={2}>SUV-Luxury</option>
                          <option value={2}>Vovlo-Large-Coach</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label>Vehicle</label>
                        <Field
                          name="SetDefault"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Select Vehicle</option>
                          <option value={1}>Volvo Bus</option>
                          <option value={1}>Volvo</option>
                          <option value={2}>BMW X5</option>
                          <option value={2}>Bolero Amaze</option>
                          <option value={2}>AC Tempo</option>
                          <option value={2}>Polo GT</option>
                          <option value={2}>Vento</option>
                          <option value={2}>New Taigon</option>
                          <option value={2}>The T-Roc 2021</option>
                          <option value={2}>Maruti Suzuki Slerio</option>
                          <option value={2}>Maruti Suzuki Dzire</option>
                          <option value={2}>Maruti Suzuki Alto</option>
                          <option value={2}>Maruti Suzuki Ciaz</option>
                          <option value={2}>Range Rover</option>
                          <option value={2}>BMW C CLASS</option>
                          <option value={2}>New Taigun</option>
                          <option value={2}>Benza</option>
                          <option value={2}>Amaze</option>
                          <option value={2}>Swift</option>
                          <option value={2}>Hatchback</option>
                          <option value={2}>Ertiga</option>
                        </Field>
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
                        <label>Fuel Type</label>
                        <Field
                          name="SetDefault"
                          className="form-control"
                          component={"select"}
                        >
                          <option value={1}>Petrol</option>
                          <option value={1}>Diesel</option>
                          <option value={1}>CNG</option>
                          <option value={2}>Electric</option>
                        </Field>
                      </div>
                      <div className="col-sm-4">
                        <label className="font-size-10">Seating Capacity (Including Driver)</label>
                        <Field
                          type="text"
                          name="ShortName"
                          placeholder="Capacity"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Assigned Driver</label>
                        <Field
                          name="SetDefault"
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
                          name="ShortName"
                          placeholder="Vehicle-Group"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Registration Number</label>
                        <Field
                          type="text"
                          name="ShortName"
                          placeholder="Vehicle-Group"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Registered Owner Name</label>
                        <Field
                          type="text"
                          name="ShortName"
                          placeholder="Vehicle-Group"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Pollution Permits Expire</label>
                        <Field
                          type="date"
                          name="ShortName"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Registration Date</label>
                        <Field
                          type="date"
                          name="ShortName"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Car Photo</label>
                        <Field
                          type="file"
                          name="ShortName"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Chassis Number</label>
                        <Field
                          type="text"
                          name="ShortName"
                          placeholder="Chassis"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Engine Number</label>
                        <Field
                          type="text"
                          name="ShortName"
                          placeholder="Engine"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Company Name</label>
                        <Field
                          type="text"
                          name="ShortName"
                          placeholder="Company Name"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Policy Number</label>
                        <Field
                          type="text"
                          name="BirthDate"
                          placeholder="Policy Number"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Issue Date</label>
                        <Field
                          type="date"
                          name="ShortName"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Due Date</label>
                        <Field
                          type="date"
                          name="ShortName"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Premium Amount</label>
                        <Field
                          type="text"
                          name="ShortName"
                          placeholder="Premium Amount"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Cover Amount</label>
                        <Field
                          type="text"
                          name="ShortName"
                          placeholder="Cover Amount"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Address</label>
                        <Field
                          type="text"
                          name="ShortName"
                          placeholder="Address"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Expiry Date</label>
                        <Field
                          type="date"
                          name="ShortName"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <label>Type</label>
                        <Field
                          type="text"
                          name="ShortName"
                          placeholder="Premium Amount"
                          className="form-control"
                        />
                        <span className="font-size-10 text-danger">
                          <ErrorMessage name="ShortName" />
                        </span>
                      </div>
                      <div className="col-sm-4">
                        <label>Expiry Date</label>
                        <Field
                          type="date"
                          name="ShortName"
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
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FleetMaster;
