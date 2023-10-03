import * as elements from "typed-html";
import { NavBar } from "./nav";
import { BottomNav } from "./bottomNav";

export function About() {
  return (
    <div class="h-screen">
      <NavBar items={[]} />
      <div class="h-full brightness-50 contrast-125">
        <div
          class="h-full bg-no-repeat bg-cover bg-bottom"
          style="background-image: url(../public/sherman.jpg); filter: blur(8px); -webkit-filter: blur(8px)"
        ></div>
      </div>
      <div class="absolute top-24 flex flex-col justify-start items-center justify-items-center">
        <div class="flex flex-row justify-center items-center">
          <img
            src="../public/profile.jpeg"
            class="h-20 mx-8 rounded-full"
            alt="profile-picture"
          />
          <p class="text-6xl md:text-8xl font-extrabold py-8 text-primary-content">
            About Me
          </p>
        </div>
        <p class="text-4xl md:text-6xl font-extrabold py-8 text-primary-content text-center">
          How I got into software engineering
        </p>
        <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify backdrop-blur-xl">
          While I was in graduate school I taught myself Python, Fortran, C, C++
          and Bash so that I could develop scripts and small programs to
          automate and secure several aspects of my Ph.D. research. While I
          found the science I was researching fascinating, the more I
          programmed, the more I realized that I had a passion for it. I knew
          that there would be little chance to obtain proper software
          engineering experience within the academic STEM space. For this
          reason, towards graduation I pursued industry careers in software
          engineering where my scientific background could prove useful.
        </p>
        <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify">
          I was fortunate enough to land a position working on a team of tens of
          engineers and scientists building out a simulation software product
          comprising millions of lines of code. This first role of mine in the
          software engineering space skyrocketed my professional experience to
          new heights. I learned about DevOps, QA, QC, design patterns, clean
          code, CI/CD, version control, Agile, etc. Very quickly I had
          re-defined myself as a professional software engineer with a rigorous
          background in STEM. Around the office folks casually referred to me as
          a <span class="italic">chemeloper</span>, which is a portmanteau of
          the words 'chemistry' and 'developer'. This casual title played at the
          fact that while I was formally a chemist, I fully fulfilled the role
          of a developer as well.
        </p>
        <p class="text-4xl md:text-6xl font-extrabold py-8 text-primary-content text-center">
          Life outside of software engineering
        </p>
        <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify">
          While I have a passion for programming, I have other interests as
          well. Living close to the Rockies, I enjoy getting into the
          backcountry to hike, camp, backpack, and to enjoy nature. I've hiked
          many of the 14,000+ ft peaks, and have backpacked many long-mile treks
          in the wilderness.
        </p>
      </div>
      <BottomNav />
    </div>
  );
}
