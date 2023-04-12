import navPagesCards from "../nav-pages-cards";

export default function renderBoxCard(
  cards: string,
  quantity: number,
  cardPersson?: boolean
) {
  let totalCards = cards;

  for (let i = 0; i < quantity - 1; i++) {
    totalCards += cards;
  }

  return `

        <div id="content-box-cards" class="onNav">  
            <div id="${cardPersson ? "box-cards-person" : "box-cards"}"> 
                ${totalCards}
            </div> 
            ${navPagesCards}
        </div>  
    `;
}
