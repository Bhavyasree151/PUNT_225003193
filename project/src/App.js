import React from 'react';
import './App.css';

import SpeechRecognition from './SpeechRecognition'; // <--- This should work now

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SpeechRecognition />
      </header>
    </div>
  );
}

export default App;