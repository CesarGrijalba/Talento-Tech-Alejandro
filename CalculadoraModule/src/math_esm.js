 export function sumar (a,b){
    return a+b;
}
export function restar (a,b){
    return a-b;
}
export function multiplicar (a,b){
    return a*b;
}
export function dividir (a,b){
     if (b !== 0) {
        return a/b;
    } else {
        return "Error: division por cero";
    }
}
