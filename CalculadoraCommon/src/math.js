function sumar (a,b){
    return a+b;
}
function restar (a,b){
    return a-b;
}
function multiplicar (a,b){
    return a*b;
}
function dividir (a,b){
     if (b !== 0) {
        return a/b;
    } else {
        return "Error: division por cero";
    }
}

module.exports = {
    sumar, restar, multiplicar, dividir
}