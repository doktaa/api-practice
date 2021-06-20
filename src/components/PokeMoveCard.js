const PokeMoveCard = (props) => {

    let moveData = props.data.moveData

    return (
        <div className={"fixed z-50 top-2/4 bg-white w-4/5 lg:w-1/5 mx-auto inset-x-0 " + (props.data.clicked ? "visible" : "invisible")}>           
            {moveData != null ? moveData.name : ""}      
            {moveData != null ? moveData.power : ""}
            {moveData != null ? moveData.pp : ""}
            {moveData != null ? moveData.accuracy : ""}
        </div>
    )
}

export default PokeMoveCard