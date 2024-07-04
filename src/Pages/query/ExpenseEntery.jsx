import React from "react";

const ExpenseEntry = () => {
  
  return (
    <>
      <div className="container">
        <p className="p-0 font-weight-bold">Create New Express</p>
        <div className="d-flex mt-2 gap-2">
          <div className="p-0 d-flex flex-column">
            <lable>Expense Date</lable>
            <select className="form-input-4">
              <option>Advanced Payment</option>
            </select>
          </div>
          <div className=" p-0 d-flex flex-column">
            <lable>Expense Type</lable>
            <select className="form-input-4">
              <option> Advanced Payment </option>
            </select>
          </div>
          <div className="p-0 d-flex flex-column">
            <lable>Currency</lable>
            <select className="form-input-4">
              <option> Currency </option>
            </select>
          </div>
          <div className="d-flex flex-column">
            <label className="m-0">Amount</label>
            <input type="text" placeholder="2656" className="form-input-4"/>
          </div>
          <div className="d-flex flex-column">
            <label className="m-0">Narration</label>
            <input type="text" className="form-input-4" />
          </div>
          <div className="d-flex flex-column">
            <label className="m-0">Paid To</label>
            <input type="text" placeholder="5812" className="form-input-4"/>
          </div>
          <div className="d-flex align-items-end">
            <button className="btn btn-primary padding-3">Save</button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-10 bg-primary m-0 p-0">
            <p className="text-center py-2 m-0 fs-5">Expense Letter</p>
          </div>
          <div className="col-10 p-0">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Expense Date</th>
                  <th scope="col">Expense Type</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Narration</th>
                  <th scope="col">Paid To</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>22-05-2024</td>
                  <td></td>
                  <td>Rupees 6522</td>
                  <td></td>
                  <td>7686</td>
                  <td>
                    <i className="fa-solid fa-pen-to-square fs-6 text-success"></i>
                    <span className="fs-6 pl-2 text-success">Edit</span>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>22-05-2024</td>
                  <td></td>
                  <td>Rupees 6522</td>
                  <td></td>
                  <td>7686</td>
                  <td>
                    <i className="fa-solid fa-pen-to-square fs-6 text-success"></i>
                    <span className="fs-6 pl-2 text-success">Edit</span>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>22-05-2024</td>
                  <td></td>
                  <td>Rupees 6522</td>
                  <td></td>
                  <td>7686</td>
                  <td>
                    <i className="fa-solid fa-pen-to-square fs-6 text-success"></i>
                    <span className="fs-6 pl-2 text-success">Edit</span>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>22-05-2024</td>
                  <td></td>
                  <td>Rupees 6522</td>
                  <td></td>
                  <td>7686</td>
                  <td>
                    <i className="fa-solid fa-pen-to-square fs-6 text-success"></i>
                    <span className="fs-6 pl-2 text-success">Edit</span>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>22-05-2024</td>
                  <td></td>
                  <td>Rupees 6522</td>
                  <td></td>
                  <td>7686</td>
                  <td>
                    <i className="fa-solid fa-pen-to-square fs-6 text-success"></i>
                    <span className="fs-6 pl-2 text-success">Edit</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseEntry;
