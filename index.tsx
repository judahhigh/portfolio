import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import { Home } from "./components/home";
import { ProjectList } from "./components/projects";
import { About } from "./components/about";
import { profile_db, project_db } from "./components/db";
import { Resume } from "./components/resume";

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
  .get("/resume", () => <Resume profile={profile_db} />)
  .get("/about", () => <About />)
  .get("/public/profile.jpeg", () => Bun.file("./public/profile.jpeg"))
  .get("/public/jhigh_resume.pdf", () => Bun.file("./public/jhigh_resume.pdf"))
  .get("/public/hamburger.png", () => Bun.file("./public/hamburger.png"))
  .get("/public/dots.png", () => Bun.file("./public/dots.png"))
  .get("/public/linkedin.png", () => Bun.file("./public/linkedin.png"))
  .get("/public/github.png", () => Bun.file("./public/github.png"))
  .get("/public/code_button.png", () => Bun.file("./public/code_button.png"))
  .get("/public/code_button_htmx.png", () =>
    Bun.file("./public/code_button_htmx.png")
  )
  .get("/public/code_reset_button_htmx.png", () =>
    Bun.file("./public/code_reset_button_htmx.png")
  )
  .get("/click-me", () => (
    <button
      id="htmx-example-button"
      class="btn btn-disabled m-8 btn-large btn-wide text-xl"
    >
      I've been clicked!
    </button>
  ))
  .get("/reset-click-me", () => (
    <button
      id="htmx-example-button"
      hx-get="/click-me"
      hx-trigger="click"
      hx-swap="outerHTML"
      class="btn btn-primary m-8 btn-large btn-wide text-xl"
    >
      Click Me
    </button>
  ))
  .get("/reveal", () => (
    <div class="flex flex-col items-center">
      <p id="reveal" class="text-lg md:text-2xl py-8 px-8 text-justify">
        Below we now have the HTMX button, which will now replace the button
        with some new content whenever you click on it. To reset the 'Click Me'
        button, click on the 'Reset' button. How do you think the 'Reset' button
        works? How does it differ from the 'Click Me' HTMX button we've
        described so far?
        <span class="text-secondary text-bold">
          The 'Reset' button must somehow replace an HTML element other than
          itself, this is done through the HTMX 'hx-target' attribute. To
          restore the 'Click Me' button to it's original value, the 'Reset'
          button targets it and swaps out the HTML with the original 'Click Me'
          button HTML. Below is the definition of the 'Reset' button where the
          target id is the id given to the 'Click Me' button.
        </span>
      </p>
      <img
        class="rounded-xl p-8 drop-shadow-xl md:w-3/5"
        src="../public/code_reset_button_htmx.png"
      ></img>
    </div>
  ))
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
