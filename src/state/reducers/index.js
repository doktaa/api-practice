import {combineReducers} from 'redux';
import pokemonReducer from './pokemonReducer.js'
import moveReducer from './moveReducer.js'
import imgCntrReducer from './imgCntrReducer.js'
import evoReducer from './evoReducer.js'

const reducers = combineReducers({
    pokemon: pokemonReducer,
    move: moveReducer,
    imgCntr: imgCntrReducer,
    evo: evoReducer
})

export default reducers;