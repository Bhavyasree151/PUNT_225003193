const synth = window.speechSynthesis;
const recognition = new webkitSpeechRecognition();

let voices = [];

// Populate voice list
synth.getVoices().forEach((voice) => {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    document.getElementById("voice-select").appendChild(option);
});

// Text-to-Speech functionality
document.getElementById("speak-btn").addEventListener("click", () => {
    const inputTxt = document.getElementById("tts-input").value;
    const voiceSelect = document.getElementById("voice-select").value;
    const utterThis = new SpeechSynthesisUtterance(inputTxt);
    utterThis.voice = synth.getVoices().find((voice) => voice.name === voiceSelect);
    synth.speak(utterThis);
});

// Speech-to-Text functionality
document.getElementById("start-listening-btn").addEventListener("click", () => {
    recognition.lang = "en-US";
    recognition.maxResults = 10;
    recognition.start();
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("transcript").textContent = transcript;
};