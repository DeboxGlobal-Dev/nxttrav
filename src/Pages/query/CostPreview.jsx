import React, { useRef } from "react";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import Docxtemplater from "docxtemplater";

const CostPreview = () => {
  const previewRef = useRef();

  const handlePdfConvert = () => {};

  const handleWordConvert = async () => {
    const htmlData = `
        <html>
          <head>
  
          </head>
          <body>
            <div class="container">
              ${previewRef.current.innerHTML}
            </div>
          </body>
        </html>
      `;

    const blob = new Blob([htmlData], {
      type: "application/msword",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "document.doc";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center py-2">
              <ul className="d-flex gap-5 m-0  list-unstyled">
                <li className="cursor-pointer">
                  <span className="font-size-10 font-weight-bold">
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>
                  Modify Trip
                </li>
                <li
                  className="cursor-pointer"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <span>
                    <i className="fa-solid fa-gear"></i>
                  </span>
                  &nbsp; Preview Setting
                </li>
                <li className="cursor-pointer">
                  <span className="">
                    <i className="fa-solid fa-book"></i>
                  </span>
                  &nbsp; Final Tour Plan
                </li>
              </ul>
              <ul className="d-flex gap-5 m-0 list-unstyled">
                <li>
                  <select
                    name=""
                    id=""
                    className="m-0 form-input-6 text-light bg-primary"
                  >
                    <option value="">Select Language</option>
                    <option value="1">Hindi</option>
                    <option value="2">English</option>
                    <option value="3">Arabic</option>
                  </select>
                </li>
                <li className="cursor-pointer">
                  <div className="dropdown">
                    <p
                      className="m-0"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span>
                        <i className="fa-solid fa-file-export"></i>
                      </span>
                      &nbsp; Export
                    </p>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li className="dropdown-item" onClick={handlePdfConvert}>
                        <i className="fa-regular fa-file-pdf"></i>
                        PDF DOCUMENT
                      </li>
                      <li className="dropdown-item" onClick={handleWordConvert}>
                        <i className="fa-regular fa-file-word"></i>
                        WORD DOCUMENT
                      </li>
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer">
                  <span>
                    <i className="fa-solid fa-play"></i>
                  </span>
                  &nbsp; Preview
                </li>
                <li className="">
                  <div className="dropdown">
                    <button
                      className="m-0 modal-save-button bg-warning w-auto"
                      id="dropdownShareButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span>
                        <i className="fa-solid fa-share"></i> &nbsp;
                      </span>
                      Share
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownShareButton"
                    >
                      <a className="dropdown-item" href="#">
                        <i className="fa-solid fa-link"></i>
                        GET TRIP LINK
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-solid fa-envelope"></i>
                        SEND VIA EMAIL
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-brands fa-whatsapp"></i>
                        SEND VIA WHATSAPP
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundColor-5 min-vh-100" ref={previewRef}>
        <div className="container-fluid d-flex flex-column align-items-center">
          <div className="row bg-white px-2 cost-preview-A4-width">
            <div className="col-12 py-1 p-0">
              <div className="row">
                <div className="col-5">
                  <h5 className="m-0 text-light preview-heading w-75">
                    Proposal
                  </h5>
                  <div className="p-0 w-100 heading-bottom-border"></div>
                </div>
                <div className="col-7">
                  <div className="row">
                    <div className="col-4 d-flex justify-content-end">
                      <img
                        src="https://thumbs.dreamstime.com/b/travel-logo-23045342.jpg"
                        className="cost-preview-client-logo-height"
                        alt="client-logo"
                      />
                    </div>
                    <div className="col-8">
                      <h6 className="m-0 dotted-border text-center font-size-12">
                        COMPANY NAME
                      </h6>
                      <p className="font-size-10 text-center m-0">
                        Addres: Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <div className="d-flex p-0 gap-2 justify-content-center">
                        <p className="m-0 font-size-8">
                          <span className="bg-dark padding-2-3 rounded-pill">
                            <i className="fa-solid fa-phone font-size-8"></i>
                          </span>
                          &nbsp; +91-737263762
                        </p>
                        <p className="m-0 font-size-8">
                          <span className="bg-dark padding-2-3 rounded-pill">
                            <i className="fa-solid fa-envelope"></i>
                          </span>
                          &nbsp; example@gmail.com
                        </p>
                        <p className="m-0 font-size-8">
                          <span className="bg-dark padding-2-3 rounded-pill">
                            <i className="fa-solid fa-globe"></i>
                          </span>
                          &nbsp; www.example.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-0">
              <img
                src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="preview-img w-100"
              />
            </div>
            <div className="col-12 py-1 backgroundColor-6 ">
              <h4 className="m-0 text-light text-center">
                02-09-2024 DEBOX GLOBAL PVT LTD
              </h4>
            </div>
            <div className="col-12 py-3">
              <div className="d-flex justify-content-between">
                <p className="m-0">Elite Proposal</p>
                <p className="m-0">QueryId: DB24-25/002209</p>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="">
                  <p className="m-0 text-center font-weight-bold">
                    Tour Start Date
                  </p>
                  <p className="m-0 text-center ">03-09-2024</p>
                </div>
                <div className="">
                  <p className="m-0 text-center font-weight-bold">Duration</p>
                  <p className="m-0 text-center ">1 Nights/2 Days</p>
                </div>
                <div className="">
                  <p className="m-0 text-center font-weight-bold">Travellers</p>
                  <p className="m-0 text-center ">1 Pax</p>
                </div>
                <div className="">
                  <p className="m-0 text-center font-weight-bold text">
                    Destination Covered
                  </p>
                  <p className="m-0 text-center ">1 Pax</p>
                </div>
              </div>
            </div>
            <div className="col-12mt-2 p-0">
              <h4 className="m-0 second-preview-heading">
                DAY 1 | 22-08-2024 Thursday | Delhi
              </h4>
            </div>
            <div className="col-12 py-4">
              <p>Ansar</p>
              <p>This is my description</p>
              <div className="mt-2 d-flex gap-3 align-items-center border-bottom pb-3">
                <div>
                  <img
                    src="https://images.pexels.com/photos/528427/pexels-photo-528427.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                    className="preview-img-1 shadow-1 rounded"
                  />
                </div>
                <div>
                  <p className="font-weight-bold mb-3">
                    Itenrary Info | Fragement Nature
                  </p>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Category</p>
                      <div className="d-flex gap-1 p-0">
                        <i className="fa-solid fa-star color-gold font-size-12"></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Room Type</p>
                      <p className="font-size-12 m-0">classNameic Cottege</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Meal Plan</p>
                      <p className="font-size-12 m-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 d-flex gap-3 align-items-center border-bottom pb-3">
                <div>
                  <img
                    src="https://images.pexels.com/photos/1600151/pexels-photo-1600151.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                    className="preview-img-1 shadow-1 rounded"
                  />
                </div>
                <div>
                  <p className="font-weight-bold mb-3">
                    Hotel | Fragement Nature Hotel
                  </p>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Category</p>
                      <div className="d-flex gap-1 p-0">
                        <i className="fa-solid fa-star color-gold font-size-12"></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Room Type</p>
                      <p className="font-size-12 m-0">classNameic Cottege</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Meal Plan</p>
                      <p className="font-size-12 m-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 d-flex gap-3 align-items-center border-bottom pb-3">
                <div>
                  <img
                    src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                    className="preview-img-1 shadow-1 rounded"
                  />
                </div>
                <div>
                  <p className="font-weight-bold mb-3">
                    Guide | Fragement Nature
                  </p>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Category</p>
                      <div className="d-flex gap-1 p-0">
                        <i className="fa-solid fa-star color-gold font-size-12"></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Room Type</p>
                      <p className="font-size-12 m-0">classNameic Cottege</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Meal Plan</p>
                      <p className="font-size-12 m-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 d-flex gap-3 align-items-center border-bottom pb-3">
                <div>
                  <img
                    src="https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                    className="preview-img-1 shadow-1 rounded"
                  />
                </div>
                <div>
                  <p className="font-weight-bold mb-3">
                    Activity | Fragement Nature
                  </p>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Category</p>
                      <div className="d-flex gap-1 p-0">
                        <i className="fa-solid fa-star color-gold font-size-12"></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Room Type</p>
                      <p className="font-size-12 m-0">classNameic Cottege</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Meal Plan</p>
                      <p className="font-size-12 m-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 d-flex gap-3 align-items-center border-bottom pb-3">
                <div>
                  <img
                    src="https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                    className="preview-img-1 shadow-1 rounded"
                  />
                </div>
                <div>
                  <p className="font-weight-bold mb-3">
                    Monument | Fragement Nature
                  </p>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Category</p>
                      <div className="d-flex gap-1 p-0">
                        <i className="fa-solid fa-star color-gold font-size-12"></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Room Type</p>
                      <p className="font-size-12 m-0">classNameic Cottege</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Meal Plan</p>
                      <p className="font-size-12 m-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 d-flex gap-3 align-items-center border-bottom pb-3">
                <div>
                  <img
                    src="https://images.pexels.com/photos/5225428/pexels-photo-5225428.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                    className="preview-img-1 shadow-1 rounded"
                  />
                </div>
                <div>
                  <p className="font-weight-bold mb-3">
                    Transfer | Fragement Nature
                  </p>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Category</p>
                      <div className="d-flex gap-1 p-0">
                        <i className="fa-solid fa-star color-gold font-size-12"></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Room Type</p>
                      <p className="font-size-12 m-0">classNameic Cottege</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Meal Plan</p>
                      <p className="font-size-12 m-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 d-flex gap-3 align-items-center border-bottom pb-3">
                <div>
                  <img
                    src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                    className="preview-img-1 shadow-1 rounded"
                  />
                </div>
                <div>
                  <p className="font-weight-bold mb-3">
                    TPT | Fragement Nature
                  </p>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Category</p>
                      <div className="d-flex gap-1 p-0">
                        <i className="fa-solid fa-star color-gold font-size-12"></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Room Type</p>
                      <p className="font-size-12 m-0">classNameic Cottege</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Meal Plan</p>
                      <p className="font-size-12 m-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 d-flex gap-3 align-items-center border-bottom pb-3">
                <div>
                  <img
                    src="https://images.pexels.com/photos/164589/pexels-photo-164589.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                    className="preview-img-1 shadow-1 rounded"
                  />
                </div>
                <div>
                  <p className="font-weight-bold mb-3">
                    Flight | Fragement Nature
                  </p>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Category</p>
                      <div className="d-flex gap-1 p-0">
                        <i className="fa-solid fa-star color-gold font-size-12"></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Room Type</p>
                      <p className="font-size-12 m-0">classNameic Cottege</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Meal Plan</p>
                      <p className="font-size-12 m-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 d-flex gap-3 align-items-center border-bottom pb-3">
                <div>
                  <img
                    src="https://images.pexels.com/photos/1170184/pexels-photo-1170184.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                    className="preview-img-1 shadow-1 rounded"
                  />
                </div>
                <div>
                  <p className="font-weight-bold mb-3">
                    Train | Fragement Nature
                  </p>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Category</p>
                      <div className="d-flex gap-1 p-0">
                        <i className="fa-solid fa-star color-gold font-size-12"></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Room Type</p>
                      <p className="font-size-12 m-0">classNameic Cottege</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Meal Plan</p>
                      <p className="font-size-12 m-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 d-flex gap-3 align-items-center border-bottom pb-3">
                <div>
                  <img
                    src="https://images.pexels.com/photos/386000/pexels-photo-386000.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                    className="preview-img-1 shadow-1 rounded"
                  />
                </div>
                <div>
                  <p className="font-weight-bold mb-3">
                    Enroute | Fragement Nature
                  </p>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Category</p>
                      <div className="d-flex gap-1 p-0">
                        <i className="fa-solid fa-star color-gold font-size-12"></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Room Type</p>
                      <p className="font-size-12 m-0">classNameic Cottege</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Meal Plan</p>
                      <p className="font-size-12 m-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 d-flex gap-3 align-items-center border-bottom pb-3">
                <div>
                  <img
                    src="https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                    className="preview-img-1 shadow-1 rounded"
                  />
                </div>
                <div>
                  <p className="font-weight-bold mb-3">
                    Restaurant | Fragement Nature
                  </p>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Category</p>
                      <div className="d-flex gap-1 p-0">
                        <i className="fa-solid fa-star color-gold font-size-12"></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Room Type</p>
                      <p className="font-size-12 m-0">classNameic Cottege</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Meal Plan</p>
                      <p className="font-size-12 m-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 d-flex gap-3 align-items-center border-bottom pb-3">
                <div>
                  <img
                    src="https://images.pexels.com/photos/374916/pexels-photo-374916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image"
                    className="preview-img-1 shadow-1 rounded"
                  />
                </div>
                <div>
                  <p className="font-weight-bold mb-3">
                    Additional | Fragement Nature
                  </p>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Category</p>
                      <div className="d-flex gap-1 p-0">
                        <i className="fa-solid fa-star color-gold font-size-12"></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Room Type</p>
                      <p className="font-size-12 m-0">classNameic Cottege</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Meal Plan</p>
                      <p className="font-size-12 m-0"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-2">
              <h4 className="m-0 second-preview-heading">
                DAY 2 | 23-08-2024 Thursday | MUMBAI
              </h4>
            </div>
            <div className="col-12">
              <div className="mt-2 d-flex gap-3 align-items-center pb-3">
                <div>
                  <img
                    src="https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="image"
                    className="preview-img-1 shadow-1 rounded"
                  />
                </div>
                <div>
                  <p className="font-weight-bold mb-3">
                    Hotel | Fragement Nature Hotel
                  </p>
                  <div className="d-flex gap-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Category</p>
                      <div className="d-flex gap-1 p-0">
                        <i className="fa-solid fa-star color-gold font-size-12"></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                        <i className="fa-solid fa-star color-gold font-size-12 "></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Room Type</p>
                      <p className="font-size-12 m-0">classNameic Cottege</p>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="font-size-12 m-0">Meal Plan</p>
                      <p className="font-size-12 m-0"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END OF TOUR */}

          <div className="row bg-white px-2 pt-5 cost-preview-A4-width">
            <div className="col-12 p-0">
              <p className="m-0 text-end font-weight-bold preview-endOfTour-heading">
                END OF TOUR &nbsp; &nbsp;
                <span>
                  <i className="fa-solid fa-flag"></i>
                </span>
              </p>
              <div className="p-0 w-100 heading-bottom-border"></div>
            </div>

            <div className="col-12 p-0 mt-4">
              <h4 className="second-preview-heading M-0">HOTEL PROPESED</h4>
            </div>
            <div className="col-12 p-0 mt-2">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="p-1 text-center">Date</th>
                    <th className="p-1 text-center">City</th>
                    <th className="p-1 text-center">Hotel</th>
                    <th className="p-1 text-center">Room Type</th>
                    <th className="p-1 text-center">Remark</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-1 text-center font-size-12">
                      22 Aug 2024
                    </td>
                    <td className="p-1 text-center font-size-12">Delhi</td>
                    <td className="p-1 text-center font-size-12">
                      Hotel Fragement, Hotel Nature
                    </td>
                    <td className="p-1 text-center font-size-12">
                      classNameic Cottage
                    </td>
                    <td className="p-1 text-center font-size-12">Remarks</td>
                  </tr>
                  <tr>
                    <td className="p-1 text-center font-size-12">
                      22 Aug 2024
                    </td>
                    <td className="p-1 text-center font-size-12">Delhi</td>
                    <td className="p-1 text-center font-size-12">
                      Hotel Fragement, Hotel Nature
                    </td>
                    <td className="p-1 text-center font-size-12">
                      classNameic Cottage
                    </td>
                    <td className="p-1 text-center font-size-12">Remarks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-12 p-0 mt-2">
              <h4 className="second-preview-heading m-0">QUOTATION</h4>
            </div>
            <div className="col-12 p-0 mt-2">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="p-1 font-weight-normal" colSpan={3}>
                      Price based on selected room basis (In INR)
                    </th>
                  </tr>
                  <tr>
                    <th className="p-1 text-center">No. Of Person</th>
                    <th className="p-1 text-center">
                      Single Basis (Per Person)
                    </th>
                    <th className="p-1 text-center">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-1 text-center font-size-12">1</td>
                    <td className="p-1 text-center font-size-12">7903</td>
                    <td className="p-1 text-center font-size-12">7904</td>
                  </tr>
                  <tr>
                    <td className="p-1 text-center font-size-12">SRS</td>
                    <td className="p-1 font-size-12" colSpan={2}>
                      0.00 Single Room Supplement for Per Single Room
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 text-center font-size-12">TRR</td>
                    <td className="p-1 font-size-12" colSpan={2}>
                      Triple Rate Reduction for Per person sharing a triple room
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-12 p-0 mt-2">
              <h4 className="second-preview-heading m-0">INCLUSION</h4>
            </div>
            <div className="col-12 p-0 mt-2">
              <p className="font-size-12">
                Well appointed A/c room Accommodation in above mentioned hotels.
                A/c Vehicle for all transfer & Sightseeing at all the
                places/islands but not at disposal basis(Only Point to Point
                Service). Meals plan as mentioned above. All entry permits,
                entry tickets (Except Ross & North bay Island) included to all
                sight-seeing points, inter island ferry tickets and forest area
                permits wherever applicable. Private Cruise tickets in Green
                Ocean in Deluxe className (Base category) from Port Blair -
                Havelock Island. GST included.
              </p>
            </div>
            <div className="col-12 p-0 mt-2">
              <h4 className="second-preview-heading m-0">EXCLUSION</h4>
            </div>
            <div className="col-12 p-0 mt-2">
              <p className="font-size-12">
                Well appointed A/c room Accommodation in above mentioned hotels.
                A/c Vehicle for all transfer & Sightseeing at all the
                places/islands but not at disposal basis(Only Point to Point
                Service). Meals plan as mentioned above. All entry permits,
                entry tickets (Except Ross & North bay Island) included to all
                sight-seeing points, inter island ferry tickets and forest area
                permits wherever applicable. Private Cruise tickets in Green
                Ocean in Deluxe className (Base category) from Port Blair -
                Havelock Island. GST included.
              </p>
            </div>
            <div className="col-12 p-0 mt-2">
              <h4 className="second-preview-heading m-0">TERMS CONDITION</h4>
            </div>
            <div className="col-12 p-0 mt-2">
              <p className="font-size-12">
                Well appointed A/c room Accommodation in above mentioned hotels.
                A/c Vehicle for all transfer & Sightseeing at all the
                places/islands but not at disposal basis(Only Point to Point
                Service). Meals plan as mentioned above. All entry permits,
                entry tickets (Except Ross & North bay Island) included to all
                sight-seeing points, inter island ferry tickets and forest area
                permits wherever applicable. Private Cruise tickets in Green
                Ocean in Deluxe className (Base category) from Port Blair -
                Havelock Island. GST included.
              </p>
            </div>
            <div className="col-12 p-0 mt-2">
              <h4 className="second-preview-heading m-0">CANCELATION</h4>
            </div>
            <div className="col-12 p-0 mt-2">
              <p className="font-size-12">
                Well appointed A/c room Accommodation in above mentioned hotels.
                A/c Vehicle for all transfer & Sightseeing at all the
                places/islands but not at disposal basis(Only Point to Point
                Service). Meals plan as mentioned above. All entry permits,
                entry tickets (Except Ross & North bay Island) included to all
                sight-seeing points, inter island ferry tickets and forest area
                permits wherever applicable. Private Cruise tickets in Green
                Ocean in Deluxe className (Base category) from Port Blair -
                Havelock Island. GST included.
              </p>
            </div>
            <div className="col-12 p-0 mt-2">
              <h4 className="second-preview-heading m-0">PAYMENT POLICY</h4>
            </div>
            <div className="col-12 p-0 mt-2">
              <p className="font-size-12">
                Well appointed A/c room Accommodation in above mentioned hotels.
                A/c Vehicle for all transfer & Sightseeing at all the
                places/islands but not at disposal basis(Only Point to Point
                Service). Meals plan as mentioned above. All entry permits,
                entry tickets (Except Ross & North bay Island) included to all
                sight-seeing points, inter island ferry tickets and forest area
                permits wherever applicable. Private Cruise tickets in Green
                Ocean in Deluxe className (Base category) from Port Blair -
                Havelock Island. GST included.
              </p>
            </div>
            <div className="col-12 p-0  mt-2">
              <h4 className="second-preview-heading m-0">REMARKS</h4>
            </div>
            <div className="col-12 p-0 mt-2">
              <p className="font-size-12">
                Package can be cancelled with written mail from the person
                making the booking.
              </p>
            </div>
            <div className="col-12 p-0 mt-2">
              <h4 className="second-preview-heading m-0 ">
                CONTACT INFORMATION
              </h4>
            </div>
            <div className="col-12 p-0 mt-2 pb-4">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="p-1 text-center">Contact Name</th>
                    <th className="p-1 text-center">Country Code</th>
                    <th className="p-1 text-center">Mobile Number</th>
                    <th className="p-1 text-center">Email Id</th>
                    <th className="p-1 text-center">Available On</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-1 text-center font-size-12">
                      Vikash Dubey
                    </td>
                    <td className="p-1 text-center font-size-12">+91</td>
                    <td className="p-1 text-center font-size-12">978372632</td>
                    <td className="p-1 text-center font-size-12">
                      test@mail.com
                    </td>
                    <td className="p-1 text-center font-size-12">
                      Call and Whatapp both
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL FOR PREVIEW SETTING */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header backgroundColor-6 ">
              <h5 className="modal-title text-light" id="exampleModalLabel">
                Preview Proposals
              </h5>
              <button
                type="button"
                className="close text-light"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-2">
              <p className="font-weight-bold">
                Name: Delhi+agra+jaipur #DB24-25/002081-B
              </p>
              <div className="row">
                <div className="col-4">
                  <label htmlFor="" className="">
                    Language Type
                  </label>
                  <select name="" id="" className="form-input-6">
                    <option value="1">Hindi</option>
                    <option value="2">English</option>
                  </select>
                </div>
                <div className="col-4">
                  <label htmlFor="" className="">
                    Proposal Type
                  </label>
                  <select name="" id="" className="form-input-6">
                    <option value="1">Elite Proposal</option>
                    <option value="2">Vivid Proposal</option>
                  </select>
                </div>
                <div className="col-4 d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <label>Agent Header</label>
                  </div>
                  <label htmlFor="agentheader">
                    <div className="form-input-6 border-0 primary-light-bg d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                      <i className="fa-solid fa-cloud-arrow-up m-0 fs-5 dark-primary-color"></i>
                      <p className="m-0 dark-primary-color">Upload Here</p>
                    </div>
                  </label>
                  <input
                    type="file"
                    name="AgentHeaderImageData"
                    id="agentheader"
                    className="form-input-1"
                    value=""
                    hidden
                  ></input>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="modal-save-button">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* EXPORT DROPDOWN */}
    </>
  );
};

export default CostPreview;
