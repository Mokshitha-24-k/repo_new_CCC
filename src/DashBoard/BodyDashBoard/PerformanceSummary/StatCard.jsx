import React from "react";
import { Box, Typography, Grid, Avatar, CircularProgress } from "@mui/material";

const StatCard = ({ data }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} direction={"column"}>
        {data.map((item, index) => {
          const progress =
            item.maxValue !== undefined
              ? (item.value / item.maxValue) * 100
              : item.value;

          return (
            <Grid
              item
              xs={12}
              sm={4}
              key={index}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <Avatar
                sx={{
                  bgcolor: item.bgColor,
                  color: item.color,
                  width: 40,
                  height: 40,
                }}
              >
                {item.icon} {/* FIX: Now rendering JSX directly */}
              </Avatar>

              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.text}
                </Typography>
              </Box>

              <Box position="relative" display="inline-flex">
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={36}
                  thickness={4}
                  sx={{ color: "#f0f0f0", position: "absolute" }}
                />
                <CircularProgress
                  variant="determinate"
                  value={progress}
                  size={36}
                  thickness={4}
                  sx={{ color: item.color }}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default StatCard;