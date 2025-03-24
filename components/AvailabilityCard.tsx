'use client'
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import dayjs from 'dayjs';

const AvailabilityCard = () => {
  const [fromDate, setFromDate] = useState<dayjs.Dayjs | null>(null);
  const [toDate, setToDate] = useState<dayjs.Dayjs | null>(null);

  const handleCheckAvailability = () => {
    // Handle check availability logic here
    console.log('Checking availability from', fromDate?.format('YYYY-MM-DD'), 'to', toDate?.format('YYYY-MM-DD'));
  };

  return (
    <Card sx={{ 
      width: '100%', 
      p: { xs: 1, sm: 2 }, 
      backgroundColor: '#fff', 
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    }}>
      <CardContent>
        <Typography variant="h6" sx={{ 
          fontWeight: 600, 
          color: 'var(--text-color)', 
          mb: 3,
          fontSize: { xs: '1.1rem', sm: '1.25rem' }
        }}>
          Availability
        </Typography>
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'column' }, 
            gap: { xs: 1, sm: 2 }
          }}>
            <Box sx={{ width: '100%' }}>
              <Typography variant="body2" sx={{ 
                mb: 1, 
                fontWeight: 600,
                color: "var(--text-color)",
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}>
                From
              </Typography>
              <DatePicker 
                value={fromDate}
                onChange={(newValue) => setFromDate(newValue)}
                sx={{
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#F4F4F5',
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }
                }}
              />
            </Box>
            
            <Box sx={{ width: '100%' }}>
              <Typography variant="body2" sx={{ 
                mb: 1,
                fontWeight: 600,
                color: "var(--text-color)",
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}>
                To
              </Typography>
              <DatePicker
                value={toDate}
                onChange={(newValue) => setToDate(newValue)}
                sx={{
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#F4F4F5',
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }
                }}
              />
            </Box>
          </Box>
        </LocalizationProvider>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: { xs: 2, sm: 3 },
            backgroundColor: '#7BBCB0',
            color: '#fff',
            textTransform: 'none',
            borderRadius: '8px',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            py: { xs: 1, sm: 1.5 },
            '&:hover': {
              backgroundColor: '#69a69b'
            }
          }}
          onClick={handleCheckAvailability}
        >
          Check Availability
        </Button>
      </CardContent>
    </Card>
  );
};

export default AvailabilityCard; 