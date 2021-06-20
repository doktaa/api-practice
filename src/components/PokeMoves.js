import PokeMoveCard from './PokeMoveCard.js';
import {useState, useEffect} from 'react';


const PokeMoves = (props) => {

    const [moveData, setMoveData] = useState({clicked: false, moveData: null});

    let moveList = props
    const axios = require('axios');

    async function moveClick(url) {
        let moveData = await axios.get(url);
        setMoveData({clicked: true, moveData: moveData.data})

        console.log('move click', moveData);
    }


    // console.log('moveList', moveList)

    return (
        <div>
            <PokeMoveCard data={moveData}/>

            <table className="table-auto w-full">
                {
                    moveList.data.map((m, i) => {return(<tr className={"" + i % 2 == 0 ? "bg-gray-300" : "bg-gray-200"}><td onClick={() => moveClick(m.url)}>{m.name.replace("-", " ").toUpperCase()}</td></tr>)})
                    // moveList.data.map(m => console.log(m))
                }
            </table>
        </div>
    )
}

export default PokeMoves;