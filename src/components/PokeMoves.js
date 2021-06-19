const PokeMoves = (props) => {

    let moveList = props

    console.log('moveList', moveList)

    return (
        <table className="table-auto w-full">
            {
                moveList.data.map((m, i) => {return(<tr className={"" + i % 2 == 0 ? "bg-gray-300" : "bg-gray-200"}><td>{m.name.replace("-", " ").toUpperCase()}</td></tr>)})
                // moveList.data.map(m => console.log(m))
            }
        </table>
    )
}

export default PokeMoves;