import React, { useState, useEffect } from "react";
import {
  FormControl,
  TextField,
  IconButton,
  Tooltip,
  Select,
  MenuItem,
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

  const handleSubmit = () => {
    const formData = {
      school: school,
      type: type,
      activity: activity,
      groupName: groupName,
    };
    console.log(formData);
    setSchool("");
    setType("");
    setActivity("");
    setGroupName("");
  };

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
              <TextField
                label="Type"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
                placeholder="Leisure or Athletic"
              />
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <Select
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
                label="Type"
              >
                <MenuItem value="Leisure">Leisure</MenuItem>
                <MenuItem value="Athletic">Athletic</MenuItem>
              </Select>
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

            <div className="d-flex justify-content-center">
              <Button content="Create Group" style="primaryBtn" />
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
