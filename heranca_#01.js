console.log('curso de javascript web moderno/Objeto:Herança #01;') //quarta-feira,18/05/2021;14:18:10 h +|-
const ferrari = {
    modelo:'F40',
    velMax: 324
}
const volvo = {
    modelo:'v40',
    velMax: 200
}
console.log(ferrari,__proto__)
console.log(ferrari,__proto__=== Object.prototype)
console.log(volvo,__proto__=== Object.prototype)
console.log(Object.prototype,__proto__=== null)
function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

