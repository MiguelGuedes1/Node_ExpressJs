const filesystem=require("fs")

const num1=2
const num2=4

filesystem.readFile("./Intro/PrimeiroPrograma/dados.txt",'utf-8',(error,data) => {
    if(error){
        console.log(error)
    }

    console.log(data)
})

console.log(`A soma entre o ${num1} e o ${num2} é ${num1+num2}`)