const PokeMoveCard = (props) => {

    let moveData = props.data


    return (
        <div className={"fixed z-50 top-2/4 bg-white w-4/5 lg:w-1/5 mx-auto inset-x-0 p-8 " + (props.data != null ? "visible" : "invisible")}>           
            <p>Move: {moveData != null ? moveData.name : ""}</p>      
            <p>Power: {moveData != null ? moveData.power : ""}</p>
            <p>PP: {moveData != null ? moveData.pp : ""}</p>
            <p>Accuracy: {moveData != null ? moveData.accuracy : ""}</p>
            <button onClick={props.clickfunc}>Close</button>
        </div>
    )
}

export default PokeMoveCard