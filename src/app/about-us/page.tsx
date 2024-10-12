// src/App.js dskd
import React from 'react';

function App() {
  return (
    <div className="h-screen overflow-hidden absolute w-screen z-[2000]">
      <iframe
        src={`/slide/index.html`} 
        className="absolute top-0 left-0 w-full h-full border-none overflow-hidden"
        title="My Local HTML"
      />
    </div>
  );
}

export default App;
