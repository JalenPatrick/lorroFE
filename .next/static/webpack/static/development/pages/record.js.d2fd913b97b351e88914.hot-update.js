webpackHotUpdate("static/development/pages/record.js",{

/***/ "./node_modules/audio-resampler/lib/resampler.js":
/*!*******************************************************!*\
  !*** ./node_modules/audio-resampler/lib/resampler.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WebAudioLoader = __webpack_require__(/*! webaudioloader */ "./node_modules/webaudioloader/lib/webaudioloader.js");
var WavEncoder = __webpack_require__(/*! wav-encoder */ "./node_modules/wav-encoder/lib/index.js");

// WebAudio Shim.
window.OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
window.AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext = new AudioContext();

var wal = new WebAudioLoader({
    context: audioContext,
    cache: false
});

function resampler(input, targetSampleRate, oncomplete) {

    if (!input && !targetSampleRate) {
        return returnError('Error: First argument should be either a File, URL or AudioBuffer');
    }

    var inputType = Object.prototype.toString.call(input);
    if (inputType !== '[object String]' &&
        inputType !== '[object File]' &&
        inputType !== '[object AudioBuffer]' &&
        inputType !== '[object Object]') {
        return returnError('Error: First argument should be either a File, URL or AudioBuffer');
    }

    if (typeof targetSampleRate !== 'number' ||
        targetSampleRate > 192000 || targetSampleRate < 3000) {
        return returnError('Error: Second argument should be a numeric sample rate between 3000 and 192000');
    }

    if (inputType === '[object String]' || inputType === '[object File]') {
        console.log('Loading/decoding input', input);
        wal.load(input, {
            onload: function(err, audioBuffer) {
                if (err) {
                    return returnError(err);
                }
                resampleAudioBuffer(audioBuffer);
            }
        });
    } else if (inputType === '[object AudioBuffer]') {
        resampleAudioBuffer(input);
    } else if (inputType === '[object Object]' && input.leftBuffer && input.sampleRate) {
        var numCh_ = input.rightBuffer ? 2 : 1;
        var audioBuffer_ = audioContext.createBuffer(numCh_, input.leftBuffer.length, input.sampleRate);
        resampleAudioBuffer(audioBuffer_);
    } else {
        return returnError('Error: Unknown input type');
    }

    function returnError(errMsg) {
        console.error(errMsg);
        if (typeof oncomplete === 'function') {
            oncomplete(new Error(errMsg));
        }
        return;
    }

    function resampleAudioBuffer(audioBuffer) {


        var numCh_ = audioBuffer.numberOfChannels;
        var numFrames_ = audioBuffer.length * targetSampleRate / audioBuffer.sampleRate;

        var offlineContext_ = new OfflineAudioContext(numCh_, numFrames_, targetSampleRate);
        var bufferSource_ = offlineContext_.createBufferSource();
        bufferSource_.buffer = audioBuffer;

        offlineContext_.oncomplete = function(event) {
            var resampeledBuffer = event.renderedBuffer;
            console.log('Done Rendering');
            if (typeof oncomplete === 'function') {
                oncomplete({
                    getAudioBuffer: function() {
                        return resampeledBuffer;
                    },
                    getFile: function(fileCallback) {
                        var audioData = {
                            sampleRate: resampeledBuffer.sampleRate,
                            channelData: []
                        };
                        for (var i = 0; i < resampeledBuffer.numberOfChannels; i++) {
                            audioData.channelData[i] = resampeledBuffer.getChannelData(i);
                        }
                        WavEncoder.encode(audioData).then(function(buffer) {
                            var blob = new Blob([buffer], {
                                type: "audio/wav"
                            });
                            fileCallback(URL.createObjectURL(blob));
                        });
                    }
                });
            }
        };

        console.log('Starting Offline Rendering');
        bufferSource_.connect(offlineContext_.destination);
        bufferSource_.start(0);
        offlineContext_.startRendering();
    }
}


module.exports = resampler;


/***/ }),

/***/ "./node_modules/wav-encoder/lib/encoder-worker.js":
/*!********************************************************!*\
  !*** ./node_modules/wav-encoder/lib/encoder-worker.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* jshint esnext: false */

/**
  CAUTION!!!!
  This file is used in WebWorker.
  So, must write with ES5, not use ES6.
  You need attention not to be traspiled by babel.
*/

var self = {};

function encoder() {
  self.onmessage = function (e) {
    switch (e.data.type) {
      case "encode":
        self.encode(e.data.audioData, e.data.format).then(function (buffer) {
          var data = {
            type: "encoded",
            callbackId: e.data.callbackId,
            buffer: buffer
          };
          self.postMessage(data, [buffer]);
        }, function (err) {
          var data = {
            type: "error",
            callbackId: e.data.callbackId,
            message: err.message
          };
          self.postMessage(data);
        });
        break;
    }
  };

  self.encode = function (audioData, format) {
    format.floatingPoint = !!format.floatingPoint;
    format.bitDepth = format.bitDepth | 0 || 16;

    return new Promise(function (resolve) {
      var numberOfChannels = audioData.numberOfChannels;
      var sampleRate = audioData.sampleRate;
      var bytes = format.bitDepth >> 3;
      var length = audioData.length * numberOfChannels * bytes;
      var writer = new BufferWriter(44 + length);

      writer.writeString("RIFF"); // RIFF header
      writer.writeUint32(writer.length - 8); // file length
      writer.writeString("WAVE"); // RIFF Type

      writer.writeString("fmt "); // format chunk identifier
      writer.writeUint32(16); // format chunk length
      writer.writeUint16(format.floatingPoint ? 3 : 1); // format (PCM)
      writer.writeUint16(numberOfChannels); // number of channels
      writer.writeUint32(sampleRate); // sample rate
      writer.writeUint32(sampleRate * numberOfChannels * bytes); // byte rate
      writer.writeUint16(numberOfChannels * bytes); // block size
      writer.writeUint16(format.bitDepth); // bits per sample

      writer.writeString("data"); // data chunk identifier
      writer.writeUint32(length); // data chunk length

      var channelData = audioData.buffers.map(function (buffer) {
        return new Float32Array(buffer);
      });

      writer.writePCM(channelData, format);

      resolve(writer.toArrayBuffer());
    });
  };

  function BufferWriter(length) {
    this.buffer = new ArrayBuffer(length);
    this.view = new DataView(this.buffer);
    this.length = length;
    this.pos = 0;
  }

  BufferWriter.prototype.writeUint8 = function (data) {
    this.view.setUint8(this.pos, data);
    this.pos += 1;
  };

  BufferWriter.prototype.writeUint16 = function (data) {
    this.view.setUint16(this.pos, data, true);
    this.pos += 2;
  };

  BufferWriter.prototype.writeUint32 = function (data) {
    this.view.setUint32(this.pos, data, true);
    this.pos += 4;
  };

  BufferWriter.prototype.writeString = function (data) {
    for (var i = 0; i < data.length; i++) {
      this.writeUint8(data.charCodeAt(i));
    }
  };

  BufferWriter.prototype.writePCM8 = function (x) {
    x = Math.max(-128, Math.min(x * 128, 127)) | 0;
    this.view.setInt8(this.pos, x);
    this.pos += 1;
  };

  BufferWriter.prototype.writePCM16 = function (x) {
    x = Math.max(-32768, Math.min(x * 32768, 32767)) | 0;
    this.view.setInt16(this.pos, x, true);
    this.pos += 2;
  };

  BufferWriter.prototype.writePCM24 = function (x) {
    x = Math.max(-8388608, Math.min(x * 8388608, 8388607)) | 0;
    this.view.setUint8(this.pos + 0, x >> 0 & 255);
    this.view.setUint8(this.pos + 1, x >> 8 & 255);
    this.view.setUint8(this.pos + 2, x >> 16 & 255);
    this.pos += 3;
  };

  BufferWriter.prototype.writePCM32 = function (x) {
    x = Math.max(-2147483648, Math.min(x * 2147483648, 2147483647)) | 0;
    this.view.setInt32(this.pos, x, true);
    this.pos += 4;
  };

  BufferWriter.prototype.writePCM32F = function (x) {
    this.view.setFloat32(this.pos, x, true);
    this.pos += 4;
  };

  BufferWriter.prototype.writePCM64F = function (x) {
    this.view.setFloat64(this.pos, x, true);
    this.pos += 8;
  };

  BufferWriter.prototype.writePCM = function (channelData, format) {
    var length = channelData[0].length;
    var numberOfChannels = channelData.length;
    var method = "writePCM" + format.bitDepth;

    if (format.floatingPoint) {
      method += "F";
    }

    if (!this[method]) {
      throw new Error("not suppoerted bit depth " + format.bitDepth);
    }

    for (var i = 0; i < length; i++) {
      for (var ch = 0; ch < numberOfChannels; ch++) {
        this[method](channelData[ch][i]);
      }
    }
  };

  BufferWriter.prototype.toArrayBuffer = function () {
    return this.buffer;
  };

  self.BufferWriter = BufferWriter;
}

encoder.self = encoder.util = self;

module.exports = encoder;

/***/ }),

/***/ "./node_modules/wav-encoder/lib/encoder.js":
/*!*************************************************!*\
  !*** ./node_modules/wav-encoder/lib/encoder.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

"use stirct";

var InlineWorker = _interopRequire(__webpack_require__(/*! inline-worker */ "./node_modules/wav-encoder/node_modules/inline-worker/lib/index.js"));

var encoder = _interopRequire(__webpack_require__(/*! ./encoder-worker */ "./node_modules/wav-encoder/lib/encoder-worker.js"));

var Encoder = (function () {
  function Encoder() {
    var _this = this;

    var format = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Encoder);

    this.format = {
      floatingPoint: !!format.floatingPoint,
      bitDepth: format.bitDepth | 0 || 16 };
    this._worker = new InlineWorker(encoder, encoder.self);
    this._worker.onmessage = function (e) {
      var callback = _this._callbacks[e.data.callbackId];

      if (callback) {
        if (e.data.type === "encoded") {
          callback.resolve(e.data.buffer);
        } else {
          callback.reject(new Error(e.data.message));
        }
      }

      _this._callbacks[e.data.callbackId] = null;
    };
    this._callbacks = [];
  }

  _createClass(Encoder, {
    canProcess: {
      value: function canProcess(format) {
        return Encoder.canProcess(format);
      }
    },
    encode: {
      value: function encode(audioData, format) {
        var _this = this;

        if (format == null || typeof format !== "object") {
          format = this.format;
        }
        return new Promise(function (resolve, reject) {
          var callbackId = _this._callbacks.length;

          _this._callbacks.push({ resolve: resolve, reject: reject });

          var numberOfChannels = audioData.channelData.length;
          var length = audioData.channelData[0].length;
          var sampleRate = audioData.sampleRate;
          var buffers = audioData.channelData.map(function (data) {
            return data.buffer;
          });

          audioData = { numberOfChannels: numberOfChannels, length: length, sampleRate: sampleRate, buffers: buffers };

          _this._worker.postMessage({
            type: "encode", audioData: audioData, format: format, callbackId: callbackId
          }, audioData.buffers);
        });
      }
    }
  }, {
    canProcess: {
      value: function canProcess(format) {
        if (format && (format === "wav" || format.type === "wav")) {
          return "maybe";
        }
        return "";
      }
    },
    encode: {
      value: function encode(audioData, format) {
        return new Encoder(format).encode(audioData);
      }
    }
  });

  return Encoder;
})();

module.exports = Encoder;

/***/ }),

/***/ "./node_modules/wav-encoder/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/wav-encoder/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Encoder = _interopRequire(__webpack_require__(/*! ./encoder */ "./node_modules/wav-encoder/lib/encoder.js"));

module.exports = Encoder;

/***/ }),

/***/ "./node_modules/wav-encoder/node_modules/inline-worker/lib/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/wav-encoder/node_modules/inline-worker/lib/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./inline-worker */ "./node_modules/wav-encoder/node_modules/inline-worker/lib/inline-worker.js");

/***/ }),

/***/ "./node_modules/wav-encoder/node_modules/inline-worker/lib/inline-worker.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/wav-encoder/node_modules/inline-worker/lib/inline-worker.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var WORKER_ENABLED = !!(global === global.window && global.URL && global.Blob && global.Worker);

var InlineWorker = (function () {
  function InlineWorker(func, self) {
    var _this = this;

    _classCallCheck(this, InlineWorker);

    if (WORKER_ENABLED) {
      var functionBody = func.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1];
      var url = global.URL.createObjectURL(new global.Blob([functionBody], { type: "text/javascript" }));

      return new global.Worker(url);
    }

    this.self = self;
    this.self.postMessage = function (data) {
      setTimeout(function () {
        _this.onmessage({ data: data });
      }, 0);
    };

    setTimeout(function () {
      func.call(self);
    }, 0);
  }

  _createClass(InlineWorker, {
    postMessage: {
      value: function postMessage(data) {
        var _this = this;

        setTimeout(function () {
          _this.self.onmessage({ data: data });
        }, 0);
      }
    }
  });

  return InlineWorker;
})();

module.exports = InlineWorker;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webaudioloader/lib/webaudioloader.js":
/*!***********************************************************!*\
  !*** ./node_modules/webaudioloader/lib/webaudioloader.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	constructor
	var wal = new WebAudioLoader({cache : false, maxCacheSize : 1000, onload: function(){}, onprogress: function(){}, context : audioContext })
 */
function WebAudioLoader (options){

	if ( !( this instanceof WebAudioLoader ) ) {
		throw new TypeError( "WebAudioLoader constructor cannot be called as a function." );
	}

	window.AudioContext = window.AudioContext || window.webkitAudioContext;

	// Singleton using a global reference.
	if (window.webAudioLoader){
		return window.webAudioLoader;
	}

		// setup cache object
	this._cachedAudio = null;

	// Define default local properties
	this.cache = true;
	this.onload = null;
	this.onprogress = null;
	Object.defineProperty(this,'maxCacheSize', {
		enumerable: true,
		configurable: false,
		set : function (maxSize){
			if (this._cachedAudio){
				this._cachedAudio.max = maxSize;
			}
		},
		get : function (){
			return this._cachedAudio.max;
		}
	});

	// Options parsing.
	options = options || {};
	for (var opt in options){
		if (this.hasOwnProperty(opt) && options[opt] !== undefined){
			this[opt] = options[opt];
		}
	}
	this.context = options.audioContext || new AudioContext();

	// Setup Cache
	var cacheOptions = {
		max: options.maxCacheSize || 1000,
		length: function(audioBuffer){
			return (audioBuffer.length*audioBuffer.numberOfChannels*4)/1000;
		}
	};
	this._cachedAudio = __webpack_require__(/*! lru-cache */ "./node_modules/webaudioloader/node_modules/lru-cache/lib/lru-cache.js")(cacheOptions);


	// Resgiter as global
	window.webAudioLoader = this;

	// Helper functions
	this._loadURLOrFile = function (URL, onprogress, onload){
		var urlType = Object.prototype.toString.call( URL );
		var request = null;
		if (urlType === '[object String]'){
			request = new XMLHttpRequest();
			request.open('GET', URL, true);
			request.responseType = 'arraybuffer';
		}
		else if (urlType === '[object File]' || urlType === '[object Blob]' ){
			request = new FileReader();
		}else{
			return;
		}

		request.onload = function () {
			if (urlType === '[object String]' && request.status === 200){
				if (typeof onload === 'function'){
					onload(null, request.response);
				}
			}else if (urlType === '[object File]' || urlType === '[object Blob]'){
				if (typeof onload === 'function'){
						onload(null, request.result);
				}
			}else{
				if (typeof onload === 'function'){
					onload(new Error("Loading Error"), null);
				}
			}
		};
		request.onerror = function(){
			if (typeof onload === 'function'){
				onload(new Error("Loading Error"), null);
			}
		};
		request.onprogress = function(event){
			if (typeof onprogress === 'function'){
				onprogress(event);
			}

			if (typeof this.onprogress === 'function'){
				this.onprogress(event);
			}
		}.bind(this);

		if (urlType === '[object String]'){
			request.send();
		}else if (urlType === '[object File]' || urlType === '[object Blob]' ){
			request.readAsArrayBuffer( URL );
		}

	};
}
/*
	load method.
	wal.load('http://www.example.com/audio.mp3');
	wal.load([object File]);
	wal.load('http://www.example.com/audio.mp3', {decode: false,cache : false , onload: function(){}, onprogress: function(){}});
 */
WebAudioLoader.prototype.load = function (source, options){

	var decode =  true;
	var thisLoadCache = true;

	if (!options) {
		options = {};
	}
	var thisLoadOnload = options.onload || null;
	var thisLoadOnprogress = options.onprogress || null;
	// var startPoint = options.startPoint || 0;
	// var endPoint = options.endPoint || 0;


	if (options.cache !== null && options.cache !== undefined){
		thisLoadCache = options.cache;
	}else{
		thisLoadCache = this.cache;
	}

	if (options.decode !== null && options.decode !== undefined){
		decode = options.decode;
	}

	var onLoadProxy = function (err,audioBuffer){
		if(typeof thisLoadOnload === 'function'){
			thisLoadOnload(err,audioBuffer);
		}
		if (typeof this.onload === 'function'){
			this.onload(err,audioBuffer);
		}
	}.bind(this);

	if (this.cache && thisLoadCache){
		var testCache = this._cachedAudio.get(source);
		if (testCache){
			onLoadProxy(null, testCache);
			return;
		}
	}

	this._loadURLOrFile(source, thisLoadOnprogress, function (err, arrayBuffer){
		if(err || !decode){
			onLoadProxy(err,arrayBuffer);
		}else{
			this.context.decodeAudioData(arrayBuffer, function(audioBuffer){
				if (thisLoadCache){
					this._cachedAudio.set(source,audioBuffer);
				}
				onLoadProxy(err,audioBuffer);
			}.bind(this), function(){
				onLoadProxy(new Error("Decoding Error"),null);
			}.bind(this));
		}
	}.bind(this));
};

/*
	flushCache method
	Resets and empties the cache.
 */
WebAudioLoader.prototype.flushCache = function (){
	this._cachedAudio.reset();
};

module.exports = WebAudioLoader;


/***/ }),

/***/ "./node_modules/webaudioloader/node_modules/lru-cache/lib/lru-cache.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/webaudioloader/node_modules/lru-cache/lib/lru-cache.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;(function () { // closure for web browsers

if (typeof module === 'object' && module.exports) {
  module.exports = LRUCache
} else {
  // just set the global for non-node platforms.
  this.LRUCache = LRUCache
}

function hOP (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function naiveLength () { return 1 }

var didTypeWarning = false
function typeCheckKey(key) {
  if (!didTypeWarning && typeof key !== 'string' && typeof key !== 'number') {
    didTypeWarning = true
    console.error(new TypeError("LRU: key must be a string or number. Almost certainly a bug! " + typeof key).stack)
  }
}

function LRUCache (options) {
  if (!(this instanceof LRUCache))
    return new LRUCache(options)

  if (typeof options === 'number')
    options = { max: options }

  if (!options)
    options = {}

  this._max = options.max
  // Kind of weird to have a default max of Infinity, but oh well.
  if (!this._max || !(typeof this._max === "number") || this._max <= 0 )
    this._max = Infinity

  this._lengthCalculator = options.length || naiveLength
  if (typeof this._lengthCalculator !== "function")
    this._lengthCalculator = naiveLength

  this._allowStale = options.stale || false
  this._maxAge = options.maxAge || null
  this._dispose = options.dispose
  this.reset()
}

// resize the cache when the max changes.
Object.defineProperty(LRUCache.prototype, "max",
  { set : function (mL) {
      if (!mL || !(typeof mL === "number") || mL <= 0 ) mL = Infinity
      this._max = mL
      if (this._length > this._max) trim(this)
    }
  , get : function () { return this._max }
  , enumerable : true
  })

// resize the cache when the lengthCalculator changes.
Object.defineProperty(LRUCache.prototype, "lengthCalculator",
  { set : function (lC) {
      if (typeof lC !== "function") {
        this._lengthCalculator = naiveLength
        this._length = this._itemCount
        for (var key in this._cache) {
          this._cache[key].length = 1
        }
      } else {
        this._lengthCalculator = lC
        this._length = 0
        for (var key in this._cache) {
          this._cache[key].length = this._lengthCalculator(this._cache[key].value)
          this._length += this._cache[key].length
        }
      }

      if (this._length > this._max) trim(this)
    }
  , get : function () { return this._lengthCalculator }
  , enumerable : true
  })

Object.defineProperty(LRUCache.prototype, "length",
  { get : function () { return this._length }
  , enumerable : true
  })


Object.defineProperty(LRUCache.prototype, "itemCount",
  { get : function () { return this._itemCount }
  , enumerable : true
  })

LRUCache.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  var i = 0
  var itemCount = this._itemCount

  for (var k = this._mru - 1; k >= 0 && i < itemCount; k--) if (this._lruList[k]) {
    i++
    var hit = this._lruList[k]
    if (isStale(this, hit)) {
      del(this, hit)
      if (!this._allowStale) hit = undefined
    }
    if (hit) {
      fn.call(thisp, hit.value, hit.key, this)
    }
  }
}

LRUCache.prototype.keys = function () {
  var keys = new Array(this._itemCount)
  var i = 0
  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    keys[i++] = hit.key
  }
  return keys
}

LRUCache.prototype.values = function () {
  var values = new Array(this._itemCount)
  var i = 0
  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    values[i++] = hit.value
  }
  return values
}

LRUCache.prototype.reset = function () {
  if (this._dispose && this._cache) {
    for (var k in this._cache) {
      this._dispose(k, this._cache[k].value)
    }
  }

  this._cache = Object.create(null) // hash of items by key
  this._lruList = Object.create(null) // list of items in order of use recency
  this._mru = 0 // most recently used
  this._lru = 0 // least recently used
  this._length = 0 // number of items in the list
  this._itemCount = 0
}

LRUCache.prototype.dump = function () {
  var arr = []
  var i = 0

  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    if (!isStale(this, hit)) {
      //Do not store staled hits
      ++i
      arr.push({
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      });
    }
  }
  //arr has the most read first
  return arr
}

LRUCache.prototype.dumpLru = function () {
  return this._lruList
}

LRUCache.prototype.set = function (key, value, maxAge) {
  maxAge = maxAge || this._maxAge
  typeCheckKey(key)

  var now = maxAge ? Date.now() : 0
  var len = this._lengthCalculator(value)

  if (hOP(this._cache, key)) {
    if (len > this._max) {
      del(this, this._cache[key])
      return false
    }
    // dispose of the old one before overwriting
    if (this._dispose)
      this._dispose(key, this._cache[key].value)

    this._cache[key].now = now
    this._cache[key].maxAge = maxAge
    this._cache[key].value = value
    this._length += (len - this._cache[key].length)
    this._cache[key].length = len
    this.get(key)

    if (this._length > this._max)
      trim(this)

    return true
  }

  var hit = new Entry(key, value, this._mru++, len, now, maxAge)

  // oversized objects fall out of cache automatically.
  if (hit.length > this._max) {
    if (this._dispose) this._dispose(key, value)
    return false
  }

  this._length += hit.length
  this._lruList[hit.lu] = this._cache[key] = hit
  this._itemCount ++

  if (this._length > this._max)
    trim(this)

  return true
}

LRUCache.prototype.has = function (key) {
  typeCheckKey(key)
  if (!hOP(this._cache, key)) return false
  var hit = this._cache[key]
  if (isStale(this, hit)) {
    return false
  }
  return true
}

LRUCache.prototype.get = function (key) {
  typeCheckKey(key)
  return get(this, key, true)
}

LRUCache.prototype.peek = function (key) {
  typeCheckKey(key)
  return get(this, key, false)
}

LRUCache.prototype.pop = function () {
  var hit = this._lruList[this._lru]
  del(this, hit)
  return hit || null
}

LRUCache.prototype.del = function (key) {
  typeCheckKey(key)
  del(this, this._cache[key])
}

LRUCache.prototype.load = function (arr) {
  //reset the cache
  this.reset();

  var now = Date.now()
  //A previous serialized cache has the most recent items first
  for (var l = arr.length - 1; l >= 0; l-- ) {
    var hit = arr[l]
    typeCheckKey(hit.k)
    var expiresAt = hit.e || 0
    if (expiresAt === 0) {
      //the item was created without expiration in a non aged cache
      this.set(hit.k, hit.v)
    } else {
      var maxAge = expiresAt - now
      //dont add already expired items
      if (maxAge > 0) this.set(hit.k, hit.v, maxAge)
    }
  }
}

function get (self, key, doUse) {
  typeCheckKey(key)
  var hit = self._cache[key]
  if (hit) {
    if (isStale(self, hit)) {
      del(self, hit)
      if (!self._allowStale) hit = undefined
    } else {
      if (doUse) use(self, hit)
    }
    if (hit) hit = hit.value
  }
  return hit
}

function isStale(self, hit) {
  if (!hit || (!hit.maxAge && !self._maxAge)) return false
  var stale = false;
  var diff = Date.now() - hit.now
  if (hit.maxAge) {
    stale = diff > hit.maxAge
  } else {
    stale = self._maxAge && (diff > self._maxAge)
  }
  return stale;
}

function use (self, hit) {
  shiftLU(self, hit)
  hit.lu = self._mru ++
  self._lruList[hit.lu] = hit
}

function trim (self) {
  while (self._lru < self._mru && self._length > self._max)
    del(self, self._lruList[self._lru])
}

function shiftLU (self, hit) {
  delete self._lruList[ hit.lu ]
  while (self._lru < self._mru && !self._lruList[self._lru]) self._lru ++
}

function del (self, hit) {
  if (hit) {
    if (self._dispose) self._dispose(hit.key, hit.value)
    self._length -= hit.length
    self._itemCount --
    delete self._cache[ hit.key ]
    shiftLU(self, hit)
  }
}

// classy, since V8 prefers predictable objects.
function Entry (key, value, lu, length, now, maxAge) {
  this.key = key
  this.value = value
  this.lu = lu
  this.length = length
  this.now = now
  if (maxAge) this.maxAge = maxAge
}

})()


/***/ }),

/***/ "./pages/record.js":
/*!*************************!*\
  !*** ./pages/record.js ***!
  \*************************/
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
var _jsxFileName = "/Users/jalen/School/Capstone/Lorro_FE/pages/record.js";

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


















resampler = __webpack_require__(/*! audio-resampler */ "./node_modules/audio-resampler/lib/resampler.js");
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
var stream, audioContext, audioCtx, mediaRecorder, audioURL;
var chunks = [];

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

      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      console.log(audioContext);
      mediaRecorder.start();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "recordStop", function () {
      mediaRecorder.stop();

      _this.setState({
        completedRecording: true
      });

      _this.setState({
        recording: false
      });

      console.log('recorder on stop', mediaRecorder);
      console.log('audio context on stop', audioContext);

      mediaRecorder.ondataavailable = function (e) {
        chunks.push(e.data);
        blob = new Blob(chunks);
        console.log(blob);
        audioURL = window.URL.createObjectURL(blob);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "recordPlay", function () {
      var a = new Audio(audioURL);
      a.play();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitRecording", function () {
      alert('sending the recording to the server');
      var data = new FormData();
      data.append('sample', _this.state.selectedFile); //send data to endpoint via axios

      axios__WEBPACK_IMPORTED_MODULE_13___default.a.post("http://localhost:8080/voicecompare", data).then(function (res) {
        console.log(res.statusText);
        console.log(res);
      }).then(function () {
        document.location.href = "/results";
      });
      Object(file_saver__WEBPACK_IMPORTED_MODULE_16__["saveAs"])(audioURL, "recoding.wav");
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
        audio: {
          sampleRate: 44100,
          channelCount: 2,
          sampleSize: 16
        }
      };
      navigator.mediaDevices.getUserMedia(cons).then(function (stream) {
        mediaRecorder = new MediaRecorder(stream);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.appIsMounted) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
          elevation: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          container: true,
          spacing: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 12,
          style: group,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
          variant: "h1",
          component: "h3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, "Record"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
          variant: "h5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
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
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
          style: buttonStyle,
          variant: "contained",
          color: "primary",
          onClick: this.recordStart,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
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
            lineNumber: 150
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
            lineNumber: 157
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
            lineNumber: 165
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
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
            lineNumber: 167
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/record")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=record.js.d2fd913b97b351e88914.hot-update.js.map