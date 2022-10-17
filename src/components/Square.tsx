import React, { useContext, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { WordleContext } from '../context/WordleContext'

interface SquareTypes {
    value: string,
    circleIndex: number
}

export const Square: React.FC<SquareTypes> = (props) => {
    const { value, circleIndex } = props

    const row = useContext(WordleContext).currentRow
    const position = useContext(WordleContext).position
    const guessWord = useContext(WordleContext).guessWord

    const [wrong, setWrong] = useState<boolean>(false)
    const [almost, setAlmost] = useState<boolean>(false)
    const [correct, setCorrect] = useState<boolean>(false)

    let indexOfLastWord = 4
    let currentPosition =
        position === 5
            ? indexOfLastWord
            : position > 5 && position % 5 === 0
                ? indexOfLastWord
                : (position % 5) - 1



    const animations = {
        focus: () => ({
            scale: [1.2, 1],
            transition: {
                duration: 0.2
            },
        }),
        unFocus: () => ({
            scale: [1.2, 1],
            transition: {
                duration: 0.2
            },
        }),
    }

    useEffect(() => {
        if (guessWord[currentPosition] === value) {
            setCorrect(true)
        } else if (!correct && value !== "" && guessWord.includes(value)) {
            setAlmost(true)
        } else if (!correct && value !== "" && !guessWord.includes(value)) {
            setWrong(true)
        }

        return () => {
            setCorrect(false)
            setAlmost(false)
            setWrong(false)
        }
    }, [value])


    const status: any = Math.floor(circleIndex / 5) < row && (correct ? 'correct' : almost ? 'almost' : wrong ? 'wrong' : '')


    return (
        <motion.div animate={value ? 'focus' : 'unFocus'} variants={animations}>
            <div id={status} className='circle'>{value}</div>
        </motion.div>
    )
}
