const contenedorPokemon= document.querySelector("#contenedorPokemon")

const numero_pokemon = document.querySelector("#numero_pokemon")
const nombre_pokemon = document.querySelector("#nombre_pokemon")
const altura_pokemon = document.querySelector("#altura_pokemon")
const peso_pokemon = document.querySelector("#peso_pokemon");
const imagen_pokemon = document.querySelector("img")
const audio_pokemon = document.querySelector("audio")
const tipo_pokemon = document.querySelector("#tipo_pokemon")
const stats_pokemon = document.querySelector("#stats_pokemon");
//console.log(numero_pokemon);


function consultarPokemon(){
    const input_nombre =document.querySelector("input")
    //console.log(input_nombre)

    fetch("https://pokeapi.co/api/v2/pokemon/"+input_nombre.value).then(recurso => {
        if(recurso.ok == false){
            alert("Error, advertencia, lo escribiste mal") 
        }else{
            contenedorPokemon.style.display = "block"
            recurso.json().then(info => {
                //console.log(info)
                numero_pokemon.innerHTML = "Numero: " +info.id
        nombre_pokemon.innerHTML = "Nombre: "+info.name
        altura_pokemon.innerHTML = "Altura: "+info.height / 10+" metros"
        peso_pokemon.innerHTML = "Peso: " + info.weight / 10 + " kg"
        imagen_pokemon.src = info.sprites.front_default;
        audio_pokemon.src = info.cries.latest;
        tipo_pokemon.innerHTML = "";
        stats_pokemon.innerHTML = info.ability.name;
        //tipo_pokemon.innerHTML = "Tipo: "+info.types[0].type.name
        //if(info.types.length > 1){
        //    tipo_pokemon.innerHTML += " - "+ info.types[1].type.name
        //}
        for(i = 0; i < info.types.length; i++){
            tipo_pokemon.innerHTML += info.types[i].type.name +" - ";
        }
            })
        }
        
        
    })
}
// Obtener el contenedor de la imagen y el elemento de audio
const imagenPokemon = document.querySelector('.imgcontainer img');  // Seleccionamos la imagen dentro de imgcontainer
const audioPokemon = document.querySelector('.pokeaudio');  // Seleccionamos el elemento de audio con la clase pokeaudio

// Agregar un evento de clic en la imagen
imagenPokemon.addEventListener('click', () => {
    audioPokemon.play(); // Reproduce el sonido cuando se hace clic en la imagen
    imagenPokemon.classList.add('animar');

    // Eliminar la clase después de que termine la animación para que se pueda repetir
    setTimeout(() => {
        imagenPokemon.classList.remove('animar');
    }, 1000);
});
