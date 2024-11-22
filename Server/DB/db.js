const mongoose=require('mongoose')

const Connection=async()=>{
    const Url='mongodb://db-service:27017'
    try{
        await mongoose.connect(Url,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log("Database connected successfully")
    }catch(error){
        console.log('Error whiles connecting Database')
    }
}

module.exports=Connection;