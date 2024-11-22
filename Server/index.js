const { json, urlencoded } = require('express')
const express=require('express')
const cors=require('cors')
const Routes=require('./Routes')
const Connection=require('./DB/db')

const app=express()
app.use(json())
app.use(urlencoded({extended:false}))
app.use(cors())
app.use('/',Routes)

Connection()
app.listen(5000,()=>console.log("Server started"))