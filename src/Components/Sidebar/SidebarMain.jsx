import React from 'react';
import { Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const SidebarMain = () => {
  return (
    <Box sx={{ width: 250, padding: 2, backgroundColor:'#ADD8E6'}}>
      <Typography variant="h6">Managed by Skill</Typography>
      <FormGroup>
        <Typography >Location</Typography>
        <FormControlLabel control={<Checkbox />} label="Online" />
        <FormControlLabel control={<Checkbox />} label="In-Person" />

        <Typography >Status</Typography>
        <FormControlLabel control={<Checkbox />} label="Upcoming" />
        <FormControlLabel control={<Checkbox />} label="Open" />
        <FormControlLabel control={<Checkbox />} label="Ended" />

        <Typography >Mode</Typography>
        <FormControlLabel control={<Checkbox />} label="Online" />
        <FormControlLabel control={<Checkbox />} label="In-Person" />

        <Typography >Team Size</Typography>
        <FormControlLabel control={<Checkbox />} label="Online" />
        <FormControlLabel control={<Checkbox />} label="In-Person" />

        <Typography >Length</Typography>
        <FormControlLabel control={<Checkbox />} label="1-4 Weeks" />
        <FormControlLabel control={<Checkbox />} label=">1 Month" />

        <Typography >Interested Tags</Typography>
        <FormControlLabel control={<Checkbox />} label="Social Good" />
        <FormControlLabel control={<Checkbox />} label="Business Friendly" />

        <Typography >Host</Typography>
        <FormControlLabel control={<Checkbox />} label="Business Friendly" />

        <Typography >Open to</Typography>
        <FormControlLabel control={<Checkbox />} label="Public" />
        <FormControlLabel control={<Checkbox />} label="Invite" />
      </FormGroup>
    </Box>
  );
};

export default SidebarMain;