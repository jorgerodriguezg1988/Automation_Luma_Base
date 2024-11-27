const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");


module.exports = defineConfig({
  screenshotsFolder: "cypress/screenshots",
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // Agrega el preprocesador de Cucumber
      addCucumberPreprocessorPlugin(on, config);

      // Configura el empaquetador con Esbuild
      on(
        "file:preprocessor",
        createBundler({
          plugins: [addCucumberPlugin.default(config)],
        })
      );
      // Retorna la configuración modificada
      return config;
    },
    specPattern: "cypress/e2e/features/**/*.feature", // Ruta a tus archivos .feature    
    // supportFile: "cypress/support/e2e.js", // Archivo de soporte de Cypress
    baseUrl: 'https://qa.demo.omni.pro/',    
    chromeWebSecurity: false,
    testIsolation: false,
    // Global timeouts configuration   
    defaultCommandTimeout: 5000,  // Tiempo de espera por comando (8 segundos)
    requestTimeout: 20000,       // Tiempo de espera para solicitudes de red (20 segundos)
    pageLoadTimeout: 60000,      // Tiempo de espera para carga de páginas (60 segundos) 
  },
});
