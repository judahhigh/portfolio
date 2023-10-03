import * as elements from "typed-html";
import { NavBar } from "./nav";

export function About() {
  return (
    <div class="h-screen">
      <NavBar items={[]} />
      <div class="flex flex-col h-full justify-start items-center">
        <p class="text-6xl md:text-8xl font-extrabold py-8 text-primary-content">
          About
        </p>
        <p class="text-lg md:text-2xl pb-8 px-8 text-justify">
          This website was built using HTXM, JSX, and Bun, a fast all-in-one
          JavaScript runtime. I chose to implement this website using HTMX
          firstly becuase of its growing popularity, and secondly because it is
          incredibly interesting to me that by using HTMX it's possible to
          support all kinds of dynamic behavior in plain old HTML. No more
          searching for React compliant libraries to provide dynamic
          functionality in the frontend. With HTMX, any HTML element can trigger
          updates to the same or any other HTML element. No more worrying about
          a virtual DOM and all the idiosyncrasies that come with that game.
        </p>
        <p class="text-lg md:text-2xl pb-8 px-8 text-justify">
          Futhermore, the HTMX developer experience can be greatly boosted with
          JSX to support the implementation of functional HTMX components.
          That's right, not React components, HTMX components.
        </p>
        <p class="text-lg md:text-2xl pb-8 px-8 text-justify">
          Integration with Bun creates an efficient stack for a great frontend
          development and deployment experience. I have also chosen to use
          Tailwind CSS for HTML styling. Tailwind is an extremely powerful and
          natural choice for styling without having to depend on a ton of JS
          libraries.
        </p>
        <p class="text-lg md:text-2xl pb-8 px-8 text-justify">
          This website, while doubling as a proffessional portfolio for my
          career, was also a wonderful learning experience. Since this website
          does not require dynamic behavior that would hook into all kinds of
          backend technologies, I am left a bit unfullfilled. For this project I
          had no need to develop a backend and perform requests to swap out
          HTML. For this reason, I am looking forward to using HTMX in a much
          more complex project requiring many more features supported by the
          HTMX library.
        </p>
      </div>
    </div>
  );
}
