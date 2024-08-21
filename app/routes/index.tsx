import type { FC } from "hono/jsx";
import { formatDate } from "../lib/utils";
import Work from "../islands/Work";

export default function Top() {
  return (
    <>
      <div className="font-base mt-11">
        <h1 className="text-2xl font-heading sm:text-4xl">Ethan Cumming</h1>
        <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
        <div className="mt-8 text-base sm:text-lg">
          <p>I am a software engineer based out of Boston.</p>

          <br />
          <p>
            I am also an avid technologist who likes to explore the newest
            breakthroughs in hardware and software. Here you will find my recent
            writings, projects, and talks related to web development.
          </p>
        </div>
      </div>
      <Posts />
      {/* <Work /> */}
    </>
  );
}

const Posts: FC = () => {
  const posts = import.meta.glob<{
    frontmatter: { title: string; date: string; published: boolean };
  }>("./posts/*.mdx", { eager: true });
  const entries = Object.entries(posts).filter(
    ([_, module]) => module.frontmatter.published
  );

  return (
    <div class="mt-16">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Posts</h1>
      <ul class="mt-10">
        {entries.map(([id, module]) => (
          <li
            key={id}
            class="w-full flex flex-col sm:flex-row space-x-0 sm:space-x-2 mt-2 md:mt-1"
          >
            <span class="tabular-nums tnum">
              {formatDate(module.frontmatter.date)}
            </span>
            {/* <br class="block md:hidden" /> */}
            <a
              class="text-blue-600 hover:underline"
              href={`${id.replace(/\.mdx$/, "")}`}
            >
              {module.frontmatter.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
