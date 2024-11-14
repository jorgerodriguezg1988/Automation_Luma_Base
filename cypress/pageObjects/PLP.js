class PLP {
    addToCartFromPLP() {
      
      cy.get('.ds-sdk-product-item.group.relative.flex.flex-col.max-w-sm.justify-between.h-full')
        .realHover();
  
      
      cy.get('.ds-sdk-product-item__product-swatch button')
        .first()
        .should('be.visible')
        .realHover()
        .wait(500)
        .should('have.css', 'border-color', 'rgba(0, 0, 0, 0)')
        .click();

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
  
  export default PLP;
  