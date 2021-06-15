import PokeImage from './PokeImage.js'

const PokeContainer = (props) => {

    let pokeData = props.data;

    return (
        <div className="grid grid-cols-3 gap-2 mx-auto">
            <div><PokeImage data={pokeData.sprites}/></div>
            <div className="col-span-2"></div>            
        </div>
    )
}

export default PokeContainer