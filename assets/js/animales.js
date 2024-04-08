const dataAnimals = (() => {  
    const getData = async () => { // Función para obtener los datos de los animales a partir de un archivo JSON 
        const response = await fetch('./animales.json'); // Se obtiene el archivo JSON
        const { animales } = await response.json(); // Se extrae el objeto JavaScript con los datos de los animales
        return animales; // Se retorna el objeto JavaScript con los datos de los animales
    };
    


    return { getData }; // Se retorna un objeto con la función getData
})(); // Se invoca la función para obtener los datos de los animales a partir de un archivo JSON

export default dataAnimals; // Se exporta el objeto dataAnimals para que pueda ser utilizado en otros archivos del proyecto 