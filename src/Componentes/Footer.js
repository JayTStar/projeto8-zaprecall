import React from "react"
import party from "../mididas/party.png"
import sad from "../mididas/sad.png"

export default function Footer(props){
    const mensagens = { acerto: <> <p className="titulo"> <img src={party}/>  Parabéns!</p> <p className="mensagem">Você não esqueceu de nenhum flashcard!</p> </>,
    erro: <> <p className="titulo"> <img src={sad}/> Putz...</p> <p className="mensagem">Ainda faltam alguns... Mas não desanime!</p> </>}

    const estado = (props.concluidos === props.total) ? true : false ;

    const erros =props.resultado.filter(resultado => {return (resultado.props.class === 'iconErrado')});

    const qtdErros = erros.length;

    console.log(props.resultado)
    console.log(qtdErros);

    if(estado === false){
        return (
            <footer className="footerFechado">
                <p>{props.concluidos}/{props.total} Concluídos</p>
                <ul>{props.resultado.map(resultado => {return resultado})}</ul>
            </footer>
        );
    }
    else{
        if(qtdErros !== 0){
            return (
                <footer className="footerAberto">
                    {mensagens.erro}
                    <p>{props.concluidos}/{props.total} Concluídos</p>
                    <ul>{props.resultado.map(resultado => {return resultado})}</ul>
                </footer>
            )
        }
        else{
           return (
                <footer className="footerAberto">
                    {mensagens.acerto}
                    <p>{props.concluidos}/{props.total} Concluídos</p>
                    <ul>{props.resultado.map(resultado => {return resultado})}</ul>
                </footer>
            )
        }
    }
}