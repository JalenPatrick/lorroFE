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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
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
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = require("recorder-js");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);


/***/ }),
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
/* 56 */,
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(16);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

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

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@material-ui/core/CardActionArea"
var CardActionArea_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@material-ui/core/CardActions"
var CardActions_ = __webpack_require__(20);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__(13);

// EXTERNAL MODULE: external "@material-ui/core/CardMedia"
var CardMedia_ = __webpack_require__(15);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(7);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(18);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "recorder-js"
var external_recorder_js_ = __webpack_require__(24);
var external_recorder_js_default = /*#__PURE__*/__webpack_require__.n(external_recorder_js_);

// CONCATENATED MODULE: ./scripts/record-script.js
// let audioContext =  new (window.AudioContext || window.webkitAudioContext)();
// let recorder = new Recorder(audioContext);
var recording = function recording() {
  var record = document.querySelector('.record');
  var stop = document.querySelector('.stop');
  var soundClips = document.querySelector('.sound-clips');
  var canvas = document.querySelector('.visualizer');
  var mainSection = document.querySelector('.main-controls');
  stop.disabled = true;

  if (navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia supported.');
    var constraints = {
      audio: true
    };
    var chunks = [];

    var onSuccess = function onSuccess(stream) {
      var mediaRecorder = new MediaRecorder(stream); // visualize(stream);

      record.onclick = function () {
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        record.style.background = "red";
        stop.disabled = false;
        record.disabled = true;
      };

      stop.onclick = function () {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        record.style.background = "";
        record.style.color = ""; // mediaRecorder.requestData();

        stop.disabled = true;
        record.disabled = false;
      };

      mediaRecorder.onstop = function (e) {
        console.log("data available after MediaRecorder.stop() called.");
        var clipName = prompt('Enter a name for your sound clip?', 'My unnamed clip');
        console.log(clipName);
        var clipContainer = document.createElement('article');
        var clipLabel = document.createElement('p');
        var audio = document.createElement('audio');
        var deleteButton = document.createElement('button');
        clipContainer.classList.add('clip');
        audio.setAttribute('controls', '');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';

        if (clipName === null) {
          clipLabel.textContent = 'My unnamed clip';
        } else {
          clipLabel.textContent = clipName;
        }

        clipContainer.appendChild(audio);
        clipContainer.appendChild(clipLabel);
        clipContainer.appendChild(deleteButton);
        soundClips.appendChild(clipContainer);
        audio.controls = true;
        var blob = new Blob(chunks, {
          'type': 'audio/ogg; codecs=opus'
        });
        chunks = [];
        var audioURL = window.URL.createObjectURL(blob);
        audio.src = audioURL;
        console.log("recorder stopped");

        deleteButton.onclick = function (e) {
          evtTgt = e.target;
          evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
        };

        clipLabel.onclick = function () {
          var existingName = clipLabel.textContent;
          var newClipName = prompt('Enter a new name for your sound clip?');

          if (newClipName === null) {
            clipLabel.textContent = existingName;
          } else {
            clipLabel.textContent = newClipName;
          }
        };
      };

      mediaRecorder.ondataavailable = function (e) {
        chunks.push(e.data);
      };
    };

    var onError = function onError(err) {
      console.log('The following error occured: ' + err);
    };

    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  }
};
// EXTERNAL MODULE: external "file-saver"
var external_file_saver_ = __webpack_require__(25);

// CONCATENATED MODULE: ./pages/record.js


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


















var group = {
  height: "30vh",
  textAlign: "center"
};
var buttonGroup = {
  height: "10vh",
  textAlign: "center"
};
var buttonStyle = {
  marginLeft: "20px",
  marginRight: "20px",
  minWidth: "22vmin"
};
var submitButton = {
  marginLeft: "20px",
  marginRight: "20px",
  width: "50vw" // audio stuff

};
var isRecording = false;
var blob = null;
var audioContext, audioURL;
var recorder;

var record_record =
/*#__PURE__*/
function (_Component) {
  _inherits(record, _Component);

  function record(props) {
    var _this;

    _classCallCheck(this, record);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(record).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "recordStart", function () {
      // initialize the audio recorder stuff
      blob = null;
      audioURL = null;

      _this.setState({
        recording: true
      });

      recorder.start();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "recordStop",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return recorder.stop().then(function (_ref2) {
                var blob = _ref2.blob,
                    buffer = _ref2.buffer;
                blob = blob;
                audioURL = window.URL.createObjectURL(blob);

                _this.setState({
                  uploadData: blob
                });
              });

            case 2:
              _this.setState({
                completedRecording: true
              });

              _this.setState({
                recording: false
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createDownloadLink", function () {
      var fileName = new Date().toISOString();
      console.log(fileName);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "recordPlay", function () {
      var a = new Audio(audioURL);
      a.play();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "downloadRecording", function () {
      // this saves a local copy of the audio
      Object(external_file_saver_["saveAs"])(audioURL, "lorro_record.wav");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitRecording",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2() {
      var data, res, upload_url, process_url, file_name;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = _this.state.uploadData;
              upload_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/upload";
              process_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/process";
              _context2.next = 5;
              return external_axios_default.a.get(upload_url, {
                headers: {
                  "Access-Control-Allow-Headers": "*"
                }
              }).then(function (response) {
                console.log(response);
                res = response.data;
              });

            case 5:
              console.log('res', res);
              file_name = res.split('/')[3].split('?')[0];
              console.log(file_name);
              _context2.next = 10;
              return external_axios_default.a.put(res, data).then(function (response) {
                console.log(response);
              });

            case 10:
              _context2.next = 12;
              return external_axios_default.a.post(process_url, file_name).then(function (response) {
                console.log(response);
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _this.state = {
      appIsMounted: false,
      recording: false,
      completedRecording: false,
      uploadData: null
    };
    return _this;
  }

  _createClass(record, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      requestAnimationFrame(function () {
        _this2.setState({
          appIsMounted: true
        });
      });
      var constraints = {
        audio: true
      };
      var cons = {
        audio: true
      };
      navigator.mediaDevices.getUserMedia(cons).then(function (stream) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        recorder = new external_recorder_js_default.a(audioContext);
        recorder.init(stream);
        console.log(recorder);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.appIsMounted) {
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement(Paper_default.a, {
          elevation: "1"
        }, external_react_default.a.createElement(Grid_default.a, {
          container: true,
          spacing: 24
        }, external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 12,
          style: group
        }, external_react_default.a.createElement(core_["Typography"], {
          variant: "h1",
          component: "h3"
        }, "Record"), external_react_default.a.createElement(core_["Typography"], {
          variant: "h5"
        }, "Click the record button and record an attempt to match your selected speech sample.")), external_react_default.a.createElement(Grid_default.a, {
          style: buttonGroup,
          container: true,
          xs: 12,
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          justify: "center",
          alignContent: "space-between"
        }, external_react_default.a.createElement(Button_default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "primary",
          onClick: this.recordStart
        }, "Record Sample "), external_react_default.a.createElement(Button_default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "secondary",
          onClick: this.recordStop,
          disabled: !this.state.recording
        }, "Stop Recording "), external_react_default.a.createElement(Button_default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "default",
          onClick: this.recordPlay,
          disabled: !this.state.completedRecording
        }, "Play Recording "), external_react_default.a.createElement(Button_default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "secondary",
          onClick: this.downloadRecording,
          disabled: !this.state.completedRecording
        }, "Download ")), external_react_default.a.createElement(Grid_default.a, {
          style: buttonGroup,
          container: true,
          xs: 12,
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          justify: "center"
        }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(Button_default.a, {
          style: submitButton,
          variant: "contained",
          color: "primary",
          onClick: this.submitRecording,
          disabled: !this.state.completedRecording
        }, "Submit Recording ")))))));
      } else {
        return false;
      }
    }
  }]);

  return record;
}(external_react_["Component"]);

/* harmony default export */ var pages_record = __webpack_exports__["default"] = (record_record);

/***/ })
/******/ ]);