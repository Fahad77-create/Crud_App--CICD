const express=require('express')
const user = require('./DB/Schema')
const Schema=require('./DB/Schema')
const Routes=express.Router()

Routes.post('/', async(req,res)=>{
    const user=await req.body
    const newUser=new Schema(user)
    try{
        newUser.save()
        console.log('Saved')
    }catch(err){
        console.log(err)
    }
})

Routes.get('/', async(req,res)=>{
    try{
        const showUser=await Schema.find({})
        console.log('Fetched')
        res.status(200).json(showUser)
    }catch(err){
        console.log(err)
    }
})+

Routes.get('/edit/:id', async (req,res)=>{
    try{
        const findUser=await Schema.find({_id:req.params.id})
        console.log(findUser)
        res.status(200).json(findUser)
    }catch(err){
        console.log(err)
    }
})

Routes.put('/edit/:id', async(req,res)=>{
    const editUser=await req.body
    const updatedUsr=new Schema(editUser)
    try{
       await Schema.updateOne({_id:req.params.id},updatedUsr)
       console.log("done!")
    }catch(err){
        console.log(err)
    }
})

Routes.delete('/:id', async(req,res)=>{
    const id=req.body
    console.log(id)
    try{
       await Schema.deleteOne({_id:req.params.id})
       console.log("delete")
    }catch(err){
        console.log(err)
    }
})
module.exports=Routes