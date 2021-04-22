import React from "react";

const MultipleChoiceQuestion = ({question}) => {
    return(
        <div>
            <h4>{question.question}</h4>
            {question.correct}
            {
                question.choices.map((choice) => {
                    return(
                        <label>
                            <input type="radio" name={question._id}/>
                            {choice}
                        </label>
                    )
                })
            }
        </div>
    )
}

export default MultipleChoiceQuestion;