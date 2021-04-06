//Funtion readOutlould
function Read(abc, i) {
    let ut = new SpeechSynthesisUtterance(abc);
    let synth = window.speechSynthesis;
    let voices = synth.getVoices();
    if (i = 0) {
        ut.voice = voices[4];
    } else { ut.voice = voices[6]; }

    synth.speak(ut);
    // ut.onerror = function (event) {
    //     let tempText = document.getElementById("textCommand").value;
    //     document.getElementById("textCommand").value = tempText + "Speak Api on error!";
    // }
}

export { Read }



