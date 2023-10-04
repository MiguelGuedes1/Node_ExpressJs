
const fs = require("fs")
const http=require("http")


const servidor=http.createServer((req,res) => {

   fs.readFile("C:\Users\lilia\Documents\Node_ExpressJs\enviar_htlm_externo\mensagem.html",function(error,data)  {
    if(error){
        console.log(error)
    }
  res.writeHead(200,{'Content-Type':'text/html'})
  res.write(data)
  return res.end()

   })
})

servidor.listen(3250,()=>{
    console.log(`Servidor na porta 3250 de html externo`)
})
