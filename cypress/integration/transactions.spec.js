describe('New Transaction', () => {
    it('succesfully performs transacton', () => {
      // visit 'baseUrl'
      cy.visit('/balance/add');
      // assert if we are in good place - search for a 'smarter world phrase
      cy.contains('web biller');

      // submit inputs and click submit button
      cy.get('input[data-testid="number"]').type('08453234');
      cy.get('input[data-testid="amount"]').type('800');
      cy.get('button[data-testid="buy"]').click();
      // verify that we were redirected
      cy.url({ timeout: 3000 }).should('includes', '/');
    });
  });