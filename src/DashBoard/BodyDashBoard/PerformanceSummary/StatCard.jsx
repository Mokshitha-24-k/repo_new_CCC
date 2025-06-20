import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  CircularProgress,
} from "@mui/material";
import {
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaBook,
  FaHourglassHalf,
  FaCertificate,
  FaLaptopCode,
} from "react-icons/fa";


const iconMap = {
  FaChalkboardTeacher: <FaChalkboardTeacher />,
  FaClipboardCheck: <FaClipboardCheck />,
  FaBook: <FaBook />,
  FaHourglassHalf: <FaHourglassHalf />,
  FaCertificate: <FaCertificate />,
  FaLaptopCode: <FaLaptopCode />,
};

const StatCard = ({ cardType }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Data/MetricsData.json")
      .then((res) => res.json())
      .then((json) => {
        const selected = json[cardType] || [];
        const withIcons = selected.map((item) => ({
          ...item,
          icon: iconMap[item.icon] || null,
        }));
        console.log("Fetched data:", withIcons);

        setData(withIcons);

      })
      
      
      .catch((err) => console.error("Fetch error:", err));
  }, [cardType]);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} direction="column">
        {data.map((item, index) => {
          const { value, maxValue, bgColor, color, icon, title, text } = item;
          const progress = maxValue ? (value / maxValue) * 100 : value;

          return (
            <Grid
              item
              xs={12}
              sm={4}
              key={index}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <Avatar sx={{ bgcolor: bgColor, color: color, width: 40, height: 40 }}>
                {icon}
              </Avatar>

              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  {title}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  {text}
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
                  sx={{ color: color }}
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
