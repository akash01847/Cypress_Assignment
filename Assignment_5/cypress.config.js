// const path = require("path");
// const { merge } = require("mochawesome-merge");
// const { create } = require("mochawesome-report-generator");

// module.exports = {
//   // ...
//   // ...
//   reporters: [
//     "mochawesome",
//     {
//       reporterName: "mochawesome",
//       options: {
//         reportDir: path.resolve(__dirname, "cypress/reports/mocha"),
//         overwrite: false,
//         html: false,
//         json: true,
//       },
//     },
//   ],

//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       require('cypress-mochawesome-reporter/plugin')(on);
//     },
//   },
// };

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
