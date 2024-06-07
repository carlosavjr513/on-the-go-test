import { MyResearchesCarouselProps } from "@/types/types";
import {
  ArrowBackIos,
  ArrowForward,
  ArrowForwardIos,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MyResearchCard from "./MyResearchCard";

const MyResearchesCarousel: React.FC<MyResearchesCarouselProps> = ({
  myResearches,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isXs = useMediaQuery(theme.breakpoints.up("xs"));
  const containerRef = useRef<HTMLDivElement>(null);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scroll = (scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  };

  const getMaxWidth = () => {
    if (isXl) return 1200;
    if (isMd) return 800;
    if (isSm) return 600;
    if (isXs) return 400;
    return 400;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollPosition(containerRef.current.scrollLeft);
        const isScrollable =
          containerRef.current.scrollLeft <
          containerRef.current.scrollWidth - containerRef.current.clientWidth;
        setIsScrollable(isScrollable);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {getMaxWidth() < 1200 && getMaxWidth() > 400 && (
        <Button
          disableRipple
          size="small"
          onClick={() => scroll(-100)}
          sx={{
            height: 64,
            mr: 1,
            backgroundColor: scrollPosition === 0 ? "#C9D1D6" : "#000",
            "&:hover": {
              backgroundColor: scrollPosition === 0 ? "#C9D1D6" : "#000",
            },
          }}
        >
          <ArrowBackIos
            sx={{ color: scrollPosition === 0 ? "#C3C7CA" : "#fff" }}
          />
        </Button>
      )}
      <Box
        ref={containerRef}
        sx={{
          py: 2,
          display: "flex",
          justifyContent: "center",
          overflow: "auto",
          width: `${getMaxWidth()}px`,
          whiteSpace: "nowrap",
          gap: 1,
          scrollbarWidth: "none",
          minHeight: "180px",
        }}
      >
        {myResearches.map((myResearch, index) => (
          <Box
            key={index}
            sx={{ display: "inline-block", p: 0, position: "relative" }}
          >
            <MyResearchCard key={index} myResearch={myResearch} />
          </Box>
        ))}
        <Box
          sx={{
            p: 0,
            position: "relative",
          }}
        >
          <Card
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            sx={{
              backgroundColor: "#000000",
              textAlign: "center",
              color: "#FFFFFF",
              width: isHovered ? "185px" : "200px",
              height: "190px",
              transition: "transform 0.2s ease-out",
              right: -200,
              top: 0,
              transformOrigin: "right",
              overflow: "hidden",
              position: "absolute",
              "&:hover": {
                transform: "translateX(0px)",
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                p: 0,
                transition: "transform 0.2s ease-out",
                "&:hover": {
                  transform: "translateX(20px)",
                },
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                VER TODAS
                <ArrowForward />
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      {getMaxWidth() < 1200 && getMaxWidth() > 400 && (
        <Button
          disableRipple
          size="small"
          onClick={() => scroll(100)}
          sx={{
            height: 64,
            ml: 1,
            backgroundColor: !isScrollable ? "#C9D1D6" : "#000",
            "&:hover": {
              backgroundColor: !isScrollable ? "#C9D1D6" : "#000",
            },
          }}
        >
          <ArrowForwardIos sx={{ color: !isScrollable ? "#C3C7CA" : "#fff" }} />
        </Button>
      )}
    </Box>
  );
};

export default MyResearchesCarousel;
