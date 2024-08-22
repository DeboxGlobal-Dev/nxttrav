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
          <div className="col-8 border">
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
                    <span className="font-weight-bold yellow-text">GSTIN/UIN&nbsp; &nbsp;</span> :
                    <span>&nbsp; DB87678997D7DS</span>
                  </p>
                  <p className="m-0">
                    <span className="font-weight-bold yellow-text">CIN &nbsp; &nbsp; </span> :
                    <span>&nbsp; BDi87888676767</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col-5 py-2 border-right d-flex flex-column gap-2">
                <p className="m-0"><span className=" font-weight-bold">Bill To &nbsp; &nbsp; &nbsp;</span>: &nbsp; PVT LTD</p>
                <p className="m-0">
                  <span className="font-weight-bold">Address&nbsp;</span> :&nbsp; New Delhi
                  Sarojni Nagar
                </p>
                <p className="m-0">
                  <span className="font-weight-bold">Phone &nbsp; &nbsp;</span> :&nbsp; 880976542
                </p>
                <p className="m-0">
                  <span className="font-weight-bold">Email&nbsp; &nbsp; &nbsp;</span> :&nbsp;
                  debox@global.com
                </p>
                <div className="d-flex gap-2">
                <p className="m-0">
                  <span className="font-weight-bold">GSTIN/UIN</span> :&nbsp; JHF JDHF
                  JH4
                </p>

                <p className="m-0">
                  <span className="font-weight-bold">PAN&nbsp; &nbsp;</span>:&nbsp; DB87678997
                </p>
                </div>
                <p className="m-0">
                  <span className="font-weight-bold">State/Country Name</span>
                  Uttrakhand /India
                </p>
              </div>
              <div className="col-7">
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
              <table className="table table-bordered">
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
                    <td colSpan="5" className="font-weight-bold text-center">
                      Total :
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="5" className="font-weight-bold">
                      Amount Chargable in INR : Only
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row">
              <table className="table table-bordered">
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
            <table className="table table-bordered">
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
      <div className="container mb-3">
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
