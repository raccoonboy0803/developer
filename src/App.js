import Board from './Board';
import { useState } from 'react'
import Button from './Button';
import './App.css'
import appleLogo from './assets/logo.png'

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {  
  const [myHistory, setMyHistory] = useState([]); 
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum])
    setOtherHistory([...otherHistory, nextOtherNum])
     //spread문법
  }
  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  }

  return (  
    <div className='App'>
      <img className='App-logo' src={appleLogo} alt='주사위게임로고' />
      <h1 className="App-title">주사위게임</h1>
      <div>
        <Button color='blue' onClick={handleRollClick}>던지기</Button>
        <Button color='red' onClick={handleClearClick}>처음부터</Button>
      </div>
      <div className='App-boards'>
        <Board name='나' color='blue' gameHistory={myHistory} />
        <Board name='상대' color='red' gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;
