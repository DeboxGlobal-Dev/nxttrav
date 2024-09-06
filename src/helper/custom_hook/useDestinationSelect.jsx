import React, { useState, useEffect } from "react";
import Select from "react-select";
import { axiosOther } from "../../http/axios/axios_new";

const customStyle = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "white",
    borderColor: "rgb(22, 155, 215)", // Change border color
    boxShadow: "none",
    "&:hover": {
      borderColor: "rgb(22, 155, 215)", // Border color on hover
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "rgb(22, 155, 215)", // Background color of selected option
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "white", // Text color of selected option
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(42, 205, 255)",
      color: "white", // Color of remove icon on hover
    },
  }),
};

const useDestinationSelect = () => {
  const [selectedDestination, setSelectedDestination] = useState([]);
  const [destinationList, setDestinationList] = useState([]);

  const handleMultiSelectChange = (selected) => {
    const selectedValue = selected
      ? selected.map((option) => option.value)
      : [];
    setSelectedDestination(selectedValue);
  };

  useEffect(() => {
    const postDataToServer = async () => {
      try {
        const { data } = await axiosOther.post("destinationlist");
        setDestinationList(data?.DataList);
      } catch (error) {
        console.log(error);
      }
    };
    postDataToServer();
  }, []);

  const options = destinationList?.map((destination) => {
    return {
      value: destination?.id,
      label: destination?.Name,
    };
  });

  const SelectInput = () => {
    return (
      <Select
        value={options.filter((option) =>
          selectedDestination.includes(option.value)
        )}
        onChange={handleMultiSelectChange}
        options={options}
        isMulti={true}
        styles={customStyle}
      />
    );
  };

  return { SelectInput, selectedDestination };
};

export default useDestinationSelect;
