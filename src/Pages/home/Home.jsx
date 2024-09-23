import React from "react";
import Layout from "../../Component/Layout/Layout";
import DestinationChart from "./DestinationChart";
import MonthSale from "./MonthSale";
import YearlyQuery from "./YearlyQuery";
import MonthQuery from "./MonthQuery";
import TodoList from "./TodoList";
import QueryDetails from "./QueryDetails";

const Home = () => {
  return (
    <Layout>
      <div className="container-fluid px-4 mb-4">
        <div className="row mt-1 gap-2">
          {/* TODO LIST  */}
          <div className="col-5 border">
            <TodoList />
          </div>
          <div className="col d-flex flex-column justify-content-between ">
            <QueryDetails />
          </div>
          <div className="col-3">
            <h4 className="m-0 text-center">TOP 5 DESTINATION</h4>
            <DestinationChart />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-5 p-0" style={{ height: "300px" }}>
            <h4 className="m-0 text-center">2024 QUERIES</h4>
            <YearlyQuery />
          </div>
          <div className="col-4">
            <h4 className="m-0 text-center">SEPTEMBER SALE</h4>
            <MonthSale />
          </div>
          <div className="col-3">
            <h4>SEPTEMBER QUERY REPORT</h4>
            <MonthQuery />
          </div>
        </div>
      </div>

      {/* action modal */}
      <div
        class="modal fade bd-action-modal-sm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content ">
            <p className="py-1 px-2 bg-primary rounded">SELECT STATUS</p>
            <div className="px-2 ">
              <select name="" id="" className="form-input-6 w-50">
                <option value="">Select</option>
                <option value="">Completed</option>
                <option value="">Extended</option>
              </select>
            </div>
            <div className="modal-footer m-0 mt-3 p-1">
              <button className="modal-save-button">Save</button>
              <button className="modal-close-button" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
