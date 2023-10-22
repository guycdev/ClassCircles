import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "../../components/Button";
import FormRedirect from "./FormRedirect";
import { useNavigate } from "react-router-dom";

import TextInput from "./TextInput";

//Login auth for when backend auth is deployed / Action api from react-router is integrated
export async function action() {
  try {
    const formData = await obj.request.formData();
    const email = formData.get("email");
    const pass = formData.get("pass");

    const returnObj = {
      email: email,
      pass: pass,
    };

    const data = await fetch("http://testurl.com:3000/api/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(returnObj),
      credentials: "include",
    });
    if (data.status == 401) {
      return "User does not exist";
    }

    console.log("hi");

    return redirect("../dashboard");
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const filledOut = formData.email && formData.password;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  //Dummy auth
  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.email == "t@example.com" && formData.password == "Test123") {
      console.log("hui");
      navigate("/dashboard");
    } else {
      setErrorMessage("User does not exist");
    }
  };

  return (
    <>
      <h5>Sign in</h5>
      {errorMessage && (
        <h2 className="my-4 text-danger fw-bold">{errorMessage}</h2>
      )}
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
        >
          <Button content="LOGIN" style="primaryBtn" />
        </div>
      </Box>
    </>
  );
}
