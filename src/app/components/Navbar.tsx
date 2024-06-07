import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationIcon from "@mui/icons-material/Notifications";
import {
  AppBar,
  Backdrop,
  Badge,
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
import NotificationTabs from "./Notification/NotificationTabs";
import { NavbarProps, NotificationData } from "@/types/types";



const DesktopNavbar: React.FC<Omit<NavbarProps, "notifications">> = ({
  menuItems,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isNotificationTabsOpen, setIsNotificationTabsOpen] = useState(false);

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

const MobileNavbar: React.FC<NavbarProps> = ({ menuItems, notifications }) => {
  const [isMenuDrawer, setisMenuDrawer] = useState(false);
  const [isNotificationDrawer, setisNotificationDrawer] = useState(false);

  const hasUnreadNotification = notifications.some(
    (notification) => notification.read
  );

  const handleMenuDrawerOpen = () => {
    setisMenuDrawer(true);
  };

  const handleMenuDrawerClose = () => {
    setisMenuDrawer(false);
  };

  const handleNotificationDrawerOpen = () => {
    setisNotificationDrawer(true);
  };

  const handleNotificationDrawerClose = () => {
    setisNotificationDrawer(false);
  };

  const handleMenuCloseNotificationOpen = () => {
    setisMenuDrawer(false);
    setisNotificationDrawer(true);
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
            onClick={handleMenuDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="top"
            open={isMenuDrawer}
            onClose={handleMenuDrawerClose}
          >
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
                    onClick={handleMenuDrawerClose}
                  >
                    <ClearIcon />
                  </IconButton>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    aria-label="notifications"
                    sx={{ color: "#ffffff" }}
                    onClick={handleMenuCloseNotificationOpen}
                  >
                    <Badge
                      color="warning"
                      variant="dot"
                      invisible={hasUnreadNotification}
                    >
                      <NotificationIcon />
                    </Badge>
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
                    onClick={handleMenuDrawerClose}
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
                <Box onClick={handleMenuDrawerClose}>
                  <Typography sx={{ fontWeight: 400, pt: 2 }}>
                    Logout
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Drawer>
          <Backdrop
            open={isMenuDrawer}
            sx={{ zIndex: 100, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            aria-label="notifications"
            sx={{ color: "#ffffff" }}
            onClick={handleNotificationDrawerOpen}
          >
            <Badge
              color="warning"
              variant="dot"
              invisible={hasUnreadNotification}
            >
              <NotificationIcon />
            </Badge>
          </IconButton>
          <Drawer
            anchor="top"
            open={isNotificationDrawer}
            onClose={handleNotificationDrawerClose}
          >
            <Box onClick={handleNotificationDrawerClose}>
              <NotificationTabs notifications={notifications} />
            </Box>
          </Drawer>
          <Backdrop
            open={isNotificationDrawer}
            sx={{ zIndex: 50, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const Navbar: React.FC<{ notifications: NotificationData[] }> = ({
  notifications,
}) => {
  const showMobileBar = useMediaQuery("(max-width:985px)");

  const menuItems = [
    "Pesquisas",
    "Créditos",
    "Campanhas",
    "Equipe",
    "Configurações",
  ];

  return showMobileBar ? (
    <MobileNavbar menuItems={menuItems} notifications={notifications} />
  ) : (
    <DesktopNavbar menuItems={menuItems} />
  );
};

export default Navbar;
