// Módulo para gestionar la actualización de videos
const videoManager = (() => {
  // Función para actualizar la fuente del video
  const updateVideo = (elementId, videoUrl) => {
    document.getElementById(elementId).setAttribute("src", videoUrl);
  };

  // Exponer la función correcta
  return { updateVideo };
})();

// Clase 'Multimedia' que representa una fuente de multimedia
class Multimedia {
  #url; // Propiedad privada para almacenar la URL

  constructor(videoUrl) {
    this.#url = videoUrl;
  }

  get url() {
    return this.#url;
  }

  setStartTime() {
    return 'Este método es para realizar un cambio en la URL del video';
  }
}

// Clase 'Reproductor' que extiende 'Multimedia' para gestionar la reproducción de videos
class Reproductor extends Multimedia {
  #elementId; // Propiedad privada para almacenar el id del elemento

  constructor(videoUrl, elementId) {
    super(videoUrl);
    this.#elementId = elementId;
  }

  play() {
    videoManager.updateVideo(this.#elementId, this.url);
  }

  setStartTime(seconds) {
    const separator = this.url.includes('?') ? '&' : '?';
    const updatedUrl = `${this.url}${separator}start=${seconds}`;
    videoManager.updateVideo(this.#elementId, updatedUrl);
  }
}

// Instanciar objetos 'Reproductor' para diferentes tipos de contenido
const seriesPlayer = new Reproductor("https://www.youtube.com/embed/IEEbUzffzrk", "series");
const moviePlayer = new Reproductor("https://www.youtube.com/embed/3QXOb5rLu9w", "peliculas");
const musicPlayer = new Reproductor("https://www.youtube.com/embed/sGhglMmxwJ8", "musica");

// Iniciar la reproducción de los videos
musicPlayer.play();
moviePlayer.play();
seriesPlayer.play();

// Configurar los tiempos de inicio de los videos
moviePlayer.setStartTime(20);
seriesPlayer.setStartTime(10);
musicPlayer.setStartTime(30);
