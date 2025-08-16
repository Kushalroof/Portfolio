import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const projects = [
  {
    id: 1,
    title: "Explora",
    description: "A property listing website built with Express and Node.js.",
    github: "Explora",
    link: "https://explora-rj8g.onrender.com/",
  },
  {
    id: 2,
    title: "VConfer",
    description:
      "A video conferencing application built using WebRTC with React and Node.js.",
    github: "VConfer",
    link: "https://vconferfrontend.onrender.com/",
  },
  {
    id: 3,
    title: "Payment Gateway",
    description: "Payment gateway integration using Stripe API.",
    github: "Payment_gateway",
  },
  {
    id: 4,
    title: "WeatherFinder",
    description:
      "A weather application that provides current weather data using OpenWeatherMap API.",
    github: "WeatherFinder",
  },
];

export default function Projects() {
  return (
    <div className="p-4 mt-18" style={{ fontFamily: "'Press Start 2P', cursive" }}>
      <h1
        className="text-4xl mb-10 text-center"
        style={{
          color: "white",
        }}
      >
        MY PROJECTS
      </h1>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">
        {projects.map((project) => (
          <Card
            key={project.id}
            sx={{
              width: "100%",
              height: "100%",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: "16px",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                border: "2px solid rgba(256, 256, 256, 0.7)",
                boxShadow: "0 12px 25px rgba(256, 256, 256, 0.3)",
              },
              fontFamily: "'Press Start 2P', cursive",
              color: "white",
            }}
            className="shadow-lg rounded-xl flex flex-col justify-between"
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  color: "white",
                  fontSize: "14px",
                  fontFamily: "'Press Start 2P', cursive",
                }}
              >
                {project.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: 400,
                  fontSize: "10px",
                  fontFamily: "'Press Start 2P', cursive",
                }}
              >
                {project.description}
              </Typography>
            </CardContent>


            <CardActions sx={{ justifyContent: "flex-end" }}>
              {project.github && (
                <Link
                className="p-4"
                  href={`https://github.com/Kushalroof/${project.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    transition: "0.3s",
                    "&:hover": {
                      color: "#ffffff",
                      transform: "scale(1.2)",
                    },
                    fontFamily: "'Press Start 2P', cursive",
                  }}
                >
                  <GitHubIcon />
                </Link>
              )}
              {project.link && (
                <Link
                className="p-2 pe-4"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    transition: "0.3s",
                    "&:hover": {
                      color: "#ffffff",
                      transform: "scale(1.2)",
                    },
                    fontFamily: "'Press Start 2P', cursive",
                  }}
                >
                  <OpenInNewIcon />
                </Link>
              )}
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
