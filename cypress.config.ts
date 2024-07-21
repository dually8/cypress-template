import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    viewportHeight: 720, // 720p resolution
    viewportWidth: 1280,
    specPattern: 'cypress/e2e/**/*.ts',
    supportFile: 'cypress/support/e2e.ts',
  },
});
