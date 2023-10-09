const express=require("express")
const app=express()

//RENDERIZAR UMA ROTA COM HTML
const path=require("path")
const caminho_base=path.join(__dirname,'templates')

// Forma de tratar os dados enviados pelo usuario

app.use(
    express.urlencoded({
    extended:true,
}),
)

app.use(express.json())  // usado para converter um dado JSON em um objecto

//utilizar css
app.use(express.static("public"))


app.get("/users/add",(req,res) => {
    res.sendFile(`${caminho_base}/usuario.html`)
})

app.post("/users/save",(req,res) => {
    console.log(req.body)

    res.sendFile(`${caminho_base}/usuario.html`)
})

app.get("/login",(req,res)=>{
    res.send("pagina de login do servidor express")
})


//RENDERIZAR UMA ROTA COM HTML
app.get("/",(req,res)=>{
    res.sendFile(`${caminho_base}/index.html`)
})





app.listen(3002,() => {
    console.log("Servidor iniciado na porta 3002")
})