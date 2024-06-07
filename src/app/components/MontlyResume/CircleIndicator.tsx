import { CircleIndicatorProps } from "@/types/types";
import { Box } from "@mui/material";
import React from "react";

const CircleIndicator: React.FC<CircleIndicatorProps> = ({ count }) => {
  const [filledCount, totalCount] = count;

  return (
    <Box sx={{ display: "flex" }}>
      {Array.from({ length: totalCount }).map((_, index) => (
        <Box
          key={index}
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            border: "1px solid #ffffff",
            backgroundColor: index < filledCount ? "#ffffff" : "transparent",
            marginRight: index < totalCount - 1 ? 1 : 0,
          }}
        />
      ))}
    </Box>
  );
};

export default CircleIndicator;
