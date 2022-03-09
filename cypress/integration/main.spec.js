/// <reference types="cypress" />

describe ('Base test of landing page', () => {

  it('Tests base page hello world output', () => {
    
    cy.visit('http://hello-world-app.dev.ewapsmod.demoriva.com/')
    cy.get('body')
      .should('contain', 'hello -- this is from the hello world application!!!')
  })
})
