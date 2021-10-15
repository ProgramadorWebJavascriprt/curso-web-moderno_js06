console.log('curso de javascript web moderno/Objeto:Herança #05;') //quarta-feira,18/05/2021;15:46:28 h +|-
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())
Array.prototype.first = function(){
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function() {
    return 'Lascou Tudo'
}
console.log('Escola Cod3r'.reverse())
