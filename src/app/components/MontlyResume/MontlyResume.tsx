import { Grid, Typography } from "@mui/material";
import React from "react";
import MeetNewClientCard from "./MeetNewClientCard";
import MontlyResumeCard from "./MontlyResumeCard";

interface MonthlyResumeProps {
  date: string;
  running: [number, number];
  scripting: number;
  audience: any;
}

const MontlyResume: React.FC<MonthlyResumeProps> = ({
  date,
  running,
  scripting,
  audience,
}) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        pt: 0.5,
        backgroundColor: "#000000",
        color: "#ffffff",
        width: "100%",
      }}
    >
      <Grid
        item
        xl={8}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid item sx={{ textAlign: "left", px: 1 }}>
          <Typography sx={{ fontSize: 10, fontWeight: 400 }}>
            RESUMO MENSAL
          </Typography>
          <Typography sx={{ fontSize: 22, fontWeight: 700 }}>{date}</Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item xs={6} sm={6} md={4} xl={4}>
              <MontlyResumeCard dataType="running" data={running} />
            </Grid>
            <Grid item xs={6} sm={6} md={4} xl={4}>
              <MontlyResumeCard dataType="scripting" data={scripting} />
            </Grid>
            <Grid item xs={12} sm={12} md={4} xl={4}>
              <MontlyResumeCard dataType="audience" data={audience} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        xl={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-end",
          mb: "20px",
          px: 1,
        }}
      >
        <MeetNewClientCard />
      </Grid>
    </Grid>
  );
};

export default MontlyResume;
