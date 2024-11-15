import { should } from "chai";

class Home {
    
    gotoCreateAccountButton() {
        cy.get('#html-body > div.page-wrapper > header > div.panel.wrapper > div > ul > li').contains('Create an Account').click()
    }

    gotoSignInButton() {
        cy.get('#html-body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.link.authorization-link > a').contains('Sign In').click()
    }

    addToCartFromHome() {
        cy.get('#maincontent > div.columns > div > div:nth-child(7) > div > div:nth-child(5) > div > div:nth-child(5)').should('be.visible')
        cy.get('#maincontent > div.columns > div > div:nth-child(7) > div > div:nth-child(5) > div > div:nth-child(5) > ol > div > div > div:nth-child(10) > div > li > div > div > div.product-item-inner').contains('Add to Cart').click()
        cy.get('#html-body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a > span.counter.qty > span.counter-number')
        .should('be.visible')
        .invoke('text')
        .then((text) => {
          const cantidad = parseInt(text, 10);
          expect(cantidad).to.not.be.NaN;
          expect(cantidad).to.be.greaterThan(0);
        });
    }

    gotoPLP() {
        cy.get('#ui-id-1') // Selecciona el elemento sobre el cual se activa el hover
            .should('be.visible')         // Asegura que el elemento esté visible
            .trigger('mouseover');        // Simula el hover pasando el puntero sobre el elemento

        cy.get('#ui-id-2 > span:nth-child(2)') // Selecciona el elemento sobre el cual se activa el hover
            .should('be.visible')         // Asegura que el elemento esté visible
            .trigger('mouseover');        // Simula el hover pasando el puntero sobre el elemento

//           Aquí puedes agregar otras acciones, como hacer clic en las opciones que aparecen después del hover:
        cy.get('#ui-id-1 > li.level0.nav-1.category-item.first.level-top.parent.ui-menu-item > ul > li.level1.nav-1-1.category-item.first.parent.ui-menu-item')
            .should('be.visible')        // Asegura que la opción aparezca después del hover
            .click();                    // Haz clic en la opción que se mostró

        cy.get('#html-body > div.page-wrapper > div.breadcrumbs > ul > li.item.category21').should('be.visible')        
    }

    gotoPDP() {
        cy.get('#maincontent > div.columns > div > div:nth-child(7) > div > div:nth-child(5) > div > div:nth-child(5) > ol > div > div > div:nth-child(10) > div > li > div > a > span').should('be.visible').click()
        cy.get('#product-addtocart-button').should('be.visible')
    }



  }
  
  export default Home;