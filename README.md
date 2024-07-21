# Cypress Template

This is a template project that shows how to setup Cypress with a React project.

## Getting Started

1. Install [NodeJS 16.x](https://nodejs.org/en/download/)
2. Run `npm install`
3. Run `npm run e2e`

## Adding Cypress To A New Project

1. Run `npm i --save-dev cypress`
2. Run `npx cypress open` to open cypress for the first time
3. Go through the setup, select E2E testing and have cypress auto generate the given files.
4. Create a new `tsconfig.json` in the `cypress/` directory. Feel free to use this project's `cypress/tsconfig.json` as a template.

If you're looking to add custom commands, you'll need to do the following:

1. Create a file `cypress/global.d.ts` to hold your typings.
2. In your `cypress/support/commands.ts` file, add your custom command. Your typings for that will go in the `global.d.ts` you created earlier.

I also like to setup interceptors as a function, as seen in [`utils.ts`](cypress/support/utils.ts). This lets me import it and use it in a `beforeEach` block in my tests.

For scripting, I like to add [concurrently](https://www.npmjs.com/package/concurrently) and sometimes [cross-env](https://www.npmjs.com/package/cross-env), depending on the situation.

This allows me to add scripts like `e2e` and `e2e:watch` as seen in this project's [`package.json`](package.json).

## Further Reading

- [Create React App](https://create-react-app.dev/docs/getting-started/)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Cypress Real World App](https://github.com/cypress-io/cypress-realworld-app)
