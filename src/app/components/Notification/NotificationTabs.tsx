import { Box, Tab, Tabs, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import NotificationCard from "./NotificatonCard";

interface NotificationTabs {
  comments: number;
  read: boolean;
  mensage: string;
  id: string;
  createdAt: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const NotificationTabs: React.FC = () => {
  const { register, setValue, watch } = useForm<{
    notifications: NotificationTabs[];
  }>({
    defaultValues: {
      notifications: [],
    },
  });

  const [valueTab, setValueTab] = useState<number>(0);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("/api/notifications");
        console.log("NOTIFICAÇÃO: ", response.data);
        setValue("notifications", response.data);
      } catch (error) {
        console.error("Error fetching notifications: ", error);
      }
    };

    fetchNotifications();
  }, [setValue]);

  const notifications = watch("notifications");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: 0,
          gap: 1,
        }}
      >
        <Typography sx={{ fontSize: "18px" }}>Atualizações</Typography>
        <Box
          sx={{
            backgroundColor: "#FF5D55",
            borderRadius: 5,
            textAlign: "center",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
            padding: "2px 10px",
          }}
        >
          {notifications.length}
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={valueTab}
          onChange={handleChange}
          aria-label="Notification tabs"
        >
          <Tab label="Todas" {...a11yProps(0)} />
        </Tabs>
        <TabPanel value={valueTab} index={0}>
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}
        </TabPanel>
      </Box>
    </>
  );
};

export default NotificationTabs;
