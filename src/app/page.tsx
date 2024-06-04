"use client";
import { Add } from "@mui/icons-material";
// prettier-ignore
import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ContactsCard from "./components/Audience/ContactsCard";
import SendedBalanceCard from "./components/Audience/SendedBalanceCard";
import DashboardCredit from "./components/DashboardCredit/DashboardCredit";
import MontlyResumeCard from "./components/MontlyResume/MontlyResumeCard";
import MyResearchesCarousel from "./components/MyResearches/MyResearchesCarousel";
import NotificationTabs from "./components/Notification/NotificationTabs";
import { formatDate, splitRunning } from "./utils/functions";
import MeetNewClientCard from "./components/MontlyResume/MeetNewClient";

interface MyResearch {
  name: string;
  id: number;
  status: string;
}

interface HomeData {
  date: string;
  running: [number, number];
  scripting: number;
  audience: any;
  credits: { [key: string]: number };
  myResearches: MyResearch[];
}

export default function Home() {
  const { register, setValue, watch } = useForm<HomeData>({
    defaultValues: {
      date: "",
      running: [0, 0],
      scripting: 0,
      audience: {},
      credits: {},
      myResearches: [],
    },
  });

  useEffect(() => {
    const fetchHome = async () => {
      try {
        // prettier-ignore
        const homeResponse = await axios.get("/api/home/7a581b0e16b559ff9a9957");
        console.log("HOME: ", homeResponse.data);

        const formattedDate = formatDate(homeResponse.data.createAt);
        const running = splitRunning(homeResponse.data.researches.running);
        const scripting = homeResponse.data.researches.scripting;
        const audience = homeResponse.data.audience;
        const credits = homeResponse.data.credits;
        const myResearches = homeResponse.data.researches.myresearches;

        setValue("date", formattedDate);
        setValue("myResearches", myResearches);
        setValue("running", running);
        setValue("scripting", scripting);
        setValue("audience", audience);
        setValue("credits", credits);
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
    };

    fetchHome();
  }, [setValue]);

  const { date, running, scripting, audience, credits, myResearches } = watch();

  return (
    // GRID MÃE
    <Grid container sx={{ display: "flex" }}>
      {/* GRID IRMA DA FUCHSIA */}
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        xl={9}
        sx={{
          display: "flex",
          // backgroundColor: "#000000"
          width: "100vw",
        }}
      >
        {/* GRID INTERNA PRETA - RESUMO */}
        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          xl={12}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            pt: 1,
            backgroundColor: "#000000",
            color: "#ffffff",
            width: "100vw",
          }}
        >
          <Grid
            item
            xl={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Grid
              item
              sx={{
                textAlign: "left",
                px: 5,
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: 10, fontWeight: 400 }}
              >
                RESUMO MENSAL
              </Typography>
              <Typography variant="h5" sx={{ fontSize: 22, fontWeight: 700 }}>
                {date}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                px: 5,
              }}
            >
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={6} sm={6} md={4} xl={4}>
                  <MontlyResumeCard dataType="running" data={running} />
                </Grid>
                <Grid item xs={6} sm={6} md={4} xl={4}>
                  <MontlyResumeCard dataType="scripting" data={scripting} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} xl={4}>
                  <MontlyResumeCard dataType="audience" data={audience} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* NOVA PESQUISA CARTAO ROXO */}
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MeetNewClientCard />
          </Grid>
        </Grid>

        {/* GRID AZUL */}
        <Grid
          item
          md={9}
          xl={12}
          sx={{
            backgroundColor: "#eef2f3",
            // backgroundColor: "#8000ff", // PLACEHOLDER
            px: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            sx={{
              // backgroundColor: "#00f", // PLACEHOLDER
              p: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MyResearchesCarousel myResearches={myResearches} />
          </Grid>

          {/* GRID AMARELA */}
          <Grid
            container
            sx={{
              // backgroundColor: "#ff0", // PLACEHOLDER
              p: 1,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Grid item sm={10} md={5} xl={5}>
              <DashboardCredit credits={credits} />
            </Grid>
            <Grid
              container
              sm={10}
              md={5}
              xl={5}
              sx={{ display: "flex", justifyContent: "center", m: 1 }}
            >
              <Grid item xs={12} sm={12} md={12} xl={10}>
                <ContactsCard contacts={audience.contacts} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} xl={10}>
                <SendedBalanceCard audience={audience} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* GRID CIANO */}
        <Grid
          item
          md={3}
          sx={{
            // backgroundColor: "#eef2f3",
            // backgroundColor: "#0ff",
            textAlign: "center",
            display: { xs: "none", sm: "none", md: "block", xl: "none" },
          }}
        >
          <NotificationTabs />
        </Grid>
      </Grid>
      {/* GRID FUCHSIA */}
      <Grid
        item
        xl={3}
        sx={{
          // backgroundColor: "#eef2f3",
          // backgroundColor: "#f0f",
          display: { xs: "none", sm: "none", md: "none", xl: "block" },
        }}
      >
        <NotificationTabs />
      </Grid>
    </Grid>
  );
}
