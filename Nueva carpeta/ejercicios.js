//CalculadoraDeEdad(prompt("Ingrese su fecha de macimiento (año-mes-dia)"));
//TirandoFruta(prompt("Ingrese una fruta a buscar: "));
//ComparandoObjetosYDatos();
YoObjeto();

//1

function CalculadoraDeEdad(fecha){
    let fechaArr = fecha.split('-')
    console.log(fechaArr[0])
    let edad = 0;
    let Hoy = new Date();
    edad = Hoy.getFullYear() - fechaArr[0];
    let mes = Hoy.getMonth() +1;
    let dia = Hoy.getDate();
    if( fechaArr[1] >= mes && fechaArr[2] > dia){ edad = edad -1;}
    console.log(edad);0
}

//2

function TirandoFruta(result){
    let bool = false;
    const frutas = ["Melon", "Mandarina", "Naranja", "Arandano", "Uva", "Pera", "Sandia", "Durazno", "Banana", "Manzana"];
    for(fruta of frutas){
        console.log(fruta);
    }
    for(fruta of frutas){
        if(result === fruta){bool = true;}
    }
    if(bool){console.log(`Si, tenemos ${result}.`)}
        else {console.log(`No, no tenemos esa ${result}.`)}
}

//3

function ComparandoObjetosYDatos(){
    if(10 == '10'){console.log("si")}
    else {console.log("no")}
    if(10 === '10'){console.log("si")}
    else {console.log("no")}
    console.log(typeof(10.6))
    if(1 == true){console.log("que 1 puede usarse como bool")}
    else{"que no sirve para nada"}
}

//4

function YoObjeto(){
    const ciudad = {
        nombre: "chernovil",
        fechaFundacion: 1897-7-13,
        poblacion: 100000,
        extension: 1200
    }
    for(let element in ciudad){
        console.log(`${element}: ${ciudad[element]}`)
    };
}

//5
//6
//7
//8
//9
//10
//11