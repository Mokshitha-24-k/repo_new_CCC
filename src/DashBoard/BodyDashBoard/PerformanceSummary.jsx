import React from "react";
import {
  Card,
  Typography,
  Grid,
  CircularProgress,
  Box,
  CardContent,
} from "@mui/material";




const PerformanceSummary = () => {
  return (
    <Grid container spacing={3} padding={3}>
    <Grid item xs={12} md={6} lg={4}>
      <Card
        sx={{
          height: 150,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 6,
          },
        }}
      >
        <CardContent>
          <Typography variant="h6">Overall Performance</Typography>
          <Typography sx={{ color: "gray" }}>Course completion rate</Typography>
          
        </CardContent>

      </Card>
    </Grid>
  
    <Grid item xs={12} md={6} lg={4}>
      <Card
        sx={{
          height: 150,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 6,
          },
        }}
      >
        <CardContent>
          <Typography variant="h6">Total Enrolled</Typography>
        </CardContent>
      </Card>
    </Grid>
  
    <Grid item xs={12} md={6} lg={4}>
      <Card
        sx={{
          height: 150,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 6,
          },
        }}
      >
        <CardContent>
          <Typography variant="h6">Course Completed</Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  );
};

export default PerformanceSummary;
