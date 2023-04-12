import "./style.css";

document.querySelector<HTMLDivElement>("#main")!.innerHTML += ` 
<nav>
<div id="div-icon-menu">
  <span class="material-symbols-rounded"> menu </span>
</div>  
  
  <div id="profile-content">
    <img  id="profile-picture" src="/img/img-profile.svg" alt="profile-picture">
    <h2 id="profile-name"> Olá, Dani</h2>
  </div>

  <menu id="nav-menu">
    <li class="nav-item"> 
      <span class="material-symbols-outlined"> computer </span>
      <p>Início </p>  
    </li>
    
    <li class="nav-item">
      <span class="material-symbols-outlined"> home </span>
      <p>Equipamentos</p> 
    </li>

    <li class="nav-item">
      <span class="material-symbols-outlined"> group </span>
      <p>Projetos</p> 
    </li>

    <li class="nav-item">
      <span class="material-symbols-outlined"> calendar_month </span>
      <p>Horários</p>
    </li>
    <li class="nav-item">
      <span class="material-symbols-outlined"> settings </span>
      <p>Configurações</p>
    </li>

    <li class="nav-item">
      <span class="material-symbols-outlined"> assignment_turned_in </span>
      <p>Solicitações</p>
    </li>
  </menu>

</nav>
`;
