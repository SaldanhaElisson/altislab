export default function renderRequestCard(
    status: string,
    hours: string,
    person: string
  ): string {
    let classStatus;
  
    switch (status) {
      case "Pendente":
        classStatus = "pending";
        break;
      case "Atendido":
        classStatus = "approved";
        break;
      case "Negado":
        classStatus = "disapproved";
        break;
    }
  
    return `
  
    <div>
    <details class="card-request"> 
      <summary>
      
        <div class="text-card-group"> 
          <h4>Máquina nova </h4>
          <p> Solicidato por: ${person} </p>
        </div> 
  
        <div class="status-group"> 
            <div class="hours-group"> 
              <span class="material-symbols-outlined"> pending_actions </span>
              <p class="hours">${hours} </p> 
            </div>
  
          <span class="status ${classStatus}"> 
            <p> ${status} </p>
          </span> 
  
        </div>
      </summary>
  
      <div class="card-details"> 
         <p> Descrição: orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
          ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
          not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
          with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum
         </p> 

         <p class="request-date"> 
           Data de Siolicitação 16/05/2020 - 10:00
         </p>
          <div class="deatils-card-footer"> 
            <a href="https://nekocalc.com/px-to-rem-converter"> 
              Ver detalhes
            </a>
          </div>   


      </div>
  
    </details>  
  
    </div>
  
  
  
  `;
  }