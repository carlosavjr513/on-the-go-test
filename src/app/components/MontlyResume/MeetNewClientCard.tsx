import { Add } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const MeetNewClientCard: React.FC = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#c7b2ff",
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        // height: "100%",
        width: "80%",
      }}
    >
      <CardContent sx={{ width: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <img
            src="/img/new.gif"
            alt="meetNewClientGif"
            style={{ width: "92px", height: "92px" }}
          />
        </div>
        <Typography
          sx={{
            fontWeight: 700,
            color: "#000000",
            textAlign: "center",
          }}
        >
          Pronto para conhecer o seu cliente?
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button
          size="large"
          variant="contained"
          sx={{
            backgroundColor: "#000000",
            width: "90%",
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
      </CardActions>
    </Card>
  );
};

export default MeetNewClientCard;
