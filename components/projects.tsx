import * as elements from "typed-html";
import { Project } from "./types";
import { NavBar } from "./nav";
import { TOC } from "./toc";
import { TOCItem } from "./types";
import { BottomNav } from "./bottomNav";

function ProjectItem({
  title,
  description,
  languages,
  technologies,
  links,
  id,
}: Project) {
  return (
    <div id={id} class="flex flex-col space-x-3 pt-8 justify-center items-center">
      <p class="text-4xl md:text-6xl font-semibold pb-4 text-center text-primary-content">
        {title}
      </p>
      <p class="text-3xl md:text-4xl font-bold pb-2 pt-4 text-center text-primary-content">
        Github
      </p>
      <ul class="grid grid-cols-1 list-disc pt-8 justify-items-center">
        {links.map((link) => (
          <li class="text-lg md:text-2xl">
            <a
              class="text-secondary hover:text-secondary-focus"
              href={link}
              target="_blank"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <p class="text-3xl md:text-4xl font-bold pb-2 pt-8 text-center text-primary-content">
        Description
      </p>
      <p class="text-lg lg:w-9/12 xl:w-6/12 md:text-2xl pb-8 text-justify">{description}</p>
      <p class="text-3xl md:text-4xl font-bold pb-2 text-center text-primary-content">
        Languages
      </p>
      <ul class="grid grid-cols-1 list-disc ps-8 justify-items-center">
        {languages.map((lang) => (
          <li class="text-lg md:text-2xl">{lang}</li>
        ))}
      </ul>
      <p class="text-3xl md:text-4xl font-bold pb-2 pt-4 text-center text-primary-content">
        Technologies
      </p>
      <ul class="grid grid-cols-1 list-disc ps-8 justify-items-center">
        {technologies.map((tech) => (
          <li class="text-lg md:text-2xl">{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  const tocItems: TOCItem[] = [];
  projects.forEach((project) => {
    const item: TOCItem = { id: project.id, title: project.title };
    tocItems.push(item);
  });
  return (
    <div class="h-screen">
      <NavBar items={tocItems} />
      <div class="grid grid-cols-6 gap-0">
        <TOC items={tocItems} />
        <div class="col-span-6 md:col-span-5 flex flex-col h-full justify-start items-center">
          <p class="text-6xl md:text-8xl font-extrabold py-8 text-primary-content">
            Projects
          </p>
          <p class="w-full lg:w-9/12 xl:w-6/12 text-lg md:text-2xl py-8 px-8 text-justify">
            This page summarizes information about all of the personal projects
            I have worked on. These projects were driven out of my own curiosity
            for exploring various languages and technologies that interest me.
            There is no better way to master a new skill than to put it to use
            in an idea. These projects have either allowed me to practice skills
            I've already learned or to use new skills I have never used before.
          </p>
          <div class="divider px-8"></div>
          <div class="w-full flex flex-col gap-8 pb-8 px-8 justify-center divide-y divide-gray-700">
            {projects.map((project) => (
              <ProjectItem {...project} />
            ))}
          </div>
          <div class="pb-32"></div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
      </div>
      <BottomNav />
    </div>
  );
}
