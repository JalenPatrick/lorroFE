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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Fonts */ "./components/Fonts.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/Radio/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var recorder_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! recorder-js */ "./node_modules/recorder-js/index.js");
/* harmony import */ var recorder_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(recorder_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _scripts_record_script__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../scripts/record-script */ "./scripts/record-script.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");

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


 // import { Router, Route, Switch } from "react-router";























var cors = __webpack_require__(/*! cors */ "./node_modules/cors/lib/index.js");

var group = {
  height: "25vh",
  textAlign: "center"
};
var buttonGroup = {
  height: "auto",
  padding: "20px 0px 20px 0px",
  textAlign: "center"
};
var sampleGroup = {
  textAlign: "center",
  paddingBottom: "50px"
};
var result = {
  height: "auto",
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
  width: "50vw"
};
var loadingStyle = {
  textAlign: "center",
  marginTop: '-10',
  backgroundColor: "#e0e0e0",
  height: '100vh'
};
var selectCards = {
  magin: '0px 20px 10px 20px',
  borderBottom: '3px solid #03A9F4' // audio stuff

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
      Object(file_saver__WEBPACK_IMPORTED_MODULE_22__["saveAs"])(audioURL, "lorro_record.wav");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "playTarget", function (target_url) {
      var audio = new Audio(target_url);
      audio.play();
      console.log(target_url);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      console.log(event.target.value);

      _this.setState({
        selectedTarget: event.target.value
      });

      console.log(_this.state.selectedTarget);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitRecording",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var data, res, upload_url, process_url, cors_headers, file_name;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = _this.state.uploadData;

              _this.setState({
                submitted: true
              });

              upload_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/upload";
              process_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/process";
              cors_headers = {// "Access-Control-Allow-Origin": "*",
                // "content-type":"application/json",
              };
              _context2.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_19___default.a.get(upload_url, {
                headers: cors_headers
              }).then(function (response) {
                console.log(response);
                res = response.data;
                console.log('get success');

                _this.setState({
                  submitText: 'Uploading sample....'
                });
              });

            case 7:
              console.log('res', res);
              file_name = res.split('/')[3].split('?')[0];
              console.log(file_name);

              _this.setState({
                fileName: file_name
              });

              _context2.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_19___default.a.put(res, data).then(function (response) {
                console.log(response);
                console.log('put success');

                _this.setState({
                  loading: true
                });
              });

            case 13:
              // route to the results page
              next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
                pathname: '/results',
                query: {
                  target: _this.state.selectedTarget,
                  file: _this.state.fileName
                }
              }); // let phonemes = []
              // await axios.post(process_url, file_name).then(response => {
              //     console.log(response)
              //     phonemes = response.data.segmented_phonemes
              //     console.log('post success')
              //     this.setState({submitted:true, submitText:'Submitted!'})
              // })
              // console.log('phonemes', phonemes)
              // let cleanPhonemes = []
              // let prevInsert = null
              // phonemes.forEach((pho) => {
              //     if(pho != '2' && pho != prevInsert) {
              //         cleanPhonemes.push(pho);
              //         prevInsert = pho;
              //         // console.log(pho)
              //     }
              // })
              // console.log(cleanPhonemes)

            case 14:
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
      loading: false,
      submitted: false,
      submitText: 'Submit Recording',
      fileName: null,
      selectedTarget: null
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
        recorder = new recorder_js__WEBPACK_IMPORTED_MODULE_20___default.a(audioContext);
        recorder.init(stream);
        console.log(recorder);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var history = this.props.history;

      if (this.state.appIsMounted) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Fonts__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default.a, {
          elevation: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, !this.state.submitted ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          container: true,
          spacing: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: 12,
          style: group,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
          variant: "h1",
          component: "h3",
          style: {
            fontFamily: 'Roboto'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, "Record"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
          variant: "h5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, "Click the record button and record an attempt to match your selected speech sample.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          container: true,
          xs: 12,
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          justify: "center",
          alignContent: "space-between",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10___default.a, {
          className: "record-card",
          style: {
            padding: 10,
            marginBottom: '5vh',
            borderBottom: '3px solid #3f51b5'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
          gutterBottom: true,
          variant: "body",
          style: {
            textAlign: 'center',
            fontFamily: 'Lato'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }, " Please say the following sentence: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
          variant: "h5",
          style: {
            textDecoration: 'none',
            fontFamily: 'Lato'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        }, "She had your dark suit in greasy wash water all year")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          style: sampleGroup,
          container: true,
          xs: 12,
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          justify: "center",
          alignContent: "space-between",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: 12,
          md: 12,
          style: {
            padding: "0 30px 0 30px",
            margin: '0px 0px 15px 0px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
          variant: "h5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, "Step 1: Select a Target Speech Sample")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: 12,
          md: 2,
          style: {
            padding: "0 30px 0 30px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10___default.a, {
          style: selectCards,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
          gutterBottom: true,
          variant: "body",
          style: {
            textAlign: 'center',
            fontFamily: 'Lato'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, " Southern "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_18___default.a, {
          checked: this.state.selectedTarget === 'https://s3.us-east-2.amazonaws.com/lorro/target-sample-JDM1-southern.wav',
          onChange: this.handleChange,
          value: "target-sample-JDM1-southern",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
          variant: "contained",
          color: "secondary",
          onClick: function onClick() {
            return _this3.playTarget('https://s3.us-east-2.amazonaws.com/lorro/target-sample-JDM1-southern.wav');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: this
        }, " Play ")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: 12,
          md: 2,
          style: {
            padding: "0 30px 0 30px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10___default.a, {
          style: selectCards,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
          gutterBottom: true,
          variant: "body",
          style: {
            textAlign: 'center',
            fontFamily: 'Lato'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: this
        }, " Wisconsin "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_18___default.a, {
          checked: this.state.selectedTarget === 'https://s3.us-east-2.amazonaws.com/lorro/target-sample-DLD0-wisconsin.wav',
          onChange: this.handleChange,
          value: "target-sample-DLD0-wisconsin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
          variant: "contained",
          color: "secondary",
          onClick: function onClick() {
            return _this3.playTarget('https://s3.us-east-2.amazonaws.com/lorro/target-sample-DLD0-wisconsin.wav');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }, " Play ")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: 12,
          md: 2,
          style: {
            padding: "0 30px 0 30px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10___default.a, {
          style: selectCards,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
          gutterBottom: true,
          variant: "body",
          style: {
            textAlign: 'center',
            fontFamily: 'Lato'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          },
          __self: this
        }, " Western "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_18___default.a, {
          checked: this.state.selectedTarget === 'https://s3.us-east-2.amazonaws.com/lorro/target-sample-REH0-western.wav',
          onChange: this.handleChange,
          value: "target-sample-REH0-western",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
          variant: "contained",
          color: "secondary",
          onClick: function onClick() {
            return _this3.playTarget('https://s3.us-east-2.amazonaws.com/lorro/target-sample-REH0-western.wav');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          },
          __self: this
        }, " Play ")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: 12,
          md: 2,
          style: {
            padding: "0 30px 0 30px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10___default.a, {
          style: selectCards,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
          gutterBottom: true,
          variant: "body",
          style: {
            textAlign: 'center',
            fontFamily: 'Lato'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }, " New England "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_18___default.a, {
          checked: this.state.selectedTarget === 'https://s3.us-east-2.amazonaws.com/lorro/target-sample-VMH0-new-england.wav',
          onChange: this.handleChange,
          value: "target-sample-VMH0-new-england",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
          variant: "contained",
          color: "secondary",
          onClick: function onClick() {
            return _this3.playTarget('https://s3.us-east-2.amazonaws.com/lorro/target-sample-VMH0-new-england.wav');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          },
          __self: this
        }, " Play "))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
            lineNumber: 336
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_17___default.a, {
          variant: "inset",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 337
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: 12,
          md: 12,
          style: {
            padding: "0 30px 0 30px",
            margin: '0px 0px 15px 0px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
          variant: "h5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          },
          __self: this
        }, "Step 2: Record and Upload Your Sample")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "primary",
          onClick: this.recordStart,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343
          },
          __self: this
        }, "Record Sample "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "secondary",
          onClick: this.recordStop,
          disabled: !this.state.recording,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          },
          __self: this
        }, "Stop Recording "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "default",
          onClick: this.recordPlay,
          disabled: !this.state.completedRecording,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356
          },
          __self: this
        }, "Play Recording "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "secondary",
          onClick: this.downloadRecording,
          disabled: !this.state.completedRecording,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 363
          },
          __self: this
        }, "Download ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          style: buttonGroup,
          container: true,
          xs: 12,
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          justify: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 371
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 372
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
          style: submitButton,
          variant: "contained",
          color: "primary",
          onClick: this.submitRecording,
          disabled: !this.state.completedRecording,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 373
          },
          __self: this
        }, this.state.submitText, " "))), this.state.submitted && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          style: result,
          container: true,
          xs: 12,
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          justify: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 382
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10___default.a, {
          className: "record-card",
          style: {
            padding: 5,
            marginBottom: '5vh',
            marginTop: '5vh',
            borderBottom: '3px solid #43A047'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 383
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 384
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
          variant: "h5",
          style: {
            textDecoration: 'none',
            fontFamily: 'Lato'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 385
          },
          __self: this
        }, "Successfully submitted your speech sample!"))))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          container: true,
          spacing: 24,
          style: loadingStyle,
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          justify: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 393
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: 12,
          md: 12,
          style: {
            padding: "0 30px 0 30px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 394
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
          variant: "h2",
          gutterBottom: true,
          style: {
            color: 'black',
            fontFamily: 'Merienda',
            fontSize: '7vmax'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 396
          },
          __self: this
        }, " Submitting Your Speech Sample... "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_16___default.a, {
          style: {
            flexGrow: 1
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 397
          },
          __self: this
        }))))));
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
//# sourceMappingURL=record.js.e4da8c5add9ff875d9d5.hot-update.js.map