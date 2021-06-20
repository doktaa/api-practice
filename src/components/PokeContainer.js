import PokeImage from './PokeImage.js';
import PokeDetails from './PokeDetails.js';
import PokeMoves from './PokeMoves.js';


const PokeContainer = (props) => {

    let pokeData = props.data;

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:mx-72">
                    <div><PokeImage data={pokeData.sprites}/></div>
                    <div className="col-span-2 bg-gray-50"><PokeDetails data={pokeData}/></div>                     
            </div>
            <div className="col-span-3 lg:mx-72 bg-gray-600"><PokeMoves data={pokeData.moves.map(i => i.move)}></PokeMoves></div>
        </div>
    )
}

export default PokeContainer