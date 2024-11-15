class Checkout {
    gotoCheckoutFromCart() {
        cy.get('#maincontent > div.columns > div > div.cart-container > div.cart-summary > ul > li:nth-child(1) > button')
        .should('be.visible')
        .realHover()
        .wait(500)
        .click();
        
        cy.wait(500)
        cy.get('#shipping > div.step-title').should('be.visible').contains('Shipping Address')

        cy.get('#checkout-shipping-method-load > table > tbody > tr:nth-child(1) > td:nth-child(1) > input').check()
        

        cy.get('#shipping-method-buttons-container > div > button')
        .should('be.visible')
        .realHover()
        .wait(500)
        .click();

        cy.get('#checkout-payment-method-load > div > div > div.step-title').should('be.visible').contains('Payment Method')

        cy.get('#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button')
        .should('be.visible')
        .realHover()
        .wait(500)
        .click();

        cy.get('#maincontent > div.columns > div > div.checkout-success > p:nth-child(1)').should('be.visible').contains('Your order number is')

    }
    
  }
  
  export default Checkout;