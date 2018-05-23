// https://medium.com/@raphalima8/arrow-functions-declaração-funcionamento-escopos-e-o-valor-de-this-9cb6449bca31
// http://www.raphaelfabeni.com.br/es6-arrow-functions/
// https://udgwebdev.com/quando-nao-usar-arrow-functions/
// let func = x => x * x;                  
// sintaxe de concise body. O "return" é implícito

// let funct = (x, y) => { return x + y; }; 
// Em um função com block body, é necessário um "return" explícito

// console.log(func(2));
// console.log(funct(2,3));
// Uma arrow function vazia retorna undefined
// let empty = () => {};

// (() => "foobar")() // returns "foobar" 

// let simples = a => a > 15 ? 15 : a; 
// console.log(simples(16)); // 15
// console.log(simples(10)); // 10


// let complexo = (a, b) => {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }


// console.log(empty);
// console.log(complexo(13,2));

// function Exemplo(parametro) {
//     this.parametro = parametro;
// }
// Exemplo.prototype.exemploArray = function (vetor) {
//   'use strict';
//     return vetor.map(function (elemento) {
//         return this.parametro + elemento;
//     });
// };

// function Exemplo(param) {
//     this.param = param;
//   }
//   Exemplo.prototype.exemploArray = function (vetor) {
//     var that = this; // Este é o ponto!
//     return vetor.map(function (elem) {
//       return that.param + elem;
//     });
//   };

// function Exemplo(param) {
//     this.param = param;
//   }
//   Exemplo.prototype.exemploArray = function (vetor) {
//     return vetor.map(function (elem) {
//       return that.param + elem;
//     }, this); // --> Segundo parâmetro (this) passado como argumento para a função map.
//   };


// function Exemplo(param) {
//     this.param = param;
//   }
//   Exemplo.prototype.exemploArray = function (vetor) {
//     return vetor.map(function (elem) {
//       return that.param + elem;
//     }.bind(this)); // --> função bind(this) feita na função map.
//   };


// function Exemplo(param) {
//     this.param = param;
//   }
//   Exemplo.prototype.exemploArray = function (vetor) {
//     return vetor.map( elem => this.param + elem )
//   };


// Rode esses exemplos no browser
// let exemplo1 = {
//     f1: function() {
//       console.log(this);
//       let f2 = function() {
//         console.log(this);
//       }
//       f2();
//     }
//   }
//   exemplo1.f1();

// let exemplo2 = {
//     f1: () => {
//       console.log(this);
//       let f2 = () => console.log(this);
//       f2();
//     }
//   }
//   exemplo2.f1();


//Função somar
// let soma = (a,b) =>{
//    return a + b;
// };

// console.log("Minha primeira funcão");
// console.log(soma(3,7));

// let soma2 = () =>{
//     let n1, n2;
//     return n1+n2;
// }

// console.log("Minha Segunda função");
// console.log(soma2(2,4));


// Sem arrow
var oldWay = function(name, nickname) {
    return 'My name is ' + nickname + ', ' + name;
  };
  
  console.log( oldWay('James Bond', 'Bond') );
  // My name is Bond, James Bond


//   Com arrow
let newWay = (name, nickname) => {
    return 'My name is ' + nickname + ', ' + name;
  };
  
  console.log( newWay('James Bond', 'Bond') );
  // My name is Bond, James Bond

//   Sem arrow functions.

var one = function(what) {
  return 'I ' + what + ' you';
};

console.log( one('hate') );
// I hate you


// Com arrow functions.
var oneNew = what => 'I ' + what + ' you';

console.log( oneNew('hate') );
// I hate you


// Escopo
// Sem arrow functions.

var sandwich = {
  bread: 'integral',
  cheese: 'white',
  
  prepare: function() {
    return 'I want a sandwich with ' + this.bread + ' bread and ' + this.cheese + ' cheese';
  },
  
  make: function() {
    var that = this; // (◕︵◕)
    window.setTimeout( function () {
      console.log( that.prepare() );
    }, 100 );
  }
  
};

// sandwich.make();
// I want a sandwich with integral bread and white cheese
// Com arrow functions.

let newSandwich = {
  bread: 'integral',
  cheese: 'white',
  
  prepare: function() {
    return 'I want a sandwich with ' + this.bread + ' bread and ' + this.cheese + ' cheese';
  },
  
  make: function() {
    window.setTimeout( () => console.log(this.prepare()), 100 );
  }
  
};

// newSandwich.make();
// I want a sandwich with integral bread and white cheese

// Exemplo com map
// Sem arrow functions.

var sample = [1, 2, 3, 4, 5];

var double = sample.map(function(item) {
  return item * 2;
});

// console.log(double);
// [2, 4, 6, 8, 10]
// Com arrow functions.

let samples = [1, 2, 3, 4, 5];

let newDouble = samples.map(item => item * 2);

// console.log(newDouble);
// [2, 4, 6, 8, 10]

