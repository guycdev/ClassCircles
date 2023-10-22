import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";

const CustomSelect = (props) => {
  const [inputValue, setInputValue] = useState("123123");

  const { handleChange, name, val } = props;

  const options = ["Option 1", "Option 2", "Option 3"];

  const label = props.name[0].toUpperCase() + props.name.slice(1) + " *";

  function handleInputChange(event, newInputValue) {
    setInputValue(newInputValue);
    props.handleChange(event);
  }

  return (
    <FormControl fullWidth margin="normal" variant="outlined">
      <Autocomplete
        margin="normal"
        value={val}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        options={options}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label={label} name="school" />
        )}
        freeSolo
        required
        name={name}
      />
    </FormControl>
  );
};

export default CustomSelect;
