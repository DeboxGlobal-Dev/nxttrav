import React, { useEffect, useState, useContext } from "react";
import DayWiseItinerary from "./DayWiseItinerary";
import { quotationData } from "../../quotationdata";
import { quotationContext } from "../Quotation";

const Itineraries = () => {
  const [dayWiseData, setDayWiseData] = useState(null);
  const [isActive, setIsActive] = useState(1);
  const { quotationGlobalData, setQuotationGlobalData } =
    useContext(quotationContext);

  const handleDayWiseView = (value, num) => {
    setDayWiseData(value);
    setQuotationGlobalData(value);
    setIsActive(num);
  };

  useEffect(() => {
    const data = quotationData?.Days[0];
    setQuotationGlobalData(data);
    setDayWiseData(data);
  }, []);

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
                    className={`col-lg-12 col-sm-3  d-flex gap-3  align-items-center 
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
                      <p className="m-0 d-block font-size-12">
                        {value?.DayTotal}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row mt-2">
              <div className="12 position-relative">
                <input
                  type="text"
                  className="border rounded-pill outline-0 pl-1 pr-3 font-size-11 w-100"
                  placeholder="Select Itenarary Template"
                />
                <i className="fa-solid fa-magnifying-glass position-absolute quotation-search-icon"></i>
              </div>
              <div className="col-12 d-flex flex-column justify-content-center mt-1 px-3">
                <p className="text-primary font-size-12 m-0 cursor-pointer">2N Dubai, 3D Abu Dhabi</p>
                <p className="text-primary font-size-12 m-0 cursor-pointer">3N Dubai, 4D Abu Dhabi</p>
                <p className="text-primary font-size-12 m-0 cursor-pointer">4N Dubai, 5D Abu Dhabi</p>
              </div>
            </div>
          </div>
          <DayWiseItinerary dayWiseData={dayWiseData} />
        </div>
      </div>
    </>
  );
};

export default Itineraries;
