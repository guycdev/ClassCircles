import React, { useState, useEffect } from "react";
import {
  FormControl,
  TextField,
  IconButton,
  Tooltip,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { motion } from "framer-motion";
import styles from "../Education/Join.module.css";
import Button from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";

export default function CreateForm(props) {
  const { title, subheading } = props;

  const [school, setSchool] = useState("");
  const [type, setType] = useState("");
  const [activity, setActivity] = useState("");
  const [groupName, setGroupName] = useState("");
  const [count, setCount] = useState(0);

  const filledOut = school && type && activity && groupName;

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      school: school,
      type: type,
      activity: activity,
      groupName: groupName,
    };
    try {
      const userId = "someUserId";
      const serverEndpoint = `http://localhost:3000/api/groups/addEduGroup?userId=${userId}`;

      const response = await fetch(serverEndpoint, {
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
    setSchool("");
    setType("");
    setActivity("");
    setGroupName("");
  }

  useEffect(() => {
    let newCount = 0;
    if (school !== "") newCount++;
    if (type !== "") newCount++;
    if (activity !== "") newCount++;
    if (groupName !== "") newCount++;
    setCount(newCount);
  }, [school, type, activity, groupName]);

  return (
    <motion.div
      className="col-xxl-6 col-12"
      initial={{
        opacity: 0,
        x: 1250,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.45,
          duration: 0.7,
        },
      }}
    >
      <div
        className={`card p-3 ${styles.createCard}d-flex flex-column justify-content-between`}
      >
        <div className="border-bottom p-1 position-relative">
          <h3>{title}</h3>
          <p>{subheading}</p>
          <div className={styles.helpContainer}>
            <Tooltip
              title="Our moderation team will contact you with more detail upon group approval"
              arrow
            >
              <IconButton>
                <HelpOutlineIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="my-3">
          <ProgressBar progress={count} inputCount={4} />
          <form className="d-flex flex-column gap-3">
            <FormControl fullWidth variant="outlined" margin="normal">
              <TextField
                label="School"
                value={school}
                onChange={(e) => {
                  setSchool(e.target.value);
                }}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                value={type}
                label="Type"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <MenuItem value="Leisure">Leisure</MenuItem>
                <MenuItem value="Athletic">Athletic</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <TextField
                label="Activity"
                value={activity}
                onChange={(e) => {
                  setActivity(e.target.value);
                }}
              />
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
              <TextField
                label="Group Name"
                value={groupName}
                onChange={(e) => {
                  setGroupName(e.target.value);
                }}
              />
            </FormControl>

            <div
              className="d-flex justify-content-center"
              style={{
                opacity: !filledOut ? 0.5 : 1,
                pointerEvents: !filledOut ? "none" : "unset",
                transition: "all 0.3s",
              }}
              onClick={() => {
                console.log("hi");
              }}
            >
              <Button content="Create Group" style="primaryBtn" />
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
