import React, { useState, createContext, useEffect } from 'react'

const WordleContext = createContext<any>(null)

interface iProps {
    children: React.ReactNode
}

const WordleProvider = ({ children }: iProps) => {
    const [board, setBoard] = useState<string[]>([
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ])
    const [position, setPosition] = useState<number>(0)
    const [guessWord, setGuessWord] = useState('cones')
    const [currentRow, setCurrentRow] = useState<number>(0)

    const increasePosition = () => {
        setPosition(position + 1)
    }

    const handleIncreaseRow = () => {
        setCurrentRow(currentRow + 1)
    }

    const handleBack = () => {
        // Avoid back row if the Word has been submited
        if (Math.floor((position - 1) / 5) < currentRow) return
        setPosition(position - 1)
        const newBoard = [...board]
        newBoard[position - 1] = ""
        setBoard(newBoard)
    }


    // // Correct word
    // useEffect(() => {
    //     fetch('https://wordle.votee.dev:8000/random?guess=theft&seed=1234')
    //         .then(res => res.json())
    //         .then(data => setGuessWord(data.map((item: any) => item.guess)))
    // }, [])



    return (
        <WordleContext.Provider value={{ board, setBoard, position, increasePosition, handleBack, currentRow, handleIncreaseRow, guessWord }}>
            {children}
        </WordleContext.Provider>
    )
}

export { WordleContext, WordleProvider }