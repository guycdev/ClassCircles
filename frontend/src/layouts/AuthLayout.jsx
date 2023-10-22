import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@emotion/react";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { Link } from "@mui/material";

import styles from "./auth.module.css";
import theme from "../theme";
import image from "../assets/students-studying.jpg";

function Copyright() {
  return (
    <p className={styles.copyright}>
      {"Copyright © "}
      <Link color="inherit" href="/">
        ClassCircles
      </Link>
      {" 2023."}
    </p>
  );
}

export default function AuthLayout(props) {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={styles.main}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            {props.children}
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
