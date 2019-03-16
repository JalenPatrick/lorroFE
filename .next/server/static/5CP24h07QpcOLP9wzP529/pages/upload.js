module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(19);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(7);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(4);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(9);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__(10);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(5);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// CONCATENATED MODULE: ./components/Header.js








var styles = {
  marginLeft: 10
};

var Header_Header = function Header() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(AppBar_default.a, {
    position: "static",
    color: "primary"
  }, external_react_default.a.createElement(Toolbar_default.a, null, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement(Typography_default.a, {
    variant: "h5",
    color: "inherit",
    gutterBottom: true
  }, "Lorro")))));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__(11);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Layout.js








var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout_Layout = function Layout(props) {
  return external_react_default.a.createElement(CssBaseline_default.a, null, external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement("div", null, props.children));
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42);
/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_KeyboardVoice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(43);
/* harmony import */ var _material_ui_icons_KeyboardVoice__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardVoice__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(20);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(13);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(15);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(46);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(22);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_22__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























var styles = {
  textAlign: "center"
};
var styles2 = {
  textAlign: "center",
  marginTop: '200'
};
var pageStyles = {
  textAlign: "center",
  marginTop: '-10',
  backgroundColor: "#e0e0e0"
};
var buttonStyle = {
  width: "0.1px",
  height: "0.1px",
  opacity: 0,
  overflow: "hidden",
  position: "absolute",
  zIndex: -1
};
var labelStyle = {
  fontSize: "1.25em",
  fontWeight: 700,
  color: "white",
  backgroundColor: "black",
  display: "inline-block",
  padding: '15px',
  marginTop: '10px',
  borderRadius: '10px',
  border: '1px solid white'
};

var upload =
/*#__PURE__*/
function (_Component) {
  _inherits(upload, _Component);

  function upload() {
    var _this;

    _classCallCheck(this, upload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(upload).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeTarget", function (selected) {
      _this.setState({
        selectedTarget: selected
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createCORSRequest", function (method, url) {
      console.log('here');
      var xhr = new XMLHttpRequest();

      if ('withCredentials' in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
        xhr.responseType = 'text';
      } else if (typeof XDomainRequest != 'undefined') {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
        xhr.responseType = 'text';
      } else {
        // CORS not supported.
        xhr = null;
      }

      console.log('KMS', xhr); // var result = JSON.parse(xhr.responseText);
      // debugger

      console.log('test');
      return xhr;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "makeCorsRequest",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var upload_url, xhr;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // This is a sample server that supports CORS.
              upload_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/upload";
              xhr = _this.createCORSRequest('GET', upload_url);

              if (xhr) {
                _context.next = 5;
                break;
              }

              console.log('Error: unable to make CORS request.');
              return _context.abrupt("return");

            case 5:
              // Response handlers.
              xhr.onload = function () {
                var result = JSON.parse(xhr.responseText);
                debugger;
                console.log(result);
              };

              xhr.onerror = function () {
                console.log('Error: there was an error making the request.');
              };

              xhr.send();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getUrl",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var data, res, upload_url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = _this.state.selectedFile; //        data.append('sample', this.state.selectedFile)

              upload_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/upload";
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get(upload_url, {
                headers: {
                  "Access-Control-Allow-Headers": "*"
                }
              }).then(function (response) {
                console.log(response);
                res = response.data;
              });

            case 4:
              console.log('res', res);
              _context2.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_15___default.a.put(res, data).then(function (response) {
                console.log(response);
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUpload",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var data, res, upload_url, process_url, file_name;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              data = _this.state.selectedFile; //data.append('sample', this.state.selectedFile)

              console.log(data);
              upload_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/upload";
              process_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/process";
              _context3.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get(upload_url, {
                headers: {
                  "Access-Control-Allow-Headers": "*"
                }
              }).then(function (response) {
                console.log(response);
                res = response.data;
              });

            case 6:
              console.log('res', res);
              file_name = res.split('/')[3].split('?')[0];
              console.log(file_name);
              _context3.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_15___default.a.put(res, data).then(function (response) {
                console.log(response);
              });

            case 11:
              _context3.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(process_url, file_name).then(function (response) {
                console.log(response);
              });

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleselectedFile", function (event) {
      _this.setState({
        selectedFile: event.target.files[0],
        loaded: 0
      });
    });

    _this.state = {
      selectedFile: null,
      selectedTarget: null,
      loaded: 0,
      loading: false
    };
    return _this;
  }

  _createClass(upload, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var fileUploaded = this.state.selectedFile;
      var isLoading = this.state.loading;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
        elevation: "1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        spacing: 24,
        style: pageStyles,
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        justify: "center"
      }, isLoading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        md: 6
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          height: "100vh",
          paddingTop: '35vh'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        variant: "h4",
        style: styles2,
        gutterBottom: true
      }, " Analyzing Speech Sample... "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_22___default.a, {
        style: {
          flexGrow: 1
        }
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        container: true,
        justifyContent: "center",
        alignItems: "center",
        justify: "center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        md: 6
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        variant: "h4",
        style: styles,
        gutterBottom: true
      }, "Step 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        variant: "h5",
        style: styles,
        gutterBottom: true
      }, "Select a speech style to match"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        md: 6
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        variant: "h4",
        style: styles,
        gutterBottom: true
      }, "Step 2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        variant: "h5",
        style: styles,
        gutterBottom: true
      }, "Upload your audio sample"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 6,
        container: true,
        justifyContent: "center",
        alignItems: "center",
        justify: "center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        md: 6,
        className: "test"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_16___default.a, {
        className: "record-card",
        style: {
          margin: 10
        },
        onClick: function onClick() {
          return _this2.changeTarget("british-english");
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_17___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20___default.a, {
        style: {
          height: 0,
          paddingTop: '50%'
        },
        image: "/static/images/card-icons/london.jpg",
        title: "Record an Audio Sample"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        gutterBottom: true,
        variant: "h5",
        component: "h2"
      }, " British English "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        component: "p"
      }, "Record a brand new audio sample attempting to match a target speech sample."))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        md: 6
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_16___default.a, {
        className: "record-card",
        style: {
          margin: 10
        },
        onClick: function onClick() {
          return _this2.changeTarget("canadian-english");
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_17___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20___default.a, {
        style: {
          height: 0,
          paddingTop: '50%'
        },
        image: "/static/images/card-icons/canada.jpg",
        title: "Record an Audio Sample"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        gutterBottom: true,
        variant: "h5",
        component: "h2"
      }, " Canadian English "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        component: "p"
      }, "Record a brand new audio sample attempting to match a target speach sample."))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        md: 6
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_16___default.a, {
        className: "record-card",
        style: {
          margin: 10
        },
        onClick: function onClick() {
          return _this2.changeTarget("american-southern");
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_17___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20___default.a, {
        style: {
          height: 0,
          paddingTop: '50%'
        },
        image: "/static/images/card-icons/texas.jpg",
        title: "Record an Audio Sample"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        gutterBottom: true,
        variant: "h5",
        component: "h2"
      }, " American - Southern "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        component: "p"
      }, "Record a brand new audio sample attempting to match a target speach sample."))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        md: 6
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_16___default.a, {
        className: "record-card",
        style: {
          margin: 10
        },
        onClick: function onClick() {
          return _this2.changeTarget("american-eastern");
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_17___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_20___default.a, {
        style: {
          height: 0,
          paddingTop: '50%'
        },
        image: "/static/images/card-icons/ny.jpg",
        title: "Record an Audio Sample"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        gutterBottom: true,
        variant: "h5",
        component: "h2"
      }, " American - Eastern "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        component: "p"
      }, "Record a brand new audio sample attempting to match a target speach sample.")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 6
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        variant: "body1",
        style: styles
      }, "Upload an audio recording of you speaking attempting to match a speech sample."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "file",
        accept: ".wav",
        name: "file",
        id: "file",
        class: "inputfile",
        onChange: this.handleselectedFile,
        style: buttonStyle
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        for: "file",
        style: labelStyle
      }, " Choose An Audio File")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        style: {
          padding: 10,
          margin: 10
        }
      }, fileUploaded && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        variant: "caption"
      }, " ", this.state.selectedFile.name, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        variant: "contained",
        color: "secondary",
        onClick: this.handleUpload
      }, " Upload ")))))));
    }
  }]);

  return upload;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (upload);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CloudUpload");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardVoice");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Save");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ })
/******/ ]);