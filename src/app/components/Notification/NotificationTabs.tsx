import { formatTimelineDate } from "@/app/utils/functions";
import { NotificationTabsProps, TabPanelProps } from "@/types/types";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import { Box, Tab, Tabs, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import NotificationCard from "./NotificationCard";

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
        <Box
          sx={{
            p: 3,
            height: "70vh",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "&": {
              scrollbarWidth: "none",
            },
          }}
        >
          {children}
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

const NotificationTabs: React.FC<NotificationTabsProps> = ({
  notifications,
}) => {
  const [valueTab, setValueTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  let lastDate: string | null = null;

  return (
    <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          p: 1,
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
            p: "2px 10px",
          }}
        >
          {notifications.length}
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={valueTab}
          onChange={handleChange}
          aria-label="Notification tabs"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#FF5D55",
              height: 4,
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#FF5D55",
            },
            px: 2,
            boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Tab label="Todas" {...a11yProps(0)} sx={{ fontWeight: 700, p: 0 }} />
        </Tabs>
        <TabPanel value={valueTab} index={0}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                p: 0,
              },
            }}
          >
            {notifications.map((notification, index) => {
              const notificationDate = formatTimelineDate(
                notification.createAt
              ).formattedDate;
              const showDate = notificationDate !== lastDate;
              if (showDate) {
                lastDate = notificationDate;
              }

              return (
                <Box key={notification.id}>
                  {showDate && (
                    <TimelineItem sx={{ mb: -5, mt: 1 }}>
                      <TimelineSeparator>
                        <Tooltip
                          title={
                            formatTimelineDate(notification.createAt)
                              .toolTipDate
                          }
                          placement="right"
                          arrow
                          sx={{
                            "& .MuiTooltip-tooltip": {
                              backgroundColor: "#000",
                              color: "#fff",
                            },
                            "& .MuiTooltip-arrow": {
                              color: "#000",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 400,
                              textAlign: "start",
                              width: "150px",
                              ml: -2,
                            }}
                          >
                            {
                              formatTimelineDate(notification.createAt)
                                .formattedDate
                            }
                          </Typography>
                        </Tooltip>
                      </TimelineSeparator>
                    </TimelineItem>
                  )}
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ ml: -6 }}>
                      <NotificationCard
                        key={notification.id}
                        notification={notification}
                      />
                    </TimelineContent>
                  </TimelineItem>
                </Box>
              );
            })}
          </Timeline>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default NotificationTabs;
