import "./style.css";

import "../request-card/style.css";
import "../equipament-dashboard/style.css";
import "../nav-pages-cards/style.css";
import "../new-person-table/style.css";
import "../../pages/home/style.css";
import "../filter-group/style.css";
import "../cards-box/style.css";
import "../card/style.css";
import "../card-project-content/style.css";
import "../card-project-person-content/style.css";
import "../../pages/projects/style.css";
import "../../pages/home/responsive-style.css"

document.querySelector<HTMLDivElement>("#content")!.innerHTML += ` 
  
    <div id="box-card-page" class="onNav">  
        <div id="card-page" class="onNav"> 
            <h2 id="title-card-page"> Início </h2> 
            <article id="page-content"> 
        
            </article>
        </div> 
    </div>

`;
