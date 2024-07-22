
import { useState, useEffect } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';

const SpeechRecognizer = () => {
  const [transcript, setTranscript] = useState('');
  const { transcript: speechTranscript } = useSpeechRecognition();

  useEffect(() => {
    setTranscript(speechTranscript);
  }, [speechTranscript]);

  return transcript;
};

export default SpeechRecognizer;