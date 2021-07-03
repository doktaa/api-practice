import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';

const PokeEvo = () => {

    const evoData = useSelector((state) => state.evo)
    const axios = require('axios')
    const dispatch = useDispatch()
    const imgStyles = "h-40 inline-block transform hover:scale-110 cursor-pointer"

    const { setPokemon } = bindActionCreators(actionCreators, dispatch)

    const hasPrev = evoData.prevEvo != null
    const hasNext = evoData.nextEvo.length > 0

    console.log('2', evoData)

    async function getPokeData(name) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        setPokemon(response)
    }

    return(
        <table className="w-10/12 mx-auto border-2 border-black">
            <tr>
                {hasPrev && <td>Evolves From</td>}
                {hasNext && <td>Evolves To</td>}
            </tr>
            <tr>
                {hasPrev && <td>
                                <img className={imgStyles} src={evoData.prevEvo.img} onClick={() => {getPokeData(evoData.prevEvo.name)}}></img>
                            </td>}
                {hasNext && <td>
                               {evoData.nextEvo.map(i => <img className={imgStyles} src={i.img} onClick={() => {getPokeData(i.name)}}></img>)}                               
                            </td>}
            </tr>
        </table>              
    )
}

export default PokeEvo