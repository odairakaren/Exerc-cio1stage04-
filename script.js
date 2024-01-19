let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber
const restDivSum = sum % 2
const parImpar = restDivSum == 0 ? 'par' : 'impar'
const iguais = firstNumber == secondNumber ? 'igual' : 'diferentes'



alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)
alert(parImpar)
alert('iguais')