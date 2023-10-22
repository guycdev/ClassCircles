import { useState } from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import TextInput from "./TextInput";
import CustomSelect from "./CustomSelect";

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
      <h5>Create an Account</h5>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextInput name="email" type="email" handleChange={handleChange} />
        <TextInput name="username" type="text" handleChange={handleChange} />
        <TextInput
          name="password"
          type="password"
          handleChange={handleChange}
        />

        <CustomSelect
          name="school"
          handleChange={handleChange}
          value={formData.school}
        />

        <CustomSelect
          name="department"
          handleChange={handleChange}
          value={formData.department}
        />

        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel>Subjects</InputLabel>
          <Select
            multiple
            value={formData.hobbies}
            label="Hobbies"
            onChange={handleChange}
            name="hobbies"
          >
            {hobbies.map((hobby, index) => (
              <MenuItem key={index} value={hobby}>
                {hobby}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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
          Create Account
        </Button>
      </Box>
    </>
  );
}

export default SignUp;
