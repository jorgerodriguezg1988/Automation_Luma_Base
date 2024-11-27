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



beforeEach(() => {
  cy.viewport(1500, 900);    
});

describe('HU_QCA-20 : Cart', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()  
  });  

  it('HU_QCA-20 : Cart | TC-001: Ingresar a la pagina web', () => {
    openUrl.openUrl();
  }); 

  it('HU_QCA-20 : Cart | TC-002: Agregar un producto al carrito desde el Home', () => {
    home.addToCartFromHome()
  });

  it('HU_QCA-20 : Cart | TC-003: Ir a la PLP', () => {
    home.gotoPLP()    
  });

  it('HU_QCA-20 : Cart | TC-004: Agregar un producto al carrito desde PLP', () => {
    cy.wait(2000)
    plp.addToCartFromPLP()  
  });

  it('HU_QCA-20 : Cart | TC-005: Agregar un producto al carrito desde PDP', () => {
    openUrl.openUrl();
    cy.wait(2000)
    home.gotoPDP()
    pdp.addToCartFromPDP()
  });

  it('HU_QCA-20 : Cart | TC-005: Ir al Cart', () => {
    Cart.gotoCart()    
  });

});