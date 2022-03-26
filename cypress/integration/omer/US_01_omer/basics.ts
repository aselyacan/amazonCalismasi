it('google test',function(){
    cy.visit('https://google.com')
    cy.get('[name="q"]').
                        type('cypress').
                        type('{enter}')
})