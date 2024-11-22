const mongoose=require('mongoose')
const autoIncrement=require('mongoose-auto-increment')


const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

autoIncrement.initialize(mongoose.connection)
userSchema.plugin(autoIncrement.plugin,'user');

const user=mongoose.model('user',userSchema);

module.exports=user