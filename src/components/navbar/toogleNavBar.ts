import "./style.css";


export default function toogleNavBar() {

    let nav:HTMLElement | null = document?.querySelector("#navbar")
    const navOpenContent = document?.querySelector("#nav-open-content")
    const navCloseContent = document?.querySelector("#nav-close-content")
    const section = document?.querySelector("#home-sections section:first-of-type")
    const boxCardpage = document?.querySelector("#box-card-page")
    const cardPage  = document?.querySelector("#card-page") 


        document.querySelector<HTMLElement>("#div-icon-menu")?.addEventListener("click", () => {

            nav?.classList.toggle("close")
            navOpenContent?.classList.toggle("off")
            navCloseContent?.classList.toggle("off")

            section?.classList.toggle("onNav")

            boxCardpage?.classList.toggle("onNav")
            
            cardPage?.classList.toggle("onNav")
                
    })

}

toogleNavBar();