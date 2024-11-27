const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import WebPage from '../../fixtures/WebPage';
import Home from '../../pageObjects/home';
import PLP from '../../pageObjects/PLP';
import PDP from '../../pageObjects/PDP';
import cart from '../../pageObjects/cart';


const openUrl = new WebPage();
const home = new Home();
const plp = new PLP();
const pdp = new PDP();
const Cart = new cart();


When('Agrega un producto al carrito desde el Home', () => {
  home.addToCartFromHome();  
});

Given('Navega a la PLP', () => {
  home.gotoPLP();
});

When('Agrega un producto al carrito desde el PLP', () => {  
  cy.wait(2000)
  plp.addToCartFromPLP()  
});

When('Agrega un producto más al carrito desde el PDP', () => {  
  openUrl.openUrl();
  cy.wait(2000)
  home.gotoPDP()
  pdp.addToCartFromPDP()
});

Then('Debería ver los productos agregados en el carrito', () => {
    Cart.gotoCart();
});
