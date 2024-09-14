
const http=require('http')
const express=require('express')
const path=require('path')
const{Server}=require('socket.io')
const app=express()
const server=http.createServer(app)
const io=new Server(server)
io.on("connection",(soket)=>{

  soket.on('user-massage',(message)=>{
   io.emit('message',message)

  })
})
app.use(express.static(path.resolve("./public")))
app.get("/",(req,res)=>{
  
  return res.sendFile("./public/index.html")
})





server.listen(5000,()=>{
console.log('server on')

})















// const express=require("express")
// const router=require("./router/auth-router")
// const conectedDb=require("./skima/db")
// const app=express()
// app.use(express.json())
// app.use("app/auth",router)

// app.get("/",(req,res)=>{

//   res.send("Hello-world")
  
// })

// conectedDb().then(()=>{



// app.listen(5000,()=>{
//   console.log("ok")
// })

// })



