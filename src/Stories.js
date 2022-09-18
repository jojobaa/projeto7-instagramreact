export default function Stories() {
    const stories = [

        { img: "storys/gato1.jpg", p: "meown" },
        { img: "storys/gato2.jpg", p: "auau" },
        { img: "storys/gato3.jpg", p: "miau" },
        { img: "storys/gato4.jpg", p: "miauw" },
        { img: "storys/gato5.jpg", p: "miar" },
        { img: "storys/gato8.jpg", p: "meon" },
        { img: "storys/dog2.jpg", p: "nham" },
        { img: "storys/dog3.jpg", p: "ouwn" }


    ]

    return (
        <div class="storys">
            {stories.map((s) => (
                <div class="story">
                    <div class="bordastory">
                        <img src={s.img} class="imgstory" alt="" />
                    </div>
                    <p class="txtstory">
                        {s.p}
                    </p>
                </div>
            ))}
        </div>
    )
}