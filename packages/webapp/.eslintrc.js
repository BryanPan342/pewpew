const baseConfig = require('../../.eslintrc.build');
baseConfig.parserOptions.project = __dirname + '/tsconfig.json';
baseConfig.env.browser = true;
baseConfig.extends.push('plugin:react/recommended');
baseConfig.plugins.push('react');

module.exports = baseConfig;