/// <reference types="cypress" />

describe('meter registration tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/view/meters')
    })
  
    it('displays all meters', () => {
      cy.get('.card').should('div.class','text-sm')
      cy.get('button').click()
    
  })
  