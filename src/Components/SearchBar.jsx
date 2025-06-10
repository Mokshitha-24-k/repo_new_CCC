import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  InputBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchWrapper = styled('div')(({ theme, bgcolor }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(bgcolor || theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(bgcolor || theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const SearchBar = ({
  placeholder = 'Search...',
  value,
  onChange,
  bgcolor,
  width = '250px',
}) => {
  return (
    <Box sx={{display:'flex',justifyContent:'flex-end',flexGrow:1  }}>
      <SearchWrapper bgcolor={bgcolor}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          inputProps={{ 'aria-label': 'search' }}
        />
      </SearchWrapper>
    </Box>
  );
};

export default SearchBar;
