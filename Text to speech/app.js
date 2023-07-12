var Speech = new SpeechSynthesisUtterance(); //API call
var btn = document.querySelector("button");
var textArea = document.querySelector("textarea");
var voiceSelect = document.querySelector("select");
var volumeSlider = document.querySelector("#volumeSlider");
var voices = [];

//text to speech
btn.addEventListener(
  "click",
  (spc = () => {
    Speech.text = textArea.value;
    window.speechSynthesis.speak(Speech);
  })
);

//Changing the voices
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  Speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  Speech.voice = voices[voiceSelect.value];
});

volumeSlider.addEventListener("input", () => {
  Speech.volume = volumeSlider.value;
});
