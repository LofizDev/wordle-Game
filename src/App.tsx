import './App.css';
import { useContext } from 'react';
import { Board } from './components/Board';
import { Congrats } from './components/Congrats';
import { Heading } from './components/Heading';
import { Keyboard } from './components/Keyboard';
import { WordleContext } from './context/WordleContext';
import { GameOver } from './components/GameOver';

function App() {
  const isWin = useContext(WordleContext).isWin
  const isLose = useContext(WordleContext).isLose

  return (
    <div className="App">
      <Heading />
      <Board />
      <Keyboard />
      {isWin && (
        <Congrats />
      )}
      {isLose && (
        <GameOver />
      )}
    </div>
  );
}

export default App;
