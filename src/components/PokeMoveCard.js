const PokeMoveCard = (props) => {

    let moveData = props.data.moveData

    return (
        <div className={"fixed z-50 top-2/4 bg-white w-4/5 lg:w-1/5 mx-auto inset-x-0 " + (props.data.clicked ? "visible" : "invisible")}>
            {moveData.name}
            {moveData.power}
            {moveData.pp}
            {moveData.accuracy}
        </div>
    )
}

export default PokeMoveCard