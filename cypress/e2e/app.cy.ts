import { interceptApiCalls } from '../support/utils';

describe('App', () => {
  beforeEach(() => {
    interceptApiCalls();
    cy.visit('/');
  });

  it('should load the home page', () => {
    cy.getQA('test').should('be.visible');

    cy.wait('@quack');

    cy.getQA('ducky-pic')
      .should('be.visible')
      .should('have.prop', 'src', 'https://random-d.uk/api/50.gif');
  });
});
