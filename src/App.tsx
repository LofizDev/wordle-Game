import './App.css';
import { Board } from './components/board/Board';
import { Heading } from './components/heading/Heading';
import { Keyboard } from './components/keyboard/Keyboard';


function App() {
  return (
    <div className="App">
      <Heading />
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
