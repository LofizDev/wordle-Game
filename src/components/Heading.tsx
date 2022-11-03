import React, { useState, useEffect, useContext } from 'react'
import { WordleContext } from '../context/WordleContext'

export const Heading: React.FC = () => {
    const round = useContext(WordleContext).round
    const setWordMode = useContext(WordleContext).setWordMode
    const [mode, setMode] = useState<string[]>(['Daily', 'Random', 'Word'])
    const [currentMode, setCurentMode] = useState(localStorage.getItem('mode'))

    const wordMode = useContext(WordleContext).wordMode
    const isOpenWordModal = useContext(WordleContext).isOpenWordModal
    const setIsOpenWordModal = useContext(WordleContext).setIsOpenWordModal

    // Set mode
    const handleSetMode = (item: string) => {
        setCurentMode(item)
        localStorage.setItem('mode', item)
        window.location.reload()
    }

    // Word Mode
    useEffect(() => {
        currentMode === 'Word' && setIsOpenWordModal(true)
        localStorage.getItem('round') === null && localStorage.setItem('round', '1')
    }, [currentMode])


    // Submit 
    const handleSubmit = () => {
        if (wordMode.length === 5) {
            localStorage.setItem('word', wordMode)
            setIsOpenWordModal(false)
        } else {
            alert('The length of word must be 5!!')
        }
    }

    useEffect(() => {
        localStorage.getItem('mode') === null && localStorage.setItem('mode', 'Daily')
    }, [])

    return (
        <div className='heading-wrapper'>
            <div className="logo">
                WOR<span className="text-active">D</span>LE
            </div>
            <div className="setting">
                {mode.map((item: string) => (
                    <button className={currentMode === item ? 'mode-active' : 'mode'}
                        onClick={() => handleSetMode(item)}>
                        {item}
                    </button>
                ))}
                {currentMode === 'Random' && (<p className='round'>Round: {round} </p>)}
            </div>
            {isOpenWordModal && (
                <div className='word-modal'>
                    <h2>Word</h2>
                    <br />
                    <input onChange={(e) => setWordMode(e.target.value)} type="Typing the word" />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}

        </div>
    )
}
