// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Cannot read properties of null (reading 'pop')")) {
        // Ignorar este error específico
        return false;
    }

    if (err.message.includes("Unexpected end of JSON input")) {
        // Ignorar este error específico
        return false;
    }
    // Permitir que otros errores detengan la ejecución
});



// Alternatively you can use CommonJS syntax:
// require('./commands')