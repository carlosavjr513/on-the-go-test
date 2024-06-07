import { ContactsCardProps } from "@/types/types";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Groups from "@mui/icons-material/Groups";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

const ContactsCard: React.FC<ContactsCardProps> = ({ contacts }) => {
  return (
    <Card
      sx={{
        border: 1,
        borderRadius: 1,
        borderColor: "#C9D1D6",
        boxShadow: "none",
      }}
    >
      <CardHeader avatar={<Groups />} title="AUDIÊNCIA" sx={{ p: 0.5 }} />
      <Divider />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 0,
          px: 1,
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "700", fontSize: "38px" }}>
            {contacts !== undefined && contacts !== null ? contacts : 0}
          </Typography>
          <Typography sx={{ fontWeight: "700", fontSize: "14px" }}>
            Contatos
          </Typography>
        </Box>
        <Button
          disableRipple
          variant="outlined"
          size="large"
          sx={{
            borderColor: "#C9D1D6",
            height: "48px",
            width: "48px",
            p: 0,
          }}
        >
          <ArrowForward />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactsCard;
