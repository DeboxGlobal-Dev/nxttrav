import React, {useState, useEffect} from "react";
import { suggestedPackageData } from "../QueryInitialValue";


const DestinationTemplate = () => {
  const [filteredPackage, setFilteredPackage] = useState([]);
  const [suggestedPackage, setSuggestedPackage] = useState("");

  useEffect(() => {
    if (suggestedPackage !== "") {
      const filtered = suggestedPackageData.filter((value) => {
        return value.PackageName?.toLowerCase()
          .replace(/\s/g, "")
          .includes(suggestedPackage?.toLowerCase().replace(/\s/g, ""));
      });
      setFilteredPackage(filtered);
    } else {
      setFilteredPackage(suggestedPackageData);
    }
  }, [suggestedPackage]);

  const handleSuggestPackage = (value) => {
    const queryValue = JSON.parse(JSON.stringify(value));

    delete queryValue.RoomInfo;
    delete queryValue?.PaxInfo;
    delete queryValue.TravelDate;
    delete queryValue.ValueAddedServices;

    const { Adult, Child, Infant } = value?.PaxInfo[0];
    const roomValue = value.RoomInfo[0];
    const dateValue = value.TravelDate[0];

    setQueryFields({ ...queryValue });
    setRoomInfo({ ...roomValue });
    setTravelDate({ ...dateValue });

    dispatch({ type: "SET", value: Number(Adult), counter: "counter1" });
    dispatch({ type: "SET", value: Number(Child), counter: "counter2" });
    dispatch({ type: "SET", value: Number(Infant), counter: "counter3" });
  };

  const handleSearchSuggestedPackage = (e) => {
    setSuggestedPackage(e.target.value);
  };
  
  return (
    <div className="col-12 col-sm-7 border rounded p-2">
      <h6 className="font-weight-bold">Destination Template</h6>
      <div>
        <input
          type="text"
          placeholder="Search Destination"
          className="form-input-3 rounded-pill"
          name="SuggestedPackage"
        />
        {filteredPackage != "" && (
          <label htmlFor="" className="font-size-12">
            Click to select the Destination
          </label>
        )}
      </div>
      {filteredPackage?.map((value, index) => {
        return (
          <div
            className="padding-2 d-flex align-items-center border rounded cursor-pointer mt-1"
            key={index + 1}
            onClick={() => handleSuggestPackage(value)}
          >
            <div>
              <img
                src={value.PackageImage}
                alt={value.PackageName}
                style={{ height: "35px", width: "35px" }}
                className="rounded"
              />
            </div>
            <div className="pl-2">
              <p className="font-size-12 font-weight-bold m-0 p-0">
                {value.PackageName}
              </p>
            </div>
          </div>
        );
      })}
      {filteredPackage == "" && (
        <p className="text-center font-weight-bold mt-3">
          No Destination Matched
        </p>
      )}
    </div>
  );
};

export default React.memo(DestinationTemplate);
