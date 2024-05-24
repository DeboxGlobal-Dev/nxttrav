import React from "react";

const SupplierPayment = () => {
    
  return (
    <>
      <div className="container">
        <div
          className="row border-bottom"
          style={{ backgroundColor: "#D3D3D3" }}
        >
          <div className="col font-weight-bold">Supplier Name</div>
          <div className="col font-weight-bold">Payment Name</div>
          <div className="col font-weight-bold">Amount</div>
          <div className="col font-weight-bold">Attachment</div>
          <div className="col font-weight-bold">Payment By</div>
          <div className="col font-weight-bold">Remarks</div>
          <div className="col font-weight-bold">Added By</div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col">Affrica Avenue</div>
          <div className="col">Advanced</div>
          <div className="col">Amount</div>
          <div className="col">1900</div>
          <div className="col">Yes</div>
          <div className="col">Nishank Shukla</div>
          <div className="col">Administrator CRM</div>
        </div>
        <div className="row justify-content-between py-2">
          <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
            <p className="m-0 text-yellow-1">876567</p>
            <p className="m-0 text-secondary font-size-11">PURCHASE</p>
          </div>
          <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
            <p className="m-0 text-success">876567</p>
            <p className="m-0 text-secondary font-size-11">PAID AMT</p>
          </div>
          <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
            <p className="m-0 text-danger">876567</p>
            <p className="m-0 text-secondary font-size-11">PENDING AMT.</p>
          </div>
          <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
            <p className="m-0 text-primary">0</p>
            <p className="m-0 text-secondary font-size-11">SELL AMT</p>
          </div>
          <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
            <p className="m-0 text-primary">0</p>
            <p className="m-0 text-secondary font-size-11">TCS AMT</p>
          </div>
          <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
            <p className="m-0 text-primary">0</p>
            <p className="m-0 text-secondary font-size-11">COMMISSION</p>
          </div>
          <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
            <p className="m-0 text-primary">0</p>
            <p className="m-0 text-secondary font-size-11">DISCOUNT</p>
          </div>
          <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
            <p className="m-0 text-primary">0</p>
            <p className="m-0 text-secondary font-size-11">EXPENSE</p>
          </div>
          <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
            <p className="m-0 text-primary">55656</p>
            <p className="m-0 text-secondary font-size-11">NET MARGIN</p>
          </div>
          <div className="col-1 bg-primary box-shadow-1 d-flex justify-content-center align-items-center rounded">
            <p className="m-0 text-light font-size-10">SUPPLIER COSTSHEET</p>
          </div>
        </div>
        <div className="row bg-color-2 align-items-center">
          <div className="col-6 text-dark font-weight-bold">
            SUPPLIER-AFRICA AVENUE
          </div>
          <div className="col-6">
            <div className="row py-2 align-items-center gap-2 pr-1">
              <div className="col-3 font-size-12 bg-primary d-flex justify-content-center rounded">
                + Upload Document
              </div>
              <div className="col-3 font-size-12 bg-success justify-content-center rounded">
                Payment Information
              </div>

              <div className="col bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-yellow-1">876567</p>
                <p className="m-0 text-secondary font-size-11">PURCHASE</p>
              </div>
              <div className="col bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-yellow-1">876567</p>
                <p className="m-0 text-secondary font-size-11">PURCHASE</p>
              </div>
              <div className="col bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-yellow-1">876567</p>
                <p className="m-0 text-secondary font-size-11">PURCHASE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <h6 className="font-weight-bold">Guest: Africa Avenue</h6>
          <div className="col-2 border d-flex justify-content-center align-items-center font-weight-bold">
            Guest
          </div>
          <div className="col-10">
            <div className="row border py-1">
              <div className="col text-center font-weight-bold">Check In</div>
              <div className="col text-center font-weight-bold">Room Type</div>
              <div className="col text-center font-weight-bold">Meal Plan</div>
              <div className="col text-center font-weight-bold">
                Double Cost
              </div>
              <div className="col text-center font-weight-bold">
                Total Cost To Company
              </div>
            </div>
            <div className="row border py-1">
              <div className="col text-center ">01-02-2024</div>
              <div className="col text-center ">Classic Room</div>
              <div className="col text-center ">CP</div>
              <div className="col text-center ">9500.00 x 1</div>
              <div className="col text-center ">9500.00 x 1</div>
            </div>
            <div className="row border py-1">
              <div className="col text-center ">02-05-2024</div>
              <div className="col text-center ">Classic Room</div>
              <div className="col text-center ">CP</div>
              <div className="col text-center ">9500.00 x 1</div>
              <div className="col text-center ">9500.00 x 1</div>
            </div>
          </div>
        </div>
        <div className="row bg-color-2 align-items-center">
          <div className="col-6 text-dark font-weight-bold">
            SUPPLIER - Mohammad Rizwan
          </div>
          <div className="col-6">
            <div className="row py-2 align-items-center gap-2 pr-1">
              <div className="col-3 font-size-12 bg-primary d-flex justify-content-center rounded">
                + Upload Document
              </div>
              <div className="col-3 font-size-12 bg-success justify-content-center rounded">
                Payment Information
              </div>

              <div className="col bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-yellow-1">876567</p>
                <p className="m-0 text-secondary font-size-11">PURCHASE</p>
              </div>
              <div className="col bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-yellow-1">876567</p>
                <p className="m-0 text-secondary font-size-11">PURCHASE</p>
              </div>
              <div className="col bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-yellow-1">876567</p>
                <p className="m-0 text-secondary font-size-11">PURCHASE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-1">
          <div className="col-12  border-bottom pb-1">
            <div className="row align-items-center">
              <div className="col-1">
                <img
                  src="\public\global_assets\images\qoutation\transportation.png"
                  style={{ height: "30px", width: "30px" }}
                  alt=""
                />
              </div>
              <div className="col font-weight-bold">
                Transport - Airpot to Hotel - 26 Apr, 2024
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row py-1">
                <div className="col-1"></div>
              <div className="col-3 font-weight-bold">Vehicle Name</div>
              <div className="col-3 text-center font-weight-bold">Service Cost</div>
              <div className="col-3 text-center font-weight-bold">Total Cost</div>
              <div className="col-2 text-center font-weight-bold">Cost of  Company</div>
            </div>
            <div className="row py-1">
                <div className="col-1"></div>
              <div className="col-3">Vehicle Name for<br/> 1 Vehicle</div>
              <div className="col-3 text-center">Advanced</div>
              <div className="col-3 text-center">Advanced</div>
              <div className="col-2 text-center">0</div>
            </div>
          </div>
        </div>
        <div className="row my-1">
          <div className="col-12  border-bottom pb-1">
            <div className="row align-items-center">
              <div className="col-1">
                <img
                  src="\public\global_assets\images\qoutation\morning.png"
                  style={{ height: "30px", width: "30px" }}
                  alt=""
                />
              </div>
              <div className="col font-weight-bold">
                Entrance - Itmd-Ud-Daula / Baby Taj - 26 Apr, 2024
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row py-1">
                <div className="col-1"></div>
              <div className="col-3 font-weight-bold">Adult Ticket Cost</div>
              <div className="col-3 text-center font-weight-bold">Child Ticket Cost</div>
              <div className="col-3 text-center font-weight-bold">Total Service Cost</div>
              <div className="col-2 text-center font-weight-bold">Cost of  Company</div>
            </div>
            <div className="row py-1">
                <div className="col-1"></div>
              <div className="col-3">100 * 0</div>
              <div className="col-3 text-center">500 * 0</div>
              <div className="col-3 text-center">0</div>
              <div className="col-2 text-center">0</div>
            </div>
          </div>
        </div>
        <div className="row my-1">
          <div className="col-12  border-bottom pb-1">
            <div className="row align-items-center">
              <div className="col-1">
                <img
                  src="\public\global_assets\images\qoutation\monument.png"
                  style={{ height: "30px", width: "30px" }}
                  alt=""
                />
              </div>
              <div className="col font-weight-bold">
                Entrance - Taj Mahal - 26 Apr, 2024
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row py-1">
                <div className="col-1"></div>
              <div className="col-3 font-weight-bold">Adult Ticket Cost</div>
              <div className="col-3 text-center font-weight-bold">Child Ticket Cost</div>
              <div className="col-3 text-center font-weight-bold">Total Service Cost</div>
              <div className="col-2 text-center font-weight-bold">Cost of  Company</div>
            </div>
            <div className="row py-1">
                <div className="col-1"></div>
              <div className="col-3">100 * 0</div>
              <div className="col-3 text-center">500 * 0</div>
              <div className="col-3 text-center">0</div>
              <div className="col-2 text-center">0</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupplierPayment;
