import React, { useState, createContext } from 'react'
import { fetchGuessDaily, fetchGuessRandom, fetchGuessWord } from '../api'

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

    const [board, setBoard] = useState<string[]>([
        '', '', '', '', '', '',
        '', '', '', '', '', '',
        '', '', '', '', '', '',
        '', '', '', '', '', '',
        '', '', '', '', '', '',
    ])

    const [wordMode, setWordMode] = useState<string>()
    const [round, setRound] = useState<any>(localStorage.getItem('round') || 1)
    const [isWin, setIsWin] = useState<boolean>(false)
    const [position, setPosition] = useState<number>(0)
    const [isLose, setIsLose] = useState<boolean>(false)
    const [currentRow, setCurrentRow] = useState<number>(0)
    const [guessWord, setGuessWord] = useState<GuesWordTypes>()

    const [isOpenWordModal, setIsOpenWordModal] = useState<boolean>(false)


    const increasePosition = () => {
        setPosition(position + 1)
    }

    let wordSubmit: string = `${board[position - 5]}${board[position - 4]}${board[position - 3]}${board[position - 2]}${board[position - 1]}`

    // Handle Submit
    const handleIncreaseRow = () => {
        setCurrentRow(currentRow + 1)
        switch (localStorage.getItem('mode')) {
            case 'Daily':
                // @ts-ignore
                fetchGuessDaily(wordSubmit).then(res => setGuessWord(res))
                break;
            case 'Random':
                // @ts-ignore
                fetchGuessRandom(wordSubmit, round).then(res => setGuessWord(res))
                break
            case 'Word':
                // @ts-ignore
                fetchGuessWord(wordMode, wordSubmit).then(res => setGuessWord(res))
            default:
                break;
        }
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
        setIsLose(false)
        window.location.reload()
    }


    return (
        <WordleContext.Provider value={{
            board, setBoard, position, increasePosition, setIsLose, setIsWin, setWordMode,
            isOpenWordModal, setIsOpenWordModal, wordMode, round, setRound, wordSubmit,
            handleBack, currentRow, handleIncreaseRow, guessWord, isLose, isWin, handleRestart
        }}>
            {children}
        </WordleContext.Provider>
    )
}

export { WordleContext, WordleProvider }