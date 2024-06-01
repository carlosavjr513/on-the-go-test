import React from 'react';
import { Box } from '@mui/material';

interface CircleIndicatorProps {
  count: number;
}

const CircleIndicator: React.FC<CircleIndicatorProps> = ({ count }) => {
  return (
    <Box sx={{ display: 'flex', marginTop: '8px' }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Box
          key={index}
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            border: '1px solid #ffffff',
            backgroundColor: index < count ? '#ffffff' : 'transparent',
            marginRight: index < 4 ? 1 : 0,
          }}
        />
      ))}
    </Box>
  );
};

export default CircleIndicator;
