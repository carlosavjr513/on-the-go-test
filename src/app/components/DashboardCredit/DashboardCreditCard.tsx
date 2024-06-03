import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

type DashboardCreditCardProps = {
  title: string;
  value: any;
};

const DashboardCreditCard: React.FC<DashboardCreditCardProps> = ({
  title,
  value,
}) => {
  let borderColor = "";
  let fontColor = "";

  switch (title) {
    case "available":
      borderColor = "#0AD2A5";
      break;
    case "running":
      borderColor = "#C7B2FF";
      break;
    case "reserved":
      borderColor = "#8A9099";
      fontColor = "#8A9099";
      break;
    default:
      borderColor = "#000000";
  }

  return (
    <Card
      sx={{
        border: 1,
        borderBottom: 10,
        borderRadius: 1,
        textAlign: "center",
        padding: 2,
        borderColor: borderColor,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, fontSize: 38, color: fontColor }}
        >
          {value}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            flexDirection: "column",
            fontWeight: 500,
            fontSize: 12,
            color: fontColor,
          }}
        >
          {title === "available" ? (
            <>
              <span>CRÉDITOS</span>
              <span>DISPONÍVEIS</span>
            </>
          ) : title === "running" ? (
            <>
              <span>CRÉDITOS</span>
              <span>EM CAMPO</span>
            </>
          ) : title === "reserved" ? (
            <>
              <span>CRÉDITOS</span>
              <span>RESERVADOS</span>
            </>
          ) : (
            ""
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCreditCard;