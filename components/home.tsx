import * as elements from "typed-html";
import { NavBar } from "./nav";
import {Profile} from "./types"

export function Home({ profile }: { profile: Profile }) {
  return (
    <div class="h-screen">
      <NavBar />
      <div class="flex flex-col h-full justify-start items-center">
        <p class="text-8xl font-extrabold py-8">Home</p>
        <p class="text-4xl font-bold pb-8">Introduction</p>
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
          <p class="text-4xl font-bold pb-8 text-center">Languages</p>
          <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc lg:justify-items-stretch md:justify-items-center gap-2">
            {profile.languages.map((lang) => (
              <li class="text-2xl">{lang}</li>
            ))}
          </ul>
        </div>
        <div class="w-2/3 flex flex-col pb-8">
          <p class="text-4xl font-bold pb-8 text-center">Technologies</p>
          <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc lg:justify-items-stretch md:justify-items-center gap-2">
            {profile.technologies.map((tech) => (
              <li class="text-2xl">{tech}</li>
            ))}
          </ul>
        </div>
        <div class="w-2/3 flex flex-col pb-8">
          <p class="text-4xl font-bold pb-8 text-center">Other</p>
          <ul class="grid lg:grid-cols-3 md:grid-cols-1 list-disc lg:justify-items-stretch md:justify-items-center gap-2">
            {profile.other.map((other) => (
              <li class="text-2xl">{other}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
