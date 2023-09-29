import * as elements from "typed-html";

export function NavBar() {
  return (
    <nav class="sticky top-0 bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Judah High - Portfolio
          </span>
        </a>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/home"
                hx-get="/home"
                hx-trigger="click"
                hx-swap="innerHTML"
                hx-target="#body"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/projects"
                hx-get="/projects"
                hx-trigger="click"
                hx-swap="innerHTML"
                hx-target="#body"
                class="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <div class="block pt-3 pl-2">
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
      </div>

      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <a
            href="/home"
            hx-get="/home"
            hx-trigger="click"
            hx-swap="innerHTML"
            hx-target="#body"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Home
          </a>
          <a
            href="/projects"
            hx-get="/projects"
            hx-trigger="click"
            hx-swap="innerHTML"
            hx-target="#body"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </a>
          <div class="block pt-3 pl-2">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <a href="../public/jhigh_resume.pdf" target="_blank">
                  Download Resume
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
