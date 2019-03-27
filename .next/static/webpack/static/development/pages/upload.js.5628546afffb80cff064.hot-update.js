webpackHotUpdate("static/development/pages/upload.js",{

/***/ "./pages/upload.js":
/*!*************************!*\
  !*** ./pages/upload.js ***!
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/CloudUpload */ "./node_modules/@material-ui/icons/CloudUpload.js");
/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_KeyboardVoice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/KeyboardVoice */ "./node_modules/@material-ui/icons/KeyboardVoice.js");
/* harmony import */ var _material_ui_icons_KeyboardVoice__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardVoice__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/Icon/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/Radio/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_24__);

var _jsxFileName = "/Users/jalen/School/Capstone/Lorro_FE/pages/upload.js";

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
var loadingStyle = {
  textAlign: "center",
  marginTop: '-10',
  backgroundColor: "#e0e0e0",
  height: '100vh'
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
var sampleGroup = {
  textAlign: "center",
  paddingBottom: "50px"
};
var selectCards = {
  magin: '0px 20px 10px 20px',
  borderBottom: '3px solid #03A9F4'
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUpload",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data, res, upload_url, process_url, file_name;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = _this.state.selectedFile; //data.append('sample', this.state.selectedFile)

              console.log(data);
              upload_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/upload";
              process_url = "https://3qub47bp42.execute-api.us-east-2.amazonaws.com/prod/process";
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get(upload_url, {
                headers: {}
              }).then(function (response) {
                console.log(response);
                res = response.data;
                console.log('get success');

                _this.setState({
                  submitted: true
                });
              });

            case 6:
              console.log('res', res);
              file_name = res.split('/')[3].split('?')[0];
              console.log(file_name);

              _this.setState({
                fileName: file_name
              });

              _context.next = 12;
              return axios__WEBPACK_IMPORTED_MODULE_16___default.a.put(res, data).then(function (response) {
                console.log(response);
                console.log('put success');
              });

            case 12:
              // route to the results page
              next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
                pathname: '/results',
                query: {
                  file: _this.state.fileName
                }
              }); // await axios.post(process_url, file_name).then(response => {
              //     console.log(response)
              // })

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleselectedFile", function (event) {
      _this.setState({
        selectedFile: event.target.files[0],
        loaded: 0
      });
    });

    _this.state = _defineProperty({
      selectedFile: null,
      selectedTarget: null,
      loaded: 0,
      loading: false,
      submitted: false,
      fileName: null
    }, "selectedTarget", null);
    return _this;
  }

  _createClass(upload, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var fileUploaded = this.state.selectedFile;
      var isLoading = this.state.loading;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default.a, {
        elevation: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, !this.state.submitted ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        container: true,
        spacing: 24,
        style: pageStyles,
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: 12,
        container: true,
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: 12,
        md: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        variant: "h4",
        style: styles,
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "Step 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        variant: "h5",
        style: styles,
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Select target audio sample"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: 12,
        md: 2,
        style: {
          padding: "0 30px 0 30px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17___default.a, {
        style: selectCards,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        gutterBottom: true,
        variant: "body",
        style: {
          textAlign: 'center',
          fontFamily: 'Lato'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, " Southern "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_24___default.a, {
        checked: this.state.selectedTarget === 'target-sample-JDM1-southern',
        onChange: this.handleChange,
        value: "target-sample-JDM1-southern",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "contained",
        color: "secondary",
        onClick: function onClick() {
          return _this2.playTarget('https://s3.us-east-2.amazonaws.com/lorro/target-sample-JDM1-southern.wav');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
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
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17___default.a, {
        style: selectCards,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        gutterBottom: true,
        variant: "body",
        style: {
          textAlign: 'center',
          fontFamily: 'Lato'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, " Wisconsin "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_24___default.a, {
        checked: this.state.selectedTarget === 'target-sample-DLD0-wisconsin',
        onChange: this.handleChange,
        value: "target-sample-DLD0-wisconsin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "contained",
        color: "secondary",
        onClick: function onClick() {
          return _this2.playTarget('https://s3.us-east-2.amazonaws.com/lorro/target-sample-DLD0-wisconsin.wav');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
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
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17___default.a, {
        style: selectCards,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        gutterBottom: true,
        variant: "body",
        style: {
          textAlign: 'center',
          fontFamily: 'Lato'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, " Western "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_24___default.a, {
        checked: this.state.selectedTarget === 'target-sample-REH0-western',
        onChange: this.handleChange,
        value: "target-sample-REH0-western",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "contained",
        color: "secondary",
        onClick: function onClick() {
          return _this2.playTarget('https://s3.us-east-2.amazonaws.com/lorro/target-sample-REH0-western.wav');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
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
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17___default.a, {
        style: selectCards,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        gutterBottom: true,
        variant: "body",
        style: {
          textAlign: 'center',
          fontFamily: 'Lato'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, " New England "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_24___default.a, {
        checked: this.state.selectedTarget === 'target-sample-VMH0-new-england',
        onChange: this.handleChange,
        value: "target-sample-VMH0-new-england",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "contained",
        color: "secondary",
        onClick: function onClick() {
          return _this2.playTarget('https://s3.us-east-2.amazonaws.com/lorro/target-sample-VMH0-new-england.wav');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, " Play "))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: 12,
        md: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        variant: "h4",
        style: styles,
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "Step 2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        variant: "h5",
        style: styles,
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "Upload your audio sample"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        variant: "body1",
        style: styles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, "Upload an audio recording of you speaking attempting to match a speech sample."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "file",
        accept: ".wav",
        name: "file",
        id: "file",
        class: "inputfile",
        onChange: this.handleselectedFile,
        style: buttonStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        for: "file",
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, " Choose An Audio File")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: 12,
        style: {
          padding: 10,
          margin: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, fileUploaded && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        variant: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, " ", this.state.selectedFile.name, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "contained",
        color: "secondary",
        onClick: this.handleUpload,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, " Upload "))))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        container: true,
        spacing: 24,
        style: loadingStyle,
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
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
          lineNumber: 277
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        variant: "h2",
        gutterBottom: true,
        style: {
          color: 'black',
          fontFamily: 'Merienda',
          fontSize: '7vmax'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, " Uploading Your Speech Sample... "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_23___default.a, {
        style: {
          flexGrow: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      })))));
    }
  }]);

  return upload;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (upload);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/upload")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=upload.js.5628546afffb80cff064.hot-update.js.map