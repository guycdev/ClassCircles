import { TextField } from "@mui/material";

function TextInput(props) {
  const label = props.name[0].toUpperCase() + props.name.slice(1);

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name={props.name}
      label={label}
      type={props.type}
      id={props.name}
      onChange={props.handleChange}
    />
  );
}

export default TextInput;
