const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa.demo.omni.pro/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
