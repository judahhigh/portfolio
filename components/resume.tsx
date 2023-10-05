import * as elements from "typed-html";
import { NavBar } from "./nav";
import { Profile, TOCItem } from "./types";
import { TOC } from "./toc";
import { BottomNav } from "./bottomNav";
import { WorkExperience } from "./work";

export function Resume({ profile }: { profile: Profile }) {
  const classContentsItem =
    "text-lg border-l pl-3 -ml-px hover:border-secondary border-content";
  const classContentsText = "hover:text-secondary";
  const sectionClass = "w-full flex flex-col py-10 px-16";
  const cloudSectionClass = "w-full flex flex-col py-6 px-16";
  const classListText = "text-lg md:text-2xl ";
  const items: TOCItem[] = [
    { id: "introduction", title: "Introduction" },
    { id: "education", title: "Education" },
    { id: "work", title: "Work Experience" },
    { id: "languages", title: "Languages" },
    { id: "webframeworks", title: "Web Frameworks" },
    { id: "runtimes", title: "Runtimes, Servers, Bundlers" },
    { id: "dataops", title: "Data Analysis and Manipulation" },
    { id: "testing", title: "Testing" },
    { id: "dbs", title: "Databases" },
    { id: "devops", title: "DevOps" },
    { id: "tools", title: "Tools" },
    { id: "cloud", title: "Cloud Skills" },
    { id: "other", title: "Other" },
    { id: "publications", title: "Publications" },
  ];
  return (
    <div class="h-screen">
      <NavBar items={items} />
      <div class="grid grid-cols-6 gap-0">
        <TOC items={items} />
        <div class="col-span-6 md:col-span-5 flex flex-col h-full justify-start items-center">
          <p class="text-6xl md:text-8xl font-extrabold py-8 text-primary-content">
            Resume
          </p>
          <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify">
            At my core I am an industrious, driven, and curious software
            engineer that takes pride in being able to quickly adapt to
            technology and industry shifts.
          </p>
          <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify">
            This page is an up-to-date accounting of my work experience,
            education, and skills. Visitors may also download my resume using
            the `Download Resume` button in the nav bar.
          </p>

          <div class="divider px-8"></div>

          <div class={sectionClass} id="education">
            <p class="text-3xl md:text-4xl font-bold pb-8 text-center text-primary-content">
              Education
            </p>
            <ul class="flex flex-col list-none justify-items-center items-center gap-2">
              <li class="text-lg md:text-2xl link link-secondary text-center">
                <a
                  href="https://repository.lib.ncsu.edu/handle/1840.20/34444"
                  target="_blank"
                >
                  Ph.D. Computational Quantum Chemistry - North Carolina State
                  University
                </a>
              </li>
              <li class="text-lg md:text-2xl text-center text-primary-content">
                B.S. ACS Certified Chemistry - Appalachian State University
              </li>
            </ul>
          </div>

          <div class="divider px-8"></div>

          <div id="work">
            <WorkExperience />
          </div>

          <div class="divider px-8"></div>

          <div class={sectionClass} id="languages">
            <p class="text-3xl md:text-4xl font-bold pb-8 text-center text-primary-content">
              Languages
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.languages.map((lang) => (
                <li class={classListText}>{lang}</li>
              ))}
            </ul>
          </div>
          <div class={sectionClass} id="webframeworks">
            <p class="text-3xl md:text-4xl font-bold pb-8 text-center text-primary-content">
              Web Framworks
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.webFrameworks.map((framework) => (
                <li class={classListText}>{framework}</li>
              ))}
            </ul>
          </div>
          <div class={sectionClass} id="libraries">
            <p class="text-3xl md:text-4xl font-bold pb-8 text-center text-primary-content">
              Libraries
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.libraries.map((lib) => (
                <li class={classListText}>{lib}</li>
              ))}
            </ul>
          </div>
          <div class={sectionClass} id="runtimes">
            <p class="text-3xl md:text-4xl font-bold pb-8 text-center text-primary-content">
              Runtimes, Servers, and Bundlers
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.runtimesBundlers.map((run) => (
                <li class={classListText}>{run}</li>
              ))}
            </ul>
          </div>
          <div class={sectionClass} id="dataops">
            <p class="text-3xl md:text-4xl font-bold pb-8 text-center text-primary-content">
              Data Analysis and Manipulation
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.dataops.map((op) => (
                <li class={classListText}>{op}</li>
              ))}
            </ul>
          </div>
          <div class={sectionClass} id="testing">
            <p class="text-3xl md:text-4xl font-bold pb-8 text-center text-primary-content">
              Testing
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.testing.map((tool) => (
                <li class={classListText}>{tool}</li>
              ))}
            </ul>
          </div>
          <div class={sectionClass} id="dbs">
            <p class="text-3xl md:text-4xl font-bold pb-8 text-center text-primary-content">
              Databases
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.dbs.map((db) => (
                <li class={classListText}>{db}</li>
              ))}
            </ul>
          </div>
          <div class={sectionClass} id="devops">
            <p class="text-3xl md:text-4xl font-bold pb-8 text-center text-primary-content">
              DevOps
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.devops.map((op) => (
                <li class={classListText}>{op}</li>
              ))}
            </ul>
          </div>
          <div class={sectionClass} id="tools">
            <p class="text-3xl md:text-4xl font-bold pb-8 text-center text-primary-content">
              Tools
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.tools.map((tool) => (
                <li class={classListText}>{tool}</li>
              ))}
            </ul>
          </div>
          <div class="divider px-8 pt-8"></div>
          <p
            class="text-3xl md:text-4xl font-bold pb-8 pt-16 text-primary-content"
            id="cloud"
          >
            Cloud Skills
          </p>
          <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify">
            The following sections highlight cloud-based software engineering
            products that I have experience with building ETL/ELT data
            pipelines, and cloud-native web applications. Infrastructure was
            usually provisioned as code and integrated into CI/CD processes to
            maintain production systems.
          </p>
          <div class={cloudSectionClass} id="cloud_infrastructure">
            <p class="text-2xl md:text-3xl font-semibold pb-8 text-center text-primary-content">
              Web Application Infrastructure
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.cloud.webAppInfrastructure.map((service) => (
                <li class={classListText}>{service}</li>
              ))}
            </ul>
          </div>
          <div class={cloudSectionClass} id="cloud_compute">
            <p class="text-2xl md:text-3xl font-semibold pb-8 text-center text-primary-content">
              Serverless Computation
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.cloud.serverlessCompute.map((service) => (
                <li class={classListText}>{service}</li>
              ))}
            </ul>
          </div>
          <div class={cloudSectionClass} id="cloud_db">
            <p class="text-2xl md:text-3xl font-semibold pb-8 text-center text-primary-content">
              Database and Storage
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.cloud.dbs.map((service) => (
                <li class={classListText}>{service}</li>
              ))}
            </ul>
          </div>
          <div class={cloudSectionClass} id="cloud_deployment">
            <p class="text-2xl md:text-3xl font-semibold pb-8 text-center text-primary-content">
              Frontend Development and Deployment
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.cloud.fontendDevOps.map((service) => (
                <li class={classListText}>{service}</li>
              ))}
            </ul>
          </div>
          <div class={cloudSectionClass} id="cloud_cicd">
            <p class="text-2xl md:text-3xl font-semibold pb-8 text-center text-primary-content">
              Development and Deployment Tools
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.cloud.devops.map((service) => (
                <li class={classListText}>{service}</li>
              ))}
            </ul>
          </div>
          <div class={cloudSectionClass} id="cloud_logging">
            <p class="text-2xl md:text-3xl font-semibold pb-8 text-center text-primary-content">
              Monitoring and Logging
            </p>
            <ul class="grid lg:grid-cols-2 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.cloud.logging.map((service) => (
                <li class={classListText}>{service}</li>
              ))}
            </ul>
          </div>
          <div class={cloudSectionClass} id="cloud_auth">
            <p class="text-2xl md:text-3xl font-semibold pb-8 text-center text-primary-content">
              Authentication and Authorization
            </p>
            <ul class="grid lg:grid-cols-2 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.cloud.auth.map((service) => (
                <li class={classListText}>{service}</li>
              ))}
            </ul>
          </div>
          <div class={cloudSectionClass} id="cloud_data">
            <p class="text-2xl md:text-3xl font-semibold pb-8 text-center text-primary-content">
              Data Analysis and Data Insights
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.cloud.dataops.map((service) => (
                <li class={classListText}>{service}</li>
              ))}
            </ul>
          </div>
          <div class={cloudSectionClass} id="cloud_events">
            <p class="text-2xl md:text-3xl font-semibold pb-8 text-center text-primary-content">
              Messaging and Event Processing
            </p>
            <ul class="grid lg:grid-cols-2 md:grid-cols-1 list-disc justify-items-center gap-2">
              {profile.cloud.events.map((service) => (
                <li class={classListText}>{service}</li>
              ))}
            </ul>
          </div>

          <div class="divider px-8 pt-8"></div>

          <div class={sectionClass} id="other">
            <p class="text-3xl md:text-4xl font-bold pb-8 text-center text-primary-content">
              Other
            </p>
            <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc lg:justify-items-stretch justify-items-center gap-2">
              {profile.other.map((other) => (
                <li class={classListText}>{other}</li>
              ))}
            </ul>
          </div>

          <div class="divider px-8 pt-6"></div>

          <div class={sectionClass} id="publications">
            <p class="text-3xl md:text-4xl font-bold pb-8 text-center text-primary-content">
              Publications
            </p>
            <ul class="flex flex-col list-none justify-items-center items-center gap-2">
              <li class="text-lg md:text-xl text-center">
                <a
                  class="text-secondary hover:text-secondary-focus"
                  href="https://pubs.acs.org/doi/abs/10.1021/acs.jpca.6b05739"
                  target="_blank"
                >
                  High, J. S.; Rego L. G. C.; Jakubikova, E. J. Phys. Chem. A,
                  <strong>2016</strong>, 120(41), 8075-8084.
                </a>
              </li>
              <li class="text-lg md:text-xl text-center">
                <a
                  class="text-secondary hover:text-secondary-focus"
                  href="https://pubs.acs.org/doi/abs/10.1021/acs.jpca.5b05600"
                  target="_blank"
                >
                  High, J. S.; Virgil, K. A.; Jakubikova, E. J. Phys. Chem. A,
                  <strong>2015</strong>, 119(38), 9879-9888.
                </a>
              </li>
            </ul>
          </div>
          <div class="pb-32"></div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
