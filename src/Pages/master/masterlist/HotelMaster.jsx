import React, { useState, useEffect } from "react";
import Layout from "../../../Component/Layout/Layout";
import { NavLink } from "react-router-dom";
import DataTable from "react-data-table-component";
import { axiosOther } from "../../../http/axios/axios_new";
import { hotelMasterValue } from "./MasterValidation";
// import toast, { Toaster } from "react-hot-toast";
import * as XLSX from "xlsx";
import LinearWithValueLabel from "../../../hooks/LinearWithValueLabel";
import { toast } from 'react-toastify';

const HotelMaster = () => {
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [postData, setPostData] = useState({
    Search: "",
    Status: "",
  });

  const [excelToJson, setExcelToJson] = useState("");
  const [file, setFile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [linearStatus, setLinearStatus] = useState(false);

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("hotellist", postData);
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
    setValueForEdit({ ...rowValue });
  };

  const handleFileChange = (e) => {

    const templateHeader = ['HOTEL_NAME', 'DESTINATION', 'SELF_SUPPLIER', 'SUPPLIER_NAME', 'PAYMENT_TERM', 'HOTEL_COUNTRY', 'STATE', 'CITY', 'HOTEL_ADDRESS', 'PIN_CODE', 'GSTN', 'DIVISION', 'CONTACT_PERSON', 'DESIGNATION', 'MOBILE_NO', 'CONTACT_PERSON_EMAIL', 'MARKET_TYPE', 'SEASON_TYPE', 'ROOM_TYPE', 'MEAL_PLAN', 'FROM_VALIDITY', 'TO_VALIDITY', 'CURRENCY', 'SINGLE', 'DOUBLE', 'CHILD_WITH_BED', 'EXTRA_BED_ADULT', 'EXTRA_BED', 'BREAKFAST', 'LUNCH', 'DINNER', 'TARRIF_TYPE', 'ROOM_GST_SLAB', 'MEAL_GST_SLAB', 'TAC_PERSANT', 'REMARKS', 'STAR', 'HOTEL_WEB_LINK', 'HOTEL_CHAIN', 'WEEKEND_NAME', 'HOTEL_INFO', 'POLICY', 'TERMS_CONDITION', 'HOTEL_TYPE'];

    console.log(templateHeader.length);

    const file = e.target.files[0];
    setFile(e.target.files[0]);
    console.log(file);
    if (file) {
      setErrorMessage("");
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);

        /////////////FOR GETTING HEADER START///////////////
        const rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName],
          {header: 1,
         defval: ""})
        const headers = rowObject[0];
        //console.log(headers)
        /////////////FOR GETTING HEADER END///////////////

        let difference = headers.filter(x => !templateHeader.includes(x));
        console.log("Diffrenece in array: ",difference);
        console.log("Diffrenece array length: ",difference.length);
        if(difference.length>0){
          setErrorMessage("Header Name: [ "+difference+" ] is not matched with template. Please upload correct one.");

        }else{
          toast.success("Template Matched");
          setExcelToJson(JSON.stringify(json, null, 2));
        }
      };

      reader.readAsBinaryString(file);
    }
  };

  const handleSubmitFile = async () => {
    const extension = file?.name?.split(".")?.pop()?.toLowerCase();
    if ((excelToJson !== "" && extension == "xls") || extension == "xlsx") {
      setErrorMessage("");
      //console.log(excelToJson);
      setFile({ [file.name]: "" });
      document.getElementById("cancel").click();
      toast.success("Data Validating..");


      setLinearStatus(true);

      try{
        const response = await axiosOther.post('importhotel', excelToJson);
        if (response) {
          setTimeout(() => {
            setLinearStatus(false);
            toast.success("Data uploaded sucessfully");
          },5000)

        } else {

        }
      }catch(error){
        console.log(error);
      }


    } else {
      setErrorMessage("Upload an excel file.");
    }
  };

  const columns = [
    {
      name: "Hotel Chain",
      selector: (row) => (
        <span>
          <i
            className="fa-solid fa-pen-to-square pr-2 cursor-pointer"
            onClick={() => handleEditClick(row)}
          ></i>
          {row.HotelChain}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Hotel Name",
      selector: (row) => row.HotelName,
      sortable: true,
    },
    {
      name: "Destination/Locality",
      selector: (row) => row.Destination,
    },
    {
      name: "Contact Person",
      selector: (row) => row.ContactPerson,
    },
    {
      name: "Category",
      selector: (row) => row.Category,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: "Room Type",
      selector: (row) => row.RoomType,
      sortable: true,
    },
    {
      name: "Gallery",
      selector: (row) => row.Gallery,
      sortable: true,
    },
    {
      name: "Rate Sheet",
      selector: (row) => row.RateSheet,
      sortable: true,
    },
  ];

  return (
    <>
      <Layout>
        <div className="container-fluid p-3 mb-4">
          <div className="card shadow-none border">
            <div
              className="card-header header-elements-inline bg-info-700 py-2"
              style={{ padding: "10px" }}
            >
              <div className="col-xl-10 d-flex align-items-center">
                <h5 className="card-title d-none d-sm-block">Hotel Master</h5>

              </div>
              <div className="col-xl-2 d-flex justify-content-end">
                {/* Bootstrap Modal */}
                <NavLink
                  to="/master"
                  className="gray-button"
                  aria-expanded="false"
                >
                  Back
                </NavLink>
                <NavLink
                  to="/master/hotelmaster/create"
                  className="blue-button"
                  aria-expanded="false"
                >
                  +&nbsp;Create&nbsp;New
                </NavLink>

                {/* //Modal */}

                <button
                  type="button"
                  className="blue-button"
                  data-toggle="modal"
                  data-target="#modal_form_vertical1"
                >
                  Import
                </button>

                <div
                  className="modal fade"
                  id="modal_form_vertical1"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header  bg-info-700">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Uplode File
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="col-5">
                          <label htmlFor="">Upload File</label>
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="form-control"
                            name="fileName"
                          />
                        </div>
                        <span className="font-size-10 text-danger pl-2">
                          {errorMessage}
                        </span>
                      </div>

                      <div className="modal-footer">
                        <button
                          type="button"
                          id="cancel"
                          className="default-button"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        {!errorMessage  &&
                        <button
                          type="submit"
                          className="green-button"
                          onClick={handleSubmitFile}
                        >
                          Upload
                        </button>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                {/* //Modal */}
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
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
                <div className="col-lg-2 col-md-3 mt-2 mt-md-0">
                  <select
                    className="select-input focus-ring form-input"
                    name="Status"
                    value={postData.Status}
                    onChange={(e) =>
                      setPostData({ ...postData, Status: e.target.value })
                    }
                  >
                    <option value="0">Select Status</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
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
          {/* {linearStatus &&
          <LinearWithValueLabel />
          } */}
          <div className="card shadow-none border">
            <DataTable
              columns={columns}
              data={filterData}
              // data={
              //   postData.Search !== "" || postData.Status !== ""
              //     ? filterData
              //     : getData
              // }
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

export default HotelMaster;
