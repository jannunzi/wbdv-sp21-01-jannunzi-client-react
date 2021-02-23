import React from 'react'

export default class CounterDown extends React.Component{
    render() {
        return(
            <button onClick={this.props.down}>
                Down
            </button>
        )
    }
}
