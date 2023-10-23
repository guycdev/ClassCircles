import React from "react";
import { Typography, Rating, Avatar, Box } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "16px",
});

const StatBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const TestimonialBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const TestimonialSection = () => {
  return (
    <div className="container my-5 ">
      <div className="row gap-1">
        <div className="col-12 col-md-2">
          <StatBox className="text-start d-flex flex-row flex-md-column justify-content-between h-100">
            <div>
              <Typography
                variant="h3"
                color="var(--primary)"
                className="fw-bold"
              >
                100+
              </Typography>
              <Typography variant="h5" className="fw-bold">
                Groups
              </Typography>
            </div>
            <div>
              <Typography
                variant="h3"
                color="var(--primary)"
                className="fw-bold"
              >
                300+
              </Typography>
              <Typography variant="h5" className="fw-bold">
                Students
              </Typography>
            </div>
          </StatBox>
        </div>
        <div className="col-md-9 container col-12">
          <div className="row flex-column flex-md-row gap-4 gap-md-0">
            <div className="col-12 col-md-4 h-100">
              <TestimonialBox className="card d-flex flex-column gap-2 ">
                <Rating value={5} readOnly />
                <Typography variant="body1">
                  Amazing service, met a great group for my schools local
                  hackathon and some people to exercise with.
                </Typography>
                <Box display="flex" alignItems="center" gap="8px">
                  <Avatar alt="Will Smith" />
                  <Box>
                    <Typography variant="body1">Will Smith</Typography>
                    <Typography variant="body2">Oregon State</Typography>
                    <Typography variant="body2">Oct 20, 2023</Typography>
                  </Box>
                </Box>
              </TestimonialBox>
            </div>
            <div className="col-12 col-md-4">
              <TestimonialBox className="card d-flex flex-column gap-2">
                <Rating value={5} readOnly />
                <Typography variant="body1">
                  Met such a fun group of stand up comedians here, an easy
                  solution to meet people on campus!
                </Typography>
                <Box display="flex" alignItems="center" gap="8px">
                  <Avatar alt="Jack Doh" />
                  <Box>
                    <Typography variant="body1">Jack Doh</Typography>
                    <Typography variant="body2">UCLA</Typography>
                    <Typography variant="body2">Oct 21, 2023</Typography>
                  </Box>
                </Box>
              </TestimonialBox>
            </div>
            <div className="col-12 col-md-4">
              <TestimonialBox className="card d-flex flex-column gap-2">
                <Rating value={5} readOnly />
                <Typography variant="body1">
                  Amazing opportunity to connect with upper-classmen and learn
                  more about your program.
                </Typography>
                <Box display="flex" alignItems="center" gap="8px">
                  <Avatar alt="Lolla Smith" />
                  <Box>
                    <Typography variant="body1">Lolla Smith</Typography>
                    <Typography variant="body2">Portland State</Typography>
                    <Typography variant="body2">Oct 22, 2023</Typography>
                  </Box>
                </Box>
              </TestimonialBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
