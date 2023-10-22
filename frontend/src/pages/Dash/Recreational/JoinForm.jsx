import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Button from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";
import { motion } from "framer-motion";

export default function JoinForm(props) {
  const { title, subheading, join } = props;

  const teams = [
    {
      university: "University of Example A",
      sport: "Football",
      division: "Division A",
      teamName: "A Team",
      playerCount: 22,
    },
    {
      university: "University of Example A",
      sport: "Basketball",
      division: "Division B",
      teamName: "B Team",
      playerCount: 15,
    },
  ];

  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [count, setCount] = useState(0);

  const universities = [...new Set(teams.map((team) => team.university))];
  const sports = [
    ...new Set(
      teams
        .filter((team) => team.university === selectedUniversity)
        .map((team) => team.sport)
    ),
  ];
  const divisions = [
    ...new Set(
      teams
        .filter((team) => team.sport === selectedSport)
        .map((team) => team.division)
    ),
  ];
  const availableTeams = teams.filter(
    (team) =>
      team.university === selectedUniversity &&
      team.sport === selectedSport &&
      team.division === selectedDivision
  );

  async function handleSubmit(e) {
    e.preventDefault();
  }

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
              <InputLabel>University</InputLabel>
              <Select
                value={selectedUniversity}
                onChange={(e) => {
                  setSelectedUniversity(e.target.value);
                  setSelectedSport("");
                  setSelectedDivision("");
                  setSelectedTeam("");
                  setCount((prev) => prev + 1);
                }}
                label="University"
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
                value={selectedSport}
                onChange={(e) => {
                  setSelectedSport(e.target.value);
                  setSelectedDivision("");
                  setSelectedTeam("");
                  setCount((prev) => prev + 1);
                }}
                label="Sport"
                disabled={!selectedUniversity}
              >
                {sports.map((sport, index) => (
                  <MenuItem key={index} value={sport}>
                    {sport}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Division</InputLabel>
              <Select
                value={selectedDivision}
                onChange={(e) => {
                  setSelectedDivision(e.target.value);
                  setSelectedTeam("");
                  setCount((prev) => prev + 1);
                }}
                label="Division"
                disabled={!selectedSport}
              >
                {divisions.map((div, index) => (
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
                disabled={!selectedDivision}
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
