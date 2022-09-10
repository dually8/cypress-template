declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select element by its data-qa attribute
     * @example cy.getQA('my-data')
     */
    getQA(value: string): Chainable<any>;
  }
}