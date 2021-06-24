export const setPokemon = (pokeData) => {

    console.log('setpokemon', pokeData);

    return (dispatch) => {
        dispatch({
            type: "setPokemon",
            payload: pokeData
        })
    }
}

export const setSelectedMove = (moveData) => {
    return (dispatch) => {
        dispatch({
            type: "setSelectedMove",
            payload: moveData
        })
    }
}

export const closeMove = () => {
    return (dispatch) => {
        dispatch({
            type: "closeMove",
            payload: null
        })
    }
}

export const imgNext = (imgArrLen) => {
    return(dispatch) => {
        dispatch({
            type: "next",
            payload: imgArrLen
        })
    }
}

export const imgPrev = (imgArrLen) => {
    return(dispatch) => {
        dispatch({
            type: "prev",
            payload: imgArrLen
        })
    }
}