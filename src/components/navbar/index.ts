
export const openNavContent = `
<div id="div-icon-menu">
<span class="material-symbols-rounded"> menu </span>
</div>  

<div id="profile-content">
  <img  id="profile-picture" src="/img/img-profile.svg" alt="profile-picture">
  <h2 id="profile-name"> Olá, Dani</h2>
</div>

<menu id="nav-menu">
  <li class="nav-item"> 
    <span class="material-symbols-outlined Início"> computer </span>
    <p>Início </p>  
  </li>
  
  <li class="nav-item">
    <span class="material-symbols-outlined Equipamentos"> home </span>
    <p>Equipamentos</p> 
  </li>

  <li class="nav-item">
    <span class="material-symbols-outlined Projetos"> group </span>
    <p>Projetos</p> 
  </li>

  <li class="nav-item">
    <span class="material-symbols-outlined Horários"> calendar_month </span>
    <p>Horários</p>
  </li>
  <li class="nav-item">
    <span class="material-symbols-outlined Configurações"> settings </span>
    <p>Configurações</p>
  </li>

  <li class="nav-item">
    <span class="material-symbols-outlined Solicitações"> assignment_turned_in </span>
    <p>Solicitações</p>
  </li>
</menu>
`

export const closeNavContent = `
<div id="div-icon-menu">
<span class="material-symbols-rounded"> menu </span>
</div>  

<div id="profile-content">
 
</div>

<menu id="nav-menu">
  <li class="nav-item"> 
    <span class="material-symbols-outlined Início"> computer </span>
  </li>
  
  <li class="nav-item">
    <span class="material-symbols-outlined Equipamentos"> home </span>
  </li>

  <li class="nav-item">
    <span class="material-symbols-outlined Projetos"> group </span>
  </li>

  <li class="nav-item">
    <span class="material-symbols-outlined Horários"> calendar_month </span>
  </li>
  <li class="nav-item">
    <span class="material-symbols-outlined Configurações"> settings </span>
  </li>

  <li class="nav-item">
    <span class="material-symbols-outlined Solicitações"> assignment_turned_in </span>
  </li>
</menu>
`

document.querySelector<HTMLDivElement>("#main")!.innerHTML += ` 
  <nav id="navbar">
    ${closeNavContent}
  </nav>
`