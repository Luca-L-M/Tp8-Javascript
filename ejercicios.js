//1

function CalculadoraEdad(){
    const result = document.getElementById('resultados');

    let fecha = prompt('Ingrese su fecha de macimiento (año-mes-dia)');
    let username = prompt("Ingrese su nombre");
    let fechaArr = fecha.split('-')
    console.log(fechaArr[0])
    let edad = 0;
    let Hoy = new Date()
    edad = Hoy.getFullYear() - fechaArr[0]
    let mes = Hoy.getMonth() +1
    let dia = Hoy.getDate()
    if( fechaArr[1] >= mes && fechaArr[2] > dia){ edad = edad -1;}
    result.innerHTML = `Hola ${username}, tenes ${edad} años`;
}

//2

function TirandoFruta()
{
    const result = document.getElementById('resultados');

    const buscar = prompt("Ingrese una fruta a buscar: ")
    let bool = false;
    const frutas = ["Melon", "Mandarina", "Naranja", "Arandano", "Uva", "Pera", "Sandia", "Durazno", "Banana", "Manzana"];
    for(fruta of frutas)
    {
        if(buscar.toLowerCase() === fruta.toLowerCase()) {bool = true;}
    }
    if(bool) {result.innerHTML = `Si, tenemos ${buscar}.`;}
    else {result.innerHTML = `No, no tenemos ${buscar}.`;}
}

//3

function ComparandoObjetosYDatos()
{
    const result = document.getElementById('resultados')

    if(10 == '10') {result.innerHTML = "a: son iguales <br/>"}
    else {result.innerHTML = "a: no son iguales <br/>"}
    if(10 === '10') {result.innerHTML += "b: son iguales <br/>"}
    else {result.innerHTML += "b: no son iguales <br/>"}
    result.innerHTML += ("c: es tipo: " + typeof(10.6) + "<br/>")
    if(1 == true){result.innerHTML += "d: 1 puede usarse como bool <br/>"}
    else{result.innerHTML += "d: no sirve para nada <br/>"}
}

//4

function YoObjeto()
{
    const result = document.getElementById('resultados');
    result.innerHTML = null;

    const ciudad = {
        nombre: "chernovil",
        fechaFundacion: 1897-7-13,
        poblacion: 100000,
        extension: 1200
    }
    for(let element in ciudad)
    {
        result.innerHTML += `${element}: ${ciudad[element]} <br/>`;
    }
}

//5

function DobleElementos()
{
    const result = document.getElementById('resultados');

    const array = prompt('Ingrese una lista de numeros separados por una coma (sin espacios)');
    let num = array.split(',')
    let devolver = new Array();
    for (let i = 0; i < num.length; i++) {devolver.push(num[i]*2);}
    result.innerHTML = num + "<br/>";
    result.innerHTML += devolver;
}
//6

function TrianguloAsteriscos()
{
    const result = document.getElementById('resultados');
    result.innerHTML = null;

    let ast='*'
    for(let i=1;i<=5;i++)
    {
       result.innerHTML += ast + "<br/>";
       ast +='*'
    }
    let guion = '-'
    ast = '*'
    let a = 1
    for(let i = 4; i>=0; i--)
    {
        result.innerHTML += guion.repeat(i) + ast.repeat(a) + guion.repeat(i) + "<br/>";
        a += 2
    }
}
//7

function NombresA()
{
    const result = document.getElementById('resultados');
    
    const array = prompt('Ingrese una lista de nombres separados por una coma (sin espacios)')
    const nombres = array.split(',')
    let devolver = new Array()
    for (let i = 0; i < nombres.length; i++)
    {
        if(nombres[i].charAt(0) == 'a')
        {
            devolver.push(nombres[i])
        }
    }
    result.innerHTML = devolver;
}
//8

function ReemplazarPalabra()
{
    const result = document.getElementById('resultados');

    const string = prompt('Ingrese una cadena de texto')
    const buscar = prompt('Ingrese la parte del texto que quiere reemplazar')
    const reem = prompt('Ingrese la cadena por la que quiere reemplazar')
    const devolver = string.replace(buscar, reem)
    result.innerHTML = devolver;
}
//9

function CortarPalabra()
{
    const result = document.getElementById('resultados');

    const string = prompt('Ingrese una cadena de texto')
    const num = prompt('Ingrese el numero de caracteres que quiere conservar')
    const devolver = string.slice(0,num)
    result.innerHTML = devolver;
}
//10

function separarcadena()
{
    const result = document.getElementById('resultados');
    
    const string = prompt('Ingrese una lista de palabras separadas por una coma (sin espacios)')
    const devolver = string.replaceAll(',', '-')
    result.innerHTML = devolver;
}
//11

function CalculadoraRecaudos()
{
    const result = document.getElementById('resultados');

    const array = prompt(`Ingrese una lista de productos separados con ',' con sus precios separados con ':' (ejem: pizza:15.50,hamburguesa:10.50)`)
    const productos = array.split(',')
    let devolver = 0
    for (let i = 0; i < productos.length; i++)
    {
        let precio = productos[i].split(':')
        devolver += parseFloat(precio[1])
    }
    result.innerHTML = devolver;
}