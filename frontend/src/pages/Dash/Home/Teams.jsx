import React from "react";
import styles from "./DashboardHome.module.css";
import { ListItemIcon } from "@mui/material";
import Message from "@mui/icons-material/Message";

export default function Teams() {
  const teams = [
    {
      teamName: "Alpha Warriors",
      teamLogo: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      memberCount: 5,
      members: [
        "john.doe@alpha.com",
        "jane.smith@alpha.com",
        "bob.jones@alpha.com",
        "alice.martin@alpha.com",
        "charlie.clark@alpha.com",
      ],
    },
    {
      teamName: "Beta Champions",
      teamLogo: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      memberCount: 4,
      members: [
        "michael.white@beta.com",
        "lucy.brown@beta.com",
        "thomas.hall@beta.com",
        "susan.taylor@beta.com",
      ],
    },
    {
      teamName: "Gamma Titans",
      teamLogo: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      memberCount: 3,
      members: [
        "william.moore@gamma.com",
        "mary.lee@gamma.com",
        "joseph.adams@gamma.com",
      ],
    },
    {
      teamName: "Alpha Warriors",
      teamLogo: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      memberCount: 5,
      members: [
        "john.doe@alpha.com",
        "jane.smith@alpha.com",
        "bob.jones@alpha.com",
        "alice.martin@alpha.com",
        "charlie.clark@alpha.com",
      ],
    },
    {
      teamName: "Beta Champions",
      teamLogo: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      memberCount: 4,
      members: [
        "michael.white@beta.com",
        "lucy.brown@beta.com",
        "thomas.hall@beta.com",
        "susan.taylor@beta.com",
      ],
    },
    {
      teamName: "Gamma Titans",
      teamLogo: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      memberCount: 3,
      members: [
        "william.moore@gamma.com",
        "mary.lee@gamma.com",
        "joseph.adams@gamma.com",
      ],
    },
  ];

  const teamElements = teams.map((team, index) => {
    return (
      <div
        className={`d-flex px-1 py-2 justify-content-between align-items-center ${styles.team}`}
        key={index}
      >
        <div className="d-flex gap-3 align-items-center">
          <img
            src={team.teamLogo}
            alt={`${team.name} logo`}
            className="rounded"
          />
          <h5>{team.teamName}</h5>
        </div>
        <div className={styles.contactContainer}>
          <ListItemIcon>
            <Message />
          </ListItemIcon>
        </div>
      </div>
    );
  });

  return (
    <div className={`col-lg-7 card gap-4`}>
      <div className="pb-1 border-bottom">
        <h3 className="fw-bold">Your Teams: </h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div className={styles.teamsContainer}>{teamElements}</div>
    </div>
  );
}
