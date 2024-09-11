import React, { useContext } from "react";
import { addQueryContext } from "./Addquery";

const Accomodation = () => {
  
  const { roomObject, paxObject, dropdownObject, queryObjects } =
    useContext(addQueryContext);
  const { PaxInfo, setPaxInfo } = paxObject;
  const { RoomInfo, setRoomInfo } = roomObject;
  const { dropdownState } = dropdownObject;
  const { queryFields, setQueryFields } = queryObjects;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryFields({ ...queryFields, [name]: value });
  };

  const handleRoomInfo = (e) => {
    const { name, value } = e.target;
    setRoomInfo({ ...RoomInfo, [name]: value });
  };

  return (
    <div className="col-12 col-sm query-box-shadow  py-1">
      <div className="row row-gap-2 p-0 pt-1 pb-2">
        <p className="m-0 fs-6 font-weight-bold">Accomodation</p>
        <div className="col-12 col-lg-12 px-3">
          <label htmlFor="hotel" className="m-0 p-0">
            Hotel Category
          </label>
          <div className="row column-gap-2 row-gap-2">
            {/* {dropdownState?.hotelCategory?.map((value, index) => {
                            return (
                              <div
                                className="col-2 form-div d-flex justify-content-center align-items-center"
                                key={index + 1}
                              >
                                <label
                                  htmlFor={value.UploadKeyword}
                                  className="m-0 pr-2"
                                >
                                  {value.Name}*
                                </label>
                                <input
                                  className="form-check-input m-0 p-0 ml-3"
                                  type="radio"
                                  name="hotelType"
                                  id={value?.UploadKeyword}
                                  value={value?.id}
                                  onChange={handleChange}
                                  defaultChecked={index == 0 ? true : false}
                                />
                              </div>
                            );
                          })}
                          {dropdownState?.hotelCategory?.length == 0 && (
                            <>
                              <div className="col-2 form-div d-flex justify-content-center align-items-center">
                                <label htmlFor="one-star" className="m-0 pr-2">
                                  1*
                                </label>
                                <input
                                  className="form-check-input m-0 p-0 ml-3"
                                  type="radio"
                                  name="hotelType"
                                  id="one-star"
                                  value="1"
                                  onChange={handleChange}
                                  defaultChecked
                                />
                              </div>
                              <div className="col-2 form-div d-flex justify-content-center align-items-center">
                                <label htmlFor="two-star" className="m-0 pr-2">
                                  2*
                                </label>
                                <input
                                  className="form-check-input m-0 p-0 ml-3"
                                  type="radio"
                                  name="hotelType"
                                  id="two-star"
                                  value="2"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="col-2 form-div d-flex justify-content-center align-items-center">
                                <label
                                  htmlFor="three-star"
                                  className="m-0 pr-2"
                                >
                                  3*
                                </label>
                                <input
                                  className="form-check-input m-0 p-0 ml-3"
                                  type="radio"
                                  name="hotelType"
                                  id="three-star"
                                  value="3"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="col-2 form-div d-flex justify-content-center align-items-center">
                                <label htmlFor="four-star" className="m-0 pr-2">
                                  4*
                                </label>
                                <input
                                  className="form-check-input m-0 p-0 ml-3"
                                  type="radio"
                                  name="hotelType"
                                  id="four-star"
                                  value="4"
                                  onChange={handleChange}
                                />
                              </div>
                            </>
                          )} */}
            <div className="col-2 form-div d-flex justify-content-center align-items-center">
              <label htmlFor="one-star" className="m-0 pr-2">
                1*
              </label>
              <input
                className="form-check-input m-0 p-0 ml-3"
                type="radio"
                name="HotelType"
                id="one-star"
                value="1"
                onChange={handleChange}
                defaultChecked
              />
            </div>
            <div className="col-2 form-div d-flex justify-content-center align-items-center">
              <label htmlFor="two-star" className="m-0 pr-2">
                2*
              </label>
              <input
                className="form-check-input m-0 p-0 ml-3"
                type="radio"
                name="HotelType"
                id="two-star"
                value="2"
                onChange={handleChange}
              />
            </div>
            <div className="col-2 form-div d-flex justify-content-center align-items-center">
              <label htmlFor="three-star" className="m-0 pr-2">
                3*
              </label>
              <input
                className="form-check-input m-0 p-0 ml-3"
                type="radio"
                name="HotelType"
                id="three-star"
                value="3"
                onChange={handleChange}
              />
            </div>
            <div className="col-2 form-div d-flex justify-content-center align-items-center">
              <label htmlFor="four-star" className="m-0 pr-2">
                4*
              </label>
              <input
                className="form-check-input m-0 p-0 ml-3"
                type="radio"
                name="HotelType"
                id="four-star"
                value="4"
                onChange={handleChange}
              />
            </div>
            <div className="col-2 form-div d-flex justify-content-center align-items-center">
              <label htmlFor="all" className="m-0 pr-2">
                All
              </label>
              <input
                className="form-check-input m-0 p-0 ml-3"
                type="radio"
                name="HotelType"
                id="all"
                value="0"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {dropdownState?.roomList?.map((room, ind) => {
          return (
            <div className="col-6 col-md-6 col-lg-3" key={ind + 1}>
              <label className="m-0 font-size-12">{room.Name}</label>
              <div>
                <input
                  type="text"
                  className="form-input-2 text-center p-0"
                  placeholder="0"
                  name={room?.Name?.split(" ")?.join("")}
                  value={RoomInfo[room?.Name?.split(" ")?.join("")]}
                  onChange={handleRoomInfo}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center pt-1">
                <div
                  className={`py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center ${
                              RoomInfo[room?.Name?.split(" ")?.join("")] == 1
                                ? "Active text-light"
                                : ""
                            }`}
                  style={{ height: "19px" }}
                  onClick={() =>
                    setRoomInfo({
                      ...RoomInfo,
                      [room?.Name?.split(" ")?.join("")]: 1,
                    })
                  }
                >
                  1
                </div>
                <div
                  className={`py-0 border rounded cursor-pointer green-hover padding-x
                            d-flex justify-content-center align-items-center  ${
                              RoomInfo[room?.Name?.split(" ")?.join("")] == 2
                                ? "Active text-light"
                                : ""
                            }`}
                  style={{ height: "19px" }}
                  onClick={() =>
                    setRoomInfo({
                      ...RoomInfo,
                      [room?.Name?.split(" ")?.join("")]: 2,
                    })
                  }
                >
                  2
                </div>
                <div
                  className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo[room?.Name?.split(" ")?.join("")] == 3
                                ? "Active text-light"
                                : ""
                            }`}
                  style={{ height: "19px" }}
                  onClick={() =>
                    setRoomInfo({
                      ...RoomInfo,
                      [room?.Name?.split(" ")?.join("")]: 3,
                    })
                  }
                >
                  3
                </div>
                <div
                  className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo[room?.Name?.split(" ")?.join("")] == 4
                                ? "Active text-light"
                                : ""
                            }`}
                  style={{ height: "19px" }}
                  onClick={() =>
                    setRoomInfo({
                      ...RoomInfo,
                      [room?.Name?.split(" ")?.join("")]: 4,
                    })
                  }
                >
                  4
                </div>
                <div
                  className={`py-0 border rounded cursor-pointer green-hover padding-x 
                            d-flex justify-content-center align-items-center ${
                              RoomInfo[room?.Name?.split(" ")?.join("")] == 5
                                ? "Active text-light"
                                : ""
                            }`}
                  style={{ height: "19px" }}
                  onClick={() =>
                    setRoomInfo({
                      ...RoomInfo,
                      [room?.Name?.split(" ")?.join("")]: 5,
                    })
                  }
                >
                  5
                </div>
              </div>
            </div>
          );
        })}

        <div className="col-6 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <p className="font-weight-bold m-0">
            Total Rooms :
            {Number(RoomInfo.SGLRoom == "" ? 0 : RoomInfo.SGLRoom) +
              Number(RoomInfo.DBLRoom == "" ? 0 : RoomInfo.DBLRoom) +
              Number(RoomInfo.TPLRoom == "" ? 0 : RoomInfo.TPLRoom) +
              Number(
                RoomInfo["ExtraBed(A)"] == "" ? 0 : RoomInfo["ExtraBed(A)"]
              ) +
              Number(RoomInfo.TWINRoom == "" ? 0 : RoomInfo.TWINRoom)}
          </p>
        </div>
        {PaxInfo.Adult > 0 && (
          <div className="col-12">
            <p className="py-1 px-1 m-0 paragraph-message">
              select {PaxInfo.Adult} single or {Math.ceil(PaxInfo.Adult / 2)}
              double rooms !
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Accomodation);
