// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}.

let ClienteOne = {
    Name: 'Ismael',
    Age: 21,
}
let ClienteTwo = {
    Name: 'João',
    Age: 24,
}
console.log(ClienteOne.Name === ClienteTwo.Name)