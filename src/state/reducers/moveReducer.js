const reducer = (state = null, action) => {
    switch(action.type) {
        case "setSelectedMove":
            return action.payload
        case "closeMove":
            return null
        case "setPokemon": 
            return null;
        default:
            return state
    }
}

export default reducer;