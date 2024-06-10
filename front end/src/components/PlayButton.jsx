import { useEffect, useState } from "react";

function PlayButton ({turn,setSelecter,setTurn,isdone,replay,resetReplay,player}){
    let [clicked,setClicked] = useState(isdone);
    let[bcolor,setBcolor] = useState ('');
    let [text,setText] = useState('');
    
    useEffect ( () => {if (player == 1){
        setText('X');
        setBcolor('blue');
    }else if (player == 2){
        setText('O');
        setBcolor('red')
    }},[player]);
    useEffect( (event) => {setClicked(isdone)},
    [isdone]);
    useEffect(() => {if(replay == true){setClicked(false);setText('')}},[replay]);

    return (
        <div style={{width : '200px' , height : '200px' , backgroundColor : "black" , display : "flex", alignItems : "center", justifyContent : 'center', margin: '20px', color: bcolor,fontSize: '70px',borderRadius: "40px"}} onClick={clicked? null : () => { setBcolor( (turn % 2 == 1)? 'blue': 'red');setText((turn % 2 == 1)? 'X': 'O');setSelecter( (turn % 2 == 1)? 1 : 2);setClicked(true); setTurn();resetReplay();  }}>
            {text? <p>{text}</p> : null}
        </div>
    );
}
export default PlayButton;