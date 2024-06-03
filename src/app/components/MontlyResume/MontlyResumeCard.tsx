import { Circle } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";
import CircleIndicator from "./CircleIndicator";
import FillingBar from "./FillingBar";

interface MontlyResumeCardProps {
  data: any;
  dataType: string;
}

const MontlyResumeCard: React.FC<MontlyResumeCardProps> = ({
  data,
  dataType,
}) => {
  return (
    <Grid
      container
      sx={{
        color: "#8A9099",
        backgroundColor: "#242528",
        p: 2,
        borderRadius: 1,
        display: "flex",
        position: "relative",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Grid>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            <span
              style={{
                fontWeight: 700,
                color: "#ffffff",
                fontSize: "30px",
              }}
            >
              {dataType === "running"
                ? `${data[0]}`
                : dataType === "audience"
                ? `${data.sended}`
                : data}
            </span>
            {dataType === "scripting" ? <></> : <span>/</span>}
            {dataType === "scripting" ? (
              <></>
            ) : (
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                {dataType === "running" ? `${data[1]}` : `${data.balance}`}
              </span>
            )}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              display: "flex",
              flexDirection: "column",
              width: "60%",
            }}
          >
            {dataType === "running" ? (
              <span>PESQUISAS EM CAMPO</span>
            ) : dataType === "audience" ? (
              <span>DISPAROS FEITOS</span>
            ) : (
              <span>PESQUISAS SEM ROTEIRIZAÇÃO</span>
            )}
          </Typography>
        </Grid>
        {dataType === "running" && <CircleIndicator count={data} />}
        {dataType === "audience" && (
          <FillingBar numerator={data.sended} denominator={data.balance} />
        )}
      </Grid>
      {dataType === "running" && (
        <Circle
          sx={{
            color: "#0AD2A5",
            fontSize: 8,
            position: "absolute",
            top: 16,
            right: 8,
          }}
        />
      )}
    </Grid>
  );
};

export default MontlyResumeCard;
