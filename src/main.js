// 基于webpac的开发，是基于模块化的开发
// Node.js的模块化遵守CommonJS规范
// var Vue = require('vue');

// ES6模块化的语法
import Vue from 'vue';
import App from './App.vue';

// 导入全局的样式
// 导入bootstrap的样式 3.3.7
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
new Vue({
  el: '#app',
  render: h => h(App)
});
