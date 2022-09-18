function Post(props) {
    return (
        <div class="post">
            <div class="posts">
                <div class="topopost">
                    <div class="postconteudo">
                        <img src={props.imguser} class="imgdopost" />
                        <p>
                            {props.paragrafo}
                        </p>
                    </div>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
                <img src="imgposts/gatopost1.jpg" class="imgdoposts" />
                <div class="abaixodopost">
                    <div class="iconspost">
                        <div class="lefticons">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="likeposts">
                    <img src="imglike/dog1.jpg" class="imglike" />
                    <p>
                        Curtido por respondeai e outras 101.523 pessoas
                    </p>
                </div>
            </div>
        </div>
    )

}

export default function postMessage() {

    const posts = [
        { imguser: "imgpost/gato5.jpg", paragrafo: " miar", imglike: "imglike/dog1.jpg" },
        { imguser: "imgpost/dog3.jpg", paragrafo: " ouwn", imglike: "imgpost/gato3.jpg" },
        { imguser: "imgpost/gato3.jpg", paragrafo: " miau", imglike: "imgpost/gato5.jpg"}
    ]

    return (
        <div class="postagens">{posts.map((p) => (<Post imguser={p.imguser} paragrafo={p.paragrafo} imglike={p.imglike} />))}
        </div>
    )
}