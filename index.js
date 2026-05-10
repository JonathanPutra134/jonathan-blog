const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const blogsHome = require("./data/home/blogs-card.json");
const blogsProjects = require("./data/projects/blogs-card.json");
const blogsProjectPages = require("./data/projects/blogs-pages.json");
const blogsLearnings = require("./data/learnings/blogs-card.json");
const blogsCareers = require("./data/careers/blogs-card.json");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Blog Web",
    description: "Your Node.js web application is ready.",
    active: "home",
    blogsHome
  });
});

app.get("/projects", (req, res) => {
  res.render("projects/index", {
    title: "Blog Web",
    description: "Your Node.js web application is ready.",
    active: "projects",
    blogsProjects
  });
});

app.get("/projects/:slug", (req, res) => {
  const blogPage = blogsProjectPages.find((page) => page.slug === req.params.slug);

  if (!blogPage) {
    return res.status(404).send("Project page not found.");
  }

  return res.render("projects/blog-page", {
    title: `${blogPage.title} | Projects`,
    active: "projects",
    blogPage
  });
});

app.get("/learnings", (req, res) => {
  res.render("learnings/index", {
    title: "Learnings | Blog Web",
    description: "Learning notes, certifications, and study progress.",
    active: "learnings",
    blogsLearnings
  });
});

app.get("/careers", (req, res) => {
  res.render("careers/index", {
    title: "Careers | Blog Web",
    description: "Career milestones, experience, and professional journey.",
    active: "careers",
    blogsCareers
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
