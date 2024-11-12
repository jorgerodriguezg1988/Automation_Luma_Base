import WebPage from '../fixtures/WebPage';
import Home from '../pageObjects/home';
import SignIn from '../pageObjects/SignIn';

const openUrl = new WebPage();
const home = new Home();
const signin = new SignIn();


beforeEach(() => {
  cy.viewport(1500, 900);    
});

describe('HU_QCA-18 : Iniciar sesión', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()  
  });  

  it('HU_QCA-18 : Iniciar sesión | TC-001: Ingresar a la pagina web', () => {
    openUrl.openUrl();
  });  

  it('HU_QCA-18 : Iniciar sesión | TC-002: Debe navegar a la página de iniciar sesión desde el home', () => {
    home.gotoSignInButton();
    cy.get('#maincontent > div.page-title-wrapper > h1').should('be.visible').contains('Customer Login') 
  });

  it('HU_QCA-18 : Iniciar sesión | TC-003: Escribir correo y contraseña', () => {
    signin.llenarCorreoyPassword();
    cy.get('#login-form > fieldset > div.actions-toolbar > div.primary').click();
  });

  it('HU_QCA-18 : Iniciar sesión | TC-004: Confirmar ingreso a My Account', () => {
    cy.get('#html-body > div.page-wrapper > header > div.panel.wrapper > div > ul').should('be.visible').contains('Welcome')      
  });

});