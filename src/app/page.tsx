import { Button, Container, Typography } from "@mui/material";
import React from "react";

export default function Home() {
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
