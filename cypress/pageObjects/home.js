class Home {
    
    gotoCreateAccountButton() {
        cy.get('#html-body > div.page-wrapper > header > div.panel.wrapper > div > ul > li').contains('Create an Account').click()
    }

    gotoSignInButton() {
        cy.get('#html-body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.link.authorization-link > a').contains('Sign In').click()
    }



  }
  
  export default Home;