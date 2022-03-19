import React from "react"
import Perguntas from "./Perguntas"
import Inicio from "./Inicio"

export default function Tela(){
    const [tela, setTela] = React.useState("inicio"); 
    const [pontos, setPontos] = React.useState(0);
    const [totalPontos, setTotalPontos] = React.useState(8);

    function aumentaPonto(){
        setPontos(pontos + 1);
    }

    console.log(tela)

    if(tela === "inicio"){
        return(
            <main className="telaInicio">
                <Inicio/>
                <button className="inicio" onClick={() => setTela("perguntas")}>Iniciar Recall</button>
            </main>
        );
    }
    else{
        if(tela === "perguntas"){
            return (
            <main className="telaPerguntas">
                <Perguntas/>
                <footer> <p>{pontos}/{totalPontos} CONCLUÍDOS</p> </footer>
            </main>
            );
        }
    }

};