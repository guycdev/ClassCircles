import React, { useState, useEffect } from "react";
import { FormControl, TextField, IconButton, Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { motion } from "framer-motion";
import styles from "./Join.module.css";
import Button from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";

export default function CreateForm(props) {
  const { title, subheading } = props;

  const [school, setSchool] = useState("");
  const [department, setDepartment] = useState("");
  const [classInput, setClassInput] = useState("");
  const [groupName, setGroupName] = useState("");
  const [count, setCount] = useState(0);

  const handleSubmit = () => {
    const formData = {
      school: school,
      department: department,
      class: classInput,
      groupName: groupName,
    };
    console.log(formData);
    setSchool("");
    setDepartment("");
    setClassInput("");
    setGroupName("");
  };

  useEffect(() => {
    let newCount = 0;
    if (school !== "") newCount++;
    if (department !== "") newCount++;
    if (classInput !== "") newCount++;
    if (groupName !== "") newCount++;
    setCount(newCount);
  }, [school, department, classInput, groupName]);

  return (
    <motion.div
      className="col-6"
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
                label="Department"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              />
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
              <TextField
                label="Class"
                value={classInput}
                onChange={(e) => {
                  setClassInput(e.target.value);
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

            <div className="d-flex justify-content-center">
              <Button content="Create Group" style="primaryBtn" />
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
