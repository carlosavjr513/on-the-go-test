"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatDate, splitRunning } from "./utils/functions";
import { Circle, Add } from "@mui/icons-material";
import CircleIndicator from "./components/CircleIndicator";
import FillingBar from "./components/FillingBar";
import MontlyResumeCard from "./components/MontlyResumeCard";

export default function Home() {
  const [date, setDate] = useState<string>("");
  const [running, setRunning] = useState<[number, number]>([0, 0]);
  const [scripting, setScripting] = useState<string>("");
  const [audience, setAudience] = useState<any>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/home/7a581b0e16b559ff9a9957");
        console.log("HOME:", response.data);

        const formattedDate = formatDate(response.data.createAt);
        setDate(formattedDate);

        const running = splitRunning(response.data.researches.running); // const running = splitRunning("2/5");
        setRunning(running);

        const scripting = response.data.researches.scripting;
        setScripting(scripting);

        const audience = response.data.audience;
        setAudience(audience);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/notifications');
  //       console.log('NOTIFICATIONS:', response.data);
  //     } catch (err) {
  //       console.error('Error fetching data:', err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Container
      className="full-width-element"
      sx={{
        backgroundColor: "#000000",
        color: "#ffffff",
        margin: 0,
        padding: 0,
        height: "250px",
        display: "flex",
        justifyContent: "space-evenly",
        gap: 1,
      }}
    >
      <Container
        sx={{ 
          height: 224,
          borderRadius: 1,
          top: "87px",
          left: "165px",
          gap: "15px",
        }}
      >
        <Container sx={{ textAlign: "left" }}>
          <Typography variant="body1" sx={{ fontSize: 10, fontWeight: 400 }}>
            RESUMO MENSAL
          </Typography>
          <Typography variant="h5" sx={{ fontSize: 22, fontWeight: 700 }}>
            {date}
          </Typography>
        </Container>
        <Container sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <MontlyResumeCard dataType="running" data={running}/>
          <MontlyResumeCard dataType="scripting" data={scripting}/>
          <MontlyResumeCard dataType="audience" data={audience}/>
        </Container>
      </Container>
      <Container
        sx={{
          backgroundColor: "#c7b2ff",
          height: "224px",
          width: "426px",
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <img
          src="/img/new.gif"
          alt="meetNewClientGif"
          style={{ width: "92px", height: "92px" }}
        />
        <Typography
          variant="body1"
          fontWeight={700}
          sx={{ color: "#000000", marginTop: "10px", padding: 1 }}
        >
          Pronto para conhecer o seu cliente?
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "fit-content",
            marginTop: "10px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              width: "100%",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#ffffff",
                zIndex: 1,
                transition: "transform 0.15s ease-out",
                transform: "translateY(100%)",
              },
              "&:hover::before": {
                transform: "translateY(0)",
              },
              "&:hover": {
                color: "#000000",
                "& .MuiSvgIcon-root": {
                  transform: "rotate(90deg)",
                },
              },
            }}
          >
            <span style={{ position: "relative", zIndex: 2, fontWeight: 700 }}>
              Nova pesquisa
            </span>
            <Add
              sx={{
                marginLeft: "5px",
                transition: "transform 0.15s ease-out",
                position: "relative",
                zIndex: 2,
              }}
            />
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
