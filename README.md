
# Portfolio

An HTMX-powered personal portfolio website to showcase personal projects, skills, and interests.






## Authors

- [@judahhigh](https://www.github.com/judahhigh)


## Motivation

I wanted to learn something new to create my personal website. With HTMX, one can get all the advantages of functional components in React without doing any JavaScript! HTMX, which stands for HTML extensions, is a library that extends HTML with new powers. These new powers effectively turn every element into an HTTP endpoint that allows developers to imbed dynamic behavior into HTMX-driven websites and apps like one would do with React. However, it's all done through plain-old HTML instead of JavaScript compiled components! The appeal was too hard to resist, so I decided to give HTMX a try for my personal website.

A common example of how HTMX works is as follows. Consider you have a button that when you click you want some new element to appear and replace the button text. The following HTMX example does this.

```HTML
  <button hx-get="/clicked" hx-swap="innerHTML">
    Click Me
  </button>
```

Let's say the '/clicked' GET endpoint returns the following HTML.

```HTML
  <h1><strong>Hello World!</strong></h1>
```

When the user clicks the HTML button above, HTXM will call the GET '/clicked' endpoint and  replace the button text so that the original button becomes.

```HTML
  <button hx-get="/clicked" hx-swap="innerHTML">
    <h1><strong>Hello World!</strong></h1>
  </button>
```

This is the power of HTMX. Without using any JavaScript, the browser was able to dynamically update the button text based on user-interaction. Of course the main difference from the typical client-server dynamic is that the server generated some valid HTML, not JSON or something else. This shifts the burden of HTML generation to the server, which I like as someone who is more biased toward backend development. Furthermore, since no serialization/deserialization logic was needed to decode the response from the server, HTMX simplifies all kinds of annoying client-server issues surrounding transforming objects over-the-network. The request simply gives back HTML! This is why there's a lot of buzz about HTMX and why I think it is such an interesting idea.
## Tech Stack

**Libraries:** HTMX (https://htmx.org/)

**Frameworks:** 
* Bun (https://bun.sh/)
* Elysia (https://elysiajs.com/)

**Styling:** Tailwind CSS (https://tailwindcss.com/docs/installation/play-cdn)

**Syntax extensions:** 
* JSX (https://react.dev/learn/writing-markup-with-jsx)
* typed-html (https://github.com/nicojs/typed-html)




## Run Locally

To run install dependencies and standup the website with Bun.

```bash
  git clone git@github.com:judahhigh/portfolio.git
```

Go to the project directory

```bash
  cd portfolio
```

Install all dependencies

```bash
  bun install
```

Spin up the website locally

```bash
  bun run index.tsx
```