const express=require("express")
const app=express()

//RENDERIZAR UMA ROTA COM HTML
const path=require("path")
const caminho_base=path.join(__dirname,'templates')

//Usar um middleware ( codigo que sao executados no meio de uma accao, ex: verificar login de um usuario)

const checkAuth= (req,res,next) => {

    req.AuthStatus=false

    if(req.AuthStatus){
        console.log("O usuario esta logado")
        next()   // usado para quando a condiçao cair num ponto, ela avançar para a proxima parte do codigo
    }
    else{
        console.log("O usuario nao esta logado")
        next()
    }

}

app.use(checkAuth)


//Usar um middleware ( codigo que sao executados no meio de uma accao, ex: verificar login de um usuario)

app.get("/",(req,res)=>{
    res.sendFile(`${caminho_base}/index.html`)
})
//RENDERIZAR UMA ROTA COM HTML



app.get("/login",(req,res)=>{
    res.send("pagina de login do servidor express")
})

app.listen(3002,() => {
    console.log("Servidor iniciado na porta 3002")
})