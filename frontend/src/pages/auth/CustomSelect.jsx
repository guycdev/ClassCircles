import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const CustomSelect = (props) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={props.value}
      onInputChange={props.handleChange}
      options={options}
      fullWidth
      renderInput={(params) => (
        <TextField {...params} label="School" name="school" />
      )}
      freeSolo // Allows adding custom values
      required
    />
  );
};

export default CustomSelect;
