import { Box, Button, Grid } from "@mui/material";
import React from "react";
import DashboardCreditCard  from "./DashboardCreditCard";

type DashboardCreditProps = {
  credits: { [key: string]: number };
};

const DashboardCredit: React.FC<DashboardCreditProps> = ({ credits }) => {
  const orderedKeys = ["available", "running", "reserved"];

  return (
    <Grid sx={{ px: 5 }}>
      <Grid
        container
        sx={{
          p: 1,
          border: 1,
          borderRadius: 1,
          borderColor: "#C9D1D6",
          backgroundColor: "#ffffff",
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            fontWeight: 400,
            fontSize: 12,
          }}
        >
          CRÉDITOS PARA PAINEL
        </Box>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              px: 5,
              py: 6,
              gap: 2,
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

            <Button
              disableRipple
              variant="outlined"
              size="large"
              sx={{ width: "100%", borderColor: "#C9D1D6" }}
            >
              GERENCIAR CRÉDITOS
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardCredit;
