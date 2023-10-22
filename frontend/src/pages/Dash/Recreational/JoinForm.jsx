import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Button from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";
import { motion } from "framer-motion";

export default function JoinForm(props) {
  const { title, subheading, join } = props;

  const teams = [
    {
      school: "school of Example A",
      activity: "Football",
      type: "type A",
      teamName: "A Team",
      playerCount: 22,
    },
    {
      school: "school of Example A",
      activity: "Basketball",
      type: "type B",
      teamName: "B Team",
      playerCount: 15,
    },
  ];

  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [count, setCount] = useState(0);

  const universities = [...new Set(teams.map((team) => team.school))];
  const sports = [
    ...new Set(
      teams
        .filter((team) => team.school === selectedSchool)
        .map((team) => team.sport)
    ),
  ];
  const types = [
    ...new Set(
      teams
        .filter((team) => team.sport === selectedActivity)
        .map((team) => team.type)
    ),
  ];
  const availableTeams = teams.filter(
    (team) =>
      team.school === selectedSchool &&
      team.sport === selectedActivity &&
      team.type === selectedType
  );

  async function handleSubmit(e) {
    e.preventDefault();
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
          <form className="d-flex flex-column gap-3">
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>school</InputLabel>
              <Select
                value={selectedSchool}
                onChange={(e) => {
                  setSelectedSchool(e.target.value);
                  setSelectedActivity("");
                  setSelectedType("");
                  setSelectedTeam("");
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
              <InputLabel>Sport</InputLabel>
              <Select
                value={selectedActivity}
                onChange={(e) => {
                  setSelectedActivity(e.target.value);
                  setSelectedType("");
                  setSelectedTeam("");
                  setCount((prev) => prev + 1);
                }}
                label="Sport"
                disabled={!selectedSchool}
              >
                {sports.map((sport, index) => (
                  <MenuItem key={index} value={sport}>
                    {sport}
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
                  setSelectedTeam("");
                  setCount((prev) => prev + 1);
                }}
                label="type"
                disabled={!selectedActivity}
              >
                {types.map((div, index) => (
                  <MenuItem key={index} value={div}>
                    {div}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Team</InputLabel>
              <Select
                value={selectedTeam}
                onChange={(e) => {
                  setSelectedTeam(e.target.value);
                  setCount((prev) => prev + 1);
                }}
                label="Team"
                disabled={!selectedType}
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
