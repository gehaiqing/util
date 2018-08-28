module.exports = {
  root: true,
  extends:['eslint-config-alloy/typescript'],
  plugins:[
  ],
  rules:{
    "semi": ["error", "never"],
    "no-unused-vars":"warn", //未使用的变量
    "no-new":"off"  //new操作
  }
}