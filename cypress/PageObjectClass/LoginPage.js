/// <reference types ="Cypress"/>

export class LoginPage{

    Vist(){
    cy.get('https://admin-demo.nopcommerce.com/login')
    }
    
    Email(value){
        const email = cy.get('[email valid]')
        email.clear()
        email.type(value)
        return this
    }
    
    Password(value){
    
        const pass = cy.get('[field-validation-valid]')
        pass.clear()
        pass.type(value)
        return this
    }
    Submit(){
       const submit= cy.get('[button-1 login-button]')
       submit.click()
       return this
    }
    
    
    }