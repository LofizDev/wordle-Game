import React, { useContext, useEffect } from 'react'
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
    const allowToTyping = useContext(WordleContext).isOpenWordModal

    let row = Math.floor(position / 5)

    const chooseLetter = (e: any) => {
        // Allow to next row
        if (allowToTyping) return
        if (row > currentRow) return
        if (position >= 30) return
        if (e.keyCode < 65 || e.keyCode > 90 || e.keyCode == 13) return

        const newBoard = [...board]
        const keyValue = e.key ? e.key : value
        newBoard[position] = keyValue
        setBoard(newBoard)
        incPos()
    }

    useEffect(() => {
        window.addEventListener("keyup", chooseLetter);
        return () => window.removeEventListener("keyup", chooseLetter);
    }, [chooseLetter]);

    return (
        //@ts-ignore
        <button className='key' onClick={chooseLetter}>{value}</button>
    )
}
