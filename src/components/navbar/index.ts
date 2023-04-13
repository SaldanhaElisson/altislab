
export const openNavContent = `
<div id="nav-open-content" class="box-content" >  
  <div class="profile-content">
    <img  id="profile-picture" src="/img/img-profile.svg" alt="profile-picture">
    <h2 id="profile-name"> Olá, Dani</h2>
  </div>

  <menu class="nav-menu">
    <li class="nav-item  Início"> 
      <span class="material-symbols-outlined Início"> computer </span>
      <p class="Início" >Início </p>  
    </li>
    
    <li class="nav-item Equipamentos">
      <span class="material-symbols-outlined Equipamentos"> home </span>
      <p class="Equipamentos"> Equipamentos </p> 
    </li>

    <li class="nav-item Projetos">
      <span class="material-symbols-outlined "> group </span>
      <p class="Projetos">Projetos</p> 
    </li>

    <li class="nav-item Horários">
      <span class="material-symbols-outlined Horários"> calendar_month </span>
      <p class="Horários" >Horários</p>
    </li>
    <li class="nav-item Configurações">
      <span class="material-symbols-outlined Configurações"> settings </span>
      <p class="Configurações">Configurações</p>
    </li>

    <li class="nav-item Solicitações">
      <span class="material-symbols-outlined Solicitações"> assignment_turned_in </span>
      <p class="Solicitações" >Solicitações</p>
    </li>
  </menu>
  </div>
`

export const closeNavContent = `

<div id="nav-close-content" class="box-content off">  
  <div class="profile-content" >
  
  </div>

  <menu class="nav-menu navOff">
    <li class="nav-item  Início"> 
      <span class="material-symbols-outlined Início"> computer </span>
    </li>
    
    <li class="nav-item Equipamentos">
      <span class="material-symbols-outlined Equipamentos"> home </span>
    </li>

    <li class="nav-item Projetos">
      <span class="material-symbols-outlined Projetos"> group </span>
    </li>

    <li class="nav-item Horários">
      <span class="material-symbols-outlined Horários"> calendar_month </span>
    </li>
    <li class="nav-item Configurações">
      <span class="material-symbols-outlined Configurações"> settings </span>
    </li>

    <li class="nav-item Solicitações">
      <span class="material-symbols-outlined Solicitações"> assignment_turned_in </span>
    </li>
  </menu>

</div>
`

document.querySelector<HTMLDivElement>("#main")!.innerHTML += ` 

<div id="div-icon-menu">
  <span class="material-symbols-rounded"> menu </span>
</div>  


<nav id="navbar">

    ${openNavContent}
    ${closeNavContent}
</nav>
`