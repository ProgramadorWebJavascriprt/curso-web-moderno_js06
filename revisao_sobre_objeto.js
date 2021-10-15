console.log('curso de javascript web moderno/Objeto:Revisão sobre Objeto;') //terça-feira,18/05/2021;15:00:00 h +|-
// coleção dinâmica de pares chaves/valores
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)
delete produconsole.log('curso de javascript web moderno/Função:Closures;') //segunda-feira,17/05/2021;21:05:00 h +|-to.preco
delete produto['marca do produto']
console.log(produto)
const carro = {
    modelo: 'A4',
    valor: 890000,
    proprietario:{
        nome: 'John',
        idade: 36,
        endereco: {
            logradouro:'Rua ABC',
            numero: 1023
        }
    },
    condutores:[ {
        mome: 'André Luis',
        idade: 28,
    },{
        nome: 'Luis André',
        idade: 29,
    }],
    calcularValorSeguro: function(){
        //...
    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario'] ['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)
//delete carro.condutores
delete carro.proprietario.endereco
console.log(carro)
console.log(carro.proprietario)
console.log(carro.condutores.length)
