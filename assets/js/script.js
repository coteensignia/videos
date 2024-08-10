// para gestionar la actualización de los videos
const IIFE = (() => {
  //  establecer el atributo 'src' del elemento con el id dado
  const updateVideoSource = (videoUrl, elementId) => {
    document.getElementById(elementId).setAttribute("src", videoUrl);
  };

  //  accesible desde fuera
  return { updateVideoSource };
})();

// Clase base 'Multimedia' 
class Multimedia {
  #url; // Propiedad privada

  // Constructor que inicializa la URL del video
  constructor(videoUrl) {
    this.#url = videoUrl;
  }

  // Getter 
  get url() {
    return this.#url;
  }

  // Método que proporciona un mensaje
  setStartTime() {
    return 'Este método es para realizar un cambio en la URL del video';
  }
}

// Clase 'Reproductor' que extiende de 'Multimedia'
class Reproductor extends Multimedia {
  #id; // Propiedad privada 

  // Constructor que inicializa la URL del video 
  constructor(videoUrl, elementId) {
    super(videoUrl); // Llama al constructor de la clase base Multimedia
    this.#id = elementId;
  }

  // Método para reproducir el multimedia actual
  playMultimedia() {
    IIFE.updateVideoSource(this.url, this.#id);
  }

  // Método para establecer el tiempo de inicio del video
  setStartTime(seconds) {
    
    const separator = this.url.includes('?') ? '&' : '?';
    // Segundo especificado
    const updatedUrl = `${this.url}${separator}start=${seconds}`;

    IIFE.updateVideoSource(updatedUrl, this.#id);
  }
}

// Crear instancias de 'Reproductor'
const seriesPlayer = new Reproductor("https://www.youtube.com/embed/IEEbUzffzrk", "series");
const moviePlayer = new Reproductor("https://www.youtube.com/embed/3QXOb5rLu9w", "peliculas");
const musicPlayer = new Reproductor("https://www.youtube.com/embed/sGhglMmxwJ8", "musica");

// Reproducir los videos 
musicPlayer.playMultimedia();
moviePlayer.playMultimedia();
seriesPlayer.playMultimedia();

// Establecer el tiempo de inicio
moviePlayer.setStartTime(20);
seriesPlayer.setStartTime(10);
musicPlayer.setStartTime(30);