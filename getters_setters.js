console.log('curso de javascript web moderno/Objeto:Getters / Setters;') //terça-feira,18/05/2021;22:00:00 h +|-
const sequencia = {
    _valor: 1, // convenção
    get valor() {return this._valor++ },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

