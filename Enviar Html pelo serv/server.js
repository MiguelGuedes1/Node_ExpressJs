// Criar servidor apenas com Core Module(modulos nativos do node.js) http

const http=require("http")


const servidor=http.createServer((req,res) => {
    res.statusCode=200
    res.setHeader('Content-Type','text/html')
    res.end('<h1>Texto enviado por html</h1>')
 
})

servidor.listen(3250,()=>{
    console.log(`Servidor a rodar na porta 3250`)
})