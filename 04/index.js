let capital = 1_000;
let tempo = 5;
let juros = 0.125;

let montante = capital*((1 + juros)**tempo);

console.log(`O valor de ${capital} sobre o juros de ${juros*100}% durante ${tempo} meses é de: R$${montante.toFixed(2)}`);