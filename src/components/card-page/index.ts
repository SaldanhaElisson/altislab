import "./style.css"

import "../request-card/style.css"
import "../equipament-dashboard/style.css"
import "../nav-page-lasts-requests/style.css"
import "../new-person-table/style.css"
import "../../pages/home/style.css"

import "../filter-group/style.css"
import "../../pages/projects/style.css"

document.querySelector<HTMLDivElement>('#content')!.innerHTML +=` 
  
    <div id="box-card-page">  
        <div id="card-page"> 
            <h2 id="title-card-page"> Início </h2> 
            <article id="page-content"> 
        
            </article>
        </div> 
    </div>

`