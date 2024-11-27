// import {When, Then } from 'cypress-cucumber-preprocessor/steps';
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import WebPage from '../../fixtures/WebPage';
import Home from '../../pageObjects/home';
import PLP from '../../pageObjects/PLP';
import PDP from '../../pageObjects/PDP';

const home = new Home();
const plp = new PLP();
const pdp = new PDP();
const openUrl = new WebPage();

When('El usuario agrega un producto al carrito desde el Home', () => {
  home.addToCartFromHome();
});

When('El usuario va a la página de lista de productos PLP', () => {
  home.gotoPLP();
});

When('El usuario agrega un producto al carrito desde la PLP', () => {
  cy.wait(2000);
  plp.addToCartFromPLP();
});

When('El usuario agrega un producto al carrito desde la PDP', () => {
    openUrl.openUrl();
    cy.wait(2000);
    home.gotoPDP();  
});

Then('El carrito debe tener los productos agregados', () => {
    pdp.addToCartFromPDP();
});
