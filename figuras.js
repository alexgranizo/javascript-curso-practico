// Dimensiones
let dimensionGlobal;
let figuraGlobal;
function getDimension(dimension) {
  if (dimension == "área") {
    dimensionGlobal = "área";
  } else if (dimension == "perímetro") {
    dimensionGlobal = "perímetro";
  }
  let word = document.getElementById("word_dimension");

  let area = document.getElementById("dimension");
  let figura = document.getElementById("figuras");
  area.style.display = "none";
  figura.style.setProperty("display", "block");

  word.innerHTML = dimension;

  return dimension;
}

function getFigure(figure) {
  let word = document.getElementById("word_figure");
  let word_two = document.getElementById("word_dimension1");
  let input = document.getElementById("input-figure");
  let figuras = document.getElementById("figuras");
  figuras.style.setProperty("display", "none");
  input.style.setProperty("display", "block");
  figuraGlobal = figure;
  word.innerHTML = figure;
  word_two.textContent = dimensionGlobal;
  formValidation(figuraGlobal, dimensionGlobal);
  return figure;
}

// Validación de forms

function formValidation(figure, dimension) {
  if (figure == "Cuadrado" && dimension == "área") {
    let formSquare = document.getElementById("formSquareArea");
    formSquare.style.setProperty("display", "block");
  } else if (figure == "Cuadrado" && dimension == "perímetro") {
    let formSquare = document.getElementById("formSquarePerimeter");
    formSquare.style.setProperty("display", "block");
  } else if (figure == "Triángulo" && dimension == "área") {
    let formTriangle = document.getElementById("formTriangleArea");
    formTriangle.style.setProperty("display", "block");
  } else if (figure == "Triángulo" && dimension == "perímetro") {
    let formTriangle = document.getElementById("formTrianglePerimeter");
    formTriangle.style.setProperty("display", "block");
  } else if (figure == "Circulo" && dimension == "área") {
    let formCircle = document.getElementById("formCircleArea");
    formCircle.style.setProperty("display", "block");
  }
  // switch (figure) {
  //   case "Cuadrado":
  //     let formSquare = document.getElementById("formSquare");
  //     formSquare.style.setProperty("display", "block");
  //     break;
  //   case "Triángulo":
  //     let formTriangle = document.getElementById("formTriangle");
  //     formTriangle.style.setProperty("display", "block");
  //     break;
  //   case "Círculo":
  //     let formCircle = document.getElementById("formCircle");
  //     formCircle.style.setProperty("display", "block");
  //     break;
  //   case "Rectángulo":
  //     let formRectangle = document.getElementById("formRectangle");
  //     formRectangle.style.setProperty("display", "block");
  //     break;
  // }
}

// cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}

// triangulo
console.group("Triángulo");
// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 5;
// const baseTriangulo = 3;
// const alturaTriangulo = 4.5;

// console.log(
//   "Los lados del triangulo son: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );
// console.log("La altura del triángulo mide: " + alturaTriangulo + " cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + " cm²");
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return base * altura;
}

console.groupEnd();

console.group("Círculo");

// //radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + " cm");

// //diámetro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es: " + diametroCirculo + " cm");

// //PI
// const PI = Math.PI;
// console.log("PI es: " + PI);

// // Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

// //Área
// const areaCirculo = radioCirculo * radioCirculo * PI;
// console.log("El área del círculo es: " + areaCirculo + " cm²");
function perimetroCirculo(diametroCirculo) {
  return diametroCirculo * Math.PI;
}
function areaCirculo(radioCirculo) {
  return (radioCirculo * radioCirculo) / Math.PI;
}

console.groupEnd();

//OPERACIONES
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadradoPerimetro");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadradoArea");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
function calcularAreaTriángulo() {
  const input_one = document.getElementById("inputTrianguloBase");
  const input_two = document.getElementById("inputTrianguloAltura");
  const value_one = input_one.value;
  const value_two = input_two.value;

  const area = areaTriangulo(value_one, value_two);
  alert(area);
}
function calcularPerimetroTriángulo() {
  const input_base = document.getElementById("inputTrianguloBasePerimetro");
  const input_lado_uno = document.getElementById("inputTrianguloLadoUno");
  const input_lado_dos = document.getElementById("inputTrianguloLadoDos");
  const value_base = parseInt(input_base.value);
  const value_lado_uno = parseInt(input_lado_uno.value);
  const value_lado_dos = parseInt(input_lado_dos.value);
  const perimetro = perimetroTriangulo(
    value_lado_uno,
    value_lado_dos,
    value_base
  );
  alert(perimetro);
}
function calcularAreaCirculo() {
  const input_radio = document.getElementById("inputCirculoRadio");
  const value = input_radio.value;

  const area = areaCirculo(value);
  alert(area);
}
