// Codigo para cuadrado
//console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los Lados del cuadrado miden: " + ladoCuadrado+"cm");

function perimetroCuadrado (lado){ 
    return lado * 4;
};

function areaCuadrado (lado){ 
    return lado * lado;
};


//console.log("El perimetro del cuadrado es: " + perimetroCuadrado +"cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
//console.groupEnd();


// Codigo para triangulo
/*console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
*

console.log(
    "Los Lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo
    +"cm"
);*/

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
/*
//const alturaTriangulo = 5.5;
console.log("La Altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo +"cm");


const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();
*/

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


/*
// Codigo para circulo
console.group("Círculoss");

//radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
*/
// Pi
const PI = Math.PI;

console.log("Pi es: " + PI);
// Circunsferencia
function diametroCirculo(radio) {
    return radio * 2;
} 
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//const perimetroCirculo = diametroCirculo * PI;

//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

/*
// Área
const areaCirculo= (radioCirculo*radioCirculo)*PI; 

console.log("El area circulo es: " + areaCirculo + "cm^2");

console.groupEnd();*/