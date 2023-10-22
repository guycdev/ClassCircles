import React, { useState, useEffect } from "react";
import { Card, CardContent, TextField, Avatar, Box } from "@mui/material";
import styles from "./DashboardHome.module.css";
import { Settings } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";
import CustomSelect from "../../../components/CustomSelect";

const temp = {
  school: "University of Example",
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

export default function Profile(props) {
  const { data } = props;
  const { userData } = data;

  const [settingsActive, setSettingsActive] = useState(false);
  const [user, setuser] = useState({
    name: userData.name,
    email: userData.email,
    school: userData.university,
    department: userData.department,
    subjects: userData.subjects,
    hobbies: userData.hobbies,
  });

  function handleClick() {
    setSettingsActive((prev) => !prev);
  }

  useEffect(() => {
    // Logic to post data once the user reclicks the logo
  }, [settingsActive]);

  function handleChange(e) {
    const { name, value } = e.target;
    setuser((prev) => {
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
              <h3 className="fw-bold">Your Profile </h3>
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
              value={user.name}
              name="name"
              onChange={handleChange}
              style={{ pointerEvents: settingsActive ? "unset" : "none" }}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              value={user.email}
              name="email"
              onChange={handleChange}
              style={{ pointerEvents: settingsActive ? "unset" : "none" }}
            />

            <TextField
              fullWidth
              margin="normal"
              label="School"
              variant="outlined"
              value={user.school}
              name="school"
              onChange={handleChange}
              style={{ pointerEvents: settingsActive ? "unset" : "none" }}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Department"
              variant="outlined"
              value={user.department}
              name="department"
              onChange={handleChange}
              style={{ pointerEvents: settingsActive ? "unset" : "none" }}
            />
            <CustomSelect
              name="subjects"
              value={user.subjects}
              setFormData={setuser}
              options={[]}
              active={settingsActive}
            />
            <CustomSelect
              name="hobbies"
              value={user.hobbies}
              setFormData={setuser}
              options={[]}
              active={settingsActive}
            />
          </div>
        </ThemeProvider>
      </CardContent>
    </Card>
  );
}
