class Home {
    
    gotoCreateAccountButton() {
        cy.get('#html-body > div.page-wrapper > header > div.panel.wrapper > div > ul > li').contains('Create an Account').click()
    }

    




  }
  
  export default Home;