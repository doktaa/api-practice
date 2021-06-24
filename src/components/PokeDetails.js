const PokeDetails = (props) => {

    const pokeData = props.data;

    const statsArr = props.data.stats;
    const types = require('../objects/pokeTypes.js');

    const typeListUrl = []

    pokeData.types.forEach(pokeType => {
        console.log('poketype', pokeType.type.name)
        console.log('uwu', types.types.filter(t => t.code === pokeType.type.name))
        
        types.types.filter(t => t.code === pokeType.type.name).map(i => {typeListUrl.push({url: i.url, code: i.code})})
    })


    return (
        <div>
            <div className="">
                {typeListUrl.map(i => {return (<img title={i.code} src={i.url} className={"icon-poke inline-block mx-2 my-4 h-20 object-contain " + i.code}/>)})}
            </div>
            <div className="grid grid-cols-2 gap-2 h-48">                
                {statsArr.map(x => <div>{x.stat.name.replace("-", " ").toUpperCase()} : {x.base_stat}</div>)}
            </div>
        </div>
    )
}

export default PokeDetails