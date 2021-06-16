import PokeImage from './PokeImage.js';
import PokeDetails from './PokeDetails.js';

const PokeContainer = (props) => {

    let pokeData = props.data;

    return (
        <div className="grid grid-cols-3 gap-2 mx-auto">
            <div><PokeImage data={pokeData.sprites}/></div>
            <div className="col-span-2"><PokeDetails data={pokeData}/></div>            
        </div>
    )
}

export default PokeContainer