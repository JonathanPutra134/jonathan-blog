const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const blogs = require("./data/home/blogs-card.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Blog Web",
    description: "Your Node.js web application is ready.",
    active: "home",
    blogs
  });
});

app.get("/projects", (req, res) => {
  res.render("projects/index", {
    title: "Blog Web",
    description: "Your Node.js web application is ready.",
    active: "projects",
  });
});

app.get("/learnings", (req, res) => {
  res.render("learnings/index", {
    title: "Learnings | Blog Web",
    description: "Learning notes, certifications, and study progress.",
    active: "learnings",
  });
});

app.get("/careers", (req, res) => {
  res.render("careers/index", {
    title: "Careers | Blog Web",
    description: "Career milestones, experience, and professional journey.",
    active: "careers",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
