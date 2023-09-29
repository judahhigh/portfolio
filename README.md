
# Portfolio

An HTMX-powered personal portfolio website to showcase personal projects, skills, and interests.

The website is deployed on fly.io at https://jhigh-portfolio.fly.dev/






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

Now let's talk about styling. Typically a frontend dev will rely on all kinds of frameworks for stylizing components. They may use MUI, Bulma, Bootstrap, the list goes on and on and on. A frontend dev might also opt for plain old CSS, if they are good enough, but transitions and all kinds of more complex stylizing goals may be difficult and require large amounts of CSS to get right. Enter Tailwind CSS. Tailwind allows frontend devs to simply decorate their component classes with valid Tailwind classifiers to get stylizing looking right with little to no CSS and certainly no huge JavaScript library dependencies. Since Tailwind CSS is built entirely on decorating elements with class names, it makes it extremely powerful for websites that avoid JavaScript altogether, like HTMX-driven websites. To this end I chose to use Tailwind CSS, and I'm not looking back.

**so in summary, HTMX and Tailwind CSS allow frontend devs to create rich dynamic server-powered websites with little to no JavaScript.**

Regardless, HTMX is still somewhat new and it may prove difficult to imbed web apps with all kinds of security and advanced features the frontend dev may want for a fully featured web-app. However, since this is essentially a static webpage, it is the perfect proving ground for HTMX. For this reason I was able to avoid overengineering this website, which is fantastic.

## Tech Stack

**Libraries:** HTMX (https://htmx.org/)

**Frameworks:** 
* Bun (https://bun.sh/)
* Elysia (https://elysiajs.com/)

**Styling:** 
* Tailwind CSS (https://tailwindcss.com/docs/installation/play-cdn)
* Daisy UI (https://daisyui.com/)

**Syntax extensions:** 
* JSX (https://react.dev/learn/writing-markup-with-jsx)
* typed-html (https://github.com/nicojs/typed-html)

**Deployment:**
* Fly.io (https://fly.io/)


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

## Run Locally with Docker

After cloning the repo run the following command to build a docker image of the project.

```bash
  docker build -t portfolio .
```

After building the image, deploy a container exposing port 3000.

```bash
  docker run --name portfolio -p 3000:3000 portfolio
```