import React from "react";

const Costsheet = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0 bg-primary d-flex justify-content-between align-items-center py-1 px-1">
          <p className="m-0">COST SHEET | DB24-25/002209-A</p>
          <button className="modal-save-button bg-success rounded-pill">
            Export
          </button>
        </div>
        <div className="col-12 p-0 mt-2">
          <div className="table-responsive custom-table custom-table-scroll p-0">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="px-2 font-size-12 text-center">Tour Id</th>
                  <th className="px-2 font-size-12 text-center">
                    Arrival Date
                  </th>
                  <th className="px-2 font-size-12 text-center">Agent Name</th>
                  <th className="px-2 font-size-12 text-center">
                    Lead Pax Name
                  </th>
                  <th className="px-2 font-size-12 text-center">
                    Operation Person
                  </th>
                  <th className="px-2 font-size-12 text-center">
                    Sales Person
                  </th>
                  <th className="px-2 font-size-12 text-center">R.O.E</th>
                  <th className="px-2 font-size-12 text-center">Printed On:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 font-size-12 text-center"></td>
                  <td className="p-2 font-size-12 text-center"></td>
                  <td className="p-2 font-size-12 text-center"></td>
                  <td className="p-2 font-size-12 text-center"></td>
                  <td className="p-2 font-size-12 text-center">
                    Emergency Relation
                  </td>
                  <td className="p-2 font-size-12 text-center"></td>
                  <td className="p-2 font-size-12 text-center"></td>
                  <td className="p-2 font-size-12 text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-12 p-0 mt-2">
          <h1 className="text-center fs-5">Cost Sheet Detail</h1>
          <div className="table-responsive custom-table custom-table-scroll p-0">
            <table className="table table-bordered mt-1">
              <thead>
                <tr>
                  <th className="px-2 font-size-12 text-center p-0 py-1">
                    Day/Date
                  </th>
                  <th className="px-2 font-size-12 text-center p-0 py-1">
                    City
                  </th>
                  <th className="px-2 font-size-12 text-center p-0 py-1">
                    Hotels
                  </th>
                  <th
                    className="px-2 font-size-12 text-center p-0 py-1"
                    colSpan={7}
                  >
                    Hotel Rates
                  </th>
                  <th className="px-2 font-size-12 text-center p-0 py-1">
                    Train
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-size-12 text-center p-0 py-1" style={{backgroundColor:'#32ad80a8'}}></td>
                  <td className="font-size-12 text-center p-0 py-1" style={{backgroundColor:'#32ad80a8'}}></td>
                  <td className="font-size-12 text-center p-0 py-1" style={{backgroundColor:'#32ad80a8'}}></td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>
                    SGL
                  </td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>
                    DBL
                  </td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>
                    TPL
                  </td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>
                    TWN
                  </td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>B</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>L</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>D</td>
                  <td className="font-size-12 text-center p-0 py-1" style={{backgroundColor:'#32ad80a8'}}>Adult</td>
                </tr>
                <tr>
                  <td className="font-size-12 text-center p-0 py-1">
                    D01 - 02-09-2024
                  </td>
                  <td className="font-size-12 text-center p-0 py-1">Noida</td>
                  <td className="font-size-12 text-center p-0 py-1">Hotels</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1">0.00</td>
                </tr>
                <tr>
                  <td className="font-size-12 text-center p-0 py-1">
                    D01 - 02-09-2024
                  </td>
                  <td className="font-size-12 text-center p-0 py-1">Noida</td>
                  <td className="font-size-12 text-center p-0 py-1">Hotels</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1">0.00</td>
                </tr>
                <tr>
                  <td
                    className="font-size-12 text-end p-0 py-1 pr-2"
                    colSpan={3}
                  >
                    Total
                  </td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1">0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-12 mt-2 p-0">
          <div className="table-responsive custom-table custom-table-scroll p-0">
            <table className="table table-bordered mt-1">
              <thead>
                <tr>
                  <th className="px-2 font-size-12 text-center p-0 py-1">
                    Day/Date
                  </th>
                  <th className="px-2 font-size-12 text-center p-0 py-1">
                    City
                  </th>
                  <th className="px-2 font-size-12 text-center p-0 py-1">
                    Guide
                  </th>
                  <th className="px-2 font-size-12 text-center p-0 py-1">
                    Monument
                  </th>
                  <th className="px-2 font-size-12 text-center p-0 py-1">
                    Restaurant
                  </th>
                  <th
                    className="px-2 font-size-12 text-center p-0 py-1"
                    colSpan={2}
                  >
                    Additional
                  </th>
                  <th
                    className="px-2 font-size-12 text-center p-0 py-1"
                    colSpan={3}
                  >
                    Per Pax
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-size-12 text-center p-0 py-1" style={{backgroundColor:'#32ad80a8'}}></td>
                  <td className="font-size-12 text-center p-0 py-1" style={{backgroundColor:'#32ad80a8'}}></td>
                  <td className="font-size-12 text-center p-0 py-1" style={{backgroundColor:'#32ad80a8'}}>1 Pax</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>
                    Adult
                  </td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>
                    Adult
                  </td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>
                    Adult
                  </td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>
                    Group
                  </td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>
                    Enroute
                  </td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>
                    Tour Escort
                  </td>
                  <td className="font-size-12 text-center p-0 py-1 px-1" style={{backgroundColor:'#32ad80a8'}}>
                    Porter
                  </td>
                </tr>
                <tr>
                  <td className="font-size-12 text-center p-0 py-1" >
                    D01 - 02-09-2024
                  </td>
                  <td className="font-size-12 text-center p-0 py-1">Noida</td>
                  <td className="font-size-12 text-center p-0 py-1">Hotels</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                </tr>
                <tr>
                  <td className="font-size-12 text-center p-0 py-1">
                    D01 - 02-09-2024
                  </td>
                  <td className="font-size-12 text-center p-0 py-1">Noida</td>
                  <td className="font-size-12 text-center p-0 py-1">Hotels</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                </tr>
                <tr>
                  <td
                    className="font-size-12 text-end p-0 py-1 pr-2"
                    colSpan={3}
                  >
                    Total
                  </td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                  <td className="font-size-12 text-center p-0 py-1 px-1">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-8 mt-3 p-0">
          <p className="text-center fs-5 m-0">Per Pax Cost</p>
          <div className="table-responsive custom-table p-0 overflow-hidden">
            <table className="table table-bordered mt-1">
              <thead>
                <tr>
                  <th className="px-2 font-size-12 text-center p-0 py-1">
                    PARTICULARS
                  </th>
                  <th className="px-2 font-size-12 text-center p-0 py-1">
                    1 Adult(s), Child(s), | Pax (D.F-1)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-size-12 text-center p-0 py-1" style={{backgroundColor:'#32ad80a8'}}></td>
                  <td className="font-size-12 text-center p-0 py-1" style={{backgroundColor:'#32ad80a8'}}>
                    ADULT COST
                  </td>
                </tr>
                <tr>
                  <td className="font-size-12 text-center p-0 py-1">
                    MEAL + A+ B+C
                  </td>
                  <td className="font-size-12 text-center p-0 py-1">0.00</td>
                </tr>
                <tr>
                  <td className="font-size-12 text-center p-0 py-1">Train</td>
                  <td className="font-size-12 text-center p-0 py-1">0.00</td>
                </tr>
                <tr>
                  <td className="font-size-12 text-center p-0 py-1">Porter</td>
                  <td className="font-size-12 text-center p-0 py-1">0.00</td>
                </tr>
                <tr>
                  <td className="font-size-12 text-center p-0 py-1">
                    TOTAL LAND ARRANGEMENT COST(INR)
                  </td>
                  <td className="font-size-12 text-center p-0 py-1">0.00</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>TRANSPORT</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>GUIDE</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>TOUR ESCORT</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>TOTAL TRANSPORT/GUIDE/ESCORT COST(INR)</td>
                  <td>0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-4 mt-3 pr-0">
          <p className="m-0 text-center fs-5">General Info</p>
          <div className="table-responsive custom-table p-0 overflow-hidden">
            <table className="table table-bordered mt-1">
              <tbody>
                <tr>
                  <td className="font-size-12 text-center px-2 py-1">
                    Adult Pax
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">1</td>
                </tr>
                <tr>
                  <td className="font-size-12 text-center px-2 py-1">
                    Child Pax
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">1</td>
                </tr>
                <tr>
                  <td className="font-size-12 text-center px-2 py-1">
                    Local Escort Pax
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">1</td>
                </tr>
                <tr>
                  <td className="font-size-12 text-center px-2 py-1">
                    Foreign Escort Pax
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-6 mt-3 p-0">
          <div className="table-responsive custom-table p-0 overflow-hidden">
            <table className="table table-bordered mt-1">
              <thead>
                <th colSpan={5} className="text-center" style={{backgroundColor:'#32ad80a8'}}>
                  Total Tour Cost(1 Pax)
                </th>
              </thead>
              <tbody>
                <tr>
                  <td className="font-size-12 text-center px-2 py-1">
                    Itenarary Service
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">
                    Unit Cost
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">
                    Volume Type
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">
                    QTY Total
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">
                    Total Cost
                  </td>
                </tr>
                <tr>
                  <td className="font-size-12 text-center px-2 py-1">
                    Single Room
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">0.00</td>
                  <td className="font-size-12 text-center px-2 py-1"></td>
                  <td className="font-size-12 text-center px-2 py-1"></td>
                  <td className="font-size-12 text-center px-2 py-1">0.00</td>
                </tr>
                <tr>
                  <td className="font-size-12 text-center px-2 py-1">
                    Land Arrangement(Adult)
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">0.00</td>
                  <td className="font-size-12 text-center px-2 py-1"></td>
                  <td className="font-size-12 text-center px-2 py-1"></td>
                  <td className="font-size-12 text-center px-2 py-1">0.00</td>
                </tr>
                <tr>
                  <td
                    className="font-size-12 text-center px-2 py-1"
                    colSpan={4}
                  >
                    Cost of the trip(INR)
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">0.00</td>
                </tr>
                <tr>
                  <td
                    className="font-size-12 text-center px-2 py-1"
                    colSpan={4}
                  >
                    [Excluding Airfare]
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">0.00</td>
                </tr>
                <tr>
                  <td
                    className="font-size-12 text-center px-2 py-1"
                    colSpan={4}
                  >
                    Toral Tour Cost(INR)
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-6 mt-3 pr-0">
          <div className="table-responsive custom-table p-0 overflow-hidden">
            <p className="m-0">Per Pax Cost</p>
            <table className="table table-bordered mt-1">
              <thead>
                <th className="text-center">Occupancy</th>
                <th className="text-center">Slab(1 Pax)</th>
              </thead>
              <tbody>
                <tr>
                  <td className="font-size-12 text-center px-2 py-1">
                    Per Person Cost On Single Basis
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">
                    INR 1400
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-12 mt-3 p-0">
          <p className="m-0">ADDITIONALS BREAK-UP COST</p>
          <div className="table-responsive custom-table p-0 overflow-hidden">
            <table className="table table-bordered mt-1">
              <thead>
                <th className="text-center">Date</th>
                <th className="text-center">City</th>
                <th className="text-center">Service Name</th>
                <th className="text-center">Adult Cost(INR)</th>
                <th className="text-center">No. Of Adult</th>
                <th className="text-center">Total Cost</th>
                <th className="text-center">Child Cost</th>
                <th className="text-center">No of Child</th>
                <th className="text-center">Total Cost</th>
                <th className="text-center">Group Cost</th>
              </thead>
              <tbody>
                <tr>
                  <td className="font-size-12 text-center px-2 py-1">
                    01-02-2023
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">Noida</td>
                  <td className="font-size-12 text-center px-2 py-1">Noida</td>
                  <td className="font-size-12 text-center px-2 py-1">
                    From Nitin
                  </td>
                  <td className="font-size-12 text-center px-2 py-1">4200</td>
                  <td className="font-size-12 text-center px-2 py-1">1</td>
                  <td className="font-size-12 text-center px-2 py-1">4200</td>
                  <td className="font-size-12 text-center px-2 py-1">0.00</td>
                  <td className="font-size-12 text-center px-2 py-1">0.00</td>
                  <td className="font-size-12 text-center px-2 py-1">0.00</td>
                </tr>
                <tr>
                  <td className="font-size-12 text-end px-2 py-1" colSpan={3}>
                    Total Additional Cost
                  </td>
                  <td className="font-size-12 text-end px-2 py-1" colSpan={3}>
                    1110.00
                  </td>
                  <td className="font-size-12 text-end px-2 py-1" colSpan={3}>
                    0.00
                  </td>
                  <td className="font-size-12 text-end px-2 py-1">0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Costsheet;
