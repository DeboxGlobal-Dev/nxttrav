import React from "react";
import GuestList from "./GuestList";
import TaskSchedule from "./TaskSchedule";

const TourExtension = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0 mt-1">
            <ul class="nav nav-tabs custom-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link custom-tab-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#guestlist"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Guest List
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link custom-tab-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contactlist"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Contact List
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link custom-tab-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#taskschedule"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Task Schedule
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="guestlist"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <GuestList/>
              </div>
              <div
                class="tab-pane fade"
                id="contactlist"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <h1>Contact List</h1>
              </div>
              <div
                class="tab-pane fade"
                id="taskschedule"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <TaskSchedule/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TourExtension;
