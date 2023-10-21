import React, { useState } from "react";
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

export default function Profile() {
  const [settingsActive, setSettingsActive] = useState(false);

  const user = {
    school: "University of Example",
    schoolLogo: "https://path-to-school-logo.com/logo.png", // Replace with actual path or URL
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

  function handleClick() {
    setSettingsActive((prev) => !prev);
  }

  return (
    <Card variant="outlined" className={`col-lg-4 card`}>
      <CardContent>
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
              : "Edit profile by clicking the cog"}
          </p>
        </div>
        <div className={`py-2 ${styles.profileCard}`}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            variant="outlined"
            value={user.name}
            style={{ pointerEvents: settingsActive ? "unset" : "none" }}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            variant="outlined"
            value={user.email}
            style={{ pointerEvents: settingsActive ? "unset" : "none" }}
          />

          <TextField
            fullWidth
            margin="normal"
            label="School"
            variant="outlined"
            value={user.school}
            style={{ pointerEvents: settingsActive ? "unset" : "none" }}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Department"
            variant="outlined"
            value={user.department}
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
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Hobbies</InputLabel>
            <Select multiple value={user.hobbies} label="Hobbies">
              {user.hobbies.map((hobby, index) => (
                <MenuItem key={index} value={hobby}>
                  {hobby}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </CardContent>
    </Card>
  );
}
