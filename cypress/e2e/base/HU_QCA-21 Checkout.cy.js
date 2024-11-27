import WebPage from '../../fixtures/WebPage';
import Home from '../../pageObjects/home';
import cart from '../../pageObjects/cart';
import SignIn from '../../pageObjects/SignIn';
import Checkout from '../../pageObjects/checkout';


const openUrl = new WebPage();
const home = new Home();
const Cart = new cart();
const signin = new SignIn();
const checkout = new Checkout();



beforeEach(() => {
  cy.viewport(1500, 900);    
});

describe('HU_QCA-21 : Checkout', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()  
  });  

  it('HU_QCA-21 : Checkout | TC-001: Ingresar a la pagina web', () => {
    openUrl.openUrl();
  }); 

  it('HU_QCA-21 : Checkout | TC-002: Debe navegar a la página de iniciar sesión desde el home', () => {
    home.gotoSignInButton();
    cy.get('#maincontent > div.page-title-wrapper > h1').should('be.visible').contains('Customer Login') 
  });

  it('HU_QCA-21 : Checkout | TC-003: Escribir correo y contraseña', () => {
    signin.llenarCorreoyPassword();
    cy.get('#login-form > fieldset > div.actions-toolbar > div.primary').click();
  });

  it('HU_QCA-21 : Checkout | TC-004: Agregar un producto al carrito desde el Home', () => {
    home.addToCartFromHome()
  });

  it('HU_QCA-21 : Checkout | TC-005: Ir al Cart', () => {
    Cart.gotoCart()    
  });

  it('HU_QCA-21 : Checkout | TC-005: Ir al Checkout desde el Cart', () => {
    checkout.gotoCheckoutFromCart()
  });

});