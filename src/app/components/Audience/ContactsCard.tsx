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
import Groups from "@mui/icons-material/Groups";
import ArrowForward from "@mui/icons-material/ArrowForward";

type ContactsCardProps = {
  contacts: number;
};

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
      <CardHeader avatar={<Groups />} title="AUDIÊNCIA" sx={{ padding: 1 }} />
      <Divider />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: 0,
          paddingX: 2,
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "700", fontSize: "38px" }}>
            {contacts}
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
            padding: 0
          }}
        >
          <ArrowForward fontSize="small" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactsCard;
