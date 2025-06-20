import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  LinearProgress,
  Chip,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProductService } from './Carousel/ProductService';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "left",
  backgroundColor: "#fff",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
}));

const StatusChip = ({ status }) => (
  <Chip
    label={status.toUpperCase()}
    variant="outlined"
    color={status === "active" ? "success" : "default"}
    size="small"
    sx={{ fontWeight: 600 }}
  />
);

const getProgressColor = (days) => {
  if (days === 0) return "error";
  if (days <= 15) return "warning";
  return "success";
};

export default function HackathonDashboard() {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setHackathons(data.slice(0, 7))
    ); // Show only 5
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
       
        <Grid item size={8}>
          <Item>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Total Hackathons ({hackathons.length})
            </Typography>

            
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "2.5fr 3fr 1fr 1fr",
                fontWeight: "bold",
                mb: 1,
                color: "grey.700",
              }}
            >
              <Typography>Name</Typography>
              <Typography>Progress</Typography>
              <Typography>Score</Typography>
              <Typography>Status</Typography>
            </Box>

            <Divider sx={{ mb: 1 }} />

        
            {hackathons.map((hack, idx) => {
              const percentage =
                hack.days > 0 ? Math.round(100 - (hack.days / 30) * 100) : 100;
              const color = getProgressColor(hack.days);

              return (
                <Box
                  key={idx}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "2.5fr 3fr 1fr 1fr",
                    alignItems: "center",
                    mb: 1.5,
                  }}
                >
                  <Typography variant="body2">{hack.name}</Typography>

                  <Box sx={{ width: "45%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={percentage}
                      sx={{
                        height: 8,
                        borderRadius: 5,
                      }}
                      color={color}
                    />
                  </Box>

                  <Typography variant="body2">{percentage}%</Typography>

                  <StatusChip status={hack.status} />
                </Box>
              );
            })}
          </Item>
        </Grid>

    
        {/* <Grid item size={4}>
          <Item>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Featured Hackathon
            </Typography>

            {hackathons.length > 0 && (
              <>
                <img
                  src={hackathons[0].image}
                  alt={hackathons[0].name}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: 10,
                  }}
                />
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {hackathons[0].name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {hackathons[0].description || "MIC College of Technology"}
                </Typography>
                <StatusChip status={hackathons[0].status} />
                <Typography sx={{ mt: 1 }}>
                  Days Left: {hackathons[0].days}
                </Typography>
              </>
            )}
          </Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}