import * as elements from "typed-html";
import { TOCItem } from "./types";

export function NavBar({ items }: { items: TOCItem[] }) {
  const classLinkText =
    "btn dark:bg-base-200 bg-gray-800 border-none rounded hover:bg-gray-600 text-white hover:text-primary-content text-lg";
  const classContentsItem =
    "text-lg border-l pl-3 -ml-px hover:border-secondary border-content";
  const classContentsText = "hover:text-secondary";

  let contents_menu = <div></div>;
  if (items.length > 0) {
    contents_menu = (
      <div class="md:hidden drawer sticky top-0 dark:bg-base-200 bg-gray-800 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ml-4">
          <label for="my-drawer" class="btn dark:bg-base-200 bg-gray-950 border-none p-2 w-12 h-10">
            <img src="../public/hamburger.png"></img>
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
            <p class="text-2xl font-extrabold py-4 pb-2 text-left">Contents</p>
            {items.map((item) => (
              <li class={classContentsItem}>
                <a href={`#${item.id}`} class={classContentsText}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <nav class="sticky top-0 dark:bg-base-200 bg-gray-800 border-b border-gray-700 z-50">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ml-4 ">
        <a
          href="/home"
          hx-get="/home"
          hx-trigger="click"
          hx-swap="innerHTML"
          hx-target="#body"
          class="flex items-center"
        >
          <img
            src="../public/profile.jpeg"
            class="h-11 mr-3 rounded-full"
            alt="profile-picture"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Judah High
          </span>
        </a>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 borderrounded-lg dark:bg-base-200 bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
              <a
                href="/home"
                hx-get="/home"
                hx-trigger="click"
                hx-swap="innerHTML"
                hx-target="#body"
                class={classLinkText}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/resumt"
                hx-get="/resume"
                hx-trigger="click"
                hx-swap="innerHTML"
                hx-target="#body"
                class={classLinkText}
                aria-current="page"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="/projects"
                hx-get="/projects"
                hx-trigger="click"
                hx-swap="innerHTML"
                hx-target="#body"
                class={classLinkText}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/About"
                hx-get="/about"
                hx-trigger="click"
                hx-swap="innerHTML"
                hx-target="#body"
                class={classLinkText}
              >
                About Me
              </a>
            </li>
            <li>
              <div class="block pt-2 pl-2">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <a href="../public/jhigh_resume.pdf" target="_blank">
                      Download Resume
                    </a>
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div class="md:hidden dropdown dropdown-end z-40">
          <label
            tabindex="0"
            class="btn dark:bg-base-200 bg-gray-950 border-none mr-3 rounded-lg hover:bg-gray-600 text-primary-content"
          >
            <img class="w-6 h-6" src="../public/dots.png"></img>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content z-[1] menu p-2 shadow dark:bg-base-200 bg-gray-800 rounded-box w-52 items-center"
          >
            <li>
              <a
                href="/home"
                hx-get="/home"
                hx-trigger="click"
                hx-swap="innerHTML"
                hx-target="#body"
                class={classLinkText}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/resumt"
                hx-get="/resume"
                hx-trigger="click"
                hx-swap="innerHTML"
                hx-target="#body"
                class={classLinkText}
                aria-current="page"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="/projects"
                hx-get="/projects"
                hx-trigger="click"
                hx-swap="innerHTML"
                hx-target="#body"
                class={classLinkText}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/About"
                hx-get="/about"
                hx-trigger="click"
                hx-swap="innerHTML"
                hx-target="#body"
                class={classLinkText}
              >
                About Me
              </a>
            </li>
            <li>
              <div class="flex px-2 items-center">
                <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <a href="../public/jhigh_resume.pdf" target="_blank">
                      Download Resume
                    </a>
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {contents_menu}
    </nav>
  );
}
