const PokeDetails = (props) => {

    const pokeData = props.data;

    const statsArr = props.data.stats;
    const types = require('../objects/pokeTypes.js');

    const typeListUrl = []

    pokeData.types.forEach(pokeType => {
        console.log('poketype', pokeType.type.name)
        console.log('uwu', types.types.filter(t => t.code === pokeType.type.name))
        
        types.types.filter(t => t.code === pokeType.type.name).map(i => {typeListUrl.push(i.url)})
    })


    return (
        <div>
            <div className="grid grid-cols-2 gap-2">
                <div className="col-span-2">
                    {typeListUrl.map(i => {return (<img src={i}/>)})}
                </div>
                {statsArr.map(x => <div>{x.stat.name}:{x.base_stat}</div>)}
            </div>
        </div>
    )
}

export default PokeDetails