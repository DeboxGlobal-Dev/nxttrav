import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "1", label: "Noida" },
  { value: "2", label: "Gurgaon" },
  { value: "3", label: "Delhi" },
  { value: "4", label: "Mumbai" },
  { value: "5", label: "Dubai" },
  { value: "6", label: "Reyadh" },
  { value: "7", label: "Lahore" },
  { value: "8", label: "Srinagar" },
  { value: "9", label: "Wesbangal" },
];

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

  const handleMultiSelectChange = (selected) => {
    const selectedValue = selected
      ? selected.map((option) => option.value)
      : [];
      setSelectedDestination(selectedValue);
  };

  const SelectInput = () => {
    return (
      <Select
        value={options.filter((option) => selectedDestination.includes(option.value))}
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
