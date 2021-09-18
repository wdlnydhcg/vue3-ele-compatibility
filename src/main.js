/*
 * @Author: MrAlenZhong
 * @Date: 2021-09-17 08:34:41
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-09-18 09:44:47
 * @Description: 
 */
import 'babel-polyfill'
// import promise from 'es6-promise'
// promise.polyfill()

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

import { createApp } from 'vue'
import App from './App.vue'


createApp(App)
.use(ElementPlus)
.mount('#app')
