let btn = document.getElementById("btn");
let dato1: string = document.getElementById("dato1");
let dato2: string = document.getElementById("dato2");
let dato3: string = document.getElementById("dato3");
let dato4: string = document.getElementById("dato4");

btn.addEventListener("click", () => {
  let vuelta1: number = Number(dato1.value);
  let vuelta2: number = Number(dato2.value);
  let vuelta3: number = Number(dato3.value);
  let vuelta4: number = Number(dato4.value);
  let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
  console.log("el tiempo total es ", tiempoTotal);
  let promedio: number = tiempoTotal / 4;
  console.log("el tiempo promedio es ", promedio);
});
