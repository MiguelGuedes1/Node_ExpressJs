const express=require("express")
const Router=express.Router()
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


Router.get("./add",(req,res) => {
    res.sendFile(`${caminho_base}/usuario.html`)
})

Router.post("./save",(req,res) => {
    console.log(req.body)

    res.sendFile(`${caminho_base}/usuario.html`)
})

Router.get("./login",(req,res)=>{
    res.send("pagina de login do servidor express")
})

module.exports=Router