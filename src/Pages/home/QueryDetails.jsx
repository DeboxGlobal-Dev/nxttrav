import React from "react";

const QueryDetails = () => {
  return (
    <>
      <div className="row gap-1">
        <div className="width-30-percent border height-115 p-0 position-relative d-flex flex-column justify-content-end dashboard-chart-bg-1">
          <p className="text-center fs-1 m-0">0</p>
          <p className="text-center no-wrap m-0 font-size-11 font-weight-bold mb-3">
            Today's Query
          </p>
          <div className="position-absolute top-0 right-0 dashboard-icon-bg rounded-pill h-w-40 d-flex justify-content-center align-items-center m-1">
            <span className="">
              <i className="fa-solid fa-snowflake fs-6 text-ligth"></i>
            </span>
          </div>
        </div>
        <div className="width-30-percent border height-115 p-0 position-relative d-flex flex-column justify-content-end dashboard-chart-bg-2">
          <p className="text-center fs-1 m-0 ">0</p>
          <p className="text-center no-wrap m-0 font-size-11 font-weight-bold mb-3">
            Yesterday's Query
          </p>
          <div className="position-absolute top-0 right-0 p-2 dashboard-icon-bg rounded-pill h-w-40 d-flex justify-content-center align-items-center m-1">
            <i className="fa-brands fa-codepen fs-6 text-light"></i>
          </div>
        </div>
        <div className="width-30-percent border height-115 p-0 position-relative d-flex flex-column justify-content-end dashboard-chart-bg-3">
          <p className="text-center fs-1 m-0 ">0</p>
          <p className="text-center no-wrap m-0 font-size-11 font-weight-bold mb-3">
            September's Query
          </p>
          <div className="position-absolute top-0 right-0 p-2 dashboard-icon-bg rounded-pill h-w-40 d-flex justify-content-center align-items-center m-1">
            <i className="fa-regular fa-calendar-days fs-6 text-light"></i>
          </div>
        </div>
      </div>
      <div className="row gap-1">
        <div className="width-30-percent border height-115 p-0 position-relative d-flex flex-column justify-content-end dashboard-chart-bg-4">
          <p className="text-center fs-1 m-0">0</p>
          <p className="text-center no-wrap m-0 font-size-11 font-weight-bold mb-3">
            Total Confirmed Query
          </p>
          <div className="position-absolute top-0 right-0 p-2 dashboard-icon-bg rounded-pill h-w-40 d-flex justify-content-center align-items-center m-1">
            <i className="fa-regular fa-thumbs-up fs-6 text-light"></i>
          </div>
        </div>
        <div className="width-30-percent border height-115 p-0 position-relative d-flex flex-column justify-content-end dashboard-chart-bg-5">
          <p className="text-center fs-1 m-0 ">0</p>
          <p className="text-center no-wrap m-0 font-size-11 font-weight-bold mb-3">
            Total Pax Travelling
          </p>
          <div className="position-absolute top-0 right-0 p-2 dashboard-icon-bg rounded-pill h-w-40 d-flex justify-content-center align-items-center m-1">
            <i className="fa-solid fa-users fs-6 text-light"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryDetails;
