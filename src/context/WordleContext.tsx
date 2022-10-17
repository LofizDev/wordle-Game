import React, { useState, createContext, useEffect } from 'react'

const WordleContext = createContext<any>(null)

interface iProps {
    children: React.ReactNode
}

interface GuesWordTypes {
    value: string,
    guess: string,
    slot: number,
    result: string
}

const WordleProvider = ({ children }: iProps) => {
    const API = 'https://wordle.votee.dev:8000/random'

    const [board, setBoard] = useState<string[]>([
        '', '', '', '', '', '',
        '', '', '', '', '', '',
        '', '', '', '', '', '',
        '', '', '', '', '', '',
        '', '', '', '', '', '',
    ])
    const [isWin, setIsWin] = useState<boolean>(false)
    const [isLose, setIsLose] = useState<boolean>(false)
    const [position, setPosition] = useState<number>(0)
    const [guessWord, setGuessWord] = useState<GuesWordTypes>()
    const [currentRow, setCurrentRow] = useState<number>(0)

    const increasePosition = () => {
        setPosition(position + 1)

    }

    let wordSubmit: string = `${board[position - 5]}${board[position - 4]}${board[position - 3]}${board[position - 2]}${board[position - 1]}`

    // Handle Submit
    const handleIncreaseRow = () => {
        setCurrentRow(currentRow + 1)

        const url = `${API}?guess=${wordSubmit}&seed=12345`;
        fetch(url).then(res => res.json())
            .then(data => setGuessWord(data)
            )
    }


    // Back space
    const handleBack = () => {
        // Avoid back row if the Word has been submited
        if (Math.floor((position - 1) / 5) < currentRow) return
        setPosition(position - 1)
        const newBoard = [...board]
        newBoard[position - 1] = ""
        setBoard(newBoard)
    }

    // Restart
    const handleRestart = () => {
        setIsWin(false)
        setIsLose(!isLose)
        window.location.reload()
    }




    return (
        <WordleContext.Provider value={{
            board, setBoard, position, increasePosition, setIsLose, setIsWin,
            handleBack, currentRow, handleIncreaseRow, guessWord, isLose, isWin, handleRestart
        }}>
            {children}
        </WordleContext.Provider>
    )
}

export { WordleContext, WordleProvider }