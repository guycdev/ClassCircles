import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { FormControl, Chip } from "@mui/material";

const CustomSelect = (props) => {
  const { handleChange, name, val } = props;

  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(val);

  const options = ["Reading", "Hiking", "Sports", "Programming"];

  function handleInputChange(event, newInputValue) {
    setInputValue(newInputValue);
    handleChange(event);
  }

  return (
    <FormControl fullWidth margin="normal" variant="outlined">
      <Autocomplete
        value={selectedOptions}
        onChange={(event, newValue) => {
          setSelectedOptions(newValue);
        }}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        options={options}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label="Hobbies" name="Hobbies" />
        )}
        freeSolo
        required
        name={name}
        multiple
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
    </FormControl>
  );
};

export default CustomSelect;
