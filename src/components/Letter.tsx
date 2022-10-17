import React, { useContext } from 'react'
// @ts-ignore
import { WordleContext } from '../context/WordleContext'
interface LetterTypes {
    value: string

}
export const Letter: React.FC<LetterTypes> = (props) => {
    const { value } = props
    const board = useContext(WordleContext).board
    const position = useContext(WordleContext).position
    const setBoard = useContext(WordleContext).setBoard
    const currentRow = useContext(WordleContext).currentRow
    const incPos = useContext(WordleContext).increasePosition

    let row = Math.floor(position / 5)

    const chooseLetter = () => {
        // Allow to next row
        if (row > currentRow) return

        if (position >= 30) return
        const newBoard = [...board]
        newBoard[position] = value
        setBoard(newBoard)
        incPos()
    }
    return (
        <button className='key' onClick={chooseLetter}>{value}</button>
    )
}
