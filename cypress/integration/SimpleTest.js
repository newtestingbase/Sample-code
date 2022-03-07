

describe('value Test', () =>{
it ('check webElement', ()=> {

    cy.visit('https://demo.nopcommerce.com/')
    
    cy.get("input[type='text']").type("Apple Macbook Pro 13-inch")
    cy.get("button[type='submit']").click()
    cy.get("input[type='text']").clear().type('2')
    //cy.get(button[type="button"]).click()
    //cy.get( '.cart-label').click
    //cy.get( '.product-unit-price').contains('$1,800.00')


    
})

})