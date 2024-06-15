import { ArrowForward } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";

const AllResearchesCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "200px",
        height: "190px",
        overflow: "hidden",
        borderRadius: 1,
      }}
    >
      <Card
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        sx={{
          backgroundColor: "#000000",
          textAlign: "center",
          color: "#FFFFFF",
          width: "100%",
          height: "100%",
          transition: "transform 0.3s ease-out",
          position: "absolute",
          top: 0,
          left: isHovered ? "20px" : "0px",
          "&:hover": {
            transform: "translateX(0px)",
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            p: 0,
            transition: "transform 0.2s ease-out",
            "&:hover": {
              transform: "translateX(20px)",
            },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            VER TODAS
            <ArrowForward />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AllResearchesCard;
