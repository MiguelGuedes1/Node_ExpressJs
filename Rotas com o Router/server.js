const express=require("express")
const app=express()

//RENDERIZAR UMA ROTA COM HTML
const path=require("path")
const caminho_base=path.join(__dirname,'./templates')

// Forma de tratar os dados enviados pelo usuario

app.use(
    express.urlencoded({
    extended:true,
}),
)

app.use(express.json())  // usado para converter um dado JSON em um objecto

//utilizar css
app.use(express.static("public"))


// Chamar o modulo que tem as rotas
const rotas=require("./users")

app.use("./users",rotas)


//RENDERIZAR UMA ROTA COM HTML
app.get("/",(req,res)=>{
    res.sendFile(`${caminho_base}/index.html`)
})


//Criar pagina de erro 404 caso o usuario digite uma pagina que nao existe
app.use((req,res,next)=>{
    res.status(404).sendFile(`${caminho_base}/404.html`)
})





app.listen(3002,() => {
    console.log("Servidor iniciado na porta 3002")
})