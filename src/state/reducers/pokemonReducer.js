const reducer = (state = null, action) => {
    switch(action.type) {
        case "setPokemon":
            return {isLoaded: action.payload.isLoaded, data: action.payload.data}
        default:
            return state
    }
}

export default reducer;