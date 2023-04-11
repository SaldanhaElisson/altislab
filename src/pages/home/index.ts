import renderRequestCard from "./renderRequestCard";

const homeContent: string = `
  <div id="home-sections"> 
    <div id="lasts-requests"> 
        
      <div id="title">
      <span class="material-symbols-outlined"> inventory </span>
      <h3> Últimas solicitações </h3>
      </div> 

      ${renderRequestCard("Pendente", "0d 02h 10min", "Fulano 1")}

      ${renderRequestCard("Atendido", "0d 22h 10min", "Fulano 2")}

      ${renderRequestCard("Negado", "5d 12h 30min", "Fulano 3")}
      
    </div>
  </div>


</div>


    </div>

    <div> 
    
    </div>

    <div>
    
    </div>
  
  </div> 
  

`;

export default homeContent;
