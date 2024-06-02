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
        padding: "12px",
        borderRadius: 1,
        height: "171px",
        width: "212px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
              fontWeight: 700,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {dataType === "running" ? (
              <>
                <span>PESQUISAS</span>
                <span>EM CAMPO</span>
              </>
            ) : dataType === "audience" ? (
              <>
                <span>DISPAROS</span>
                <span>FEITOS</span>
              </>
            ) : (
              <>
                <span>PESQUISAS SEM</span>
                <span>ROTEIRIZAÇÃO</span>
              </>
            )}
          </Typography>
        </Grid>
        {dataType === "running" && <CircleIndicator count={data} />}
        {dataType === "audience" && (
          <FillingBar numerator={data.sended} denominator={data.balance} />
        )}
      </Grid>
      {dataType === "running" && (
        <Circle sx={{ color: "#0AD2A5", fontSize: 8 }} />
      )}
    </Grid>
  );
};

export default MontlyResumeCard;
