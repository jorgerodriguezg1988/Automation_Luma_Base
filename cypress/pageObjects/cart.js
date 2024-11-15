class Cart {
    gotoCart() {
        cy.get('#html-body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a > span.counter.qty > span.counter-number').should('be.visible')
        cy.get('#html-body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a').should('be.visible').click()
        cy.get('#minicart-content-wrapper > div.block-content > div:nth-child(7) > div > a').should('be.visible').click()
        
        cy.get('#maincontent > div.page-title-wrapper > h1').should('be.visible').contains('Shopping Cart')
        cy.get('#shopping-cart-table > thead > tr > th.col.item > span').should('be.visible').contains('Item')
        cy.get('#shopping-cart-table > thead > tr > th.col.price > span').should('be.visible').contains('Price')
        cy.get('#shopping-cart-table > thead > tr > th.col.qty > span').should('be.visible').contains('Qty')
        cy.get('#shopping-cart-table > thead > tr > th.col.subtotal > span').should('be.visible').contains('Subtotal')
        
        cy.get('#shopping-cart-table > tbody > tr.item-info > td.col.item > a > span > span').should('be.visible')
        cy.get('#shopping-cart-table > tbody > tr.item-info > td.col.item > div > strong').should('be.visible')
        
        cy.get('#maincontent > div.columns > div > div.cart-container > div.cart-summary > strong').should('be.visible').contains('Summary')
        cy.get('#maincontent > div.columns > div > div.cart-container > div.cart-summary > ul > li:nth-child(1) > button').should('be.visible')

    }
    
  }
  
  export default Cart;