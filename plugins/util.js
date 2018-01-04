/*!
 * www.notescript.cc -> em-util.js <- www.nuxtjs.org
 * Version - 0.0.0
 *
 * Copyright (c) 2017 Ed Me(603803799@qq.com)
 */

import Vue from 'vue'
import util from 'em-util'

util.config({
  screenWidth: 640
})

Object.assign(Vue.prototype/* 扩展Vue的原型链-method */, util)
