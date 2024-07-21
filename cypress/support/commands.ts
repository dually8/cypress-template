// # region Cypress command examples
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// #endregion

Cypress.Commands.add('getQA', (value: string) => {
  return cy.get(`[data-qa=${value}]`);
});
Cypress.Commands.add('getName', (name: string) => {
  return cy.get(`[name=${name}]`);
});
Cypress.Commands.add('getRole', (role: string) => {
  return cy.get(`[role=${role}]`);
});
Cypress.Commands.add('getTitle', (title: string) => {
  return cy.get(`[title=${title}]`);
});
Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(`[data-testid=${testId}]`);
});
