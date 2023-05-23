function sumar(n1, n2) {
    return n1 + n2;
}

function restar(n1, n2) {
    return n1 - n2;
}

function mult(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    return n1 / n2;
}

const matematicas = {};

matematicas.sumar = sumar; 
matematicas.restar = restar; 
matematicas.mult = mult; 

module.exports = matematicas;
module.exports.dividir = dividir;