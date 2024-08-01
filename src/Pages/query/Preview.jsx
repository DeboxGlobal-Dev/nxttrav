import React from "react";

const Preview = () => {
  return (
    <>
      <div className="container-fluid mt-2 p-0">
        <div className="row border-bottom m-0">
          <div className="col-4">
            <h1>Preview</h1>
          </div>
          <div className="col-8 d-flex justify-content-end">
            <div className="d-flex gap-3 justify-content-center align-items-center">
              <div className="py-1 px-2 red-bg text-white rounded">
                <i className="fa-regular fa-circle-xmark pr-1"></i> Cancel Query
              </div>
              <div className="py-1 px-2 gray-bg text-white rounded">
                <i className="fa-solid fa-clock-rotate-left pr-1"></i> Query
                History
              </div>
              <div className="py-1 px-2 pink-bg text-white rounded">
                <i className="fa-solid fa-ban pr-1"></i> Query Lost
              </div>
              <button className="orange-button m-0 slim-button">Edit</button>
              <button className="green-button m-0 slim-button">Save</button>
              <button className="gray-button rounded-pill px-3 m-0 slim-button">
                Back
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-2 justify-content-between border-bottom m-0">
          <div className="col-2">
            <span className="font-size-12">Business Type</span>
            <h6 className="font-weight-bold">Agent</h6>
          </div>
          <div className="col-2">
            <span className="font-size-12">Agent/Client Name</span>
            <h6 className="font-weight-bold">22/04/2024</h6>
          </div>
          <div className="col-2">
            <span className="font-size-12">Contact Person</span>
            <h6 className="font-weight-bold">Rahul Kumar</h6>
          </div>
          <div className="col-2">
            <span className="font-size-12">Contact Number</span>
            <h6 className="font-weight-bold">+918767652176</h6>
          </div>
          <div className="col-2 d-flex justify-content-end">
            <div>
              <span className="font-size-12">Email Id</span>
              <h6 className="font-weight-bold">debox@global.com</h6>
            </div>
          </div>
        </div>

        <div className="row mt-2 border-bottom m-0">
          <div className="col-4 d-flex gap-5">
            <div>
              <span className="font-size-12">Travel Type</span>
              <h6 className="font-weight-bold">Day Wise</h6>
            </div>
            <div>
              <span className="font-size-12">From Date</span>
              <h6 className="font-weight-bold">22/05/2024</h6>
            </div>
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <span className="font-size-12">Destination</span>
            <h6 className="font-weight-bold">
              2N Agra | 1N Ahmedabad | 1N Delhi | 1N Delhi
            </h6>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <div>
              <span className="font-size-12">Total Nights</span>
              <h6 className="font-weight-bold">05</h6>
            </div>
          </div>
        </div>

        <div className="row border-bottom m-0">
          <div className="col-5 border-right my-2">
            <div className="row">
              <div className="col-3">
                <span className="font-size-12">Adult</span>
                <h6 className="font-weight-bold">05</h6>
              </div>
              <div className="col-3">
                <span className="font-size-12">Adult</span>
                <h6 className="font-weight-bold">05</h6>
              </div>
              <div className="col-3">
                <span className="font-size-12">Adult</span>
                <h6 className="font-weight-bold">05</h6>
              </div>
              <div className="col-3">
                <span className="font-size-12">Adult</span>
                <h6 className="font-weight-bold">05</h6>
              </div>
            </div>
          </div>
          <div className="col-7 my-2">
            <div className="row">
              <div className="col-2 d-flex justify-content-end">
                <div>
                  <span className="font-size-12">SGL</span>
                  <h6 className="font-weight-bold">01</h6>
                </div>
              </div>
              <div className="col-2 d-flex justify-content-end">
                <div>
                  <span className="font-size-12">DBL</span>
                  <h6 className="font-weight-bold">01</h6>
                </div>
              </div>
              <div className="col-2 d-flex justify-content-end">
                <div>
                  <span className="font-size-12">TWIN</span>
                  <h6 className="font-weight-bold">00</h6>
                </div>
              </div>
              <div className="col-2 d-flex justify-content-end">
                <div>
                  <span className="font-size-12">TPL</span>
                  <h6 className="font-weight-bold">00</h6>
                </div>
              </div>
              <div className="col-2 d-flex justify-content-end">
                <div>
                  <span className="font-size-12">Extra Bed</span>
                  <h6 className="font-weight-bold">00</h6>
                </div>
              </div>
              <div className="col-2 d-flex justify-content-end">
                <div>
                  <span className="font-size-12">Total</span>
                  <h6 className="font-weight-bold">02</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row column-gap-2 mt-2 m-0">
          <div className="col p-0">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">S.N</th>
                  <th scope="col">DATE</th>
                  <th scope="col">DESTINATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>22/03/2024</td>
                  <td>Agra</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>24/04/2024</td>
                  <td>Delhi</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>24/05/2024</td>
                  <td>Rajsthan</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col border rounded d-flex flex-column justify-content-around">
            <div className="row">
              <div className="col-4">
                <span className="font-size-12">Query Type</span>
                <p className="font-weight-bold">Fixed Departure</p>
              </div>
              <div className="col-4">
                <span className="font-size-12">Travel Type</span>
                <p className="font-weight-bold">Inbound</p>
              </div>
              <div className="col-4">
                <span className="font-size-12">Pax Type</span>
                <p className="font-weight-bold">FIT</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <span className="font-size-12">Priority</span>
                <p className="font-weight-bold">Normal</p>
              </div>
              <div className="col-3">
                <span className="font-size-12">TAT</span>
                <p className="font-weight-bold">48</p>
              </div>
              <div className="col-3">
                <span className="font-size-12">Meal Plan</span>
                <p className="font-weight-bold">MAP</p>
              </div>
              <div className="col-3">
                <span className="font-size-12">Budget</span>
                <p className="font-weight-bold">----</p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <span className="font-size-12">Sales Person</span>
                <p className="font-weight-bold">Shivam Kumar</p>
              </div>
              <div className="col-4">
                <span className="font-size-12">Contracting Person</span>
                <p className="font-weight-bold">Bhanu Kumar</p>
              </div>
              <div className="col-4">
                <span className="font-size-12">Operation Person</span>
                <p className="font-weight-bold">Vinay Kumar</p>
              </div>
            </div>
          </div>
          <div className="col border rounded d-flex flex-column justify-content-around">
            <div className="row">
              <div className="col-4">
                <span className="font-size-12">Tour Type</span>
                <p className="font-weight-bold">Adventure Tour</p>
              </div>
              <div className="col-4">
                <span className="font-size-12">Hotel Category</span>
                <p className="font-weight-bold">4 *</p>
              </div>
              <div className="col-4">
                <span className="font-size-12">Hotel Type</span>
                <p className="font-weight-bold">Galaxy Hotel</p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <span className="font-size-12">ISO</span>
                <p className="font-weight-bold">Wildlife1</p>
              </div>
              <div className="col-4">
                <span className="font-size-12">Consortia</span>
                <p className="font-weight-bold">DeboxTravel</p>
              </div>
              <div className="col-4">
                <span className="font-size-12">Language</span>
                <p className="font-weight-bold">English</p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <span className="font-size-12">Vehicle Pre</span>
                <p className="font-weight-bold">9 Seater Traveller</p>
              </div>
              <div className="col-4">
                <span className="font-size-12">Lead Source</span>
                <p className="font-weight-bold">Instagram</p>
              </div>
              <div className="col-4">
                <span className="font-size-12">Lead RefrenceId</span>
                <p className="font-weight-bold">#98787687787</p>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 d-flex justify-content-end mt-2 gap-4">
            <button className="blue-button slim-button">Save</button>
            <button className="green-button slim-button">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Preview;
