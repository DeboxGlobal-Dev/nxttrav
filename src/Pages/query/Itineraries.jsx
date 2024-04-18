import React from "react";

const Itineraries = () => {
  return (
    <>
      <div className="container-fluid border border-top-0">
        <div className="row">
          <div className="col-2 p-0 pt-1 border-right">
            <p className="text-center">Days Plan</p>
            <div
              className="d-flex gap-3 justify-content-center align-items-center 
                            px-1 my-1 light-primary-bg border-top"
            >
              <div>
                <i className="fa-solid fa-pen-to-square text-success font-size-12"></i>
              </div>
              <div>
                <p className="m-0 d-block font-size-12">
                  <span className="font-weight-bold font-size-12">Day 1</span> |
                  Delhi
                </p>
                <p className="m-0 d-block font-size-12">06 April | Fri</p>
              </div>
            </div>
            <div
              className="d-flex gap-3 justify-content-center
                            align-items-center px-1 my-1 border-top"
            >
              <div>
                <i className="fa-solid fa-pen-to-square text-success font-size-12"></i>
              </div>
              <div>
                <p className="m-0 d-block font-size-12">
                  <span className="font-weight-bold">Day 2</span> | Delhi
                </p>
                <p className="m-0 d-block font-size-12">07 April | Sat</p>
              </div>
            </div>
            <div
              className="d-flex gap-3 justify-content-center 
                            align-items-center px-1 my-1 border-top"
            >
              <div>
                <i className="fa-solid fa-pen-to-square text-success font-size-12"></i>
              </div>
              <div>
                <p className="m-0 d-block font-size-12">
                  <span className="font-weight-bold">Day 3</span> | Delhi
                </p>
                <p className="m-0 d-block font-size-12">08 April | Sun</p>
              </div>
            </div>
          </div>

          <div className="col-10">
            <div className="light-primary-bg mt-2 d-inline-block p-1 rounded">
              Day 1 | Delhi 05 Apr'24 | Fri
            </div>
            <div className="col-12 border mt-1 p-0">
              <p className="border-bottom m-0 px-1">First Day Delhi</p>
              <p className="px-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eaque dolorum ducimus ut quis, repellendus magni
                maiores officiis esse in, quaerat doloremque? Distinctio totam
                sit corrupti corporis voluptas vero quis itaque inventore in.
                Tenetur ad praesentium quasi dolores? Dolore ex iure, velit sed
                impedit eaque unde est a, ut nihil consectetur! Ratione dicta
                ullam molestiae dolor quis totam enim esse adipisci
              </p>
            </div>
            <div className="col-12 p-0 mt-2">
              {/* row */}
              <div className="row border-bottom mb-2">
                <div className="col-1 d-flex flex-column align-items-center">
                  <p className="font-weight-bold font-size-11 m-0">Arrival</p>
                  <img
                    className="icon-img"
                    src="\public\global_assets\images\qoutation\arrival.png"
                    alt="arrival"
                  />
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Name/Number
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    Air India-13287
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Class
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    First Class
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival-Departure
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    New Delhi-Mumbai
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    10:30
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Departure Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    11:35
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Adult Cost
                  </p>
                  <p className="font-size-10 font-weight-bold">INR 1500</p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Child Cost
                  </p>
                  <p className="font-size-10 font-weight-bold">INR 1200</p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                  <p className="font-size-10 font-weight-bold text-flow">
                    Action
                  </p>
                  <p className="font-size-10 font-weight-bold">
                    <span className="p1-2 text-danger cursor-pointer">
                      <i className="fa-solid fa-trash font-size-11 pr-1"></i>
                    </span>
                    <span className=" text-success cursor-pointer">
                      {" "}
                      <i className="fa-solid fa-pen-to-square font-size-11 pr-1"></i>
                    </span>
                  </p>
                </div>
              </div>
              {/* row */}
              <div className="row border-bottom mb-2">
                <div className="col-1 d-flex flex-column align-items-center">
                  <p className="font-weight-bold font-size-11 m-0 text-flow">
                    Departure
                  </p>
                  <img
                    className="icon-img"
                    src="\public\global_assets\images\qoutation\Departure1.png"
                    alt="arrival"
                  />
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Name/Number
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    Air India - 13287
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Class
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    First Class
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival - Departure
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    New Delhi - Mumbai
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival Date/Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    10:30
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Departure Date/Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flwo">
                    11:35
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Adult Cost
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    INR 1500
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Child Cost
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    INR 1200
                  </p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                  <p className="font-size-10 font-weight-bold">Action</p>
                  <p className="font-size-10 font-weight-bold">
                    <span className="p1-2 text-danger cursor-pointer">
                      <i class="fa-solid fa-trash font-size-11 pr-1"></i>
                    </span>
                    <span className=" text-success cursor-pointer">
                      {" "}
                      <i className="fa-solid fa-pen-to-square font-size-11 pr-1"></i>
                    </span>
                  </p>
                </div>
              </div>
              {/* row */}
              <div className="row border-bottom mb-2">
                <div className="col-1 d-flex flex-column align-items-center">
                  <p className="font-weight-bold font-size-11 m-0">Monument</p>
                  <img
                    className="icon-img"
                    src="\public\global_assets\images\qoutation\monument.png"
                    alt="arrival"
                  />
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Monument Name</p>
                  <p className="font-size-10 font-weight-bold">
                    Birla Temple/Laxmi Narayan Temple
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Adult Cost</p>
                  <p className="font-size-10 font-weight-bold">1200</p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Child Cost</p>
                  <p className="font-size-10 font-weight-bold">1000</p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Start/End Time</p>
                  <p className="font-size-10 font-weight-bold">
                    10:30 - 05-30
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                  <p className="font-size-10 font-weight-bold">Action</p>
                  <p className="font-size-10 font-weight-bold">
                    <span className="p1-2 text-danger cursor-pointer">
                      <i class="fa-solid fa-trash font-size-11 pr-1"></i>
                    </span>
                    <span className=" text-success cursor-pointer">
                      {" "}
                      <i className="fa-solid fa-pen-to-square font-size-11 pr-1"></i>
                    </span>
                  </p>
                </div>
              </div>
              {/* row */}
              <div className="row border-bottom mb-2">
                <div className="col-1 d-flex flex-column align-items-center">
                  <p className="font-weight-bold font-size-11 m-0">Monument</p>
                  <img
                    className="icon-img"
                    src="\public\global_assets\images\qoutation\monument.png"
                    alt="arrival"
                  />
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Monument Name</p>
                  <p className="font-size-10 font-weight-bold">
                    Birla Temple/Laxmi Narayan Temple
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Adult Cost</p>
                  <p className="font-size-10 font-weight-bold">1200</p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Child Cost</p>
                  <p className="font-size-10 font-weight-bold">1000</p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Start/End Time</p>
                  <p className="font-size-10 font-weight-bold">
                    10:30 - 05-30
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                  <p className="font-size-10 font-weight-bold">Action</p>
                  <p className="font-size-10 font-weight-bold">
                    <span className="p1-2 text-danger cursor-pointer">
                      <i class="fa-solid fa-trash font-size-11 pr-1"></i>
                    </span>
                    <span className=" text-success cursor-pointer">
                      {" "}
                      <i className="fa-solid fa-pen-to-square font-size-11 pr-1"></i>
                    </span>
                  </p>
                </div>
              </div>
              {/* row */}
              <div className="row border-bottom mb-2">
                <div className="col-1 d-flex flex-column align-items-center">
                  <p className="font-weight-bold font-size-11 m-0">Hotel</p>
                  <img
                    className="icon-img"
                    src="\public\global_assets\images\qoutation\hotel.png"
                    alt="arrival"
                  />
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Hotel Name</p>
                  <p className="font-size-10 font-weight-bold">
                    Africa Avenue 5 Star
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Service Type</p>
                  <p className="font-size-10 font-weight-bold">Guest</p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Meal Plan</p>
                  <p className="font-size-10 font-weight-bold">CP</p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Tariff Type</p>
                  <p className="font-size-10 font-weight-bold">
                    Normal
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Double</p>
                  <p className="font-size-10 font-weight-bold">
                    INR 8300*5
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                  <p className="font-size-10 font-weight-bold">Action</p>
                  <p className="font-size-10 font-weight-bold">
                    <span className="p1-2 text-danger cursor-pointer">
                      <i className="fa-solid fa-trash font-size-11 pr-1"></i>
                    </span>
                    <span className=" text-success cursor-pointer">
                      {" "}
                      <i className="fa-solid fa-pen-to-square font-size-11 pr-1"></i>
                    </span>
                  </p>
                </div>
              </div>

              <div className="row border-bottom mb-2">
                <div className="col-1 d-flex flex-column align-items-center">
                  <p className="font-weight-bold font-size-11 m-0">Activity</p>
                  <img
                    className="icon-img"
                    src="\public\global_assets\images\qoutation\activity.png"
                    alt="arrival"
                  />
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Activity Name</p>
                  <p className="font-size-10 font-weight-bold">
                    Africa Avenue 5 Star
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Pax Slab</p>
                  <p className="font-size-10 font-weight-bold">10 Pax</p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Per Pax Cost</p>
                  <p className="font-size-10 font-weight-bold">INR 1200</p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">
                    Arrival Date/Time
                  </p>
                  <p className="font-size-10 font-weight-bold">
                    10:30
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">
                    Departure Date/Time
                  </p>
                  <p className="font-size-10 font-weight-bold">
                    11:35
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Adult Cost</p>
                  <p className="font-size-10 font-weight-bold">INR 1500</p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary">Child Cost</p>
                  <p className="font-size-10 font-weight-bold">INR 1200</p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                  <p className="font-size-10 font-weight-bold">Action</p>
                  <p className="font-size-10 font-weight-bold">
                    <span className="p1-2 text-danger cursor-pointer">
                      <i className="fa-solid fa-trash font-size-11 pr-1"></i>
                    </span>
                    <span className=" text-success cursor-pointer">
                      <i className="fa-solid fa-pen-to-square font-size-11 pr-1"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* --------------------------DAY-2----------------------------- */}
            <div className="light-primary-bg mt-2 d-inline-block p-1 rounded">
              Day 2 | Delhi 06 Apr'24 | Sat
            </div>
            <div className="col-12 border mt-1 p-0">
              <p className="border-bottom m-0 px-1">Second Day Delhi</p>
              <p className="px-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eaque dolorum ducimus ut quis, repellendus magni
                maiores officiis esse in, quaerat doloremque? Distinctio totam
                sit corrupti corporis voluptas vero quis itaque inventore in.
                Tenetur ad praesentium quasi dolores? Dolore ex iure, velit sed
                impedit eaque unde est a, ut nihil consectetur! Ratione dicta
                ullam molestiae dolor quis totam enim esse adipisci
              </p>
            </div>
            <div className="col-12 p-0 mt-2">
              {/* row */}
              <div className="row border-bottom mb-2">
                <div className="col-1 d-flex flex-column align-items-center">
                  <p className="font-weight-bold font-size-11 m-0">Arrival</p>
                  <img
                    className="icon-img"
                    src="\public\global_assets\images\qoutation\arrival.png"
                    alt="arrival"
                  />
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Name/Number
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    Air India-13287
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Class
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    First Class
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival-Departure
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    New Delhi-Mumbai
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    10:30
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Departure Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    11:35
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Adult Cost
                  </p>
                  <p className="font-size-10 font-weight-bold">INR 1500</p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Child Cost
                  </p>
                  <p className="font-size-10 font-weight-bold">INR 1200</p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                  <p className="font-size-10 font-weight-bold text-flow">
                    Action
                  </p>
                  <p className="font-size-10 font-weight-bold">
                    <span className="p1-2 text-danger cursor-pointer">
                      <i className="fa-solid fa-trash font-size-11 pr-1"></i>
                    </span>
                    <span className=" text-success cursor-pointer">
                      {" "}
                      <i className="fa-solid fa-pen-to-square font-size-11 pr-1"></i>
                    </span>
                  </p>
                </div>
              </div>
              {/* row */}
              <div className="row border-bottom mb-2">
                <div className="col-1 d-flex flex-column align-items-center">
                  <p className="font-weight-bold font-size-11 m-0 text-flow">
                    Departure
                  </p>
                  <img
                    className="icon-img"
                    src="\public\global_assets\images\qoutation\Departure1.png"
                    alt="arrival"
                  />
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Name/Number
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    Air India - 13287
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Class
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    First Class
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival - Departure
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    New Delhi - Mumbai
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival Date/Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    10:30
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Departure Date/Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flwo">
                    11:35
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Adult Cost
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    INR 1500
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Child Cost
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    INR 1200
                  </p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                  <p className="font-size-10 font-weight-bold">Action</p>
                  <p className="font-size-10 font-weight-bold">
                    <span className="p1-2 text-danger cursor-pointer">
                      <i class="fa-solid fa-trash font-size-11 pr-1"></i>
                    </span>
                    <span className=" text-success cursor-pointer">
                      <i className="fa-solid fa-pen-to-square font-size-11 pr-1"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* ---------------------------DAY-3------------------------------- */}

            <div className="light-primary-bg mt-2 d-inline-block p-1 rounded">
              Day 3 | Delhi 07 Apr'24 | Sun
            </div>
            <div className="col-12 border mt-1 p-0">
              <p className="border-bottom m-0 px-1">Second Day Delhi</p>
              <p className="px-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eaque dolorum ducimus ut quis, repellendus magni
                maiores officiis esse in, quaerat doloremque? Distinctio totam
                sit corrupti corporis voluptas vero quis itaque inventore in.
                Tenetur ad praesentium quasi dolores? Dolore ex iure, velit sed
                impedit eaque unde est a, ut nihil consectetur! Ratione dicta
                ullam molestiae dolor quis totam enim esse adipisci
              </p>
            </div>
            <div className="col-12 p-0 mt-2">
              {/* row */}
              <div className="row border-bottom mb-2">
                <div className="col-1 d-flex flex-column align-items-center">
                  <p className="font-weight-bold font-size-11 m-0">Arrival</p>
                  <img
                    className="icon-img"
                    src="\public\global_assets\images\qoutation\arrival.png"
                    alt="arrival"
                  />
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Name/Number
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    Air India-13287
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Class
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    First Class
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival-Departure
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    New Delhi-Mumbai
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    10:30
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Departure Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    11:35
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Adult Cost
                  </p>
                  <p className="font-size-10 font-weight-bold">INR 1500</p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Child Cost
                  </p>
                  <p className="font-size-10 font-weight-bold">INR 1200</p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                  <p className="font-size-10 font-weight-bold text-flow">
                    Action
                  </p>
                  <p className="font-size-10 font-weight-bold">
                    <span className="p1-2 text-danger cursor-pointer">
                      <i className="fa-solid fa-trash font-size-11 pr-1"></i>
                    </span>
                    <span className=" text-success cursor-pointer">
                      {" "}
                      <i className="fa-solid fa-pen-to-square font-size-11 pr-1"></i>
                    </span>
                  </p>
                </div>
              </div>
              {/* row */}
              <div className="row border-bottom mb-2">
                <div className="col-1 d-flex flex-column align-items-center">
                  <p className="font-weight-bold font-size-11 m-0 text-flow">
                    Departure
                  </p>
                  <img
                    className="icon-img"
                    src="\public\global_assets\images\qoutation\Departure1.png"
                    alt="arrival"
                  />
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Name/Number
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    Air India - 13287
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Class
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    First Class
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival - Departure
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    New Delhi - Mumbai
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival Date/Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    10:30
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Departure Date/Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flwo">
                    11:35
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Adult Cost
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    INR 1500
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Child Cost
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    INR 1200
                  </p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                  <p className="font-size-10 font-weight-bold">Action</p>
                  <p className="font-size-10 font-weight-bold">
                    <span className="p1-2 text-danger cursor-pointer">
                      <i class="fa-solid fa-trash font-size-11 pr-1"></i>
                    </span>
                    <span className=" text-success cursor-pointer">
                      <i className="fa-solid fa-pen-to-square font-size-11 pr-1"></i>
                    </span>
                  </p>
                </div>
              </div>
              <div className="row border-bottom mb-2">
                <div className="col-1 d-flex flex-column align-items-center">
                  <p className="font-weight-bold font-size-11 m-0 text-flow">
                    Departure
                  </p>
                  <img
                    className="icon-img"
                    src="\public\global_assets\images\qoutation\Departure1.png"
                    alt="arrival"
                  />
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Name/Number
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    Air India - 13287
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Class
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    First Class
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival - Departure
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    New Delhi - Mumbai
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival Date/Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    10:30
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Departure Date/Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flwo">
                    11:35
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Adult Cost
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    INR 1500
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Child Cost
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    INR 1200
                  </p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                  <p className="font-size-10 font-weight-bold">Action</p>
                  <p className="font-size-10 font-weight-bold">
                    <span className="p1-2 text-danger cursor-pointer">
                      <i class="fa-solid fa-trash font-size-11 pr-1"></i>
                    </span>
                    <span className=" text-success cursor-pointer">
                      <i className="fa-solid fa-pen-to-square font-size-11 pr-1"></i>
                    </span>
                  </p>
                </div>
              </div>
              <div className="row border-bottom mb-2">
                <div className="col-1 d-flex flex-column align-items-center">
                  <p className="font-weight-bold font-size-11 m-0 text-flow">
                    Departure
                  </p>
                  <img
                    className="icon-img"
                    src="\public\global_assets\images\qoutation\Departure1.png"
                    alt="arrival"
                  />
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Name/Number
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    Air India - 13287
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Flight Class
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    First Class
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival - Departure
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    New Delhi - Mumbai
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Arrival Date/Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    10:30
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Departure Date/Time
                  </p>
                  <p className="font-size-10 font-weight-bold text-flwo">
                    11:35
                    <i className="fa-solid fa-pen-to-square text-success font-size-11 pl-2 cursor-pointer"></i>
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Adult Cost
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    INR 1500
                  </p>
                </div>
                <div className="col">
                  <p className="font-size-10 text-secondary text-flow">
                    Child Cost
                  </p>
                  <p className="font-size-10 font-weight-bold text-flow">
                    INR 1200
                  </p>
                </div>
                <div className="col d-flex flex-column align-items-end">
                  <p className="font-size-10 font-weight-bold">Action</p>
                  <p className="font-size-10 font-weight-bold">
                    <span className="p1-2 text-danger cursor-pointer">
                      <i class="fa-solid fa-trash font-size-11 pr-1"></i>
                    </span>
                    <span className=" text-success cursor-pointer">
                      <i className="fa-solid fa-pen-to-square font-size-11 pr-1"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Itineraries;
