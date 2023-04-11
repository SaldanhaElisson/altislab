import navPagesCards from "../nav-pages-cars";

export default function renderBoxCard(cards: string) {
    return (`

        <div id="content-box-cars">  
            <div id="box-cards"> 
                ${cards}
                ${cards}
                ${cards}
                ${cards}

                ${cards}
                ${cards}
                ${cards}
                ${cards}


                ${cards}
                ${cards}
                ${cards}
                ${cards}

            </div> 
            ${navPagesCards}
        </div>  
    `)
}