"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatDate, splitRunning } from "./utils/functions";
import { Circle, Add } from "@mui/icons-material";
import CircleIndicator from "./components/CircleIndicator";
import FillingBar from "./components/FillingBar";

export default function Home() {
  const [date, setDate] = useState<string>("");
  const [running, setRunning] = useState<[string, string]>(["", ""]);
  const [scripting, setScripting] = useState<string>("");
  const [audience, setAudience] = useState<any>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/home/7a581b0e16b559ff9a9957");
        console.log("HOME:", response.data);

        const formattedDate = formatDate(response.data.createAt);
        setDate(formattedDate);

        const running = splitRunning(response.data.researches.running);
        setRunning(running); // setRunning(['2', '/5']);

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
          backgroundColor: "#f00", // DELETE ME WHEN DONE
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
          <Container>
            <Container
              sx={{
                color: "#8A9099",
                backgroundColor: "#242528",
                padding: "12px",
                borderRadius: 1,
                height: "171px",
                width: "212px", // DELETE ME WHEN DONE
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0 20px",
                  justifyContent: "space-between",
                }}
              >
                <Container>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    <span
                      style={{
                        fontWeight: 700,
                        color: "#ffffff",
                        fontSize: "30px",
                      }}
                    >
                      {running[0]}
                    </span>
                    <span>/</span>
                    <span style={{ fontSize: "18px" }}>{running[1]}</span>
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span>PESQUISAS</span>
                    <span>EM CAMPO</span>
                  </Typography>
                </Container>
                <CircleIndicator count={parseInt(running[0], 10)} />
              </Container>
              <Circle sx={{ color: "#0AD2A5", fontSize: 8, marginRight: 1 }} />
            </Container>
          </Container>
          <Container>
            <Container
              sx={{
                color: "#8A9099",
                backgroundColor: "#242528",
                padding: "12px",
                borderRadius: 1,
                height: "171px",
                width: "212px", // DELETE ME WHEN DONE
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0 20px",
                  justifyContent: "space-between",
                }}
              >
                <Container>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#ffffff", fontSize: "30px" }}
                  >
                    {scripting}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span>PESQUISAS SEM</span>
                    <span>ROTEIRIZAÇÃO</span>
                  </Typography>
                </Container>
              </Container>
            </Container>
          </Container>
          <Container>
            <Container
              sx={{
                color: "#8A9099",
                backgroundColor: "#242528",
                padding: "12px",
                borderRadius: 1,
                height: "171px",
                width: "212px", // DELETE ME WHEN DONE
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0 20px",
                  justifyContent: "space-between",
                }}
              >
                <Container>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    <span
                      style={{
                        fontWeight: 700,
                        color: "#ffffff",
                        fontSize: "30px",
                      }}
                    >
                      {audience.sended}
                    </span>
                    <span>/</span>
                    <span style={{ fontSize: "18px" }}>{audience.balance}</span>
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span>DISPAROS</span>
                    <span>FEITOS</span>
                  </Typography>
                </Container>
                {/* CREATE BAR */}
                <FillingBar
                  numerator={audience.sended}
                  denominator={audience.balance}
                />
              </Container>
            </Container>
          </Container>
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
