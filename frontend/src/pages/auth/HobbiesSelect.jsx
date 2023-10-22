import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";

const CustomSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  return (
    <Autocomplete
      multiple // Allow multiple selections
      value={selectedOptions}
      onChange={(event, newValue) => {
        setSelectedOptions(newValue);
      }}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      options={options}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select or Add" />}
      freeSolo // Allows adding custom values
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={index}
            label={option}
            onDelete={() => {
              const newOptions = [...selectedOptions];
              newOptions.splice(index, 1);
              setSelectedOptions(newOptions);
            }}
            {...getTagProps({ index })}
          />
        ))
      }
    />
  );
};

export default CustomSelect;
