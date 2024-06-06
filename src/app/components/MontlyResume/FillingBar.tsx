import LinearProgress from "@mui/material/LinearProgress";
import React from "react";

interface FillingBarProps {
  numerator: number;
  denominator: number;
}

const FillingBar: React.FC<FillingBarProps> = ({ numerator, denominator }) => {
  let value = 0;
  if (
    numerator !== null &&
    denominator !== null &&
    numerator !== undefined &&
    denominator !== undefined &&
    denominator !== 0
  )
    value = (numerator / denominator) * 100;

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
