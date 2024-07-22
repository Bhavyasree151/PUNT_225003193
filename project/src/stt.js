import { webkitSpeechRecognition } from 'webkit';

const recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.maxResults = 10;

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  console.log(transcript);
};

recognition.start();