// // Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// let pesoEmQuilos = 47;
// let alturaEmMetros = 1.74;
// let resultado = calculoIMC(pesoEmQuilos, alturaEmMetros)
// function calculoIMC(pesoEmQuilos, alturaEmMetros){
//     let IMC = pesoEmQuilos / (alturaEmMetros ** 2);
//     return IMC.toFixed(2);
// }
// console.log(resultado)



// // Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// function checarCliqueConsole(){
//     let numero = document.querySelector('input').value;
//     let resultado2 = calcularFatorial(numero);
//     console.log(resultado2);
// }

// function calcularFatorial(numeroEntrada){
//     let fatorial = 1;
//     if (numeroEntrada === 0 || numeroEntrada === 1) return 1;
//     for(let a = 2; a <= numeroEntrada; a++){
//     fatorial *= a;
//     }
//     return fatorial;
// } 

// // Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// function checarCliqueAlert(){
//     let numeroEmDolar = document.querySelector('input').value;
//     let real = conversaoDolarReal(numeroEmDolar);
//     console.log(real);
// }
// function conversaoDolarReal(dolar){
//     let valorEmReal = dolar / 4.8;
//     return valorEmReal.toFixed(2);
// }
// // Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
// let al = 5;
// let la = 5;
// let resultado3 = perimetro(al, la);
// let resultado4 = area(al, la);
// function checarCliquePrompt(){
//     let resultado3 = perimetro();
//     let resultado4 = area();
//     mostrarResultado();
// }
// let t1;
// function alterarTextoNaTela(tag, texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }
// function mostrarResultado(){
//     t1 = `O perimetro calculado é ${resultado3} e a área ${resultado4}.`
//     alterarTextoNaTela('h1', t1);
// }
// function perimetro(altura, largura){
//     let perimetro = altura * 2 + largura *2;
//     return perimetro;
// }
// function area(altura, largura){
//     let area = altura * largura;
//     return area;
// }
// // Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// let pi = 3.14;
// let raio1 = 4;
// function checarCliqueSoma(){
//     let areaCirculo1 = areaCirculo(raio1, pi);  
//     let perimetrocirculo1 = perimetrocirculo(raio1, pi);
//     t1 = `O perimetro calculado é ${areaCirculo1} e a área ${perimetrocirculo1}.`;
//     alterarTextoNaTela('h1', t1);
// }
// function perimetrocirculo(raio, pi){
//     let perimetro2 = 2 * pi * raio;
//     return perimetro2;
// }
// function areaCirculo(raio, pi){
//     let area2 = pi * raio ** 2;
//     return area2;
// }
// // Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
// function tabuada(num){
//     for(let i = 1; i <= 10; i++){
//         let resultado5 = num * i;
//         console.log(resultado5);
//     }
// }
// let num;
// tabuada(num)

// Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = ['dois','1'];
// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaNomes = ['Ana','Jose','Carlos']
// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.