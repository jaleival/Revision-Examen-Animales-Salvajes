class Animal {
    // Definimos el constructor
  constructor(name, age, images, comments, sounds) {
    // Definimos las propiedades de la clase padre
    this._name = name;
    this._age = age;
    this._images = images;
    this._comments = comments;
    this._sounds = sounds;
  }
  // Definimos el método get de la clase
  get names() {
    return this._name;
  }
  get ages() {
    return this._age;
  }
  get images() {
    return this._images;
  }
  get comments() {
    return this._comments;
  }
  get sounds() {
    return this._sounds;
  }
  // Definimos el método set de la clase
  set comments(comments) {
    this._comments = comments;
  }
}
// Exportamos la clase Animal para que pueda ser utilizada en otros archivos del proyecto
export default Animal;