import React, { useContext } from 'react'
import { FacebookShareButton } from "react-share";
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
                <h6 className='share-title'>Share on Facebook</h6>
                <FacebookShareButton
                    url={"https://wordle-game-xi.vercel.app/"}
                    hashtag={"#helpme"}
                >
                    <button className='fb-btn btn'>Facebook</button>
                </FacebookShareButton>
            </div>

        </div>
    )
}
