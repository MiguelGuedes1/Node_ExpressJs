// Criar servidor apenas com Core Module(modulos nativos do node.js) http

const http=require("http")


const servidor=http.createServer((req,res) => {
    res.write("Servidor a rodar ")
    res.end()
})

servidor.listen(3250,()=>{
    console.log(`Servidor a rodar na porta 3250`)
})