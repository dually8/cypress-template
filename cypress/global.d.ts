declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select element by its data-qa attribute
     * @param {String} value Value of the data-qa attribute
     * @returns {Chainable<JQuery<HTMLElement>>} The element with the data-qa attribute
     * @example cy.getQA('my-data'); // => <div data-qa="my-data" />
     */
    getQA(value: string): Chainable<JQuery<HTMLElement>>;
    /**
     * Custom command to select element by its name attribute
     * @param {String} name Value of the name attribute
     * @returns {Chainable<JQuery<HTMLElement>>} The element with the name attribute
     * @example cy.getName('my-name'); // => <input name="my-name" />
     */
    getName(name: string): Chainable<JQuery<HTMLElement>>;
    /**
     * Custom command to select element by its role attribute
     * @param {String} role Value of the role attribute
     * @returns {Chainable<JQuery<HTMLElement>>} The element with the role attribute
     * @example cy.getRole('my-role'); // => <div role="button">Click me</div>
     */
    getRole(role: string): Chainable<JQuery<HTMLElement>>;
    /**
     * Custom command to select element by its title attribute
     * @param {String} title Value of the title attribute
     * @returns {Chainable<JQuery<HTMLElement>>} The element with the title attribute
     * @example cy.getTitle('my-title'); // => <div title="my-title">Hover me</div>
     */
    getTitle(title: string): Chainable<JQuery<HTMLElement>>;
    /**
     * Custom command to select element by its data-testid attribute
     * @param {String} testId Value of the data-testid attribute
     * @returns {Chainable<JQuery<HTMLElement>>} The element with the data-testid attribute
     * @example cy.getByTestId('my-test-id'); // => <div data-testid="my-test-id">Look at me!</div>
     */
    getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
  }
}
