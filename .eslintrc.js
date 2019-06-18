module.exports = {
  root: true,
  extends: ['eslint-config-alloy/typescript'],
  plugins: [],
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    semi: ['error', 'never'],
    'no-param-reassign': 'off',
    'no-unused-vars': 'warn', //未使用的变量
    'no-new': 'off' //new操作
  }
}
