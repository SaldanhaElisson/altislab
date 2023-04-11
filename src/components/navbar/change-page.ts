import homeContent from "../../pages/home"
import projectContent from "../../pages/projects"

const pages = ["Início", "Confiugrações", "Equipamentos", "Projetos", "Horários", "Solicitações"]

interface IContentPages  {
    [key: string]: string
}

const contentPages:IContentPages = { Início: homeContent, Projetos:projectContent }

export default function changePage(element: HTMLMenuElement | null){
   
    element?.addEventListener("click", (e)  => {
        const target = e.target as HTMLElement

        const page = whatIsPage(pages, target.innerHTML)
   
        if(typeof page == "string" && pages.includes(page)){
            changeContent(page);
        }
          return;
    })

    changeContent();
}

function whatIsPage ( data:string[], element:string ): boolean | string{
    for(const index in data){

     if(element.includes(data[index])){
        return data[index]
     }
    }
    return false
}

function changeContent (page = "Início"):void {
    document.querySelector<HTMLDivElement>('#title-card-page')!.innerHTML = page

    if(!contentPages[page]){
        document.querySelector<HTMLDivElement>('#page-content')!.innerHTML = " Pagina em construção :)" 
        return
    }

    document.querySelector<HTMLDivElement>('#page-content')!.innerHTML = contentPages[page]
 
}

changePage(document.querySelector<HTMLMenuElement>("#nav-menu"))

