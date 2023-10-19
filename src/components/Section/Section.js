import { Sheet, Typography } from '@mui/joy';
import React from 'react';

const Section = ({ title, children }) => {
  return (
    <Sheet
      sx={{
        mx: 'auto',
        mt: '70px',
        py: '25px',
        px: '25px',
        maxWidth: '500px',
        borderRadius: 'xl',
        boxShadow: 'md',
      }}
      variant="plain">
      <Typography level="h4" sx={{ mb: '15px' }}>
        {title}
      </Typography>
      {children}
    </Sheet>
  );
};

export default Section;
