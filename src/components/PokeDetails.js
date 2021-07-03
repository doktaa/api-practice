import typeObj from '../objects/pokeTypes'
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux'
import {actionCreators} from '../state/index'
import PokeEvo from './PokeEvo'

const PokeDetails = () => {

    const pokeData = useSelector((state) => state.pokemon)

    const dispatch = useDispatch()

    const {setEvo} = bindActionCreators(actionCreators, dispatch)
    

    const statsArr = pokeData.data.stats;
    const types = typeObj;

    const typeListUrl = []

    pokeData.data.types.forEach(pokeType => {
        console.log('poketype', pokeType.type.name)
        console.log('uwu', types.filter(t => t.code === pokeType.type.name))
        
        types.filter(t => t.code === pokeType.type.name).map(i => {typeListUrl.push({url: i.url, code: i.code})})
    })

    console.log('typelisturl', typeListUrl)

    // evolutioin details

    let evo = {prevEvo: null, nextEvo: []}
    const axios = require('axios')

    async function getNextEvo(url) {
        const response = await axios.get(url);
        let curSpecies = response.data.chain

        getEvoChain(curSpecies); //populate next evolution array
    
        //populate image for next evo
        await getNextEvoImg()

        console.log(evo)
        setEvo(evo)
    }

    async function getNextEvoImg() {
        

        for(let i = 0; i < evo.nextEvo.length ; i++) {

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evo.nextEvo[i].name}`)

            console.log('repsonse testing', response)

            response != null && (evo.nextEvo[i].img = response.data.sprites.other["official-artwork"]["front_default"])
        }
    }

    function getEvoChain(curSpecies) {

        if(curSpecies.species.name === pokeData.data.species.name) {
            evo.nextEvo = curSpecies.evolves_to.map(e => { return ({name: e.species.name, img: null})})
        } else {
            curSpecies.evolves_to.map(e => {return(getEvoChain(e))})
        }
    }

    async function getPrevEvo(name, url, nextEvo) {
        const response = await axios.get(`${url}${name}`);

        response != null && (evo.prevEvo = {name: name, img: response.data.sprites.other["official-artwork"]["front_default"]})
        getNextEvo(nextEvo)

    }

    axios.get(pokeData.data.species.url)
        .then((response) => {
            if(response.data.evolves_from_species != null) {

                console.log('repsonse debug', response)
                getPrevEvo(response.data.evolves_from_species.name, `https://pokeapi.co/api/v2/pokemon/`, response.data.evolution_chain.url)
            } else {
                getNextEvo(response.data.evolution_chain.url)
            }   
            
        })
        .catch((error) => {
            console.log('error', error)
        })


    return (
        <div>
            <div className="">
                {typeListUrl.map(i => {return (<img title={i.code} src={i.url[i.code]} className={"icon-poke inline-block mx-2 my-4 h-20 object-contain " + i.code}/>)})}
            </div>
            <div className="grid grid-cols-2 gap-2 h-48">                
                {statsArr.map(x => <div>{x.stat.name.replace("-", " ").toUpperCase()} : {x.base_stat}</div>)}
            </div>
            <PokeEvo/>
        </div>
    )
}

export default PokeDetails