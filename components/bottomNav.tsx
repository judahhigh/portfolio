import * as elements from "typed-html";

export function BottomNav() {
  return (
    <div class="btm-nav bg-base-200 border-t border-gray-700">
      <a
        class="hover:text-primary-content hover:bg-base-300 border-r border-gray-700"
        href="https://github.com/judahhigh"
      >
        <img src="../public/github.png"></img>
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/judah-high"
        class="hover:text-primary-content hover:bg-base-300"
      >
        <img src="../public/linkedin.png"></img>
        Linkedin
      </a>
    </div>
  );
}
