import React, { useState } from "react";
import DayWiseItinerary from "./DayWiseItinerary";

const Itineraries = () => {
  const [heading, setHeading] = useState(" Day 1 | Delhi 05 Apr'24 | Fri");
  const [isActive, setIsActive] = useState(1);

  const handleDayWiseView = (text, num) => {
    setHeading(text);
    setIsActive(num);
  };

  return (
    <>
      <div className="container-fluid border border-top-0">
        <div className="row">
          <div className="col-12 col-sm-2 pt-1 border-right">
            <p className="text-center">Days Plan</p>
            <div className="row border">
              <div
                className={`col-lg-12 col-sm-3  d-flex gap-3 justify-content-center align-items-center 
                            px-1 my-1 cursor-pointer tab-hover ${
                              isActive == 1 && "light-primary-bg"
                            }`}
                onClick={() =>
                  handleDayWiseView(" Day 1 | Delhi 05 Apr'24 | Fri", 1)
                }
              >
                <div>
                  <i className="fa-solid fa-pen-to-square text-success font-size-12"></i>
                </div>
                <div>
                  <p className="m-0 d-block font-size-12">
                    <span className="font-weight-bold font-size-12">Day 1</span>
                    | Delhi
                  </p>
                  <p className="m-0 d-block font-size-12">06 April | Fri</p>
                </div>
              </div>
              <div
                className={`col-lg-12 col-sm-3  d-flex gap-3 justify-content-center align-items-center 
                  px-1 my-1 cursor-pointer tab-hover ${
                    isActive == 2 && "light-primary-bg"
                  }`}
                onClick={() =>
                  handleDayWiseView(" Day 2 | Mumbai 06 Apr'24 | Sat", 2)
                }
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
                className={`col-lg-12 col-sm-3  d-flex gap-3 justify-content-center align-items-center 
                  px-1 my-1 cursor-pointer tab-hover ${
                    isActive == 3 && "light-primary-bg"
                  }`}
                onClick={() =>
                  handleDayWiseView(" Day 3 | Dehradun 07 Apr'24 | Sun", 3)
                }
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
          </div>
          <DayWiseItinerary heading={heading} />
        </div>
      </div>
    </>
  );
};

export default Itineraries;
