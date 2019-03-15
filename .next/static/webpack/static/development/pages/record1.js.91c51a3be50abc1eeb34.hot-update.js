webpackHotUpdate("static/development/pages/record1.js",{

/***/ "./pages/record1.js":
/*!**************************!*\
  !*** ./pages/record1.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var recorder_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recorder-js */ "./node_modules/recorder-js/index.js");
/* harmony import */ var recorder_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(recorder_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _scripts_record_script__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../scripts/record-script */ "./scripts/record-script.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "/Users/jalen/School/Capstone/Lorro_FE/pages/record1.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  marginRight: "20px"
};
var submitButton = {
  marginLeft: "20px",
  marginRight: "20px",
  width: "50vw" // audio stuff

};
var isRecording = false;
var blob = null;
var gumStream, audioContext, audioCtx, mediaRecorder, audioURL, input, rec;
var chunks = [];
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

      console.log(audioContext);
      recorder.start();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "recordStop", function () {
      var myBlob;
      recorder.stop().then(function (_ref) {
        var blob = _ref.blob,
            buffer = _ref.buffer;
        blob = blob;
        console.log('stopped!');
        console.log(blob);
        myBlob = new Blob(buffer);
      });
      console.log('outside blob', blob);

      _this.setState({
        completedRecording: true
      });

      _this.setState({
        recording: false
      });

      audioURL = window.URL.createObjectURL(myBlob); // console.log('recorder on stop', mediaRecorder)
      // console.log('audio context on stop', audioContext)
      // mediaRecorder.ondataavailable = function(e) {
      //     chunks.push(e.data);
      // }
      // blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      // audioURL = window.URL.createObjectURL(blob);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createDownloadLink", function () {
      var fileName = new Date().toISOString();
      console.log(fileName);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "recordPlay", function () {
      var a = new Audio(audioURL);
      a.play();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitRecording", function () {
      recorder.download(blob, 'lorro-recording'); // //send data to endpoint via axios
      // axios.post("http://localhost:8080/voicecompare", data)
      //     .then(res => {
      //         console.log(res.statusText);
      //         console.log(res);
      //     }).then(() => {
      //         document.location.href = "/results"
      //     })
      // saveAs(audioURL, "recoding.wav");
    });

    _this.state = {
      appIsMounted: false,
      recording: false,
      completedRecording: false
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
        recorder = new recorder_js__WEBPACK_IMPORTED_MODULE_14___default.a(audioContext);
        recorder.init(stream);
        console.log(recorder);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.appIsMounted) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
          elevation: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          container: true,
          spacing: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 12,
          style: group,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
          variant: "h1",
          component: "h3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, "Record"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
          variant: "h5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, "Click the record button and record an attempt to match your selected speech sample.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
            lineNumber: 158
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "primary",
          onClick: this.recordStart,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, "Record Sample "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "secondary",
          onClick: this.recordStop,
          disabled: !this.state.recording,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, "Stop Recording "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "default",
          onClick: this.recordPlay,
          disabled: !this.state.completedRecording,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, "Play Recording ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          style: buttonGroup,
          container: true,
          xs: 12,
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          justify: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
          style: submitButton,
          variant: "contained",
          color: "primary",
          onClick: this.submitRecording,
          disabled: !this.state.completedRecording,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, "Submit Recording ")))))));
      } else {
        return false;
      }
    }
  }]);

  return record;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/record1")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=record1.js.91c51a3be50abc1eeb34.hot-update.js.map