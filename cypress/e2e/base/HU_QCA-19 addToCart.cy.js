import WebPage from '../../fixtures/WebPage';
import Home from '../../pageObjects/home';
import PLP from '../../pageObjects/PLP';
import PDP from '../../pageObjects/PDP';


const openUrl = new WebPage();
const home = new Home();
const plp = new PLP();
const pdp = new PDP();



beforeEach(() => {
  cy.viewport(1500, 900);    
});

describe('HU_QCA-19 : Agregar al carrito', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()  
  });  

  it('HU_QCA-19 : Agregar al carrito | TC-001: Ingresar a la pagina web', () => {
    openUrl.openUrl();
  }); 

  it('HU_QCA-19 : Agregar al carrito | TC-002: Agregar un producto al carrito desde el Home', () => {
    home.addToCartFromHome()
  });

  it('HU_QCA-19 : Agregar al carrito | TC-003: Ir a la PLP', () => {
    home.gotoPLP()    
  });

  it('HU_QCA-19 : Agregar al carrito | TC-004: Agregar un producto al carrito desde PLP', () => {
    cy.wait(2000)
    plp.addToCartFromPLP()  
  });

  it('HU_QCA-19 : Agregar al carrito | TC-005: Agregar un producto al carrito desde PDP', () => {
    openUrl.openUrl();
    cy.wait(2000)
    home.gotoPDP()
    pdp.addToCartFromPDP()
  });

});