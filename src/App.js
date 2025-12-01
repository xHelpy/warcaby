import logo from './logo.svg';
import './App.css';
import {useState} from "react";




function App() {

    const Tabela = [
        ["p","c","p","c","p","c","p","c"],
        ["c","p","c","p","c","p","c","p"],
        ["p","c","p","c","p","c","p","c"],
        ["p","p","p","p","p","p","p","p"],
        ["p","p","p","p","p","p","p","p"],
        ["b","p","b","p","b","p","b","p"],
        ["p","b","p","b","p","b","p","b"],
        ["b","p","b","p","b","p","b","p"],


    ]


    const [firstclick,setFirstclick] = useState(false);

    function  updateRuch(x,y,posX,posY)
    {

         const newMapa = mapa.map(row => [...row]);
                    newMapa[y][x] = player;    // nowa pozycja
                    newMapa[posY][posX] = "p";
                    setMapa(newMapa);
                    console.log("Ruch na pole: "+x+" "+y)
                    setFirstclick(false);
                    if (player === "b")
                        setPlayer("c")
                    if (player === "c")
                        setPlayer("b")
                    setPosX(-1)
                    setPosY(-1)




    }
    function updateBicie(x,y,posY,posX,srodekX,srodekY)
    {

            const newMapa = mapa.map(row => [...row]);
                    console.log("bicie!")
                    newMapa[srodekY][srodekX] = "p";
                    setMapa(newMapa);
                    newMapa[y][x] = player
                    newMapa[posY][posX] = "p";
                    setPosX(-1)
                    setPosY(-1)
                    setFirstclick(false);
                    if (player === "b")
                        setPlayer("c")
                    if (player === "c")
                        setPlayer("b")





    }
    function  updateClick(x,y,pole)
    {
        if (player === "b" && pole === "b" && !firstclick)
        {

            setFirstclick(true)
            console.log("kliknięcie bałego!");
            setPosX(x)
            setPosY(y)
            return

        }
        if ( player === "c" && pole === "c" && !firstclick) {
            setFirstclick(true)
            setPosX(x)
            setPosY(y)
            console.log("Kliknięcie czarnego")
            return
        }
    }

    const [player,setPlayer] = useState("b")
    const [mapa,setMapa] = useState(Tabela);
    const [posX,setPosX] = useState(-1);
    const [posY,setPosY] = useState(-1);

    function  getPosition(x,y) {
        var pole = mapa[y][x];
        updateClick(x, y, pole);
        if (firstclick)
        {
            if(player === "b")
            {
                console.log("test")
                var lewygX = posX-1;
                var lewygY = posY-1;
                var lewygbX = posX-2;
                var lewygbY = posY-2;
                var prawygX = posX+1;
                var prawygY = posY-1;
                var prawygbX = posX+2
                var prawygbY = posY-2
                var lewydX = posX-1;
                var lewydY = posY+1;
                var lewydbX = posX-2;
                var lewydbY = posY+2;
                var prawydX = posX+1;
                var prawydY = posY+1;
                var prawydbX = posX+2;
                var prawydbY = posY+2;
                if ((x === prawygX && y === prawygY) && mapa[y][x] === "p" && x !== prawygbX && y !== prawygbY && x !== lewygbX && y !== lewygbY)
                {
                    updateRuch(x,y,posX,posY,player)
                }
                if ((x === lewygX && y === lewygY) && mapa[y][x] === "p" && x !== lewygbX && y !== lewygbY  && x !== prawygbX && y !== prawygbY)
                {
                    updateRuch(x,y,posX,posY,player)
                }
                if(x == posX && y == posY)
                {
                    console.log("Kliknięto ten sam!")
                    setFirstclick(false)
                    setPosX(-1)
                    setPosY(-1)
                    return
                }
                if((x === lewygbX && y === lewygbY) && mapa[y][x] === "p" && mapa[lewygY][lewygX] === "c")
                {
                    updateBicie(x,y,posY,posX,lewygX,lewygY)
                }
                console.log("mapa y x: przy biciu "+mapa[y][x])
                if((x === prawygbX && y === prawygbY) && mapa[y][x] === "p" && mapa[prawygY][prawygX] === "c")
                {
                    updateBicie(x,y,posY,posX,prawygX,prawygY)
                }
                if((x === lewydbX && y === lewydbY) && mapa[y][x] === "p" && mapa[lewydY][lewydX] === "c")
                {
                    updateBicie(x,y,posY,posX,lewydX,lewydY)
                }
                if((x === prawydbX && y === prawydbY) && mapa[y][x] === "p" && mapa[prawydY][prawydX] === "c")
                {
                    updateBicie(x,y,posY,posX,prawydX,prawydY)
                }
            }
            if(player === "c")
            {
                var lewygX = posX-1;
                var lewygY = posY-1;
                var lewygbX = posX-2;
                var lewygbY = posY-2;
                var prawygX = posX+1;
                var prawygY = posY-1;
                var prawygbX = posX+2
                var prawygbY = posY-2
                var lewydX = posX-1;
                var lewydY = posY+1;
                var lewydbX = posX-2;
                var lewydbY = posY+2;
                var prawydX = posX+1;
                var prawydY = posY+1;
                var prawydbX = posX+2;
                var prawydbY = posY+2;
               
                if ((x === lewydX && y === lewydY) && mapa[y][x] === "p")
                {
                    updateRuch(x,y,posX,posY,player)
                }
                if ((x === prawydX && y === prawydY) && mapa[y][x] === "p")
                {
                    updateRuch(x,y,posX,posY,player)
                }
                if(x == posX && y == posY)
                {
                    setFirstclick(false)
                    setPosX(-1)
                    setPosY(-1)
                    return
                }
                if((x === lewydbX && y === lewydbY) && mapa[y][x] === "p" && mapa[lewydY][lewydX] === "b")
                {
                    updateBicie(x,y,posY,posX,lewydX,lewydY)
                }
                if((x === prawydbX && y === prawydbY) && mapa[y][x] === "p" && mapa[prawydY][prawydX] === "b")
                {
                    updateBicie(x,y,posY,posX,prawydX,prawydY)
                }
                if((x === prawygbX && y === prawygbY) && mapa[y][x] === "p" && mapa[prawygY][prawygX] === "c")
                {
                    updateBicie(x,y,posY,posX,prawygX,prawygY)
                }
                if((x === lewygbX && y === lewygbY) && mapa[y][x] === "p" && mapa[lewygY][lewygX] === "b")
                {
                    updateBicie(x,y,posY,posX,lewygX,lewygY)
                }
                if((x === prawygbX && y === prawygbY) && mapa[y][x] === "p" && mapa[prawygY][prawygX] === "b")
                {
                    updateBicie(x,y,posY,posX,prawygX,prawygY)
                }
            }
        }
        console.log("------")
        var biale = 0;
        var czarne = 0;
        mapa.map(function (linia, index) {
            linia.map(function (obiekt,index) {

                if(obiekt === "b")
                {
                    console.log("biały!")
                   biale += 1;
                }
                if(obiekt === "c")
                {
                    czarne += 1;
                }
            })
        })
        if(biale == 0 )
        {
            alert("Wygrywa Czarny!")
        }
        if(czarne == 0)
        {
            alert("Wygrywa Biały!")
        }
        console.log(biale+" "+czarne)
        console.log(x,y)


    }
  return (
    <div className="App">
        <h1>WARCABY</h1>
        <table>
            <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
            </tr>
            <tbody>
        {mapa.map((linia, indexY) => {
            return (

                <tr>

                {
                    linia.map((pozycja,indexX) => {
                        return (

                            <td>
                            <img className={posX === indexX && posY === indexY ? "img-selected" : ""} onClick={() => getPosition(indexX,indexY)} src={pozycja+".png"}></img>
                            </td>

                        )
                    })

                }
                    <p style={{fontWeight: "bold", marginLeft: "10px"}}>{indexY+1}</p>
                </tr>


            )
        })}
            </tbody>
        </table>
        <div className="Dane">
            <p><b>Ruch:</b> {player === "b" ? "BIAŁY" : "CZARNY"}</p>
        </div>
    </div>
  );
}

export default App;
