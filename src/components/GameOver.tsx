import React, { useContext } from 'react'
import { WordleContext } from '../context/WordleContext';
export const GameOver: React.FC = () => {
    const onRestart = useContext(WordleContext).handleRestart
    return (
        <div className='loseModal'>
            <div className='congrats-box'>
                <h2 className='lose-title'>You Lose</h2>
                <button onClick={onRestart} className='restart btn'>
                    restart
                </button>
            </div>

        </div>
    )
}
