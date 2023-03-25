const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@constants": "src/constants",
    "@monipulation": "src/monipulation",
    "@pages": "src/pages",
    "@store": "src/store",
    "@utils": "src/utils",
  })(config);

  return config;
};
