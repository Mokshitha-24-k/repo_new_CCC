import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import Dropdown from "../Dropdown";

const NavMain = ({
  title = "Skill Censui. Ai",
  showHostDropdown = true,
  showJoinDropdown = true,
}) => {
  const [hostOption, setHostOption] = useState("");
  const [joinOption, setJoinOption] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const location = useLocation();

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = (option) => {
    setAnchorEl(null);
    if (option === "Login") navigate("/login");
    else if (option === "Signup") navigate("/signup");
    else if (option === "Settings") navigate("/settings");
    else if (option === "DashBoard") navigate("/DashBoardLayout");
    else if (option === "Logout") navigate("/");
  };

  // Set options based on location
  let profileOptions = [];

  if (location.pathname === "/") {
    profileOptions = ["Settings", "Login", "Signup", "DashBoard"];
  } else if (location.pathname === "/Layout") {
    profileOptions = ["Settings", "DashBoard", "Logout"];
  } else if (location.pathname === "/DashBoardLayout") {
    profileOptions = ["Settings", "Logout"];
  } else {
    profileOptions = ["Settings"];
  }

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
              {title}
            </Typography>

            {showHostDropdown && (
              <Dropdown
                label="Host a Contest"
                value={hostOption}
                onChange={(e) => setHostOption(e.target.value)}
                options={["Hackathon", "Workshop", "Seminar"]}
                outlined={false}
              />
            )}

            {showJoinDropdown && (
              <Dropdown
                label="Join a Contest"
                value={joinOption}
                onChange={(e) => setJoinOption(e.target.value)}
                options={["Hackathon", "Quiz", "Design"]}
                outlined={false}
              />
            )}
          </Box>

          <Box sx={{ mr: 3 }}>
            <IconButton onClick={handleProfileClick}>
              <Avatar alt="Profile" src="" sx={{ width: 36, height: 36 }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleProfileClose(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {profileOptions.map((option) => (
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
