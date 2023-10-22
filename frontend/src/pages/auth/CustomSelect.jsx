import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const CustomSelect = (props) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const options = ["Option 1", "Option 2", "Option 3"];

  const label = props.name[0].toUpperCase() + props.name.slice(1);

  function handleInputChange(event, newInputValue) {
    setInputValue(newInputValue);
    props.handleChange(event);
  }

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      options={options}
      fullWidth
      renderInput={(params) => (
        <TextField {...params} label={label} name="school" />
      )}
      freeSolo // Allows adding custom values
      required
    />
  );
};

export default CustomSelect;
