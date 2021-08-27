// cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + " cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: " + areaCuadrado + " cm²");

function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

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
