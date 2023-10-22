import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Button from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";
import { motion } from "framer-motion";

export default function JoinForm(props) {
  const { title, subheading, data } = props;

  const groups = [
    {
      school: "University of Example A",
      department: "Computer Science",
      class: "Data Structures",
      groupName: "CompSci Coders A",
      memberCount: 15,
    },
    {
      school: "University of Example A",
      department: "Computer Science",
      class: "Web Development",
      groupName: "Web Wizards A",
      memberCount: 10,
    },
    {
      school: "University of Example A",
      department: "Business",
      class: "Marketing 101",
      groupName: "Biz Masters A",
      memberCount: 8,
    },
    {
      school: "University of Example B",
      department: "Computer Science",
      class: "Database Systems",
      groupName: "DB Experts B",
      memberCount: 20,
    },
    {
      school: "University of Example B",
      department: "Computer Science",
      class: "Web Development",
      groupName: "Web Enthusiasts B",
      memberCount: 12,
    },
    {
      school: "University of Example A",
      department: "Computer Science",
      class: "Data Structures",
      groupName: "Data Struct Pioneers A",
      memberCount: 18,
    },
    {
      school: "University of Example B",
      department: "Computer Science",
      class: "Web Development",
      groupName: "Web Innovators B",
      memberCount: 14,
    },
    {
      school: "University of Example A",
      department: "Computer Science",
      class: "Web Development",
      groupName: "Web Developers A+",
      memberCount: 9,
    },
    {
      school: "University of Example A",
      department: "Computer Science",
      class: "Data Structures",
      groupName: "Structure Enthusiasts A",
      memberCount: 16,
    },
  ];

  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [count, setCount] = useState(0);

  const schools = [...new Set(groups.map((group) => group.school))];
  const departments = [
    ...new Set(
      groups
        .filter((group) => group.school === selectedSchool)
        .map((group) => group.department)
    ),
  ];
  const classes = [
    ...new Set(
      groups
        .filter((group) => group.department === selectedDepartment)
        .map((group) => group.class)
    ),
  ];
  const availableGroups = groups.filter(
    (group) =>
      group.school === selectedSchool &&
      group.department === selectedDepartment &&
      group.class === selectedClass
  );

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
          delay: 0.25,
          duration: 0.7,
        },
      }}
    >
      <div className="card p-3">
        <div className="border-bottom p-1">
          <h3>{title}</h3>
          <p>{subheading}</p>
        </div>
        <div className="my-3">
          <ProgressBar progress={count} inputCount={4} />
          <form className="d-flex flex-column gap-3">
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>School</InputLabel>
              <Select
                value={selectedSchool}
                onChange={(e) => {
                  setSelectedSchool(e.target.value);
                  setSelectedDepartment("");
                  setSelectedClass("");
                  setCount((prev) => prev + 1);
                }}
                label="School"
              >
                {schools.map((school, index) => (
                  <MenuItem key={index} value={school}>
                    {school}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Department</InputLabel>
              <Select
                value={selectedDepartment}
                onChange={(e) => {
                  setSelectedDepartment(e.target.value);
                  setCount((prev) => prev + 1);
                  setSelectedClass("");
                }}
                label="Department"
                disabled={!selectedSchool}
              >
                {departments.map((department, index) => (
                  <MenuItem key={index} value={department}>
                    {department}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Class</InputLabel>
              <Select
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(e.target.value);
                  setCount((prev) => prev + 1);
                }}
                label="Class"
                disabled={!selectedDepartment}
              >
                {classes.map((cls, index) => (
                  <MenuItem key={index} value={cls}>
                    {cls}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Group</InputLabel>
              <Select
                value={selectedGroup}
                onChange={(e) => {
                  setSelectedGroup(e.target.value);
                  setCount((prev) => prev + 1);
                }}
                disabled={!selectedClass}
                label="Group"
              >
                {availableGroups && availableGroups.length > 0 ? (
                  availableGroups.map((group, index) => {
                    return (
                      <MenuItem key={index} value={group.groupName}>
                        {group.groupName} (Members: {group.memberCount})
                      </MenuItem>
                    );
                  })
                ) : (
                  <MenuItem value="">No Groups Found</MenuItem>
                )}
              </Select>
            </FormControl>
            <div className="d-flex justify-content-center">
              <Button content="Join" style="primaryBtn" />
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
