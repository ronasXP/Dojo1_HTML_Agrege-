const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Dojo-2-Reporter',
    embeddedScreenshots: true, 
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
        require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
