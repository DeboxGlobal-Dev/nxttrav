import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Quotation = () => {
  return (
    <>
      <div className="container-fluid mt-3 mb-5">
        <div className="row">
          <div className="col-2 bg-dark">
              <div className="row">
                <div className="col-12">
                  <p className="m-0">3 APRIL 2024  <i className="fa-solid fa-clock"></i> 12:06 PM</p>
                  <h2 className="m-0">DB24-25/000015</h2>
                  <h6 className="m-0">TourId - 24/04/0003/001</h6>
                </div>
                <div className="col-12 bg-light text-dark py-2">
                  <div className="d-flex">
                    <div className="d-flex justify-content-center align-items-center bg-dark rounded-circle">
                        <i className="fa-solid fa-user text-light fs-5 px-2 rounded-circle"></i>
                    </div>
                    <div className="pl-2">
                      <p className="m-0">Shubham Tivari</p>
                      <p className="m-0">9876543445</p>
                    </div>
                  </div>
                  <div className="mt-1 p-1 border">
                    <div >Market Type : General</div>
                    <div>Query Type : FIT</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex justify-content-between">
                    <span>From</span>
                    <span><i className="fa-solid fa-arrow-right-long"></i></span>
                    <span>To</span>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-10 bg-light">
              this is ten column
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotation;
