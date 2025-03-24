'use client'
import Room from '@/components/Room';
import AvailabilityCard from '@/components/AvailabilityCard';
import { Box, Button, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack, Theme, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react';
import ThemeFilter from '@/components/ThemeFilter';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 310,
    },
  },
};
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: string, theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const Page = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string>(names[0]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };

  return (
    <div className='mt-28 px-4 sm:px-6 lg:px-0' >
      <div className='bg-white'>
        <div className='flex flex-col md:flex-row md:justify-between max-w-5xl items-start md:items-center mx-auto py-5 gap-4 md:gap-0'>
          <Stack direction="column" spacing={1}>
            <Typography variant='h6' sx={{ fontWeight: 600, color: 'var(--text-color)' }}>Thing To Do In London</Typography>
            <Typography variant='body2' sx={{ fontWeight: 400, color: '#778088' }}>49 Activities found</Typography>
          </Stack>
          <div className='w-full md:w-auto'>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' }, width: '100%' }}>
              <span className='block text-text-color font-semibold text-base whitespace-nowrap'>Sort by: </span>
              <Select
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                MenuProps={MenuProps}
                sx={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "#F4F4F5",
                  display: 'flex',
                  alignItems: 'center',
                  width: { xs: '100%', sm: '310px' },
                  height: '48px',
                }}>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8 max-w-5xl mx-auto bg-[#F9FAFD]  '>
        <div className='lg:col-span-3 '>
          <Stack
            direction={"column"}
            spacing={1}
          >
            <AvailabilityCard />
            <ThemeFilter />
          </Stack>
        </div>
        <div className='lg:col-span-9 '>
          <Stack direction="column" spacing={1}>
            <Room
              id='1'
              roomType='Private Room'
              title='Westminster to Greenwich River Thames'
              price={30.00}
              rate={4}
              reviewCount={127}
              imageUrl='/assets/Rectangle 129.png'
            />
            <Room
              id='1'
              roomType='Private Room'
              title='Westminster to Greenwich River Thames'
              price={30.00}
              rate={4}
              reviewCount={127}
              imageUrl='/assets/Rectangle 129.png'
            />
          </Stack>
            <Button variant='outlined'sx={{
              width : "100%",
              padding : "1rem 0",
              borderRadius : "100px",
              marginTop : '1.5rem',
              border: "2px solid #7BBCB0",
              color: "#7BBCB0",
              fontWeight: 600,
              textTransform: "capitalize",
            }}>Load more</Button>
        </div>
      </div>
    </div>
  )
}

export default Page