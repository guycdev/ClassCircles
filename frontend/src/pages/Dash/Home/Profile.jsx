import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  TextField,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import styles from "./DashboardHome.module.css";
import { Settings } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";
import CustomSelect from "../../../components/CustomSelect";

export default function Profile() {
  const user = {
    school: "University of Example",
    schoolLogo: "https://path-to-school-logo.com/logo.png",
    department: "Computer Science",
    subjects: [
      "Data Structures",
      "Algorithms",
      "Web Development",
      "Database Systems",
    ],
    graduationYear: 2025,
    name: "John Doe",
    email: "johndoe@example.edu",
    hobbies: ["Reading", "Hiking", "Coding", "Photography"],
    funFact:
      "I once participated in a national coding competition and won second place!",
  };

  const [settingsActive, setSettingsActive] = useState(false);
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
    school: user.school,
    department: user.department,
    hobbies: user.hobbies,
  });

  function handleClick() {
    setSettingsActive((prev) => !prev);
  }

  useEffect(() => {
    // Logic to post data once the user reclicks the logo
  }, [settingsActive]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <Card className={`col-lg-4 card p-0`}>
      <CardContent>
        <ThemeProvider theme={theme}>
          <div className="border-bottom pb-1">
            <Box
              display="flex"
              alignItems="center"
              justifyContent={"space-between"}
            >
              <h3 className="fw-bold">Your Profile: </h3>
              <div onClick={handleClick}>
                <Avatar
                  alt="Profile Picture"
                  src={user.schoolLogo}
                  className={`avatar ${styles.settings}`}
                >
                  <Settings />
                </Avatar>
              </div>
            </Box>
            <p>
              {settingsActive
                ? "Re-click to save"
                : "Edit profile by clicking the icon"}
            </p>
          </div>
          <div
            className={`py-2 ${styles.profileCard} ${
              !settingsActive ? styles.active : ""
            }`}
          >
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              variant="outlined"
              value={userData.name}
              name="name"
              onChange={handleChange}
              style={{ pointerEvents: settingsActive ? "unset" : "none" }}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              value={userData.email}
              name="email"
              onChange={handleChange}
              style={{ pointerEvents: settingsActive ? "unset" : "none" }}
            />

            <TextField
              fullWidth
              margin="normal"
              label="School"
              variant="outlined"
              value={userData.school}
              name="school"
              onChange={handleChange}
              style={{ pointerEvents: settingsActive ? "unset" : "none" }}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Department"
              variant="outlined"
              value={userData.department}
              name="department"
              onChange={handleChange}
              style={{ pointerEvents: settingsActive ? "unset" : "none" }}
            />

            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel>Subjects</InputLabel>
              <Select multiple value={user.subjects} label="Subjects">
                {user.subjects.map((subject, index) => (
                  <MenuItem key={index} value={subject}>
                    {subject}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <CustomSelect
              name="hobbies"
              value={userData.hobbies}
              setFormData={setUserData}
            />
          </div>
        </ThemeProvider>
      </CardContent>
    </Card>
  );
}
