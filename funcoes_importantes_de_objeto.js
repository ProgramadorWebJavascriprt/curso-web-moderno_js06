console.log('curso de javascript web moderno/Objeto:Funções Importantes de Objeto ;') //terça-feira,18/05/2021;22:25:00 h +|-
const pessoa = {
    nome: 'Heloisa',
    idade: 16,
    peso: 65
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
Object.entries(pessoa).forEach (([chave, valor]) => {
   console.log(`${chave}:${valor}`)  
})
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/1996'
}) 
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
// Object.assign (ECMASCript 2015)
const dest = { a: 1 }
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const Obj = Object.assign(dest, o1, o2)
Object.freeze(Obj)
Obj.c = 1234
console.log(Obj)
