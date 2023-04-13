import homeContent from "../../pages/home";
import projectHomeContent from "../../pages/projects";
import changeSubPages from "../../pages/projects/changeSubPages";

const pages = [
  "Início",
  "Configurações",
  "Equipamentos",
  "Projetos",
  "Horários",
  "Solicitações",
];

interface IContentPages {
  [key: string]: string;
}

const contentPages: IContentPages = {
  Início: homeContent,
  Projetos: projectHomeContent,
};

export default function changePage(element: HTMLElement | null) {
  element?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    const page = whatIsPage(pages, target);

    if (typeof page == "string" && pages.includes(page)) {
      changeContent(page);
    }
    return;
  });

  changeContent();
}

function whatIsPage(data: string[], element: HTMLElement): boolean | string {
  for (const index in data) {
    if (element.className.includes(data[index])) {
      return data[index];
    }
  }
  return false;
}

function changeContent(page = "Início"): void {
  document.querySelector<HTMLDivElement>("#title-card-page")!.innerHTML = page;

  if (!contentPages[page]) {
    document.querySelector<HTMLDivElement>("#page-content")!.innerHTML =
      "<h2> 404 - Pagina não encontrada :( </h2>";
    return;
  }

  document.querySelector<HTMLDivElement>("#page-content")!.innerHTML =
    contentPages[page];
}

changePage(document.querySelector<HTMLElement>("#navbar"));

changeSubPages();
