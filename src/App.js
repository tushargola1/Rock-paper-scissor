import { useState } from 'react';
import Advanced from './Advanced';
import Original from './Original';
import './App.css';
import './GameStart.css';
import './Buttons.css';

const App = () => {
  const [easyMode, setEasyMode] = useState(true);

  return (
    <>
    <div className="App">
      {easyMode ? <Original easyMode={easyMode} setEasyMode={setEasyMode} /> : <Advanced easyMode={easyMode} setEasyMode={setEasyMode} />}
    </div>
    <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/tushargola1?tab=repositories" target='_blank'>Tushar Prajapati</a>.
  </div>
    </>
  );
}

export default App;
