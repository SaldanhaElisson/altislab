import "./style.css";
const main: HTMLElement | null = document?.querySelector("#main");
const modal: HTMLElement | null = document?.querySelector("#modal");
const nav: HTMLElement | null = document?.querySelector("#navbar");
const navOpenContent: HTMLElement | null =
  document?.querySelector("#nav-open-content");
const navCloseContent: HTMLElement | null =
  document?.querySelector("#nav-close-content");
const section: HTMLElement | null = document?.querySelector(
  "#home-sections section:first-of-type"
);
const boxCardpage: HTMLElement | null =
  document?.querySelector("#box-card-page");
const cardPage: HTMLElement | null = document?.querySelector("#card-page");
const details: HTMLElement | null = document?.querySelector("details");
const menuHamburguer: HTMLElement | null =
  document?.querySelector("#div-icon-menu");

export default function toogleNavBar() {
  modal?.addEventListener("click", () => {
    tootleClass();
  });

  document
    .querySelector<HTMLElement>("#div-icon-menu")
    ?.addEventListener("click", () => {
      tootleClass();
    });
}

function tootleClass() {
  menuHamburguer?.classList.toggle("onNav");
  nav?.classList.toggle("close");
  navOpenContent?.classList.toggle("off");
  navCloseContent?.classList.toggle("off");
  section?.classList.toggle("onNav");
  boxCardpage?.classList.toggle("onNav");
  cardPage?.classList.toggle("onNav");
  main?.classList.toggle("onNav");
  modal?.classList.toggle("onNav");
  details?.classList.toggle("onNav");
}

toogleNavBar();
