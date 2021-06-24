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

  // const [isLoading, setIsLoading] = useState(false);
  // const [pokeData, setpokeData] = useState(null);
  let baseUrl = "https://pokeapi.co/api/v2/";
  const axios = require('axios');

  async function getPokemon(pokename) {
    try{
      const response = await axios.get(`${baseUrl}pokemon/${pokename}`)
      console.log('wat', response.data)
      setPokemon({isLoaded: true, data: response.data});

      console.log('pokeData...?', pokeData);

      setSelectedMove(null);
      // document.getElementById("randomDiv").innerHTML = `<img src="${pokeData.data.sprites.back_default}"/>`
            
    } catch (error) {
      setPokemon({isLoaded: true, data: null});
      setSelectedMove(null);
      console.log(error);
    }
  }

  function searchClick() {
    console.log();

    getPokemon(document.getElementById("searchInput").value);
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
