//04 PRÁTICA ILHAS GROWDEV 30/10/2023 | DESPERTAR.DEV | Carla Silva

/*Contextualização do desafio:
As Ilhas Growdev formam um reino independente nos mares do Pacífico.
Como é um reino recente, a sociedade é muito influenciada pela
informática. A moeda oficial é a GrowCoin; existem notas de GC$ 50,00,
GC$ 10,00, GC$ 5,00 e GC$ 1,00. Vocês foram contratados para ajudar na
programação dos caixas automáticos de um grande banco das Ilhas
Growdevs.

Tarefa:
Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
um certo número inteiro de GrowCoins.
Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
desejado pelo cliente, determine o número de cada uma das notas
necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00 */

let valor = 125
let valorSacado = 125

let nota50 = 0
let nota10 = 0
let nota5 = 0
let nota1 = 0

while(valorSacado !== 0) {

    if (valorSacado >= 50 ) {
    valorSacado -= 50
    nota50++

} else if(valorSacado >=10){
    valorSacado -= 10
    nota10++

} else if (valorSacado >= 5){
    valorSacado -= 5
    nota5++

} else {
    valorSacado -= 1
    nota1++
}
}

document.write(`Valor sacado: R$${valor}<br><br>`)
document.write(`GC$ 50,00 -> ${nota50}<br><br>`)
document.write(`GC$ 10,00 -> ${nota10}<br><br>`)
document.write(`GC$ 5,00 -> ${nota5}<br><br>`)
document.write(`GC$ 1,00 -> ${nota1}<br><br>`)