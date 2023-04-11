import equipamentDashboard from "../../components/equipament-dashboard";
import navPageLastsRequests from "../../components/nav-page-lasts-requests";
import newPersonTable from "../../components/new-person-table";
import renderRequestCard from "../../components/request-card/renderRequestCard";

const homeContent: string = `
  <div id="home-sections"> 

    <section> 
      <div id="lasts-requests">     
        <div id="title-section-one">
        <span class="material-symbols-outlined"> inventory </span>
        <h3> Últimas solicitações </h3>
        </div> 

        ${renderRequestCard("Pendente", "0d 02h 10min", "Fulano 1")}

        ${renderRequestCard("Atendido", "0d 22h 10min", "Fulano 2")}

        ${renderRequestCard("Negado", "5d 12h 30min", "Fulano 3")}


        ${navPageLastsRequests}
      </div>

      <div id="equipment-dashboard"> 
          ${equipamentDashboard}
      </div>
     
    </section>

    <section> 
      <div id="title-section-two"> 
        <span class="material-symbols-outlined"> group </span>
        <h3> Novos Colaboradores </h3>
      </div> 

      ${newPersonTable}

      ${navPageLastsRequests}

    </section>  


  </div>
`;

export default homeContent;
