// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, MenuItem, Menu, Link } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000000', padding: '8px 12px 8px 26px' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{ color: '#FFFFFF', textDecoration: 'none', marginRight: 2 }}
          >
            Logo
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {['Pesquisas', 'Créditos', 'Campanhas', 'Equipe', 'Configurações'].map((item) => (
              <Link
                key={item}
                href="#"
                sx={{ color: '#FFFFFF', marginRight: 2, textDecoration: 'none' }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #242528',
              borderRadius: '4px',
              padding: '4px 8px',
              marginRight: 2,
            }}
          >
            <Typography variant="h6" sx={{ color: '#FFFFFF' }}>
              Logo
            </Typography>
            <Typography variant="body1" sx={{ color: '#FFFFFF', marginLeft: 1 }}>
              ACME Corporation
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
              Adriano Lima
            </Typography>
            <Typography variant="body2" sx={{ color: '#8A9099' }}>
              adriano.lima@acmecorp.com
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
