webpackHotUpdate("static/development/pages/record.js",{

/***/ "./pages/record.js":
/*!*************************!*\
  !*** ./pages/record.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Fonts */ "./components/Fonts.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var recorder_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! recorder-js */ "./node_modules/recorder-js/index.js");
/* harmony import */ var recorder_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(recorder_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _scripts_record_script__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../scripts/record-script */ "./scripts/record-script.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_18__);

var _jsxFileName = "/Users/jalen/School/Capstone/Lorro_FE/pages/record.js";

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




















var cors = __webpack_require__(/*! cors */ "./node_modules/cors/lib/index.js");

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

var record =
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
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
      Object(file_saver__WEBPACK_IMPORTED_MODULE_18__["saveAs"])(audioURL, "lorro_record.wav");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitRecording",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var data, res, upload_url, process_url, cors_headers, file_name, phonemes, cleanPhonemes, prevInsert;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = _this.state.uploadData;
              upload_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/upload";
              process_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/process";
              cors_headers = {// "Access-Control-Allow-Origin": "*",
                // "content-type":"application/json",
              };
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get(upload_url, {
                headers: cors_headers
              }).then(function (response) {
                console.log(response);
                res = response.data;
                console.log('get success');
              });

            case 6:
              console.log('res', res);
              file_name = res.split('/')[3].split('?')[0];
              console.log(file_name);
              _context2.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_15___default.a.put(res, data).then(function (response) {
                console.log(response);
                console.log('put success');

                _this.setState({
                  loading: true
                });
              });

            case 11:
              phonemes = [];
              _context2.next = 14;
              return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(process_url, file_name).then(function (response) {
                console.log(response);
                phonemes = response.data.segmented_phonemes;
                console.log('post success');
              });

            case 14:
              console.log('phonemes', phonemes);
              cleanPhonemes = [];
              prevInsert = null;
              phonemes.forEach(function (pho) {
                if (pho != '2' && pho != prevInsert) {
                  cleanPhonemes.push(pho);
                  prevInsert = pho;
                  console.log(pho);
                }
              }); // console.log(cleanPhonemes)
              // phonemes.forEach(phoneme => {
              //     if (phoneme != '2') {
              //         cleanPhonemes.push(phoneme)
              //     }
              // })
              // console.log(cleanPhonemes)

            case 18:
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
      uploadData: null,
      loading: false
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
        recorder = new recorder_js__WEBPACK_IMPORTED_MODULE_16___default.a(audioContext);
        recorder.init(stream);
        console.log(recorder);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.appIsMounted) {
        var _React$createElement;

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Fonts__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          elevation: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 12,
          style: group,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
          variant: "h1",
          component: "h3",
          style: {
            fontFamily: 'Merienda'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, "Record"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
          variant: "h5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, "Click the record button and record an attempt to match your selected speech sample.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement = {
          item: true,
          xs: 8,
          container: true
        }, _defineProperty(_React$createElement, "xs", 12), _defineProperty(_React$createElement, "direction", "row"), _defineProperty(_React$createElement, "justifyContent", "center"), _defineProperty(_React$createElement, "alignItems", "center"), _defineProperty(_React$createElement, "justify", "center"), _defineProperty(_React$createElement, "alignContent", "space-between"), _defineProperty(_React$createElement, "__source", {
          fileName: _jsxFileName,
          lineNumber: 195
        }), _defineProperty(_React$createElement, "__self", this), _React$createElement), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9___default.a, {
          className: "record-card",
          style: {
            margin: 10
          },
          onClick: function onClick() {
            return _this3.changeTarget("british-english");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
          gutterBottom: true,
          variant: "h5",
          style: {
            textAlign: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, " Please say the following sentence: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
          variant: "h5",
          style: {
            color: 'red'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, "She had your dark suit in greasy wash water all year")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          style: buttonGroup,
          container: true,
          xs: 12,
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          justify: "center",
          alignContent: "space-between",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "primary",
          onClick: this.recordStart,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }, "Record Sample "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "secondary",
          onClick: this.recordStop,
          disabled: !this.state.recording,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, "Stop Recording "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "default",
          onClick: this.recordPlay,
          disabled: !this.state.completedRecording,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, "Play Recording "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "secondary",
          onClick: this.downloadRecording,
          disabled: !this.state.completedRecording,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, "Download ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          style: buttonGroup,
          container: true,
          xs: 12,
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          justify: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: submitButton,
          variant: "contained",
          color: "primary",
          onClick: this.submitRecording,
          disabled: !this.state.completedRecording,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, "Submit Recording ")))))));
      } else {
        return false;
      }
    }
  }]);

  return record;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (record);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/record")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=record.js.5463bb1c0f7e9741cd6a.hot-update.js.map