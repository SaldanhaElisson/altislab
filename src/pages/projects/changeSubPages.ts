import subpageProject from "./projects";

export default function changeSubPages() {
  document
    .querySelector<HTMLElement>("#page-content")!
    .addEventListener("click", (e) => {
      const target = e.target as HTMLElement;

      if (
        target.className === "card-project-content" ||
        target.parentElement?.className === "card-project-content"
      )
        document.querySelector("#projects-home-sections")!.innerHTML =
          subpageProject;
    });
}
