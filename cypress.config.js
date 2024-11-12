const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qa.demo.omni.pro/',
    chromeWebSecurity: false,
    testIsolation: false,
    defaultCommandTimeout: 5000,
  },
});
