console.log('curso de javascript web moderno/Objeto:JSON vs Objeto;') //quarta-feira,18/05/2021;22:17:27 h +|-
/*
 JSON é bastante usado em sistemas...
 É amplamente usada;
 É um forma de dados;
 Ele respeita um padrão
*/ 
const obj = {a: 1, b: 2,c: 3, soma() {return a + b + c } }
console.log(JSON.stringify(obj))
//console.log(JSON.parse("{a: 1, b: 2,c: 3}"))
//console.log(JSON.parse("{'a': 1,'b': 2,'c': 3}"))
console.log(JSON.parse('{"a": 1, "b":2 ,"c": 3 }'))
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))
