import React from "react"

function Post(props) {
    const [color, setColor] = React.useState("")
    const [icon, setIcon] = React.useState("heart-outline")
    const [salvarPost, setSalvar] = React.useState("bookmark-outline")
    const [like, setLike] = React.useState(0)

    function likePost() {
        setColor("deiLike md hydrated")
        setIcon("heart")
        setLike(like + 1)
        if (icon === "heart") {
            setColor("md hydrated")
            setIcon("heart-outline")
            setLike(like - 1)
        }
    }

    function savePost(){
        setSalvar("bookmark")
        if(salvarPost === "bookmark"){
            setSalvar("bookmark-outline")
        }
    }

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
                            <ion-icon name={icon} onClick={likePost} class={color}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name={salvarPost} onClick={savePost}></ion-icon>
                    </div>
                </div>
                <div class="likeposts">
                    <img src="imglike/dog1.jpg" class="imglike" />
                    <p>
                        Curtido por respondeai e outras {props.numeroLike.toFixed(2) + like} pessoas
                    </p>
                </div>
            </div>
        </div>
    )

}



export default function postMessage() {

    const posts = [
        { imguser: "imgpost/gato5.jpg", paragrafo: " miar", imglike: "imglike/dog1.jpg", numeroLike: 101.520 },
        { imguser: "imgpost/dog3.jpg", paragrafo: " ouwn", imglike: "imgpost/gato3.jpg",  numeroLike: 101.520},
        { imguser: "imgpost/gato3.jpg", paragrafo: " miau", imglike: "imgpost/gato5.jpg",  numeroLike: 101.520 }
    ]

    return (
        <div class="postagens">{posts.map((p) => (<Post imguser={p.imguser} paragrafo={p.paragrafo} imglike={p.imglike} numeroLike={p.numeroLike}/>))}
        </div>
    )
}