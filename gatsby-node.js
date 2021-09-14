const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    plugins: [new NodePolyfillPlugin()],
  });
};