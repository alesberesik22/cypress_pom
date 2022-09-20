import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  projectId: "zskd1o",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
