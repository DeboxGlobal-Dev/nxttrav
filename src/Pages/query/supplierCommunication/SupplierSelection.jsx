import React from "react";

const SupplierSelection = () => {
  return (
    <div className="row row-gap-2">
      <div className="col-12 d-flex justify-content-end">
        <div className="d-flex gap-3">
          <select className="button-style-4 p-1 font-size-11">
            <option value="">DB24-25/000070-A | Main</option>
          </select>
          <button className="button-style-4 p-1 px-2 font-size-11 bg-white">
            Apply Filter
          </button>
          <button className="button-style-4 py-1 px-3 font-size-11 bg-white">
            Back
          </button>
        </div>
      </div>
      <div className="col-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th
                colSpan="5"
                className="py-1"
                style={{ backgroundColor: "rgb(255, 255, 127)" }}
              >
                <div className="row justify-content-between m-0 p-0">
                  <div className="col m-0 p-0">
                    <p className="m-0">Unassigned Services</p>
                  </div>
                  <div className="col d-flex justify-content-end m-0 p-0">
                    <p className="m-0 text-primary">
                      <span className="pr-1 font-size-15">+</span>Add New
                      Supplier
                    </p>
                  </div>
                </div>
              </th>
            </tr>
            <tr className="">
              <th className="text-center py-1">Quotation</th>
              <th className="text-center py-1">Service Type</th>
              <th className="text-center py-1">Service Name</th>
              <th className="text-center py-1">Select Supplier</th>
              <th className="text-center py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center py-1">Main Quotation</td>
              <td className="text-center py-1">Hotel</td>
              <td className="text-center py-1">Agma Suffary</td>
              <td className="text-center py-1">
                <select
                  name=""
                  id=""
                  className="w-100 py-1 border gray-background outline-0"
                >
                  <option value="">Select Supplier</option>
                </select>
              </td>
              <td className="text-center py-1">
                <button className="bg-success border-0">
                  <i className="fa-regular fa-hand-pointer"></i> Select
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-12 mt-2">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th
                colSpan="6"
                className="py-1"
                style={{ backgroundColor: "rgb(255, 255, 127)" }}
              >
                <p className="m-0">Assigned Services</p>
              </th>
            </tr>
            <tr className="">
              <th className="text-center py-1">Quotation</th>
              <th className="text-center py-1">Service Date</th>
              <th className="text-center py-1">Type</th>
              <th className="text-center py-1">Service Name</th>
              <th className="text-center py-1">Select Supplier</th>
              <th className="text-center py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center py-1">Main Quotation</td>
              <td className="text-center py-1">10-10-2023</td>
              <td className="text-center py-1">Hotel</td>
              <td className="text-center py-1">Agma Suffary</td>
              <td className="text-center py-1">
                <select
                  name=""
                  id=""
                  className="w-100 py-1 border gray-background outline-0"
                >
                  <option value="">Select Supplier</option>
                </select>
              </td>
              <td className="text-center py-1">
                <button className="bg-success border-0">Select</button>
              </td>
            </tr>
            <tr>
              <td className="text-center py-1">Main Quotation</td>
              <td className="text-center py-1">10-10-2023</td>
              <td className="text-center py-1">Hotel</td>
              <td className="text-center py-1">Agma Suffary</td>
              <td className="text-center py-1">
                <select
                  name=""
                  id=""
                  className="w-100 py-1 border gray-background outline-0"
                >
                  <option value="">Select Supplier</option>
                </select>
              </td>
              <td className="text-center py-1">
                <button className="bg-success border-0">Select</button>
              </td>
            </tr>
            <tr>
              <td className="text-center py-1">Main Quotation</td>
              <td className="text-center py-1">10-10-2023</td>
              <td className="text-center py-1">Hotel</td>
              <td className="text-center py-1">Agma Suffary</td>
              <td className="text-center py-1">
                <select
                  name=""
                  id=""
                  className="w-100 py-1 border gray-background outline-0"
                >
                  <option value="">Select Supplier</option>
                </select>
              </td>
              <td className="text-center py-1">
                <button className="bg-success border-0">Select</button>
              </td>
            </tr>
            <tr>
              <td className="text-center py-1">Main Quotation</td>
              <td className="text-center py-1">10-10-2023</td>
              <td className="text-center py-1">Hotel</td>
              <td className="text-center py-1">Agma Suffary</td>
              <td className="text-center py-1">
                <select
                  name=""
                  id=""
                  className="w-100 py-1 border gray-background outline-0"
                >
                  <option value="">Select Supplier</option>
                </select>
              </td>
              <td className="text-center py-1">
                <button className="bg-success border-0">Select</button>
              </td>
            </tr>
            <tr>
              <td className="text-center py-1">Main Quotation</td>
              <td className="text-center py-1">10-10-2023</td>
              <td className="text-center py-1">Hotel</td>
              <td className="text-center py-1">Agma Suffary</td>
              <td className="text-center py-1">
                <select
                  name=""
                  id=""
                  className="w-100 py-1 border gray-background outline-0"
                >
                  <option value="">Select Supplier</option>
                </select>
              </td>
              <td className="text-center py-1">
                <button className="bg-success border-0">Select</button>
              </td>
            </tr>
            <tr>
              <td className="text-center py-1">Main Quotation</td>
              <td className="text-center py-1">10-10-2023</td>
              <td className="text-center py-1">Hotel</td>
              <td className="text-center py-1">Agma Suffary</td>
              <td className="text-center py-1">
                <select
                  name=""
                  id=""
                  className="w-100 py-1 border gray-background outline-0"
                >
                  <option value="">Select Supplier</option>
                </select>
              </td>
              <td className="text-center py-1">
                <button className="bg-success border-0">Select</button>
              </td>
            </tr>
            <tr>
              <td className="text-center py-1">Main Quotation</td>
              <td className="text-center py-1">10-10-2023</td>
              <td className="text-center py-1">Hotel</td>
              <td className="text-center py-1">Agma Suffary</td>
              <td className="text-center py-1">
                <select
                  name=""
                  id=""
                  className="w-100 py-1 border gray-background outline-0"
                >
                  <option value="">Select Supplier</option>
                </select>
              </td>
              <td className="text-center py-1">
                <button className="bg-success border-0">Select</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierSelection;
