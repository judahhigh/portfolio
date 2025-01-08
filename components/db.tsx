import { Profile } from "./types";
import { Project } from "./types";

export const profile_db: Profile = {
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
    "Bash",
    "Dart",
    "Swift"
  ],
  other: [
    "Agile",
    "BDD",
    "Biscuit auth",
    "CI/CD",
    "Clean Code",
    "Cloud-native Software",
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
    "Client-Server Architecture",
    "Event-driven Archetecture",
    "Layered Architecture",
    "Microservices Architecture",
    "MVC",
    "REST",
    "TDD",
  ],
  webFrameworks: [
    "Actix", "FastAPI", "Rocket", "Svelte/SvelteKit", "Yew", "React", "Tailwind CSS", "Skeleton UI", "Threlte", "Tauri", "Flutter"
  ],
  runtimesBundlers: ["Next.js", "Node.js", "Bun", "Trunk", "Tokio", "Nginx"],
  libraries: [
    "AG Grid", "HTMX", "js-sys", "wasm-bindgen", "web-sys", "Serde", "AWS SigV4", "Boto", "gloo-net", "base64", "toolz", "ts-results", "returns", "Mangum", "GlueSQL"
  ],
  dataops: ["Pandas", "Polars", "PySpark"],
  testing: ["PyTest", "Cargo", "Great Expectations", "MyPy", "Pre-Commit", "Tox", "Moto", "Black", "flake8"],
  dbs: ["PostgreSQL", "SQLite", "Redis", "Prisma", "Diesel", "MySQL", "MongoDB Atlas"],
  devops: ["Docker", "Git", "Kubernetes"],
  tools: ["VS Code", "Visual Studio", "Postman", "PGAdmin", "DB Browser for SQLite", "Pyenv", "Pipenv", "Yarn", "npm", "Studio3T", "Mongosh", "aws-runas"],
  cloud: {
    webAppInfrastructure: ["AWS ALB", "AWS ECS", "AWS EKS", "AWS Fargate", "AWS VPC", "AWS API Gateway"],
    serverlessCompute: ["AWS Lambda", "AWS Step Functions", "AWS Batch"],
    dbs: ["AWS Aurora", "AWS DynamoDB", "AWS RDS", "AWS Redshift", "AWS S3"],
    fontendDevOps: ["AWS Amplify", "AWS Cloudfront", "AWS Route53"],
    devops: ["AWS CDK", "AWS CloudFromation", "AWS CodeArtifact", "AWS CodeBuild", "AWS CodePipeline", "AWS CodeStar", "AWS ECR", "AWS IAM", "AWS SecretsManager"],
    logging: ["AWS CloudWatch", "DataDog"],
    auth: ["AWS Cognito", "AWS ALB", "AWS EKS"],
    dataops: ["AWS Glue", "AWS Athena", "AWS QuickSight"],
    events: ["AWS EventBridge", "AWS SQS"]
  }
};

export const project_db: Project[] = [
  {
    title: "A Contacts Web Application",
    description:
      "This web-application provides a simple interface for users to manage a list of contacts. A user may login or register, and then add, update, and delete their contacts. The user, along with their contacts information are stored on a database backend. The project consists of two code repositories, (1) a backend written in Rust, and (2) a frontend written in TypeScript with React. The backend only accepts requests from a frontend instance via CORS. Furthermore, CRUD operations are only allowed if the cient passes a valid biscuit token with their requests. The only endpoint that does not require a token is the login endpoint, but this is still protected through CORS. The backend database is a SQLite database managed by the Prisma Rust CLI. The Prisma CLI takes as input a schema for users and contacts and produces Rust modules importable and usable within REST endpoints exposed through Actix-web. In this way it is simple to perform all kinds of database operations within endpoint logic.",
    languages: ["Rust", "Typescript"],
    technologies: [
      "React",
      "Material UI",
      "Actix Web",
      "Biscuit auth",
      "REST",
      "SQLite",
      "Prisma",
    ],
    links: [
      "https://github.com/judahhigh/contacts-frontend",
      "https://github.com/judahhigh/contacts-backend",
    ],
    id: "contactswebapp",
  },
  {
    title: "An E-Commerce Store",
    description:
      "This project consists of two parts. First is a microservice architecture to support everything related to a common e-commerce store application like Amazon. It needs to handle user registration and login, search, transactions, vendor information and pages, customer support, settings, etc. I was interested in showcasing how one might create a microservice architecture to handle all of this. Second is a e-commerce store frontend to effectuate everything a user or vendor might want to do on an e-commerce store. It's by no means a small project and will take time to complete. Regardless, it's given me a chance to use a popular server-side language like Go to build it. It also gave me the opportunity to work with cloud infrastructure, and container orchestration systems powered by Docker and Kubernetes. I'm also getting to experiment with REST, gRCP, message broking through RabbitMQ, and more. For the frontend I'm choosing to use TypeScript with Svelte and SvelteKit, which from my previous experience lends itself to creating extremely well-organized fully featured client applications. This project is truly a challenge, but a worthwhile one at that.",
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
    id: "e-commerce-store",
  },
  {
    title: "Portfolio, this website",
    description:
      "This website gave me a chance to work with an emerging technology called HTMX, that stands for HTML extensions. It is a library to powerup plain-old HTML with new powers that gives the frontend dev the opportunity of avoiding JavaScript and the endless land of JavaScript dependencies. Serving the website with Bun, and Elysia, allowed me to create an incredibly simple and responsive website as well. Not only this, but with Tailwind CSS I had the chance to make plain-old HTML look good with class decorating only. I also employed DaisyUI for easier component-level styling and for adding dynamic features to better support various screen orientations and sizes. Finally, in lieu of a more difficult and complex deployment experience on the cloud, I chose to deploy the website using Fly.io, a powerful deployment PaaS tool for quickly getting websites and applications on the internet.",
    languages: ["TypeScript"],
    technologies: ["HTMX", "Tailwind CSS", "DaisyUI", "Bun", "Fly.io"],
    links: ["https://github.com/judahhigh/portfolio"],
    id: "portfolio",
  },
];
