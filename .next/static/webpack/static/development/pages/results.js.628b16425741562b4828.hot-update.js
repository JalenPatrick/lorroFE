webpackHotUpdate("static/development/pages/results.js",{

/***/ "./pages/results.js":
/*!**************************!*\
  !*** ./pages/results.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _script_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./script-1 */ "./pages/script-1.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_Fonts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Fonts */ "./components/Fonts.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! victory */ "./node_modules/victory/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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
      console.log('gs2', freq, timing, phonemes, words); // console.log('gen score 2', ((freq + timing + phonemes + words * 100)/4).toFixed(2))

      return ((freq + timing + phonemes * 100 + words * 100) / 4).toFixed(2);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "wordMatching", function (raw) {
      console.log(raw);

      if (raw) {
        var interpreted = raw.results.transcripts[0].transcript; // this.setState({transcribeTextTarget: interpreted})

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
      var proc_response = _this.state.procResponse;
      var result_url; // console.log(this.state.transcribeDone)

      if (!_this.state.transcribeDone) {
        axios__WEBPACK_IMPORTED_MODULE_21___default.a.post(transcribe_url, JSON.stringify(proc_response)).then(function (response) {
          // console.log('transcribe res: ', response);
          if (response.data.status === 'COMPLETED') {
            response = response.data;
            console.log('done transcribe!', response);

            _this.setState({
              transcribeDone: true,
              transcribeTextSample: response.content.results.transcripts[0].transcript,
              wordScore: response.word_accuracy.confidence_correct,
              pacingScore: (response.pacing.general_score + response.pacing.word_score) / 2,
              getTranscribeDone: true
            }); // console.log('post call state', this.state)

          }
        });
      }

      setTimeout(_this.postTranscribe, 8000);
      return result_url;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "matchingWords", function (targetWords, sampleWords) {
      // console.log('matching words')
      // console.log(targetWords, sampleWords)
      if (_this.state.transcribeTextSample) {
        var sampleArray = _this.state.transcribeTextSample.split(' ');

        var targetArray = targetWords.split(' '); // console.log(sampleArray, targetArray)

        var intersect = targetArray.filter(function (value) {
          return sampleArray.includes(value);
        }); // console.log(intersect)
        // console.log(intersect.length, targetArray.length)

        if (sampleArray.length > targetArray.length) {
          return intersect.length / sampleArray.length;
        } else {
          return intersect.length / targetArray.length;
        }
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

        var process_url, transcribe_url, test, tar, file, sendObj, stringfied;
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
                // get info from backend and take what we need

                _context.next = 10;
                return axios__WEBPACK_IMPORTED_MODULE_21___default.a.post(process_url, stringfied).then(function (response) {
                  // console.log('result -', response)
                  // console.log('post success - result')
                  var sampleData = response.data.sample_data;
                  var targetData = response.data.target_data;
                  var res = response.data; // this is the key used to transcribe the words the user said

                  _this2.setState({
                    isLoading: false,
                    procResponse: response.data,
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
                    getTranscribeDone: false,
                    postTiming: null,
                    wordScore: null,
                    pacingScore: null
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
      var wordMatching = this.wordMatching(this.state.wordCompare); // generateScore = (freq, timing, phonemes) => {

      var lorroScore = this.generateScore(this.state.freqScore, this.state.ppAccuracyScore, this.state.rawAccuracyScore);
      var compareGraphData = this.getCompareData(this.state.freqScore, this.state.ppAccuracyScore, this.state.rawAccuracyScore, 0);
      var transcribe_link;
      var transcribe_result = null;
      var determineWords = null;

      if (!this.state.transcribeDone) {
        transcribe_link = this.postTranscribe();
      }

      var lorroScoreRedux = null;
      determineWords = this.matchingWords(wordMatching, this.state.transcribeTextSample); // generateScore2 = (freq, timing, phonemes, words) => {

      lorroScoreRedux = this.generateScore2(this.state.freqScore, this.state.ppAccuracyScore, this.state.pacingScore, this.state.wordScore);
      compareGraphData = this.getCompareData(this.state.freqScore, this.state.ppAccuracyScore, this.state.pacingScore, this.state.wordScore); // console.log(transcribe_result, determineWords, lorroScoreRedux)
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
          lineNumber: 372
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Fonts__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }), isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
        elevation: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
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
          lineNumber: 376
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
          lineNumber: 377
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
          lineNumber: 378
        },
        __self: this
      }, " Analyzing Your Speech Sample... "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_11___default.a, {
        style: {
          flexGrow: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
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
          lineNumber: 383
        },
        __self: this
      })))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
        elevation: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
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
          lineNumber: 399
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
          lineNumber: 400
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
          lineNumber: 402
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: scoreCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h2",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
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
          lineNumber: 406
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
          lineNumber: 407
        },
        __self: this
      }, " ", isNaN(lorroScoreRedux) ? "Awaiting word transcription..." : "With word transcription!", " "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: sampleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h2",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, " Frequency Profile "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h4",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, " Fundamental frequencies vs. spoken phoneme "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, " Hover over the chart to see the phoneme spoken and what pitch it was spoken at "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["ResponsiveContainer"], {
        width: "100%",
        aspect: 4.0 / 2.0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
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
          lineNumber: 420
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["XAxis"], {
        dataKey: "phoneme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Label"], {
        value: "Detected Phoneme",
        offset: 10,
        position: "bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
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
          lineNumber: 425
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
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
          lineNumber: 427
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Area"], {
        type: "monotone",
        dataKey: "note",
        stroke: "#8884d8",
        dot: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
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
          lineNumber: 431
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["XAxis"], {
        dataKey: "phoneme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Label"], {
        value: "Detected Phoneme",
        offset: 10,
        position: "bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
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
          lineNumber: 436
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
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
          lineNumber: 438
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Area"], {
        type: "monotone",
        dataKey: "note",
        stroke: "#81C784",
        dot: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
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
          lineNumber: 443
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
          lineNumber: 448
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: scoreCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h3",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, " Sample Breakdown "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
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
          lineNumber: 455
        },
        __self: this
      }, " ", this.state.transcribeTextSample !== null ? this.state.transcribeTextSample : 'Processing...', " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
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
          lineNumber: 457
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
          lineNumber: 458
        },
        __self: this
      }, " Play Sample ")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: targetCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h3",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, " Target Breakdown "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
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
          lineNumber: 471
        },
        __self: this
      }, " ", wordMatching, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
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
          lineNumber: 473
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
          lineNumber: 474
        },
        __self: this
      }, " Play Target "))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: sampleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h2",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, " Lorro Score Breakdown "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, " ", this.state.transcribeTextSample !== null ? 'Complete Lorro score breakdown complete!' : 'Processing word matching accuracy...', " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["ResponsiveContainer"], {
        width: "100%",
        aspect: 4.0 / 2.0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
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
          lineNumber: 492
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["PolarGrid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["PolarAngleAxis"], {
        dataKey: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["PolarRadiusAxis"], {
        domain: [0, 100],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_19__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
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
          lineNumber: 497
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: sampleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h2",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: this
      }, " View Raw Data "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
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
          lineNumber: 508
        },
        __self: this
      }, " Click to open ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
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
          lineNumber: 511
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
          lineNumber: 513
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, " Phonemes "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        style: wrap,
        variant: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
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
          lineNumber: 517
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, " Note Progression "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        style: wrap,
        variant: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
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
          lineNumber: 521
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, " Fundamental Frequencies "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        style: wrap,
        variant: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, " ", this.state.frequencies, " "))))))))))));
    }
  }]);

  return results;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (results);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/results")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=results.js.628b16425741562b4828.hot-update.js.map