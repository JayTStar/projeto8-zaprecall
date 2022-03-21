import React from "react"
import Cards from "./Cards"
import Pergunta from "./Pergunta"
import logoPequeno from "../mididas/logoPequeno.png"

export default function Perguntas(props){
    
    return(
        <main className="conteudo">
            <div className="topo">
                <img src={logoPequeno} alt="logo"/>
                <h2>ZapRecall</h2>
            </div>
            <ul className="perguntas">
                {Cards.map(card => {return <Pergunta setConcluidos = {props.setConcluidos} concluidos ={props.concluidos} pergunta = {card[0]} indice = {card[1]} setResultado={props.setResultado} resultado ={props.resultado}/>})}
            </ul>
        </main>
    )
}