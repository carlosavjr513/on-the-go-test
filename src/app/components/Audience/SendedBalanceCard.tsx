import React from "react";
import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  Box,
  Typography,
  Button,
} from "@mui/material";
import Email from "@mui/icons-material/Email";

type SendedBalanceCardProps = {
  audience: {
    sended: number;
    balance: number;
  };
};

const SendedBalanceCard: React.FC<SendedBalanceCardProps> = ({ audience }) => {
  return (
    <Card
      sx={{
        border: 1,
        borderRadius: 1,
        borderColor: "#C9D1D6",
        boxShadow: "none",
      }}
    >
      <CardHeader avatar={<Email />} title="DISPAROS" sx={{ p: 0.5 }} />
      <Divider />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          py: 0,
          px: 2,
        }}
      >
        <Box sx={{ marginBottom: 2 }}>
          <Typography sx={{ fontWeight: "700", fontSize: "38px" }}>
            {audience.sended}
            <span style={{ fontSize: 18, color: "#8A9099" }}>
              /{audience.balance}
            </span>
          </Typography>
          <Typography sx={{ fontWeight: "700", fontSize: "14px" }}>
            Disparos Feitos
          </Typography>
        </Box>
        <Button
          disableRipple
          variant="outlined"
          size="large"
          sx={{
            borderColor: "#C9D1D6",
          }}
        >
          IR PARA CAMPANHAS
        </Button>
      </CardContent>
    </Card>
  );
};

export default SendedBalanceCard;
