console.log('curso de javascript web moderno/Objeto:Evitando Modificações;') //quarta-feira,18/05/2021;21:29:27 h +|-
// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99,  tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)
// Object.seal
const pessoa = {nome: 'Juliana' , idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva' // adicionar não
delete pessoa.nome // deletar não
pessoa.idade = 29  // consegue alterar
console.log(pessoa)
// Object.freeze = selado + valores constantes
