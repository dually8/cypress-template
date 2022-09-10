export const interceptApiCalls = () => {
  // https://random-d.uk/api/quack
  cy.intercept('**/api/quack', {
    fixture: 'example.json',
  }).as('quack');
}