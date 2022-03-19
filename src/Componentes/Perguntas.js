import Recalls from "./Recalls"
export default function Perguntas (){
    function abrePergunta(selecionada){
        const resultado = Recalls.filter(pergunta => {return pergunta.titulo === selecionada})

        console.log (resultado)
    }
    return(
        <>
            <img />
            <h2>ZapRecall</h2>

            <ul className="perguntas">
                {Recalls.map(questionarios => <section className="pergunta" onClick={() => abrePergunta()}><p>{questionarios.titulo}</p> <ion-icon name="play-outline"></ion-icon></section>)}
            </ul>

        </>
    );
}