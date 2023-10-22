import React from "react";
import styles from "./DashboardHome.module.css";
import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import message from "../../../assets/misc/msg.svg";
import { IconButton, Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function Teams() {
  function getRandomAvatar() {
    const randomIndex = Math.floor(Math.random() * 50);
    const gender = Math.floor(Math.random() * 2);
    if (gender) {
      return `https://xsgames.co/randomusers/assets/avatars/male/${randomIndex}.jpg`;
    }
    return `https://xsgames.co/randomusers/assets/avatars/female/${randomIndex}.jpg`;
  }

  const teams = [
    {
      teamName: "Alpha Warriors",
      teamLogo: getRandomAvatar(),
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
      teamLogo: getRandomAvatar(),
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
      teamLogo: getRandomAvatar(),
      memberCount: 3,
      members: [
        "william.moore@gamma.com",
        "mary.lee@gamma.com",
        "joseph.adams@gamma.com",
      ],
    },
    {
      teamName: "Alpha Warriors",
      teamLogo: getRandomAvatar(),
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
      teamLogo: getRandomAvatar(),
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
      teamLogo: getRandomAvatar(),
      memberCount: 3,
      members: [
        "william.moore@gamma.com",
        "mary.lee@gamma.com",
        "joseph.adams@gamma.com",
      ],
    },
  ];

  const teamElements = teams.map((team, index) => {
    let emails = "";
    team.members.forEach((email) => {
      emails += email + ",";
    });
    emails = emails.slice(0, -1);
    return (
      <motion.div
        className={`d-flex px-1 py-2 justify-content-between align-items-center ${styles.team}`}
        key={index}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5 + 0.2 * index,
          },
        }}
      >
        <div className="d-flex gap-3 align-items-center">
          <img
            src={team.teamLogo}
            alt={`${team.name} logo`}
            className={`rounded ${styles.teamImg}`}
          />
          <h5>{team.teamName}</h5>
          <div className={styles.helpContainer}>
            <Tooltip
              title={`${team.teamName} has ${team.memberCount} members`}
              arrow
            >
              <IconButton>
                <HelpOutlineIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <a href={`mailto:${emails}`} className={`svg ${styles.messageSVG}`}>
            <ReactSVG src={message} />
          </a>
        </div>
      </motion.div>
    );
  });

  return (
    <div className={`col-lg-7 card gap-4`}>
      <div className="pb-1 border-bottom">
        <h3 className="fw-bold">Your Teams </h3>
        <p>Use the chat icon to get in touch with your group members</p>
      </div>
      <div className={styles.teamsContainer}>{teamElements}</div>
    </div>
  );
}
