'use client';

import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function ClockStyleTimePicker() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ p: 2, maxWidth: 300 }}>
        <DesktopTimePicker
          label="Clock-style Time Picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
      </Box>
    </LocalizationProvider>
  );
}
