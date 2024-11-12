const email = 'jorge.rodriguez.g.ap+01@gmail.com'
const password = 'Omni.pro'

class SignIn {
    
    llenarCorreoyPassword() {
        cy.get('#email').should('be.visible').type(email)
        cy.get('#password').should('be.visible').type(password)
        cy.get('#show-password').check() // se puede usar el metodo uncheck() pero es mejor comentarear la linea
    }
  }
  
  export default SignIn;