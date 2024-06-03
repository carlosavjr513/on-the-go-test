import { ArrowForward } from "@mui/icons-material";
import MyResearchCard from "./MyResearchCard";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

type MyResearch = {
  name: string;
  id: number;
  status: string;
};

interface MyResearchesCarouselProps {
  myResearches: MyResearch[];
}

const MyResearchesCarousel: React.FC<MyResearchesCarouselProps> = ({
  myResearches,
}) => {
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
        px: 7,
        py: 2,
        display: "flex",
        gap: 2,
      }}
    >
      {myResearches.map((myResearch, index) => (
        <MyResearchCard key={index} myResearch={myResearch} />
      ))}
      <Box
        sx={{
          p: 0,
          position: "relative",
        }}
      >
        <Card
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          sx={{
            backgroundColor: "#000000",
            textAlign: "center",
            color: "#FFFFFF",
            width: isHovered ? "185px" : "200px",
            height: "200px",
            transition: "transform 0.2s ease-out",
            right: -200,
            top: 0,
            transformOrigin: "right",
            overflow: "hidden",
            position: "absolute",
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
    </Box>
  );
};

export default MyResearchesCarousel;
