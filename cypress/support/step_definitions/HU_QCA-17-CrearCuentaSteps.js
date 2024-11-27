const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
// import { Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import WebPage from '../../fixtures/WebPage';
import Home from '../../pageObjects/home';
import CreateAccount from '../../pageObjects/createAccount';


const openUrl = new WebPage();
const home = new Home();
const createAccount = new CreateAccount();

beforeEach(() => {      
    cy.clearCookies();
    cy.clearLocalStorage() ;
    cy.viewport(1500, 900);  
  });

Given('Que el usuario ingresa a la pagina web', () => {
    openUrl.openUrl();
});

Given('Navega a la página de crear cuenta desde el home', () => {
    home.gotoCreateAccountButton();
    cy.get('#form-validate > fieldset.fieldset.create.info').should('be.visible');       
});

When('Diligencia el formulario de registro', () => {
    createAccount.llenarFormulario();
    cy.wait(2000)
    cy.get('button.action.submit.primary').click();   
});

Then('Debería confirmar ingreso a My Account', () => {
    cy.get('#html-body > div.page-wrapper > header > div.panel.wrapper > div > ul').should('be.visible').contains('Welcome');      
    cy.get('#maincontent > div.columns > div.column.main > div.page-title-wrapper > h1').should('be.visible').contains('My Account');   
});