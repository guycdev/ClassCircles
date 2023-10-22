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
                Projects
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
                Release
              </Typography>
            </div>
          </StatBox>
        </div>
        <div className="col-md-9 container col-12">
          <div className="row flex-column flex-md-row gap-4 gap-md-0">
            <div className="col-12 col-md-4">
              <TestimonialBox className="card d-flex flex-column gap-2">
                <Rating value={5} readOnly />
                <Typography variant="body1">
                  Reliable and efficient! The testing services provided by
                  Releasy went beyond what we expected.
                </Typography>
                <Box display="flex" alignItems="center" gap="8px">
                  <Avatar
                    src="path_to_lolla_smith_image.jpg"
                    alt="Lolla Smith"
                  />
                  <Box>
                    <Typography variant="body1">Lolla Smith</Typography>
                    <Typography variant="body2">Self-Employed</Typography>
                    <Typography variant="body2">Jul 12, 2023</Typography>
                  </Box>
                </Box>
              </TestimonialBox>
            </div>
            <div className="col-12 col-md-4">
              <TestimonialBox className="card d-flex flex-column gap-2">
                <Rating value={5} readOnly />
                <Typography variant="body1">
                  Reliable and efficient! The testing services provided by
                  Releasy went beyond what we expected.
                </Typography>
                <Box display="flex" alignItems="center" gap="8px">
                  <Avatar
                    src="path_to_lolla_smith_image.jpg"
                    alt="Lolla Smith"
                  />
                  <Box>
                    <Typography variant="body1">Lolla Smith</Typography>
                    <Typography variant="body2">Self-Employed</Typography>
                    <Typography variant="body2">Jul 12, 2023</Typography>
                  </Box>
                </Box>
              </TestimonialBox>
            </div>
            <div className="col-12 col-md-4">
              <TestimonialBox className="card d-flex flex-column gap-2">
                <Rating value={5} readOnly />
                <Typography variant="body1">
                  Reliable and efficient! The testing services provided by
                  Releasy went beyond what we expected.
                </Typography>
                <Box display="flex" alignItems="center" gap="8px">
                  <Avatar
                    src="path_to_lolla_smith_image.jpg"
                    alt="Lolla Smith"
                  />
                  <Box>
                    <Typography variant="body1">Lolla Smith</Typography>
                    <Typography variant="body2">Self-Employed</Typography>
                    <Typography variant="body2">Jul 12, 2023</Typography>
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
