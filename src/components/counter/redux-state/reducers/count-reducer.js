
const initialState = {
    count: 1234
}

const reducer = ( prevState = initialState, action ) => {
    console.log("called from down", action)
    switch (action.type) {
        case "CLEAR": {
            return {
                count: 0
            }
        }
        case "UP":
            return {
                count: prevState.count + 1
            }
        case "DOWN":
            return {
                count: prevState.count - 1
            }
        default:
            return prevState
    }
}

export default reducer
