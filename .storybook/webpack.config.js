module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@emotion/babel-preset-css-prop']
      }
    }
  });

  return config;
};
