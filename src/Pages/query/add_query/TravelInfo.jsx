import React, { useState, useEffect, useContext } from "react";
import { eachDayOfInterval, format } from "date-fns";
import { addQueryContext } from "./Addquery";

const TravelInfo = () => {
  const { queryObjects, travelObject, dropdownObject } =
    useContext(addQueryContext);
  const { TravelDate, setTravelDate } = travelObject;
  const { queryFields, setQueryFields } = queryObjects;
  const { dropdownState } = dropdownObject;

  const [dayWiseNights, setDayWiseNights] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const [errors, setErrors] = useState();
  const fiftyYear = [];

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setTravelDate({ ...TravelDate, [name]: value });
  };

  function createDateArray() {
    const fromDate = new Date(
      TravelDate?.FromDate?.split("/")?.reverse()?.join("/")
    );
    const lastDate = new Date(
      TravelDate?.ToDate?.split("/")?.reverse()?.join("/")
    );
    const dateArray = eachDayOfInterval({ start: fromDate, end: lastDate }).map(
      (date) => format(date, "dd/MM/yyyy")
    );
    setDateArray(dateArray);
  }

  const dateDeleting = () => {
    const updatedArray = [...dateArray];
    updatedArray.pop();
    setDateArray(updatedArray);

    setTravelDate({
      Type: TravelDate?.Type,
      FromDate: TravelDate?.FromDate,
      ToDate: TravelDate?.ToDate,
      TotalNights:
        TravelDate?.TotalNights !== 0 ? TravelDate?.TotalNights - 1 : "",
      SeasonType: TravelDate?.SeasonType,
      SeasonYear: TravelDate?.SeasonYear,
    });
  };

  //Adding Date fromDate + Days = ToDate
  useEffect(() => {
    const dateStr = TravelDate?.FromDate;
    const days = Number(TravelDate?.TotalNights);
    let hours = 24,
      minute = 60,
      second = 60,
      millisecond = 1000;
    let nightsDayIntoTime = days * hours * minute * second * millisecond;
    const dateIntoFullTime = new Date(dateStr).getTime();
    const toDate = nightsDayIntoTime + dateIntoFullTime;
    const actualDate = new Date(toDate);
    const toDateYear = `${actualDate.getFullYear()}`;
    const toDateMonth = `${actualDate.getMonth() + 1}`;
    const toDateDay = `${actualDate.getDate()}`;
    const finalToDate = `${toDateYear}-${
      toDateMonth?.length == 2 ? toDateMonth : "0" + toDateMonth
    }-${toDateDay?.length == 2 ? toDateDay : "0" + toDateDay}`;
    setTravelDate({
      ...TravelDate,
      ToDate: TravelDate?.TotalNights != "" ? finalToDate : "",
    });
    createDateArray();
  }, [
    TravelDate?.FromDate,
    TravelDate?.TotalNights,
    TravelDate?.ToDate,
    // location.state,
  ]);

  //DayWise TravelInfo Night Calculation
  useEffect(() => {
    let nights = [];
    for (let i = 0; i <= TravelDate.TotalNights; i++) {
      nights.push(TravelDate.TotalNights > 0 ? i + 1 : "");
    }

    setDayWiseNights(nights);
  }, [TravelDate.TotalNights]);

  //City Filtering For Dropdown
  const handleDateDestination = (e) => {
    setTravelDestination({
      ...travelsDestination,
      [e.target.name]: e.target.value,
    });
  };

  //CURRENT YEAR + 50 YEAR DATA

  if (TravelDate?.Type == 2) {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i <= 50; i++) {
      fiftyYear.push(currentYear + i);
    }
  }

  return (
    <div className="col-12 col-sm query-box-shadow py-1">
      <div className="row row-gap-2 p-0 pt-1 pb-2 ">
        <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center">
          <p className="m-0 fs-6 font-weight-bold">Travel Information</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-input-2"
            name="Budget"
            placeholder="Budget"
          />
        </div>
        <div className="col-6 col-md-6 col-lg-4 form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Type"
            id="typedateorday"
            value="1"
            onChange={handleDateChange}
            defaultChecked
          />
          <label className="form-check-label m-0" htmlFor="typedateorday">
            Date Wise
          </label>
        </div>
        <div className="col-6 col-md-6 col-lg-4 form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Type"
            id="daywise"
            value="2"
            onChange={handleDateChange}
          />
          <label className="form-check-label m-0" htmlFor="daywise">
            Day Wise
          </label>
        </div>
        {TravelDate?.Type == "2" && (
          <>
            <div className="col-6 col-md-12 col-lg-6">
              <select
                type="select"
                className="form-input-2"
                name="SeasonType"
                value={queryFields.SeasonType}
                onChange={handleDateChange}
              >
                <option value="">select season</option>
                {dropdownState?.seasonList?.map((season, index) => {
                  return (
                    <option value={season?.id} key={index + 1}>
                      {season?.Name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-6 col-md-12 col-lg-6">
              <select
                type="select"
                className="form-input-2"
                name="SeasonYear"
                value={queryFields?.SeasonYear}
                onChange={handleDateChange}
              >
                <option value="">select year</option>
                {fiftyYear?.map((year, index) => {
                  return (
                    <option value={year} key={index + 1}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </>
        )}
        {TravelDate?.Type == "2" ? (
          ""
        ) : (
          <div className="col-6 col-md-12 col-lg-6">
            <div className="d-flex justify-content-between">
              <label htmlFor="adult" className="m-0">
                From Date
                <span className="text-danger">*</span>
              </label>
              {errors?.FromDate && (
                <span className="text-danger font-size-10">
                  {errors?.FromDate}
                </span>
              )}
            </div>
            <input
              type="date"
              className="form-input-2"
              name="FromDate"
              value={TravelDate?.FromDate}
              onChange={handleDateChange}
            ></input>
          </div>
        )}
        <div
          className={
            TravelDate?.Type == "2" ? "col-6" : "col-4 col-md-6 col-lg-3"
          }
        >
          <div className="d-flex gap-2">
            <label htmlFor="totalnights" className="m-0">
              TotalNights
              <span className="text-danger">*</span>
            </label>
            {errors?.TotalNights && (
              <span className="text-danger font-size-10">
                {errors?.TotalNights}
              </span>
            )}
          </div>
          <input
            type="text"
            className="form-input-2 text-center p-0"
            placeholder="0"
            name="TotalNights"
            value={TravelDate?.TotalNights}
            onChange={handleDateChange}
          />
        </div>
        <div className={"col-4 col-md-6 col-lg-2 mt-3"}>
          <button className="btn btn-primary p-1 height-30">Add Night</button>
        </div>
        {TravelDate?.TotalNights !== "" &&
        TravelDate?.TotalNights > 0 &&
        TravelDate?.FromDate !== "" &&
        TravelDate?.Type !== "2" ? (
          <div className="row p-2 ">
            <table className="table">
              <thead>
                <tr>
                  <th>Date/Day</th>
                  <th>Country</th>
                  <th>Destination</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {dateArray?.map((value, index) => {
                  return (
                    <tr key={index + 1}>
                      <td className="p-0 text-center">{value}</td>
                      <td className="p-1">
                        <select
                          type="select"
                          className="form-input-1"
                          style={{ height: "30px" }}
                          name={`Country${value.Id}`}
                          onChange={handleDateDestination}
                        >
                          <option value="1">Select</option>
                          {dropdownState.countryList.map((value, index) => {
                            return (
                              <option value={value.Id} key={index + 1}>
                                {value.Name}
                              </option>
                            );
                          })}
                        </select>
                      </td>
                      <td className="p-1">
                        <select
                          type="select"
                          className="form-input-1"
                          style={{ height: "30px" }}
                          name={`Destination${value.Id}`}
                          onChange={handleDateDestination}
                        >
                          <option value="1">Select</option>
                          {dropdownState?.destinationList?.map(
                            (destination, index) => {
                              return (
                                <option value={destination?.id} key={index + 1}>
                                  {destination?.Name}
                                </option>
                              );
                            }
                          )}
                        </select>
                      </td>
                      <td>
                        <i
                          className="fa-solid fa-trash pr-1
                                                text-danger cursor-pointer"
                          onClick={dateDeleting}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
        {TravelDate?.Type == "2" &&
          TravelDate?.TotalNights !== "" &&
          TravelDate?.TotalNights > 0 && (
            <div className="row p-2">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date/Day</th>
                    <th>Country</th>
                    <th>Destination</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {dayWiseNights?.map((value, index) => {
                    return (
                      <tr key={index + 1}>
                        <td className="p-0 text-center">Day {value}</td>
                        <td className="p-1">
                          <select
                            type="select"
                            className="form-input-1"
                            style={{ height: "30px" }}
                            name={`Country${index}`}
                          >
                            <option value="1">Select</option>
                            {dropdownState?.countryList?.map((value, index) => {
                              return (
                                <option value={value.Id} key={index + 1}>
                                  {value.Name}
                                </option>
                              );
                            })}
                          </select>
                        </td>
                        <td className="p-1">
                          <select
                            type="select"
                            className="form-input-1"
                            style={{ height: "30px" }}
                            name={`Destination${index}`}
                          >
                            <option value="1">Select</option>
                            {dropdownState?.destinationList?.map(
                              (destination, index) => {
                                return (
                                  <option
                                    value={destination.id}
                                    key={index + 1}
                                  >
                                    {destination.Name}
                                  </option>
                                );
                              }
                            )}
                          </select>
                        </td>
                        <td>
                          <i
                            className="fa-solid fa-trash pr-1
                                                text-danger cursor-pointer"
                            onClick={dateDeleting}
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
      </div>
    </div>
  );
};

export default React.memo(TravelInfo);
