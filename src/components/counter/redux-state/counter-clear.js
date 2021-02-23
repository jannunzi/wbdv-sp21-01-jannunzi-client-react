import React from 'react'
import {connect} from 'react-redux'

const CounterClear = ({clearTheCounter}) =>
    <button onClick={clearTheCounter}>
        Clear
    </button>

const stpm = (state) => {}

const dtpm = (dispatch) => ({
    clearTheCounter: () => dispatch({type: "CLEAR"})
})

export default connect
(stpm, dtpm)
(CounterClear)
