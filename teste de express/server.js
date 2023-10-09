const express=require("express")
const app=express()
const path=require("path")

const paths=path.join(__dirname,"pages")

//descodificar dados recebidos pelo client em Json
app.use(
    express.urlencoded({
    extended:true,
}),
)

app.use(express.json())
//descodificar dados recebidos pelo client em Json

//Usar css
app.use(express.static("public"))


//Pagina Home
app.get("/",(req,res) => {
    res.send("Esta é a pagina principal")
})

//Pagina Contacto
app.get("/contacto",(req,res) => {
    res.send("Pagina de Contacto")
})


//Pagina Projectos
app.get("/:id",(req,res) => {
    res.sendFile(`${paths}/projectos.html`)
})

//Pagina Login
app.get("/login",(req,res) => {
    res.sendFile(`${paths}/login.html`)
})

//Receber dados da pagina de Login

app.post("/login",(req,res) => {

const nome_usuario=req.body.Nome
const idade_usuario=req.body.Idade
const password=req.body.password

console.log(`O nome do usuario é ${nome_usuario} e tem ${idade_usuario} anos`)

    res.sendFile(`${paths}/login.html`)
})

//middleware para aparecer pagina 404 caso o usuario digite uma rota que nao existe
app.use((req,res,next)=>{
    res.status(404).sendFile(`${paths}/404.html`)
})



app.listen(5000,(req,res) => {
    console.log("Servidor iniciado na porta 5000")
})
