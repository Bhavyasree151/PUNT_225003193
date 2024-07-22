import { SpeechSynthesisUtterance } from 'window';

const synth = window.speechSynthesis;
const utterThis = new SpeechSynthesisUtterance('Hello, world!');
utterThis.voice = synth.getVoices()[0];
utterThis.pitch = 1;
utterThis.rate = 1;

synth.speak(utterThis);