import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            {
                editing &&
                <textarea
                    onChange={(e) => setWidget({...widget, text: e.target.value})}
                    value={widget.text}
                    className="form-control"></textarea>
            }
            {
                !editing &&
                    <p>
                        {widget.text}
                    </p>
            }
        </div>
    )
}

export default ParagraphWidget