import dataAnimals from "./animales.js"; // Se importa el objeto dataAnimals de animales.js
import getInstance from "./modulos/tipos.js"; // Se importa la función getInstance de tipos.js

const animalSelect = document.getElementById("animal"); // Referencia al elemento select en el HTML
const preview = document.getElementById("preview"); // Referencia al elemento div en el HTML
const boton = document.getElementById("btnRegistrar"); // Referencia al elemento btnRegistrar en el HTML 

let imagesSrc; // Guardamos la imagen del animal en una variable para mostrarla en el preview en el HTML
let soundSrc; // Guardamos el audio del animal en una variable para reproducirlo en el HTML
let animalCard = []; // Guardamos la tarjeta del animal en una variable para mostrarla en el HTML

// Se agrega un evento de cambio al elemento select en el HTML para obtener los datos de los animales a partir de un archivo JSON y mostrarlos en el preview en el HTML
animalSelect.addEventListener("change", async () => { 
  // Se agrega un evento de cambio al elemento select en el HTML
  const name = animalSelect.value; // Se obtiene el valor del elemento select en el HTML
  const animals = await dataAnimals.getData(); // Se obtienen los datos de los animales a partir de un archivo JSON
  const animal = animals.find((animal) => animal.name === name); // Se busca el animal en el arreglo de animales
  imagesSrc = `./assets/imgs/${animal.imagen}`; // Guardamos la imagen
  soundSrc = `./assets/sounds/${animal.sonido}`; // Guardamos el audio
  preview.style.backgroundImage = `url(${imagesSrc})`; // Mostramos la imagen en el preview en el HTML
});

//Botón para registrar el animal en el HTML
boton.addEventListener("click", () => { // Se agrega un evento de clic al elemento btnRegistrar en el HTML
  const name = animalSelect.value; // Se obtiene el valor del elemento select en el HTML
  const age = document.getElementById("edad").value; // Se obtiene el valor del elemento select en el HTML
  const comments = document.getElementById("comentarios").value; // Se obtiene el valor del elemento select en el HTML

  // Validamos que todos los campos este rellenados para registrar el animal en el HTML
  if (name && age && comments) {
    let animalObjet = getInstance(name, age, imagesSrc, comments, soundSrc); // Se obtiene la instancia de la clase a partir de su nombre y sus propiedades requeridas en el HTML

    animalCard.push(animalObjet); // Se agrega la instancia de la clase a la variable animalCard para mostrarla en el HTML

    // Se llama la función card para mostrar las card de animales en el HTML
    card();
  } else {
    alert("Por favor, rellene todos los campos"); // Se muestra un mensaje de alerta si no se rellenan todos los campos requeridos
  }
});

// Se define la función card para mostrar las card de animales en el HTML
const card = () => {
  const cardInvest = document.getElementById("Animales"); // Capturamos la etiqueta donde se insertaran las card de animales
  cardInvest.innerHTML = ""; // definimos un template para las card
  // Se recorre el arreglo de animales para mostrarlas en el HTML 
  animalCard.forEach((animal, i) => {
    cardInvest.innerHTML += `
      <div class="px-3 pb-2">
        <div class="bg-dark text-white">
          <img height="200" src="${animal._images}"  data-toggle="modal" data-target="#exampleModal" onclick="modalDetails('${i}')" />
            <div>
              <button onclick="playSound('${animal._name}')" class="btn btn-secondary w-100"><img height="30" src="assets/imgs/audio.svg" /> 
              </button>
            </div>
        </div>
      </div>
      `;
  });
};

//Funcion para ejecutar el método de sonido. se llama con el objeto window para que esté global en toda la pagina

window.playSound = (name) => {
  const animal = animalCard.find((animal) => animal._name === name);

  if (name === "Leon") {
    animal.rugir();
    console.log(animal.rugir());
  } else if (name === "Lobo") {
    animal.aullar();
  } else if (name === "Oso") {
    animal.grunir();
  } else if (name === "Serpiente") {
    animal.sisear();
  } else if (name === "Aguila") {
    animal.chillar();
  }
};

//Funcion para mostrar el modal de los animales
window.modalDetails = (i) => {
  // aqui va la solución para mostrar el modal de los animales deben investigar
}