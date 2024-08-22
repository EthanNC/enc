import PROJECTS from "../data/projects";

export default function Work() {
  return (
    <div class="mt-10">
      <h1 class="mb-8 text-2xl font-heading sm:text-4xl">Projects</h1>

      <div class="flex flex-col gap-5">
        {PROJECTS.map((project, id) => {
          return (
            <div
              class="border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main p-4 sm:p-5"
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={id}
            >
              {/* <AspectRatio
                class="border-border dark:border-darkBorder shadow-light dark:shadow-dark !-bottom-[2px] rounded-base border-2"
                ratio={71 / 26}
              >
              <img
                class="w-full rounded-base"
                src={`${project.previewImage}`}
                alt={project.name}
              />
              </AspectRatio> */}

              <div class="text-text mt-5 font-base">
                <h2 class="text-xl font-heading sm:text-2xl">{project.name}</h2>

                <p class="mt-2">{project.description}</p>

                <div class="mt-8 grid grid-cols-2 gap-5">
                  <a
                    class="border-border dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-white px-4 py-2 text-center text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none"
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    class="border-border dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-white px-4 py-2 text-center text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
