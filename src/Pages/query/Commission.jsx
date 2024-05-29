import React from "react";

const Commission = () => {
  return (
    <>
      <div className="container-fluid">
        {/* add-markup */}
        <div className="row mt-3">
          <div className="col-12 backgroundColor-4 d-flex gap-2">
            <span>
              <i className="fa-solid fa-square text-primary"></i>
            </span>
            <span>Add Markup</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex gap-3 py-2">
            <div className="d-flex gap-2 align-items-center">
              <input
                type="radio"
                id="universel"
                name="addmarkup"
                className=""
                defaultChecked
              />
              <label htmlFor="universel" className="m-0">
                Universel
              </label>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <input type="radio" id="service" name="addmarkup" className="" />
              <label htmlFor="service" className="m-0">
                Service Wise
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <div className="row">
              <div className="col-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">
                        Mark Up Type
                      </th>
                      <th className="font-size-10 p-0 text-center">Mark Up</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2">
                        <select name="" id="" className="px-2">
                          <option value="">%</option>
                        </select>
                      </td>
                      <td className="p-0 text-center py-2">20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-1 p-0">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">Hotel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2 d-flex flex-column align-items-center gap-1">
                        <select name="" id="" className="px-2 table-select">
                          <option value="">%</option>
                        </select>
                        <input type="text" className="table-input" value="5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-1 p-0">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">Guide</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2 d-flex flex-column align-items-center gap-1">
                        <select name="" id="" className="px-2 table-select">
                          <option value="">%</option>
                        </select>
                        <input type="text" className="table-input" value="5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-1 p-0">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2 d-flex flex-column align-items-center gap-1">
                        <select name="" id="" className="px-2 table-select">
                          <option value="">%</option>
                        </select>
                        <input type="text" className="table-input" value="5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-1 p-0">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">Entrance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2 d-flex flex-column align-items-center gap-1">
                        <select name="" id="" className="px-2 table-select">
                          <option value="">%</option>
                        </select>
                        <input type="text" className="table-input" value="5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-1 p-0">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">Enroute</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2 d-flex flex-column align-items-center gap-1">
                        <select name="" id="" className="px-2 table-select">
                          <option value="">%</option>
                        </select>
                        <input type="text" className="table-input" value="5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-1 p-0">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">Transfer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2 d-flex flex-column align-items-center gap-1">
                        <select name="" id="" className="px-2 table-select">
                          <option value="">%</option>
                        </select>
                        <input type="text" className="table-input" value="5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-1 p-0">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">Train</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2 d-flex flex-column align-items-center gap-1">
                        <select name="" id="" className="px-2 table-select">
                          <option value="">%</option>
                        </select>
                        <input type="text" className="table-input" value="5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-1 p-0">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">Flight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2 d-flex flex-column align-items-center gap-1">
                        <select name="" id="" className="px-2 table-select">
                          <option value="">%</option>
                        </select>
                        <input type="text" className="table-input" value="5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-1 p-0">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">
                        Restaurant
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2 d-flex flex-column align-items-center gap-1">
                        <select name="" id="" className="px-2 table-select">
                          <option value="">%</option>
                        </select>
                        <input type="text" className="table-input" value="5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-1 p-0">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">Visa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2 d-flex flex-column align-items-center gap-1">
                        <select name="" id="" className="px-2 table-select">
                          <option value="">%</option>
                        </select>
                        <input type="text" className="table-input" value="5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-1 p-0">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">
                        Insurance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2 d-flex flex-column align-items-center gap-1">
                        <select name="" id="" className="px-2 table-select">
                          <option value="">%</option>
                        </select>
                        <input type="text" className="table-input" value="5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-1 p-0">
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">Other</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2 d-flex flex-column align-items-center gap-1">
                        <select name="" id="" className="px-2 table-select">
                          <option value="">%</option>
                        </select>
                        <input type="text" className="table-input" value="5" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* add-commision */}
        <div className="row mt-3 backgroundColor-4">
          <div className="col-4  d-flex gap-2">
            <span>
              <i className="fa-solid fa-square text-primary"></i>
            </span>
            <span>Add Commision</span>
          </div>
          <div className="col-4  d-flex gap-2">
            <span>
              <i className="fa-solid fa-square text-primary"></i>
            </span>
            <span>Supplement Selection</span>
          </div>
          <div className="col-4  d-flex gap-2">
            <span>
              <i className="fa-solid fa-square text-primary"></i>
            </span>
            <span>Meal Supplement</span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4">
            <div className="row">
              <div className="col-5">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">
                        Client Commision
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="d-flex justify-content-center">
                        <input
                          type="text"
                          className="table-input"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-4">
            <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="font-size-10 p-0 text-center">
                        Flight Cost
                      </th>
                      <th className="font-size-10 p-0 text-center">
                        Tour Escort
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-0 text-center py-2">
                        <select name="" id="">
                          <option value="">Supplement Cost</option>
                        </select>
                      </td>
                      <td className="text-center">
                        <select name="" id="">
                          <option value="">Supplement Cost</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
            </table>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-5">
              <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="font-size-10 p-0 text-center">
                    Current Meal Plan()
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-0 text-center py-2">
                    <select name="" id="" className="table-select">
                      <option value="">All</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
              </div>
            </div>
          </div>
        </div>
        {/* other-information */}
        <div className="row mt-3 backgroundColor-4">
          <div className="col-4 d-flex gap-2">
            <span>
              <i className="fa-solid fa-square text-primary"></i>
            </span>
            <span>Other Information</span>
          </div>
        </div>
        <div className="row mt-3 ml-1">
          <div className="col-1 p-0">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="font-size-10 p-0 text-center">GST Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-0 text-center py-2">
                    <select name="" id="" className="px-2 table-select-1">
                      <option value="">Same State</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-1 p-0">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="font-size-10 p-0 text-center">GST(%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-0 text-center py-2">
                    <select name="" id="" className="px-2 table-select-1">
                      <option value="">5% GST</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-1 p-0">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="font-size-10 p-0 text-center">TCS(%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-0 text-center py-2">
                    <select name="" id="" className="px-2 table-select-1">
                      <option value="">Tax Inc.</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-1 p-0">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="font-size-10 p-0 text-center">
                    Discount Type
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-0 text-center py-2">
                    <select name="" id="" className="px-2 table-select-1">
                      <option value="">%</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-1 p-0">
            <table className="table table-bordered ">
              <thead>
                <tr>
                  <th className="font-size-10 p-0 text-center">Discount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-0 text-center py-2">
                    <input type="text" className="table-input-1" value="0" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-1 p-0">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="font-size-10 p-0 text-center">SRS & TRR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-0 text-center py-2">
                    <select name="" id="" className="px-2 table-select-1">
                      <option value="">None</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-1 p-0">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="font-size-10 p-0 text-center">Currency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-0 text-center py-2">
                    <select name="" id="" className="px-2 table-select-1">
                      <option value="">INR</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-1 p-0">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="font-size-10 p-0 text-center">
                    ROE (For 1INR)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-0 text-center py-2">
                    <input type="text" className="table-input-1" value="1" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col d-flex gap-3">
            <button className="save-button">Save</button>
            <button className="back-button">Back</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commission;
