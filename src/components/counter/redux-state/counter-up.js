import React from 'react'
import {connect} from 'react-redux'

const CounterUp = ({increaseCounter}) =>
    <button onClick={increaseCounter}>
        Up
    </button>

const stpm = (state) => {}

const dtpm = (dispatch) => {
    return {
        increaseCounter: () => {
            dispatch({
                type: "UP"
            })
        }
    }
}

export default connect
(stpm, dtpm)
(CounterUp)
