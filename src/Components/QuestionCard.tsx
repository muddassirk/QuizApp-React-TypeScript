import React, { useState } from 'react'
import { questionPropsType } from '../types/quiz_types'
import './QuestionCard.css'

const QuestionCard: React.FC<questionPropsType> = ({ question, options, callback }) => {

    const [ selectedAns, setSelectedAnd] = useState('')

    const handleSelectedAns = (ev: any) =>{
        // console.log(ev.target.value);
        setSelectedAnd(ev.target.value)
        
    }


    return (
        <div className='container'>
            <div className='ques-container'>
                <div className='head-container'>
                    <h1>Quiz app</h1>
                </div>
                <h3>
                    {question}
                </h3>
                <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e, selectedAns)}>
                    {
                        options.map((opt: string, ind: number) => {
                            return (
                                <div key={ind}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="option"
                                            value={opt}
                                            required
                                            checked={selectedAns === opt}
                                            onChange={handleSelectedAns}
                                        />
                                        {opt}
                                    </label>
                                </div>
                            )
                        })
                    }
                    <input type="submit" className='submitBtnn' />
                </form>
            </div>
        </div>
    )
}

export default QuestionCard