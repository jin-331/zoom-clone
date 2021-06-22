import React from 'react';
import './App.css';
import VideoBody from './VideoBody'

const Path = {
  enter: "/",
  meeting: "/meeting"
};

function App() {
  return (
    <div className="App">
      <VideoBody/>
    </div>
  );
}

export default App;
