import { useState } from "react";
import Box from "@mui/material/Box";
import TextInput from "./TextInput";
import CustomSelect from "./CustomSelect";
import FormRedirect from "./FormRedirect";
import Button from "../../components/Button";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    school: "",
    department: "",
    hobbies: [],
  });

  const hobbies = ["Reading", "Programming", "Hiking", "Sports"];

  const filledOut =
    formData.email &&
    formData.username &&
    formData.password &&
    formData.school &&
    formData.department &&
    formData.hobbies;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("test.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Data submitted successfully");
      } else {
        console.error("Failed to submit data:", await response.text());
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <>
      <h5>Create an Account</h5>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextInput
          name="email"
          type="email"
          handleChange={handleChange}
          required={true}
        />
        <TextInput
          name="username"
          type="text"
          handleChange={handleChange}
          required
        />
        <TextInput
          name="password"
          type="password"
          handleChange={handleChange}
          required
        />
        <TextInput
          name="school"
          type="school"
          handleChange={handleChange}
          required
        />
        <TextInput
          name="department"
          type="department"
          handleChange={handleChange}
          required
        />

        <CustomSelect
          name={hobbies}
          val={formData.hobbies}
          handleChange={handleChange}
        />

        {/*
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel>Subjects & Hobbies</InputLabel>
          <Select
            multiple
            value={formData.hobbies}
            label="Hobbies"
            onChange={handleChange}
            name="hobbies"
            required={true}
          >
            {hobbies.map((hobby, index) => (
              <MenuItem key={index} value={hobby}>
                {hobby}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        */}

        <FormRedirect
          text="Have an account ? "
          redirect={<span className="redirect-span">Login here</span>}
          path="../log-in"
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

export default SignUp;
