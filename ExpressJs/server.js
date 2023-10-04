const express=require("express")
const app=express()

//RENDERIZAR UMA ROTA COM HTML
const path=require("path")
const caminho_base=path.join(__dirname,'templates')

app.get("/",(req,res)=>{
    res.sendFile(`${caminho_base}/index.html`)
})
//RENDERIZAR UMA ROTA COM HTML



app.get("/login",(req,res)=>{
    res.send("pagina de login do servidor express")
})

app.listen(3001,() => {
    console.log("Servidor iniciado na porta 3001")
})