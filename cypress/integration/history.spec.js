// type definitions for Cypress object "cy"
/// <reference types="cypress" />
 
describe('Web biller', function() {
    it('Gets all the logs that have been made on the app', function() {
    //Visit the Demo QA Website
    cy.visit("http://localhost:3000");
    
   // Clicking on Widget Menu Item
    cy.get(':nth-child(1) > :nth-child(4) > div').click();
  
  
  })
  })