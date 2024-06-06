import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationIcon from "@mui/icons-material/Notifications";
import {
  AppBar,
  Backdrop,
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

type MenuItemType = string;

interface NavbarProps {
  menuItems: MenuItemType[];
}

const DesktopNavbar: React.FC<NavbarProps> = ({ menuItems }) => {
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
            {menuItems.map((item) => (
              <Link
                key={item}
                href="#"
                sx={{
                  color: "#8A9099",
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
              adriano.lima@acmecorp.com.br
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

const MobileNavbar: React.FC<NavbarProps> = ({ menuItems }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000000",
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
          <IconButton
            aria-label="openMenu"
            sx={{ color: "#ffffff" }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={isDrawerOpen} onClose={handleDrawerClose}>
            <Box
              sx={{
                backgroundColor: "#ffffff",
              }}
            >
              <Toolbar
                sx={{
                  justifyContent: "space-between",
                  backgroundColor: "#000000",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Link href="/" sx={{ marginRight: 2 }}>
                    <Box
                      component="img"
                      src="/img/logoSvg.svg"
                      alt="LogoOnTheGo"
                      sx={{ height: 36, width: 36, borderRadius: 1 }}
                    />
                  </Link>
                  <IconButton
                    aria-label="closeMenu"
                    sx={{ color: "#ffffff" }}
                    onClick={handleDrawerClose}
                  >
                    <ClearIcon />
                  </IconButton>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    aria-label="notifications"
                    sx={{ color: "#ffffff" }}
                  >
                    <NotificationIcon />
                  </IconButton>
                </Box>
              </Toolbar>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #E0E4E7",
                  backgroundColor: "#EEF2F3",
                  px: 2,
                  py: 3,
                }}
              >
                <Box
                  component="img"
                  src="/img/logo.png"
                  alt="LogoOnTheGo"
                  sx={{ height: 34, width: 34, ml: 1 }}
                />
                <Typography sx={{ fontWeight: 500, ml: 3 }}>
                  ACME Corporation
                </Typography>
              </Box>
              {menuItems.map((item) => (
                <React.Fragment key={item}>
                  <MenuItem
                    onClick={handleDrawerClose}
                    sx={{ color: "#8A9099", justifyContent: "center" }}
                  >
                    {item}
                  </MenuItem>
                  <Divider sx={{ backgroundColor: "#E0E4E7" }} />
                </React.Fragment>
              ))}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                }}
              >
                <Typography sx={{ fontWeight: 700 }}>Adriano Lima</Typography>
                <Typography sx={{ fontWeight: 400, color: "#8A9099" }}>
                  adriano.lima@acmecorp.com.br
                </Typography>
                <Divider sx={{ width: "45%", pt: 3 }} />
                <Box onClick={handleDrawerClose}>
                  <Typography sx={{ fontWeight: 400, pt: 2 }}>
                    Logout
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Drawer>
          <Backdrop
            open={isDrawerOpen}
            sx={{ zIndex: 100, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton aria-label="notifications" sx={{ color: "#ffffff" }}>
            <NotificationIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const Navbar = () => {
  const showMobileBar = useMediaQuery("(max-width:985px)");

  const menuItems = [
    "Pesquisas",
    "Créditos",
    "Campanhas",
    "Equipe",
    "Configurações",
  ];

  return showMobileBar ? (
    <MobileNavbar menuItems={menuItems} />
  ) : (
    <DesktopNavbar menuItems={menuItems} />
  );
};

export default Navbar;
