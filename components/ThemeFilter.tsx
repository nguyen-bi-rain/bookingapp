'use client'
import { useState } from 'react';
import { Box, Card, CardContent, Checkbox, FormControlLabel, Typography, Button } from '@mui/material';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Theme {
  id: string;
  label: string;
}

const themes: Theme[] = [
  { id: 'water', label: 'Water activities' },
  { id: 'social', label: 'Good for social distancing' },
  { id: 'adrenaline', label: 'Adrenaline' },
  { id: 'nature', label: 'Nature' },
  { id: 'hidden', label: 'Hidden gems' },
  { id: 'street', label: 'Street art & graffiti' },
  { id: 'food', label: 'Food' },
];

const ThemeFilter = () => {
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const visibleThemes = showAll ? themes : themes.slice(0, 5);

  const handleThemeChange = (themeId: string) => {
    setSelectedThemes(prev => {
      if (prev.includes(themeId)) {
        return prev.filter(id => id !== themeId);
      } else {
        return [...prev, themeId];
      }
    });
  };

  return (
    <Card sx={{
      width: '100%',
      backgroundColor: '#fff',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      mb: 2
    }}>
      <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
          cursor: 'pointer'
        }}
        onClick={() => setIsExpanded(!isExpanded)}
        >
          <Typography variant="h6" sx={{
            fontWeight: 600,
            color: 'var(--text-color)',
            fontSize: { xs: '1.1rem', sm: '1.25rem' }
          }}>
            Theme
          </Typography>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </Box>

        {isExpanded && (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {visibleThemes.map((theme) => (
              <FormControlLabel
                key={theme.id}
                control={
                  <Checkbox
                    checked={selectedThemes.includes(theme.id)}
                    onChange={() => handleThemeChange(theme.id)}
                    sx={{
                      color: '#7BBCB0',
                      '&.Mui-checked': {
                        color: '#7BBCB0',
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    color: 'var(--text-color)'
                  }}>
                    {theme.label}
                  </Typography>
                }
              />
            ))}

            {themes.length > 5 && (
              <Button
                onClick={() => setShowAll(!showAll)}
                sx={{
                  textTransform: 'none',
                  color: '#7BBCB0',
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  fontWeight: 500,
                  p: 0,
                  mt: 1,
                  justifyContent: 'flex-start',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    textDecoration: 'underline'
                  }
                }}
              >
                {showAll ? 'Show Less' : 'Show More Destinations'}
              </Button>
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ThemeFilter; 