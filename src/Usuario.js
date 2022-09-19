import React from "react"

export default function Usuario() {

    const [usuario, setUsuario] = React.useState("escolhar um nome")
    const [fotoUsuario, setFoto] = React.useState("https://www.frases.inf.br/wp-content/themes/webgo-content/assets/imagens/anonimo.png")


    function username() {
        let nomeUser = prompt("Qual é o seu nome?")
        setUsuario(nomeUser)

    }
    function userFoto() {
        let fotoUser = prompt("Qual o link da sua foto?")
        setFoto(fotoUser)

    }

    return (
        <div class="toposidebar">
            <img src={fotoUsuario} class="imgsidebar" onClick={userFoto} />
            <div class="txtperfil">
                <h3>
                    {usuario}
                </h3>
                <p>
                    {usuario}
                    <ion-icon name="pencil-outline" onClick={username}></ion-icon>
                </p>
            </div>
        </div>
    )
}