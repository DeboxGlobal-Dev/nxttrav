import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const TaxInvoice = () => {
  const generatePDF = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);

      //both pdfWidth & pdfHeight are dynamic height and width of pdf. It can be helpfull for dynamic size of width
      // const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", -30, 40, 270, 200);
      pdf.save("TaxInvoice.pdf");
    });
  };

  return (
    <>
      <div className="container" id="pdf-content">
        <div className="row justify-content-center">
          <div className="col-8 border pb-3">
            <div className="row border-bottom yellow-bg py-3">
              <div className="col-5 d-flex justify-content-center align-items-center">
                <img
                  src="\public\assets\icons\general_master\debox.png"
                  alt="logo"
                  style={{ height: "80px", width: "150px" }}
                />
              </div>
              <div className="col-7 d-flex flex-column gap-1">
                <p className="font-weight-bold m-0">
                  DEBOX GLOBAL IT SOLUTION PRIVATE LIMITED
                </p>
                <p className="m-0 mt-1">
                  <span className="font-weight-bold yellow-text">
                    Address &nbsp; &nbsp;
                  </span>
                  : &nbsp; New Delhi Chhatarpur
                </p>
                <div className="d-flex gap-3">
                  <p className="m-0">
                    <span className="font-weight-bold yellow-text">
                      Contact &nbsp; &nbsp;
                    </span>
                    : &nbsp;880976542
                  </p>
                  <p className="m-0">
                    <span className="font-weight-bold yellow-text">
                      Email &nbsp; &nbsp;
                    </span>
                    : &nbsp; debox@global.com
                  </p>
                </div>
                <p className="m-0">
                  <span className="font-weight-bold yellow-text">
                    Website &nbsp; &nbsp;
                  </span>
                  : &nbsp; www.deboxglobal.com
                </p>

                <div className="d-flex gap-3">
                  <p className="m-0">
                    <span className="font-weight-bold yellow-text">
                      GSTIN/UIN&nbsp; &nbsp;
                    </span>{" "}
                    :<span>&nbsp; DB87678997D7DS</span>
                  </p>
                  <p className="m-0">
                    <span className="font-weight-bold yellow-text">
                      CIN &nbsp; &nbsp;{" "}
                    </span>{" "}
                    :<span>&nbsp; BDi87888676767</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col-5 py-2 border-right d-flex flex-column gap-2">
                <p className="m-0">
                  <span className=" font-weight-bold">
                    Bill To &nbsp; &nbsp; &nbsp;
                  </span>
                  : &nbsp; PVT LTD
                </p>
                <p className="m-0">
                  <span className="font-weight-bold">Address&nbsp;</span>{" "}
                  :&nbsp; New Delhi Sarojni Nagar
                </p>
                <p className="m-0">
                  <span className="font-weight-bold">Phone &nbsp; &nbsp;</span>{" "}
                  :&nbsp; 880976542
                </p>
                <p className="m-0">
                  <span className="font-weight-bold">
                    Email&nbsp; &nbsp; &nbsp;
                  </span>{" "}
                  :&nbsp; debox@global.com
                </p>
                <div className="d-flex gap-2">
                  <p className="m-0">
                    <span className="font-weight-bold">GSTIN/UIN</span> :&nbsp;
                    JHFJDHFJH4
                  </p>

                  <p className="m-0">
                    <span className="font-weight-bold">PAN&nbsp; &nbsp;</span>
                    :&nbsp; DB87678997
                  </p>
                </div>
                <p className="m-0">
                  <span className="font-weight-bold">
                    State/Country Name &nbsp; &nbsp;
                  </span>
                  :<span>&nbsp; &nbsp; Uttrakhand /India</span>
                </p>
              </div>
              <div className="col-7">
                <div className="row border-bottom align-items-center">
                  <div className="col-6 p-0 pl-1 py-1">
                    <p className="m-0">
                      Invoice No &nbsp; &nbsp;:
                      <span>&nbsp; &nbsp;TI/24-25/0008</span>
                    </p>
                  </div>
                  <div className="col-6 p-0 pl-1 py-1">
                    <p className="m-0">
                      <span>Date &nbsp; </span> :
                      <span>&nbsp; &nbsp; 30 May 2024</span>
                    </p>
                  </div>
                </div>
                <div className="row border-bottom align-items-center">
                  <div className="col-6 p-0 pl-1 py-1">
                    <p className="m-0">
                      <span>Reference No &nbsp;</span> :{" "}
                      <span> &nbsp; ADA7S6ASSS777D</span>
                    </p>
                  </div>
                  <div className="col-6 p-0 pl-1 py-1">
                    <p className="m-0">
                      Due Date &nbsp; :<span> &nbsp; 10 June 2024</span>
                    </p>
                  </div>
                </div>
                <div className="row border-bottom align-items-center">
                  <div className="col-6 p-0 pl-1 py-1">
                    <p className="m-0">
                      Tour Id &nbsp; : <span> &nbsp; JHJDS8888</span>
                    </p>
                  </div>
                  <div className="col-6 p-0 pl-1 py-1">
                    <p className="m-0">
                      Query Id &nbsp; : <span>&nbsp; 878DS</span>
                    </p>
                  </div>
                </div>
                <div className="row border-bottom align-items-center">
                  <div className="col-6 p-0 pl-1 py-1">
                    <p className="m-0">
                      <span> Currency &nbsp;</span> :
                      <span className="font-weight-bold">&nbsp; INR</span>
                    </p>
                  </div>
                  <div className="col-6 p-0 pl-1 py-1">
                    <p className="m-0">
                      Guest/ClientName &nbsp; :{" "}
                      <span className="px-2 border">&nbsp;Rizwan </span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 p-0 pl-1 py-2">
                    <p>
                      <span>Place Of Delivery &nbsp; :</span>
                      <span>
                        &nbsp; &nbsp;
                        <select name="" id="" className="px-3 border">
                          <option value="">Haryana</option>
                        </select>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th className="text-center py-0">SN</th>
                    <th className="text-center py-0">Particulars</th>
                    <th className="text-center py-0">HSN/SAC</th>
                    <th className="text-center py-0">Amount</th>
                    <th className="text-center py-0">TCS (%)</th>
                    <th className="text-center py-0">Tax (%)</th>
                    <th className="text-center py-0">Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center py-3">1</td>
                    <td className="text-center py-3">
                      <p className="py-3 px-5 border"></p>
                    </td>
                    <td className="text-center py-3">
                      <p className="border px-3">Guide(788787)</p>
                    </td>
                    <td className="text-center py-3">
                      <p className="px-1 border">87887</p>
                    </td>
                    <td className="text-center py-3">
                      <p className="px-1 border">0</p>
                    </td>
                    <td className="text-center py-3">
                      <p className="px-1 border">0</p>
                    </td>
                    <td className="text-center py-3">
                      <p className="px-1 border">999</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="7" className="py-1 text-center">
                      <div className="d-flex justify-content-end">
                        <div className="d-flex gap-5">
                          <p className="m-0">IGST(%)</p>
                          <p className="px-2 border m-0">0.00</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="7" className="py-1">
                      <div className="d-flex justify-content-end">
                        <div className="d-flex gap-5">
                          <p className="m-0">Total Cost In(INR)</p>
                          <p className="px-2 border m-0">0.00</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row mt-2">
              <table className="table custom-table-invoice">
                <thead>
                  <tr>
                    <th className="text-center  font-size-11">Currency Type</th>
                    <th className=" font-size-11 ">Bank Name</th>
                    <th className=" font-size-11 ">Account Number</th>
                    <th className=" font-size-11 ">Account Type</th>
                    <th className=" font-size-11 ">Benificiary Name</th>
                    <th className=" font-size-11 ">Branch Address</th>
                    <th className=" font-size-11 ">Branch IFSC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select
                        name=""
                        id=""
                        className="border w-75 custom-select-input font-size-11 padding-x-5"
                      >
                        <option value="">All</option>
                      </select>
                    </td>
                    <td>
                      <select
                        name=""
                        id=""
                        className="border text-truncate custom-select-input font-size-11 padding-x-5"
                      >
                        <option value="">Punjab National</option>
                      </select>
                    </td>
                    <td>
                      <p className="border font-size-11 m-0 padding-x-4">
                        897897778
                      </p>
                    </td>
                    <td>
                      <select
                        name=""
                        id=""
                        className="border text-truncate custom-select-input font-size-11 padding-x-5"
                      >
                        <option value="">Select Account Type</option>
                      </select>
                    </td>
                    <td>
                      <p className="border font-size-11 m-0 padding-x-4">
                        Nishank
                      </p>
                    </td>
                    <td>
                      <p className="border font-size-11 m-0 padding-x-4">
                        Ashonk Nagar
                      </p>
                    </td>
                    <td>
                      <p className="border font-size-11 m-0 padding-x-4">
                        Noida
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select
                        name=""
                        id=""
                        className="border w-75 custom-select-input font-size-11 padding-x-5"
                      >
                        <option value="">All</option>
                      </select>
                    </td>
                    <td>
                      <select
                        name=""
                        id=""
                        className="border text-truncate custom-select-input font-size-11 padding-x-5"
                      >
                        <option value="">Punjab National</option>
                      </select>
                    </td>
                    <td>
                      <p className="border font-size-11 m-0 padding-x-4">
                        897897778
                      </p>
                    </td>
                    <td>
                      <select
                        name=""
                        id=""
                        className="border text-truncate custom-select-input font-size-11 padding-x-5"
                      >
                        <option value="">Select Account Type</option>
                      </select>
                    </td>
                    <td>
                      <p className="border font-size-11 m-0 padding-x-4">
                        Nishank
                      </p>
                    </td>
                    <td>
                      <p className="border font-size-11 m-0 padding-x-4">
                        Ashonk Nagar
                      </p>
                    </td>
                    <td>
                      <p className="border font-size-11 m-0 padding-x-4">
                        Noida
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <div className="d-flex flex-column">
                  <label
                    htmlFor="termscondition"
                    className="font-weight-bold m-0 text-secondary"
                  >
                    Terms & Conditions
                  </label>
                  <input
                    type="text"
                    id="termscondition"
                    className="custom-gray-border rounded height-75"
                  />
                </div>
                <div className="d-flex flex-column mt-1">
                  <label
                    htmlFor="termscondition"
                    className="font-weight-bold m-0 text-secondary"
                  >
                    Payment
                  </label>
                  <input
                    type="text"
                    id="termscondition"
                    className="custom-gray-border rounded"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2 justify-content-end">
              <div className="col-1">
                <button className="ml-auto border px-2 font-size-12 bg-blue rounded-pill">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-8 p-0">
            <button
              onClick={generatePDF}
              className="border-0 outline-0 rounded text-light fs-6 btn btn-success"
              style={{ height: "40px", width: "150px" }}
            >
              Genereate PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxInvoice;
