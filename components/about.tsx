import * as elements from "typed-html";
import { NavBar } from "./nav";
import { BottomNav } from "./bottomNav";

export function About() {
  return (
    <div class="h-screen">
      <NavBar items={[]} />
      <div>
        <img
          class="sm:visible invisible sm:h-full h-0"
          src="../public/sherman.jpg"
        ></img>
      </div>
      <div class="flex flex-col justify-start items-center justify-items-center">
        <p class="text-6xl md:text-8xl font-extrabold py-8 text-primary-content">
          About Me
        </p>
        <p class="w-full text-4xl md:text-6xl font-semibold pb-8 text-primary-content text-center">
          How I got into software engineering
        </p>
        <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify xl:text-white">
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
        <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify xl:text-white">
          I was fortunate enough to land a position working on a team of tens of
          engineers and scientists building out a simulation software product
          comprising millions of lines of code. This first role of mine in the
          software engineering space skyrocketed my professional experience to
          new heights. I learned about DevOps, QA, QC, design patterns, clean
          code, CI/CD, version control, Agile, etc. Very quickly I had
          re-defined myself as a professional software engineer with a rigorous
          background in STEM. Around the office folks casually referred to me as
          a <span class="italic">chemeloper,</span> which is a portmanteau of
          the words 'chemistry' and 'developer'. This casual title played at the
          fact that while I was formally a chemist, I fully fulfilled the role
          of a developer as well.
        </p>
        <p class="text-4xl md:text-6xl font-semibold p-8 text-primary-content text-center">
          Life outside of programming
        </p>
        <p class="text-3xl md:text-4xl font-semibold pb-8 text-primary-content text-center">
          Nature
        </p>
        <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify xl:text-white">
          While I have a passion for programming, I have other interests as
          well. Living close to the Rockies, I enjoy getting into the
          backcountry to hike, camp, backpack, and to enjoy nature. I've hiked
          many of the 14,000+ ft peaks, and have backpacked many long-mile treks
          in the wilderness, like the Four Pass Loop near the Maroon Bells.
        </p>
        <p class="text-3xl md:text-4xl font-semibold pb-8 text-primary-content text-center">
          Powerlifting
        </p>
        <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify xl:text-white">
          My entire life I have been lifting weights. I love how the time and
          energy I put in incrementally develops my strength and conditioning.
          Over the past few years I have been pursuing a career in powerlifting
          to see how far I can push the boundaries of my strength. I recently
          placed 3rd in my weight class at USAPL sanctioned event, Yokey's
          Return. My best lifts were as follows:
        </p>
        <ul class="flex flex-col gap-4 list-disc justify-center items-center">
          <li class="text-2xl md:text-4xl text-primary-content">
            <a
              class="hover:text-accent"
              href="https://www.youtube.com/clip/UgkxMIygSoabDwo97FvhFWBmomBLeQ42ednW"
              target="_blank"
            >
              <strong>Bench</strong>: 231.5 lb
            </a>
          </li>
          <li class="text-2xl md:text-4xl text-primary-content">
            <a
              class="hover:text-accent"
              href="https://www.youtube.com/clip/Ugkx85C6F-28LJiRDXVpnc7StK7wldSYO8vi"
              target="_blank"
            >
              <strong>Squat</strong>: 462.9 lb
            </a>
          </li>
          <li class="text-2xl md:text-4xl text-primary-content">
            <a
              class="hover:text-accent"
              href="https://www.youtube.com/clip/UgkxsNTkzmJLBGjzoHlbJXyX4cmMejjxmpJw"
              target="_blank"
            >
              <strong>Deadlift</strong>: 529.1 lb
            </a>
          </li>
        </ul>
        <p class="text-3xl md:text-4xl font-semibold py-8 p-8 text-primary-content text-center">
          Travel
        </p>
        <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify xl:text-white">
          I like to travel and try new things whenever possible. Whether it's
          seeing Denali for the first time, scuba diving with off the coast of
          Central America, or visiting national parks all around the country, I
          find that travel and new life experience lead to fulfillment and
          broadened perspective.
        </p>
        <p class="text-3xl md:text-4xl font-semibold pb-8 text-primary-content text-center">
          Food
        </p>
        <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify xl:text-white">
          food is a critical piece of my life. I constantly try new recipes and
          attempt to perfect what I know. While I don't quite have the
          flavor/spice intuition that top chefs possess, I get better every day.
        </p>
        <p class="text-3xl md:text-4xl font-semibold pb-8 text-primary-content text-center">
          Music
        </p>
        <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify xl:text-white">
          Music has and will always be an important aspect of my life. While I
          have learned to play several instruments in my life, I gravitated to
          most towards not instruments, but digital music production. I have
          been making electronic music since I was in elementary school. I find
          the process of creating a new track from nothing incredibly rewarding
          and fulfilling. As a producer you not only have to worry about
          melodies, drums, rhythms, etc., but you also have to be able to
          concoct sounds that have never been produced before. Electronic music
          provides a space where your musical creativity can be maximized.
        </p>
        <p class="text-4xl md:text-6xl font-semibold pb-8 text-primary-content text-center">
          Takeaway
        </p>
        <p class="w-full text-lg md:text-2xl pb-8 px-8 text-justify xl:text-white">
          While software engineering is a primary passion and interest of mine,
          it by no means is the only thing defining who I am. I powerlift, hike,
          dive, travel, cook, eat, make music, read. I am not just a programmer,
          I am so much more. I hope that my life experience as a whole has made
          me a more well rounded and wise individual. At the core of everything
          I see or do is the drive to learn and experience. Perhaps this is why
          I enjoy software engineering so much. To be successful you must be
          willing to learn, you must be creative, you must be proactive, and you
          must broaden your perspective.
        </p>
      </div>
      <div class=" pb-32"></div>
      <BottomNav />
    </div>
  );
}
