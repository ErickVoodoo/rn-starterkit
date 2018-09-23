module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    plugins: ['flowtype', 'prettier'],
    rules: {
      'react/jsx-filename-extension': 'off',
      'no-use-before-define': 'off',
      'import/prefer-default-export': 'off',
      'function-paren-newline': 'off',
      'no-trailing-spaces': 'off',
      'eol-last': 'off',
      'react/jsx-curly-brace-presence': 'off',
      camelcase: 'off',
      'no-underscore-dangle': 'off',
      'object-curly-newline': 'off',
      'arrow-parens': 'off',
      'global-require': 'off',
      'no-else-return': 'off',
      'react/jsx-indent': "off",
      'react/jsx-indent-props': "off",
      indent: 'off'
    },
    globals: {
      fetch: true,
      it: true,
      alert: true,
      btoa: true,
      document: true,
      window: true,
    },
  };
  