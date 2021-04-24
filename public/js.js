

/*
* Check for browser support
*/
var supportMsg = document.getElementById('msg');

if ('speechSynthesis' in window) {
    supportMsg.innerHTML = 'Your browser <strong>supports</strong> speech synthesis.';
} else {
    supportMsg.innerHTML = 'Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="https://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.';
    supportMsg.classList.add('not-supported');
}


// Get the 'speak' button
var button = document.getElementById('speak');

// Get the text input element.
var speechMsgInput = document.getElementById('speech-msg');

// Get the voice select element.
var voiceSelect = document.getElementById('voice');

// Get the attribute controls.
var volumeInput = document.getElementById('volume');
var rateInput = document.getElementById('rate');
var pitchInput = document.getElementById('pitch');


// Fetch the list of voices and populate the voice options.
function loadVoices() {
    // Fetch the available voices.
    var voices = speechSynthesis.getVoices();

    // Loop through each of the voices.
    voices.forEach(function (voice, i) {
        // Create a new option element.
        var option = document.createElement('option');

        // Set the options value and text.
        option.value = i;
        option.innerHTML = voice.name;

        // Add the option to the voice selector.
        voiceSelect.appendChild(option);
    });
}

// Execute loadVoices.
loadVoices();

// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function (e) {
    loadVoices();
};


// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
    // Create a new instance of SpeechSynthesisUtterance.
    var msg = new SpeechSynthesisUtterance();

    // Set the text.
    msg.text = text;

    // Set the attributes.
    msg.volume = parseFloat(volumeInput.value);
    msg.rate = parseFloat(rateInput.value);
    msg.pitch = parseFloat(pitchInput.value);

    // If a voice has been selected, find the voice and set the
    // utterance instance's voice attribute.
    var voices = speechSynthesis.getVoices();
    msg.voice = voices[3]
    if (voiceSelect.value) {
        // msg.voice = speechSynthesis.getVoices().filter(function (voice) { return 5 == voiceSelect.value; })[0];
    }

    // Queue this utterance.
    window.speechSynthesis.speak(msg);
}


// Set up an event listener for when the 'speak' button is clicked.
button.addEventListener('click', function (e) {
    if (speechMsgInput.value.length > 0) {
        speak(speechMsgInput.value);
    }
});




var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammar = '#JSGF V1.0;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.continuous = true;
//Them vao :
let IsOn = false;
document.getElementById("Isoff").style.display = "none"
// recognition.start();
if (Date.now() % 2 === 1) {
    document.getElementById('inputCmd').value = "Ứng dụng công nghệ nhận diện giọng nói vào thực hành anh ngữ."
} else { document.getElementById('inputCmd').value = "Lưu ý: Dùng Chrome trên máy tính (laptop) chạy hệ điều hành Window để được trải nghiệm tốt nhất." }

recognition.onresult = function (event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    document.getElementById('inputCmd').value = command;
    document.getElementById('btnSaveMessage').click();

};
recognition.addEventListener('end', function () {
    if (IsOn) {
        recognition.start();
    }
});

recognition.onerror = function (event) {
    document.getElementById('inputCmd').value = "Có lỗi: " + event.error + ".Lưu ý: Chương trình nhận diện giọng nói chưa hỗ trợ trên máy Iphone và Mac's IOS"
}

function _FN_diachiip() {
    $.getJSON('http://ip-api.com/json', function (data) {
        document.getElementById("ID_IP").value = data.query
    });
}

