import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import { NavBar } from "./components/nav";

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
  <script src="https://cdn.tailwindcss.com"></script>
  <link type="text/css" rel="stylesheet" href="css_1.css">
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

const project_db: Project[] = [
  {
    title: "Contacts",
    description: "A rollodex app.",
    languages: ["Rust", "Typescript"],
    technologies: [
      "React",
      "Material UI",
      "Actix Web",
      "Biscuit auth",
      "REST",
      "SQLite",
    ],
    links: [
      "https://github.com/judahhigh/contacts-frontend",
      "https://github.com/judahhigh/contacts-backend",
    ],
  },
  {
    title: "E-Commerce Store",
    description: "A fully featured E-commerce store.",
    languages: ["Go", "TypeScript"],
    technologies: [
      "Svelte",
      "SvelteKit",
      "Skeleton UI",
      "Go-Kit",
      "JWT",
      "REST",
      "gRCP",
      "Microservices",
      "Docker",
      "Kubernetes",
      "RabbitMQ",
      "PostgreSQL",
    ],
    links: ["https://github.com/judahhigh/estore-backend"],
  },
  {
    title: "Portolio",
    description: "Static webpage to display information about myself.",
    languages: ["TypeScript"],
    technologies: ["HTMX", "Tailwind CSS", "Bun"],
    links: ["https://github.com/judahhigh/portfolio"],
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
    <div class="h-screen">
      <NavBar />
      <div class="grid grid-cols-1 justify-items-center">
        <p class="text-6xl font-extrabold py-8">Projects</p>
        <p class="w-2/3 text-2xl pb-8 text-justify">
          This page summarizes information about all of the personal projects I
          have worked on. These projects were driven out of my own curiosity for
          exploring various languages and technologies that interest me. There
          is no better way to master a new skill than to put it to use in an
          idea. These projects have either allowed me to practice skills I've
          already learned or to use new skills I have never used before.
        </p>
        <div class="grid grid-cols-1 gap-8 pb-8">
          {projects.map((project) => (
            <ProjectItem {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

type Profile = {
  languages: string[];
  technologies: string[];
  other: string[];
};

const profile_db: Profile = {
  languages: [
    "Rust",
    "Python",
    "Golang",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "SQL",
    "C++",
    "C",
    "Fortran",
  ],
  technologies: [
    "Actix",
    "AG Grid",
    "Bash",
    "Boto",
    "Docker",
    "FastAPI",
    "Git",
    "GlueSQL",
    "Great Expectations",
    "js-sys",
    "Kubernetes",
    "Mangum",
    "Moto",
    "Next",
    "Ngnix",
    "Node",
    "npm",
    "Pandas",
    "Polars",
    "Prisma",
    "PyTest",
    "React",
    "Redis",
    "Rocket",
    "Serde",
    "Skeleton UI",
    "SPARK",
    "Svelte/SvelteKit",
    "Tailwind CSS",
    "Tauri",
    "Threlte",
    "Tokio",
    "Tox",
    "Trunk",
    "Visual Studio",
    "VS Code",
    "wasm-bindgen",
    "web-sys",
    "Yarn",
    "Yew",
    "AWS (ALB, Amplify, API Gateway, Athena, Aurora, Batch, CDK, Cloud Formation, CloudWatch, CodeArtifact, Codebuild, CodePipeline, CodeStar, Cognito, DynamoDB, ECR, ECS, EKS, EventBridge, Fargate, Glue, IAM, Lambda, QuickSight, RDS, Redshift, Route53, S3, SDK, SecretsManager, SQS, Step Functions, VPC)",
  ],
  other: [
    "Agile",
    "BDD",
    "Biscuit auth",
    "CI/CD",
    "Clean Code",
    "Cloud-native Software Design",
    "Data Engineering",
    "Design Patterns",
    "DevOps",
    "FP",
    "HPC",
    "JWT",
    "Oauth2",
    "OOP",
    "Parallel Programming",
    "Serverless",
    "Software Architectures (Client-Server, Event-driven, Layered, Microservices, MVC, REST)",
    "TDD",
  ],
};

function Home({ profile }: { profile: Profile }) {
  return (
    <div class="h-screen">
      <NavBar />
      <div class="flex flex-col h-full justify-start items-center">
        <p class="text-6xl font-extrabold py-8">Home</p>
        <p class="text-4xl font-semibold pb-8">Introduction</p>
        <p class="w-2/3 text-2xl pb-8 text-justify">
          Welcome to my portfolio. I started my career as a computational
          chemist and have re-invented myself as a software engineer. Over the
          years I have learned a large number of languages and technologies.
          With effectively no limit to my internal drive to learn new languages,
          technologies, architectures, and practices, the list of practical
          capabilities I possess grows larger every day.
        </p>
        <p class="w-2/3 text-2xl pb-8 text-justify">
          This website should provide a clear picture of who I am and what I am
          capable of in the software engineering space. Take a look at my resume
          or my personal projects to get a better handle on my experience and
          skillset.
        </p>
        <p class="w-2/3 text-2xl pb-8 text-justify">
          At my core I am an industrious, driven, and curious software engineer
          that takes pride in being able to quickly adapt to technology and
          industry shifts.
        </p>
        <div class="w-2/3 flex flex-col pb-8">
          <p class="text-4xl font-semibold pb-8 text-center">Languages</p>
          <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-stretch gap-2">
            {profile.languages.map((lang) => (
              <li class="text-2xl">{lang}</li>
            ))}
          </ul>
        </div>
        <div class="w-2/3 flex flex-col pb-8">
          <p class="text-4xl font-semibold pb-8 text-center">Technologies</p>
          <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc ps-8 justify-items-stretch gap-2">
            {profile.technologies.map((tech) => (
              <li class="text-2xl">{tech}</li>
            ))}
          </ul>
        </div>
        <div class="w-2/3 flex flex-col pb-8">
          <p class="text-4xl font-semibold pb-8 text-center">Other</p>
          <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc ps-8 justify-items-stretch gap-2">
            {profile.other.map((other) => (
              <li class="text-2xl">{other}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
