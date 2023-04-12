const filterGroup = `
<details id = "filter-group"> 
    <summary id="card-filter-group">
        <p>Filtra por</p>
    </summary>
        <div id="inputs-group"> 
            <div id="inputs">

                <input type="text" id="filter-name" placeholder="Nome do projeto">

                <select name="cars" id="filter-client" placeholder="Nome do projeto">
                    <option value="" disabled selected>Cliente</option>
                    <option value="saab"> Cliente 1</option>
                    <option value="opel"> Cliente 2</option>
                    <option value="audi"> Cliente 3</option>
                </select>

                <input type="text" placeholder="Data de início" onfocus="(this.type='date')" id="filter-start-date">

                <input  type="text" placeholder="Data de conclusão" onfocus="(this.type='date')"  id="filter-end-date">
            
            </div>

            <div id="buttons-groups">
                <button id="clear-filter"> Limpas filtros </button> 
                <button id="search">Buscar </button>
            </div> 
        </div>
    </details>
`;

export default filterGroup;
