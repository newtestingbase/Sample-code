
/// <reference types = 'Cypress'/>

describe("LoginPage", () => { 

    it('Enteringtextfield', () => 
    {
        cy.visit('https://www.opencart.com/index.php?route=account/login')
        

        cy.get('.btn-black').click()
        cy.get('#input-firstname').type('Pinky')
        cy.get('#input-lastname').type('Rosy')
        cy.get('#input-country').select('Austria').should('have.value','14')
        cy.get('#button-register > .hidden-xs').click({force: true})
    

    });

    

});