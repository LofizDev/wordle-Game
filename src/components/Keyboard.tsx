import React, { useContext, useEffect, useState } from 'react';
import { Letter } from './Letter';
import { WordleContext } from '../context/WordleContext';
import { WORDS } from './Constants'
export const Keyboard: React.FC = () => {

  const board = useContext(WordleContext).board
  const row = useContext(WordleContext).currentRow
  const [disabled, setDisabled] = useState<boolean>(false)
  const letters: string[] = ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"]
  const onBack = useContext(WordleContext).handleBack
  const position = useContext(WordleContext).position
  const onEnter = useContext(WordleContext).handleIncreaseRow

  const handleBack = (e: any) => {
    onBack()
  }

  let wordSubmit: string = `${board[position - 5]}${board[position - 4]}${board[position - 3]}${board[position - 2]}${board[position - 1]}`

  const onKeyBoard = (e: any) => {
    if (e.key === 'Backspace') onBack()
    if (e.key === 'Enter' && position % 5 === 0 && position !== 0 && !disabled) {
      if (WORDS.includes(wordSubmit)) {
        onEnter()
      } else if (!(WORDS.includes(wordSubmit))) {
        alert('Invalid Word')
      }
    }
  }

  const handleEnter = () => {
    if (WORDS.includes(wordSubmit)) {
      if (position % 5 === 0 && position !== 0 && !disabled) onEnter()
    } else if (!(WORDS.includes(wordSubmit))) {
      alert('Invalid Word')
    }
  }

  useEffect(() => {
    if (row == 1 && board[5] == '' || row == 2 && board[10] == '' || row == 3 && board[15] == '' || row == 4 && board[20] == '' || row == 5 && board[25] == '') {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  },)


  useEffect(() => {
    window.addEventListener("keyup", onKeyBoard);
    return () => window.removeEventListener("keyup", onKeyBoard);
  }, [onKeyBoard]);

  return <div className="keyboard">
    {letters.map((key: string, index: number) => {
      return (
        <div key={index} className='keyboard-wrapper'>
          {index === 2 && <button onClick={handleBack} className='key'>Back</button>}
          {key.split(" ").map((item: string, index: number) => (
            <Letter value={item} key={index} />
          ))}
          {key.slice(-1) === 'm' && <button onClick={handleEnter} className='key'>Enter</button>}
        </div>
      )
    })}
  </div>;
};
