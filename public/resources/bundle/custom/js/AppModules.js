/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resource/js/AppModules.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resource/js/AppModules.js":
/*!***********************************!*\
  !*** ./resource/js/AppModules.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _this = this;\n\nvar AppModule = function AppModule(page, options) {\n  /**\n   * グローバルモジュールを追加する\n   */\n  _this.modules = {\n    dialogs: __webpack_require__(/*! ./Component/dialogs */ \"./resource/js/Component/dialogs.js\")\n  };\n  _this.block_modules = {};\n\n  if (page === 'input') {\n    /**\n     * ブロックモジュールを追加する\n     */\n    _this.load_block_modules();\n  }\n\n  _this.options = options;\n};\n\nAppModule.prototype.load_block_module = function () {\n  _this.block_modules = {\n    input: __webpack_require__(/*! ./Component/blocks/input */ \"./resource/js/Component/blocks/input.js\"),\n    select: __webpack_require__(/*! ./Component/blocks/select */ \"./resource/js/Component/blocks/select.js\")\n  };\n};\n\nAppModule.prototype.get_app = function () {\n  return _this.modules;\n};\n\nAppModule.prototype.get_block = function () {\n  return _this.block_modules;\n};\n\nAppModule.prototype.load = function () {\n  //window._services = {};\n  for (var k in _this.modules) {\n    window._services[k] = new _this.modules[k][\"default\"]();\n  }\n};\n\nwindow._services = {};\nwindow._services.app = AppModule;\n\n//# sourceURL=webpack:///./resource/js/AppModules.js?");

/***/ }),

/***/ "./resource/js/Component/blocks/checkbox.js":
/*!**************************************************!*\
  !*** ./resource/js/Component/blocks/checkbox.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return blockCheckbox; });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar blockCheckbox = /*#__PURE__*/_createClass(function blockCheckbox() {\n  _classCallCheck(this, blockCheckbox);\n});\n\n\n\n//# sourceURL=webpack:///./resource/js/Component/blocks/checkbox.js?");

/***/ }),

/***/ "./resource/js/Component/blocks/input.js":
/*!***********************************************!*\
  !*** ./resource/js/Component/blocks/input.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return blockInput; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar blockInput = /*#__PURE__*/function () {\n  function blockInput() {\n    _classCallCheck(this, blockInput);\n  }\n\n  _createClass(blockInput, [{\n    key: \"create\",\n    value: function create(blocks) {\n      var fields = document.createElement('fieldset');\n      var input = document.createElement('input');\n      input.type = blocks.options.type;\n      input.name = blocks.options.name;\n      input.id = blocks.options.name;\n      input.placeholder = blocks.options.placeholder;\n\n      if (blocks.options[\"class\"].length) {\n        for (var k in blocks.options[\"class\"]) {\n          input.classList.add(blocks.options[\"class\"][k]);\n        }\n      }\n\n      fields.appendChild(input);\n      return fields;\n    }\n  }]);\n\n  return blockInput;\n}();\n\n\n\n//# sourceURL=webpack:///./resource/js/Component/blocks/input.js?");

/***/ }),

/***/ "./resource/js/Component/blocks/media.js":
/*!***********************************************!*\
  !*** ./resource/js/Component/blocks/media.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return blockMedia; });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar blockMedia = /*#__PURE__*/_createClass(function blockMedia() {\n  _classCallCheck(this, blockMedia);\n});\n\n\n\n//# sourceURL=webpack:///./resource/js/Component/blocks/media.js?");

/***/ }),

/***/ "./resource/js/Component/blocks/radio.js":
/*!***********************************************!*\
  !*** ./resource/js/Component/blocks/radio.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return blockRadio; });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar blockRadio = /*#__PURE__*/_createClass(function blockRadio() {\n  _classCallCheck(this, blockRadio);\n});\n\n\n\n//# sourceURL=webpack:///./resource/js/Component/blocks/radio.js?");

/***/ }),

/***/ "./resource/js/Component/blocks/select.js":
/*!************************************************!*\
  !*** ./resource/js/Component/blocks/select.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return blockSelect; });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar blockSelect = /*#__PURE__*/_createClass(function blockSelect() {\n  _classCallCheck(this, blockSelect);\n});\n\n\n\n//# sourceURL=webpack:///./resource/js/Component/blocks/select.js?");

/***/ }),

/***/ "./resource/js/Component/dialogs.js":
/*!******************************************!*\
  !*** ./resource/js/Component/dialogs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dialogs; });\n/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs */ \"./resource/js/Component/inputs.js\");\n/* harmony import */ var _helper_dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper/dispatcher */ \"./resource/js/Component/helper/dispatcher.js\");\n/* harmony import */ var _helper_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/storage */ \"./resource/js/Component/helper/storage.js\");\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\nvar Dialogs = /*#__PURE__*/function () {\n  function Dialogs(options) {\n    _classCallCheck(this, Dialogs);\n\n    this.inputs = new _inputs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.field = document.getElementById('dialogs-field');\n    this.overlay = document.getElementById('dialogs-overlay');\n    this.options = options;\n    this.load();\n  }\n\n  _createClass(Dialogs, [{\n    key: \"load\",\n    value: function load() {\n      var _self = this;\n\n      var puts = document.getElementsByClassName('app-dialogs-puts');\n\n      if (puts.length) {\n        var _loop = function _loop(i) {\n          var type = puts[i].getAttribute('data-dialogs-type');\n          var endpoint = puts[i].getAttribute('data-dialogs-endpoint');\n          var event = puts[i].getAttribute('data-dialogs-event');\n          puts[i].addEventListener(event, function (e) {\n            _self.puts(type, endpoint);\n          });\n        };\n\n        for (var i = 0; i < puts.length; i++) {\n          _loop(i);\n        }\n      }\n    }\n    /**\n     * \n     * @param {string} type \n     * @param {string} title \n     * @param {array} fields \n     * @returns \n     */\n\n  }, {\n    key: \"puts\",\n    value: function puts(type, endpoint) {\n      if (!this.field) return false;\n\n      switch (type) {\n        case 'inputs':\n          this.get_inputs(endpoint);\n          break;\n\n        default:\n          break;\n      }\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this.showOveraly();\n      this.field.style.display = 'block';\n      this.field.style.position = 'absolute';\n      this.field.style.top = '10%';\n      this.field.style.width = '50%';\n      this.field.style.background = '#FFF';\n      this.field.style.padding = '20px 10px';\n      this.field.style.left = '25%';\n      this.field.style.right = '25%';\n      this.field.style.zIndex = 100;\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      if (this.field.style.display === 'block') {\n        this.field.style.display = 'none';\n        this.field.innerHTML = '';\n        this.hideOverlay();\n      }\n    }\n    /**\n     * \n     * @param {string} endpoint \n     */\n\n  }, {\n    key: \"get_inputs\",\n    value: function get_inputs(endpoint) {\n      var _self = this;\n\n      var options = {\n        url: endpoint,\n        type: 'GET',\n        dataType: 'json',\n        processData: false,\n        contentType: false,\n        timeout: 60000\n      };\n      var storage = new _helper_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n      var dispatcher = new _helper_dispatcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"](options);\n      dispatcher.flush(storage, function (data) {\n        if (data.html) {\n          _self.add(data.html);\n\n          _self.buttons();\n\n          _self.open();\n        }\n      }, dispatcher.fail);\n    }\n    /**\n     * \n     * @param {*} dom \n     */\n\n  }, {\n    key: \"add\",\n    value: function add(dom) {\n      switch (_typeof(dom)) {\n        case 'object':\n          this.field.appendChild(dom);\n          break;\n\n        case 'string':\n          this.field.insertAdjacentHTML('beforeend', dom);\n          break;\n      }\n    }\n  }, {\n    key: \"buttons\",\n    value: function buttons() {\n      var _self = this; // button wrapper\n\n\n      var buttons = document.createElement('div');\n      buttons.classList.add('sa-button-container');\n      buttons.style.marginTop = '20px'; // cancel\n\n      var cancel = document.createElement('button');\n      cancel.classList.add('cancel');\n      cancel.style.display = 'inline-block';\n      cancel.style.boxShadow = 'none';\n      cancel.style.marginRight = '20px';\n      cancel.innerText = 'Cancel';\n      cancel.addEventListener('click', function (e) {\n        _self.close();\n      });\n      buttons.appendChild(cancel); // ok\n\n      var ok_container = document.createElement('div');\n      ok_container.classList.add('sa-confirm-button-container');\n      var ok = document.createElement('button');\n      ok.classList.add('confirm');\n      ok.innerText = 'OK';\n      ok.style.display = 'inline-block';\n      ok.style.backgroundColor = 'rgb(140, 212, 245)';\n      ok.style.boxShadow = 'rgb(140 212 245 / 80%) 0px 0px 2px, rgb(0 0 0 / 5%) 0px 0px 0px 1px inset';\n      ok.addEventListener('click', function (e) {//\n      });\n      ok_container.appendChild(ok);\n      buttons.appendChild(ok);\n      this.field.appendChild(buttons);\n    }\n  }, {\n    key: \"showOveraly\",\n    value: function showOveraly() {\n      this.overlay.style.display = 'block';\n      this.overlay.style.opacity = '0.4';\n      this.overlay.style.position = 'fixed';\n      this.overlay.style.width = '100%';\n      this.overlay.style.height = '100%';\n      this.overlay.style.top = 0;\n      this.overlay.style.bottom = 0;\n      this.overlay.style.background = '#000';\n      this.overlay.style.zIndex = 50;\n    }\n  }, {\n    key: \"hideOverlay\",\n    value: function hideOverlay() {\n      this.overlay.style.display = 'none';\n    }\n  }]);\n\n  return Dialogs;\n}();\n\n\n\n//# sourceURL=webpack:///./resource/js/Component/dialogs.js?");

/***/ }),

/***/ "./resource/js/Component/helper/dispatcher.js":
/*!****************************************************!*\
  !*** ./resource/js/Component/helper/dispatcher.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dispatcher; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/**\n * HelperのStorageと一緒に利用\n */\nvar Dispatcher = /*#__PURE__*/function () {\n  function Dispatcher(options) {\n    _classCallCheck(this, Dispatcher);\n\n    this.options = options;\n    this.jqxhr = null;\n  }\n\n  _createClass(Dispatcher, [{\n    key: \"add\",\n    value: function add(key, value) {\n      if (this.options[key]) {\n        this.remove(key);\n      }\n\n      this.options[key] = value;\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(key) {\n      this.options[key] = null;\n    }\n    /**\n     * [flush description]\n     * @param  {[class]} storage [Storage Class]\n     * @return {[type]}         [description]\n     */\n\n  }, {\n    key: \"flush\",\n    value: function flush(storage, callable, faild) {\n      if (this.jqxhr) this.jqxhr.abort();\n      var storages = storage.get();\n      var fd;\n\n      if (this.options.type === 'post' || this.options.type === 'POST') {\n        var _fd = new FormData();\n\n        for (var k in storages) {\n          _fd.append(k, storages[k]);\n        }\n      } else {\n        fd = {};\n\n        for (var _k in storages) {\n          fd[_k] = storages[_k];\n        }\n\n        fd = encodeURI(fd);\n      }\n\n      this.options.data = fd;\n      this.jqxhr = $.ajax(this.options).done(function (data) {\n        callable(data);\n      }).fail(function (xhr, textStatus, errorThrow) {\n        faild(xhr, textStatus, errorThrow);\n      });\n    }\n    /**\n     * デフォルトfaild\n     * @param {*} xhr \n     * @param {*} textStatus \n     * @param {*} errorThrow \n     */\n\n  }, {\n    key: \"fail\",\n    value: function fail(xhr, textStatus, errorThrow) {\n      console.log(textStatus);\n      console.log(errorThrow);\n    }\n  }]);\n\n  return Dispatcher;\n}();\n\n\n\n//# sourceURL=webpack:///./resource/js/Component/helper/dispatcher.js?");

/***/ }),

/***/ "./resource/js/Component/helper/storage.js":
/*!*************************************************!*\
  !*** ./resource/js/Component/helper/storage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Storage; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Storage = /*#__PURE__*/function () {\n  function Storage() {\n    _classCallCheck(this, Storage);\n\n    this.storage = {};\n    this.storage.page = 1;\n  }\n  /**\n   * \n   * @param {*} key \n   * @returns \n   */\n\n\n  _createClass(Storage, [{\n    key: \"get\",\n    value: function get(key) {\n      if (!key) {\n        return this.storage;\n      } else {\n        return this.storage[key];\n      }\n    }\n    /**\n     * \n     * @param {*} key \n     * @param {*} value \n     */\n\n  }, {\n    key: \"add\",\n    value: function add(key, value) {\n      if (this.storage[key]) {\n        this.remove(key);\n      }\n\n      this.storage[key] = value;\n    }\n    /**\n     * \n     * @param {*} key \n     */\n\n  }, {\n    key: \"remove\",\n    value: function remove(key) {\n      this.storage[key] = null;\n    }\n  }]);\n\n  return Storage;\n}();\n\n\n\n//# sourceURL=webpack:///./resource/js/Component/helper/storage.js?");

/***/ }),

/***/ "./resource/js/Component/inputs.js":
/*!*****************************************!*\
  !*** ./resource/js/Component/inputs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Inputs; });\n/* harmony import */ var _blocks_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/input */ \"./resource/js/Component/blocks/input.js\");\n/* harmony import */ var _blocks_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/select */ \"./resource/js/Component/blocks/select.js\");\n/* harmony import */ var _blocks_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/radio */ \"./resource/js/Component/blocks/radio.js\");\n/* harmony import */ var _blocks_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/checkbox */ \"./resource/js/Component/blocks/checkbox.js\");\n/* harmony import */ var _blocks_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/media */ \"./resource/js/Component/blocks/media.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n\n\nvar Inputs = /*#__PURE__*/function () {\n  /**\n   * @param {array} params \n   */\n  function Inputs(params) {\n    _classCallCheck(this, Inputs);\n\n    this.blocks = {\n      input: new _blocks_input__WEBPACK_IMPORTED_MODULE_0__[\"default\"](params),\n      select: new _blocks_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"](params),\n      radio: new _blocks_radio__WEBPACK_IMPORTED_MODULE_2__[\"default\"](params),\n      checkbox: new _blocks_checkbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"](params),\n      media: new _blocks_media__WEBPACK_IMPORTED_MODULE_4__[\"default\"](params)\n    };\n  }\n  /**\n   * \n   * @param {array} blocks \n   * @returns \n   */\n\n\n  _createClass(Inputs, [{\n    key: \"input\",\n    value: function input(blocks) {\n      return this.blocks.input.create(blocks);\n    }\n    /**\n     * \n     * @param {array} blocks \n     * @returns \n     */\n\n  }, {\n    key: \"select\",\n    value: function select(blocks) {\n      return this.blocks.select.create(blocks);\n    }\n    /**\n     * \n     * @param {array} blocks \n     * @returns \n     */\n\n  }, {\n    key: \"radio\",\n    value: function radio(blocks) {\n      return this.blocks.radio.create(blocks);\n    }\n    /**\n     * \n     * @param {array} blocks \n     * @returns \n     */\n\n  }, {\n    key: \"checkbox\",\n    value: function checkbox(blocks) {\n      return this.blocks.checkbox.create(blocks);\n    }\n    /**\n     * \n     * @param {array} blocks \n     * @returns \n     */\n\n  }, {\n    key: \"media\",\n    value: function media(blocks) {\n      return this.blocks.media.create(blocks);\n    }\n  }]);\n\n  return Inputs;\n}();\n\n\n\n//# sourceURL=webpack:///./resource/js/Component/inputs.js?");

/***/ })

/******/ });