export default function notOpenMultiplesCards() {
  const cardRequets = document.querySelectorAll(".card-request");

  for (const key in cardRequets) {
    if (!(typeof cardRequets[key] == "object")) continue;

    cardRequets[key]?.addEventListener("click", () => {
      cardRequets[key].classList.toggle("open-card");
      removeClass(cardRequets, Number(key));
    });
  }
}

function removeClass(cardRequets: NodeListOf<Element>, now: number) {
  for (const key in cardRequets) {
    if (!(typeof cardRequets[key] == "object")) continue;

    if (now === Number(key)) {
      continue;
    }

    cardRequets[key]?.classList.remove("open-card");
  }
}

notOpenMultiplesCards();
