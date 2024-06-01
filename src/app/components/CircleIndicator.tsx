import React from 'react';
import { Box } from '@mui/material';

interface CircleIndicatorProps {
  count: [number, number]; 
}

const CircleIndicator: React.FC<CircleIndicatorProps> = ({ count }) => {
  const [filledCount, totalCount] = count; 

  return (
    <Box sx={{ display: 'flex', marginTop: '8px' }}>
      {Array.from({ length: totalCount }).map((_, index) => (
        <Box
          key={index}
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            border: '1px solid #ffffff',
            backgroundColor: index < filledCount ? '#ffffff' : 'transparent', 
            marginRight: index < totalCount - 1 ? 1 : 0,
          }}
        />
      ))}
    </Box>
  );
};

export default CircleIndicator;
