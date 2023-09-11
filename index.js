const form= document.querySelector(".form")
const input= document.querySelector("#idbuscar")
const boton= document.querySelector(".buscar")
const contenedor= document.querySelector(".contenedorcard")
const mensajeerror= document.querySelector("#error")


const renderizarcard=(data)=>{
  const nombre= data.name;
  const altura= data.height/10;
  const peso=data.weight/10;
  const imagen=data.sprites.front_default;
  contenedor.innerHTML= `<div class="card">
                            <img src="${imagen}" alt=""> 
                            <p class="nombre">Nombre: ${nombre}</p>
                             <p>Altura: ${altura} m</p>
                             <p>Peso: ${peso} Kilos</p>
                          </div>`

}
const isvalid=(input)=>{
  return input.length>0
}
const buscarpokemon = async () => {
  console.log(isvalid(input.value));
  if(isvalid(input.value)){
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + input.value);
      if(response){
        mensajeerror.textContent= " ";
      const data = await response.json();
      renderizarcard(data);
    }

    } catch (error) {
      mensajeerror.textContent= "NO EXISTE ESE PÓKEMON";
      contenedor.innerHTML= " ";
    }
}
  else
  {
    mensajeerror.textContent="Ingrese un número";
    contenedor.innerHTML= " ";
  }

  
  }
  const validateForm = (e) =>{
    e.preventDefault();
  }

  const init = () =>{
    form.addEventListener("submit", validateForm)
    boton.addEventListener("click", buscarpokemon)
  }
  
  
  init()