class PDP {
    addToCartFromPDP() {
      cy.get('#product-addtocart-button').should('be.visible').click()
      cy.get('#html-body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a > span.counter.qty > span.counter-number')
        .should('be.visible')
        .invoke('text')
        .then((text) => {
        const cantidad = parseInt(text, 10);
        expect(cantidad).to.not.be.NaN;
        expect(cantidad).to.be.greaterThan(0);
        });
    }
    
  }
  
  export default PDP;