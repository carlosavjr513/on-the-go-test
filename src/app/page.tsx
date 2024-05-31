"use client";
import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
// import axios from "axios";

export default function Home() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/home/7a581b0e16b559ff9a9957');
  //       console.log('HOME:', response.data);
  //     } catch (err) {
  //       console.error('Error fetching data:', err);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        Welcome to Material-UI with Next.js
      </Typography>      
    </Container>
  );
}
