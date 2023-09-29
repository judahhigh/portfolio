import * as elements from "typed-html";
import { Project } from "./types";
import { NavBar } from "./nav";
import { TOC } from "./toc";
import { TOCItem } from "./types";

function ProjectItem({
  title,
  description,
  languages,
  technologies,
  links,
  id,
}: Project) {
  return (
    <div id={id} class="flex flex-col space-x-3 justify-center ">
      <p class="text-6xl font-semibold pb-4 text-center">{title}</p>
      <p class="text-4xl font-bold pb-2 pt-4 text-center">Github</p>
      <ul class="grid grid-cols-1 list-disc pt-8 justify-items-center">
        {links.map((link) => (
          <li class="text-2xl">
            <a class="text-blue-600 hover:text-blue-900" href={link}>
              {link}
            </a>
          </li>
        ))}
      </ul>
      <p class="text-4xl font-bold pb-2 pt-8 text-center">Description</p>
      <p class="text-2xl pb-8 text-justify ">{description}</p>
      <p class="text-4xl font-bold pb-2 text-center">Languages</p>
      <ul class="grid grid-cols-1 list-disc ps-8 justify-items-center">
        {languages.map((lang) => (
          <li class="text-2xl">{lang}</li>
        ))}
      </ul>
      <p class="text-4xl font-bold pb-2 pt-4 text-center">Technologies</p>
      <ul class="grid grid-cols-1 list-disc ps-8 justify-items-center">
        {technologies.map((tech) => (
          <li class="text-2xl">{tech}</li>
        ))}
      </ul>
      
    </div>
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  const tocItems: TOCItem[] = []
  projects.forEach(project => {
    const item: TOCItem = {id: project.id, title: project.title};
    tocItems.push(item)
  });
  return (
    <div class="h-screen">
      <NavBar items={tocItems} />
      <div class="grid grid-cols-6 gap-0">
        <TOC items={tocItems} />
        <div class="col-span-6 md:col-span-5 flex flex-col h-full justify-start items-center">
          <p class="text-8xl font-extrabold py-8">Projects</p>
          <p class="w-full text-2xl pb-8 px-8 text-justify">
            This page summarizes information about all of the personal projects
            I have worked on. These projects were driven out of my own curiosity
            for exploring various languages and technologies that interest me.
            There is no better way to master a new skill than to put it to use
            in an idea. These projects have either allowed me to practice skills
            I've already learned or to use new skills I have never used before.
          </p>
          <div class="w-full flex flex-col gap-8 pb-8 px-8 justify-center">
            {projects.map((project) => (
              <ProjectItem {...project} />
            ))}
          </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
      </div>
    </div>
  );
}
