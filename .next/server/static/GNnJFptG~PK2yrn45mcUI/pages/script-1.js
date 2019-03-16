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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
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

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ })

/******/ });