/**
 * swui v"18.2.0" (https://github.com/swimlane/ngx-ui)
 * Copyright 2017
 * Licensed under MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/common"), require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define("swui", ["@angular/common", "@angular/core"], factory);
	else if(typeof exports === 'object')
		exports["swui"] = factory(require("@angular/common"), require("@angular/core"));
	else
		root["swui"] = factory(root["@angular/common"], root["@angular/core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_core__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":true,\"plugins\":[null]}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/jmh/workspace/temp/ngx-ui-mono/packages/ngx-ui-tooltips/src/components\",\"/Users/jmh/workspace/temp/ngx-ui-mono/packages/ngx-ui-tooltips/src/styles\",\"/Users/jmh/workspace/temp/ngx-ui-mono/packages/ngx-ui-tooltips/src/assets\"]}!./src/components/tooltip/tooltip.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "/**\n * Colors\n */\n/**\n * Gradients\n */\n.gradient-blue {\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#6bd1f9), to(#54a4fb));\n  background-image: linear-gradient(to top right, #6bd1f9 0%, #54a4fb 100%); }\n\n.gradient-blue-green {\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#69d1f8), to(#59e6c8));\n  background-image: linear-gradient(to top right, #69d1f8 0%, #59e6c8 100%); }\n\n.gradient-blue-red {\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#50a1f9), to(#f96f50));\n  background-image: linear-gradient(to top right, #50a1f9 0%, #f96f50 100%); }\n\n.gradient-blue-purple {\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#73bef4), to(#aa90ed));\n  background-image: linear-gradient(to top right, #73bef4 0%, #aa90ed 100%); }\n\n.gradient-red-orange {\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#fc7c5f), to(#fcbc5a));\n  background-image: linear-gradient(to top right, #fc7c5f 0%, #fcbc5a 100%); }\n\n.gradient-orange-purple {\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#f5cc98), to(#ae94ec));\n  background-image: linear-gradient(to top right, #f5cc98 0%, #ae94ec 100%); }\n\n/**\n * Gradient Backgrounds\n */\n.bg-linear-1 {\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#1b1e27), to(#2a2f40));\n  background-image: linear-gradient(to top right, #1b1e27 0%, #2a2f40 100%); }\n\n.bg-linear-2 {\n  background-image: -webkit-gradient(linear, left bottom, right top, from(#1b1e27), to(#1f2a40));\n  background-image: linear-gradient(to top right, #1b1e27 0%, #1f2a40 100%); }\n\n.bg-radial-1 {\n  background-image: radial-gradient(ellipse farthest-corner at center top, #1e283e 0%, #1b1e27 100%); }\n\n.bg-radial-2 {\n  background-image: radial-gradient(ellipse farthest-corner at center top, #212736 0%, #1b1f29 100%); }\n\n/**\n * Shadow Presets\n * Concept from: https://github.com/angular/material/blob/master/src/core/style/variables.scss\n */\n.shadow-1 {\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n\n.shadow-2 {\n  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12); }\n\n.shadow-3 {\n  -webkit-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12); }\n\n.shadow-4 {\n  -webkit-box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.shadow-5 {\n  -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12); }\n\n.shadow-6 {\n  -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n\n.shadow-7 {\n  -webkit-box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2), 0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2), 0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.shadow-8 {\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.shadow-9 {\n  -webkit-box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.2), 0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.2), 0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.shadow-10 {\n  -webkit-box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.2), 0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.2), 0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.shadow-11 {\n  -webkit-box-shadow: 0 6px 7px -4px rgba(0, 0, 0, 0.2), 0 11px 15px 1px rgba(0, 0, 0, 0.14), 0 4px 20px 3px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 6px 7px -4px rgba(0, 0, 0, 0.2), 0 11px 15px 1px rgba(0, 0, 0, 0.14), 0 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.shadow-12 {\n  -webkit-box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.shadow-13 {\n  -webkit-box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.shadow-14 {\n  -webkit-box-shadow: 0 7px 9px -4px rgba(0, 0, 0, 0.2), 0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 7px 9px -4px rgba(0, 0, 0, 0.2), 0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.shadow-15 {\n  -webkit-box-shadow: 0 8px 9px -5px rgba(0, 0, 0, 0.2), 0 15px 22px 2px rgba(0, 0, 0, 0.14), 0 6px 28px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 8px 9px -5px rgba(0, 0, 0, 0.2), 0 15px 22px 2px rgba(0, 0, 0, 0.14), 0 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.shadow-16 {\n  -webkit-box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.shadow-17 {\n  -webkit-box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2), 0 17px 26px 2px rgba(0, 0, 0, 0.14), 0 6px 32px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2), 0 17px 26px 2px rgba(0, 0, 0, 0.14), 0 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.shadow-18 {\n  -webkit-box-shadow: 0 9px 11px -5px rgba(0, 0, 0, 0.2), 0 18px 28px 2px rgba(0, 0, 0, 0.14), 0 7px 34px 6px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 9px 11px -5px rgba(0, 0, 0, 0.2), 0 18px 28px 2px rgba(0, 0, 0, 0.14), 0 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.shadow-19 {\n  -webkit-box-shadow: 0 9px 12px -6px rgba(0, 0, 0, 0.2), 0 19px 29px 2px rgba(0, 0, 0, 0.14), 0 7px 36px 6px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 9px 12px -6px rgba(0, 0, 0, 0.2), 0 19px 29px 2px rgba(0, 0, 0, 0.14), 0 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.shadow-20 {\n  -webkit-box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.shadow-21 {\n  -webkit-box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 21px 33px 3px rgba(0, 0, 0, 0.14), 0 8px 40px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 21px 33px 3px rgba(0, 0, 0, 0.14), 0 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.shadow-22 {\n  -webkit-box-shadow: 0 10px 14px -6px rgba(0, 0, 0, 0.2), 0 22px 35px 3px rgba(0, 0, 0, 0.14), 0 8px 42px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 10px 14px -6px rgba(0, 0, 0, 0.2), 0 22px 35px 3px rgba(0, 0, 0, 0.14), 0 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.shadow-23 {\n  -webkit-box-shadow: 0 11px 14px -7px rgba(0, 0, 0, 0.2), 0 23px 36px 3px rgba(0, 0, 0, 0.14), 0 9px 44px 8px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 11px 14px -7px rgba(0, 0, 0, 0.2), 0 23px 36px 3px rgba(0, 0, 0, 0.14), 0 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.shadow-24 {\n  -webkit-box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.shadow-fx {\n  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .shadow-fx:hover {\n    -webkit-box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12);\n            box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.ngx-tooltip-content {\n  position: fixed;\n  border-radius: 3px;\n  z-index: 5000;\n  display: block;\n  font-weight: normal;\n  opacity: 0; }\n  .ngx-tooltip-content.type-popover {\n    background: #cfcfcf;\n    color: #1c2029;\n    border: 1px solid transparet;\n    -webkit-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);\n            box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);\n    font-size: 13px;\n    padding: 4px; }\n    .ngx-tooltip-content.type-popover .tooltip-caret {\n      position: absolute;\n      z-index: 5001;\n      width: 0;\n      height: 0; }\n      .ngx-tooltip-content.type-popover .tooltip-caret.position-left {\n        border-top: 7px solid transparent;\n        border-bottom: 7px solid transparent;\n        border-left: 7px solid #cfcfcf; }\n      .ngx-tooltip-content.type-popover .tooltip-caret.position-top {\n        border-left: 7px solid transparent;\n        border-right: 7px solid transparent;\n        border-top: 7px solid #cfcfcf; }\n      .ngx-tooltip-content.type-popover .tooltip-caret.position-right {\n        border-top: 7px solid transparent;\n        border-bottom: 7px solid transparent;\n        border-right: 7px solid #cfcfcf; }\n      .ngx-tooltip-content.type-popover .tooltip-caret.position-bottom {\n        border-left: 7px solid transparent;\n        border-right: 7px solid transparent;\n        border-bottom: 7px solid #cfcfcf; }\n  .ngx-tooltip-content.type-tooltip {\n    color: #cfcfcf;\n    background: rgba(0, 0, 0, 0.75);\n    font-size: 12px;\n    padding: 4px;\n    text-align: center; }\n    .ngx-tooltip-content.type-tooltip .tooltip-caret.position-left {\n      border-top: 7px solid transparent;\n      border-bottom: 7px solid transparent;\n      border-left: 7px solid rgba(0, 0, 0, 0.75); }\n    .ngx-tooltip-content.type-tooltip .tooltip-caret.position-top {\n      border-left: 7px solid transparent;\n      border-right: 7px solid transparent;\n      border-top: 7px solid rgba(0, 0, 0, 0.75); }\n    .ngx-tooltip-content.type-tooltip .tooltip-caret.position-right {\n      border-top: 7px solid transparent;\n      border-bottom: 7px solid transparent;\n      border-right: 7px solid rgba(0, 0, 0, 0.75); }\n    .ngx-tooltip-content.type-tooltip .tooltip-caret.position-bottom {\n      border-left: 7px solid transparent;\n      border-right: 7px solid transparent;\n      border-bottom: 7px solid rgba(0, 0, 0, 0.75); }\n  .ngx-tooltip-content .tooltip-caret {\n    position: absolute;\n    z-index: 5001;\n    width: 0;\n    height: 0; }\n  .ngx-tooltip-content.position-right {\n    -webkit-transform: translate3d(10px, 0, 0);\n            transform: translate3d(10px, 0, 0); }\n  .ngx-tooltip-content.position-left {\n    -webkit-transform: translate3d(-10px, 0, 0);\n            transform: translate3d(-10px, 0, 0); }\n  .ngx-tooltip-content.position-top {\n    -webkit-transform: translate3d(0, -10px, 0);\n            transform: translate3d(0, -10px, 0); }\n  .ngx-tooltip-content.position-bottom {\n    -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0); }\n  .ngx-tooltip-content.animate {\n    opacity: 1;\n    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\n    transition: opacity 0.3s, -webkit-transform 0.3s;\n    transition: opacity 0.3s, transform 0.3s;\n    transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src/components/tooltip/tooltip.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":true,\"plugins\":[null]}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/jmh/workspace/temp/ngx-ui-mono/packages/ngx-ui-tooltips/src/components\",\"/Users/jmh/workspace/temp/ngx-ui-mono/packages/ngx-ui-tooltips/src/styles\",\"/Users/jmh/workspace/temp/ngx-ui-mono/packages/ngx-ui-tooltips/src/assets\"]}!./src/components/tooltip/tooltip.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@angular/core"
var core_ = __webpack_require__("@angular/core");
var core__default = /*#__PURE__*/__webpack_require__.n(core_);

// CONCATENATED MODULE: ./src/services/injection.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Injection service is a helper to append components
 * dynamically to a known location in the DOM, most
 * noteably for dialogs/tooltips appending to body.
 *
 * @export
 * @class InjectionService
 */
var injection_service_InjectionService = /** @class */ (function () {
    function InjectionService(applicationRef, componentFactoryResolver, injector) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * Gets the root view container to inject the component to.
     *
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.getRootViewContainer = function () {
        if (this._container)
            return this._container;
        var rootComponents = this.applicationRef['_rootComponents'];
        if (rootComponents.length)
            return rootComponents[0];
        throw new Error('View Container not found! ngUpgrade needs to manually set this via setRootViewContainer.');
    };
    /**
     * Overrides the default root view container. This is useful for
     * things like ngUpgrade that doesn't have a ApplicationRef root.
     *
     * @param {any} container
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.setRootViewContainer = function (container) {
        this._container = container;
    };
    /**
     * Gets the html element for a component ref.
     *
     * @param {ComponentRef<any>} componentRef
     * @returns {HTMLElement}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.getComponentRootNode = function (componentRef) {
        // the top most component root node has no `hostView`
        if (!componentRef.hostView)
            return componentRef.element.nativeElement;
        return componentRef.hostView.rootNodes[0];
    };
    /**
     * Gets the root component container html element.
     *
     * @returns {HTMLElement}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.getRootViewContainerNode = function (componentRef) {
        return this.getComponentRootNode(componentRef);
    };
    /**
     * Projects the bindings onto the component
     *
     * @param {ComponentRef<any>} component
     * @param {*} options
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.projectComponentBindings = function (component, bindings) {
        if (bindings) {
            if (bindings.inputs !== undefined) {
                var bindingKeys = Object.getOwnPropertyNames(bindings.inputs);
                for (var _i = 0, bindingKeys_1 = bindingKeys; _i < bindingKeys_1.length; _i++) {
                    var bindingName = bindingKeys_1[_i];
                    component.instance[bindingName] = bindings.inputs[bindingName];
                }
            }
            if (bindings.outputs !== undefined) {
                var eventKeys = Object.getOwnPropertyNames(bindings.outputs);
                for (var _a = 0, eventKeys_1 = eventKeys; _a < eventKeys_1.length; _a++) {
                    var eventName = eventKeys_1[_a];
                    component.instance[eventName] = bindings.outputs[eventName];
                }
            }
        }
        return component;
    };
    /**
     * Appends a component to a adjacent location
     *
     * @template T
     * @param {Type<T>} componentClass
     * @param {*} [options={}]
     * @param {Element} [location]
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    InjectionService.prototype.appendComponent = function (componentClass, bindings, location) {
        if (bindings === void 0) { bindings = {}; }
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
        var componentRef = componentFactory.create(this.injector);
        var appRef = this.applicationRef;
        var componentRootNode = this.getComponentRootNode(componentRef);
        // project the options passed to the component instance
        this.projectComponentBindings(componentRef, bindings);
        appRef.attachView(componentRef.hostView);
        componentRef.onDestroy(function () {
            appRef.detachView(componentRef.hostView);
        });
        // location override not passed, get `this._container`
        if (!location)
            location = this.getRootViewContainer();
        var appendLocation = this.getComponentRootNode(location);
        appendLocation.appendChild(componentRootNode);
        return componentRef;
    };
    InjectionService = __decorate([
        Object(core_["Injectable"])(),
        __metadata("design:paramtypes", [core_["ApplicationRef"],
            core_["ComponentFactoryResolver"],
            core_["Injector"]])
    ], InjectionService);
    return InjectionService;
}());


// CONCATENATED MODULE: ./src/services/injection-registery.service.ts
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var InjectionRegisteryService = /** @class */ (function () {
    function InjectionRegisteryService(injectionService) {
        this.injectionService = injectionService;
        this.defaults = {};
        this.components = new Map();
    }
    InjectionRegisteryService.prototype.getByType = function (type) {
        if (type === void 0) { type = this.type; }
        return this.components.get(type);
    };
    InjectionRegisteryService.prototype.create = function (bindings) {
        return this.createByType(this.type, bindings);
    };
    InjectionRegisteryService.prototype.createByType = function (type, bindings) {
        bindings = this.assignDefaults(bindings);
        var component = this.injectComponent(type, bindings);
        this.register(type, component);
        return component;
    };
    InjectionRegisteryService.prototype.destroy = function (instance) {
        var compsByType = this.components.get(instance.componentType);
        if (compsByType && compsByType.length) {
            var idx = compsByType.indexOf(instance);
            if (idx > -1) {
                var component = compsByType[idx];
                component.destroy();
                compsByType.splice(idx, 1);
            }
        }
    };
    InjectionRegisteryService.prototype.destroyAll = function () {
        this.destroyByType(this.type);
    };
    InjectionRegisteryService.prototype.destroyByType = function (type) {
        var comps = this.components.get(type);
        if (comps && comps.length) {
            var i = comps.length - 1;
            while (i >= 0) {
                this.destroy(comps[i--]);
            }
        }
    };
    InjectionRegisteryService.prototype.injectComponent = function (type, bindings) {
        return this.injectionService.appendComponent(type, bindings);
    };
    InjectionRegisteryService.prototype.assignDefaults = function (bindings) {
        var inputs = __assign({}, this.defaults.inputs);
        var outputs = __assign({}, this.defaults.outputs);
        if (!bindings.inputs && !bindings.outputs) {
            bindings = { inputs: bindings };
        }
        if (inputs) {
            bindings.inputs = __assign({}, inputs, bindings.inputs);
        }
        if (outputs) {
            bindings.outputs = __assign({}, outputs, bindings.outputs);
        }
        return bindings;
    };
    InjectionRegisteryService.prototype.register = function (type, component) {
        if (!this.components.has(type)) {
            this.components.set(type, []);
        }
        var types = this.components.get(type);
        types.push(component);
    };
    return InjectionRegisteryService;
}());


// CONCATENATED MODULE: ./src/services/index.ts



// EXTERNAL MODULE: external "@angular/common"
var common_ = __webpack_require__("@angular/common");
var common__default = /*#__PURE__*/__webpack_require__.n(common_);

// CONCATENATED MODULE: ./src/utils/debounce.ts
/**
 * Debounce a function
 * @param  {any}     func      function to executoe
 * @param  {number}  wait      wait duration
 * @param  {boolean} immediate wait or immediate executue
 */
function debounce(func, wait, immediate) {
    var timeout;
    var args;
    var context;
    var timestamp;
    var result;
    return function () {
        context = this;
        args = arguments;
        timestamp = new Date();
        function later() {
            var last = +new Date() - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                }
            }
        }
        var callNow = immediate && !timeout;
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        if (callNow) {
            result = func.apply(context, args);
        }
        return result;
    };
}
/**
 * Debounce decorator
 *
 *  class MyClass {
 *    debounceable(10)
 *    myFn() { ... }
 *  }
 */
function debounceable(duration, immediate) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: debounce(descriptor.value, duration, immediate)
                });
                return this[key];
            }
        };
    };
}

// CONCATENATED MODULE: ./src/utils/throttle.ts
/**
 * Throttle a function
 * @param  {any}    func    function to execute
 * @param  {number} wait    duration to wait
 * @param  {any}    options options
 */
function throttle(func, wait, options) {
    options = options || {};
    var context;
    var args;
    var result;
    var timeout = null;
    var previous = 0;
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return function () {
        var now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
function throttleable(duration, options) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            }
        };
    };
}

// CONCATENATED MODULE: ./src/utils/id.ts
var cache = {};
/**
 * Generates a short id.
 *
 * Description:
 * 	A 4-character alphanumeric sequence (364 = 1.6 million)
 * 	This should only be used for JavaScript specific models.
 * 	http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 *
 * 	Example: `ebgf`
 */
function id() {
    var newId = ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
    // append a 'a' because neo gets mad
    newId = "a" + newId;
    // ensure not already used
    if (!cache[newId]) {
        cache[newId] = true;
        return newId;
    }
    return id();
}

// CONCATENATED MODULE: ./src/utils/position/placement.type.ts
var PlacementTypes;
(function (PlacementTypes) {
    PlacementTypes[PlacementTypes["top"] = 'top'] = "top";
    PlacementTypes[PlacementTypes["bottom"] = 'bottom'] = "bottom";
    PlacementTypes[PlacementTypes["left"] = 'left'] = "left";
    PlacementTypes[PlacementTypes["right"] = 'right'] = "right";
})(PlacementTypes || (PlacementTypes = {}));

// CONCATENATED MODULE: ./src/utils/position/position.ts

var caretOffset = 7;
function verticalPosition(elDimensions, popoverDimensions, alignment) {
    var result;
    if (alignment === 'top') {
        result = elDimensions.top - caretOffset;
    }
    if (alignment === 'bottom') {
        result = elDimensions.top + elDimensions.height - popoverDimensions.height + caretOffset;
    }
    if (alignment === 'center') {
        result = elDimensions.top + elDimensions.height / 2 - popoverDimensions.height / 2;
    }
    return result;
}
function horizontalPosition(elDimensions, popoverDimensions, alignment) {
    if (alignment === 'left') {
        return elDimensions.left - caretOffset;
    }
    if (alignment === 'right') {
        return elDimensions.left + elDimensions.width - popoverDimensions.width + caretOffset;
    }
    if (alignment === 'center') {
        return elDimensions.left + elDimensions.width / 2 - popoverDimensions.width / 2;
    }
}
/**
 * Position helper for the popover directive.
 *
 * @export
 * @class PositionHelper
 */
var position_PositionHelper = /** @class */ (function () {
    function PositionHelper() {
    }
    /**
     * Calculate vertical alignment position
     *
     * @static
     * @param {any} elDimensions
     * @param {any} popoverDimensions
     * @param {any} alignment
     * @returns {number}
     *
     * @memberOf PositionHelper
     */
    PositionHelper.calculateVerticalAlignment = function (elDimensions, popoverDimensions, alignment) {
        var result = verticalPosition(elDimensions, popoverDimensions, alignment);
        if (result + popoverDimensions.height > window.innerHeight) {
            result = window.innerHeight - popoverDimensions.height;
        }
        return result;
    };
    /**
     * Calculate vertical caret position
     *
     * @static
     * @param {any} elDimensions
     * @param {any} popoverDimensions
     * @param {any} caretDimensions
     * @param {any} alignment
     * @returns {number}
     *
     * @memberOf PositionHelper
     */
    PositionHelper.calculateVerticalCaret = function (elDimensions, popoverDimensions, caretDimensions, alignment) {
        var result;
        if (alignment === 'top') {
            result = elDimensions.height / 2 - caretDimensions.height / 2 + caretOffset;
        }
        if (alignment === 'bottom') {
            result = popoverDimensions.height - elDimensions.height / 2 - caretDimensions.height / 2 - caretOffset;
        }
        if (alignment === 'center') {
            result = popoverDimensions.height / 2 - caretDimensions.height / 2;
        }
        var popoverPosition = verticalPosition(elDimensions, popoverDimensions, alignment);
        if (popoverPosition + popoverDimensions.height > window.innerHeight) {
            result += (popoverPosition + popoverDimensions.height - window.innerHeight);
        }
        return result;
    };
    /**
     * Calculate horz alignment position
     *
     * @static
     * @param {any} elDimensions
     * @param {any} popoverDimensions
     * @param {any} alignment
     * @returns {number}
     *
     * @memberOf PositionHelper
     */
    PositionHelper.calculateHorizontalAlignment = function (elDimensions, popoverDimensions, alignment) {
        var result = horizontalPosition(elDimensions, popoverDimensions, alignment);
        if (result + popoverDimensions.width > window.innerWidth) {
            result = window.innerWidth - popoverDimensions.width;
        }
        return result;
    };
    /**
     * Calculate horz caret position
     *
     * @static
     * @param {any} elDimensions
     * @param {any} popoverDimensions
     * @param {any} caretDimensions
     * @param {any} alignment
     * @returns {number}
     *
     * @memberOf PositionHelper
     */
    PositionHelper.calculateHorizontalCaret = function (elDimensions, popoverDimensions, caretDimensions, alignment) {
        var result;
        if (alignment === 'left') {
            result = elDimensions.width / 2 - caretDimensions.width / 2 + caretOffset;
        }
        if (alignment === 'right') {
            result = popoverDimensions.width - elDimensions.width / 2 - caretDimensions.width / 2 - caretOffset;
        }
        if (alignment === 'center') {
            result = popoverDimensions.width / 2 - caretDimensions.width / 2;
        }
        var popoverPosition = horizontalPosition(elDimensions, popoverDimensions, alignment);
        if (popoverPosition + popoverDimensions.width > window.innerWidth) {
            result += (popoverPosition + popoverDimensions.width - window.innerWidth);
        }
        return result;
    };
    /**
     * Checks if the element's position should be flipped
     *
     * @static
     * @param {any} elDimensions
     * @param {any} popoverDimensions
     * @param {any} placement
     * @param {any} alignment
     * @param {any} spacing
     * @returns {boolean}
     *
     * @memberOf PositionHelper
     */
    PositionHelper.shouldFlip = function (elDimensions, popoverDimensions, placement, alignment, spacing) {
        var flip = false;
        if (placement === 'right') {
            var popoverPosition = horizontalPosition(elDimensions, popoverDimensions, alignment);
            if (popoverPosition + popoverDimensions.width + spacing > window.innerWidth) {
                flip = true;
            }
        }
        if (placement === 'left') {
            var popoverPosition = horizontalPosition(elDimensions, popoverDimensions, alignment);
            if (popoverPosition - spacing < 0) {
                flip = true;
            }
        }
        if (placement === 'top') {
            if (elDimensions.top - popoverDimensions.height - spacing < 0) {
                flip = true;
            }
        }
        if (placement === 'bottom') {
            var popoverPosition = verticalPosition(elDimensions, popoverDimensions, alignment);
            if (popoverPosition + popoverDimensions.height + spacing > window.innerHeight) {
                flip = true;
            }
        }
        return flip;
    };
    /**
     * Position caret
     *
     * @static
     * @param {any} placement
     * @param {any} elmDim
     * @param {any} hostDim
     * @param {any} caretDimensions
     * @param {any} alignment
     * @returns {*}
     *
     * @memberOf PositionHelper
     */
    PositionHelper.positionCaret = function (placement, elmDim, hostDim, caretDimensions, alignment) {
        var top = 0;
        var left = 0;
        if (placement === PlacementTypes.right) {
            left = -7;
            top = PositionHelper.calculateVerticalCaret(hostDim, elmDim, caretDimensions, alignment);
        }
        else if (placement === PlacementTypes.left) {
            left = elmDim.width;
            top = PositionHelper.calculateVerticalCaret(hostDim, elmDim, caretDimensions, alignment);
        }
        else if (placement === PlacementTypes.top) {
            top = elmDim.height;
            left = PositionHelper.calculateHorizontalCaret(hostDim, elmDim, caretDimensions, alignment);
        }
        else if (placement === PlacementTypes.bottom) {
            top = -7;
            left = PositionHelper.calculateHorizontalCaret(hostDim, elmDim, caretDimensions, alignment);
        }
        return { top: top, left: left };
    };
    /**
     * Position content
     *
     * @static
     * @param {any} placement
     * @param {any} elmDim
     * @param {any} hostDim
     * @param {any} spacing
     * @param {any} alignment
     * @returns {*}
     *
     * @memberOf PositionHelper
     */
    PositionHelper.positionContent = function (placement, elmDim, hostDim, spacing, alignment) {
        var top = 0;
        var left = 0;
        if (placement === PlacementTypes.right) {
            left = hostDim.left + hostDim.width + spacing;
            top = PositionHelper.calculateVerticalAlignment(hostDim, elmDim, alignment);
        }
        else if (placement === PlacementTypes.left) {
            left = hostDim.left - elmDim.width - spacing;
            top = PositionHelper.calculateVerticalAlignment(hostDim, elmDim, alignment);
        }
        else if (placement === PlacementTypes.top) {
            top = hostDim.top - elmDim.height - spacing;
            left = PositionHelper.calculateHorizontalAlignment(hostDim, elmDim, alignment);
        }
        else if (placement === PlacementTypes.bottom) {
            top = hostDim.top + hostDim.height + spacing;
            left = PositionHelper.calculateHorizontalAlignment(hostDim, elmDim, alignment);
        }
        return { top: top, left: left };
    };
    /**
     * Determine placement based on flip
     *
     * @static
     * @param {any} placement
     * @param {any} elmDim
     * @param {any} hostDim
     * @param {any} spacing
     * @param {any} alignment
     * @returns {*}
     *
     * @memberOf PositionHelper
     */
    PositionHelper.determinePlacement = function (placement, elmDim, hostDim, spacing, alignment) {
        var shouldFlip = PositionHelper.shouldFlip(hostDim, elmDim, placement, alignment, spacing);
        if (shouldFlip) {
            if (placement === PlacementTypes.right) {
                return PlacementTypes.left;
            }
            else if (placement === PlacementTypes.left) {
                return PlacementTypes.right;
            }
            else if (placement === PlacementTypes.top) {
                return PlacementTypes.bottom;
            }
            else if (placement === PlacementTypes.bottom) {
                return PlacementTypes.top;
            }
        }
        return placement;
    };
    return PositionHelper;
}());


// CONCATENATED MODULE: ./src/utils/position/index.ts



// CONCATENATED MODULE: ./src/utils/keys.ts
var KeyboardKeys;
(function (KeyboardKeys) {
    KeyboardKeys[KeyboardKeys["ENTER"] = 'Enter'] = "ENTER";
    KeyboardKeys[KeyboardKeys["ESCAPE"] = 'Escape'] = "ESCAPE";
    KeyboardKeys[KeyboardKeys["DELETE"] = 'Delete'] = "DELETE";
    KeyboardKeys[KeyboardKeys["BACKSPACE"] = 'Backspace'] = "BACKSPACE";
    KeyboardKeys[KeyboardKeys["ARROW_DOWN"] = 'ArrowDown'] = "ARROW_DOWN";
    KeyboardKeys[KeyboardKeys["ARROW_UP"] = 'ArrowUp'] = "ARROW_UP";
    KeyboardKeys[KeyboardKeys["ARROW_LEFT"] = 'ArrowLeft'] = "ARROW_LEFT";
    KeyboardKeys[KeyboardKeys["ARROW_RIGHT"] = 'ArrowRight'] = "ARROW_RIGHT";
})(KeyboardKeys || (KeyboardKeys = {}));

// CONCATENATED MODULE: ./src/utils/index.ts






// CONCATENATED MODULE: ./src/components/tooltip/style.type.ts
var StyleTypes;
(function (StyleTypes) {
    StyleTypes["popover"] = "popover";
    StyleTypes["tooltip"] = "tooltip";
})(StyleTypes || (StyleTypes = {}));

// CONCATENATED MODULE: ./src/components/tooltip/alignment.type.ts
var AlignmentTypes;
(function (AlignmentTypes) {
    AlignmentTypes["left"] = "left";
    AlignmentTypes["center"] = "center";
    AlignmentTypes["right"] = "right";
})(AlignmentTypes || (AlignmentTypes = {}));

// CONCATENATED MODULE: ./src/components/tooltip/show.type.ts
var ShowTypes;
(function (ShowTypes) {
    ShowTypes["all"] = "all";
    ShowTypes["focus"] = "focus";
    ShowTypes["mouseover"] = "mouseover";
})(ShowTypes || (ShowTypes = {}));

// CONCATENATED MODULE: ./src/components/tooltip/tooltip.service.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var tooltip_service___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tooltip_service___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var tooltip_service_TooltipService = /** @class */ (function (_super) {
    __extends(TooltipService, _super);
    function TooltipService(injectionService) {
        var _this = _super.call(this, injectionService) || this;
        _this.type = tooltip_component_TooltipContentComponent;
        return _this;
    }
    TooltipService = tooltip_service___decorate([
        Object(core_["Injectable"])(),
        tooltip_service___metadata("design:paramtypes", [injection_service_InjectionService])
    ], TooltipService);
    return TooltipService;
}(InjectionRegisteryService));


// CONCATENATED MODULE: ./src/components/tooltip/tooltip.directive.ts
var tooltip_directive___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tooltip_directive___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var tooltip_directive_TooltipDirective = /** @class */ (function () {
    function TooltipDirective(ngZone, tooltipService, viewContainerRef, renderer, element) {
        this.ngZone = ngZone;
        this.tooltipService = tooltipService;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.element = element;
        this.tooltipCssClass = '';
        this.tooltipTitle = '';
        this.tooltipAppendToBody = true;
        this.tooltipSpacing = 10;
        this.tooltipDisabled = false;
        this.tooltipShowCaret = true;
        this.tooltipPlacement = PlacementTypes.top;
        this.tooltipAlignment = AlignmentTypes.center;
        this.tooltipType = StyleTypes.popover;
        this.tooltipCloseOnClickOutside = true;
        this.tooltipCloseOnMouseLeave = true;
        this.tooltipHideTimeout = 300;
        this.tooltipShowTimeout = 100;
        this.tooltipShowEvent = ShowTypes.all;
        this.show = new core_["EventEmitter"]();
        this.hide = new core_["EventEmitter"]();
    }
    Object.defineProperty(TooltipDirective.prototype, "listensForFocus", {
        get: function () {
            return this.tooltipShowEvent === ShowTypes.all ||
                this.tooltipShowEvent === ShowTypes.focus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "listensForHover", {
        get: function () {
            return this.tooltipShowEvent === ShowTypes.all ||
                this.tooltipShowEvent === ShowTypes.mouseover;
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.ngOnDestroy = function () {
        this.hideTooltip(true);
    };
    TooltipDirective.prototype.onFocus = function () {
        if (this.listensForFocus) {
            this.showTooltip();
        }
    };
    TooltipDirective.prototype.onBlur = function () {
        if (this.listensForFocus) {
            this.hideTooltip(true);
        }
    };
    TooltipDirective.prototype.onMouseEnter = function () {
        if (this.listensForHover) {
            this.showTooltip();
        }
    };
    TooltipDirective.prototype.onMouseLeave = function (target) {
        if (this.listensForHover && this.tooltipCloseOnMouseLeave) {
            clearTimeout(this.timeout);
            if (this.component) {
                var contentDom = this.component.instance.element.nativeElement;
                var contains = contentDom.contains(target);
                if (contains)
                    return;
            }
            this.hideTooltip();
        }
    };
    TooltipDirective.prototype.onMouseClick = function () {
        if (this.tooltipShowEvent === ShowTypes.mouseover) {
            this.hideTooltip(true);
        }
    };
    TooltipDirective.prototype.showTooltip = function (immediate) {
        var _this = this;
        if (this.component || this.tooltipDisabled)
            return;
        var time = immediate ? 0 : this.tooltipShowTimeout;
        // ngUpgrade bug
        // https://github.com/angular/angular/issues/12318
        this.ngZone.run(function () {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
                _this.tooltipService.destroyAll();
                var options = _this.createBoundOptions();
                _this.component = _this.tooltipService.create(options);
                // add a tiny timeout to avoid event re-triggers
                setTimeout(function () {
                    _this.addHideListeners(_this.component.instance.element.nativeElement);
                }, 10);
                _this.show.emit(true);
            }, time);
        });
    };
    TooltipDirective.prototype.addHideListeners = function (tooltip) {
        var _this = this;
        // on mouse enter, cancel the hide triggered by the leave
        this.mouseEnterContentEvent = this.renderer.listen(tooltip, 'mouseenter', function () {
            clearTimeout(_this.timeout);
        });
        // content mouse leave listener
        if (this.tooltipCloseOnMouseLeave) {
            this.mouseLeaveContentEvent = this.renderer.listen(tooltip, 'mouseleave', function () {
                _this.hideTooltip();
            });
        }
        // content close on click outside
        if (this.tooltipCloseOnClickOutside) {
            this.documentClickEvent = this.renderer.listen(document, 'click', function (event) {
                var tooltipContains = tooltip.contains(event.target);
                var parentContains = _this.element.nativeElement.contains(event.target);
                if (!tooltipContains && !parentContains) {
                    _this.hideTooltip();
                }
            });
        }
    };
    TooltipDirective.prototype.hideTooltip = function (immediate) {
        var _this = this;
        if (!this.component)
            return;
        var destroyFn = function () {
            // remove events
            if (_this.mouseLeaveContentEvent)
                _this.mouseLeaveContentEvent();
            if (_this.mouseEnterContentEvent)
                _this.mouseEnterContentEvent();
            if (_this.documentClickEvent)
                _this.documentClickEvent();
            // emit events
            _this.hide.emit(true);
            // destroy component
            _this.tooltipService.destroy(_this.component);
            _this.component = undefined;
        };
        clearTimeout(this.timeout);
        if (!immediate) {
            this.timeout = setTimeout(destroyFn, this.tooltipHideTimeout);
        }
        else {
            destroyFn();
        }
    };
    TooltipDirective.prototype.createBoundOptions = function () {
        return {
            title: this.tooltipTitle,
            template: this.tooltipTemplate,
            host: this.viewContainerRef.element,
            placement: this.tooltipPlacement,
            alignment: this.tooltipAlignment,
            type: this.tooltipType,
            showCaret: this.tooltipShowCaret,
            cssClass: this.tooltipCssClass,
            spacing: this.tooltipSpacing,
            context: this.tooltipContext
        };
    };
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipCssClass", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipTitle", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", Boolean)
    ], TooltipDirective.prototype, "tooltipAppendToBody", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", Number)
    ], TooltipDirective.prototype, "tooltipSpacing", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", Boolean)
    ], TooltipDirective.prototype, "tooltipDisabled", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", Boolean)
    ], TooltipDirective.prototype, "tooltipShowCaret", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", Number)
    ], TooltipDirective.prototype, "tooltipPlacement", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipAlignment", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipType", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", Boolean)
    ], TooltipDirective.prototype, "tooltipCloseOnClickOutside", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", Boolean)
    ], TooltipDirective.prototype, "tooltipCloseOnMouseLeave", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", Number)
    ], TooltipDirective.prototype, "tooltipHideTimeout", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", Number)
    ], TooltipDirective.prototype, "tooltipShowTimeout", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltipTemplate", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipShowEvent", void 0);
    tooltip_directive___decorate([
        Object(core_["Input"])(),
        tooltip_directive___metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltipContext", void 0);
    tooltip_directive___decorate([
        Object(core_["Output"])(),
        tooltip_directive___metadata("design:type", Object)
    ], TooltipDirective.prototype, "show", void 0);
    tooltip_directive___decorate([
        Object(core_["Output"])(),
        tooltip_directive___metadata("design:type", Object)
    ], TooltipDirective.prototype, "hide", void 0);
    tooltip_directive___decorate([
        Object(core_["HostListener"])('focusin'),
        tooltip_directive___metadata("design:type", Function),
        tooltip_directive___metadata("design:paramtypes", []),
        tooltip_directive___metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onFocus", null);
    tooltip_directive___decorate([
        Object(core_["HostListener"])('blur'),
        tooltip_directive___metadata("design:type", Function),
        tooltip_directive___metadata("design:paramtypes", []),
        tooltip_directive___metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onBlur", null);
    tooltip_directive___decorate([
        Object(core_["HostListener"])('mouseenter'),
        tooltip_directive___metadata("design:type", Function),
        tooltip_directive___metadata("design:paramtypes", []),
        tooltip_directive___metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseEnter", null);
    tooltip_directive___decorate([
        Object(core_["HostListener"])('mouseleave', ['$event.target']),
        tooltip_directive___metadata("design:type", Function),
        tooltip_directive___metadata("design:paramtypes", [Object]),
        tooltip_directive___metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseLeave", null);
    tooltip_directive___decorate([
        Object(core_["HostListener"])('click'),
        tooltip_directive___metadata("design:type", Function),
        tooltip_directive___metadata("design:paramtypes", []),
        tooltip_directive___metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseClick", null);
    TooltipDirective = tooltip_directive___decorate([
        Object(core_["Directive"])({ selector: '[ngx-tooltip]' }),
        tooltip_directive___metadata("design:paramtypes", [core_["NgZone"],
            tooltip_service_TooltipService,
            core_["ViewContainerRef"],
            core_["Renderer"],
            core_["ElementRef"]])
    ], TooltipDirective);
    return TooltipDirective;
}());


// CONCATENATED MODULE: ./src/components/tooltip/tooltip.component.ts
var tooltip_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tooltip_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var tooltip_component_TooltipContentComponent = /** @class */ (function () {
    function TooltipContentComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(TooltipContentComponent.prototype, "cssClasses", {
        get: function () {
            var clz = 'ngx-tooltip-content';
            clz += " position-" + this.placement;
            clz += " type-" + this.type;
            clz += " " + this.cssClass;
            return clz;
        },
        enumerable: true,
        configurable: true
    });
    TooltipContentComponent.prototype.ngAfterViewInit = function () {
        setTimeout(this.position.bind(this));
    };
    TooltipContentComponent.prototype.position = function () {
        var _this = this;
        var nativeElm = this.element.nativeElement;
        var hostDim = this.host.nativeElement.getBoundingClientRect();
        // if no dims were found, never show
        if (!hostDim.height && !hostDim.width)
            return;
        var elmDim = nativeElm.getBoundingClientRect();
        this.checkFlip(hostDim, elmDim);
        this.positionContent(nativeElm, hostDim, elmDim);
        if (this.showCaret) {
            this.positionCaret(hostDim, elmDim);
        }
        // animate its entry
        setTimeout(function () { return _this.renderer.setElementClass(nativeElm, 'animate', true); }, 1);
    };
    TooltipContentComponent.prototype.positionContent = function (nativeElm, hostDim, elmDim) {
        var _a = position_PositionHelper.positionContent(this.placement, elmDim, hostDim, this.spacing, this.alignment), top = _a.top, left = _a.left;
        this.renderer.setElementStyle(nativeElm, 'top', top + "px");
        this.renderer.setElementStyle(nativeElm, 'left', left + "px");
    };
    TooltipContentComponent.prototype.positionCaret = function (hostDim, elmDim) {
        var caretElm = this.caretElm.nativeElement;
        var caretDimensions = caretElm.getBoundingClientRect();
        var _a = position_PositionHelper.positionCaret(this.placement, elmDim, hostDim, caretDimensions, this.alignment), top = _a.top, left = _a.left;
        this.renderer.setElementStyle(caretElm, 'top', top + "px");
        this.renderer.setElementStyle(caretElm, 'left', left + "px");
    };
    TooltipContentComponent.prototype.checkFlip = function (hostDim, elmDim) {
        this.placement = position_PositionHelper.determinePlacement(this.placement, elmDim, hostDim, this.spacing, this.alignment);
    };
    TooltipContentComponent.prototype.onWindowResize = function () {
        this.position();
    };
    tooltip_component___decorate([
        Object(core_["Input"])(),
        tooltip_component___metadata("design:type", Object)
    ], TooltipContentComponent.prototype, "host", void 0);
    tooltip_component___decorate([
        Object(core_["Input"])(),
        tooltip_component___metadata("design:type", Boolean)
    ], TooltipContentComponent.prototype, "showCaret", void 0);
    tooltip_component___decorate([
        Object(core_["Input"])(),
        tooltip_component___metadata("design:type", String)
    ], TooltipContentComponent.prototype, "type", void 0);
    tooltip_component___decorate([
        Object(core_["Input"])(),
        tooltip_component___metadata("design:type", Number)
    ], TooltipContentComponent.prototype, "placement", void 0);
    tooltip_component___decorate([
        Object(core_["Input"])(),
        tooltip_component___metadata("design:type", String)
    ], TooltipContentComponent.prototype, "alignment", void 0);
    tooltip_component___decorate([
        Object(core_["Input"])(),
        tooltip_component___metadata("design:type", Number)
    ], TooltipContentComponent.prototype, "spacing", void 0);
    tooltip_component___decorate([
        Object(core_["Input"])(),
        tooltip_component___metadata("design:type", String)
    ], TooltipContentComponent.prototype, "cssClass", void 0);
    tooltip_component___decorate([
        Object(core_["Input"])(),
        tooltip_component___metadata("design:type", String)
    ], TooltipContentComponent.prototype, "title", void 0);
    tooltip_component___decorate([
        Object(core_["ViewChild"])('caretElm'),
        tooltip_component___metadata("design:type", Object)
    ], TooltipContentComponent.prototype, "caretElm", void 0);
    tooltip_component___decorate([
        Object(core_["HostBinding"])('class'),
        tooltip_component___metadata("design:type", String),
        tooltip_component___metadata("design:paramtypes", [])
    ], TooltipContentComponent.prototype, "cssClasses", null);
    tooltip_component___decorate([
        Object(core_["HostListener"])('window:resize'),
        throttleable(100),
        tooltip_component___metadata("design:type", Function),
        tooltip_component___metadata("design:paramtypes", []),
        tooltip_component___metadata("design:returntype", void 0)
    ], TooltipContentComponent.prototype, "onWindowResize", null);
    TooltipContentComponent = tooltip_component___decorate([
        Object(core_["Component"])({
            selector: 'ngx-tooltip-content',
            template: "\n    <div>\n      <span\n        #caretElm\n        [hidden]=\"!showCaret\"\n        class=\"tooltip-caret position-{{this.placement}}\">\n      </span>\n      <div class=\"tooltip-content\">\n        <span *ngIf=\"!title\">\n          <ng-template\n            [ngTemplateOutlet]=\"template\"\n            [ngTemplateOutletContext]=\"{ model: context }\">\n          </ng-template>\n        </span>\n        <span\n          *ngIf=\"title\"\n          [innerHTML]=\"title\">\n        </span>\n      </div>\n    </div>\n  ",
            encapsulation: core_["ViewEncapsulation"].None,
            styles: [__webpack_require__("./src/components/tooltip/tooltip.component.scss")]
        }),
        tooltip_component___metadata("design:paramtypes", [core_["ElementRef"],
            core_["Renderer"]])
    ], TooltipContentComponent);
    return TooltipContentComponent;
}());


// CONCATENATED MODULE: ./src/components/tooltip/tooltip.module.ts
var tooltip_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var tooltip_module_TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = tooltip_module___decorate([
        Object(core_["NgModule"])({
            declarations: [tooltip_component_TooltipContentComponent, tooltip_directive_TooltipDirective],
            providers: [injection_service_InjectionService, tooltip_service_TooltipService],
            exports: [tooltip_component_TooltipContentComponent, tooltip_directive_TooltipDirective],
            imports: [common_["CommonModule"]],
            entryComponents: [tooltip_component_TooltipContentComponent]
        })
    ], TooltipModule);
    return TooltipModule;
}());


// CONCATENATED MODULE: ./src/components/tooltip/index.ts








// CONCATENATED MODULE: ./src/components/index.ts


// CONCATENATED MODULE: ./src/ngx-ui.module.ts
var ngx_ui_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * Exported Modules
 * @type {Array}
 */
var modules = [
    tooltip_module_TooltipModule
];
var ngx_ui_module_NgxUIToltipsModule = /** @class */ (function () {
    function NgxUIToltipsModule() {
    }
    NgxUIToltipsModule = ngx_ui_module___decorate([
        Object(core_["NgModule"])({
            providers: [
                injection_service_InjectionService,
                tooltip_service_TooltipService
            ],
            exports: modules.slice(),
            imports: modules.slice()
        })
    ], NgxUIToltipsModule);
    return NgxUIToltipsModule;
}());


// CONCATENATED MODULE: ./src/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NgxUIToltipsModule", function() { return ngx_ui_module_NgxUIToltipsModule; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return tooltip_module_TooltipModule; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TooltipService", function() { return tooltip_service_TooltipService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TooltipContentComponent", function() { return tooltip_component_TooltipContentComponent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return tooltip_directive_TooltipDirective; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "StyleTypes", function() { return StyleTypes; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AlignmentTypes", function() { return AlignmentTypes; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ShowTypes", function() { return ShowTypes; });




/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map