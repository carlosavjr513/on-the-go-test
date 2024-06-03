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
import NotificationTabs from "./components/Notification/NotificationTabs";
import { formatDate, splitRunning } from "./utils/functions";
import MyResearchCard from "./components/MyResearches/MyResearchCard";
import MyResearchesCarousel from "./components/MyResearches/MyResearchesCarousel";

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
    <Grid container sx={{ display: "flex" }}>
      <Grid container md={12} xl={9} sx={{ display: "flex" }}>
        <Grid item md={12} xl={12}>
          <Grid
            container
            xl={12}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              py: 3,
              px: 0,
              gap: 2,
              backgroundColor: "#000000",
              color: "#ffffff",
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
                  gap: 3,
                  px: 5,
                }}
              >
                <MontlyResumeCard dataType="running" data={running} />
                <MontlyResumeCard dataType="scripting" data={scripting} />
                <MontlyResumeCard dataType="audience" data={audience} />
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                backgroundColor: "#c7b2ff",
                borderRadius: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                px: 7,
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
                sx={{ color: "#000000", marginTop: "10px", p: 1 }}
              >
                Pronto para conhecer o seu cliente?
              </Typography>

              <Button
                size="large"
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
                <span
                  style={{ position: "relative", zIndex: 2, fontWeight: 700 }}
                >
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
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          md={9}
          xl={12}
          sx={{
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
            {/* <MyResearchesCarousel myResearches={myResearches.concat(myResearches)} /> */}
            <MyResearchesCarousel myResearches={myResearches} />
          </Grid>

          <Grid
            item
            sx={{
              // backgroundColor: "#ff0", // PLACEHOLDER
              px: 7,
              py: 1,
              justifyContent: "center",
              display: "flex",
            }}
          >
            <DashboardCredit credits={credits} />
            <Grid
              item
              xl={4}
              sx={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <ContactsCard contacts={audience.contacts} />
              <SendedBalanceCard audience={audience} />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          md={3}
          sx={{
            // backgroundColor: "#0ff",
            textAlign: "center",
            display: { md: "block", xl: "none " },
          }}
        >
          <NotificationTabs />
        </Grid>
      </Grid>

      <Grid
        item
        xl={3}
        sx={{
          // backgroundColor: "#f0f",
          display: { xs: "none", sm: "none", md: "none", xl: "block" },
        }}
      >
        <NotificationTabs />
      </Grid>
    </Grid>
  );
}
