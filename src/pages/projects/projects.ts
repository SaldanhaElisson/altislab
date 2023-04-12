import renderBoxCard from "../../components/cards-box/renderBoxCars";
import cardProjetcPersonContent from "../../components/card-project-person-content";
import renderCard from "../../components/card/rendeCard";

const cards: string = renderCard(cardProjetcPersonContent);

const subpageProject = `
    <h3> <i>Início / Projetos / </i>  Projeto1</h3>

    <h3 id="title-details-project"> Detalhes do projeto </h3> 
        <div class="content-details-project"> 
            <p> Cliente: Cliente 1</p>
            <p> Data de início: 12/11/2021</p>
            <p> Data de conclusão: 12/11/2023 </p>
        </div>
    
    <h3 id="title-details-project"> Detalhes do projeto </h3> 
    <div class="content-details-project"> 
    
    ${renderBoxCard(cards, 8, true)}

    </div>    
`;

export default subpageProject;
