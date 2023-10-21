import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

import TextInput from "./TextInput";

function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    /* 
    User authentication here
    */
  };

  return (
    <>
      <h5>Sign in</h5>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextInput name="username" type="text" handleChange={handleChange} />
        <TextInput
          name="password"
          type="password"
          handleChange={handleChange}
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          sx={{
            mt: 3,
            mb: 2,
            bgcolor: "primary.main",
            color: "text.primary",
          }}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
}

export default LogIn;
