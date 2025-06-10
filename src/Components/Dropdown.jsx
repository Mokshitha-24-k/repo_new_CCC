import React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
} from '@mui/material';

const Dropdown = ({
  value,
  onChange,
  label,
  options,
  outlined = false,
  width = 160,
}) => {
  return (
    <FormControl
      sx={{ minWidth: width }}
      variant={outlined ? 'outlined' : 'standard'}
      size="small"
    >
      <Select
        displayEmpty
        value={value}
        onChange={onChange}
        input={outlined ? <OutlinedInput /> : undefined}
        disableUnderline={!outlined}
        renderValue={(selected) =>
          selected ? selected : <em style={{ color: '#888' }}>{label}</em>
        }
        sx={
          outlined
            ? {}
            : {
                "&::before": { borderBottom: "none" },
                "&::after": { borderBottom: "none" },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "none",
                },
              }
        }
      >
        <MenuItem disabled value="">
          <em>{label}</em>
        </MenuItem>
        {options.map((opt, index) => (
          <MenuItem key={index} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
