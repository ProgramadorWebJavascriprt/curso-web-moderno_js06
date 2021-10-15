console.log('curso de javascript web moderno/Objeto:Herança #04;') //quarta-feira,18/05/2021;15:24:10 h +|-
function MeuObjeto(){}
console.log(MeuObjeto.prototype)
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__=== obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)
MeuObjeto.prototype.nome  = 'André Luis'
MeuObjeto.prototype.falar = function() {
    console.log(`Boa tarde!Meu nome é ${this.nome}!!!`)
}
obj1.falar()
obj2.nome = 'Luis André '
obj2.falar()

const obj3 = {}
obj3.__proto__= MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()
// resumindo a loucura...
console.log((new MeuObjeto).__proto__=== MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__=== Object.prototype)
console.log(Object.prototype.__proto__)

