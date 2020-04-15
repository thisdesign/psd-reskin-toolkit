const path = require("path");

module.exports = {
  // For absolute imports
  webpack(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [path.join("src"), path.join(__dirname, "node_modules"), "./"],
        extensions: [".tsx", ".ts", ".js"],
      },
    };
  },
  // distDir: "out",
  async exportPathMap(defaultPathMap) {
    return defaultPathMap;
  },
};
