// prettier-ignore
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

type CreditDashboardProps = {
  credits: { [key: string]: number };
};

const CreditDashboard: React.FC<CreditDashboardProps> = ({ credits }) => {
  const orderedKeys = ["available", "running", "reserved"];

  return (
    <Grid
      sx={{
        // backgroundColor: "#0f0",
        padding: 2,
      }}
    >
      <Box sx={{}}>
        <Box
          sx={{
            textAlign: "left",
            fontWeight: 400,
            fontSize: 12,
          }}
        >
          CRÉDITOS PARA PAINEL
        </Box>
        <Grid container sx={{ gap: 2 }}>
          {orderedKeys.map((key) => (
            <CreditCard key={key} title={key} value={credits[key]} />
          ))}
        </Grid>
      </Box>
      <Grid sx={{}}>
        <Button variant="outlined">GERENCIAR CRÉDITOS</Button>
      </Grid>
    </Grid>
  );
};

type CreditCardProps = {
  title: string;
  value: any;
};

const CreditCard: React.FC<CreditCardProps> = ({ title, value }) => {
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
      fontColor = "#000000";
  }

  return (
    <Card
      sx={{
        border: 1,
        borderBottom: 10,
        borderRadius: 1,
        textAlign: "center",
        paddingX: 1,
        paddingY: 2,
        // maxWidth: "120px", // PLACEHOLDER
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
          sx={{ fontWeight: 500, fontSize: 12, color: fontColor }}
        >
          {title === "available"
            ? "CRÉDITOS DISPONÍVEIS"
            : title === "running"
            ? "CRÉDITOS EM CAMPO"
            : title === "reserved"
            ? "CRÉDITOS RESERVADOS"
            : ""}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CreditDashboard;
