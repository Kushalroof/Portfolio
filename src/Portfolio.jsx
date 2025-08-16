import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import XIcon from "@mui/icons-material/X";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";


export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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
        width: "140px",
        height: "50px",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(12px)",
        borderRadius: "46px",
        border: "2px solid rgba(255, 255, 255, 0.2)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          border: "2px solid rgba(255, 255, 255, 0.7)",
        },
        fontFamily: "'Press Start 2P', cursive",
        color: "white",
        margin: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="shadow-lg rounded-xl"
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: 200,
          color: "white",
          fontSize: "12px",
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        {title}
      </Typography>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1
        className="text-3xl md:text-5xl font-bold mb-6"
        style={{ fontFamily: "'Press Start 2P', cursive", color: "white" }}
      >
        Hey I'm KUSHAL!
      </h1>

      <p
        className="text-xs md:text-sm mb-10 max-w-2xl leading-relaxed"
        style={{ fontFamily: "'Press Start 2P', cursive", color: "white" }}
      >
        — A passionate software developer with experience in building scalable
        web applications and solving real-world problems through code.
      </p>

      <button
        onClick={() => navigate("/projects")}
        className="px-6 py-3 mb-12 bg-purple-600 text-white rounded-xl shadow-md transition hover:bg-purple-800"
        style={{ fontFamily: "'Press Start 2P', cursive" }}
      >
        View My Work
      </button>

      <h2
        className="text-lg md:text-xl font-bold mb-6"
        style={{ fontFamily: "'Press Start 2P', cursive", color: "white" }}
      >
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <SkillCard title="MongoDB" />
        <SkillCard title="Node.js" />
        <SkillCard title="Express.js" />
        <SkillCard title="React" />
        <SkillCard title="RESTful API" />
        <SkillCard title="Git/Github" />
      </div>


      <footer className="py-6">
        <h2
          className="text-lg md:text-xl font-bold mb-4"
          style={{ fontFamily: "'Press Start 2P', cursive", color: "white" }}
        >
          Contact Me
        </h2>

        <div className="flex justify-center gap-6">
          <Link href="https://github.com/Kushalroof" target="_blank">
            <GitHubIcon fontSize="large" sx={{ color: "white" }} />
          </Link>
          <Link href="https://www.instagram.com/kushallsreddy/" target="_blank">
            <InstagramIcon fontSize="large" sx={{ color: "white" }} />
          </Link>
          <Link href="https://x.com/K11Kushal" target="_blank">
            <XIcon fontSize="large" sx={{ color: "white" }} />
          </Link>
          <Link onClick={() => copyToClipboard("kushalns28@gmail.com")}>
            <EmailIcon fontSize="large" sx={{ color: "white" }} />
          </Link>
        </div>
      </footer>

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
  );
}
