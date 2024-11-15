import { faker } from '@faker-js/faker';

const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomEmail = faker.internet.email();
const randomPass = faker.internet.password() + 'Aa1!';

class CreateAccount {
    
    llenarFormulario() {
        cy.get('#firstname').should('be.visible').type(randomFirstName)
        cy.wait(50);
        cy.get('#lastname').should('be.visible').type(randomLastName)
        cy.wait(50);
        cy.get('#email_address').should('be.visible').type(randomEmail)        
        cy.wait(50);
        cy.get('#password').should('be.visible').type(randomPass)
        cy.wait(50);
        cy.get('#password-confirmation').should('be.visible').type(randomPass)
        cy.wait(50);
        cy.get('#is_subscribed').check() // se puede usar el metodo uncheck() pero es mejor comentarear la linea
        cy.get('#assistance_allowed_checkbox').check() // se puede usar el metodo uncheck() pero es mejor comentarear la linea
        cy.get('#show-password').check() // se puede usar el metodo uncheck() pero es mejor comentarear la linea
    }

  }
  
  export default CreateAccount;