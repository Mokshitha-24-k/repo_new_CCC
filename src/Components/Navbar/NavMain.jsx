import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
// import Buttons from "../Button";
import Dropdown from "../Dropdown";




const NavMain = () => {
  const [hostOption, setHostOption] = useState("");
  const [joinOption, setJoinOption] = useState("");

  const navigate = useNavigate();

  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = (option) => {
    setAnchorEl(null);
    if (option === "Login") navigate("/login");
    else if (option === "Signup") navigate("/signup");
    else if (option === "Settings") navigate("/settings");
  };

  return (

    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          
          <Box sx={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Typography
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 3,
                textTransform: "none",
                textAlign: "center",
                height: "30px",
                padding: "3px",
                paddingBottom: "2px",
                ml: 3,
                width: "200px",
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
            >
              Skill Censui. Ai
            </Typography>

            <Dropdown
              label="Host a Contest"
              value={hostOption}
              onChange={(e) => setHostOption(e.target.value)}
              options={["Hackathon", "Workshop", "Seminar"]}
              outlined={false}
            />

            <Dropdown
              label="Join a Contest"
              value={joinOption}
              onChange={(e) => setJoinOption(e.target.value)}
              options={["Hackathon", "Quiz", "Design"]}
              outlined={false}
            />
          </Box>

         
          <Box sx={{ mr: 3 }}>
            <IconButton onClick={handleProfileClick}>
              <Avatar
                alt="Profile"
                src="" 
                sx={{ width: 36, height: 36 }}
              />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleProfileClose(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {["Settings", "Login", "Signup"].map((option) => (
                <MenuItem key={option} onClick={() => handleProfileClose(option)}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
   
    
  );
};

export default NavMain;
