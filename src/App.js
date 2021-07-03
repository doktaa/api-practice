import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import PokeContainer from './components/PokeContainer.js'
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux'
import {actionCreators} from './state/index'

function App() {

  const pokeData = useSelector((state) => state.pokemon)
  const dispatch = useDispatch()

  const {setPokemon, setSelectedMove} = bindActionCreators(actionCreators, dispatch)

  let baseUrl = "https://pokeapi.co/api/v2/";
  const axios = require('axios');

  let prevEvo = null
  let nextEvo = []


  

  async function getPokemon(pokename) {
    try{
      const response = await axios.get(`${baseUrl}pokemon/${pokename}`)
      console.log('wat', response.data)
      setPokemon({isLoaded: true, data: response.data})

      console.log('pokeData...?', pokeData);

      setSelectedMove(null);
      // document.getElementById("randomDiv").innerHTML = `<img src="${pokeData.data.sprites.back_default}"/>`

    } catch (error) {
      setPokemon({isLoaded: true, data: null});
      setSelectedMove(null);
      console.log(error);
    }
  }

  async function processEvo() {

    try {
      console.log('pokeData check', pokeData)
      const response = await axios.get(pokeData.species.url)
      
      console.log('species api call', response)

      response.data.evolves_from_species != null && (prevEvo = response.data.evolves_from_species.name)
      getEvo(response.data.evolution_chain.url)
      

    } catch (error) {
      console.log('processEvo error', error)
    }
  }

  async function getEvo(url) {
    const response = await axios.get(url);
    let curSpecies = response.data.chain

    getEvoChain(curSpecies); //populate next evolution array
    console.log('prev evo', prevEvo, 'next evo', nextEvo)

    //populate image for next evo
    for(let i = 0; i < nextEvo.length ; i++) {

        console.log(nextEvo[i].name)
        axios.get(`${baseUrl}pokemon/${nextEvo[i].name}`).
            then((response) => {
                console.log('next evo responses', response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
  }

  function getEvoChain(curSpecies) {

    console.log('esfsefs', curSpecies)

    if(curSpecies.species.name === pokeData.species.name) {
        nextEvo = curSpecies.evolves_to.map(e => { return ({name: e.species.name, img: null})})
    } else {
        curSpecies.evolves_to.map(e => {return(getEvoChain(e))})
    }
  }
  

  


  function searchClick() {
    console.log();

    getPokemon(document.getElementById("searchInput").value.toLowerCase())
    // processEvo()
    
  }

  return (
    <div className="App bg-red-700">

      <div className="h-24 my-8">
        <input id="searchInput" className=" text-center h-full w-3/5 text-3xl rounded-full border-4 border-gray-300" type="text"/><button className="" onClick={searchClick}>Search</button>
      </div>
      <div>
        {pokeData != null ? 
          pokeData.data == null ? "Not found" : <PokeContainer data={pokeData.data}/>
          // <img src={pokeData.data.sprites.front_default}/>
        : ""}
      </div>
    </div>
  );
}

export default App;
