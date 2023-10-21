import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import School from "@mui/icons-material/School";
import Sports from "@mui/icons-material/SportsBasketball";
import Logo from "../../components/Logo";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Dashboard.module.css";

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
      className="col-3"
    >
      <Drawer variant="permanent" className={styles.navWrapper}>
        <div className="d-flex gap-4 flex-column">
          <div id="logo-container" className="py-2 border-bottom">
            <Logo />
          </div>
          <List className="d-flex flex-column gap-4">
            <NavLink
              to=""
              className={({ isActive }) => {
                return isActive ? styles.activeDashboardSelection : "";
              }}
              end
            >
              <ListItem className={`${styles.dashboardNavItem} rounded`}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </NavLink>
            <NavLink
              to="education"
              className={({ isActive }) => {
                return isActive ? styles.activeDashboardSelection : "";
              }}
            >
              <ListItem className={`${styles.dashboardNavItem} rounded`}>
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText primary="Education" />
              </ListItem>
            </NavLink>
            <NavLink
              to="recreation"
              className={({ isActive }) => {
                return isActive ? styles.activeDashboardSelection : "";
              }}
            >
              <ListItem className={`${styles.dashboardNavItem} rounded`}>
                <ListItemIcon>
                  <Sports />
                </ListItemIcon>
                <ListItemText primary="Athletics & Recreational" />
              </ListItem>
            </NavLink>
          </List>
        </div>
        <List className="d-flex flex-column gap-4">
          <NavLink to="..">
            <ListItem className={`${styles.dashboardNavItem} rounded`}>
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
