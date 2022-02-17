// type definitions for Cypress object "cy"
/// <reference types="cypress" />
 
describe('Meters page', function() {
    it('Gets all the meters that are created', function() {
    //Visit the Demo QA Website
    cy.visit("http://localhost:3000/view/meters");
    
   // Clicking on Widget Menu Item
    cy.get(':nth-child(1) > :nth-child(4) > div > div').click();
  
  
  })
  })