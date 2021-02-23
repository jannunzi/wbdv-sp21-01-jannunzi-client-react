import React from 'react'
import CounterDisplay from "./counter-display";
import CounterDown from "./counter-down";
import CounterUp from "./counter-up";
import {createStore} from "redux";
import {Provider} from "react-redux";
import CounterClear from "./counter-clear";
import reducer from "./reducers/count-reducer";

const store = createStore(reducer)

export default class CounterRedux
    extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <CounterDisplay/>
                    <CounterDown/>
                    <CounterUp/>
                    <CounterClear/>
                </div>
            </Provider>
        );
    }
}
