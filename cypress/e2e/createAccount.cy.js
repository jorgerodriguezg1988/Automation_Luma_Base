import Home from '../pageObjects/home';

describe('Pruebas de la página de inicio', () => {
  const home = new Home();

  beforeEach(() => {
    cy.visit('/');
  });

  it('Debe navegar a la página de crear cuenta desde el home', () => {
    home.gotoCreateAccountButton();
    cy.get('#form-validate > fieldset.fieldset.create.info').should('be.visible')

  });
});