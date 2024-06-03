import { Circle } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

interface MyResearch {
  name: string;
  id: number;
  status: string;
}

type MyResearchCardProps = {
  myResearch: MyResearch;
};

const MyResearchesCard: React.FC<MyResearchCardProps> = ({ myResearch }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      sx={{
        border: 1,
        borderBottom: 10,
        borderRadius: 1,
        textAlign: "center",
        p: 0,
        borderColor: "#000000",
        "&:hover": {
          "& .hovered": {
            color: "#FF5D55",
          },
          "& .box": {
            borderLeft: "2px solid #FF5D55",
          },
        },
        transition: "transform 0.3s",
        transform: isHovered ? "translateY(-15px)" : "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent sx={{ height: 150 }}>
        <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
          <Box
            sx={{
              textAlign: "left",
              borderLeft: 2,
              borderColor: "#000000",
            }}
            className="box"
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 12,
                ml: 0.5,
                transition: "color 0.3s",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              className="hovered"
            >
              {myResearch.status}
              {myResearch.status === "Rascunho" ? (
                <img
                  src={isHovered ? "/img/newHoveredSvg.svg" : "/img/newSvg.svg"}
                  alt="NewIcon"
                  style={{
                    height: 24,
                  }}
                />
              ) : (
                <Circle
                  sx={{
                    color: "#0AD2A5",
                    fontSize: 8,
                    position: "absolute",
                    marginLeft: "165px",
                    marginTop: "-20px",
                  }}
                />
              )}
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 18,
                ml: 0.5,
                transition: "color 0.3s",
                color: myResearch.status === "Rascunho" ? "#C3C7CA" : "#000",
              }}
              className="hovered"
            >
              {myResearch.name}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MyResearchesCard;
