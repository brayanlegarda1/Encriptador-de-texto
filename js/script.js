let ingresoTexto = document.getElementById("ingresoTexto");
let botonEncriptar = document.getElementById("botonEncriptar");
let botonDesencriptar = document.getElementById("botonDesencriptar");
let botonCopiar = document.getElementById("botonCopiar");
let mensajeFinal = document.getElementById("mensajeFinal");
const muneco = document.getElementById("muneco");
rightInf = document.getElementById("rightInf");
right = document.getElementById("right");

let remplazar = [
  ["e", "enter"],
  ["o", "ober"],
  ["i", "imes"],
  ["a", "ai"],
  ["u", "ufat"],
];

const remplace = (nuevoValor) => {
  mensajeFinal.innerHTML = nuevoValor;

  muneco.classList.add("oculto");
  ingresoTexto.value = "";
  rightInf.style.display = "none";
  botonCopiar.style.display = "block";
  right.classList.add("ajustar");
  mensajeFinal.classList.add("ajustar");
};

const reset = () => {
  mensajeFinal.innerHTML = "";
  muneco.classList.remove("oculto");

  botonCopiar.style.display = "none";
  right.classList.remove("ajustar");
  mensajeFinal.classList.remove("ajustar");
  ingresoTexto.focus();
};

botonEncriptar.addEventListener("click", () => {
  const texto = ingresoTexto.value.toLocaleLowerCase();
  if (texto != "") {
    function encriptar(nuevoTexto) {
      for (let i = 0; i < remplazar.length; i++) {
        if (nuevoTexto.includes(remplazar[i][0])) {
          nuevoTexto = nuevoTexto.replaceAll(remplazar[i][0], remplazar[i][1]);
        }
      }
      return nuevoTexto;
    }
  } else {
    alert("Ingrese texto a encriptar");
    reset();
  }
  remplace(encriptar(texto));

  mensajeFinal.innerHTML = textoEncriptado;
});

botonDesencriptar.addEventListener("click", () => {
  const texto = ingresoTexto.value.toLocaleLowerCase();

  if (texto != "") {
    function desencriptar(nuevoTexto) {
      for (let i = 0; i < remplazar.length; i++) {
        if (nuevoTexto.includes(remplazar[i][1])) {
          nuevoTexto = nuevoTexto.replaceAll(remplazar[i][1], remplazar[i][0]);
        }
      }
      return nuevoTexto;
    }
  } else {
    alert("Ingrese el texto a desencriptar");
    reset();
  }
  remplace(desencriptar(texto));
});

botonCopiar.addEventListener("click", () => {
  let texto = mensajeFinal;
  texto.select();
  document.execCommand("copy");
  alert("Texto copiado");
  reset();
});
