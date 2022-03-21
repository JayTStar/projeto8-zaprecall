import React from "react"
import setinha from "../mididas/setinha.png"

export default function Pergunta(props){
    const [aberto, setAberto] = React.useState(false);
    const [face, setFace] = React.useState("pergunta");
    const [estado, setEstado] = React.useState("questao");

    let className = `fechado ${estado}`;

    const icons ={ questao: <ion-icon class="iconQuestao" name="play-outline"></ion-icon>,
    acertou: <ion-icon class="iconCerto" name="checkmark-circle"></ion-icon>,
    errou: <ion-icon class="iconErrado" name="close-circle"></ion-icon>,
    quase: <ion-icon class="iconQuase" name="help-circle"></ion-icon>}



    if(aberto === false){
        return(
            <section onClick={() => setAberto(true)} className={className}>
                <p>Pergunta {props.indice + 1}</p>
                {icons[`${estado}`]}
            </section>
        )
    }
    else{
        if(face === "pergunta"){
            return(
                <section className="aberto">
                    <p>{props.pergunta.pergunta}</p>
                    <img src={setinha} onClick={() => setFace("resposta")}/>
                </section>
            )
        }
        else{
            if(face === "resposta"){
                return(
                    <section className="aberto">
                        <p>{props.pergunta.resposta}</p>
                        <div className="certo" onClick={() =>{ setAberto(false); setEstado("acertou"); props.setConcluidos(props.concluidos + 1); props.setResultado([...props.resultado, icons['acertou']])}}>Zap!</div>
                        <div className="meio" onClick={() =>{ setAberto(false); setEstado("quase"); props.setConcluidos(props.concluidos + 1); props.setResultado([...props.resultado, icons['quase']])}}>Quase não lembrei</div>
                        <div className="errado" onClick={() =>{ setAberto(false); setEstado("errou"); props.setConcluidos(props.concluidos + 1); props.setResultado([...props.resultado, icons['errou']])}}>Não lembrei</div>
                    </section>
                )
            }
        }
    }
}