import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

interface FillingBarProps {
  numerator: number;
  denominator: number;
}

const FillingBar: React.FC<FillingBarProps> = ({ numerator, denominator }) => {
  const value = numerator/denominator * 100;
  return (
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: 12,
        borderRadius: 12,
        width: 175,
        backgroundColor: "transparent",
        "& .MuiLinearProgress-bar": {
          borderRadius: 12,
          backgroundColor: "white",
        },
        "&.MuiLinearProgress-root": {
          border: "1px solid white",
        },
      }}
    />
  );
};

export default FillingBar;
