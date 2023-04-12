import renderBoxCard from "../../components/box-cards/renderBoxCars";
import cardProjetcContent from "../../components/card-project-content";
import renderCard from "../../components/card/rendeCard";
import filterGroup from "../../components/filter-group";

const cards: string = renderCard(cardProjetcContent);

const projectHomeContent = `
   <div id="projects-home-sections"> 
        <h3> <i>Início / </i>Projetos </h3>

    ${filterGroup} 
     
    ${renderBoxCard(cards, 12)}

   </div>
`;

export default projectHomeContent;
