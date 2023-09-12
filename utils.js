function CallPrompt(msg){
    let result = prompt(msg);
    let seguir = false;
    while(seguir = false){
        let response = prompt(`Estas seguro que quieres ingresar ${result} como valor`)
    }
    return result
}