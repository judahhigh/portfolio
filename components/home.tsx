import * as elements from "typed-html";
import { NavBar } from "./nav";
import { Profile, TOCItem } from "./types";
import { TOC } from "./toc";
import { BottomNav } from "./bottomNav";

export function Home({ profile }: { profile: Profile }) {
  return (
    <div class="h-screen">
      <div class="flex flex-col">
        <NavBar items={[]} />
        <div class="flex flex-col h-full justify-start items-center">
          <p class="text-6xl md:text-8xl font-extrabold py-8 text-black dark:text-white">
            Home
          </p>
          <p class="w-full lg:w-9/12 xl:w-6/12 text-lg md:text-2xl pb-8 px-8 text-justify">
            Welcome to my portfolio. I started my career as a computational
            chemist and then re-invented myself as a software engineer. Over the
            years I have learned and adapted constantly. With effectively no
            limit to my internal drive to learn new languages, technologies,
            architectures, and practices, the list of practical capabilities I
            possess grows larger every day.
          </p>
          <p class="w-full lg:w-9/12 xl:w-6/12 text-lg md:text-2xl pb-8 px-8 text-justify">
            This website should provide a clear picture of who I am and what I
            am capable of in the software engineering space. Take a look at my
            resume or my personal projects to get a better handle on my
            experience and skillset.
          </p>
          <p class="w-full lg:w-9/12 xl:w-6/12 text-lg md:text-2xl pb-8 px-8 text-justify">
            At my core I am an industrious, driven, and curious software
            engineer that takes pride in being able to quickly adapt to
            technology and industry shifts.
          </p>
          <p class="text-4xl md:text-6xl font-extrabold py-8 text-black dark:text-white">
            Table of Contents
          </p>
          <div class="w-full px-16 lg:w-9/12 xl:w-6/12">
            <div tabindex="0" class="collapse collapse-plus bg-base-300 dark:bg-base-200 mb-4">
              <input type="checkbox" name="my-accordion-1" class="peer" />
              <div class="collapse-title text-xl md:text-3xl text-center text-black dark:text-white dark:peer-checked:bg-gray-800 peer-checked:bg-gray-100">
                Resume Page
              </div>
              <div class="collapse-content flex flex-col justify-center items-center gap-4 dark:peer-checked:bg-gray-800 peer-checked:bg-gray-100">
                <p class="text-lg md:text-2xl lg:w-9/12 xl:w-6/12 text-justify text-black dark:text-white">
                  This page contains up-to-date information on all of the skills
                  I have experience with either through work or from personal
                  endeavors. This page includes work experience, education,
                  publications, languages, and skills separated out into
                  groupings based on their use.
                </p>
                <button
                  hx-get="/resume"
                  hx-trigger="click"
                  hx-swap="innerHTML"
                  hx-target="#body"
                  class="btn btn-primary"
                >
                  Go here
                </button>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-300 dark:bg-base-200 mb-4">
              <input type="checkbox" name="my-accordion-1" class="peer" />
              <div class="collapse-title text-xl md:text-3xl text-center text-black dark:text-white dark:peer-checked:bg-gray-800 peer-checked:bg-gray-100">
                Projects Page
              </div>
              <div class="collapse-content flex flex-col justify-center items-center gap-4 dark:peer-checked:bg-gray-800 peer-checked:bg-gray-100">
                <p class="text-lg md:text-2xl lg:w-9/12 xl:w-6/12 text-justify text-black dark:text-white">
                  Personal projects are a great way to learn a new language,
                  technology, or skill. I have stood up several personal
                  projects, including this website, that have helped me become a
                  better software engineer. This page describes these personal
                  projects, the technologies at play, and links to the source
                  code on Github.
                </p>
                <button
                  hx-get="/projects"
                  hx-trigger="click"
                  hx-swap="innerHTML"
                  hx-target="#body"
                  class="btn btn-primary"
                >
                  Go here
                </button>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-300 dark:bg-base-200 mb-4">
              <input type="checkbox" name="my-accordion-1" class="peer" />
              <div class="collapse-title text-xl md:text-3xl text-center text-black dark:text-white dark:peer-checked:bg-gray-800 peer-checked:bg-gray-100">
                About Me Page
              </div>
              <div class="collapse-content flex flex-col justify-center items-center gap-4 dark:peer-checked:bg-gray-800 peer-checked:bg-gray-100">
                <p class="text-lg md:text-2xl lg:w-9/12 xl:w-6/12 text-justify text-black dark:text-white">
                  Every person's story is different. What defines us is not just our
                  professional experience, but our interests, our hobbies, our
                  preferences, our stories. This page goes deeper into who I am,
                  what drives me, where I came from, what I do outside of
                  programming, and what brought me to where I am today as a
                  software engineer.
                </p>
                <button
                  hx-get="/about"
                  hx-trigger="click"
                  hx-swap="innerHTML"
                  hx-target="#body"
                  class="btn btn-primary"
                >
                  Go here
                </button>
              </div>
            </div>
          </div>
          <p class="text-4xl md:text-6xl font-extrabold pt-16 pb-8 text-black dark:text-white">
            About this website
          </p>
          <p class="text-2xl md:text-3xl font-extrabold pb-8 text-black dark:text-white">
            Motivation
          </p>
          <p class="text-lg md:text-2xl pb-8 px-8 text-justify lg:w-9/12 xl:w-6/12">
            This website, while doubling as a proffessional portfolio for my
            career, was also a wonderful learning experience. HTMX is a
            promising library to do more with HTML instead of using something
            like React, Angular, or Vue. For things like this website that
            mostly serves static content, HTMX is a great choice. An important
            design consideration for any project is whether or not the project
            is over or underengineered. For a website like this, HTMX was the
            perfect choice because it's simple. Regardless, you can get as fancy
            as you want with HTMX building things like a scalable web app
            interfacing to a backend to handle all kinds of stuff. I'm looking
            forward to an opportunity to try HTMX on something bigger, and more
            complex than this portfolio.
          </p>
          <p class="text-2xl md:text-3xl font-extrabold pb-8 text-black dark:text-white">
            Tech Stack
          </p>
          <p class="text-lg md:text-2xl pb-8 px-8 text-justify lg:w-9/12 xl:w-6/12">
            This website was built using HTXM, JSX, and Bun, a fast all-in-one
            JavaScript runtime. I chose to implement this website using HTMX
            firstly becuase of its growing popularity, and secondly because it
            is incredibly interesting to me that by using HTMX it's possible to
            support all kinds of dynamic behavior in plain old HTML. No more
            searching for React compliant libraries to provide dynamic
            functionality in the frontend. With HTMX, any HTML element can
            trigger updates to the same or any other HTML element. No more
            worrying about a virtual DOM and all the idiosyncrasies that come
            with that game.
          </p>
          <p class="text-lg md:text-2xl pb-8 px-8 text-justify lg:w-9/12 xl:w-6/12">
            Futhermore, the HTMX developer experience can be greatly boosted
            with JSX to support the implementation of functional HTMX
            components. That's right, not React components, HTMX components.
          </p>
          <p class="text-lg md:text-2xl pb-8 px-8 text-justify lg:w-9/12 xl:w-6/12">
            Integration with Bun creates an efficient stack for a great frontend
            development and deployment experience. I have also chosen to use
            Tailwind CSS for HTML styling. Tailwind is an extremely powerful and
            natural choice for styling without having to depend on a ton of JS
            libraries. Stacking DaisyUI on top of Tailwind leads to an even more
            fluid dev experience getting the styling to look right.
          </p>
          <p class="text-2xl md:text-3xl font-extrabold pb-8 text-black dark:text-white">
            A Brief HTMX Tutorial
          </p>
          <p class="text-lg md:text-2xl pb-8 px-8 text-justify lg:w-9/12 xl:w-6/12">
            HTXM stands for HTML extensions. What HTMX allows a dev to do is
            effectively call HTTP requests with any supported method (GET, POST,
            DELETE, PATCH, PUT) on any HTML element triggered by all modern
            supported event triggers (click, change, mousein, hover, etc.). Once
            triggered, HTMX allows the dev to swap any currently rendered HTML
            with any other HTML. Effectively, every element is transformed into
            a potential HTTP request endpoint where the dev can choose to inject
            returned HTML anywhere in the DOM. Say for example that we have the
            following HTML button definition.
          </p>
          <img
            class="rounded-xl p-8 drop-shadow-xl md:w-3/5"
            src="../public/code_button.png"
          ></img>
          <p class="text-lg md:text-2xl py-8 px-8 text-justify lg:w-9/12 xl:w-6/12">
            Below is the interactive button as defined in the code snippet
            above. Currently, you can click on it and nothing will happen. What
            we will use HTMX for is to modify this button so that when the user
            clicks it, it will be replaced with new HTML. To do this, we need to
            attach several attributes to the button HTML.
          </p>
          <button class="btn btn-primary m-8 btn-large btn-wide text-xl">
            Click Me
          </button>

          <p class="text-lg md:text-2xl py-8 px-8 text-justify lg:w-9/12 xl:w-6/12">
            Below is the button from above updated with some HTMX attributes.
            Let's go through each one and explain them. First is the 'hx-get'
            attribute which provides the endpoint to call a GET request against
            based on the trigger. The second attribute 'hx-trigger' tells the
            HTML under what condition should the request be made, in this case
            the HTTP request will be sent when a user clicks the button. Next
            the 'hx-swap' attribute states that the response from the GET
            request should be swapped with the button element itself within the
            current page. Of course for this to work what comes back from the
            GET request must be valid HTML.
          </p>
          <img
            class="rounded-xl p-8 drop-shadow-xl md:w-3/5"
            src="../public/code_button_htmx.png"
          ></img>
          <p id="reveal" class="text-lg md:text-2xl py-8 px-8 text-justify lg:w-9/12 xl:w-6/12">
            Below is the HTMX button with HTMX attributes. This button will now
            replace itself with new content whenever it is clicked on. To reset
            the 'Click Me' button state, click on the 'Reset' button. How do you
            think the 'Reset' button works? How does it differ from the 'Click
            Me' HTMX button shown?
            <button
              hx-get="/reveal"
              hx-trigger="click"
              hx-swap="outerHTML"
              hx-target="#reveal"
              class="btn btn-secondary btn-xs text-md"
            >
              Reveal the answer
            </button>
          </p>
          <div class="flex flex-row flex-wrap justify-center items-center">
            <button
              id="htmx-example-button"
              hx-get="/click-me"
              hx-trigger="click"
              hx-swap="outerHTML"
              class="btn btn-primary m-8 btn-large btn-wide text-xl"
            >
              Click Me
            </button>
            <button
              hx-get="/reset-click-me"
              hx-trigger="click"
              hx-swap="outerHTML"
              hx-target="#htmx-example-button"
              class="btn btn-accent m-8 btn-large btn-wide text-xl"
            >
              Reset
            </button>
          </div>
          <p class="text-lg md:text-2xl py-8 px-8 text-justify lg:w-9/12 xl:w-6/12">
            Hopefully this section provides a small, but well understood glimpse
            into how HTMX provides such an interesting and easy means to
            dynamically update HTML. HTMX extends HTML so that dynamic behavior
            in a website can be encoded directly into HTML through endpoints
            that return more HTML.
          </p>
          <div class="pb-32"></div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
