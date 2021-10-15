console.log('curso de javascript web moderno/Objeto:Herança #02;') //quarta-feira,18/05/2021;14:39:10 h +|-
// Cadeia de protótipos (prototype chain)
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__:pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
const carro = {
    velAtual:0,
    velMaxAberrações:200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }
    },
     status(){
           return `${this.velAtual}km/h de ${this.velMax}km/h`
     }

}
const ferrari = {
    modulo: 'F40',
    velMax:324
}
const volvo ={
modulo:'V40',
status(){
    return `${this.modelo}: ${super.status()}`
  }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())



