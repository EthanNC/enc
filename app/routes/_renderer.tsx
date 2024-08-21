import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import { LINK } from "../constants";
import type { PropsWithChildren } from "hono/jsx";

export default jsxRenderer(
  ({ children, title, description }: PropsWithChildren<Head>) => {
    const _title = title ?? "ENC Portfolio";
    const _description =
      description ?? "My personal website containing blog posts and projects.";
    const _image = "/static/profile-image.png";

    return (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{_title}</title>
          <meta property="og:title" content={_title} />
          <meta property="og:description" content={_description} />
          <meta property="og:image" content={_image} />
          <meta name="twitter:image" content={_image} />
          <meta name="twitter:card" content="summary_large_image" />
          <Script src="/app/client.ts" />
          {import.meta.env.PROD ? (
            <link href="/static/assets/style.css" rel="stylesheet" />
          ) : (
            <link href="/app/style.css" rel="stylesheet" />
          )}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.css"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
        </head>
        <body class="main-container">
          <header class="m-2">
            <div class="text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark mx-auto flex items-center w-max gap-5 rounded-base border-2 bg-main p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4">
              <a href="/" class=" text-white  text-3xl font-bold">
                ENC
              </a>
              <div class="flex items-center gap-2">
                <a
                  href={LINK.LINKEDIN}
                  target={"_blank"}
                  rel={"noreferrer"}
                  class="p-2"
                >
                  <img
                    src="/static/linkedin.svg"
                    alt="linkedin-icon"
                    class="w-7 h-7 "
                  />
                </a>
                <a
                  href={LINK.GITHUB}
                  target={"_blank"}
                  rel="noreferrer"
                  class="p-2"
                >
                  <img
                    src="/static/github.svg"
                    alt="github-icon"
                    class="w-7 h-7 text-black"
                  />
                </a>
              </div>
            </div>
          </header>
          <main class="w-full px-4 lg:max-w-4xl lg:px-0 mx-auto">
            {children}
          </main>
          <footer class="mt-10 text-center py-4 border-t border-black">
            <p>&copy; 2024 ENC. All rights reserved.</p>
          </footer>
        </body>
      </html>
    );
  }
);
