import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Button from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";
import { motion } from "framer-motion";

export default function JoinForm(props) {
  const { title, subheading, data } = props;

  const teams = data;

  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [teamName, setTeamName] = useState("");
  const [count, setCount] = useState(0);

  const universities = [...new Set(teams.map((team) => team.school))];
  const types = [
    ...new Set(
      teams
        .filter((team) => team.school === selectedSchool)
        .map((team) => team.type)
    ),
  ];
  const sports = [
    ...new Set(
      teams
        .filter((team) => team.type === selectedType)
        .map((team) => team.activity)
    ),
  ];
  const availableTeams = teams.filter(
    (team) =>
      team.school === selectedSchool &&
      team.activity === selectedActivity &&
      team.type === selectedType
  );
  async function handleSubmit(e) {
    e.preventDefault();

    const req = await fetch(
      "http://ec2-184-73-129-175.compute-1.amazonaws.com:3003/groups/recGroups/add/65355ca3b0554119a2f81acc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          groupName: teamName,
        }),
      }
    );

    if (!req.ok) {
      console.log("Error during joining");
      return;
    }
    console.log("User joined successfuly");
  }

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
          <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>school</InputLabel>
              <Select
                value={selectedSchool}
                onChange={(e) => {
                  setSelectedSchool(e.target.value);
                  setSelectedActivity("");
                  setSelectedType("");
                  setTeamName("");
                  setCount((prev) => prev + 1);
                }}
                label="school"
              >
                {universities.map((uni, index) => (
                  <MenuItem key={index} value={uni}>
                    {uni}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>type</InputLabel>
              <Select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  setSelectedActivity("");
                  setCount((prev) => prev + 1);
                }}
                label="type"
                disabled={!selectedSchool}
              >
                {types.map((div, index) => (
                  <MenuItem key={index} value={div}>
                    {div}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Activity</InputLabel>
              <Select
                value={selectedActivity}
                onChange={(e) => {
                  setSelectedActivity(e.target.value);
                  setTeamName("");
                  setCount((prev) => prev + 1);
                }}
                label="Sport"
                disabled={!selectedType}
              >
                {sports.map((sport, index) => (
                  <MenuItem key={index} value={sport}>
                    {sport}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Team</InputLabel>
              <Select
                value={teamName}
                onChange={(e) => {
                  setTeamName(e.target.value);
                  setCount((prev) => prev + 1);
                }}
                label="Team"
                disabled={!selectedActivity}
              >
                {availableTeams && availableTeams.length > 0 ? (
                  availableTeams.map((team, index) => {
                    return (
                      <MenuItem key={index} value={team.teamName}>
                        {team.teamName} (Players: {team.playerCount})
                      </MenuItem>
                    );
                  })
                ) : (
                  <MenuItem value="">No Teams Found</MenuItem>
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
