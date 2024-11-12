class CreateAccount {
    
    llenarNombre() {
        cy.get('#form-validate > fieldset.fieldset.create.info > div.field.field-name-firstname.required > div').should('be.visible').type('Jorge')
        cy.wait(100);
    }

    




  }
  
  export default CreateAccount;