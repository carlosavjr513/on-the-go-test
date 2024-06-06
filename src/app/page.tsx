"use client";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ContactsCard from "./components/Audience/ContactsCard";
import SendedBalanceCard from "./components/Audience/SendedBalanceCard";
import DashboardCredit from "./components/DashboardCredit/DashboardCredit";
import MontlyResume from "./components/MontlyResume/MontlyResume";
import MyResearchesCarousel from "./components/MyResearches/MyResearchesCarousel";
import NotificationTabs from "./components/Notification/NotificationTabs";
import { formatDate, splitRunning } from "./utils/functions";

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

interface NotificationData {
  comments: number;
  read: boolean;
  mensage: string;
  id: string;
  createdAt: string;
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

  const {
    register: notificationsRegister,
    setValue: notificationsSetValue,
    watch: notificationsWatch,
  } = useForm<{
    notifications: NotificationData[];
  }>({
    defaultValues: {
      notifications: [],
    },
  });

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const homeResponse = await axios.get(
          "/api/home/7a581b0e16b559ff9a9957"
        );

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
        console.error("Error fetching data: ", err);
      }
    };

    fetchHome();
  }, [setValue]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const notificationsResponse = await axios.get("/api/notifications");
        notificationsSetValue("notifications", notificationsResponse.data);
      } catch (error) {
        console.error("Error fetching notifications: ", error);
      }
    };

    fetchNotifications();
  }, [notificationsSetValue]);

  const { date, running, scripting, audience, credits, myResearches } = watch();

  const notifications = notificationsWatch("notifications");

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        xl={9}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box
          sx={{
            color: "#fff",
            flex: "1 0 auto",
          }}
        >
          <MontlyResume
            date={date}
            running={running}
            scripting={scripting}
            audience={audience}
          />
        </Box>

        <Grid container>
          <Grid item xs={12} md={9} xl={12}>
            <Box>
              <MyResearchesCarousel myResearches={myResearches} />
            </Box>
            <Box>
              <Grid
                container
                sx={{
                  p: 1,
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                <Grid item xs={12} md={6}>
                  <DashboardCredit credits={credits} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 1,
                  }}
                >
                  <ContactsCard contacts={audience.contacts} />
                  <SendedBalanceCard audience={audience} />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid
            item
            md={3}
            sx={{
              display: { xs: "none", sm: "none", md: "flex", xl: "none" },
            }}
          >
            <NotificationTabs notifications={notifications} />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        md={3}
        sx={{
          display: { xs: "none", sm: "none", md: "none", xl: "flex" },
        }}
      >
        <NotificationTabs notifications={notifications} />
      </Grid>
    </Grid>
  );
}
