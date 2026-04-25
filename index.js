const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Blog Web",
    description: "Your Node.js web application is ready.",
    active: "home",
  });
});

app.get("/projects", (req, res) => {
  res.render("projects", {
    title: "Blog Web",
    description: "Your Node.js web application is ready.",
    active: "projects",
  });
});

app.get("/learnings", (req, res) => {
  res.render("Learnings", {
    title: "Learnings | Blog Web",
    description: "Learning notes, certifications, and study progress.",
    active: "learnings",
  });
});

app.get("/careers", (req, res) => {
  res.render("Careers", {
    title: "Careers | Blog Web",
    description: "Career milestones, experience, and professional journey.",
    active: "careers",
  });
});

app.get("/side-hobby-jobs", (req, res) => {
  res.render("side-hobby-jobs", {
    title: "Side Hobby & Jobs | Blog Web",
    description: "Side projects, hobbies, freelance work, and other activities.",
    active: "side-hobby-jobs",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
