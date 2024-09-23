import React, { useState } from "react";
import data from "../quotationdata";
import { quotationLabel } from "../quotationdata";
import Activity from "/global_assets/images/qoutation/activity.png";

const DayWiseItinerary = ({ dayWiseData }) => {
  const [serviceList, setServiceList] = useState(data);
  const [activeCard, setActiveCard] = useState(null);

  const handleDropServiceCard = (position) => {
    // console.log(`${activeCard} is going to place at the ${position}`);

    if (activeCard == null || activeCard === undefined) return null;

    const serviceToMove = serviceList[activeCard];

    const updatedService = serviceList.filter(
      (service, index) => index != activeCard
    );
    updatedService.splice(position, 0, { ...serviceToMove });
    setServiceList(updatedService);
  };

  return (
    <div className="col-12 col-lg-10">
      <div className="light-primary-bg mt-2 d-inline-block p-1 rounded">
        {`Day ${dayWiseData?.Day} | ${dayWiseData?.DestiniationName} | ${dayWiseData?.DayTotal}`}
      </div>
      <div className="col-12 border mt-1 p-0">
        <p className="border-bottom m-0 px-1">First Day Delhi</p>
        <p className="px-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          eaque dolorum ducimus ut quis, repellendus magni maiores officiis esse
          in, quaerat doloremque? Distinctio totam sit corrupti corporis
          voluptas vero quis itaque inventore in. Tenetur ad praesentium quasi
          dolores? Dolore ex iure, velit sed impedit eaque unde est a, ut nihil
          consectetur! Ratione dicta ullam molestiae dolor quis totam enim esse
          adipisci
        </p>
      </div>
      <div className="col-12 p-0 mt-2 gap-1">
        {dayWiseData?.DayServices?.map((Servicevalue, index) => {
          return (
            <div
              key={index + 1}
              className="row border-bottom py-1 row-gap-2 service-drag-card grab-cursor"
              draggable
              onDragStart={() => setActiveCard(index)}
              onDrop={() => handleDropServiceCard(index)}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="col-md-1 col-12">
                <div className="row">
                  <div className="col-12 d-flex flex-column align-items-md-center">
                    <p className="font-weight-bold font-size-11 m-0">
                      {Servicevalue?.ServiceType}
                    </p>
                    <img className="icon-img" src={Activity} alt="arrival" />
                  </div>
                </div>
              </div>
              <div className="col-10">
                <div className="row">
                  {quotationLabel
                    .filter(
                      (labelValue) =>
                        labelValue?.ServiceType?.toLowerCase() ==
                        Servicevalue?.ServiceType?.toLowerCase()
                    )[0]
                    ?.Label?.map((label, index) => {
                      return (
                        <div className="col-md col-sm-3 col-6" key={index + 1}>
                          <p className="font-size-10 text-secondary text-flow">
                            {label}
                          </p>
                        </div>
                      );
                    })}
                </div>
                <div className="row">
                  {Servicevalue?.ServiceDetails?.map((item, index) => {
                    return (
                      <>
                        {Servicevalue?.ServiceType?.toLowerCase() ==
                          "hotel" && (
                          <>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                          </>
                        )}
                        {Servicevalue?.ServiceType?.toLowerCase() ==
                          "arrival" && (
                          <>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                          </>
                        )}
                        {Servicevalue?.ServiceType?.toLowerCase() ==
                          "departure" && (
                          <>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                          </>
                        )}
                        {Servicevalue?.ServiceType?.toLowerCase() ==
                          "monument" && (
                          <>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                          </>
                        )}
                        {Servicevalue?.ServiceType?.toLowerCase() ==
                          "activity" && (
                          <>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                            <div
                              className="col-md col-sm-3 col-6"
                              key={index + 1}
                            >
                              <p className="font-size-10 font-weight-bold text-flow">
                                {item?.ItemName}
                              </p>
                            </div>
                          </>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="col-1">
                <div className="row">
                  <div className="col pr-0 d-flex justify-content-md-end">
                    <div className="d-flex flex-column">
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
                  <div
                    className=" p-0 d-flex justify-content-md-end"
                    style={{ width: "30px" }}
                  >
                    <div className="d-flex flex-column bg-primary vertical-text p-0">
                      DRAG
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DayWiseItinerary;
