import Animal from "./animal.js"; // Se importa la clase Animal de animal.js

let audioPlayer = document.getElementById("player"); // Referencia al elemento audio en el HTML
class Leon extends Animal { // Definimos la clase Leon que hereda de la clase Animal de animal.js
    constructor(name, age, images, comments, sounds) { // Definimos el constructor de la clase Leon que recibe las propiedades de la clase padre Animal de animal.js
        super(name, age, images, comments, sounds); // Se trae las propiedades de la clase padre Animal de animal.js
    }
    rugir() { // Definimos el método rugir de la clase Leon que hace referencia al elemento audio en el HTML
        audioPlayer.src = `./${this._sounds}`; // Referencia al elemento audio en el HTML y se le asigna el valor del sonido del animal en el HTML 
        audioPlayer.play(); // Se reproduce el sonido del animal en el HTML
    }
}

class Lobo extends Animal {
    constructor(name, age, images, comments, sounds) { 
        super(name, age, images, comments, sounds); 
    }
    aullar() {
        audioPlayer.src = `./${this._sounds}`; 
        audioPlayer.play(); 
    }
}

class Oso extends Animal {
    constructor(name, age, images, comments, sounds) { 
        super(name, age, images, comments, sounds); 
    }
    grunir() {
        audioPlayer.src = `./${this._sounds}`; 
        audioPlayer.play(); 
    }
}

class Serpiente extends Animal {
    constructor(name, age, images, comments, sounds) { 
        super(name, age, images, comments, sounds); 
    }
    siseo() {
        audioPlayer.src = `./${this._sounds}`; 
        audioPlayer.play(); 
    }
}

class Aguila extends Animal {
    constructor(name, age, images, comments, sounds) { 
        super(name, age, images, comments, sounds); 
    }
    chillar() {
        audioPlayer.src = `./${this._sounds}`; 
        audioPlayer.play(); 
    }
}

// Función para obtener la instancia de la clase a partir de su nombre
function getInstance (name, ages, images, comments, sounds) { // Se define la función getInstance que recibe las propiedades de la clase Leon que hereda de la clase Animal de animal.js
    switch (type) { // Se compara el tipo de animal
        case "Leon":
            return new Leon(name, ages, images, comments, sounds); // Se retorna la instancia de la clase Leon con sus propiedades
        case "Lobo":
            return new Lobo(name, ages, images, comments, sounds);
        case "Oso":
            return new Oso(name, ages, images, comments, sounds);
        case "Serpiente":
            return new Serpiente(name, ages, images, comments, sounds);
        case "Aguila":
            return new Aguila(name, ages, images, comments, sounds);
        default:
            throw new Error("Animal no encontrado"); // Se lanza un error si el tipo de animal no es válido 
    }
}
// Exportamos la función getInstance para que pueda ser utilizada en otros archivos del proyecto
export default getInstance;