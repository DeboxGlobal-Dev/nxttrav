import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Quotation = () =>{
    return(
        <>
        <div className="container-fluid mt-3 mb-5">
        <div className="row">
        <div className="card-body navbar-green">
          <div className="media">
            <div className="col-xl-6" style={{ padding: 0 }}>
              <h6 className="media-title font-weight-semibold">
                <span style={{ color: "gray", fontSize: "12px" }}>
                  Subject:
                </span>{" "}
                <span className="badge bg-warning-400 ml-auto">Pending</span>{" "}
                <br />{" "}
                <span style={{ color: "#16b90e" }}>
                  02-11-2023 DeBox Global Pvt. Ltd.
                </span>
              </h6>
            </div>
            <div
              className="col-xl-6"
              style={{ textAlign: "right", padding: "0px" }}
            >
              <div
                className="d-flex align-items-center"
                style={{ float: "right" }}
              >
                <Button
                  variant="contained"
                  size="small"
                  style={{ background: "#16b90e" }}
                >
                  + Add Quotation
                </Button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

        </>
    )
};

export default Quotation;