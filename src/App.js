import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import PokeContainer from './components/PokeContainer.js'

function App() {

  // const [isLoading, setIsLoading] = useState(false);
  const [pokeData, setpokeData] = useState(null);
  let baseUrl = "https://pokeapi.co/api/v2/";
  const axios = require('axios');

  async function getPokemon(pokename) {
    try{
      const response = await axios.get(`${baseUrl}pokemon/${pokename}`)
      console.log('wat', response.data)
      setpokeData({isLoaded: true, data: response.data});
      // document.getElementById("randomDiv").innerHTML = `<img src="${pokeData.data.sprites.back_default}"/>`
            
    } catch (error) {
      setpokeData({isLoaded: true, data: null});
      console.log(error);
    }
  }

  function searchClick() {
    console.log();

    getPokemon(document.getElementById("searchInput").value);
  }

  return (
    <div className="App bg-red-700">
      <div className="h-24">
        <input id="searchInput" className=" text-center h-full w-3/5 text-3xl" type="text"/><button className="" onClick={searchClick}>Search</button>
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
