let txt1 = "abcdefghijklmn"

let procura = txt1.search("h")

console.log(procura)

let txt2 = "Posso comer bananas o dia todo"

console.log(txt2.slice(12, -11))

let txt3 = "Olá, mundo"

let troca = txt3.replace("Olá", "Bem vindo")

console.log(troca)

let txt4 = "Olá, mundo"

let maisculos = txt4.toUpperCase()

console.log(maisculos)

let txt5 = "Olá, mundo"

let minusculos = txt5.toLowerCase()

console.log(minusculos)

let txt6 = "Posso comer bananas o dia todo"

console.log(txt6.length)

let str1 = "Hello"
let str2 = "World!"

console.log(`${str1}, ${str2}`)

const fruits = ["Banana", "Orange", "Apple", "Kiwi"]

console.log(fruits.sort())

const fruits2 = ["Banana", "Orange", "Apple"]

 fruits2.push("Uva", "Caju", "Kiwi ")

console.log(fruits2)

const fruits3 = ["Banana", "Orange", "Apple"]

fruits3.unshift("Pera", "Manga")

fruits3.pop()

console.log(fruits3)
