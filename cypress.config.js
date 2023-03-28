const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,

  e2e: {
    baseUrl: "http://localhost:3000/",
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
