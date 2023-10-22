import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "../../components/Button";
import FormRedirect from "./FormRedirect";

import TextInput from "./TextInput";

function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const filledOut = formData.email && formData.password;

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
        <TextInput name="email" type="text" handleChange={handleChange} />
        <TextInput
          name="password"
          type="password"
          handleChange={handleChange}
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <FormRedirect
          text="Don't have an account ? "
          redirect={<span className="redirect-span">Register here</span>}
          path="../sign-up"
        />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            opacity: !filledOut ? 0.5 : 1,
            pointerEvents: !filledOut ? "none" : "unset",
            transition: "all 0.3s",
          }}
          onClick={() => {
            console.log("hi");
          }}
        >
          <Button content="CREATE ACCOUNT" style="primaryBtn" />
        </div>
      </Box>
    </>
  );
}

export default LogIn;
