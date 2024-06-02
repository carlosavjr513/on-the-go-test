"use client";
import { Add } from "@mui/icons-material";
// prettier-ignore
import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import CreditDashboard from "./components/CreditDashboard";
import MontlyResumeCard from "./components/MontlyResumeCard";
import { formatDate, splitRunning } from "./utils/functions";

export default function Home() {
  // const [date, setDate] = useState<string>("");
  // const [running, setRunning] = useState<[number, number]>([0, 0]);
  // const [scripting, setScripting] = useState<string>("");
  // const [audience, setAudience] = useState<any>("");

  type HomeData = {
    date: string;
    running: [number, number];
    scripting: string;
    audience: any;
    credits: { [key: string]: number };
  };

  const { register, setValue, watch } = useForm<HomeData>({
    defaultValues: {
      date: "",
      running: [0, 0],
      scripting: "",
      audience: {},
      credits: {},
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/home/7a581b0e16b559ff9a9957");
        console.log("HOME:", response.data);

        const formattedDate = formatDate(response.data.createAt);
        const running = splitRunning(response.data.researches.running);
        const scripting = response.data.researches.scripting;
        const audience = response.data.audience;
        const credits = response.data.credits;

        setValue("date", formattedDate);
        setValue("running", running);
        setValue("scripting", scripting);
        setValue("audience", audience);
        setValue("credits", credits);
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
    };

    fetchData();
  }, [setValue]);

  const date = watch("date");
  const running = watch("running");
  const scripting = watch("scripting");
  const audience = watch("audience");
  const credits = watch("credits");

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
              paddingY: 2,
              paddingX: 1,
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
                gap: 1,
              }}
            >
              <Grid
                item
                sx={{
                  textAlign: "left",
                  paddingX: 5,
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
                  paddingX: 5,
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
                paddingY: 3,
                paddingX: 5,
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
                sx={{ color: "#000000", marginTop: "10px", padding: 1 }}
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
            backgroundColor: "#ff0",
            height: "50vh", // PLACEHOLDER
          }}
        >
          <Grid>
            <CreditDashboard credits={credits} />
            <Grid>
              
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          md={3}
          sx={{
            backgroundColor: "#0ff",
            textAlign: "center",
            display: { md: "block", xl: "none " },
            height: "70vh", // PLACEHOLDER
          }}
        >
          NOTIFICAÇÕES
        </Grid>
      </Grid>

      <Grid
        item
        xl={3}
        sx={{
          backgroundColor: "#f0f",
          display: { xs: "none", sm: "none", md: "none", xl: "block" },
          height: "82vh", // PLACEHOLDER
        }}
      >
        NOTIFICAÇÕES
      </Grid>
    </Grid>
  );
}
