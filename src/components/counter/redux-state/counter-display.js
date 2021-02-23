import React from 'react'
import {connect} from "react-redux";

const CounterDisplay = ({theCount = 321}) =>
    <h1>Counter: {theCount}</h1>

const stateToPropertyMapper = (state) => {
    return {
        theCount: state.count
    }
}

export default connect
    (stateToPropertyMapper,
    (dispatch)=>{})
(CounterDisplay)
