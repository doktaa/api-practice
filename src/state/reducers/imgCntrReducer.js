const imgCntrReducer = (state = 0, action) => {

    switch(action.type) {
        case "setPokemon":
            return 0
        case "next":
            return state >= action.payload - 1 ? 0 : state + 1
        case "prev":
            return state == 0 ? action.payload - 1 : state - 1
        default:
            return 0
    }
}

export default imgCntrReducer