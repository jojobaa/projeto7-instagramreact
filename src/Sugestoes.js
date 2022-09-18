function Sugestao(props) {
    return (
        <div class="sugestoesdireita">
            <img src={props.imgsidebar} />
            <div class="txtperfil">
                <h3>
                    {props.h3}
                </h3>
                <p>
                    {props.p}
                </p>
            </div>
            <p class="txtsidebar">
               {props.txt}
            </p>
        </div>
    )
}

export default function Sugestoes() {

    const sugestoes = [
        { imgsidebar: "/imgsidebar/animais1.jpg", h3: "bad.vibes.memes", p: "Segue você", txt: "seguir" },
        { imgsidebar: "/imgsidebar/animais2.jpg", h3: "bad.vibes.memes", p: "Segue você", txt: "seguir" },
        { imgsidebar: "/imgsidebar/animais3.jpg", h3: "bad.vibes.memes", p: "Segue você", txt: "seguir" },
        { imgsidebar:"/imgsidebar/animais4.jpg", h3: "bad.vibes.memes", p: "Segue você", txt: "seguir" },
        { imgsidebar: "/imgsidebar/animais5.jpg", h3: "bad.vibes.memes", p: "Segue você", txt: "seguir" }
    ]

    return (
        <div class="user">
            <div class="sugestao">
                <p>
                    Sugestões para você
                </p>
                <p>
                    Ver tudo
                </p>
            </div>
            <div class="sugestoes">
               {sugestoes.map((s) => (<Sugestao imgsidebar={s.imgsidebar} h3={s.h3} p={s.p} txt={s.txt}/>))}
            </div>
            <div class="legenda">
                <p>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma
                </p>
                <p>
                    © 2021 INSTAGRAM DO FACEBOOK
                </p>
            </div>
        </div>
    )
}