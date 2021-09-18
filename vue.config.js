/*
 * @Author: MrAlenZhong
 * @Date: 2021-09-17 10:46:36
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-09-17 15:15:43
 * @Description: 
 */

// module.exports = {
//   transpileDependencies: [
//     // 可以是字符串或正则表达式
//     'my-dep',
//     /other-dep/
//   ],
//   parallel:false,
//   chainWebpack:config => {
//     config.module.rule('js').use('babel-loader')
//   }

 
  
// }
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  transpileDependencies: process.env.NODE_ENV === "development" ? ["*"] : [],
  configureWebpack: (config) => {
          config.entry.app = ["babel-polyfill", "./src/main.js"];
  },
  // chainWebpack: config => {
  //   config.module.rule('compile')
  //   .test(/\.js$/)
  //   .include
  //   .add(resolve('src'))
  //   .add(resolve('test'))
  //   .add(resolve('static'))
  //   .add(resolve('node_modules/webpack-dev-server/client'))
  //   .add(resolve('node_modules'))
  //   .end()
  //   .use('babel')
  //   .loader('babel-loader')
  //   .options({
  //     presets: [
  //       ['@babel/preset-env', {
  //         modules: false
  //       }]
  //     ]
  //   });
  // }
}