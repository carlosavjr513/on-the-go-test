import { MyResearchesCarouselProps } from "@/types/types";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, Grid, MobileStepper, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import AllResearchesCard from "./AllResearchesCard";
import MyResearchCard from "./MyResearchCard";

const MyResearchesCarousel: React.FC<MyResearchesCarouselProps> = ({
  myResearches,
}) => {
  const steps = [...myResearches, "All Researches"];
  const [activeStep, setActiveStep] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const isBetween596And1092 = useMediaQuery(
    "(min-width: 596px) and (max-width: 1092px)"
  );
  const isBetween1092And1380 = useMediaQuery(
    "(min-width: 1092px) and (max-width: 1380px)"
  );
  const isAbove1380 = useMediaQuery("(min-width: 1380px)");

  // prettier-ignore
  let visibleCards = isAbove1380 ? 4 : isBetween1092And1380 ? 3 : isBetween596And1092 ? 2 : 1;
  const maxSteps = Math.ceil(steps.length / visibleCards);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setActiveStep(0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const isBackButtonDisabled = activeStep === 0;
  const isNextButtonDisabled = activeStep >= maxSteps - 1;
  const areBothButtonsDisabled = isBackButtonDisabled && isNextButtonDisabled;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
        }}
      >
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{
            height: "64px",
            backgroundColor: activeStep === 0 ? "#0000" : "#000",
            color: "#fff",
            mr: 1,
            "&:hover": {
              backgroundColor: activeStep === 0 ? "#0000" : "#000",
            },
            visibility: areBothButtonsDisabled ? "hidden" : "visible",
          }}
        >
          <KeyboardArrowLeft sx={{ fontSize: "50px" }} />
        </Button>

        <Grid container spacing={2} justifyContent="center">
          {steps
            .slice(
              activeStep * visibleCards,
              activeStep * visibleCards + visibleCards
            )
            .map((step, index) => (
              <Grid item key={index}>
                {typeof step === "string" ? (
                  <AllResearchesCard />
                ) : (
                  <MyResearchCard myResearch={step} />
                )}
              </Grid>
            ))}
        </Grid>

        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep >= maxSteps - 1}
          sx={{
            height: "64px",
            backgroundColor: activeStep >= maxSteps - 1 ? "#0000" : "#000",
            color: "#fff",
            ml: 1,
            "&:hover": {
              backgroundColor: activeStep >= maxSteps - 1 ? "#0000" : "#000",
            },
            visibility: areBothButtonsDisabled ? "hidden" : "visible",
          }}
        >
          <KeyboardArrowRight sx={{ fontSize: "50px" }} />
        </Button>
      </Box>

      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          backgroundColor: "transparent",
          visibility: areBothButtonsDisabled ? "hidden" : "visible",
        }}
        nextButton={<Box />}
        backButton={<Box />}
      />
    </Box>
  );
};

export default MyResearchesCarousel;
