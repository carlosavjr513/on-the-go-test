import { Circle } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
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
    <Card
      sx={{
        color: "#8A9099",
        backgroundColor: "#242528",
        borderRadius: 1,
        display: "flex",
        p: 1,
        m: 1,
        height: "80%",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              mb: 1,
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>
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
                  ? `${data.sended !== undefined ? data.sended : 0}`
                  : data}
              </span>
              {dataType === "scripting" ? <></> : <span>/</span>}
              {dataType === "scripting" ? (
                <></>
              ) : (
                <span
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {dataType === "running" ? `${data[1]}` : `${data.balance !== undefined ? data.balance : 0}`}
                </span>
              )}
            </Typography>
            {dataType === "running" && (
              <Circle
                sx={{
                  color: "#0AD2A5",
                  fontSize: 8,
                  alignSelf: "flex-start",                  
                }}
              />
            )}
          </Box>
          <Typography
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
        </Box>
        <Box sx={{ mt: 5, width: "100%" }}>
          {dataType === "running" && <CircleIndicator count={data} />}
          {dataType === "audience" && (
            <FillingBar numerator={data.sended} denominator={data.balance} />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MontlyResumeCard;
