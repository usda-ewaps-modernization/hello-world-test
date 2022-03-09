/// <reference types="cypress" />

describe ('Base test of landing page', () => {

  it('Base page test', () => {
    
    cy.visit('http://hello-world-app.dev.ewapsmod.demoriva.com/')
    cy.get('<body>')
      .find('[id="thing"]')
      .should('have text', 'hello -- this is from the hello world application!!!')
  })
})
