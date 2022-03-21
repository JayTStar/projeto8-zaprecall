import React from "react"
import TelaInicio from "./TelaInicio";
import Perguntas from "./Perguntas";
import Footer from "./Footer";
import Cards from "./Cards";

export default function Telas(){
    const [tela, setTela] = React.useState("inicio");
    const [concluidos, setConcluidos] = React.useState(0);
    const total = Cards.length;
    let [resultado, setResultado] = React.useState([]);

    if(tela === "inicio"){
        return(
            <TelaInicio setTela = {setTela}/>
        )
    }
    else{
        if(tela === "perguntas"){
            return(
                <>
                    <Perguntas setConcluidos = {setConcluidos} concluidos = {concluidos} setResultado={setResultado} resultado={resultado}/>
                    <Footer concluidos = {concluidos} total={total} resultado={resultado} />
                </>
            )
        }
    }
}