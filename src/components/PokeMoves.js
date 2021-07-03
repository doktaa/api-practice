import PokeMoveCard from './PokeMoveCard.js';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux'
import {actionCreators} from '../state/index'


const PokeMoves = (props) => {

    const moveData = useSelector((state) => state.move)
    const dispatch = useDispatch()

    const {setSelectedMove} = bindActionCreators(actionCreators, dispatch)

    // const [moveData, setMoveData] = useState({clicked: false, moveData: null});

    let moveList = props
    const axios = require('axios');

    async function moveClick(url) {
        let moveData = await axios.get(url);
        // setMoveData({clicked: true, moveData: moveData.data})
        setSelectedMove(moveData.data)

        console.log('move click', moveData);
    }
    

    function moveCloseClick() {
        setSelectedMove(null)
    }


    // console.log('moveList', moveList)

    return (
        <div>
            <PokeMoveCard data={moveData} clickfunc={moveCloseClick}/>

            <table className="table-auto w-full">
                {
                    moveList.data.map((m, i) => {return(<tr className={`cursor-pointer hover:bg-gray-500 ${i % 2 == 0 ? "bg-gray-300" : "bg-gray-200"}`}><td onClick={() => moveClick(m.url)}>{m.name.replace("-", " ").toUpperCase()}</td></tr>)})
                    // moveList.data.map(m => console.log(m))
                }
            </table>
        </div>
    )
}

export default PokeMoves;