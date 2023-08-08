const Rules = {
  OFF: 'OFF',
  WARN: 'warn',
  ERROR: 'ERROR'
}
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': Rules.OFF,
    'react/prop-types': Rules.OFF
  }
}
