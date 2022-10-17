import React, { useContext, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { WordleContext } from '../context/WordleContext'

interface SquareTypes {
    value: string,
    circleIndex: number
}

export const Square: React.FC<SquareTypes> = (props) => {
    const { value, circleIndex } = props

    const [data, setData] = useState([])
    const [merge, setMerge] = useState<any>(null)
    const row = useContext(WordleContext).currentRow
    const setIsLose = useContext(WordleContext).setIsLose
    const setIsWin = useContext(WordleContext).setIsWin
    const guessWord = useContext(WordleContext).guessWord

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
        if (guessWord !== undefined) {
            var newData = guessWord?.map((item: any) => { return { guess: item.guess, value: item.result, } })
            // @ts-ignore
            data.push(newData)
            setMerge(data.flat(1))
            const winner = newData?.every((item: any) => item.value === 'correct')
            if (winner) {
                setIsWin(true)
            } else if (!winner && row >= 6) {
                setIsLose(true)

            }
        }
    }, [guessWord])




    return (
        <motion.div animate={value ? 'focus' : 'unFocus'} variants={animations}>
            <div id={`${merge?.[circleIndex]?.value}`} className='circle'>{value}</div>
        </motion.div>
    )
}
