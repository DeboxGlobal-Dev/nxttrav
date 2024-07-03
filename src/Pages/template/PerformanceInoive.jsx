import React from "react";

const PerformanceInvoice = () => {
  return (
    <>
      <div className="container">
        <div className="row my-3 justify-content-center">
          <h1 className="text-center">Performance Invoice</h1>
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
          </div>
          <div className="col-8 mt-2 p-0">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Particulars</th>
                  <th scope="col">HSN/SAC</th>
                  <th scope="col">Rate</th>
                  <th scope="col">No. Of Pax</th>
                  <th scope="col">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row" className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">
                      Arvie Hotel/Delux Cabin/DBL
                    </p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">Hotel(78767)</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">5500</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">2</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">11000</p>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">
                      Arvie Hotel/Delux Cabin/DBL
                    </p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">Hotel(78767)</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">5500</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">2</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">11000</p>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">
                      Arvie Hotel/Delux Cabin/DBL
                    </p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">Hotel(78767)</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">5500</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">2</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">11000</p>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">
                      Arvie Hotel/Delux Cabin/DBL
                    </p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">Hotel(78767)</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">5500</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">2</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">11000</p>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">
                      Arvie Hotel/Delux Cabin/DBL
                    </p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">Hotel(78767)</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">5500</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">2</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">11000</p>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">
                      Arvie Hotel/Delux Cabin/DBL
                    </p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">Hotel(78767)</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">5500</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">2</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">11000</p>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="p-0 px-1" colSpan="2">
                    <p className="text-end m-0 my-1">Total</p>
                  </td>
                  <td className="p-0 px-1" colSpan="2"></td>
                  <td className="p-0 px-1">
                    <p className="m-0 my-1 text-end">40778.00</p>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="p-0 px-1" colSpan="2">
                    <p className="text-end m-0 my-1">IGST</p>
                  </td>
                  <td className="p-0 px-1" colSpan="2"></td>
                  <td className="p-0 px-1">
                    <p className="m-0 my-1 text-end">3013.00</p>
                  </td>
                </tr>
                <tr>
                  <td scope="row" className="p-0 px-1" colSpan="2">
                    <p className="text-end m-0 my-1">Total Cost in (INR)</p>
                  </td>
                  <td className="p-0 px-1" colSpan="2"></td>
                  <td className="p-0 px-1">
                    <p className="m-0 my-1 text-end">43781.00</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3">
              Kindly make payments of in favour of{" "}
              <span className="font-weight-bold">
                Debox Global IT Solution pvt ltd
              </span>
            </p>
          </div>
          <div className="col-8 p-0">
            <table class="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className="text-center">Bank Name</th>
                  <th className="text-center">Account Type</th>
                  <th className="text-center">Beneficiary Name</th>
                  <th className="text-center">Account Number</th>
                  <th className="text-center">Branch IFSC</th>
                  <th className="text-center">Branch Swift Code</th>
                  <th className="text-center">Branch Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row" className="p-0 px-1">
                    <p className="border p-2 m-0 my-1">HDFC</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1 overflow-text">Current</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1 overflow-text">
                      Debox Global
                    </p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1 overflow-text">
                      78676677575
                    </p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1 overflow-text">
                      DHFC000667
                    </p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1 overflow-text">HDISSGH</p>
                  </td>
                  <td className="p-0 px-1">
                    <p className="border p-2 m-0 my-1 overflow-text">
                      Noida Sector 62
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-8 p-0 mt-2">
            <div className="card scrolling" style={{ height: "150px" }}>
              <div className="card-body p-1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores incidunt sed ipsam officiis aliquam at fugiat
                  atque, nulla voluptatem modi accusantium unde accusamus quas
                  hic provident reprehenderit voluptates, veritatis ea ullam
                  quasi doloremque excepturi esse. Ex omnis rem soluta adipisci
                  dolorem error! Nostrum voluptatibus magni aspernatur
                  reiciendis suscipit aut ipsum voluptas culpa doloremque neque
                  similique error quos molestias, repellat vero nobis, ea
                  aliquam sunt ducimus? Architecto consequatur in aut
                  voluptatem, aliquam minima quo numquam exercitationem nobis
                  voluptates corrupti! Voluptatem dolores quia, nesciunt
                  similique odio porro dolor veniam officia et odit quis, saepe
                  voluptates ipsam tenetur in quae? Libero, aperiam error? Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
                  optio quisquam, eum rerum dolorem sed iste ab architecto
                  incidunt ratione minima aut magni quas blanditiis,
                  reprehenderit nobis! Reiciendis aspernatur consequatur,
                  eveniet debitis fuga consequuntur tempora eum impedit atque
                  eius molestias minima, sunt, vero iusto beatae velit
                  laboriosam delectus nisi itaque optio quia. Rerum unde
                  voluptas tempora! Culpa quibusdam iste ipsum quis fugit odit
                  blanditiis dolorum velit molestias ab harum adipisci officiis,
                  modi delectus perspiciatis commodi cum, placeat eum nulla
                  debitis deleniti fugiat? Praesentium a in aliquam enim
                  voluptatibus error adipisci iste eum dolorum porro, at
                  corporis ratione veritatis? Laboriosam, atque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceInvoice;
