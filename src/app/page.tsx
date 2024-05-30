"use client";
import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { fetchHomeData } from "./api/home/route";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHomeData();
        const data = await response;
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        Welcome to Material-UI with Next.js
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is an example of using Material-UI components in a Next.js
        application.
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Button variant="contained" color="secondary">
        Bye World
      </Button>
    </Container>
  );
}
