import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import JoinFull from "@mui/icons-material/JoinFull";
import Help from "@mui/icons-material/HelpOutline";
import Logo from "../../components/Logo";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function DashboardNav() {
  return (
    <motion.div
      initial={{
        x: -500,
      }}
      animate={{
        x: 0,
        transition: {
          duration: 0.7,
        },
      }}
    >
      <Drawer variant="permanent" className="nav-wrapper">
        <div className="d-flex gap-4 flex-column">
          <div id="logo-container" className="py-2 border-bottom">
            <Logo />
          </div>
          <List className="d-flex flex-column gap-4">
            <NavLink to="">
              <ListItem className="dashboard-nav-item rounded">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </NavLink>
            <NavLink to="join">
              <ListItem className="dashboard-nav-item rounded">
                <ListItemIcon>
                  <JoinFull />
                </ListItemIcon>
                <ListItemText primary="Join" />
              </ListItem>
            </NavLink>
            <NavLink to="support">
              <ListItem className="dashboard-nav-item rounded">
                <ListItemIcon>
                  <Help />
                </ListItemIcon>
                <ListItemText primary="Support" />
              </ListItem>
            </NavLink>
          </List>
        </div>
        <List className="d-flex flex-column gap-4">
          <NavLink to="..">
            <ListItem className="dashboard-nav-item rounded">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </motion.div>
  );
}
