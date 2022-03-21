import logo from "../mididas/logo.png"
export default function TelaInicio(props){
    return(
        <main className="inicio">
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
            <button onClick={() => props.setTela("perguntas")}>Iniciar Recall!</button>
        </main>
    )
}