import * as elements from "typed-html";
import { NavBar } from "./nav";
import { TOCItem } from "./types";

export function TOC({ items }: { items: TOCItem[]}) {
  const classContentsItem =
    "text-md lg:text-lg border-l -pl-1 lg:pl-3 -ml-px hover:border-secondary border-content";
  const classContentsText = "hover:text-secondary";
  return (
    <div class="hidden md:flex col-span-1 overflow-y-auto pl-6 pr-6 justify-center bg-base-300 border-r border-gray-700">
      <div class="fixed z-20 ml-4">
        <p class="text-xl lg:text-2xl font-extrabold py-4 pb-2 md:pl-3 text-left">Contents</p>
        <ul class="menu">
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
