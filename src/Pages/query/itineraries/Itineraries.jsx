import React, { useEffect, useState } from "react";
import DayWiseItinerary from "./DayWiseItinerary";
import { quotationData } from "../quotationdata";

const Itineraries = () => {
  const [dayWiseData, setDayWiseData] = useState(null);
  const [isActive, setIsActive] = useState(1);

  const handleDayWiseView = (value, num) => {
    setDayWiseData(value);
    setIsActive(num);
  };

  useEffect(() => {
    const data = quotationData?.Days[0];
    setDayWiseData(data);
  }, []);

  // console.log('quotationData', quotationData);

  return (
    <>
      <div className="container-fluid border border-top-0">
        <div className="row">
          <div className="col-12 col-sm-2 pt-1 border-right">
            <p className="text-center">Days Plan</p>
            <div className="row border">
              {quotationData?.Days?.map((value, index) => {
                return (
                  <div
                    key={index + 1}
                    className={`col-lg-12 col-sm-3  d-flex gap-3 justify-content-center align-items-center 
                            px-1 my-1 cursor-pointer tab-hover ${
                              isActive == index + 1 && "light-primary-bg"
                            }`}
                    onClick={() => handleDayWiseView(value, index + 1)}
                  >
                    <div>
                      <i className="fa-solid fa-pen-to-square text-success font-size-12"></i>
                    </div>
                    <div>
                      <p className="m-0 d-block font-size-12">
                        <span className="font-weight-bold font-size-12">
                          Day {value?.Day}
                        </span>
                        | {value?.DestiniationName}
                      </p>
                      <p className="m-0 d-block font-size-12">{value?.DayTotal}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <DayWiseItinerary dayWiseData={dayWiseData} />
        </div>
      </div>
    </>
  );
};

export default Itineraries;
