import WebPage from '../../fixtures/WebPage';
import Home from '../../pageObjects/home';
import CreateAccount from '../../pageObjects/createAccount';
const openUrl = new WebPage();
const home = new Home();
const createAccount = new CreateAccount();

beforeEach(() => {
  cy.viewport(1500, 900);    
});

describe('HU_QCA-17 : Crear nueva cuenta', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()  
  });  

  it('HU_QCA-17 : Crear nueva cuenta | TC-001: Ingresar a la pagina web', () => {
    openUrl.openUrl();
  });  

  it('HU_QCA-17 : Crear nueva cuenta | TC-002: Debe navegar a la página de crear cuenta desde el home', () => {
    home.gotoCreateAccountButton();
    cy.get('#form-validate > fieldset.fieldset.create.info').should('be.visible')
  });

  it('HU_QCA-17 : Crear nueva cuenta | TC-003: Diligenciar Formulario', () => {
    createAccount.llenarFormulario();
    cy.wait(2000)
    cy.get('button.action.submit.primary').click();
  });

  it('HU_QCA-17 : Crear nueva cuenta | TC-004: Confirmar ingreso a My Account', () => {
    cy.get('#html-body > div.page-wrapper > header > div.panel.wrapper > div > ul').should('be.visible').contains('Welcome')      
    cy.get('#maincontent > div.columns > div.column.main > div.page-title-wrapper > h1').should('be.visible').contains('My Account') 
  });

});