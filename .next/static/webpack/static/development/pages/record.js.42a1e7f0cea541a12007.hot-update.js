webpackHotUpdate("static/development/pages/record.js",{

/***/ "./scripts/record-script.js":
/*!**********************************!*\
  !*** ./scripts/record-script.js ***!
  \**********************************/
/*! exports provided: recording */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recording", function() { return recording; });
// let audioContext =  new (window.AudioContext || window.webkitAudioContext)();
// let recorder = new Recorder(audioContext);
var record = document.querySelector('.record');
var stop = document.querySelector('.stop');
var soundClips = document.querySelector('.sound-clips');
var canvas = document.querySelector('.visualizer');
var mainSection = document.querySelector('.main-controls');
var recording = function recording() {
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

/***/ })

})
//# sourceMappingURL=record.js.42a1e7f0cea541a12007.hot-update.js.map