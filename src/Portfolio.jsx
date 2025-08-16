import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import XIcon from "@mui/icons-material/X";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => setOpen(true))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const SkillCard = ({ title }) => (
  <Card
    sx={{
      width: "160px",
      height: "60px",
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderRadius: "46px",
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
      margin: "10px",
      display: "flex",               
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",               
      textAlign: "center",
    }}
    className="shadow-lg rounded-xl"
  >
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: 200,
          color: "white",
          fontSize: "14px",
          fontFamily: "'Press Start 2P', cursive",
          padding: "0",
        }}
        className="text-center mt-4"
      >
        {title}
      </Typography>
  </Card>
);

  return (
    <div className="Pagecontainer">
      {/* About Section */}
      <div className="aboutMe">
        <h1
          className="text-4xl mb-10 mt-18 ml-62"
          style={{ fontFamily: "'Press Start 2P', cursive", color: "white" }}
        >
          Hey I'm KUSHAL!
        </h1>
        <p
          className="text-xs mb-10 mt-10 max-w-2xl ml-46 text-center"
          style={{ fontFamily: "'Press Start 2P', cursive", color: "white" }}
        >
          — A passionate software developer with experience in building scalable
          web applications and solving real-world problems through code
        </p>

        <div className="flex ml-98 mt-6">
        <a
          href="/projects"
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md transition hover:bg-purple-800"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          View My Work
        </a>
      </div>

        <h2
          className="text-xl font-bold mb-2 mt-22 ml-106"
          style={{ fontFamily: "'Press Start 2P', cursive", color: "white" }}
        >
          My Skills
        </h2>
      </div>

      {/* Skills Cards */}
      <div className="flex gap-2 mb-2 ml-36 mt-4">
        <SkillCard title="MongoDB" />
        <SkillCard title="Node.js" />
        <SkillCard title="Express.js" />
        <SkillCard title="React" />
      </div>
      <div className="flex mt-0 ml-82 gap-2">
        <SkillCard title="RESTful API" />
        <SkillCard title="Git/Github" />
      </div>

      {/* Footer Section */}
      <div className="min-h-auto flex flex-col mt-14">
        <div className="flex-grow"></div>
        <footer className="py-6 ml-36">
          <h2
            className="text-xl font-bold ml-68"
            style={{ fontFamily: "'Press Start 2P', cursive", color: "white" }}
          >
            Contact Me
          </h2>

          <div className=" flex items-center gap-4 ml-58">
            <Link
              className="p-4"
              href="https://github.com/Kushalroof"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "white",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <GitHubIcon />
            </Link>

            <Link
              className="p-4"
              href="https://www.instagram.com/kushallsreddy/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "white",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <InstagramIcon />
            </Link>

            <Link
              className="p-4"
              href="https://x.com/K11Kushal"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "white",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <XIcon />
            </Link>

            <Link
              className="p-4 cursor-pointer"
              onClick={() => copyToClipboard("kushalns28@gmail.com")}
              sx={{
                color: "white",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <EmailIcon />
            </Link>
          </div>
        </footer>

        {/* Snackbar */}
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%", fontFamily: "'Press Start 2P', cursive" }}
          >
            Email copied to clipboard!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
