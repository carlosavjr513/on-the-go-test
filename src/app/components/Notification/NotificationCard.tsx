import { NotificationCardProps } from "@/types/types";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Circle from "@mui/icons-material/Circle";
import CommentIcon from "@mui/icons-material/Comment";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const parseBoldText = (text: string) => {
  const parts = text.split(/<b>(.*?)<\/b>/g);
  return parts.map((part, index) => {
    if (index % 2 === 0) {
      return <span key={index}>{part}</span>;
    } else {
      return (
        <span key={index} style={{ fontWeight: 700, color: "#000000" }}>
          {part}
        </span>
      );
    }
  });
};

const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
}) => {
  return (
    <Card
      sx={{
        border: 1,
        borderColor: "#C9D1D6",
        "&:hover": { borderColor: "#FF5D55", color: "#FF5D55" },
        boxShadow: "none",
        marginY: 1,
      }}
    >
      <CardContent sx={{ p: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              p: 0,
            }}
          >
            <CommentIcon fontSize="small" />
            <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
              {`${notification.comments} NOVOS COMENTÁRIOS`}
            </Typography>
          </Box>
          <Box sx={{ position: "relative" }}>
            <Circle
              sx={{
                color: notification.read ? "#0AD2A5" : "#FF5D55",
                fontSize: 8,
                position: "absolute",
                bottom: 4,
                right: 0,
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 0,
          }}
        >
          <Typography
            sx={{ fontSize: "12px", fontWeight: 500, color: "#8A9099" }}
          >
            {parseBoldText(notification.mensage)}
          </Typography>
          <Button
            disableRipple
            variant="outlined"
            size="small"
            sx={{
              borderColor: "#C9D1D6",
              height: "48px",
              width: "48px",
              p: 0,
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#FF5D55",
                zIndex: 1,
                transition: "transform 0.3s ease",
                transform: "translateX(-100%)",
              },
              "&:hover::before": {
                transform: "translateX(0)",
              },
              "&:hover": {
                borderColor: "#FF5D55",
              },
              "&:hover .MuiSvgIcon-root": {
                color: "#FFFFFF",
              },
            }}
          >
            <ArrowForward
              fontSize="small"
              sx={{
                color: "#000000",
                transition: "color 0.3s ease",
                zIndex: 2,
                position: "relative",
              }}
            />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
