import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [date, setDate] = React.useState('');

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Date</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={date}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"17th Jan 2020-17th Dec 2020"}>17th Jan 2020-17th Dec 2020</MenuItem>
          <MenuItem value={"17th Jan 2021-17th Dec 2021"}>17th Jan 2021-17th Dec 2021</MenuItem>
          <MenuItem value={"17th Jan 2022-17th Dec 2022"}>17th Jan 2022-17th Dec 2022</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
