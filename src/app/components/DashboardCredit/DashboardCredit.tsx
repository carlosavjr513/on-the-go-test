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
        border: 1,
        borderRadius: 1,
        borderColor: "#C9D1D6",
        backgroundColor: "#ffffff",
        height: "100%",
      }}
    >
      <Box
        sx={{
          textAlign: "left",
          fontWeight: 400,
          fontSize: 12,
          mt: 1,
          ml: 1,
        }}
      >
        CRÉDITOS PARA PAINEL
      </Box>
      <Grid container sx={{ justifyContent: "center", flexGrow: 1 }}>
        <Grid
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "100%" }}
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

          <Grid
            item
            xs={12}
            md={12}
            xl={4}
            sx={{ textAlign: "center", pb: 2 }}
          >
            <Button
              disableRipple
              variant="outlined"
              size="large"
              sx={{
                width: "96.5%",
                borderColor: "#C9D1D6",
              }}
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
