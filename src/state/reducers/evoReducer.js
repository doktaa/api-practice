const reducer = (state = {prevEvo: null, nextEvo: []}, action) => {
    switch(action.type) {
        case "setEvo":
            return action.payload
        default:
            return state
    }
}

export default reducer;