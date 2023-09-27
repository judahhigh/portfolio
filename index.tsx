import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) =>
    html(
      <BaseHtml>
        <body
          class="flex w-full h-screen justify-center items-start"
          hx-get="/projects"
          hx-trigger="load"
          hx-swap="innerHTML"
        ></body>
      </BaseHtml>
    )
  )
  .post("/clicked", () => <div class="text-blue-600">I'm from the server!</div>)
  .get("/projects", () => <ProjectList projects={db} />)
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
  <title>THE BETH STACK</title>
  <script src="https://unpkg.com/htmx.org@1.9.6" integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni" crossorigin="anonymous"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

${children}
`;

type Project = {
  title: string;
  description: string;
  languages: string[];
  technologies: string[];
  links: string[];
};

const db: Project[] = [
  {
    title: "Contacts",
    description: "A rollodex app.",
    languages: ["Rust", "Typescript"],
    technologies: ["React", "Material UI", "Actix Web", "Biscuit auth", "REST", "SQLite"],
    links: [
      "https://github.com/judahhigh/contacts-frontend",
      "https://github.com/judahhigh/contacts-backend",
    ],
  },
  {
    title: "E-Commerce Store",
    description: "A fully featured E-commerce store.",
    languages: ["Go", "TypeScript"],
    technologies: ["Svelte", "SvelteKit", "Skeleton UI", "Go-Kit", "JWT", "REST", "gRCP", "Microservices", "Docker", "Kubernetes", "RabbitMQ", "PostgreSQL"],
    links: [
      "https://github.com/judahhigh/estore-backend",
    ],
  },
  {
    title: "Portolio",
    description: "Static webpage to display information about myself.",
    languages: ["TypeScript"],
    technologies: ["HTMX", "Tailwind CSS", "Bun"],
    links: [
      "https://github.com/judahhigh/portfolio",
    ],
  },
];

function ProjectItem({
  title,
  description,
  languages,
  technologies,
  links,
}: Project) {
  return (
    <div class="flex-col space-x-3 justify-end items-start">
      <p class="text-4xl font-semibold pb-4">{title}</p>
      <p class="text-2xl pb-4">{description}</p>
      <p class="text-xl font-bold pb-2">Languages</p>
      <ul class="list-disc ps-8">
        {languages.map((lang) => (
          <li>{lang}</li>
        ))}
      </ul>
      <p class="text-xl font-bold pb-2 pt-4">Technologies</p>
      <ul class="list-disc ps-8">
        {technologies.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
      <p class="text-xl font-bold pb-2 pt-4">Github</p>
      <ul class="list-disc ps-8">
        {links.map((link) => (
          <li>
            <a href={link}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div>
      <p class="text-6xl font-extrabold py-8">Projects</p>
      <div class="grid grid-cols-1 gap-8 pb-8">
        {projects.map((project) => (
          <ProjectItem {...project} />
        ))}
      </div>
    </div>
  );
}
