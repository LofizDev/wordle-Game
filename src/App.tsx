import './App.css';
import { useContext } from 'react';
import { Board } from './components/Board';
import { Congrats } from './components/Congrats';
import { Heading } from './components/Heading';
import { Keyboard } from './components/Keyboard';
import { WordleContext } from './context/WordleContext';


function App() {
  const isWin = useContext(WordleContext).isWin

  return (
    <div className="App">
      <Heading />
      <Board />
      <Keyboard />
      {isWin && (
        <Congrats />
      )}
    </div>
  );
}

export default App;
