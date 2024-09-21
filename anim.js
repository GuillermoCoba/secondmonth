// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Rise with the morning", time: 25 },
  { text: "You call to me", time: 31 },
  { text: "My thoughts are crawling", time: 38 },
  { text: "You're all I see", time: 44 },
  { text: "I wish I could live without you", time: 49 },
  { text: "But you're a part of me", time: 55 },
  { text: "Wherever I go", time: 62 },
  { text: "You'll always be next to me", time: 65 },
  { text: "Fall into the night", time: 108 },
  { text: "As I gaze into you", time: 114 },
  { text: "Shine so bright", time: 120 },
  { text: "It's all I do", time: 127 },
  { text: "I wish I could live without you", time: 132 },
  { text: "But you're a part of me", time: 136 },
  { text: "Wherever I go", time: 144 },
  { text: "You'll always be next to me", time: 148 },
  { text: "You'll always be next to me", time: 160 },
  { text: "You'll always be next to me", time: 167 },
  { text: "You'll always be next to me", time: 174 },
  { text: "You'll always be next to me", time: 180 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);