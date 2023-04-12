import { closeNavContent, openNavContent } from ".";
import "./style.css";


let open:boolean = true;

export default function toogleNavBar() {

    const nav:HTMLElement | null = document?.querySelector("#navbar")

     document.querySelector<HTMLElement>("#div-icon-menu")?.addEventListener("click", () => {

            nav?.classList.toggle("close")
            open = !open


    })

}

toogleNavBar();