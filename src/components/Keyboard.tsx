import React, { useContext, useEffect } from 'react';
import { Letter } from './Letter';
import { WordleContext } from '../context/WordleContext';
export const Keyboard: React.FC = () => {

  const letters: string[] = ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"]
  const onBack = useContext(WordleContext).handleBack
  const position = useContext(WordleContext).position
  const onEnter = useContext(WordleContext).handleIncreaseRow

  const handleBack = (e: any) => {
    onBack()
  }

  const handleEnter = (e: any) => {
    if (e.key === 'Enter' && position % 5 === 0 && position !== 0) {
      onEnter()
    }
    if (e.key === 'Backspace') {
      return onBack()
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", handleEnter);
    return () => window.removeEventListener("keyup", handleEnter);
  }, [handleEnter]);

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
