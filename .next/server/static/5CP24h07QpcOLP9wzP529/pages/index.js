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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
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
/* 21 */,
/* 22 */,
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(56);


/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(17);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(6);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(2);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(12);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(19);

// CONCATENATED MODULE: ./components/Fonts.js



var Fonts_Fonts = function Fonts() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Srisakdi:700",
    rel: "stylesheet"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Permanent+Marker",
    rel: "stylesheet"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Merienda",
    rel: "stylesheet"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Lato",
    rel: "stylesheet"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto",
    rel: "stylesheet"
  }), external_react_default.a.createElement("script", {
    src: "https://cdn.WebRTC-Experiment.com/RecordRTC.js"
  }));
};

/* harmony default export */ var components_Fonts = (Fonts_Fonts);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(4);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__(3);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardActionArea"
var CardActionArea_ = __webpack_require__(14);
var CardActionArea_default = /*#__PURE__*/__webpack_require__.n(CardActionArea_);

// EXTERNAL MODULE: external "@material-ui/core/CardActions"
var CardActions_ = __webpack_require__(20);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__(13);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/CardMedia"
var CardMedia_ = __webpack_require__(15);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/index.js















var headerStyles = {
  textAlign: "center",
  height: "100vh",
  marginTop: '-10',
  backgroundImage: "url(/static/images/backgrounds/reef.jpg)",
  backgroundSize: "cover"
};
var bodyStyleDark = {
  textAlign: "center",
  paddingTop: '5vh',
  paddingBottom: '5vh',
  borderTop: '5px solid white',
  borderBottom: '5px solid white',
  backgroundImage: "url(/static/images/backgrounds/nelson.jpg)",
  backgroundSize: "cover"
};
var bodyStyleLight = {
  textAlign: "center",
  paddingTop: '1vh',
  borderTop: '5px solid white',
  borderBottom: '5px solid white',
  backgroundImage: "url(/static/images/backgrounds/midnight_city.jpg)",
  backgroundSize: "cover"
};
/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement(components_Fonts, null), external_react_default.a.createElement(Paper_default.a, {
    elevation: 1
  }, external_react_default.a.createElement(Grid_default.a, {
    container: true,
    spacing: 24,
    direction: "row",
    alignItems: "center",
    justify: "center",
    style: headerStyles
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    md: 7
  }, external_react_default.a.createElement("div", {
    style: {}
  }, external_react_default.a.createElement(core_["Typography"], {
    variant: "h1",
    component: "h1",
    style: {
      color: 'white',
      fontFamily: 'Merienda',
      fontSize: '10vmax'
    }
  }, "Lorro"), external_react_default.a.createElement(core_["Typography"], {
    variant: "h4",
    style: {
      color: 'white',
      fontFamily: 'Merienda',
      fontSize: '2.5vmax'
    }
  }, "The Interactive Speech Training Suite"))), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    md: 5,
    container: true,
    alignItems: "center",
    justify: "center"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/record"
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    md: 7
  }, external_react_default.a.createElement(Card_default.a, {
    className: "record-card"
  }, external_react_default.a.createElement(CardActionArea_default.a, null, external_react_default.a.createElement(CardMedia_default.a, {
    style: {
      height: 0,
      paddingTop: '56.25%'
    },
    image: "/static/images/card-icons/microphone.jpg",
    title: "Record an Audio Sample"
  }), external_react_default.a.createElement(CardContent_default.a, null, external_react_default.a.createElement(core_["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, " Record an Audio Sample "), external_react_default.a.createElement(core_["Typography"], {
    component: "p"
  }, "Record a brand new audio sample attempting to match a target speach sample.")))))), external_react_default.a.createElement(link_default.a, {
    href: "/upload"
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    md: 7
  }, external_react_default.a.createElement(Card_default.a, {
    className: "record-card",
    style: {
      marginTop: '20px'
    }
  }, external_react_default.a.createElement(CardActionArea_default.a, null, external_react_default.a.createElement(CardMedia_default.a, {
    style: {
      height: 0,
      paddingTop: '56.25%'
    },
    image: "/static/images/card-icons/tape.jpg",
    title: "Upload an Audio Sample"
  }), external_react_default.a.createElement(CardContent_default.a, null, external_react_default.a.createElement(core_["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, " Upload an Audio Sample "), external_react_default.a.createElement(core_["Typography"], {
    component: "p"
  }, "Upload a local audio sample for analysis.")))))))), external_react_default.a.createElement(Grid_default.a, {
    container: true,
    spacing: 24,
    direction: "row",
    alignItems: "center",
    justify: "center",
    style: bodyStyleDark
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12
  }, external_react_default.a.createElement(core_["Typography"], {
    variant: "h2",
    gutterBottom: true,
    style: {
      color: 'white',
      fontFamily: 'Merienda'
    }
  }, "How To Use Lorro")), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    md: 4
  }, external_react_default.a.createElement(Card_default.a, {
    className: "info-card",
    style: {
      marginTop: '20px',
      borderRadius: '15px',
      marginLeft: '5px'
    }
  }, external_react_default.a.createElement("div", {
    style: {
      textAlign: "center",
      fontFamily: 'Roboto',
      backgroundImage: "url(/static/images/backgrounds/midnight_city.jpg)",
      padding: '15px'
    }
  }, external_react_default.a.createElement(core_["Typography"], {
    variant: "h4",
    gutterBottom: true,
    style: {
      color: 'white',
      fontFamily: 'Merienda'
    }
  }, "Choose Target Sample")), external_react_default.a.createElement(CardContent_default.a, null, external_react_default.a.createElement(core_["Typography"], {
    variant: "body1",
    gutterBottom: true,
    style: {
      textAlign: "justify",
      padding: "20px",
      fontFamily: 'Roboto',
      fontSize: '1.2vmax'
    }
  }, "Your first step to sounding like your favourite celebrity or perfecting that accent is to choose your target speech sample. This is going to be the voice that you are going to attempt to emulate. You can either choose from our database of existing samples or upload your own.")))), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    md: 4
  }, external_react_default.a.createElement(Card_default.a, {
    className: "info-card",
    style: {
      marginTop: '20px',
      borderRadius: '15px'
    }
  }, external_react_default.a.createElement("div", {
    style: {
      textAlign: "center",
      fontFamily: 'Roboto',
      backgroundImage: "url(/static/images/backgrounds/midnight_city.jpg)",
      padding: '15px'
    }
  }, external_react_default.a.createElement(core_["Typography"], {
    variant: "h4",
    gutterBottom: true,
    style: {
      color: 'white',
      fontFamily: 'Merienda'
    }
  }, "Upload Your Sample")), external_react_default.a.createElement(CardContent_default.a, null, external_react_default.a.createElement(core_["Typography"], {
    variant: "body1",
    gutterBottom: true,
    style: {
      textAlign: "justify",
      padding: "20px",
      fontFamily: 'Roboto',
      fontSize: '1.2vmax'
    }
  }, "Once you have chosen your target sample, your next step is to record yourself attempting to replicate the nuances of the sample! You either have the option to record or upload an audio sample but regardless of the method, try to ensure that your sample is audible with the presence of minimal background noise.")))), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    md: 4
  }, external_react_default.a.createElement(Card_default.a, {
    className: "info-card",
    style: {
      marginTop: '20px',
      borderRadius: '15px',
      marginRight: '5px'
    }
  }, external_react_default.a.createElement("div", {
    style: {
      textAlign: "center",
      fontFamily: 'Roboto',
      backgroundImage: "url(/static/images/backgrounds/midnight_city.jpg)",
      padding: '15px'
    }
  }, external_react_default.a.createElement(core_["Typography"], {
    variant: "h4",
    gutterBottom: true,
    style: {
      color: 'white',
      fontFamily: 'Merienda'
    }
  }, "View Results")), external_react_default.a.createElement(CardContent_default.a, null, external_react_default.a.createElement(core_["Typography"], {
    variant: "body1",
    gutterBottom: true,
    style: {
      textAlign: "justify",
      padding: "20px",
      fontFamily: 'Roboto',
      fontSize: '1.2vmax'
    }
  }, "Using state of the art machine learning algorithms, Lorro will compare your speech sample with your selected target sample and provide you with feedback into various aspects of your speech and guide you on how to change your pitch, pronounciation and tone to match more cloesly with your uploaded sample!"))))), external_react_default.a.createElement(Grid_default.a, {
    container: true,
    spacing: 24,
    direction: "row",
    alignItems: "center",
    justify: "center",
    style: bodyStyleLight
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12
  }, external_react_default.a.createElement(core_["Typography"], {
    variant: "h5",
    gutterBottom: true,
    style: {
      color: 'white',
      fontFamily: 'Segoe UI'
    }
  }, "ECE496 Capstone Project by Sever Topan, Zaid Kassar and Jalen Patrick")))));
});

/***/ })
/******/ ]);