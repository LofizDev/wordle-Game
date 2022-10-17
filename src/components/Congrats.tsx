import React, { useContext } from 'react'
import { Fireworks } from '@fireworks-js/react'
import { FacebookShareButton } from "react-share";
import { WordleContext } from '../context/WordleContext';
export const Congrats: React.FC = () => {
    const onRestart = useContext(WordleContext).handleRestart
    return (
        <>
            <Fireworks
                options={{
                    rocketsPoint: {
                        min: 0,
                        max: 100
                    }
                }}
                style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    background: 'white'
                }}
            />
            <div className='congrats-box'>
                <h2>You Win</h2>
                <button onClick={onRestart} className='restart btn'>
                    restart
                </button>
                <h6 className='share-title'>Share on Facebook</h6>
                <FacebookShareButton
                    url={"https://wordle-game-xi.vercel.app/"}
                    hashtag={"#wordle"}
                >
                    <button className='fb-btn btn'>Facebook</button>
                </FacebookShareButton>
            </div>

        </>
    )
}
