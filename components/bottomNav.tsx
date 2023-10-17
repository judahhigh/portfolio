import * as elements from "typed-html";

export function BottomNav() {
  return (
    <div class="btm-nav dark:bg-base-200 bg-gray-800 border-t border-gray-700">
      <a
        class="text-white hover:text-primary-content hover:bg-gray-950 border-r border-gray-700"
        href="https://github.com/judahhigh"
      >
        <img src="../public/github.png"></img>
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/judah-high"
        class="text-white hover:text-primary-content hover:bg-gray-950"
      >
        <img src="../public/linkedin.png"></img>
        Linkedin
      </a>
    </div>
  );
}
