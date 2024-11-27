const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Home from '../../pageObjects/home';
import SignIn from '../../pageObjects/SignIn';

const home = new Home();
const signin = new SignIn();
  
  Given('Navega a la página de iniciar sesión desde el home', () => {
    home.gotoSignInButton();
    cy.get('#maincontent > div.page-title-wrapper > h1').should('be.visible').contains('Customer Login');
  });
  
  When('Escribe su correo y contraseña', () => {
    signin.llenarCorreoyPassword();
    cy.get('#login-form > fieldset > div.actions-toolbar > div.primary').click();
  });
  
  Then('Debería confirmar ingreso a My Account', () => {
    cy.get('#html-body > div.page-wrapper > header > div.panel.wrapper > div > ul')
      .should('be.visible')
      .contains('Welcome');      
  });