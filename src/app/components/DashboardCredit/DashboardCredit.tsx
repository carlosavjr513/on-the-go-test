import { Box, Button, Grid } from "@mui/material";
import React from "react";
import DashboardCreditCard from "./DashboardCreditCard";

type DashboardCreditProps = {
  credits: { [key: string]: number };
};

const DashboardCredit: React.FC<DashboardCreditProps> = ({ credits }) => {
  return (
    <Grid
      container
      sx={{
        p: 1,
        border: 1,
        borderRadius: 1,
        borderColor: "#C9D1D6",
        backgroundColor: "#ffffff",
        m: 1,
      }}
    >
      <Box
        sx={{
          textAlign: "left",
          fontWeight: 400,
          fontSize: 12,
          mb: 2,
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
          }}
        >
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12} md={12} xl={4}>
              <DashboardCreditCard
                title={"available"}
                value={credits.available}
              />
            </Grid>
            <Grid item xs={6} md={6} xl={4}>
              <DashboardCreditCard title={"running"} value={credits.running} />
            </Grid>
            <Grid item xs={6} md={6} xl={4}>
              <DashboardCreditCard
                title={"reserved"}
                value={credits.reserved}
              />
            </Grid>
          </Grid>

          <Button
            disableRipple
            variant="outlined"
            size="large"
            sx={{ width: "100%", borderColor: "#C9D1D6", my: 2 }}
          >
            GERENCIAR CRÉDITOS
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardCredit;
