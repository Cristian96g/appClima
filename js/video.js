const climas = [
    { Clear: "iPtZt-GuIQo" },
    { Clouds: "A1pw9wxqC6I" },
    { Cloudy: "2hmlYSa0hy4" },
    { Drizzle: "LaMQEYkxa0g" },
    { Haze: "obK3TvoWR_I" },
    { Mist: "obK3TvoWR_I" },
    { Rain: "l0orJ3ukff0" },
    { Snow: "cEZJ-R7qZ-c" },
    { Thunderstorm: "sC3IZSdpTGQ"},
    { Tornado: "dIBVcAZEjqc"},
    { Squall: "jcdGFYaT-qM"},
    { Ash: "T4zOLJm5dXE"},
    { Dust: "EAvUgtcE21Y"},
    { Sand: "EAvUgtcE21Y"},
    { Fog: "obK3TvoWR_I"},
    { Smoke: "obK3TvoWR_I"},
  ];


  /**
 * Busca y reproduce un video relacionado con el clima obtenido.
 * @param {string} climaObtenido - Clima obtenido del objeto de datos.
 */
function buscarVideo(climaObtenido){
      
    //   let climaObtendi = "lluvioso";
      let videoId = null;
      let climaEncontrado = climas.find(clima => Object.keys(clima)[0] === climaObtenido);
      if (climaEncontrado) {
        videoId = Object.values(climaEncontrado)[0];
      } else {
        console.log("No se encontró un clima con ese nombre.");
      }
    const contenedorIframe = document.querySelector(".contenedor-iframe");      

      const iframe = document.createElement("iframe");
      iframe.id = "player";
      iframe.width = "300";
      iframe.height = "400";
      iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;

      contenedorIframe.appendChild(iframe);

}