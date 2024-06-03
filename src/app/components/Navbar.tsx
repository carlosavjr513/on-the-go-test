import MoreVertIcon from "@mui/icons-material/MoreVert";
//prettier-ignore
import { AppBar, Box, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000000",
        p: "8px 12px 8px 26px",
        borderBottom: "1px solid #242528",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/" sx={{ marginRight: 2 }}>
            <Box
              component="img"
              src="/img/logoSvg.svg"
              alt="LogoOnTheGo"
              sx={{ height: 40, width: 40, borderRadius: 1 }}
            />
          </Link>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {[
              "Pesquisas",
              "Créditos",
              "Campanhas",
              "Equipe",
              "Configurações",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                sx={{
                  color: "#FFFFFF",
                  marginRight: 2,
                  textDecoration: "none",
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #242528",
              borderRadius: "4px",
              p: "4px 8px",
              gap: "10px",
            }}
          >
            <Box
              component="img"
              src="/img/logo.png"
              alt="LogoOnTheGo"
              sx={{ height: 34, width: 34 }}
            />
            <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
              ACME Corporation
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
              Adriano Lima
            </Typography>
            <Typography variant="body2" sx={{ color: "#8A9099" }}>
              adriano.lima@acmecorp.com
            </Typography>
          </Box>
          <IconButton
            aria-label="more"
            sx={{ color: "#FFFFFF" }}
            onClick={handleMenuClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
