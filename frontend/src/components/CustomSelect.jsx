import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { FormControl, Chip } from "@mui/material";

const CustomSelect = (props) => {
  const { name, value, setFormData, options, active } = props;

  const [inputValue, setInputValue] = useState("");
  const label = name[0].toUpperCase() + name.slice(1);

  function handleChange(event, newValue) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  }

  console.log(inputValue);

  function handleDelete(event) {
    const index = event.key;
    const newOptions = [...value];
    newOptions.splice(index, 1);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newOptions,
    }));
  }

  console.log(active);

  return (
    <FormControl fullWidth margin="normal" variant="outlined">
      <Autocomplete
        value={value}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={(event, newValue) => setInputValue(newValue)}
        options={options}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label={label} name={name} />
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
              onDelete={handleDelete}
              {...getTagProps({ index })}
            />
          ))
        }
        disabled={!(active == undefined || active)}
      />
    </FormControl>
  );
};

export default CustomSelect;
