const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Home from '../../pageObjects/home';
import cart from '../../pageObjects/cart';
import SignIn from '../../pageObjects/SignIn';
import Checkout from '../../pageObjects/checkout';


const home = new Home();
const Cart = new cart();
const signin = new SignIn();
const checkout = new Checkout();


When('El usuario navega a la página de inicio de sesión desde el home', () => {
  home.gotoSignInButton();
  cy.get('#maincontent > div.page-title-wrapper > h1')
    .should('be.visible')
    .contains('Customer Login');
});

When('El usuario ingresa su correo y contraseña', () => {
  signin.llenarCorreoyPassword();
  cy.get('#login-form > fieldset > div.actions-toolbar > div.primary').click();
});

When('El usuario agrega un producto al carrito desde el Home', () => {
  home.addToCartFromHome();
});

When('El usuario navega al carrito', () => {
    Cart.gotoCart();    
});

When('El usuario procede al checkout desde el carrito', () => {
  checkout.gotoCheckoutFromCart();
});

Then('El usuario debería estar en la página de checkout', () => {
  cy.url().should('include', '/checkout');  // Asegúrate de que la URL contenga '/checkout'
});
