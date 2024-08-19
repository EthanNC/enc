/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "enc",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare",
    };
  },
  async run() {
    new sst.cloudflare.StaticSite("Web", {
      build: {
        command: "pnpm run build",
        output: "dist",
      },
    });
  },
});
