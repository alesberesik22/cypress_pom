import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  projectId: "5ta1sm",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
