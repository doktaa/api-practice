import {useState} from 'react';

const PokeImage = (props) => {

    //Code below cycles through all the possible image paths in API return data and displays all images that are populated

    const [imgCntr, setImgCntr] = useState(0);
    let imgArr = []

    function imgExists(path) {

        let item = props;

        for (var i=0, path=path.split('.'), len=path.length; i<len; i++){
            item = item[path[i]];
        };
        return item;
    }
    
    function cycleImg(direction) {
        if(direction === "next") {
            imgCntr >= imgArr.length - 1 ? setImgCntr(0) : setImgCntr(imgCntr + 1); 
        } else if (direction === "prev") {
            imgCntr <= 0 ? setImgCntr(imgArr.length - 1) : setImgCntr(imgCntr -1);
        }
    }

    console.log('props', props);

    let imgPathList = [
        "data.other.official-artwork.front_default",
        "data.back_default",
        "data.back_female",
        "data.back_shiny",
        "data.back_shiny_female",
        "data.front_default",
        "data.front_female",
        "data.front_shiny",
        "data.front_shiny_female"
    ]

    for(let i = 0; i < imgPathList.length; i++) {
        let imgLink = imgExists(imgPathList[i])
        if(imgLink === undefined || imgLink == null) {
           continue;
        } else {
            imgArr.push(imgLink);
        }        
    };

    // console.log('imgarr', imgArr);

    return(
        <div>
            <img className= "w-full bg-gray-100 border-8 border-gray-400 rounded-3xl" src={imgArr[imgCntr]}/>
            <img className="h-24 inline-block" src="/images/left-arrow.png" onClick={() => cycleImg("prev")}></img>      
            <img className="h-24 inline-block" src="/images/right-arrow.png" onClick={() => cycleImg("next")}></img>
        </div>
    )
}

export default PokeImage