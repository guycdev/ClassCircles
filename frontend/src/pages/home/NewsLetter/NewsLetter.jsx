import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const NewsletterSubscribe = () => {
  return (
    <div className="card container my-5 d-flex justify-content-center align-items-center">
      <Typography variant="h3" gutterBottom>
        Subscribe to our newsletter
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Don't miss the chance to be one of the first to know about our news and
        updates.
      </Typography>
      <Box
        width="100%"
        maxWidth={400}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={2}
      >
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Your Email Address"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  size="large"
                  startIcon={<SendIcon />}
                  onClick={() => {
                    // Handle subscription logic here
                  }}
                  sx={{
                    color: "#f1a7b0",
                  }}
                >
                  Subscribe
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </div>
  );
};

export default NewsletterSubscribe;
