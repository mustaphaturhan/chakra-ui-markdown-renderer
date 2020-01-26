module.exports = function(api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["macros"];

  return {
    presets,
    plugins
  };
};
