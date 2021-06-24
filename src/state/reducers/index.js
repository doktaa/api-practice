import {combineReducers} from 'redux';
import pokemonReducer from './pokemonReducer.js'
import moveReducer from './moveReducer.js'
import imgCntrReducer from './imgCntrReducer.js'

const reducers = combineReducers({
    pokemon: pokemonReducer,
    move: moveReducer,
    imgCntr: imgCntrReducer
})

export default reducers;