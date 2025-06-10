import React from 'react';
import Dropdown from '../Dropdown';
import { Box, TextField,  MenuItem, FormControl, InputLabel, Button } from '@mui/material';
import { useState } from 'react';
import SearchBar from '../SearchBar';

const FilterBarMain=()=>{
    const [hostOption, setHostOption] = useState("");
    const [joinOption, setJoinOption] = useState("");
    const [search, setSearch] = useState('');
return(
<Box sx={{  
  px: 2, 
 //width: 'calc(100% - 250px)',
  top: '100px',
  paddingLeft:'0px',
  paddingRight:'0px',
}}>

      <Box
        sx={{
          display: 'flex',
          //border:'1px solid black',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          padding: 0.5,
          flexWrap: 'wrap', 
        }}
      >
        
        <Box sx={{ display: 'flex', gap: 2 }}>
        <Dropdown
        label=" Domain"
        value={hostOption}
        onChange={(e) => setHostOption(e.target.value)}
        options={['Hackathon', 'Workshop', 'Seminar']}
        outlined={true}
        />
        <Dropdown
        label="Location"
        value={hostOption}
        onChange={(e) => setHostOption(e.target.value)}
        options={['Hackathon', 'Workshop', 'Seminar']}
        outlined={true}
        />
        <Dropdown
        label="Skills"
        value={hostOption}
        onChange={(e) => setHostOption(e.target.value)}
        options={['Hackathon', 'Workshop', 'Seminar']}
        outlined={true}
        />
        <Dropdown
        label="Reward"
        value={hostOption}
        onChange={(e) => setHostOption(e.target.value)}
        options={['Hackathon', 'Workshop', 'Seminar']}
        outlined={true}
       />

</Box>

<div style={{ padding: '1rem',ml:'30px',gap :15}}>
      <SearchBar
        placeholder="Search ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        bgcolor="#000000"
        width="300px"

      />
    </div>
      </Box>
    </Box>

  );
};



export default FilterBarMain;