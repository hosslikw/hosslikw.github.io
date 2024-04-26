// ***********************************************************
// This example support/component.js is processed and
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

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Import the mount function from the cypress-vue-unit-test package
import { mount } from '@cypress/vue'

// Add 'mount' as a custom command to the Cypress Commands object
Cypress.Commands.add('mount', mount)

// Example use:
// cy.mount(MyComponent)
