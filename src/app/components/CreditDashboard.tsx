// prettier-ignore
import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

type CreditDashboardProps = {
  credits: { [key: string]: number };
};

const CreditDashboard: React.FC<CreditDashboardProps> = ({ credits }) => {
  const orderedKeys = ["available", "running", "reserved"];

  return (
    <Grid sx={{ paddingX: 5 }}>
      <Grid
        container
        sx={{
  
          backgroundColor: "#ffffff",
          border: 1,
          borderRadius: 1,
          borderColor: "#C9D1D6",
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            fontWeight: 400,
            fontSize: 12,
            paddingTop: 1,
            paddingLeft: 1,
          }}
        >
          CRÉDITOS PARA PAINEL
        </Box>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container sx={{ gap: 2 }}>
              {orderedKeys.map((key) => (
                <DashboardCreditCard
                  key={key}
                  title={key}
                  value={credits[key]}
                />
              ))}
            </Grid>
            <Grid sx={{}}>
              <Button
                variant="outlined"
                size="large"
                sx={{ width: "100%", maxWidth: "320px" }}
              >
                GERENCIAR CRÉDITOS
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

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
      fontColor = "#000000";
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

export default CreditDashboard;
