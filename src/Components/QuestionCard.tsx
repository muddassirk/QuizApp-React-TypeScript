import React from 'react'
import { questionPropsType } from '../types/quiz_types'
import './QuestionCard.css'

const QuestionCard: React.FC<questionPropsType> = ({ question, options, callback }) => {
    return (
        <div className='container'>
            <div className='ques-container'>
                <div className='head-container'>
                    <h1>Quiz app</h1>
                </div>
                <div>
                    {question}
                </div>
                <form onSubmit={callback}>
                    {
                        options.map((opt: string, ind: number) => {
                            return (
                                <div key={ind}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="option"
                                            value={opt}
                                        />
                                        {opt}
                                    </label>
                                </div>
                            )
                        })
                    }
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default QuestionCard