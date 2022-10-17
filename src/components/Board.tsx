import React, { useContext } from 'react'
import { Square } from './Square'
import { WordleContext } from '../context/WordleContext'
export const Board: React.FC = () => {

    const board = useContext(WordleContext)

    return (
        <div className='board-layout'>
            {board.board.map((value: string, index: number) => (
                <Square key={index} value={value} circleIndex={index} />
            ))}
        </div>
    )
}
