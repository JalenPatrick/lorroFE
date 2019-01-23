function readFile(file, callback){
	var raw_file = new XMLHttpRequest();
	raw_file.overrideMimeType("application/json");
	raw_file.open("get", file, true);
	raw_file.onreadystatechange = function() {
		if (raw_file.readyState == 4 && raw_file.status == "200")
			callback(raw_file.responseText);
	}
	raw_file.send(null);
}

export function start() {
	readFile("/static/images/results/notes.json", run);
	readFile("/static/images/results/text.txt", otherRun1);
	readFile("/static/images/results/phoneme.txt", otherRun2);
}



function otherRun1(file) {
	var body = document.querySelector(".result-2");
	body.innerHTML = file;
}

function otherRun2(file) {
	var body = document.querySelector(".result-3");
	body.innerHTML = file;
}

function run (json) {
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
		document.querySelector(`.note-${ind}`).classList.add("note_bold");
		document.querySelector(`.note-${ind}`).style.fontWeight = "bold";
		document.querySelector(`.note-${ind}`).style.fontSize = "30px";
		last_bold = ind;
	}

	function unbold(ind) {
		if (ind < 0) return;
		document.querySelector(`.note-${ind}`).classList.remove("note_bold");
		document.querySelector(`.note-${ind}`).style.fontWeight = "normal";
		document.querySelector(`.note-${ind}`).style.fontSize = "16px";
	}

	function new_note(ind) {
		if (ind < 1) return true;
		return notesArr[ind -1] != notesArr[ind];
	}

	var body = document.querySelector(".result");
	var button = document.querySelector(".play_button");
	var audio = document.querySelector(".audio");
	var notes = document.createElement('div');
	notes.classList.add("notes");
	notes.style.display = "flex";
	notes.style.flexWrap = "wrap";
	notes.style.justifyContent = "space-around";

	var noteEls
	for (var i = 0; i < notesArr.length; i++) {
		if (new_note(i)) {
			var noteEl = document.createElement("div");
			noteEl.innerHTML = notesArr[i];
			noteEl.classList.add("note");
			noteEl.classList.add(`note-${i}`);
			noteEl.style.textAlign = "center";
			noteEl.style.width = "30px";
			notes.appendChild(noteEl);
		}
	}

	button.addEventListener("click", () => {
		audio.currentTime = 0;
		audio.play();
		play();
	});

	body.appendChild(notes);
}