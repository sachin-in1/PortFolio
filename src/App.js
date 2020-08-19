import React from 'react';
import './App.css';
import Index from './Components/Index'
import ReadingProgress from './Components/ReadProgressBar'
function App() {
  const target = React.createRef();
  return (
    <>
      <ReadingProgress target={target} />
      <div className={`post`} ref={target}>
    <div className="App">
      <header className="App-header">
        <Index>
          
        </Index>
      </header>
    </div></div>
    </>
  );
}

export default App;
