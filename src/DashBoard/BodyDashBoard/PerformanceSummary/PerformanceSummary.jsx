import React, {useEffect, useState } from "react";
import { Card, Typography, Grid, CardContent, Box } from "@mui/material";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StatCard from "./StatCard";
import {metricsCard1 , metricsCard2} from "./MetricsData";

const PerformanceSummary = () => {
  const percentage = 50;

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item xs={12} sm={4} lg={4}>
          <Card
            sx={{
              width: "400px",
              transition: "transform 0.3s, box-shadow 0.3s",
              alignItems:"center",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: 6,
              
              },
            }}
          >
            <CardContent>
              <Typography variant="h6">Overall Performance</Typography>
              <Typography sx={{ color: "gray" }}>
                Course completion rate
              </Typography>
              <div style={{ width: 200, height: 160 }}>
                <CircularProgressbarWithChildren
                  value={percentage}
                  maxValue={100}
                  styles={buildStyles({
                    rotation: 0.75,
                    strokeLinecap: "butt",
                    trailColor: "#E0E0E0",
                    pathColor: "#00C853",
                    pathTransitionDuration: 0.5,
                  })}
                  circleRatio={0.5}
                >
                  <div style={{ marginTop: -10, textAlign: "center" }}>
                    <div style={{ fontSize: 20, fontWeight: "bold" }}>
                      {percentage}%
                    </div>
                    <div style={{ fontSize: 14, color: "#666" }}>
                      PRO LEARNER
                    </div>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} lg={4}>
          <Card
            sx={{
              width: "400px",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Courses Overview
              </Typography>
              <StatCard cardType="metricsCard1" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} lg={4}>
          <Card
            sx={{
              width: "400px",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Learning Activities
              </Typography>
              <StatCard cardType="metricsCard2" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PerformanceSummary;
