import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import { Home } from "./components/home";
import { ProjectList } from "./components/projects";
import { About } from "./components/about";
import { profile_db, project_db } from "./components/db";

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) =>
    html(
      <BaseHtml>
        <body
          id="body"
          class="w-screen h-screen"
          hx-get="/home"
          hx-trigger="load"
          hx-swap="innerHTML"
        ></body>
      </BaseHtml>
    )
  )
  .post("/clicked", () => <div class="text-blue-600">I'm from the server!</div>)
  .get("/projects", () => <ProjectList projects={project_db} />)
  .get("/home", () => <Home profile={profile_db} />)
  .get("/about", () => <About />)
  .get("/public/profile.jpeg", () => Bun.file("./public/profile.jpeg"))
  .get("/public/jhigh_resume.pdf", () => Bun.file("./public/jhigh_resume.pdf"))
  .get("/public/hamburger.png", () => Bun.file("./public/hamburger.png"))
  .get("/public/dots.png", () => Bun.file("./public/dots.png"))
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Judah High</title>
  <script src="https://unpkg.com/htmx.org@1.9.6" integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni" crossorigin="anonymous"></script>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@3.8.1/dist/full.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>

${children}
`;
