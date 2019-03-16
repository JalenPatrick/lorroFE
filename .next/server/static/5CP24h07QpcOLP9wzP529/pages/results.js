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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
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
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFile", function() { return parseFile; });
var http = __webpack_require__(23); // var fs = require('fs');


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
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("victory");

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(36);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _script_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(30);
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(victory__WEBPACK_IMPORTED_MODULE_15__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















 // var fs = require('fs')


var dummyData = [{
  x: "correct",
  y: 3
}, {
  x: "incorrect",
  y: 1
}];
var headerStyle = {
  textAlign: "center",
  backgroundColor: "#e0e0e0"
};
var subheaderStyle = {
  textAlign: "center",
  backgroundColor: "#e0e0e0"
};

var results =
/*#__PURE__*/
function (_Component) {
  _inherits(results, _Component);

  function results() {
    var _this;

    _classCallCheck(this, results);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(results).call(this));
    _this.state = {
      isLoading: true
    };
    console.log("hi"); // var fs = require('fs')

    return _this;
  }

  _createClass(results, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_script_1__WEBPACK_IMPORTED_MODULE_8__["start"])();
      Object(_script_1__WEBPACK_IMPORTED_MODULE_8__["parseFile"])("/static/images/results/text.txt");
    } // parseFile = file => {
    //     console.log("hello this is a test")
    //     var rawFile = new XMLHttpRequest();
    //     rawFile.open("GET", file, false);
    //     rawFile.onreadystatechange = function ()
    //     {
    //         if(rawFile.readyState === 4)
    //         {
    //             if(rawFile.status === 200 || rawFile.status == 0)
    //             {
    //                 var allText = rawFile.responseText;
    //                 alert(allText);
    //             }
    //         }
    //     }
    //     rawFile.send(null);
    // }

  }, {
    key: "readFile",
    value: function readFile(file, store) {// fs.readFile('/static/images/results/text.txt', (err, data) => { 
      // if (err) throw err; 
      // console.log(data.toString()); 
      // })
    }
  }, {
    key: "start",
    value: function start() {
      readFile("/static/images/results/notes.json", run);
      readFile("/static/images/results/text.txt", otherRun1);
      readFile("/static/images/results/phoneme.txt", otherRun2);
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      this.readFile();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
        elevation: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        spacing: 24,
        direction: "row",
        alignItems: "center",
        justify: "center",
        style: headerStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        component: "h2",
        variant: "h1",
        gutterBottom: true
      }, " Results ")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
        elevation: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        spacing: 24,
        direction: "row",
        alignItems: "center",
        justify: "center",
        style: subheaderStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12,
        md: 8
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        title: "Lorro Score",
        subheader: "Overall assessment of similarity between your sample and the selected sample",
        style: {
          backgroundColor: "#EC407A",
          borderBottom: "2px solid black"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " Bacon ipsum dolor amet ball tip beef ribs shankle tail doner chuck hamburger tri-tip pancetta sirloin. Flank sirloin rump ground round ham ribeye tri-tip t-bone prosciutto spare ribs turkey alcatra. Sirloin pork chop leberkas capicola. Kevin buffalo porchetta frankfurter chicken. Short loin sirloin beef meatball. Hamburger tongue fatback tail chicken. Ham biltong corned beef, cupim cow boudin pork belly doner shoulder rump pork loin porchetta drumstick. Porchetta flank ground round, beef ribs leberkas rump biltong venison swine cow chuck short ribs bresaola ham boudin. Venison turkey shoulder pork, hamburger bacon pork belly capicola corned beef frankfurter tongue flank cow. Andouille turducken biltong cupim leberkas. Pastrami rump swine pork chop pancetta alcatra jerky chicken. Ham hock pork belly andouille buffalo, swine meatloaf landjaeger biltong shank hamburger pig.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12,
        md: 5
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        title: "Speech Sample Transcription",
        subheader: "Here's what we think you said",
        style: {
          backgroundColor: "#EC407A",
          borderBottom: "2px solid black"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        component: "h2",
        variant: "h5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "result-2"
      }, " "))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12,
        md: 5
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        title: "Target Sample Transcription",
        subheader: "Here's what was said in the selected target sample",
        style: {
          backgroundColor: "#EC407A",
          borderBottom: "2px solid black"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        component: "h2",
        variant: "h5"
      }, "hello hello hello")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12,
        md: 8,
        style: {
          padding: "2px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        title: "Word Accuracy",
        subheader: "Ratio of words pronounced correctly compared to the selected target sample",
        style: {
          backgroundColor: "#EC407A",
          borderBottom: "2px solid black"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(victory__WEBPACK_IMPORTED_MODULE_15__["VictoryPie"], {
        data: dummyData,
        colorScale: ["#4CAF50", "#f44336"]
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12,
        md: 5
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        title: "Speech Sample Pitch Profile",
        subheader: "Here is a breakdown of your pitches throughout the sample",
        style: {
          backgroundColor: "#EC407A",
          borderBottom: "2px solid black"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "result"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        variant: "contained",
        color: "default",
        className: "play_button"
      }, " Listen")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12,
        md: 5
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        title: "Target Sample Pitch Profile",
        subheader: "Here is a breakdown of your pitches for the target sample",
        style: {
          backgroundColor: "#EC407A",
          borderBottom: "2px solid black"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        component: "h2",
        variant: "h5",
        style: {
          height: "30.5vh"
        }
      }, "WIP")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12,
        md: 8
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        title: "Technical Graphs",
        subheader: "View waveform, frequency progression and spectograms of your voice",
        style: {
          backgroundColor: "#EC407A",
          borderBottom: "2px solid black"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_11___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_12___default.a, {
        expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default.a, null)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], null, "Show Graphs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_13___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        spacing: 24,
        direction: "row",
        alignItems: "center",
        justify: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, " Signal Waveform "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/results/signal.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, " Fundamental Frequencies "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/results/fundamental_frequencies.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, " Spectrogram "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/results/spectrogram.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "result-3"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        hidden: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
        controls: true,
        className: "audio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
        src: "/static/images/results/sample.wav",
        type: "audio/wav"
      }))))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: "200px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
        elevation: "1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        spacing: 24,
        direction: "row",
        alignItems: "center",
        justify: "center",
        justifyContent: "center",
        style: {
          height: "auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, " Signal Waveform "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/results/signal.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, " Fundamental Frequencies "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/results/fundamental_frequencies.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
        variant: "h5",
        gutterBottom: true
      }, " Spectrogram "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/results/spectrogram.png"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
        controls: true,
        className: "audio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
        src: "/static/images/results/sample.wav",
        type: "audio/wav"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "result"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "play_button"
      }, " Play ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "result-2"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "result-3"
      })))));
    }
  }]);

  return results;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (results);

/***/ })
/******/ ]);