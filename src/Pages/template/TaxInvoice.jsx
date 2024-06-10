import React from "react";

const TaxInvoice = () => {
  return (
    <>
      <div className="container">
        <div className="row my-3 justify-content-center">
          <h1 className="text-center">Tax Invoice</h1>
          <div className="col-8 border">
            <div className="row border-bottom">
              <div className="col-4 border-right d-flex justify-content-center align-items-center">
                <img
                  src="\public\assets\icons\general_master\debox.png"
                  alt="logo"
                  style={{ height: "100px", width: "200px" }}
                />
              </div>
              <div className="col-8">
                <p className="font-weight-bold m-0">Debox Global</p>
                <p className="m-0">
                  <span className="font-weight-bold">Address</span> : New Delhi
                  Chhatarpur
                </p>
                <p className="m-0">
                  <span className="font-weight-bold">Contact</span> : 880976542
                </p>
                <div className="d-flex gap-3">
                  <p className="m-0">
                    <span className="font-weight-bold">Email</span> :
                    debox@global.com
                  </p>
                  <p className="m-0">
                    <span className="font-weight-bold">Website</span> :
                    www.deboxglobal.com
                  </p>
                </div>
                <p className="m-0">
                  <span className="font-weight-bold">GSTIN/UIN</span>:-{" "}
                  <span>PAN</span>:DB87678997
                </p>
                <p className="m-0">
                  <span className="font-weight-bold">CIN:-</span>BDi87888676767
                </p>
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col-6 py-2 border-right">
                <p className="m-0 font-weight-bold">Bill To: PVT LTD</p>
                <p className="m-0">
                  <span className="font-weight-bold">Address</span> : New Delhi
                  Sarojni Nagar
                </p>
                <p className="m-0">
                  <span className="font-weight-bold">Phone</span> : 880976542
                </p>
                <p className="m-0">
                  <span className="font-weight-bold">Email</span> :
                  debox@global.com
                </p>
                <p className="m-0">
                  <span className="font-weight-bold">GSTIN/UIN</span> : JHF JDHF
                  JH4
                </p>
                <p className="m-0">
                  <span className="font-weight-bold">PAN</span>:- :DB87678997
                </p>
                <p className="m-0">
                  <span className="font-weight-bold">State/Country Name</span>
                  Uttrakhand /India
                </p>
              </div>
              <div className="col-6">
                <div className="row border-bottom align-items-center">
                  <div className="col-6 border-right p-0 pl-1">
                    <p>
                      Invoice No :{" "}
                      <span className="font-weight-bold">TI/24-25/0008</span>
                    </p>
                  </div>
                  <div className="col-6 p-0 pl-1">
                    <p>
                      Date :{" "}
                      <span className="font-weight-bold">30 May 2024</span>
                    </p>
                  </div>
                </div>
                <div className="row border-bottom align-items-center">
                  <div className="col-6 border-right p-0 pl-1">
                    <p>
                      Reference No : <span className="font-weight-bold"></span>
                    </p>
                  </div>
                  <div className="col-6 p-0 pl-1">
                    <p>
                      Due Date :{" "}
                      <span className="font-weight-bold">10 June 2024</span>
                    </p>
                  </div>
                </div>
                <div className="row border-bottom align-items-center">
                  <div className="col-6 border-right p-0 pl-1">
                    <p>
                      Tour Id : <span className="font-weight-bold"></span>
                    </p>
                  </div>
                  <div className="col-6 p-0 pl-1">
                    <p>
                      Currency : <span className="font-weight-bold">INR</span>
                    </p>
                  </div>
                </div>
                <div className="row border-bottom align-items-center">
                  <div className="col-6 border-right p-0 pl-1">
                    <p>
                      Guest Name :{" "}
                      <span className="font-weight-bold">Rakesh</span>
                    </p>
                  </div>
                  <div className="col-6 p-0 pl-1">
                    <p>
                      Total Pax : <span className="font-weight-bold">1</span>
                    </p>
                  </div>
                </div>
                <div className="row border-bottom">
                  <div className="col-12 p-0 pl-1">
                    <p>File No :</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 p-0 pl-1 py-2">
                    Place Of Delivery :
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-center">SN</th>
                    <th className="text-center">Particulars</th>
                    <th className="text-center">HSN/SAC</th>
                    <th className="text-center">GST RATE</th>
                    <th className="text-center">Amount (In INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td colspan="5" className="font-weight-bold text-center">
                      Total :
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5" className="font-weight-bold">
                      Amount Chargable in INR : Only
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th colSpan="2" className="text-center">
                      HSN/SAC
                    </th>
                    <th rowSpan="2">Taxable Value</th>
                    <th>Integrated Tax</th>
                    <th>TCS</th>
                    <th>Total Tax Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan="2">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th colSpan="2">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th colSpan="5">Total Tax Amount In Words :(In)-INR : </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="m-0 mt-3 text-center">
            Kindly make payments of in favour of{" "}
            <span className="font-weight-bold">DeboxGlobal</span>
          </p>
          <div className="col-8 border p-0">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Bank Name</th>
                  <th>Beneficiary Name</th>
                  <th>Account Number</th>
                  <th>Account Type</th>
                  <th>Branch Address</th>
                  <th>Branch IFSC</th>
                  <th>Branch Swift Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxInvoice;
