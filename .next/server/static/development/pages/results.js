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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Fonts.js":
/*!*****************************!*\
  !*** ./components/Fonts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jalen/School/Capstone/Lorro_FE/components/Fonts.js";



var Fonts = function Fonts() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Srisakdi:700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Permanent+Marker",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Merienda",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Lato",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdn.WebRTC-Experiment.com/RecordRTC.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Fonts);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Fonts */ "./components/Fonts.js");
var _jsxFileName = "/Users/jalen/School/Capstone/Lorro_FE/components/Header.js";









var styles = {
  marginLeft: 10
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Fonts__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    position: "static",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h5",
    color: "inherit",
    gutterBottom: true,
    style: {
      fontFamily: 'Merienda'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Lorro")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/jalen/School/Capstone/Lorro_FE/components/Layout.js";








var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/results.js":
/*!**************************!*\
  !*** ./pages/results.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _script_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./script-1 */ "./pages/script-1.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "@material-ui/core/LinearProgress");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "@material-ui/core/ExpansionPanel");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "@material-ui/core/ExpansionPanelSummary");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "@material-ui/core/ExpansionPanelDetails");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_Fonts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Fonts */ "./components/Fonts.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! victory */ "victory");
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(victory__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_21__);

var _jsxFileName = "/Users/jalen/School/Capstone/Lorro_FE/pages/results.js";

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



















 // var fs = require('fs')



var yourCard = {
  borderTop: "5px solid #0097a7",
  borderRadius: "5px"
};
var sampleCard = {
  borderTop: "5px solid #ec407a",
  borderRadius: "5px",
  margin: "5vh 0 5vh 0"
};
var scoreCard = {
  border: "5px solid #ec407a",
  borderRadius: "5px",
  margin: "5vh 0 5vh 0" // width: "50%"

};
var targetCard = {
  border: "5px solid #81C784",
  borderRadius: "5px",
  margin: "5vh 0 5vh 0" // width: "50%"

};
var loadingStyle = {
  textAlign: "center",
  backgroundColor: "#475372",
  height: 'auto'
};
var displayStyle = {
  textAlign: "center",
  marginTop: '-10',
  backgroundColor: "#e0e0e0",
  height: 'auto'
};
var wrap = {
  overflowWrap: "break-word",
  wordWrap: "break-word"
};

var results =
/*#__PURE__*/
function (_Component) {
  _inherits(results, _Component);

  function results() {
    var _this;

    _classCallCheck(this, results);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(results).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getFreqData", function (freqArray, phonemeArray, notesArray) {
      // console.log(freqArray)
      // console.log(phonemeArray)
      // console.log(notesArray)
      var dataArray = [];
      if (freqArray && phonemeArray && notesArray) for (var i = 0; i < freqArray.length; i++) {
        var dataObject = {
          freq: Math.round(freqArray[i]),
          phoneme: phonemeArray[i],
          note: notesArray[i]
        };
        dataArray.push(dataObject);
      } // console.log(dataArray)

      if (dataArray) {
        return dataArray;
      } else {
        getFreqData(freqArray, phonemeArray, notesArray);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCompareData", function (freq, timing, phonemes, words) {
      var pitchObject = {
        category: "Pitch Matching",
        value: Math.round(freq),
        fullMark: 100
      };
      var wordAccuracyObject;

      if (!words) {
        wordAccuracyObject = {
          category: "Word Matching",
          value: 0,
          fullMark: 100
        };
      } else {
        wordAccuracyObject = {
          category: "Word Matching",
          value: Math.round(words * 100),
          fullMark: 100
        };
      }

      var phonemeAccuracyObject = {
        category: "Phoneme Matching",
        value: Math.round(phonemes),
        fullMark: 100
      };
      var timingObject = {
        category: "Timing Matching",
        value: Math.round(timing),
        fullMark: 100
      };
      var dataArray = [pitchObject, wordAccuracyObject, phonemeAccuracyObject, timingObject];
      return dataArray;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "generateScore", function (freq, timing, phonemes) {
      // console.log('gen score', ((freq + timing + phonemes + 90)/4).toFixed(2))
      return ((freq + timing + phonemes + 90) / 4).toFixed(2);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "generateScore2", function (freq, timing, phonemes, words) {
      // console.log('gs2', freq, timing, phonemes, words)
      // console.log('gen score 2', ((freq + timing + phonemes + words * 100)/4).toFixed(2))
      return ((freq + timing + phonemes + words * 100) / 4).toFixed(2);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "wordMatching", function (raw) {
      if (raw) {
        var parsed = JSON.parse(raw);
        var interpreted = parsed.results.transcripts[0].transcript; // this.setState({transcribeTextTarget: interpreted})

        return interpreted;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "playTarget", function (target_url) {
      var audio = new Audio(target_url);
      audio.play(); // console.log(target_url);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleData", function () {
      var newDataShow = !_this.state.displaySample;

      _this.setState({
        displaySample: newDataShow
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "postTranscribe", function () {
      var transcribe_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/transcribe";
      var transcribe = _this.state.transcribe;
      var result_url; // console.log(this.state.transcribeDone)

      if (!_this.state.transcribeDone) {
        axios__WEBPACK_IMPORTED_MODULE_21___default.a.post(transcribe_url, transcribe).then(function (response) {
          // console.log('transcribe res: ', response);
          if (response.data.status === 'COMPLETED') {
            result_url = response.data.result; // console.log('done transcribe!', result_url)

            _this.setState({
              transcribeDone: true,
              transcribeHere: result_url
            }); // console.log('post call state', this.state)

          }
        });
      }

      setTimeout(_this.postTranscribe, 8000);
      return result_url;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTranscribe", function (trans_url) {
      // console.log('get transcribe', trans_url);
      if (!_this.state.getTranscribeDone) {
        axios__WEBPACK_IMPORTED_MODULE_21___default.a.get(trans_url).then(function (response) {
          // console.log(response)
          var result = response.data.results.transcripts[0].transcript; // console.log(result)

          _this.setState({
            transcribeTextSample: result,
            getTranscribeDone: true
          }); // console.log('after getTranscribe', this.state)


          return result;
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "matchingWords", function (targetWords, sampleWords) {
      // console.log('matching words')
      // console.log(targetWords, sampleWords)
      if (_this.state.transcribeTextSample) {
        var sampleArray = _this.state.transcribeTextSample.split(' ');

        var targetArray = targetWords.split(' '); // console.log(sampleArray, targetArray)

        var intersect = targetArray.filter(function (value) {
          return sampleArray.includes(value);
        }); // console.log(intersect.length, targetArray.length)

        return intersect.length / targetArray.length;
      }
    });

    _this.state = {
      isLoading: true,
      rawPhonemes: null,
      segmentedPhonemes: null,
      noteProgression: null,
      frequencies: null
    };
    return _this;
  }

  _createClass(results, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var process_url, transcribe_url, test, tar, file, sendObj, stringfied, transcribe;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  isLoading: true
                }); // console.log(this.props)
                // console.log(window.location.search)

                process_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/process";
                transcribe_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/transcribe"; // get file name from query param

                test = new URLSearchParams(window.location.search);
                tar = test.get('target');
                file = test.get('file'); // const target

                sendObj = {
                  file: file,
                  target: tar
                };
                stringfied = JSON.stringify(sendObj); // console.log('results', JSON.stringify(sendObj))

                _context.next = 10;
                return axios__WEBPACK_IMPORTED_MODULE_21___default.a.post(process_url, stringfied).then(function (response) {
                  // console.log('result -', response)
                  // console.log('post success - result')
                  var sampleData = response.data.sample_data;
                  var targetData = response.data.target_data;
                  var res = response.data; // this is the key used to transcribe the words the user said

                  transcribe = response.data.transcribe;

                  _this2.setState({
                    isLoading: false,
                    rawPhonemes: sampleData.segmented_phonemes,
                    segmentedPhonemes: sampleData.backend_decoded,
                    noteProgression: sampleData.note_progression,
                    frequencies: sampleData.fundamental_frequencies,
                    t_rawPhonemes: targetData.segmented_phonemes,
                    t_segmentedPhonemes: targetData.backend_decoded,
                    t_noteProgression: targetData.note_progression,
                    t_frequencies: targetData.fundamental_frequencies,
                    wordCompare: res.compare_transcribe,
                    freqScore: res.freq_diff_score,
                    ppAccuracyScore: res.postprocessed_accuracy_score,
                    rawAccuracyScore: res.raw_accuracy_score,
                    displaySample: true,
                    transcribe: res.transcribe,
                    transcribeDone: false,
                    transcribeHere: null,
                    transcribeTextSample: null,
                    getTranscribeDone: false
                  }); // console.log(this.state)

                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var isLoading = this.state.isLoading;
      var freqSampleData = this.getFreqData(this.state.frequencies, this.state.rawPhonemes, this.state.noteProgression);
      var freqTargetData = this.getFreqData(this.state.t_frequencies, this.state.t_rawPhonemes, this.state.t_noteProgression);
      var wordMatching = this.wordMatching(this.state.wordCompare);
      var lorroScore = this.generateScore(this.state.freqScore, this.state.ppAccuracyScore, this.state.rawAccuracyScore);
      var compareGraphData = this.getCompareData(this.state.freqScore, this.state.ppAccuracyScore, this.state.rawAccuracyScore, 0);
      var transcribe_link;
      var transcribe_result = null;
      var determineWords = null;

      if (!this.state.transcribeDone) {
        transcribe_link = this.postTranscribe();
      }

      var lorroScoreRedux = null;

      if (this.state.transcribeTextSample === null) {
        // console.log('got into inner')
        // console.log(wordMatching, 'in inner')
        transcribe_result = this.getTranscribe(this.state.transcribeHere); // console.log(transcribe_result, 'transcribe result')
      }

      determineWords = this.matchingWords(wordMatching, this.state.transcribeTextSample);
      lorroScoreRedux = this.generateScore2(this.state.freqScore, this.state.ppAccuracyScore, this.state.rawAccuracyScore, determineWords);
      compareGraphData = this.getCompareData(this.state.freqScore, this.state.ppAccuracyScore, this.state.rawAccuracyScore, determineWords); // console.log(transcribe_result, determineWords, lorroScoreRedux)
      // compareGraphData = this.getCompareData(this.state.freqScore, this.state.ppAccuracyScore, this.state.rawAccuracyScore, determineWords)
      // console.log(determineWords)

      var test = new URLSearchParams(window.location.search);
      var tar = test.get('target');
      var file = test.get('file'); // console.log(tar, file);

      var target_url = 'https://s3.us-east-2.amazonaws.com/lorro/' + tar + '.wav';
      var sample_url = 'https://s3.us-east-2.amazonaws.com/lorro/' + file; // console.log(sample_url, target_url)

      var dataToShow;

      if (this.state.displaySample) {
        dataToShow = freqSampleData;
      } else {
        dataToShow = freqTargetData;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Fonts__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }), isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
        elevation: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        spacing: 24,
        style: loadingStyle,
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 12,
        style: {
          padding: "0 30px 0 30px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h2",
        gutterBottom: true,
        style: {
          color: 'white',
          fontFamily: 'Merienda',
          fontSize: '7vmax',
          marginTop: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, " Analyzing Your Speech Sample... "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11___default.a, {
        style: {
          flexGrow: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_17___default.a, {
        params: {
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 5
            }
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      })))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
        elevation: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 12,
        style: {
          padding: "0 30px 0 30px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        spacing: 24,
        style: displayStyle,
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 12,
        style: {
          padding: "0 30px 0 30px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: scoreCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h2",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, " Lorro Score "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h2",
        style: {
          fontFamily: 'Merienda',
          fontSize: '15vmax',
          color: '#8884d8'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, " ", isNaN(lorroScoreRedux) ? lorroScore : lorroScoreRedux, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        style: {
          fontFamily: 'Merienda',
          color: '#8884d8'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, " ", isNaN(lorroScoreRedux) ? "Awaiting word transcription..." : "With word transcription!", " "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: sampleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h2",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, " Frequency Profile "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h4",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, " Fundamental frequencies vs. spoken phoneme "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, " Hover over the chart to see the phoneme spoken and what pitch it was spoken at "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["ResponsiveContainer"], {
        width: "100%",
        aspect: 4.0 / 2.0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, this.state.displaySample ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["AreaChart"], {
        data: dataToShow,
        margin: {
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["XAxis"], {
        dataKey: "phoneme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Label"], {
        value: "Detected Phoneme",
        offset: 10,
        position: "bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["YAxis"], {
        label: {
          value: 'Fundamental Frequency (hz)',
          angle: -90,
          position: 'insideLeft'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Area"], {
        type: "monotone",
        dataKey: "freq",
        stroke: "#8884d8",
        fill: "#8884d8",
        unit: "hz",
        activeDot: {
          r: 8
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Area"], {
        type: "monotone",
        dataKey: "note",
        stroke: "#8884d8",
        dot: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["AreaChart"], {
        data: dataToShow,
        margin: {
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["XAxis"], {
        dataKey: "phoneme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Label"], {
        value: "Detected Phoneme",
        offset: 10,
        position: "bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["YAxis"], {
        label: {
          value: 'Fundamental Frequency (hz)',
          angle: -90,
          position: 'insideLeft'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Area"], {
        type: "monotone",
        dataKey: "freq",
        stroke: "#81C784",
        fill: "#81C784",
        unit: "hz",
        activeDot: {
          r: 8
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Area"], {
        type: "monotone",
        dataKey: "note",
        stroke: "#81C784",
        dot: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        variant: "contained",
        color: "secondary",
        onClick: function onClick() {
          return _this3.toggleData();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, " ", this.state.displaySample ? 'View Sample Graph' : 'View Target Graph', " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        spacing: 24,
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: scoreCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h3",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, " Sample Breakdown "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, " Speech Transcription "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        style: {
          margin: '0px 0px 10px 0px',
          color: '#8884d8',
          overflowWrap: "break-word",
          wordWrap: "break-word"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        __self: this
      }, " ", this.state.transcribeTextSample !== null ? this.state.transcribeTextSample : 'Processing...', " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, " Processed Phonemes "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        style: {
          margin: '0px 0px 10px 0px',
          color: '#8884d8',
          overflowWrap: "break-word",
          wordWrap: "break-word"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, " ", this.state.segmentedPhonemes, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        variant: "contained",
        color: "primary",
        onClick: function onClick() {
          return _this3.playTarget(sample_url);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, " Play Sample ")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: targetCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h3",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, " Target Breakdown "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, " Speech Transcription "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        style: {
          margin: '0px 0px 10px 0px',
          color: '#81C784',
          overflowWrap: "break-word",
          wordWrap: "break-word"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, " ", wordMatching, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }, " Processed Phonemes "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        style: {
          margin: '0px 0px 20px 0px',
          color: '#81C784',
          overflowWrap: "break-word",
          wordWrap: "break-word"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        },
        __self: this
      }, " ", this.state.t_segmentedPhonemes, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        variant: "contained",
        color: "primary",
        onClick: function onClick() {
          return _this3.playTarget(target_url);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        },
        __self: this
      }, " Play Target "))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: sampleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h2",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }, " Lorro Score Breakdown "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, " ", this.state.transcribeTextSample !== null ? 'Complete Lorro score breakdown complete!' : 'Processing word matching accuracy...', " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["ResponsiveContainer"], {
        width: "100%",
        aspect: 4.0 / 2.0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["RadarChart"], {
        data: compareGraphData,
        margin: {
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["PolarGrid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["PolarAngleAxis"], {
        dataKey: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["PolarRadiusAxis"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Radar"], {
        name: "accuracy",
        unit: "%",
        dataKey: "value",
        stroke: "#8884d8",
        fill: "#8884d8",
        fillOpacity: 0.6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: sampleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h2",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, " View Raw Data "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "body",
        gutterBottom: true,
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        },
        __self: this
      }, " Click to open ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        spacing: 24,
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 12,
        style: {
          margin: "0 15px 0 5px",
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, " Phonemes "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        style: wrap,
        variant: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }, " ", this.state.segmentedPhonemes, " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 12,
        style: {
          margin: "0 15px 0 5px",
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, " Note Progression "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        style: wrap,
        variant: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }, " ", this.state.noteProgression, " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 12,
        style: {
          margin: "0 15px 0 5px",
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        },
        __self: this
      }, " Fundamental Frequencies "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        style: wrap,
        variant: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        },
        __self: this
      }, " ", this.state.frequencies, " "))))))))))));
    }
  }]);

  return results;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (results);

/***/ }),

/***/ "./pages/script-1.js":
/*!***************************!*\
  !*** ./pages/script-1.js ***!
  \***************************/
/*! exports provided: start, parseFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFile", function() { return parseFile; });
var http = __webpack_require__(/*! http */ "http"); // var fs = require('fs');


function readFile(file, callback) {
  var raw_file = new XMLHttpRequest();
  raw_file.overrideMimeType("application/json");
  raw_file.open("get", file, true);

  raw_file.onreadystatechange = function () {
    if (raw_file.readyState == 4 && raw_file.status == "200") callback(raw_file.responseText);
  };

  raw_file.send(null);
}

function start() {
  readFile("/static/images/results/notes.json", run);
  readFile("/static/images/results/text.txt", otherRun1);
  readFile("/static/images/results/phoneme.txt", otherRun2);
  readFile("/static/images/results/phoneme.txt", otherRun2);
}
function parseFile(file) {
  console.log(file);
}

function otherRun1(file) {
  var body = document.querySelector(".result-2");
  body.innerHTML = file;
}

function otherRun2(file) {
  var body = document.querySelector(".result-3");
  body.innerHTML = file;
}

function parse(file) {
  var body = document.querySelector(".result-4");
  body.innerHTML = file;
}

function run(json) {
  var notesArr = JSON.parse(json);
  var index;
  var last_bold;
  var interval = null;

  function play() {
    if (interval) stop();
    index = 0;
    last_bold = 0;
    play_next();
    interval = setInterval(play_next, 10);
  }

  function play_next() {
    if (index >= notesArr.length) {
      stop();
      return;
    }

    if (new_note(index)) {
      unbold(last_bold);
      bold(index);
    }

    index++;
  }

  function stop() {
    clearInterval(interval);
    interval = null;
    unbold(last_bold);
  }

  function bold(ind) {
    document.querySelector(".note-".concat(ind)).classList.add("note_bold");
    document.querySelector(".note-".concat(ind)).style.fontWeight = "bold";
    document.querySelector(".note-".concat(ind)).style.fontSize = "30px";
    last_bold = ind;
  }

  function unbold(ind) {
    if (ind < 0) return;
    document.querySelector(".note-".concat(ind)).classList.remove("note_bold");
    document.querySelector(".note-".concat(ind)).style.fontWeight = "normal";
    document.querySelector(".note-".concat(ind)).style.fontSize = "16px";
  }

  function new_note(ind) {
    if (ind < 1) return true;
    return notesArr[ind - 1] != notesArr[ind];
  }

  var body = document.querySelector(".result");
  var button = document.querySelector(".play_button");
  var audio = document.querySelector(".audio");
  var notes = document.createElement('div');
  notes.classList.add("notes");
  notes.style.display = "flex";
  notes.style.flexWrap = "wrap";
  notes.style.justifyContent = "space-around";
  var noteEls;

  for (var i = 0; i < notesArr.length; i++) {
    if (new_note(i)) {
      var noteEl = document.createElement("div");
      noteEl.innerHTML = notesArr[i];
      noteEl.classList.add("note");
      noteEl.classList.add("note-".concat(i));
      noteEl.style.textAlign = "center";
      noteEl.style.width = "30px";
      notes.appendChild(noteEl);
    }
  }

  button.addEventListener("click", function () {
    audio.currentTime = 0;
    audio.play();
    play();
  });
  body.appendChild(notes);
}

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/results.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/results.js */"./pages/results.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/ExpansionPanel":
/*!***************************************************!*\
  !*** external "@material-ui/core/ExpansionPanel" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelDetails":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelDetails" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelSummary":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelSummary" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/LinearProgress":
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),

/***/ "victory":
/*!**************************!*\
  !*** external "victory" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("victory");

/***/ })

/******/ });
//# sourceMappingURL=results.js.map