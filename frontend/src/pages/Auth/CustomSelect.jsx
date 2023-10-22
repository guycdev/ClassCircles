import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";

const CustomSelect = (props) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

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
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        options={options}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label={label} name="school" />
        )}
        freeSolo
        required
      />
    </FormControl>
  );
};

export default CustomSelect;
